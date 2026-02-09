// --- CONFIGURACIÓN ---
const CONFIG = {
    courtWidth: 8, 
    courtLength: 16,
    netHeight: 1.7,
    gravity: -18, // Gravedad arcade
    ballSpeed: 20, // Más velocidad para tiros más planos
    playerSpeed: 10
};

let state = {
    isPlaying: false,
    mode: 'singles',
    score: { p1: 0, p2: 0 }, // Puntos: 0, 1, 2, 3 (Game)
    server: 1, // 1 = Jugador, -1 = CPU (Se mantiene todo el game)
    servePhase: 'wait', // 'wait', 'toss', 'play', 'pointEnd'
    ballActive: false
};

// Three.js Vars
let scene, camera, renderer;
let playerGroup, opponentGroup, ball, net;
let ballVelocity = new THREE.Vector3();
let landingMarker;
let swipeStart = { x: 0, y: 0, time: 0 };

// Input
let mouse = new THREE.Vector2();
let targetPos = new THREE.Vector3(0, 0, 9);
let isClicking = false;
let canHit = false; // Visual cue

// DOM
const scoreEl1 = document.getElementById('p1-score');
const scoreEl2 = document.getElementById('p2-score');
const infoEl = document.getElementById('game-info');
const shotEl = document.getElementById('shot-display');
const menuEl = document.getElementById('menu');

// --- INICIO ---
function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);
    scene.fog = new THREE.Fog(0x87CEEB, 15, 50);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 5, 14);
    camera.lookAt(0, 0, -2);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.getElementById('game-container').appendChild(renderer.domElement);

    // Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    createCourt();
    createPlayers();
    createBall();
    createLandingMarker();

    // Eventos
    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchmove', onTouchMove, {passive: false});
    document.addEventListener('touchstart', onTouchStart, {passive: false});
    document.addEventListener('touchend', onMouseUp);

    document.getElementById('btn-singles').onclick = () => startGame('singles');
    document.getElementById('btn-doubles').onclick = () => startGame('doubles');

    animate();
}

// --- CREACIÓN DE OBJETOS ---

// Generador de textura de arena simple
function createSandTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#E6C288'; ctx.fillRect(0,0,512,512);
    
    // Ruido
    for(let i=0; i<50000; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? '#D4B078' : '#F0D4AA';
        ctx.fillRect(Math.random()*512, Math.random()*512, 2, 2);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    return tex;
}

// Generador de textura de red
function createNetTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256; canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0)'; // Transparente
    ctx.fillRect(0,0,256,256);
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 4;
    ctx.strokeRect(0,0,256,256);
    
    // Rejilla
    ctx.beginPath();
    for(let i=0; i<=256; i+=32) {
        ctx.moveTo(i,0); ctx.lineTo(i,256);
        ctx.moveTo(0,i); ctx.lineTo(256,i);
    }
    ctx.stroke();
    
    return new THREE.CanvasTexture(canvas);
}

