// --- Data Banks (Global) ---
const bankIt = {
  1: [
    {text: 'Il cielo è ___.', answer: 'blu', options: ['rosso','blu','verde']},
    {text: 'La mela è ___.', answer: 'rossa', options: ['gialla','rossa','nera']},
    {text: 'Il cane fa ___.', answer: 'bau', options: ['muu','bau','miao']},
    {text: 'Questo è un ___.', answer: 'gatto', options: ['gatto','cane','casa']},
    {text: 'Il sole è ___.', answer: 'giallo', options: ['giallo','blu','nero']},
    {text: 'Due + due = ___.', answer: 'quattro', options: ['tre','quattro','cinque']},
    {text: 'La mucca dice ___', answer: 'muu', options: ['bau','muu','meow']},
    {text: 'La palla è ___.', answer: 'rossa', options: ['verde','rossa','azzurra']},
    {text: 'Il topo è piccolo e ___', answer: 'piccolo', options: ['grande','piccolo','veloce']},
    {text: 'La neve è ___.', answer: 'bianca', options: ['nera','bianca','rossa']}
  ],
  2: [
    {text: 'Io ho una ___.', answer: 'casa', options: ['macchina','casa','scuola']},
    {text: 'Tu hai un ___.', answer: 'libro', options: ['libro','tavolo','letto']},
    {text: 'Il gatto è sul ___.', answer: 'letto', options: ['letto','fiume','cielo']},
    {text: 'La mela è sul ___.', answer: 'tavolo', options: ['tavolo','albero','cane']},
    {text: 'Il fiore è ___.', answer: 'bello', options: ['brutto','bello','sporco']},
    {text: 'Il pollo dice ___', answer: 'pio', options: ['bau','pio','muu']},
    {text: 'Il rosso e il blu fanno ___', answer: 'viola', options: ['verde','viola','arancione']},
    {text: 'Ho una penna ___', answer: 'blu', options: ['blu','nero','giallo']},
    {text: 'Il cielo di notte è ___', answer: 'scuro', options: ['chiaro','scuro','caldo']},
    {text: 'Il pesce vive in ___', answer: 'acqua', options: ['terra','aria','acqua']}
  ],
  3: [
    {text: 'Noi ___ (essere) amici.', answer: 'siamo', options: ['siamo','siete','sono']},
    {text: 'Voi ___ (avere) libri.', answer: 'avete', options: ['avete','hanno','abbiamo']},
    {text: 'Io ___ (mangiare) la mela.', answer: 'mangio', options: ['mangio','mangi','mangiamo']},
    {text: 'Lui ___ (andare) a scuola.', answer: 'va', options: ['vado','va','vanno']},
    {text: 'Lei ___ (parlare) piano.', answer: 'parla', options: ['parlo','parla','parliamo']},
    {text: 'Noi ___ (giocare) insieme.', answer: 'giochiamo', options: ['giochiamo','giocate','giocano']},
    {text: 'Il libro è ___.', answer: 'aperto', options: ['chiuso','aperto','rotto']},
    {text: 'La finestra è ___.', answer: 'aperta', options: ['chiusa','aperta','pulita']},
    {text: 'Loro ___ (essere) felici.', answer: 'sono', options: ['siamo','siete','sono']},
    {text: 'Tu ___ (scrivere) una lettera.', answer: 'scrivi', options: ['scrive','scrivi','scriviamo']}
  ],
  4: [
    {text: 'Io ___ (volere) un gelato.', answer: 'voglio', options: ['vuoi','voglio','vuole']},
    {text: 'Loro ___ (essere) stanchi.', answer: 'sono', options: ['siete','sono','sei']},
    {text: 'Tu ___ (potere) venire?', answer: 'puoi', options: ['posso','puoi','puo']},
    {text: 'Noi ___ (capire) la lezione.', answer: 'capiscono', options: ['capisco','capisci','capiscono']},
    {text: 'Lei ___ (comprare) il pane.', answer: 'compra', options: ['compro','compra','compriamo']},
    {text: 'Gli studenti ___ (studiare) molto.', answer: 'studiano', options: ['studio','studiano','studiate']},
    {text: 'Oggi ___ (essere) lunedì.', answer: 'è', options: ['sono','è','sei']},
    {text: 'Vogliamo ___ un film.', answer: 'guardare', options: ['correre','guardare','mangiare']},
    {text: 'Il maestro dice: ___', answer: 'silenzio', options: ['silenzio','alzati','siediti']},
    {text: 'Porta la tua ___ domani.', answer: 'penna', options: ['penna','casa','sedia']}
  ],
  5: [
    {text: 'Io ___ (essere) un ragazzo.', answer: 'sono', options: ['sono','sei','è']},
    {text: 'Lei ___ (avere) una penna rossa.', answer: 'ha', options: ['hai','ha','abbiamo']},
    {text: 'Noi ___ (andare) al parco.', answer: 'andiamo', options: ['andate','vanno','andiamo']},
    {text: 'Sei ___ (pronto) per la prova?', answer: 'pronto', options: ['pronto','lento','vecchio']},
    {text: 'Lui ___ (leggere) un libro interessante.', answer: 'legge', options: ['legge','leggo','leggiamo']},
    {text: 'Dove ___ (essere) la scuola?', answer: 'è', options: ['è','sono','siamo']},
    {text: 'Vado a casa con ___ autobus.', answer: 'l', options: ['il','l','lo']},
    {text: 'Preferisco il ___ rosso.', answer: 'gelato', options: ['gelato','cane','libro']},
    {text: 'Il treno parte alle ___', answer: 'otto', options: ['otto','cinque','undici']},
    {text: 'Porta un ___ per scrivere.', answer: 'quaderno', options: ['quaderno','gioco','panino']}
  ],
  6: [
    {text: 'Io ___ (essere) felice.', answer: 'sono', options: ['sono','sei','è']},
    {text: 'Tu ___ (essere) italiano?', answer: 'sei', options: ['sono','sei','siamo']},
    {text: 'Lui ___ (essere) alto.', answer: 'è', options: ['sono','è','sei']},
    {text: 'Noi ___ (essere) in classe.', answer: 'siamo', options: ['siete','siamo','sono']},
    {text: 'Voi ___ (essere) pronti?', answer: 'siete', options: ['siete','sono','siamo']},
    {text: 'Loro ___ (essere) amici.', answer: 'sono', options: ['siamo','siete','sono']},
    {text: 'Io ___ (avere) un libro.', answer: 'ho', options: ['hai','ho','ha']},
    {text: 'Lei ___ (essere) una studentessa.', answer: 'è', options: ['è','sono','siamo']},
    {text: 'Tu ___ (parlare) inglese?', answer: 'parli', options: ['parlo','parli','parla']},
    {text: 'Noi ___ (studiare) insieme.', answer: 'studiamo', options: ['studiate','studiamo','studiano']}
  ]
};