function createCourt() {
    // Arena con textura
    const sandGeo = new THREE.PlaneGeometry(24, 30);
    const sandMat = new THREE.MeshStandardMaterial({ map: createSandTexture(), roughness: 1 });
    const sand = new THREE.Mesh(sandGeo, sandMat);
    sand.rotation.x = -Math.PI / 2;
    sand.receiveShadow = true;
    scene.add(sand);

    // Líneas
    const linesGroup = new THREE.Group();
    const lineMat = new THREE.MeshBasicMaterial({ color: 0x0055AA }); // Azul oscuro para contraste
    const w = CONFIG.courtWidth / 2;
    const l = CONFIG.courtLength / 2;
    const lw = 0.05;

    const left = new THREE.Mesh(new THREE.PlaneGeometry(lw, CONFIG.courtLength), lineMat);
    left.rotation.x = -Math.PI/2; left.position.set(-w, 0.01, 0);
    
    const right = new THREE.Mesh(new THREE.PlaneGeometry(lw, CONFIG.courtLength), lineMat);
    right.rotation.x = -Math.PI/2; right.position.set(w, 0.01, 0);

    const back = new THREE.Mesh(new THREE.PlaneGeometry(CONFIG.courtWidth, lw), lineMat);
    back.rotation.x = -Math.PI/2; back.position.set(0, 0.01, l);

    const front = new THREE.Mesh(new THREE.PlaneGeometry(CONFIG.courtWidth, lw), lineMat);
    front.rotation.x = -Math.PI/2; front.position.set(0, 0.01, -l);

    // Linea de saque (3m)
    const serviceLine = new THREE.Mesh(new THREE.PlaneGeometry(CONFIG.courtWidth, lw), lineMat);
    serviceLine.rotation.x = -Math.PI/2; serviceLine.position.set(0, 0.01, 0); // Centro

    linesGroup.add(left, right, back, front, serviceLine);
    scene.add(linesGroup);

    // Red realista
    const postGeo = new THREE.CylinderGeometry(0.1, 0.1, CONFIG.netHeight, 8);
    const postMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const postL = new THREE.Mesh(postGeo, postMat); postL.position.set(-w-0.5, CONFIG.netHeight/2, 0);
    const postR = new THREE.Mesh(postGeo, postMat); postR.position.set(w+0.5, CONFIG.netHeight/2, 0);
    scene.add(postL, postR);

    const netGeo = new THREE.PlaneGeometry(CONFIG.courtWidth + 1, 1);
    const netTex = createNetTexture();
    const netMat = new THREE.MeshStandardMaterial({ 
        map: netTex, alphaMap: netTex, transparent: true, side: THREE.DoubleSide, color: 0x000000 
    });
    net = new THREE.Mesh(netGeo, netMat);
    net.position.set(0, CONFIG.netHeight - 0.5, 0);
    net.castShadow = true;
    scene.add(net);
    
    // Cinta superior blanca
    const tapeGeo = new THREE.BoxGeometry(CONFIG.courtWidth + 1, 0.1, 0.05);
    const tapeMat = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // Amarillo para contraste
    const tape = new THREE.Mesh(tapeGeo, tapeMat);
    tape.position.set(0, CONFIG.netHeight, 0);
    scene.add(tape);
}

function createPlayerMesh(color) {
    const group = new THREE.Group();

    // Cuerpo
    const bodyGeo = new THREE.CylinderGeometry(0.25, 0.2, 0.7, 8);
    const bodyMat = new THREE.MeshStandardMaterial({ color: color });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.7;
    body.castShadow = true;
    group.add(body);

    // Cabeza
    const headGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xffccaa });
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 1.25;
    head.castShadow = true;
    group.add(head);

    // Brazo derecho (Pivote para raqueta)
    const armGroup = new THREE.Group();
    armGroup.position.set(0.35, 0.9, 0);
    
    const armGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.5);
    const arm = new THREE.Mesh(armGeo, skinMat);
    arm.rotation.z = -0.5; // Inclinado
    arm.position.y = -0.2;
    armGroup.add(arm);

    // Raqueta
    const racketHandleGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.4);
    const racketMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const handle = new THREE.Mesh(racketHandleGeo, racketMat);
    handle.position.set(0.15, -0.5, 0);
    handle.rotation.z = -0.5;
    armGroup.add(handle);

    const racketHeadGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.05, 16);
    const faceMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const face = new THREE.Mesh(racketHeadGeo, faceMat);
    face.rotation.x = Math.PI/2;
    face.rotation.z = -0.5;
    face.position.set(0.25, -0.75, 0);
    armGroup.add(face);

    group.add(armGroup);
    group.userData.arm = armGroup; // Referencia para animar
    group.userData.racketFace = face; // Referencia para cambiar color
    group.userData.swingTime = 0;

    return group;
}

function createPlayers() {
    playerGroup = createPlayerMesh(0x0066ff); // Azul
    playerGroup.position.set(0, 0, 9);
    scene.add(playerGroup);

    opponentGroup = createPlayerMesh(0xff4444); // Rojo
    opponentGroup.position.set(0, 0, -9);
    opponentGroup.rotation.y = Math.PI; // Mirando al jugador
    scene.add(opponentGroup);
}

function createBall() {
    const geometry = new THREE.SphereGeometry(0.12, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xFFD700 }); 
    ball = new THREE.Mesh(geometry, material);
    ball.castShadow = true;
    scene.add(ball);
}

function createLandingMarker() {
    const geometry = new THREE.RingGeometry(0.3, 0.5, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff, transparent: true, opacity: 0.8, side: THREE.DoubleSide });
    landingMarker = new THREE.Mesh(geometry, material);
    landingMarker.rotation.x = -Math.PI / 2;
    landingMarker.visible = false;
    scene.add(landingMarker);
}

// --- LÓGICA DE JUEGO ---

function startGame(mode) {
    state.mode = mode;
    CONFIG.currentWidth = (mode === 'singles' ? 4.5 : 8) / 2;
    state.isPlaying = true;
    state.score = { p1: 0, p2: 0 };
    state.server = 1; // Empieza sacando P1
    updateScoreboard();
    menuEl.style.display = 'none';
    prepareServe();
}

function prepareServe() {
    state.ballActive = false;
    state.servePhase = 'wait';
    ballVelocity.set(0, 0, 0);
    infoEl.innerText = state.server === 1 ? "TU TURNO DE SAQUE (CLICK PARA LANZAR)" : "SAQUE DE LA CPU";
    
    // Posicionar jugadores para saque
    if (state.server === 1) {
        playerGroup.position.set(2, 0, 9); // Detrás de linea
        ball.position.copy(playerGroup.position).add(new THREE.Vector3(0.5, 1.5, -0.5));
    } else {
        opponentGroup.position.set(-2, 0, -9);
        ball.position.copy(opponentGroup.position).add(new THREE.Vector3(-0.5, 1.5, 0.5));
        setTimeout(cpuToss, 1000);
    }
}