const bankEn = {
  1: [
    {text: 'The sun is ___.', answer: 'yellow', options: ['green','yellow','blue']},
    {text: 'A small cat is a ___', answer: 'kitten', options: ['puppy','kitten','cow']},
    {text: 'Grass is ___.', answer: 'green', options: ['red','green','black']},
    {text: 'The dog says ___', answer: 'woof', options: ['moo','woof','meow']},
    {text: 'One + one = ___', answer: 'two', options: ['three','two','four']},
    {text: 'The apple is ___', answer: 'red', options: ['red','blue','purple']},
    {text: 'Birds can ___', answer: 'fly', options: ['swim','run','fly']},
    {text: 'Baby sheep is a ___', answer: 'lamb', options: ['calf','lamb','cub']},
    {text: 'The sky is ___', answer: 'blue', options: ['blue','black','brown']},
    {text: 'Fish live in ___', answer: 'water', options: ['fire','water','earth']}
  ],
  2: [
    {text: 'I have a ___.', answer: 'book', options: ['book','car','house']},
    {text: 'You have a ___', answer: 'pen', options: ['tree','pen','shoe']},
    {text: 'The cat is on the ___', answer: 'bed', options: ['bed','tree','chair']},
    {text: 'The sun is ___', answer: 'hot', options: ['cold','hot','sweet']},
    {text: 'The flower is ___', answer: 'pretty', options: ['ugly','pretty','loud']},
    {text: 'A cow says ___', answer: 'moo', options: ['meow','woof','moo']},
    {text: 'Red + blue = ___', answer: 'purple', options: ['green','purple','brown']},
    {text: 'I see with my ___', answer: 'eyes', options: ['hands','eyes','feet']},
    {text: 'We read a ___', answer: 'book', options: ['book','song','toy']},
    {text: 'The car is ___', answer: 'fast', options: ['slow','fast','tiny']}
  ],
  3: [
    {text: 'Yo uso mi _______ para escribir. (Lápiz)', answer: 'Pencil', options: ['Eraser','Pencil','Notebook'], hint: 'Utensilio de madera con grafito.'},
    {text: 'Guardo mis útiles en mi _______. (Mochila)', answer: 'Backpack', options: ['Backpack','Sharpener','Book'], hint: 'Bolsa que llevas en la espalda.'},
    {text: 'Borro mis errores con el _______. (Borrador)', answer: 'Eraser', options: ['Pencil case','Colors','Eraser'], hint: 'Lo usas cuando te equivocas al escribir.'},
    {text: 'Saco la punta a mi lápiz con el _______. (Sacapuntas)', answer: 'Sharpener', options: ['Sharpener','Notebook','Backpack'], hint: 'Sirve para afilar el lápiz.'},
    {text: 'Guardo mis colores en la _______. (Cartuchera)', answer: 'Pencil case', options: ['Book','Pencil case','Eraser'], hint: 'Estuche pequeño para lápices y colores.'},
    {text: 'Escribo mis tareas en el _______. (Cuaderno)', answer: 'Notebook', options: ['Notebook','Pencil','Colors'], hint: 'Tiene hojas de papel para escribir.'},
    {text: 'Leo historias en mi _______. (Libro)', answer: 'Book', options: ['Pencil case','Sharpener','Book'], hint: 'Objeto con páginas impresas para leer.'},
    {text: '¿Cómo se dice el número 12 en inglés?', answer: 'Twelve', options: ['Two','Twelve','Twenty'], hint: '10 + 2.'},
    {text: '¿Cómo se dice el número 15 en inglés?', answer: 'Fifteen', options: ['Fifteen','Fifty','Five'], hint: '10 + 5.'},
    {text: 'El número 20 en inglés es:', answer: 'Twenty', options: ['Twelve','Ten','Twenty'], hint: 'Dos decenas.'},
    {text: '¿Qué número sigue después del "Eight"?', answer: 'Nine', options: ['Seven','Nine','Ten'], hint: 'El número antes del diez.'},
    {text: '¿Cómo se escribe 11 en inglés?', answer: 'Eleven', options: ['Eleven','Seven','One-one'], hint: '10 + 1.'},
    {text: 'A mí me gusta el helado. In English: I _______ ice cream.', answer: 'like', options: ['like','likes','no like'], hint: 'Para "I" usamos el verbo en su forma base.'},
    {text: 'No me gusta el jugo. In English: I _______ juice.', answer: "don't like", options: ['like','no like',"don't like"], hint: 'Negación presente simple para "I".'},
    {text: 'A mí me gusta mi escuela. In English: I _______ my school.', answer: 'like', options: ['like','am like','likes'], hint: 'Afirmación simple para "I".'}
  ],
  4: [
    {text: 'Yo me lavo la cara. In English: I _______ my face.', answer: 'wash', options: ['wash','brush','sleep'], hint: 'Acción de limpiar con agua.'},
    {text: 'Yo cepillo mis dientes. In English: I _______ my teeth.', answer: 'brush', options: ['wash','brush','eat'], hint: 'Usas un cepillo para esto.'},
    {text: 'Yo como mi desayuno. In English: I eat _______.', answer: 'breakfast', options: ['dinner','lunch','breakfast'], hint: 'La comida de la mañana.'},
    {text: 'Yo me despierto. In English: I _______ up.', answer: 'wake', options: ['wake','go','clean'], hint: 'Lo contrario de dormir.'},
    {text: 'Yo voy a la escuela. In English: I go to _______.', answer: 'school', options: ['park','school','house'], hint: 'Lugar donde estudias.'},
    {text: '¿Qué día sigue después de "Monday"?', answer: 'Tuesday', options: ['Wednesday','Friday','Tuesday'], hint: 'El segundo día de la semana laboral.'},
    {text: 'Sábado en inglés se dice:', answer: 'Saturday', options: ['Sunday','Saturday','Thursday'], hint: 'Empieza con "S" y es fin de semana.'},
    {text: '¿Cómo se dice "Viernes" en inglés?', answer: 'Friday', options: ['Friday','Free-day','Monday'], hint: 'El día antes del fin de semana.'},
    {text: 'El último día de la semana escolar es:', answer: 'Friday', options: ['Saturday','Friday','Tuesday'], hint: 'Generalmente vamos a la escuela de lunes a...'},
    {text: '¿Qué día está entre Tuesday y Thursday?', answer: 'Wednesday', options: ['Monday','Wednesday','Sunday'], hint: 'El día en el medio de la semana laboral.'},
    {text: 'A mí me gustan los perros. In English: I _______ dogs.', answer: 'like', options: ['like','likes','am like'], hint: 'Para "I" el verbo no lleva "s".'},
    {text: 'A él le gusta el jugo. In English: He _______ juice.', answer: 'likes', options: ['like','likes',"don't like"], hint: 'Para "He" agregamos "s" al verbo.'},
    {text: 'A ella le gusta el gato. In English: She _______ the cat.', answer: 'likes', options: ['likes','like','no like'], hint: 'Para "She" agregamos "s" al verbo.'},
    {text: 'A él le gusta la pizza. In English: He _______ pizza.', answer: 'likes', options: ['like','likes','likes to'], hint: 'Tercera persona singular (He).'},
    {text: 'A ella le gusta cantar. In English: She _______ singing.', answer: 'likes', options: ['like','likes','am likes'], hint: 'Tercera persona singular (She).'}
  ],
  5: [
    {text: 'A mí me gustan las manzanas. In English: I _______ apples.', answer: 'like', options: ['likes','like',"don't likes"], hint: 'Para "I" usamos el verbo en su forma base.'},
    {text: 'A ella le gusta la música. In English: She _______ music.', answer: 'likes', options: ['likes','like',"don't like"], hint: 'Para "She" (ella) agregamos una "s" al verbo.'},
    {text: 'A ellos les gusta correr. In English: They _______ running.', answer: 'like', options: ['likes','like',"doesn't like"], hint: 'Para "They" usamos el verbo en su forma base.'},
    {text: 'No me gusta el brócoli. In English: I _______ broccoli.', answer: "don't like", options: ['no like',"don't like","doesn't like"], hint: 'La negación para "I" es "don\'t".'},
    {text: 'A él no le gustan las arañas. In English: He _______ spiders.', answer: "doesn't like", options: ["doesn't like","don't like",'not likes'], hint: 'La negación para "He" es "doesn\'t".'},
    {text: 'A nosotros nos gustan los videojuegos. In English: We _______ video games.', answer: 'like', options: ['like','likes','are likes'], hint: 'Para "We" usamos el verbo en su forma base.'},
    {text: 'A él le gusta el helado. In English: He _______ ice cream.', answer: 'likes', options: ['like','likes',"don't like"], hint: 'Para "He" (él) agregamos una "s" al verbo.'},
    {text: 'Ayer, nosotros jugamos fútbol. In English: Yesterday, we _______ soccer.', answer: 'played', options: ['play','played','playied'], hint: 'El pasado regular termina en "-ed".'},
    {text: 'Mi mamá cocinó una torta. In English: My mom _______ a cake.', answer: 'cooked', options: ['cooked','cooks','cookied'], hint: 'Pasado del verbo "cook".'},
    {text: 'El niño caminó a la escuela. In English: The boy _______ to school.', answer: 'walked', options: ['walk','walks','walked'], hint: 'Pasado del verbo "walk".'},
    {text: 'Yo visité a mi abuela. In English: I _______ my grandma.', answer: 'visited', options: ['visited','visit','visiting'], hint: 'Pasado del verbo "visit".'},
    {text: 'Vimos una película anoche. In English: We _______ a movie last night.', answer: 'watched', options: ['watch','watched','watches'], hint: 'Pasado del verbo "watch".'},
    {text: 'Él limpió su cuarto ayer. In English: He _______ his room yesterday.', answer: 'cleaned', options: ['cleans','clean','cleaned'], hint: 'Pasado del verbo "clean".'},
    {text: 'Ellos escucharon música en el bus. In English: They _______ to music.', answer: 'listened', options: ['listened','listen','listening'], hint: 'Pasado del verbo "listen".'},
    {text: 'Ella bailó en la fiesta. In English: She _______ at the party.', answer: 'danced', options: ['dance','danced','dances'], hint: 'Pasado del verbo "dance" (termina en e, solo agrega d).'}
  ],
  6: [
    {text: 'It is 7:20. In English, we say it is...', answer: 'seven twenty', options: ['seven twelve','seven twenty','seventeen twenty'], hint: 'Recuerda: primero la hora (7), luego los minutos (20).'},
    {text: 'It is 9:15. In English, we say it is...', answer: 'nine fifteen', options: ['nine fifteen','nine fifty','night fifteen'], hint: '15 minutos se dice "fifteen".'},
    {text: 'It is 3:40. In English, we say it is...', answer: 'three forty', options: ['thirteen forty','three fourteen','three forty'], hint: 'Tres (3) y cuarenta (40).'},
    {text: 'It is 11:10. In English, we say it is...', answer: 'eleven ten', options: ['twelve ten','eleven ten','eleven twelve'], hint: 'Once (11) y diez (10).'},
    {text: 'It is 5:35. In English, we say it is...', answer: 'five thirty-five', options: ['five thirty-five','fifty-five thirty','five thirteen-five'], hint: 'Cinco (5) y treinta y cinco (35).'},
    {text: 'It is 8:05. In English, we say it is...', answer: 'eight zero-five', options: ['eight fifty','eighteen five','eight zero-five'], hint: 'Para minutos del 01 al 09 usamos "zero" u "oh".'},
    {text: '¿Cómo se dice el número 28 en inglés?', answer: 'twenty-eight', options: ['twenty-eight','twelve-eight','eighty-two'], hint: 'Veinte (20) + Ocho (8).'},
    {text: '¿Cómo se dice el número 45 en inglés?', answer: 'forty-five', options: ['fourteen-five','forty-five','fourty-five'], hint: 'Cuarenta (40) + Cinco (5).'},
    {text: '¿Cómo se dice el número 62 en inglés?', answer: 'sixty-two', options: ['sixty-two','six-two','sixteen-two'], hint: 'Sesenta (60) + Dos (2).'},
    {text: '¿Cómo se dice el número 100 en inglés?', answer: 'one hundred', options: ['one hundred','one thousand','ten ten'], hint: 'Una centena.'},
    {text: '¿Cómo se dice el número 73 en inglés?', answer: 'seventy-three', options: ['seventeen-three','seventy-three','seven-three'], hint: 'Setenta (70) + Tres (3).'},
    {text: '¿Cómo se dice el número 12 en inglés?', answer: 'twelve', options: ['twenty','twelve','two-teen'], hint: 'El número que sigue al 11.'},
    {text: 'A mí me gusta el chocolate. En inglés se dice: I _______ chocolate.', answer: 'like', options: ['likes','like',"don't like"], hint: 'Para "I" el verbo va en su forma base.'},
    {text: 'No me gusta la pizza. En inglés se dice: I _______ pizza.', answer: "don't like", options: ["don't like",'no like',"doesn't like"], hint: 'Negativo presente simple para "I".'},
    {text: 'A mí me gustan las manzanas. En inglés se dice: I _______ apples.', answer: 'like', options: ['am like','liking','like'], hint: 'Afirmativo simple para "I".'}
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const sections = {
    home: document.getElementById('home'),
    langMenu: document.getElementById('langMenu'),
    expand: document.getElementById('expandSection'),
    grades: document.getElementById('grades'),
    practice: document.getElementById('practice'),
    evaluations: document.getElementById('evaluationsMenu')
  };

  // Buttons & Interactive
  const homeBtn = document.getElementById('homeBtn');
  const backFromLangMenu = document.getElementById('backFromLangMenu');
  const backFromGrades = document.getElementById('backFromGrades');
  const backFromEvaluations = document.getElementById('backFromEvaluations');
  const backFromPractice = document.getElementById('backFromPractice');
  const backFromExpand = document.getElementById('backFromExpand');
  
  const themeBtn = document.getElementById('themeBtn');
  const studyBtn = document.getElementById('studyBtn');
  const expandBtn = document.getElementById('expandBtn');
  const eval1Btn = document.getElementById('eval1Btn');
  const eval1Info = document.getElementById('eval1Info');
  const eval1Tooltip = document.getElementById('eval1Tooltip');
  const eval2Info = document.getElementById('eval2Info');
  const eval2Tooltip = document.getElementById('eval2Tooltip');
  const eval3Info = document.getElementById('eval3Info');
  const eval3Tooltip = document.getElementById('eval3Tooltip');

  // Eval UI Elements
  const evalUI = document.getElementById('evalUI');
  const evalCounter = document.getElementById('evalCounter');
  const evalProgress = document.getElementById('evalProgress');
  const scoreCorrect = document.getElementById('scoreCorrect');
  const scoreIncorrect = document.getElementById('scoreIncorrect');
  const hintBox = document.getElementById('hintBox');
  const hintBtn = document.getElementById('hintBtn');
  const hintText = document.getElementById('hintText');
  
  const phraseEl = document.getElementById('phrase');
  const optionsEl = document.getElementById('options');
  const checkBtn = document.getElementById('checkBtn');
  const nextBtn = document.getElementById('nextBtn');
  const feedbackEl = document.getElementById('feedback');
  const progressEl = document.getElementById('progress');
  const practiceTitle = document.getElementById('practice-title');
  const langCards = document.querySelectorAll('.lang-card');
  const gradeBtns = document.querySelectorAll('.grade-btn');

  // --- State ---
  let state = {
    language: null,
    grade: null,
    questions: [],
    idx: 0,
    selected: null,
    selectedBtn: null,
    correctCount: 0,
    incorrectCount: 0
  };

  // --- Navigation Functions ---
  const hideAll = () => Object.values(sections).forEach(s => s && s.classList.add('hidden'));

  function showHome() {
    hideAll();
    sections.home.classList.remove('hidden');
    state = { language: null, grade: null, questions: [], idx: 0, selected: null, selectedBtn: null, correctCount: 0 };
  }

  function showLangMenu(lang) {
    if (lang) state.language = lang;
    hideAll();
    sections.langMenu.classList.remove('hidden');
    const label = state.language === 'it' ? 'Italiano' : 'Inglés';
    document.getElementById('langMenuTitle').textContent = `Opciones — ${label}`;
  }

  function showGrades() {
    hideAll();
    sections.grades.classList.remove('hidden');
    // Aesthetic: colorize based on lang
    sections.grades.classList.remove('lang-it', 'lang-en');
    sections.grades.classList.add(state.language === 'it' ? 'lang-it' : 'lang-en');
    const label = state.language === 'it' ? 'Italiano' : 'Inglés';
    document.getElementById('grades-title').textContent = `Selecciona tu grado — ${label}`;
  }

  function showEvaluations() {
    hideAll();
    sections.evaluations.classList.remove('hidden');
    
    // Actualizar contenido del tooltip según el grado
    const tooltip = document.getElementById('eval1Tooltip');
    if (tooltip) {
      let topics = '';
      let date = 'Viernes 30 de Enero';

      if (state.grade === 6) {
        topics = 'What time is it?<br>Numbers and Years<br>I like it';
      } else if (state.grade === 5) {
        topics = 'I like<br>Past tense';
      } else if (state.grade === 4) {
        date = 'Jueves 29 de Enero';
        topics = 'Morning activities<br>Days of the week<br>I like';
      } else if (state.grade === 3) {
        date = 'Jueves 29 de Enero';
        topics = 'Numbers<br>School Objects<br>I like';
      }
      
      tooltip.innerHTML = `
        <strong>Fecha:</strong><br>${date}<br><br>
        <strong>Temas:</strong><br>${topics}<br><br>
        <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
      `;
    }
  }

  function showPractice(grade) {
    state.grade = Number(grade);
    const bank = state.language === 'it' ? bankIt : bankEn;
    state.questions = shuffleArray((bank[state.grade] || []).slice());
    state.idx = 0;
    state.selected = null;
    state.selectedBtn = null;
    state.correctCount = 0;
    state.incorrectCount = 0;

    hideAll();
    sections.practice.classList.remove('hidden');
    if (backFromPractice) backFromPractice.classList.remove('hidden');
    
    const langLabel = state.language === 'it' ? 'Italiano' : 'Inglés';
    practiceTitle.textContent = `Práctica — ${grade}º Grado (${langLabel})`;
    
    // Toggle Eval UI
    const isEval1 = state.language === 'en' && (state.grade === 6 || state.grade === 5 || state.grade === 4 || state.grade === 3);
    if (isEval1) {
      evalUI.classList.remove('hidden');
      hintBox.classList.remove('hidden');
      progressEl.classList.add('hidden'); // Hide default progress
      if (scoreCorrect) scoreCorrect.textContent = '0';
      if (scoreIncorrect) scoreIncorrect.textContent = '0';
    } else {
      evalUI.classList.add('hidden');
      hintBox.classList.add('hidden');
      progressEl.classList.remove('hidden');
    }

    renderQuestion();
    updateProgress();
  }

  function showExpand() {
    hideAll();
    sections.expand.classList.remove('hidden');
  }

  // --- Logic Functions ---
  function renderQuestion() {
    const q = state.questions[state.idx];
    if (!q) {
      showSummary();
      return;
    }
    phraseEl.textContent = q.text;
    optionsEl.innerHTML = '';
    
    const isEval1 = state.language === 'en' && (state.grade === 6 || state.grade === 5 || state.grade === 4 || state.grade === 3);

    // Hint Logic
    if (isEval1 && hintText && hintBtn) {
      hintText.classList.add('hidden');
      hintText.textContent = q.hint || 'No hay pista disponible.';
      hintBtn.onclick = () => hintText.classList.remove('hidden');
    }

    // Shuffle options
    const currentOptions = shuffleArray(q.options.slice());
    
    currentOptions.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'opt';
      btn.textContent = opt;
      
      btn.addEventListener('click', () => selectOption(btn, opt));
      optionsEl.appendChild(btn);
    });

    checkBtn.disabled = true;
    checkBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    nextBtn.disabled = true;
    
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';
    nextBtn.classList.add('hidden');
  }

  function selectOption(btn, opt) {
    // Remove selected from others
    document.querySelectorAll('.opt').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.selected = opt;
    state.selectedBtn = btn;
    checkBtn.disabled = false;
  }

  function verifyAnswer() {
    const q = state.questions[state.idx];
    if (!state.selected) return;
    
    const correct = state.selected === q.answer;
    
    // Disable all options
    document.querySelectorAll('.opt').forEach(b => b.disabled = true);
    checkBtn.classList.add('hidden');

    if (correct) {
      state.selectedBtn.classList.add('correct');
      state.correctCount++;
      if (scoreCorrect) scoreCorrect.textContent = state.correctCount;
      feedbackEl.textContent = '¡Correcto!';
      feedbackEl.classList.add('good');
      
      // Auto advance on correct
      setTimeout(() => {
        nextQuestion();
      }, 1200);
    } else {
      // Incorrect logic: Highlight correct, show manual next
      state.selectedBtn.classList.add('incorrect');
      state.incorrectCount++;
      if (scoreIncorrect) scoreIncorrect.textContent = state.incorrectCount;
      
      // Find and highlight correct answer
      Array.from(document.querySelectorAll('.opt')).forEach(b => {
        if (b.textContent === q.answer) b.classList.add('correct');
        // Check text content or innerHTML for ABC labels
        if (b.textContent.includes(q.answer)) b.classList.add('correct');
      });

      feedbackEl.textContent = `Incorrecto. La respuesta correcta es: ${q.answer}`;
      feedbackEl.classList.add('bad');
      
      // Show manual next button on error
      nextBtn.classList.remove('hidden');
      nextBtn.disabled = false;
    }
  }

  function nextQuestion() {
    state.idx++;
    state.selected = null;
    state.selectedBtn = null;
    if (state.idx >= state.questions.length) {
      showSummary();
    } else {
      renderQuestion();
      updateProgress();
    }
  }

  function showSummary() {
    phraseEl.textContent = `¡Práctica finalizada!`;
    optionsEl.innerHTML = `<div class="summary-score">Has acertado ${state.correctCount} de ${state.questions.length}</div>`;
    feedbackEl.textContent = '';
    progressEl.textContent = '';
    checkBtn.classList.add('hidden');
    nextBtn.classList.add('hidden');
    if (hintBox) hintBox.classList.add('hidden');
    if (backFromPractice) backFromPractice.classList.add('hidden');

    const back = document.createElement('button');
    back.className = 'check-btn';
    back.textContent = 'Volver a Grados';
    back.style.marginTop = '20px';
    back.addEventListener('click', showGrades);
    optionsEl.appendChild(back);
  }

  function updateProgress() {
    progressEl.textContent = `Pregunta ${state.idx + 1} / ${state.questions.length}`;
    
    // Update Eval UI Progress
    if (state.language === 'en' && (state.grade === 6 || state.grade === 5 || state.grade === 4 || state.grade === 3)) {
      if (evalCounter) evalCounter.textContent = `${state.idx + 1}/${state.questions.length}`;
      if (evalProgress) {
        evalProgress.innerHTML = '';
        for (let i = 0; i < state.questions.length; i++) {
          const seg = document.createElement('div');
          seg.className = 'progress-segment';
          if (i < state.idx) seg.classList.add('filled');
          // Optional: highlight current?
          evalProgress.appendChild(seg);
        }
      }
    }
  }

  function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // --- Event Listeners ---
  
  // Home & Lang Selection
  if (homeBtn) homeBtn.addEventListener('click', showHome);
  
  langCards.forEach(card => {
    card.addEventListener('click', () => {
      showLangMenu(card.dataset.lang);
    });
  });

  // Menu Options
  if (studyBtn) studyBtn.addEventListener('click', showGrades);
  if (expandBtn) expandBtn.addEventListener('click', showExpand);

  // Grade Selection
  gradeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const g = btn.dataset.grade;
      if (state.language === 'en' && (g === '6' || g === '5' || g === '4' || g === '3')) {
        state.grade = Number(g);
        showEvaluations();
      } else {
        showPractice(g);
      }
    });
  });

  // Back Buttons
  if (backFromLangMenu) backFromLangMenu.addEventListener('click', showHome);
  if (backFromGrades) backFromGrades.addEventListener('click', () => showLangMenu());
  if (backFromEvaluations) backFromEvaluations.addEventListener('click', showGrades);
  if (backFromPractice) backFromPractice.addEventListener('click', showGrades);
  if (backFromExpand) backFromExpand.addEventListener('click', () => showLangMenu());

  // Evaluation Buttons
  if (eval1Btn) eval1Btn.addEventListener('click', () => showPractice(state.grade));

  // Info Button Logic
  const setupTooltip = (btn, tip) => {
    if (btn && tip) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        tip.classList.toggle('visible');
      });
      document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !tip.contains(e.target)) {
          tip.classList.remove('visible');
        }
      });
    }
  };
  setupTooltip(eval1Info, eval1Tooltip);
  setupTooltip(eval2Info, eval2Tooltip);
  setupTooltip(eval3Info, eval3Tooltip);

  // Exercise Controls
  if (checkBtn) checkBtn.addEventListener('click', verifyAnswer);
  if (nextBtn) nextBtn.addEventListener('click', nextQuestion);

  // Theme Toggle
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
  }

  // Init
  showHome();
});