function updatePhysics(dt) {
    if (!state.isPlaying) return;

    // --- Movimiento Jugador ---
    // Si está sacando, restringir movimiento
    if (state.server === 1 && state.servePhase !== 'play') {
        targetPos.z = Math.max(8.5, targetPos.z); // Obligar a estar detrás
    } else {
        targetPos.z = Math.max(1, Math.min(10, targetPos.z));
    }
    const limitX = CONFIG.currentWidth + 1;
    targetPos.x = Math.max(-limitX, Math.min(limitX, targetPos.x));

    playerGroup.position.x += (targetPos.x - playerGroup.position.x) * 8 * dt;
    playerGroup.position.z += (targetPos.z - playerGroup.position.z) * 8 * dt;

    // --- Pelota ---
    if (state.servePhase === 'toss') {
        // Fase de lanzamiento de bola (sube y baja)
        ballVelocity.y += CONFIG.gravity * dt;
        ball.position.add(ballVelocity.clone().multiplyScalar(dt));
        
        // Si cae demasiado sin golpear, falta (simplificado: reset)
        if (ball.position.y < 0.5) prepareServe();

    } else if (state.servePhase === 'pointEnd') {
        // Fase de final de punto: la bola rueda o se detiene
        ballVelocity.x *= 0.95;
        ballVelocity.z *= 0.95;
        ballVelocity.y += CONFIG.gravity * dt;
        ball.position.add(ballVelocity.clone().multiplyScalar(dt));
        if (ball.position.y <= 0.15) {
            ball.position.y = 0.15;
            ballVelocity.y = 0;
        }
    } else if (state.servePhase === 'play') {
        // Juego normal
        ballVelocity.y += CONFIG.gravity * dt;
        ballVelocity.x *= 0.99; // Resistencia aire
        ballVelocity.z *= 0.99;
        ball.position.add(ballVelocity.clone().multiplyScalar(dt));

        // Red (Colisión mejorada para evitar glitch)
        if (ball.position.y < CONFIG.netHeight && Math.abs(ball.position.z) < 0.2) {
            // Solo rebotar si va hacia la red (evita que se quede pegada dentro)
            if ((ball.position.z > 0 && ballVelocity.z < 0) || (ball.position.z < 0 && ballVelocity.z > 0)) {
                ballVelocity.z *= -0.5;
                ballVelocity.y *= 0.5;
                // Empujar la bola fuera de la red inmediatamente
                ball.position.z = ball.position.z > 0 ? 0.25 : -0.25;
            }
        }

        // Suelo
        if (ball.position.y <= 0.15) {
            ball.position.y = 0.15;
            handlePointEnd();
        }

        // Predicción de caída (Marker)
        let simPos = ball.position.clone();
        let simVel = ballVelocity.clone();
        let landed = false;
        for(let i=0; i<150; i++) {
            simVel.y += CONFIG.gravity * 0.016;
            simVel.x *= 0.99;
            simVel.z *= 0.99;
            simPos.add(simVel.clone().multiplyScalar(0.016));
            if(simPos.y <= 0.15) {
                landingMarker.position.set(simPos.x, 0.16, simPos.z);
                landingMarker.visible = true;
                landed = true;
                break;
            }
        }
        if(!landed) landingMarker.visible = false;
    } else if (state.servePhase === 'wait') {
        // Bola pegada a la mano
        landingMarker.visible = false;
        if (state.server === 1) {
            ball.position.copy(playerGroup.position).add(new THREE.Vector3(0.5, 1.5, -0.5));
        } else {
            ball.position.copy(opponentGroup.position).add(new THREE.Vector3(-0.5, 1.5, 0.5));
        }
    }

    // --- Visual Cue (Hittable) ---
    // Lógica "In Extremis": Permitir golpear aunque la bola esté un poco detrás o muy rápida
    const dx = Math.abs(ball.position.x - playerGroup.position.x);
    const dz = ball.position.z - playerGroup.position.z; 
    // dz es positivo si la bola está "detrás" del jugador (hacia el fondo de la pista desde la red)
    // Permitimos golpear si está delante (dz > -6) o un poco detrás (dz < 2.5)
    
    const inReachZ = (dz > -6.0 && dz < 2.5); 
    const inReachX = dx < 3.5;
    const inReachY = ball.position.y < 5.0;

    canHit = (state.servePhase !== 'wait' && state.servePhase !== 'pointEnd' && inReachX && inReachZ && inReachY);
    
    // Cambiar color raqueta si puedes golpear
    playerGroup.userData.racketFace.material.color.setHex(canHit ? 0x00ff00 : 0x333333);

    // --- IA ---
    updateAI(dt);
    
    // --- Animaciones ---
    updatePlayerAnimation(playerGroup, dt);
    updatePlayerAnimation(opponentGroup, dt);
}

function updatePlayerAnimation(group, dt) {
    const now = performance.now();
    // Si ha pasado poco tiempo desde el swing, mantener postura (follow through)
    if (now - group.userData.swingTime < 400) return;

    // Volver a posición de espera suavemente
    const readyRotX = -1.5; 
    group.userData.arm.rotation.x += (readyRotX - group.userData.arm.rotation.x) * 5 * dt;
    group.userData.arm.rotation.y += (0 - group.userData.arm.rotation.y) * 5 * dt;
}

function updateAI(dt) {
    let targetX = 0;
    let targetZ = -7;

    if (state.servePhase === 'play') {
        if (ballVelocity.z < 0) { // Bola viene
            targetX = ball.position.x;
            if (ball.position.z > -4) targetZ = -4;
        }
    } else if (state.server === -1 && state.servePhase !== 'play') {
        // Posición de saque CPU
        targetX = -2; targetZ = -9;
    }

    opponentGroup.position.x += (targetX - opponentGroup.position.x) * 12 * dt; // CPU aún más rápida
    opponentGroup.position.z += (targetZ - opponentGroup.position.z) * 12 * dt;

    // Golpeo CPU
    if (state.servePhase === 'play' && ballVelocity.z < 0 && ball.position.z < -2 && ball.position.z > -10) { // Rango Z ampliado
        if (Math.abs(ball.position.x - opponentGroup.position.x) < 3.5) { // Alcance lateral aumentado
            // Detectar revés CPU
            let isBackhand = ball.position.x > opponentGroup.position.x;
            let type = ball.position.y > 2.0 ? 'smash' : (isBackhand ? 'backhand' : 'forehand');
            swingRacket(opponentGroup, type);
            hitBall(opponentGroup, 1);
        }
    }
}

// --- MECÁNICA DE GOLPEO ---

function swingRacket(group, type) {
    group.userData.swingTime = performance.now();
    if (type === 'smash') {
        group.userData.arm.rotation.x = -2.8; // Brazo muy arriba
        group.userData.arm.rotation.y = 0;
    } else if (type === 'backhand') {
        group.userData.arm.rotation.x = -1.8;
        group.userData.arm.rotation.y = 1.5; // Cruzado
    } else { // forehand
        group.userData.arm.rotation.x = -1.8;
        group.userData.arm.rotation.y = -1.0; // Abierto
    }
}

function cpuToss() {
    if (state.server === -1 && state.servePhase === 'wait') {
        state.servePhase = 'toss';
        ballVelocity.set(0, 7, 0); // Lanzar más alto para asegurar smash
        setTimeout(() => {
            swingRacket(opponentGroup, 'smash');
            hitBall(opponentGroup, 1, null, 0.8, true); // Golpear saque (isServe = true)
        }, 600);
    }
}

function onMouseDown(e) {
    if (!state.isPlaying) return;

    // Registrar inicio del swipe
    const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);
    swipeStart = { x: clientX, y: clientY, time: performance.now() };

    // Calcular objetivo del click en la cancha
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const target = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, target);

    if (state.server === 1 && state.servePhase === 'wait') {
        // 1. Lanzar bola (Toss)
        state.servePhase = 'toss';
        ballVelocity.set(0, 6, 0); // Arriba
        infoEl.innerText = "¡GOLPEA AHORA!";
    }
}

function onMouseUp(e) {
    if (!state.isPlaying) return;

    // Calcular fin del swipe
    const clientX = e.clientX || (e.changedTouches ? e.changedTouches[0].clientX : 0);
    const clientY = e.clientY || (e.changedTouches ? e.changedTouches[0].clientY : 0);
    const swipeEnd = { x: clientX, y: clientY, time: performance.now() };

    // Calcular vector y velocidad
    const dx = swipeEnd.x - swipeStart.x;
    const dy = swipeEnd.y - swipeStart.y; // Negativo es hacia arriba (hacia adelante en 3D)
    const dt = swipeEnd.time - swipeStart.time;
    
    // Velocidad en pixeles por milisegundo
    const dist = Math.sqrt(dx*dx + dy*dy);
    const speedPx = dist / dt; 

    // Si el swipe es muy corto, ignorar (evitar clicks accidentales)
    // MODIFICADO: Si es 'toss' (saque) o 'canHit' (bola cerca), permitimos clicks cortos (taps)
    if (dist < 20 && state.servePhase !== 'toss' && !canHit) return;

    if (canHit || (state.server === 1 && state.servePhase === 'toss')) {
        // 2. Golpear
        let isBackhand = ball.position.x < playerGroup.position.x;
        let isServe = (state.server === 1 && state.servePhase === 'toss');
        
        let type = isBackhand ? 'backhand' : 'forehand';
        if (ball.position.y > 2.0) type = 'smash';
        swingRacket(playerGroup, type);
        
        // Mapear Swipe a 3D
        // dx controla X (izquierda/derecha)
        // dy controla Z (profundidad). dy es negativo hacia arriba.
        
        // Factores de sensibilidad
        const targetX = (dx / window.innerWidth) * 15; // Rango lateral
        const targetZ = (dy / window.innerHeight) * 25; // Rango profundidad (invertido luego)

        hitBall(playerGroup, -1, { x: targetX, z: targetZ }, speedPx, isServe);
    }
}

function hitBall(who, dirZ, swipeVector, swipeSpeed = 0.5, isServe = false) {
    state.servePhase = 'play';
    infoEl.innerText = "EN JUEGO";

    // Determinar tipo de golpe
    let shotType = "PUSH";
    
    // Normalizar velocidad del swipe (0.5 es lento, 2.0 es muy rápido)
    // Ajusta estos valores según se sienta el juego
    let powerFactor = Math.min(Math.max(swipeSpeed, 0.2), 2.5); 
    let speed = CONFIG.ballSpeed * (0.6 + powerFactor * 0.4); 

    let targetX, targetZ;
    
    if (isServe) {
        // --- LÓGICA DE SAQUE SIMPLIFICADA ---
        shotType = "SAQUE";
        speed = CONFIG.ballSpeed * 1.4; // Saque rápido
        
        // Dirección lateral basada en el swipe (limitada para no fallar tanto)
        targetX = swipeVector ? swipeVector.x * 2 : (Math.random() - 0.5) * 4; // CPU varía un poco
        targetX = Math.max(-3.5, Math.min(3.5, targetX));
        
        // Profundidad fija al fondo (para asegurar que pase la red y sea tenso)
        targetZ = dirZ * 7.0; 

    } else if (swipeVector) {
        // JUGADOR: Usa el vector del swipe
        
        // Objetivo base: Centro del campo contrario
        let baseZ = dirZ * 7; // Base al fondo para que los taps no se queden cortos
        
        // Aplicar dirección del swipe
        targetX = swipeVector.x * 3; // Amplificar lateral
        
        // CORRECCIÓN DE DIRECCIÓN:
        // Swipe hacia arriba (dy negativo) -> Queremos ir al fondo (Z más negativo si dirZ es -1)
        // swipeVector.z es negativo. Sumarlo a baseZ (-4) nos lleva hacia -7 (Fondo).
        targetZ = baseZ + (swipeVector.z * 2.0); 

        // Limitar a la cancha (con un poco de margen para fallar)
        targetX = Math.max(-6, Math.min(6, targetX));
        
        // Limitar profundidad
        if (dirZ < 0) targetZ = Math.max(-9, Math.min(-1, targetZ));
        else targetZ = Math.min(9, Math.max(1, targetZ));

        // Lógica de golpe basada en input y altura
        if (ball.position.y > 2.2 && powerFactor > 1.2) {
            shotType = "SMASH";
            speed *= 1.3;
        } else if (powerFactor < 0.4) {
            shotType = "DEJADA";
            speed *= 0.5;
            targetZ = dirZ * 2; // Forzar corto
        } else {
            // Golpe normal o globo
            if (ball.position.y < 1.0) {
                shotType = "GLOBO";
                speed *= 0.7; // Más lento para asegurar altura
                // Si es globo, forzamos profundidad si el jugador no lo hizo
                if (Math.abs(targetZ) < 5) targetZ = dirZ * 7;
            } else {
                shotType = "DRIVE";
            }
        }
    } else {
        // CPU: Lógica automática
        targetX = (Math.random() - 0.5) * CONFIG.currentWidth * 1.8;
        targetZ = dirZ * 8;
        if (ball.position.y > 2.2) { shotType = "SMASH"; speed *= 1.6; }
        else if (Math.abs(ball.position.z) < 4 && ball.position.y < 1.5) { 
            shotType = "DEJADA"; speed *= 0.4; targetZ = dirZ * 3; 
        }
        else if (ball.position.y < 1.0) { shotType = "GLOBO"; speed *= 0.7; }
    }

    // Mostrar texto cool si es el jugador
    if (who === playerGroup) showShotText(shotType);

    // Calcular vector
    let distZ = targetZ - ball.position.z;
    let timeToTarget = Math.abs(distZ) / speed;
    
    let velX = (targetX - ball.position.x) / timeToTarget;
    let velZ = (targetZ - ball.position.z) / timeToTarget;
    
    // Calcular Vy
    let targetY = 0.15;
    let velY = (targetY - ball.position.y - (0.5 * CONFIG.gravity * timeToTarget * timeToTarget)) / timeToTarget;

    // --- CORRECCIÓN DE RED AVANZADA ---
    // Calcular altura exacta al pasar por la red (z=0)
    if (Math.abs(ball.position.z) > 2) { // Solo si estamos lejos de la red
        let distToNet = Math.abs(ball.position.z);
        let timeToNet = distToNet / Math.abs(velZ);
        let heightAtNet = ball.position.y + (velY * timeToNet) + (0.5 * CONFIG.gravity * timeToNet * timeToNet);

        // Si no pasa la red (con margen), recalcular VelY para que pase
        if (heightAtNet < CONFIG.netHeight + 0.4) {
             let targetNetHeight = CONFIG.netHeight + 0.6; // Altura segura
             velY = (targetNetHeight - ball.position.y - (0.5 * CONFIG.gravity * timeToNet * timeToNet)) / timeToNet;
        }
    }

    ballVelocity.set(velX, velY, velZ);
}

function showShotText(text) {
    shotEl.innerText = text;
    shotEl.classList.remove('shot-anim');
    void shotEl.offsetWidth; // Trigger reflow
    shotEl.classList.add('shot-anim');
}

// --- PUNTUACIÓN ---

function handlePointEnd() {
    if (state.servePhase === 'pointEnd') return;
    state.servePhase = 'pointEnd';
    
    let winner = 0;
    const isOutX = Math.abs(ball.position.x) > CONFIG.currentWidth;
    const isOutZ = Math.abs(ball.position.z) > CONFIG.courtLength/2;

    if (isOutX || isOutZ) {
        // Si salió, pierde el último que golpeó.
        // Simplificación: Si cae en Z+, la tiró CPU fuera. Si cae en Z-, la tiró P1 fuera.
        winner = (ball.position.z > 0) ? 1 : 2;
    } else {
        // Cayó dentro
        winner = (ball.position.z > 0) ? 2 : 1;
    }

    infoEl.innerText = winner === 1 ? "¡PUNTO PARA TI!" : "PUNTO PARA LA CPU";
    
    setTimeout(() => addPoint(winner), 1500);
}

function addPoint(winner) {
    const points = [0, 15, 30, 40];
    let p1Idx = points.indexOf(state.score.p1);
    let p2Idx = points.indexOf(state.score.p2);

    if (winner === 1) p1Idx++;
    else p2Idx++;

    // Lógica de Game
    if (p1Idx >= 4) {
        alert("¡JUEGO PARA TI!");
        resetGameScore();
        return;
    }
    if (p2Idx >= 4) {
        alert("JUEGO PARA LA CPU");
        resetGameScore();
        return;
    }

    state.score.p1 = points[p1Idx];
    state.score.p2 = points[p2Idx];
    updateScoreboard();
    
    setTimeout(prepareServe, 1000);
}

function resetGameScore() {
    state.score.p1 = 0;
    state.score.p2 = 0;
    state.server *= -1; // Cambiar sacador
    updateScoreboard();
    prepareServe();
}

function updateScoreboard() {
    scoreEl1.innerText = state.score.p1;
    scoreEl2.innerText = state.score.p2;
}

// --- INPUT & UTIL ---
function onMouseMove(e) {
    if (!state.isPlaying) return;
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    updateTargetPos();
}
function onTouchMove(e) {
    e.preventDefault();
    if (!state.isPlaying) return;
    const t = e.touches[0];
    mouse.x = (t.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(t.clientY / window.innerHeight) * 2 + 1;
    updateTargetPos();
}
function onTouchStart(e) { e.preventDefault(); onMouseDown(); }

function updateTargetPos() {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const target = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, target);
    if (target) { targetPos.x = target.x; targetPos.z = target.z; }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    updatePhysics(0.016);
    renderer.render(scene, camera);
}

// Arrancar el juego
init();
