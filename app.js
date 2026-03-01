// --- Data Banks (Global) ---
const bankIt = {
  1: {
    1: [
      {text: '¿Cómo se dice "El Perro" en italiano?', answer: 'Il cane', options: ['Il gatto','Il cane',"L'uccello"], hint: 'Es el mejor amigo del hombre.'},
      {text: 'Este animalito maúlla y se dice: _______', answer: 'Il gatto', options: ['Il gatto','Il cane','Il topo'], hint: 'Hace "miao".'},
      {text: '¿Cómo se llama el animalito que vuela entre las nubes?', answer: "L'uccello", options: ['Il cane','Il gatto',"L'uccello"], hint: 'Tiene alas y plumas.'},
      {text: 'Si ves a un grupo de perros en el parque, en italiano dices: _______', answer: 'I cani', options: ['I gatti','I cani','Gli uccelli'], hint: 'Plural de "Il cane".'},
      {text: 'A este animalito "piace volare" (le gusta volar): _______', answer: "L'uccello", options: ['Il cane',"L'uccello",'Il gatto'], hint: 'Vive en nidos.'},
      {text: 'Si tienes cinco dedos en la mano, en italiano dices que tienes: _______', answer: 'Cinque', options: ['Tre','Cinque','Uno'], hint: 'El número de dedos en una mano.'},
      {text: '¿Cómo se dice "Los Gatos" cuando hay más de uno?', answer: 'I gatti', options: ['Il gatto','I gatti','I cani'], hint: 'Plural de "Il gatto".'},
      {text: '¿Cuál de estos animales suele jugar con un hueso (osso)?', answer: 'Il cane', options: ['Il cane',"L'uccello",'Il gatto'], hint: 'Ladra y mueve la cola.'},
      {text: '¿Qué hace "l\'uccello" cuando se mueve por el aire?', answer: 'Vola', options: ['Cammina','Corre','Vola'], hint: 'Acción de moverse por el aire.'},
      {text: '¿Cómo se dice "El Gato" en italiano?', answer: 'Il gatto', options: ['Il cane','Il gatto',"L'uccello"], hint: 'Enemigo de los ratones.'}
    ],
    2: [
      {text: '¿Cómo se dice "La vaca" en italiano?', answer: 'La mucca', options: ['Il pesce', 'La mucca', 'Il cane'], hint: 'Pista: Es el animal grande de la granja que nos da leche. 🐄'},
      {text: '¿Cómo se dice "El pez" en italiano?', answer: 'Il pesce', options: ['Il pesce', 'La mucca', 'Il gatto'], hint: 'Pista: Es el animalito que tiene aletas y vive en el mar. 🐟'},
      {text: '¿Cómo se dice "Animales" en italiano?', answer: 'Gli animali', options: ['Gli animali', 'Le macchine', 'I libri'], hint: 'Pista: Es la palabra general para hablar de seres como el perro o la vaca. 🐾'},
      {text: '¿Qué sonido hace "La mucca"?', answer: 'Muuu', options: ['Bau bau', 'Muuu', 'Miau'], hint: 'Pregunta: ¿Qué sonido hace la vaca? Pista: Es el sonido clásico que escuchamos en el campo. 🐄'},
      {text: '¿Dónde vive "Il pesce"?', answer: 'En el agua', options: ['En el bosque', 'En el agua', 'En una casa'], hint: 'Pregunta: ¿Dónde vive el pez? Pista: Es el lugar donde este animal puede nadar libremente. 🌊'},
      {text: '¿Cuál de estos es un animal?', answer: 'Il pesce', options: ['La mela', 'Il sole', 'Il pesce'], hint: 'Pista: Busca entre las opciones al ser vivo que vive en el mar. 🐠'},
      {text: '¿Qué animal nos da "il latte" (la leche)?', answer: 'La mucca', options: ['La mucca', 'Il pesce', 'El pájaro'], hint: 'Pista: Es el animal grande que pasta y vive en la granja. 🥛'},
      {text: '¿Cómo se llama el animal que tiene escamas y nada?', answer: 'Il pesce', options: ['La mucca', 'Il pesce', 'El conejo'], hint: 'Pista: Su nombre en italiano empieza por la letra "P". 🐟'},
      {text: 'Completa la frase: "La... come l\'erba" (La... come hierba).', answer: 'La mucca', options: ['La mucca', 'Il pesce'], hint: 'Pregunta: ¿Qué animal de la granja come hierba en el campo? Pista: Es el animal que dice "Muuu". 🐄'},
      {text: 'En una pecera (acquario) vive...', answer: 'Il pesce', options: ['La mucca', 'Il pesce', 'El elefante'], hint: 'Pista: Es el único de estos animales que puede respirar bajo el agua. 🐟'}
    ]
  },
  2: {
    1: [
      {text: '¿Cómo se escribe el número "11" en italiano?', answer: 'Undici', options: ['Dieci','Undici','Dodici'], hint: 'Sigue al número 10 (Dieci).'},
      {text: 'Si sumas "Cinque + Tre", el resultado es:', answer: 'Otto', options: ['Sei','Sette','Otto'], hint: 'Cinque (5) + Tre (3) = 8.'},
      {text: '¿Cuál es el nombre del número "14"?', answer: 'Quattordici', options: ['Quattordici','Quindici','Tredici'], hint: 'Viene de Quattro (4) + Dieci (10).'},
      {text: '¿Cómo se dice el número "0" en italiano?', answer: 'Zero', options: ['Uno','Zero','Nove'], hint: 'Representa la nada.'},
      {text: 'El número que sigue después de "Diciassette" es:', answer: 'Diciotto', options: ['Sedici','Diciotto','Diciannove'], hint: 'Diciassette (17) ... Diciotto (18).'},
      {text: '¿Cómo se dice "Lunes" en italiano?', answer: 'Lunedì', options: ['Martedì','Lunedì','Sabato'], hint: 'El primer día de la semana escolar.'},
      {text: 'Es el día que está en medio de la semana (miércoles):', answer: 'Mercoledì', options: ['Mercoledì','Giovedì','Venerdì'], hint: 'El tercer día de la semana.'},
      {text: '¿Cuál es el primer día del fin de semana (sábado)?', answer: 'Sabato', options: ['Domenica','Venerdì','Sabato'], hint: 'El día antes del domingo.'},
      {text: 'El día que comienza con la letra "G" es:', answer: 'Giovedì', options: ['Giovedì','Martedì','Lunedì'], hint: 'Corresponde al Jueves en español.'},
      {text: '¿Cómo se dice "Domingo", el día de descanso?', answer: 'Domenica', options: ['Sabato','Domenica','Venerdì'], hint: 'El día para descansar.'},
      {text: '"Vado a scuola". ¿En qué momento del día ocurre normalmente?', answer: 'Mattina', options: ['Mattina','Notte','Sera'], hint: 'Cuando sale el sol y desayunamos.'},
      {text: 'El momento de la tarde (entre las 12:00 m y las 6:00 pm) se llama:', answer: 'Pomeriggio', options: ['Mattina','Pomeriggio','Sera'], hint: 'Después del almuerzo hasta el atardecer.'},
      {text: '¿Cómo se dice "Noche" (después de las 10:00 pm) cuando vamos a dormir?', answer: 'Notte', options: ['Sera','Pomeriggio','Notte'], hint: 'Cuando está muy oscuro y dormimos.'},
      {text: '"Guardo i cartoni animati" (Veo dibujos animados). Según la guía, esto ocurre en la:', answer: 'Sera', options: ['Mattina','Sera','Pomeriggio'], hint: 'Al final de la tarde, antes de cenar.'},
      {text: '¿Qué palabra usamos para referirnos a la "Mañana" (hasta el mediodía)?', answer: 'Mattina', options: ['Mattina','Notte','Sera'], hint: 'Desde que te despiertas hasta las 12:00.'}
    ],
    2: [
      {text: '¿En qué mes celebramos el inicio de un nuevo año?', answer: 'Gennaio', options: ['Maggio', 'Gennaio', 'Agosto'], hint: 'Es el mes que estrena el calendario y su nombre suena como un "genio" muy puntual. 🗓️'},
      {text: 'Si viajas en un camello por un lugar muy seco y con arena, estás en el...', answer: 'Deserto', options: ['Deserto', 'Montagna', 'Spiaggia'], hint: '¡Cuidado con el sol! Aquí no hay sombra y el agua es un tesoro muy difícil de encontrar. 🌵'},
      {text: '¿Cuál es el último mes del año, cuando llega Papá Noel?', answer: 'Dicembre', options: ['Dicembre', 'Giugno', 'Aprile'], hint: 'Es el mes de los regalos y el frío, y su nombre es casi hermano gemelo del español. 🎄'},
      {text: 'El lugar ideal para usar traje de baño y hacer castillos de arena es la...', answer: 'Spiaggia', options: ['Foresta', 'Spiaggia', 'Montagna'], hint: 'Empieza con "S" y es el sitio favorito de las olas del mar para descansar. 🏖️'},
      {text: 'Es el mes de las flores y las mariposas, justo después de abril.', answer: 'Maggio', options: ['Maggio', 'Marzo', 'Luglio'], hint: 'Suena muy parecido al mes español, pero en italiano tiene una doble "G" muy elegante. 🌸'},
      {text: 'Tarzán vive rodeado de muchísimos árboles y lianas en la...', answer: 'Foresta', options: ['Spiaggia', 'Foresta', 'Deserto'], hint: 'Es un lugar muy verde y denso donde viven los animales más salvajes. 🌳'},
      {text: 'Es el mes de las vacaciones de verano más calurosas del año.', answer: 'Agosto', options: ['Agosto', 'Gennaio', 'Ottobre'], hint: 'Se escribe exactamente igual que en español. ¡Aprovecha el sol! ☀️'},
      {text: 'Si quieres esquiar en la nieve o subir muy alto, debes ir a la...', answer: 'Montagna', options: ['Montagna', 'Spiaggia', 'Deserto'], hint: 'Es un gigante de piedra que toca las nubes con su cima blanca. 🏔️'},
      {text: '¿Qué palabra usamos para hablar de todos los países, océanos y personas de la Tierra?', answer: 'Il mondo', options: ['La terra', 'Il mondo', 'Il mare'], hint: 'Es el conjunto de todo lo que existe en nuestro planeta y rima con "redondo". 🌍'},
      {text: '¿Qué mes viene después de septiembre y rima con "cobre"?', answer: 'Ottobre', options: ['Ottobre', 'Febbraio', 'Maggio'], hint: 'Empieza con la letra "O" y es cuando las hojas de los árboles se vuelven marrones. 🍂'},
      {text: 'Es el mes más cortito de todos, ¡a veces tiene solo 28 días!', answer: 'Febbraio', options: ['Febbraio', 'Aprile', 'Agosto'], hint: 'Es famoso por el día del amor y tiene una doble "B" en su nombre. 🍫'},
      {text: 'En este mes hace mucho calor y es el que sigue después de junio.', answer: 'Luglio', options: ['Marzo', 'Luglio', 'Giugno'], hint: 'Empieza con "L" y es perfecto para comer helado en el verano italiano. 🍦'},
      {text: '¿Qué mes viene después de febrero y antes de abril?', answer: 'Marzo', options: ['Marzo', 'Giugno', 'Dicembre'], hint: 'Es el tercer mes del año y se escribe exactamente igual que en español. 🍀'},
      {text: '¿Qué mes está justo en medio de marzo y mayo?', answer: 'Aprile', options: ['Aprile', 'Settembre', 'Gennaio'], hint: 'Es el cuarto mes del año. Su nombre empieza con la letra "A" y solo tiene seis letras. ☔'},
      {text: '¿Qué mes viene después de mayo y antes de julio?', answer: 'Giugno', options: ['Giugno', 'Dicembre', 'Maggio'], hint: 'Es el sexto mes del año y su nombre empieza con la letra "G". ☀️'}
    ]
  },
  3: {
    1: [
      {text: '¿De qué color es la nieve?', answer: 'Bianco', options: ['Nero', 'Bianco', 'Rosso'], hint: 'Es el color de las nubes.'},
      {text: 'Completa: Mi metto la _______ para ir a la escuela.', answer: 'Maglietta', options: ['Maglietta', 'Braccio', 'Giallo'], hint: 'Prenda de ropa para el torso (camiseta).'},
      {text: 'Señala las dos partes de la cara:', answer: 'Occhio e Bocca', options: ['Gamba e Piede', 'Occhio e Bocca', 'Maglione e Gonna'], hint: 'Ojo y Boca.'},
      {text: '¿Qué color obtienes si mezclas "Giallo" y "Blu"?', answer: 'Verde', options: ['Rosso', 'Verde', 'Viola'], hint: 'El color del césped.'},
      {text: 'Parte del cuerpo que usamos para caminar:', answer: 'Gamba', options: ['Mano', 'Gamba', 'Naso'], hint: 'Pierna.'},
      {text: '¿Cómo se dice "Anaranjado" y "Morado" en italiano?', answer: 'Arancione e Viola', options: ['Rosso e Blu', 'Arancione e Viola', 'Rosa e Grigio'], hint: 'Colores secundarios.'},
      {text: 'Objeto que usamos para cubrir el torso y tiene botones:', answer: 'Camicia', options: ['Pantaloni', 'Camicia', 'Orecchi'], hint: 'Camisa.'},
      {text: '¿De qué color es un árbol (hojas y tronco)?', answer: 'Verde e Marrone', options: ['Blu e Nero', 'Verde e Marrone', 'Rosso e Giallo'], hint: 'Verde y Marrón.'},
      {text: 'Parte del cuerpo donde están los ojos y el pelo:', answer: 'Testa', options: ['Testa', 'Braccio', 'Gamba'], hint: 'Cabeza.'},
      {text: 'Prenda que usan las niñas en las fiestas:', answer: 'Vestito', options: ['Pantaloncini', 'Vestito', 'Maglione'], hint: 'Vestido.'},
      {text: '¿Cuáles son los colores de la bandera de Italia?', answer: 'Verde, Bianco, Rosso', options: ['Giallo, Blu, Rosso', 'Verde, Bianco, Rosso', 'Nero, Bianco, Grigio'], hint: 'Igual que la pizza margarita.'},
      {text: 'Tenemos cinco _______ en cada mano.', answer: 'Dita', options: ['Dita', 'Teste', 'Gambe'], hint: 'Dedos.'},
      {text: 'Si hace frío, me pongo un _______ y una _______.', answer: 'Maglione e Giacca', options: ['Vestito y Gonna', 'Maglione e Giacca', 'Camicia e Pantaloncini'], hint: 'Suéter y Chaqueta.'},
      {text: '¿De qué color es el cielo?', answer: 'Azzurro', options: ['Verde', 'Azzurro', 'Marrone'], hint: 'Azul claro.'},
      {text: 'Usamos los _______ para escuchar música.', answer: 'Orecchi', options: ['Occhi', 'Orecchi', 'Piedi'], hint: 'Orejas.'}
    ],
    2: [
      {text: '¿Cómo se dice "Tacto" (usar las manos) en italiano?', answer: 'Tatto', options: ['Vista', 'Tatto', 'Udito'], hint: 'Es el sentido que usas para sentir los abrazos suaves. Con él sabes si algo está frío o caliente.'},
      {text: '¿Cómo se dice "Gusto" (saborear) en italiano?', answer: 'Gusto', options: ['Olfatto', 'Tatto', 'Gusto'], hint: 'Es el sentido que vive en tu lengua. ¡Ideal para disfrutar de una buena pizza!'},
      {text: '¿Cómo se dice "Olfato" (oler) en italiano?', answer: 'Olfatto', options: ['Olfatto', 'Vista', 'Udito'], hint: 'Es el sentido que usa tu nariz. Te avisa cuando el almuerzo ya está listo.'},
      {text: '¿Cómo se dice "Oído" (escuchar) en italiano?', answer: 'Udito', options: ['Tatto', 'Udito', 'Gusto'], hint: 'Es el sentido que capta el sonido. Sin él, no podrías disfrutar de tus canciones favoritas.'},
      {text: '¿Cómo se dice "Vista" (ver) en italiano?', answer: 'Vista', options: ['Udito', 'Olfatto', 'Vista'], hint: 'Es el sentido de tus ojos. Lo necesitas para poder leer tu libro de aventuras.'},
      {text: 'Si tienes un helado delicioso, ¿qué sentido usas para disfrutarlo?', answer: 'Gusto', options: ['Vista', 'Gusto', 'Udito'], hint: '¿Con qué saboreas el helado? Piensa en la parte de tu cuerpo que saborea el chocolate.'},
      {text: '¿Qué sentido usas para escuchar música con audífonos?', answer: 'Udito', options: ['Udito', 'Tatto', 'Olfatto'], hint: '¿Con qué escuchas la música? Es el mismo que usas cuando el profe te llama en clase.'},
      {text: '¿Cómo se dice el verbo "Comer" en italiano?', answer: 'Mangiare', options: ['Correre', 'Mangiare', 'Pulire'], hint: 'Es la acción de llevar comida a tu boca. Empieza con "M" y rima con "viaje".'},
      {text: '¿Cómo se dice el verbo "Correr" en italiano?', answer: 'Correre', options: ['Dormire', 'Studiare', 'Correre'], hint: 'Es la acción de ir muy rápido con las piernas. Se escribe con doble "R" en el medio.'},
      {text: '¿Cómo se dice el verbo "Jugar" en italiano?', answer: 'Giocare', options: ['Giocare', 'Mangiare', 'Pulire'], hint: 'Es lo que más te gusta hacer en el recreo. Empieza con "G" y es pura diversión.'},
      {text: '¿Cómo se dice el verbo "Limpiar" en italiano?', answer: 'Pulire', options: ['Dormire', 'Pulire', 'Correre'], hint: 'Es la acción de usar la escoba para que todo quede brillante. ¡Ayuda mucho en casa!'},
      {text: '¿Cómo se dice el verbo "Dormir" en italiano?', answer: 'Dormire', options: ['Dormire', 'Studiare', 'Giocare'], hint: 'Es lo que haces de noche en tu cama con los ojos cerrados. Suena casi igualito que en español.'},
      {text: '¿Cómo se dice el verbo "Estudiar" en italiano?', answer: 'Studiare', options: ['Pulire', 'Mangiare', 'Studiare'], hint: 'Es la acción de aprender cosas nuevas en la escuela. Solo le falta la "E" al principio para sonar como en español.'},
      {text: '¿Qué sentido usas para oler una flor en el jardín?', answer: 'Olfatto', options: ['Tatto', 'Vista', 'Olfatto'], hint: '¿Con qué hueles las flores? Es el trabajo principal de tu nariz.'},
      {text: '¿Qué sentido usas para leer un cuento?', answer: 'Vista', options: ['Udito', 'Vista', 'Gusto'], hint: '¿Con qué lees un libro? Lo haces abriendo muy bien los ojos.'}
    ]
  },
  4: {
    1: [
      {text: '¿Cuáles son los colores "Bianco" y "Nero"?', answer: 'Blanco y Negro', options: ['Rojo y Azul', 'Blanco y Negro', 'Verde y Gris'], hint: 'Colores opuestos (luz y oscuridad).'},
      {text: 'Partes de la cara: "Occhi e _______".', answer: 'Orecchi', options: ['Gambe', 'Orecchi', 'Mani'], hint: 'Ojos y Orejas.'},
      {text: '¿Qué ropa es "Camicia e Pantaloni"?', answer: 'Camisa y Pantalones', options: ['Camisa y Pantalones', 'Falda y Polo', 'Chaqueta y Gorra'], hint: 'Ropa común.'},
      {text: '"Ho due _______ e due _______" (Brazos y piernas).', answer: 'Braccia e Gambe', options: ['Braccia e Gambe', 'Mani e Piedi', 'Teste e Nasi'], hint: 'Extremidades superiores e inferiores.'},
      {text: 'Colores de la bandera de Italia: "Verde, Bianco e _______".', answer: 'Rosso', options: ['Blu', 'Rosso', 'Giallo'], hint: 'Rojo.'},
      {text: '"Uso i _______ per camminare" (Uso los pies).', answer: 'Piedi', options: ['Mani', 'Piedi', 'Dita'], hint: 'Pies.'},
      {text: '¿Cómo se dice "Naranja" y "Morado"?', answer: 'Arancione e Viola', options: ['Arancione e Viola', 'Rosa e Blu', 'Grigio e Marrone'], hint: 'Colores de frutas y flores.'},
      {text: '"La _______ e il _______" (La cabeza y el cuello).', answer: 'Testa - Collo', options: ['Mano - Piede', 'Testa - Collo', 'Braccio - Gamba'], hint: 'Parte superior del cuerpo.'},
      {text: 'Prendas para el frío: "Giacca e _______".', answer: 'Maglione', options: ['Maglione', 'Pantaloncini', 'Vestito'], hint: 'Chaqueta y Suéter.'},
      {text: '¿De qué color es la "Erba" (césped)?', answer: 'Verde', options: ['Rosso', 'Verde', 'Giallo'], hint: 'Color de la naturaleza.'},
      {text: '"Le _______ della mano" (Los dedos de la mano).', answer: 'Dita', options: ['Dita', 'Gambe', 'Orecchie'], hint: 'Dedos.'},
      {text: '¿Cómo se dice "Zapato" y "Calcetín"?', answer: 'Scarpa e Calza', options: ['Scarpa e Calza', 'Maglia e Gonna', 'Cappello e Guanti'], hint: 'Lo que usas en los pies.'},
      {text: 'Color "Grigio" es:', answer: 'Gris', options: ['Gris', 'Marrón', 'Púrpura'], hint: 'Mezcla de blanco y negro.'},
      {text: '"Mi metto la _______" (Me pongo la chaqueta).', answer: 'Giacca', options: ['Gonna', 'Giacca', 'Camicia'], hint: 'Prenda de abrigo.'},
      {text: 'En la cabeza tengo "Capelli e _______" (Pelo y orejas).', answer: 'Orecchi', options: ['Orecchi', 'Piedi', 'Mani'], hint: 'Órganos auditivos.'}
    ],
    2: [
      {text: 'Para sentir el abrazo de mamá, usamos el sentido del...', answer: 'Tatto', options: ['Udito', 'Tatto', 'Gusto'], hint: 'Usamos las manos y la piel para este sentido. Es lo que nos hace sentir el calorcito del cariño.'},
      {text: 'Si el niño tiene un balón de fútbol, él quiere...', answer: 'Giocare', options: ['Dormire', 'Giocare', 'Pulire'], hint: 'Es la acción de divertirse con un deporte. Empieza con "G" de gol.'},
      {text: 'Si la niña tiene una escoba y un coleto, ella va a...', answer: 'Pulire', options: ['Pulire', 'Mangiare', 'Studiare'], hint: 'Es la acción de dejar la casa libre de polvo. Dejará todo reluciente.'},
      {text: 'Si el niño está sentado en un escritorio con un libro, él va a...', answer: 'Studiare', options: ['Correre', 'Dormire', 'Studiare'], hint: 'Es la acción de prepararse para un examen. Requiere mucha concentración.'},
      {text: 'Si digo "Io" (Yo) en presente, el verbo es...', answer: 'Mangio', options: ['Mangi', 'Mangio', 'Mangiamo'], hint: 'Es la forma de decir "Yo como" hoy. Termina con la vocal redondita.'},
      {text: 'Si hablas con tu amigo y le dices "Tu" en presente, dices...', answer: 'Mangi', options: ['Mangi', 'Mangiate', 'Mangia'], hint: 'Es la forma de decir "Tú comes". Termina en una vocal muy flaquita.'},
      {text: 'Para ver los colores de un arcoíris, necesitamos la...', answer: 'Vista', options: ['Vista', 'Olfatto', 'Tatto'], hint: 'Es el sentido que nos regala las imágenes del mundo. Se hace a través de los ojos.'},
      {text: 'Si hablamos de "Lui/Lei" (Él/Ella) en presente, el verbo es...', answer: 'Mangia', options: ['Mangiano', 'Mangio', 'Mangia'], hint: 'Es la forma de decir "Él o Ella come". Termina con la vocal "A".'},
      {text: 'Cuando estamos juntos, "Noi" (Nosotros) en presente decimos...', answer: 'Mangiamo', options: ['Mangiamo', 'Mangi', 'Mangiate'], hint: 'Es la forma de decir "Nosotros comemos". Es la palabra más larga del presente.'},
      {text: 'El sentido que capta el perfume de mamá es el...', answer: 'Olfatto', options: ['Tatto', 'Olfatto', 'Udito'], hint: 'Es el experto en detectar aromas. Vive justo en el centro de tu cara.'},
      {text: 'Para decir que ustedes "Voi" comen ahora, usamos...', answer: 'Mangiate', options: ['Mangiano', 'Mangiate', 'Mangiamo'], hint: 'Es la forma plural para ustedes. Termina con las letras "T-E".'},
      {text: 'Para decir que ellos "Loro" comen en este momento, es...', answer: 'Mangiano', options: ['Mangiano', 'Mangia', 'Mangio'], hint: 'Es la forma plural para ellos. Termina con "N-O", como si negaran algo.'},
      {text: 'Si te pones tus zapatos deportivos, es porque vas a...', answer: 'Correre', options: ['Dormire', 'Correre', 'Studiare'], hint: 'Es la acción de moverse a máxima velocidad. ¡Cuidado no te tropiezas!'},
      {text: '¿Cuál es el título del tema 10 ("Mis acciones") en italiano?', answer: 'Le mie azioni', options: ['I Sensi', 'Le mie azioni', 'Il gusto'], hint: 'Son las cosas que hacemos todos los días. Se parece un poco al español.'},
      {text: 'Si ya es de noche y estás en pijama, es hora de...', answer: 'Dormire', options: ['Dormire', 'Mangiare', 'Pulire'], hint: 'Es la acción de ir a soñar con los angelitos. A descansar se ha dicho.'}
    ]
  },
  5: {
    1: [
      {text: '"Il sole è _______ e il cielo è _______".', answer: 'Giallo - Azzurro', options: ['Rosso - Verde', 'Giallo - Azzurro', 'Nero - Bianco'], hint: 'El sol es amarillo y el cielo es azul.'},
      {text: '¿Qué ropa usas para hacer deporte?', answer: 'Pantaloncini e Maglietta', options: ['Vestito', 'Pantaloncini e Maglietta', 'Camicia'], hint: 'Pantalones cortos y camiseta.'},
      {text: '"Uso le _______ per scrivere".', answer: 'Mani', options: ['Gambe', 'Mani', 'Orecchie'], hint: 'Uso las manos para escribir.'},
      {text: '¿De qué color es un "Albero" (árbol)?', answer: 'Verde e Marrone', options: ['Verde e Marrone', 'Blu e Rosso', 'Giallo e Rosa'], hint: 'Hojas verdes y tronco marrón.'},
      {text: '"La _______ è sopra il collo".', answer: 'Testa', options: ['Testa', 'Gamba', 'Mano'], hint: 'La cabeza está sobre el cuello.'},
      {text: '¿Cómo se dice "Vestido" y "Falda"?', answer: 'Vestito e Gonna', options: ['Vestito e Gonna', 'Pantaloni e Polo', 'Giacca e Calze'], hint: 'Ropa femenina.'},
      {text: '"Ho dieci _______ nei piedi".', answer: 'Dita', options: ['Mani', 'Dita', 'Teste'], hint: 'Tengo diez dedos en los pies.'},
      {text: 'Si mezclas "Rosso" y "Giallo" sale:', answer: 'Arancione', options: ['Verde', 'Arancione', 'Viola'], hint: 'Color naranja.'},
      {text: '"Per correre uso le _______".', answer: 'Gambe', options: ['Braccia', 'Gambe', 'Orecchie'], hint: 'Para correr uso las piernas.'},
      {text: '¿Qué prenda tiene botones y es formal?', answer: 'Camicia', options: ['Maglietta', 'Camicia', 'Pantaloncini'], hint: 'Camisa.'},
      {text: '¿De qué color es el "Latte" (leche)?', answer: 'Bianco', options: ['Nero', 'Bianco', 'Blu'], hint: 'Blanco.'},
      {text: '"Sento i suoni con gli _______".', answer: 'Orecchi', options: ['Occhi', 'Orecchi', 'Piedi'], hint: 'Escucho los sonidos con los oídos.'},
      {text: '"L\'uva può essere _______ o verde".', answer: 'Viola', options: ['Viola', 'Azzurra', 'Grigia'], hint: 'La uva puede ser morada o verde.'},
      {text: '"La _______ protegge il corpo dal freddo".', answer: 'Giacca', options: ['Giacca', 'Mano', 'Bocca'], hint: 'La chaqueta protege del frío.'},
      {text: '"Il mio _______ è forte" (Mi cuerpo).', answer: 'Corpo', options: ['Corpo', 'Vestito', 'Colore'], hint: 'Cuerpo.'}
    ],
    2: [
      {text: '¿Con qué sentido disfruto el sabor de una pizza italiana?', answer: 'Gusto', options: ['Olfatto', 'Gusto', 'Vista'], hint: 'Es el sentido experto en lo dulce y lo salado. Funciona con tu lengua.'},
      {text: '¿Con qué sentido escucho el timbre de la escuela?', answer: 'Udito', options: ['Udito', 'Tatto', 'Olfatto'], hint: 'Es el sentido que te avisa que ya es hora de recreo. Funciona con tus orejas.'},
      {text: 'Ayer me comí una manzana. Según la tabla, "Io" en pasado es...', answer: 'Ho mangiato', options: ['Mangio', 'Ho mangiato', 'Mangerò'], hint: 'Es la forma de decir "Yo he comido". Consta de dos palabras y empieza con "H".'},
      {text: 'El año que viene yo comeré pizza. "Io" en futuro es...', answer: 'Mangerò', options: ['Ho mangiato', 'Mangio', 'Mangerò'], hint: 'Es la forma de decir "Yo comeré". Tiene un acento en la última letra.'},
      {text: '¿Con qué sentido sé que la mesa está áspera?', answer: 'Tatto', options: ['Tatto', 'Vista', 'Gusto'], hint: 'Es el sentido que usa tu piel para investigar texturas.'},
      {text: 'Para limpiar mi cuarto uso la acción de...', answer: 'Pulire', options: ['Giocare', 'Pulire', 'Studiare'], hint: 'Es lo que haces para que tu mamá no te regañe por el desorden.'},
      {text: 'Tú comiste mucho ayer. "Tu" en pasado (Passato Prossimo) es...', answer: 'Hai mangiato', options: ['Mangi', 'Hai mangiato', 'Mangerai'], hint: 'Es la forma de decir "Tú has comido". La primera palabra tiene 3 letras y empieza con H.'},
      {text: 'Tú comerás un pastel mañana. "Tu" en futuro (Futuro Semplice) es...', answer: 'Mangerai', options: ['Mangerai', 'Hai mangiato', 'Mangerà'], hint: 'Es la forma de decir "Tú comerás". Termina con las vocales "A-I".'},
      {text: 'Para aprender para el examen de italiano, yo debo...', answer: 'Studiare', options: ['Correre', 'Dormire', 'Studiare'], hint: 'Es la acción de repasar tus apuntes. Te garantiza un 20 en la boleta.'},
      {text: 'Ella comió pasta ayer. "Lui/Lei" en pasado es...', answer: 'Ha mangiato', options: ['Ha mangiato', 'Mangia', 'Mangerà'], hint: 'Es la forma de decir "Ella ha comido". La primera palabra es súper cortita: "Ha".'},
      {text: 'Él comerá más tarde. "Lui/Lei" en futuro es...', answer: 'Mangerà', options: ['Ha mangiato', 'Mangia', 'Mangerà'], hint: 'Es la forma de decir "Él comerá". Lleva una tilde en la última vocal.'},
      {text: 'Nosotros comimos ensalada. "Noi" en pasado es...', answer: 'Abbiamo mangiato', options: ['Mangiamo', 'Abbiamo mangiato', 'Mangeremo'], hint: 'Es la forma de decir "Nosotros hemos comido". La primera palabra es muy larga y empieza con "A".'},
      {text: 'Nosotros comeremos pronto. "Noi" en futuro es...', answer: 'Mangeremo', options: ['Abbiamo mangiato', 'Mangeremo', 'Mangiamo'], hint: 'Es la forma de decir "Nosotros comeremos". Termina en "-remo", como si remaras un bote.'},
      {text: '¿Con qué sentido huelo un pastel recién horneado?', answer: 'Olfatto', options: ['Olfatto', 'Tatto', 'Vista'], hint: 'Es el sentido de tu nariz para detectar cosas ricas.'},
      {text: '¿Qué hago si tengo una pelota y estoy en la cancha?', answer: 'Giocare', options: ['Dormire', 'Giocare', 'Pulire'], hint: 'Es la acción que haces para divertirte con amigos.'},
      {text: 'Ustedes comieron pan. "Voi" en pasado es...', answer: 'Avete mangiato', options: ['Mangiate', 'Avete mangiato', 'Mangerete'], hint: 'Es la forma de decir "Ustedes han comido". La primera palabra es "Avete".'},
      {text: 'Ustedes comerán dulces. "Voi" en futuro es...', answer: 'Mangerete', options: ['Avete mangiato', 'Mangiate', 'Mangerete'], hint: 'Es la forma de decir "Ustedes comerán". Termina en "-rete".'},
      {text: '¿Qué verbo uso para prepararme antes de una carrera de atletismo?', answer: 'Correre', options: ['Correre', 'Dormire', 'Studiare'], hint: 'Es la acción de ser tan rápido como Flash.'},
      {text: 'Ellos comieron frutas. "Loro" en pasado es...', answer: 'Hanno mangiato', options: ['Mangiano', 'Hanno mangiato', 'Mangeranno'], hint: 'Es la forma de decir "Ellos han comido". La primera palabra lleva doble "N".'},
      {text: 'Ellos comerán mañana. "Loro" en futuro es...', answer: 'Mangeranno', options: ['Hanno mangiato', 'Mangiano', 'Mangeranno'], hint: 'Es la forma de decir "Ellos comerán". Termina en "-ranno".'},
      {text: '¿Con qué sentido puedo leer los subtítulos de una película?', answer: 'Vista', options: ['Udito', 'Gusto', 'Vista'], hint: 'Es el sentido de los ojos observadores.'},
      {text: '¿Qué verbo representa cerrar los ojos y descansar en la cama?', answer: 'Dormire', options: ['Dormire', 'Giocare', 'Correre'], hint: 'Es la acción de recargar energías para el día siguiente.'},
      {text: 'Si la palabra termina en "-erò", estoy hablando en tiempo...', answer: 'Futuro', options: ['Presente', 'Passato', 'Futuro'], hint: 'Se refiere a algo que aún no ha sucedido, pasará mañana.'},
      {text: 'Si la oración tiene dos palabras (ej: ho mangiato), es tiempo...', answer: 'Passato', options: ['Presente', 'Passato', 'Futuro'], hint: 'Se refiere a una acción que ya terminó ayer o hace rato.'},
      {text: '¿Con qué siento el viento frío en mi cara?', answer: 'Tatto', options: ['Tatto', 'Olfatto', 'Udito'], hint: 'Es el sentido de toda la piel de tu cuerpo.'},
      {text: 'Si el verbo no tiene tildes ni palabras extras (ej: mangio), es tiempo...', answer: 'Presente', options: ['Presente', 'Passato', 'Futuro'], hint: 'Se refiere a lo que está ocurriendo justo en este momento.'},
      {text: 'El título "I Sensi" significa en español...', answer: 'Los sentidos', options: ['Las acciones', 'Los sentidos', 'Los verbos'], hint: 'Son los 5 poderes especiales que tiene nuestro cuerpo para entender el mundo.'},
      {text: 'La palabra "Gusto" en español y en italiano se escribe...', answer: 'Igual', options: ['Diferente', 'Igual', 'Al revés'], hint: 'Es una coincidencia afortunada, no tienes que aprender a escribirla de nuevo.'},
      {text: 'Para ver televisión, necesito mi Udito y mi...', answer: 'Vista', options: ['Tatto', 'Vista', 'Olfatto'], hint: 'Es el sentido para mirar las imágenes brillantes de la pantalla.'},
      {text: 'El verbo que me da energía porque lleno mi estómago es...', answer: 'Mangiare', options: ['Mangiare', 'Studiare', 'Dormire'], hint: 'Es la acción de alimentarse.'}
    ]
  },
  6: {
    1: [
      {text: '"Ho i capelli _______" (Tengo el pelo negro).', answer: 'Neri', options: ['Bianchi', 'Neri', 'Rossi'], hint: 'Negros.'},
      {text: '"Indosso una _______ bianca per la scuola".', answer: 'Camicia', options: ['Camicia', 'Gamba', 'Testa'], hint: 'Llevo una camisa blanca.'},
      {text: '"Gli occhi servono per _______".', answer: 'Vedere', options: ['Mangiare', 'Vedere', 'Camminare'], hint: 'Los ojos sirven para ver.'},
      {text: '¿Cuál es el color "Azzurro"?', answer: 'Celeste / Azul claro', options: ['Celeste / Azul claro', 'Morado', 'Amarillo'], hint: 'Color del cielo.'},
      {text: '"Il braccio finisce con la _______".', answer: 'Mano', options: ['Mano', 'Gamba', 'Spalla'], hint: 'El brazo termina con la mano.'},
      {text: '¿Qué prenda es el "Maglione"?', answer: 'Suéter / Abrigo', options: ['Camiseta', 'Suéter / Abrigo', 'Pantalón'], hint: 'Prenda de lana para el frío.'},
      {text: '"I colori della bandiera venezuelana sono _______".', answer: 'Giallo, Blu, Rosso', options: ['Verde, Bianco, Rosso', 'Giallo, Blu, Rosso', 'Nero y Oro'], hint: 'Amarillo, Azul y Rojo.'},
      {text: '"La _______ è la parte centrale del corpo".', answer: 'Pancia / Torso', options: ['Pancia / Torso', 'Testa', 'Mano'], hint: 'La barriga/torso es la parte central.'},
      {text: '¿Cómo se dice "Zapatos negros"?', answer: 'Scarpe nere', options: ['Scarpe nere', 'Calze rosse', 'Maglie blu'], hint: 'Plural de zapato y negro.'},
      {text: '"Uso il _______ per respirare".', answer: 'Naso', options: ['Naso', 'Orecchio', 'Piede'], hint: 'Uso la nariz para respirar.'},
      {text: '"Il _______ è un vestito da donna elegante".', answer: 'Vestito', options: ['Vestito', 'Pantalone', 'Maglione'], hint: 'El vestido.'},
      {text: '¿De qué color es la noche?', answer: 'Nero', options: ['Bianco', 'Nero', 'Giallo'], hint: 'Negro.'},
      {text: '"Sopra il collo c\'è la _______".', answer: 'Testa', options: ['Testa', 'Gamba', 'Mano'], hint: 'Sobre el cuello está la cabeza.'},
      {text: '"In inverno porto la _______".', answer: 'Giacca', options: ['Giacca', 'Maglietta', 'Gonna'], hint: 'En invierno llevo la chaqueta.'},
      {text: '¿Cómo se dice "Mis ojos son verdes"?', answer: 'I miei occhi sono verdi', options: ['I miei occhi sono verdi', 'I miei capelli sono neri', 'La mia bocca è rossa'], hint: 'Traducción literal.'}
    ],
    2: [
      {text: '¿Qué sentido utilizamos para oler el perfume de una flor?', answer: 'Olfatto', options: ['Vista', 'Olfatto', 'Udito'], hint: 'Es el que usas cuando pasas por una panadería y detectas el olor a pan caliente. 🥖'},
      {text: 'Si quiero leer un libro de aventuras, ¿qué sentido necesito usar?', answer: 'Vista', options: ['Vista', 'Tatto', 'Gusto'], hint: 'Es el que te permite disfrutar de los colores, las letras y las formas del mundo. 👁️'},
      {text: '¿Cómo se dice "Yo he comido" (Passato Prossimo) en italiano?', answer: 'Ho mangiato', options: ['Mangio', 'Mangerò', 'Ho mangiato'], hint: 'Es la forma del pasado que usa dos palabras y la primera empieza con la letra "H". ⏱️'},
      {text: '¿Cómo se llama la acción de moverte muy rápido con las piernas para llegar primero?', answer: 'Correre', options: ['Correre', 'Dormire', 'Pulire'], hint: 'Es lo que haces en educación física cuando el profe toca el silbato. 🏃‍♂️'},
      {text: '¿Qué sentido utilizamos para escuchar nuestra canción favorita?', answer: 'Udito', options: ['Olfatto', 'Udito', 'Tatto'], hint: 'Es el que capta las ondas sonoras y la voz de tu mamá cuando te llama a comer. 🎧'},
      {text: 'Si quiero decir "Tú comerás" (Futuro) en italiano, la palabra correcta es...', answer: 'Mangerai', options: ['Mangerai', 'Hai mangiato', 'Mangi'], hint: 'El futuro para la segunda persona siempre termina con las vocales "A-I". 🔮'},
      {text: '¿Cómo se llama la acción de cerrar los ojos y descansar toda la noche en tu cama?', answer: 'Dormire', options: ['Giocare', 'Dormire', 'Studiare'], hint: 'Es lo que necesitas hacer para recargar baterías y no tener sueño en clase. 💤'},
      {text: '¿Qué sentido nos permite saber si un helado de chocolate está dulce o salado?', answer: 'Gusto', options: ['Udito', 'Vista', 'Gusto'], hint: 'Se encuentra en tu lengua y es el experto absoluto en sabores. 🍦'},
      {text: 'Si queremos decir "Nosotros comemos" en italiano (Presente), ¿cuál es la palabra correcta?', answer: 'Mangiamo', options: ['Mangiamo', 'Abbiamo mangiato', 'Mangeremo'], hint: 'Es una sola palabra, bastante larga, que describe lo que hacemos tú y yo en este instante. 🍝'},
      {text: '¿Qué acción haces en tu escritorio con libros y cuadernos para sacar buenas notas?', answer: 'Studiare', options: ['Pulire', 'Mangiare', 'Studiare'], hint: 'Requiere mucha concentración y es la clave para pasar de grado con éxito. 📚'},
      {text: '¿Qué sentido usamos para sentir el abrazo suave de nuestra mamá?', answer: 'Tatto', options: ['Tatto', 'Olfatto', 'Gusto'], hint: 'Es el que está presente en toda tu piel y especialmente en tus manos. 🫂'},
      {text: '¿Cómo se dice "Ellos han comido" (Passato Prossimo) en italiano?', answer: 'Hanno mangiato', options: ['Mangiano', 'Hanno mangiato', 'Mangeranno'], hint: 'Son dos palabras para el pasado y la primera tiene una doble "N" muy marcada. 👥'},
      {text: '¿Cuál es la acción que haces en el parque con una pelota y tus amigos?', answer: 'Giocare', options: ['Giocare', 'Dormire', 'Pulire'], hint: 'Es pura diversión y entretenimiento. Su nombre empieza con la letra "G". ⚽'},
      {text: 'Si hablamos de "Él o Ella" (Lui/Lei) en el futuro, ¿cómo se dice "comerá"?', answer: 'Mangerà', options: ['Mangia', 'Ha mangiato', 'Mangerà'], hint: 'Lleva un acento en la última vocal porque la acción pasará mañana. ⏳'},
      {text: '¿Qué acción haces con una escoba y agua para que tu casa quede brillante?', answer: 'Pulire', options: ['Studiare', 'Pulire', 'Correre'], hint: 'Es lo que haces para ayudar en las tareas del hogar y quitar el polvo. 🧹'},
      {text: 'Si alguien dice la frase "Abbiamo mangiato" (hemos comido), ¿a qué pronombre pertenece?', answer: 'Noi', options: ['Io', 'Voi', 'Noi'], hint: 'Significa "nosotros", así que incluye a varias personas y a ti también. 🧑‍🤝‍🧑'},
      {text: 'La palabra "Mangerete" (ustedes comerán) pertenece a un tiempo verbal que indica algo que aún no ha pasado. ¿Cuál es?', answer: 'Futuro', options: ['Presente', 'Passato', 'Futuro'], hint: 'Es un evento que sucederá más adelante, el día de mañana. 🚀'},
      {text: '¿Cómo se dice "Los Sentidos" en italiano para referirnos a los cinco poderes de nuestro cuerpo?', answer: 'I Sensi', options: ['I Sensi', 'Le Azioni', 'Il Futuro'], hint: 'Se escribe casi igual que en español, solo que empieza con la letra "S" y está en plural. 🖐️'},
      {text: 'Si digo "Mangi" en tiempo Presente, ¿a qué persona me estoy refiriendo?', answer: 'Tu', options: ['Io', 'Tu', 'Lui'], hint: 'Significa "comes", así que me dirijo directamente a la persona con la que estoy hablando. 👈'},
      {text: '¿Qué acción es la que nos da energía al meter alimentos deliciosos en nuestra boca?', answer: 'Mangiare', options: ['Mangiare', 'Pulire', 'Giocare'], hint: 'Es el verbo principal que usamos cuando nos sentamos a la mesa a cenar. 🍕'},
      {text: 'La palabra "Mangeranno" corresponde a un grupo de personas de allá ("Ellos"). ¿Cuál es el pronombre en italiano?', answer: 'Loro', options: ['Noi', 'Voi', 'Loro'], hint: 'Es la última persona en plural con la que podemos conjugar. 🧍‍♂️🧍‍♀️'},
      {text: 'Si escuchas la frase "Hai mangiato", ¿esta frase se refiere a una acción que...?', answer: 'Ya pasó', options: ['Pasa ahora', 'Ya pasó', 'Pasará después'], hint: 'Significa "has comido", lo que quiere decir que ya terminaste tu plato y no hay más. 🍽️'},
      {text: '¿Qué sentido usas para poder admirar un cuadro hermoso en un museo de arte?', answer: 'Vista', options: ['Vista', 'Udito', 'Tatto'], hint: 'Es exactamente el mismo que usas para ver lo que escribo en el pizarrón. 🖼️'},
      {text: 'La palabra "Mangeremo" (comeremos) indica una acción futura. ¿A qué persona corresponde?', answer: 'Noi', options: ['Io', 'Noi', 'Loro'], hint: 'Es el pronombre en italiano para el grupo que formamos "tú y yo" juntos. 🤝'},
      {text: '¿Qué acción realizas cuando pasas un trapeador por el piso sucio?', answer: 'Pulire', options: ['Dormire', 'Pulire', 'Studiare'], hint: 'Significa dejar todo limpio, aseado y sin una gota de suciedad. 🧽'},
      {text: 'Si digo la palabra "Mangiate" (ustedes comen), ¿en qué tiempo verbal estoy hablando?', answer: 'Presente', options: ['Presente', 'Passato', 'Futuro'], hint: 'Es una sola palabra y describe algo que están haciendo justo en este instante. ⏰'},
      {text: '¿Qué sentido usas para escuchar el canto de los pajaritos por la mañana?', answer: 'Udito', options: ['Udito', 'Gusto', 'Olfatto'], hint: 'Son tus orejas haciendo su excelente trabajo desde temprano. 🐦'},
      {text: '¿Cómo se dice "Ustedes han comido" (Passato Prossimo) en italiano?', answer: 'Avete mangiato', options: ['Mangiate', 'Mangerete', 'Avete mangiato'], hint: 'Consta de dos palabras para el pasado y empieza con la letra "A". 🍝'},
      {text: '¿Qué significa exactamente la frase "Io mangio" en español?', answer: 'Yo como', options: ['Yo comeré', 'Yo comí', 'Yo como'], hint: 'Es una acción de primera persona que está ocurriendo ya mismo, en este segundo. 😋'},
      {text: 'El olor delicioso de una pizza recién hecha activa de inmediato tu...', answer: 'Olfatto', options: ['Tatto', 'Olfatto', 'Udito'], hint: 'Te hace respirar profundo por la nariz para disfrutar de ese aroma. 👃'}
    ]
  }
};

const bankEn = {
  1: {
    1: [
      {text: '¿Cómo se dice el número "3" en inglés?', answer: 'Three', options: ['Two','Three','One'], hint: 'Empieza con "Th".'},
      {text: '¿Cuál es el número "7" en inglés?', answer: 'Seven', options: ['Six','Eight','Seven'], hint: 'Rima con "Eleven".'},
      {text: 'Cuenta los dedos de una mano. En inglés son: _______.', answer: 'Five', options: ['Five','Four','Ten'], hint: 'El número después del cuatro.'},
      {text: '¿Cómo se escribe el número "10" en inglés?', answer: 'Ten', options: ['Net','Ten','Two'], hint: 'Se escribe al revés que "Net".'},
      {text: 'Si tengo "One" y agrego otro "One", ¿cuántos tengo?', answer: 'Two', options: ['Three','Two','Four'], hint: '1 + 1 = ?'},
      {text: 'Esta forma es redonda como el sol: _______.', answer: 'Circle', options: ['Square','Circle','Triangle'], hint: 'No tiene esquinas.'},
      {text: 'Tiene 3 lados y parece una rebanada de pizza: _______.', answer: 'Triangle', options: ['Triangle','Star','Circle'], hint: 'Tri- significa tres.'},
      {text: 'Tiene 4 lados iguales, como una caja: _______.', answer: 'Square', options: ['Rectangle','Square','Triangle'], hint: 'Es un cuadrado.'},
      {text: 'Brilla en el cielo por la noche: _______.', answer: 'Star', options: ['Circle','Star','Square'], hint: 'Twinkle, twinkle, little...'},
      {text: 'Es larga y tiene 4 lados (como una puerta): _______.', answer: 'Rectangle', options: ['Rectangle','Circle','Triangle'], hint: 'Parecido a un cuadrado pero estirado.'},
      {text: '¿Cuánto es "One plus One"?', answer: 'Two', options: ['Three','Two','Five'], hint: 'Uno más uno.'},
      {text: '¿Cuánto es "Two plus Two"?', answer: 'Four', options: ['Four','Six','Two'], hint: 'Dos más dos.'},
      {text: '¿Cuánto es "Three plus Three"?', answer: 'Six', options: ['Five','Six','Nine'], hint: 'Tres más tres.'},
      {text: 'Si tengo "Two" manzanas y me regalan "One", tengo: _______.', answer: 'Three', options: ['Three','Four','Two'], hint: '2 + 1.'},
      {text: '¿Cómo se dice "Más" en inglés para sumar?', answer: 'Plus', options: ['Minus','Plus','Equal'], hint: 'Suena como "Plas".'}
    ],
    2: [
      {text: 'The apple is... (La manzana es...)', answer: 'Red', options: ['Blue', 'Red', 'Green'], hint: 'Es el color de los tomates y de los corazones. ❤️'},
      {text: 'The sun is... (El sol es...)', answer: 'Yellow', options: ['Yellow', 'Pink', 'Purple'], hint: 'Es el color del queso de los ratones y de los limones ácidos.'},
      {text: 'The leaf is... (La hoja es...)', answer: 'Green', options: ['Red', 'Orange', 'Green'], hint: 'Es el color favorito de las ranas que dicen "ribbit". 🐸'},
      {text: 'The whale is... (La ballena es...)', answer: 'Blue', options: ['Yellow', 'Blue', 'White'], hint: 'Es el color del océano donde viven los peces. 🌊'},
      {text: 'The pig is... (El cerdito es...)', answer: 'Pink', options: ['Pink', 'Black', 'Brown'], hint: '¡Es un color muy dulce! Como el algodón de azúcar. 🍭'},
      {text: '¿Cómo se dice "Anaranjado" en inglés?', answer: 'Orange', options: ['Blue', 'Red', 'Orange'], hint: '¡Cuidado! Esta fruta y su color se llaman exactamente igual. 🍊'},
      {text: 'The cloud is... (La nube es...)', answer: 'White', options: ['White', 'Purple', 'Green'], hint: 'Es el color de la nieve y de la leche. 🥛'},
      {text: 'The chocolate is...', answer: 'Brown', options: ['Pink', 'Brown', 'Yellow'], hint: 'Es el color de los troncos de los árboles y de la tierra. 🌳'},
      {text: 'The grape is... (La uva es...)', answer: 'Purple', options: ['Purple', 'White', 'Orange'], hint: 'Es un color muy elegante, ¡el favorito de las berenjenas! 🍆'},
      {text: 'The night is... (La noche es...)', answer: 'Black', options: ['Yellow', 'White', 'Black'], hint: 'Es el color que ves cuando cierras los ojos para dormir. 😴'}
    ],
    3: [
      {text: 'I see with my... (Yo veo con mis...)', answer: 'Eyes', options: ['Eyes', 'Nose', 'Mouth'], hint: 'Los usas para mirar los dibujos animados. (Eyes significa ojos). 👀'},
      {text: 'I smell with my... (Yo huelo con mi...)', answer: 'Nose', options: ['Hair', 'Ear', 'Nose'], hint: 'La usas para oler las flores o la comida rica. (Nose significa nariz). 👃'},
      {text: 'I eat with my... (Yo como con mi...)', answer: 'Mouth', options: ['Eye', 'Mouth', 'Ear'], hint: 'Con ella puedes sonreír y saborear un helado. (Mouth significa boca). 👄'},
      {text: 'I listen with my... (Yo escucho con mi...)', answer: 'Ear', options: ['Ear', 'Nose', 'Hair'], hint: 'Sirve para oír tu música favorita y la voz del Teacher. (Ear significa oreja). 👂'},
      {text: 'It is on my head... (Está sobre mi cabeza...)', answer: 'Hair', options: ['Mouth', 'Hair', 'Kitchen'], hint: 'Puede ser largo, corto, liso o rizado. (Hair significa cabello). 💇‍♂️'},
      {text: 'My mom cooks in the... (Mi mamá cocina en la...)', answer: 'Kitchen', options: ['Bedroom', 'Kitchen', 'Bathroom'], hint: 'Es el lugar donde ocurre la magia de la comida. (Kitchen significa cocina). 🍳'},
      {text: 'I sleep in my... (Yo duermo en mi...)', answer: 'Bedroom', options: ['Bedroom', 'Living room', 'Kitchen'], hint: 'Es tu lugar favorito para soñar y descansar. (Bedroom significa dormitorio). 😴'},
      {text: 'I take a shower in the... (Me doy una ducha en el...)', answer: 'Bathroom', options: ['Kitchen', 'Bathroom', 'Bedroom'], hint: 'Aquí usas el jabón y el champú para quedar limpio. (Bathroom significa baño). 🛁'},
      {text: 'I watch TV in the... (Veo televisión en la...)', answer: 'Living room', options: ['Living room', 'Bathroom', 'Kitchen'], hint: 'Es el lugar con el sofá cómodo para toda la familia. (Living room significa sala). 📺'},
      {text: '¿Cómo se dice "Cocina" en inglés?', answer: 'Kitchen', options: ['Bedroom', 'Bathroom', 'Kitchen'], hint: '¡Recuerda! Empieza con la letra "K" y allí está la nevera. (Kitchen es cocina). 🍕'},
      {text: '¿Cómo se dice "Baño" en inglés?', answer: 'Bathroom', options: ['Bathroom', 'Kitchen', 'Living room'], hint: 'Es donde te lavas los dientes y las manos. (Bathroom es baño). 🧼'},
      {text: '¿Cómo se dice "Ojos" en inglés?', answer: 'Eyes', options: ['Nose', 'Mouth', 'Eyes'], hint: '¡Pestañea dos veces! Empieza con la letra "E". (Eyes son ojos). ✨'},
      {text: '¿Cómo se dice "Sala" en inglés?', answer: 'Living room', options: ['Bedroom', 'Living room', 'Bathroom'], hint: 'Es el cuarto de la casa para estar o "vivir" en familia. (Living room es sala). 🛋️'},
      {text: '¿Cómo se dice "Nariz" en inglés?', answer: 'Nose', options: ['Nose', 'Hair', 'Ear'], hint: 'Sirve para estornudar: ¡A-chís! (Nose es nariz). 🤧'},
      {text: '¿Cómo se dice "Dormitorio" en inglés?', answer: 'Bedroom', options: ['Kitchen', 'Bedroom', 'Living room'], hint: 'Es el cuarto donde está tu cama (bed). (Bedroom es dormitorio). 🛏️'}
    ]
  },
  2: {
    1: [
      {text: 'Yo me levanto de la cama. In English: I _______.', answer: 'get up', options: ['get up','go to sleep','take a shower'], hint: 'Salir de la cama por la mañana.'},
      {text: 'Yo cepillo mis dientes. In English: I _______ my teeth.', answer: 'brush', options: ['wash','brush','get dressed'], hint: 'Usas pasta de dientes.'},
      {text: 'Yo me doy una ducha. In English: I _______.', answer: 'take a shower', options: ['eat breakfast','take a shower','take the bus'], hint: 'Usas agua y jabón para limpiarte.'},
      {text: 'Yo me pongo la ropa. In English: I _______.', answer: 'get dressed', options: ['get dressed','get up','brush my teeth'], hint: 'Cambiar pijama por ropa de día.'},
      {text: 'Yo como mi desayuno. In English: I _______.', answer: 'eat breakfast', options: ['take the bus','eat breakfast','take a shower'], hint: 'La primera comida del día.'},
      {text: 'Yo tomo el autobús. In English: I _______.', answer: 'take the bus', options: ['take the bus','get dressed','get up'], hint: 'Transporte para ir a la escuela.'},
      {text: 'En esta materia usamos números (1, 2, 3...). Es: _______.', answer: 'Math', options: ['Music','Math','English'], hint: 'Sumas y restas.'},
      {text: 'En esta materia cantamos y tocamos instrumentos. Es: _______.', answer: 'Music', options: ['Music','Language','Calligraphy'], hint: 'Sonidos y melodías.'},
      {text: 'Hacemos ejercicio y jugamos con pelotas en: _______.', answer: 'Physical Education', options: ['Math','Physical Education','Language'], hint: 'Deportes y movimiento.'},
      {text: 'Aprendemos a leer y escribir bien en mi idioma: _______.', answer: 'Language', options: ['Language','Music','Math'], hint: 'Gramática y lectura.'},
      {text: 'Practicamos para tener una letra muy bonita en: _______.', answer: 'Calligraphy', options: ['English','Calligraphy','Physical Education'], hint: 'Escribir cursiva y claro.'},
      {text: 'Aprendemos a decir "Hello" y "Goodbye" en: _______.', answer: 'English', options: ['English','Language','Music'], hint: 'El idioma que estás estudiando ahora.'},
      {text: 'A mí me gusta mi maestra. In English: I _______ my teacher.', answer: 'like', options: ['like','no like','likes'], hint: 'Afirmación con "I".'},
      {text: 'No me gusta la sopa. In English: I _______ soup.', answer: "don't like", options: ['like',"don't like",'no like'], hint: 'Negación con "I".'},
      {text: 'A mí me gusta jugar. In English: I _______ to play.', answer: 'like', options: ['like','am like',"don't likes"], hint: 'Verbo gustar en primera persona.'}
    ],
    2: [
      {text: 'En el fútbol, I kick the ball... (Yo pateo el balón...)', answer: 'Soccer', options: ['Basketball', 'Soccer', 'Swimming'], hint: 'Es el deporte donde haces pases con los pies. ⚽'},
      {text: 'In Baseball, I... the ball with a bat. (Yo... la bola con un bate)', answer: 'Hit', options: ['Hit', 'Swim', 'Jump'], hint: '¡Dale un buen golpe para que la bola vuele muy lejos! ⚾'},
      {text: 'To swim, I need... (Para nadar, yo necesito...)', answer: 'Water', options: ['Forest', 'Water', 'Sand'], hint: 'Sin esto no podrías flotar como un pez. 🏊‍♂️'},
      {text: '¿Cómo se dice "Lanzar la pelota" en inglés?', answer: 'Throw the ball', options: ['Kick the ball', 'Throw the ball', 'Run'], hint: 'Es el movimiento que haces con el brazo hacia arriba o adelante. 🥎'},
      {text: '¿Cómo se dice "Voleibol" en inglés?', answer: 'Volleyball', options: ['Volleyball', 'Soccer', 'Baseball'], hint: 'Se escribe casi igual 🏐'},
      {text: '¿Cómo se dice "Nadar en el agua" en inglés?', answer: 'Swim in the water', options: ['Run in the water', 'Swim in the water', 'Hit the water'], hint: 'Mueve tus brazos y piernas para avanzar en la piscina. 🐠'},
      {text: 'I use a bat and a glove in... (Uso un bate y un guante en...)', answer: 'Baseball', options: ['Soccer', 'Baseball', 'Swimming'], hint: 'Es el deporte donde los jugadores corren por las cuatro bases. 🏟️'},
      {text: '¿Cómo se dice "Baloncesto" en inglés?', answer: 'Basketball', options: ['Basketball', 'Soccer', 'Running'], hint: 'Es el deporte donde se pica la pelota y se lanza muy alto. 🏀'},
      {text: '¿Cómo se dice "Patear la pelota" en inglés?', answer: 'Kick the ball', options: ['Hit the ball', 'Kick the ball', 'Swim'], hint: 'Es lo que haces para que el balón de fútbol ruede por el pasto. 👟'},
      {text: '¿Cómo se dice "Golpear la pelota" en inglés?', answer: 'Hit the ball', options: ['Hit the ball', 'Run', 'Swim'], hint: 'Es lo que haces cuando usas un bate de madera. 🏏'},
      {text: '¿Cómo se dice "Correr" en inglés?', answer: 'Run', options: ['Walk', 'Run', 'Jump'], hint: '¡Hazlo muy rápido para ganar la carrera! 💨'},
      {text: 'In Baseball, I have to... the ball with my glove. (Debo... la bola con mi guante)', answer: 'Catch', options: ['Catch', 'Kick', 'Cook'], hint: 'Tienes que cerrarlo muy rápido para que la bola no se escape. 🧤'},
      {text: '¿Cómo se dice "Natación" en inglés?', answer: 'Swimming', options: ['Swimming', 'Running', 'Soccer'], hint: 'Es el deporte que se practica con lentes y gorro en la piscina. 🏊‍♀️'},
      {text: '¿Cómo se dice "Béisbol" en inglés?', answer: 'Baseball', options: ['Soccer', 'Basketball', 'Baseball'], hint: '¡Es súper fácil! Se pronuncia muy parecido al español. ⚾'},
      {text: '¿Cómo se dice "Fútbol" en inglés?', answer: 'Soccer', options: ['Soccer', 'Swimming', 'Running'], hint: 'Es el deporte donde se usan los zapatos de tacos y medias largas. ⚽'}
    ],
    3: [
      {text: 'Where is the stove to cook? (¿Dónde está la cocina/estufa?)', answer: 'Kitchen', options: ['Living room', 'Kitchen', 'Garden'], hint: 'Es el lugar donde mamá o papá preparan la cena. (Kitchen es cocina). 🍳'},
      {text: 'I go to school by... (Voy a la escuela a pie)', answer: 'By foot', options: ['By plane', 'By foot', 'By bus'], hint: 'Caminar es saludable y solo necesitas tus zapatos. (By foot significa a pie). 🚶‍♂️'},
      {text: 'Where are the flowers and the grass? (¿Dónde están las flores?)', answer: 'Garden', options: ['Bathroom', 'Garden', 'Kitchen'], hint: 'Es el lugar afuera de la casa donde puedes jugar al aire libre. (Garden es jardín). 🌻'},
      {text: 'Which transport flies in the sky? (¿Cuál vuela en el cielo?)', answer: 'Plane', options: ['Car', 'Plane', 'Bike'], hint: 'Tiene alas muy grandes y nos lleva muy lejos. (Plane significa avión). ✈️'},
      {text: 'Where is your bed to sleep? (¿Dónde está tu cama?)', answer: 'Bedroom', options: ['Bedroom', 'Living room', 'Bathroom'], hint: 'Es tu habitación personal para tener dulces sueños. (Bedroom es dormitorio). 🛏️'},
      {text: 'It has two wheels and you need a helmet. (Tiene dos ruedas y usas casco)', answer: 'Motorcycle', options: ['Bus', 'Motorcycle', 'Train'], hint: 'Es rápida, ruidosa y solo caben dos personas. (Motorcycle es motocicleta). 🏍️'},
      {text: 'Where do you wash your face? (¿Dónde te lavas la cara?)', answer: 'Bathroom', options: ['Living room', 'Bathroom', 'Garden'], hint: 'Es el lugar con espejo donde te lavas los dientes. (Bathroom significa baño). 🧼'},
      {text: 'This transport goes on tracks. (Este transporte va sobre rieles)', answer: 'Train', options: ['Bike', 'Train', 'Bus'], hint: 'Es muy largo y hace "chu-chu". (Train significa tren). 🚂'},
      {text: 'Where is the sofa and the TV? (¿Dónde está el sofá y la TV?)', answer: 'Living room', options: ['Kitchen', 'Living room', 'Bathroom'], hint: 'Es el lugar de la casa para descansar con la familia. (Living room es sala). 🛋️'},
      {text: '¿Cómo se dice "Autobús" en inglés?', answer: 'Bus', options: ['Car', 'Bus', 'Bike'], hint: 'Es grande y lleva a muchos niños a la escuela. (Bus significa autobús). 🚌'},
      {text: '¿Cómo se dice "Bicicleta" en inglés?', answer: 'Bike', options: ['Train', 'Bike', 'Motorcycle'], hint: 'Tiene dos ruedas y pedales para moverte. (Bike significa bicicleta). 🚲'},
      {text: '¿Cómo se dice "Carro" en inglés?', answer: 'Car', options: ['Bus', 'Car', 'Plane'], hint: 'Se escribe con solo tres letras: C-A-R. (Car significa carro). 🚗'},
      {text: 'The refrigerator is in the... (La nevera está en la...)', answer: 'Kitchen', options: ['Kitchen', 'Bedroom', 'Bathroom'], hint: 'Es donde guardamos la leche y las frutas frías. (Kitchen es cocina). 🍎'},
      {text: 'A motorcycle has... (Una motocicleta tiene...)', answer: '2 wheels', options: ['4 wheels', '2 wheels', 'Wings'], hint: 'Cuenta las ruedas, ¡igual que una bicicleta! (2 wheels son dos ruedas). 🎡'},
      {text: 'My bed is in my... (Mi cama está en mi...)', answer: 'Bedroom', options: ['Living room', 'Kitchen', 'Bedroom'], hint: 'Es el cuarto donde guardas tus juguetes y duermes. (Bedroom es dormitorio). 🧸'}
    ]
  },
  3: {
    1: [
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
    2: [
      {text: 'Players use their feet to kick the ball in... (Los jugadores usan sus pies para patear el balón en...)', answer: 'Soccer', options: ['Soccer', 'Basketball', 'Swimming'], hint: 'Es el deporte donde los jugadores corren por todo el campo buscando el arco. ⚽'},
      {text: 'In Baseball, the player uses a bat to... the ball. (En el béisbol, el jugador usa un bate para... la bola)', answer: 'Hit', options: ['Hit', 'Swim', 'Catch'], hint: '¡Es el sonido que hace el bate cuando golpea la bola con fuerza! ⚾'},
      {text: 'When you are in the swimming pool, you... (Cuando estás en la piscina, tú...)', answer: 'Swim', options: ['Run', 'Swim', 'Hit'], hint: '¡Mueve tus brazos y piernas como si fueras un pececito! 🏊‍♂️'},
      {text: '¿Cómo se dice "Lanzar la pelota" en inglés?', answer: 'Throw the ball', options: ['Throw the ball', 'Kick the ball', 'Run'], hint: 'Es la acción que hace el "pitcher" o el lanzador en los deportes. 🥎'},
      {text: 'To play Basketball, you need to... the ball. (Para jugar básquet, necesitas... el balón)', answer: 'Throw', options: ['Throw', 'Kick', 'Swim'], hint: 'Tienes que apuntar muy bien para que el balón entre por arriba. 🏀'},
      {text: 'In Volleyball, we use our hands to... the ball. (En el voleibol, usamos nuestras manos para... el balón)', answer: 'Hit', options: ['Hit', 'Kick', 'Run'], hint: '¡Dale un toque suave o fuerte para que pase sobre la red! 🏐'},
      {text: '¿Cómo se dice "Atrapar la pelota" en inglés?', answer: 'Catch the ball', options: ['Catch the ball', 'Throw the ball', 'Hit the ball'], hint: 'Es lo que haces con el guante para que la bola no se escape. 🧤'},
      {text: 'If you want to win a race, you have to... fast. (Si quieres ganar una carrera, tienes que... rápido)', answer: 'Run', options: ['Run', 'Swim', 'Catch'], hint: '¡Mueve tus piernas a toda velocidad! 💨'},
      {text: '"I swim in the water" significa...', answer: 'Yo nado en el agua', options: ['Yo corro en el agua', 'Yo nado en el agua', 'Yo pateo en el agua'], hint: 'Es la actividad favorita de los delfines en el océano. 🐬'},
      {text: 'In Soccer, the players can... very fast. (En el fútbol, los jugadores pueden... muy rápido)', answer: 'Run', options: ['Run', 'Hit', 'Swim'], hint: 'Lo hacen para llegar primero al balón antes que el otro equipo. 🏃‍♂️'},
      {text: '¿Cuál de estos deportes usa un bat y una ball?', answer: 'Baseball', options: ['Soccer', 'Baseball', 'Volleyball'], hint: 'En este deporte corres por cuatro bases después de batear. 🏟️'},
      {text: 'In Basketball, I... the ball to my friend. (En el básquet, yo... el balón a mi amigo)', answer: 'Throw', options: ['Throw', 'Kick', 'Hit'], hint: 'Es el pase que haces con las manos para trabajar en equipo. 🤝'},
      {text: '¿Cómo se dice el deporte "Natación" en inglés?', answer: 'Swimming', options: ['Running', 'Soccer', 'Swimming'], hint: 'Es el deporte que se practica en el agua de la piscina. 🏊‍♀️'},
      {text: 'When the ball is in the air, I... it with my hands. (Cuando la bola está en el aire, yo la... con mis manos)', answer: 'Catch', options: ['Catch', 'Kick', 'Run'], hint: '¡Asegúrate de sujetarla bien para que no se caiga! 🤲'},
      {text: 'To play Soccer, you must... the ball with your shoes. (Para jugar fútbol, debes... el balón con tus zapatos)', answer: 'Kick', options: ['Kick', 'Throw', 'Hit'], hint: '¡Es la acción principal para meter un gol! 👟'}
    ]
  },
  3: {
    1: [
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
    2: [
      {text: 'Players use their feet to kick the ball in... (Los jugadores usan sus pies para patear el balón en...)', answer: 'Soccer', options: ['Soccer', 'Basketball', 'Swimming'], hint: 'Es el deporte donde los jugadores corren por todo el campo buscando el arco. ⚽'},
      {text: 'In Baseball, the player uses a bat to... the ball. (En el béisbol, el jugador usa un bate para... la bola)', answer: 'Hit', options: ['Hit', 'Swim', 'Catch'], hint: '¡Es el sonido que hace el bate cuando golpea la bola con fuerza! ⚾'},
      {text: 'When you are in the swimming pool, you... (Cuando estás en la piscina, tú...)', answer: 'Swim', options: ['Run', 'Swim', 'Hit'], hint: '¡Mueve tus brazos y piernas como si fueras un pececito! 🏊‍♂️'},
      {text: '¿Cómo se dice "Lanzar la pelota" en inglés?', answer: 'Throw the ball', options: ['Throw the ball', 'Kick the ball', 'Run'], hint: 'Es la acción que hace el "pitcher" o el lanzador en los deportes. 🥎'},
      {text: 'To play Basketball, you need to... the ball. (Para jugar básquet, necesitas... el balón)', answer: 'Throw', options: ['Throw', 'Kick', 'Swim'], hint: 'Tienes que apuntar muy bien para que el balón entre por arriba. 🏀'},
      {text: 'In Volleyball, we use our hands to... the ball. (En el voleibol, usamos nuestras manos para... el balón)', answer: 'Hit', options: ['Hit', 'Kick', 'Run'], hint: '¡Dale un toque suave o fuerte para que pase sobre la red! 🏐'},
      {text: '¿Cómo se dice "Atrapar la pelota" en inglés?', answer: 'Catch the ball', options: ['Catch the ball', 'Throw the ball', 'Hit the ball'], hint: 'Es lo que haces con el guante para que la bola no se escape. 🧤'},
      {text: 'If you want to win a race, you have to... fast. (Si quieres ganar una carrera, tienes que... rápido)', answer: 'Run', options: ['Run', 'Swim', 'Catch'], hint: '¡Mueve tus piernas a toda velocidad! 💨'},
      {text: '"I swim in the water" significa...', answer: 'Yo nado en el agua', options: ['Yo corro en el agua', 'Yo nado en el agua', 'Yo pateo en el agua'], hint: 'Es la actividad favorita de los delfines en el océano. 🐬'},
      {text: 'In Soccer, the players can... very fast. (En el fútbol, los jugadores pueden... muy rápido)', answer: 'Run', options: ['Run', 'Hit', 'Swim'], hint: 'Lo hacen para llegar primero al balón antes que el otro equipo. 🏃‍♂️'},
      {text: '¿Cuál de estos deportes usa un bat y una ball?', answer: 'Baseball', options: ['Soccer', 'Baseball', 'Volleyball'], hint: 'En este deporte corres por cuatro bases después de batear. 🏟️'},
      {text: 'In Basketball, I... the ball to my friend. (En el básquet, yo... el balón a mi amigo)', answer: 'Throw', options: ['Throw', 'Kick', 'Hit'], hint: 'Es el pase que haces con las manos para trabajar en equipo. 🤝'},
      {text: '¿Cómo se dice el deporte "Natación" en inglés?', answer: 'Swimming', options: ['Running', 'Soccer', 'Swimming'], hint: 'Es el deporte que se practica en el agua de la piscina. 🏊‍♀️'},
      {text: 'When the ball is in the air, I... it with my hands. (Cuando la bola está en el aire, yo la... con mis manos)', answer: 'Catch', options: ['Catch', 'Kick', 'Run'], hint: '¡Asegúrate de sujetarla bien para que no se caiga! 🤲'},
      {text: 'To play Soccer, you must... the ball with your shoes. (Para jugar fútbol, debes... el balón con tus zapatos)', answer: 'Kick', options: ['Kick', 'Throw', 'Hit'], hint: '¡Es la acción principal para meter un gol! 👟'}
    ],
    3: [
      {text: 'I am hungry! I need to go to the... (¡Tengo hambre! Necesito ir a la...)', answer: 'Kitchen', options: ['Bathroom', 'Kitchen', 'Garden'], hint: 'Es el lugar de la casa donde guardamos y preparamos la comida. 🍕'},
      {text: 'If you want to travel to Europe, you go... (Si quieres viajar a Europa, vas...)', answer: 'By plane', options: ['By car', 'By plane', 'By bike'], hint: 'Es el transporte más rápido para cruzar el océano por el cielo. ✈️'},
      {text: 'Where can you play with your dog? (¿Dónde puedes jugar con tu perro?)', answer: 'Garden', options: ['Bedroom', 'Kitchen', 'Garden'], hint: 'Es el espacio abierto y verde de tu casa. 🌳'},
      {text: 'To go to the house next door, I go... (Para ir a la casa de al lado, voy...)', answer: 'By foot', options: ['By train', 'By foot', 'By plane'], hint: 'Como está muy cerca, solo necesitas caminar un poco. 🚶‍♂️'},
      {text: 'I need to brush my teeth in the... (Necesito cepillarme los dientes en el...)', answer: 'Bathroom', options: ['Bathroom', 'Living room', 'Kitchen'], hint: 'Es el lugar donde está el lavamanos y el espejo. 🧼'},
      {text: '¿Cómo se dice "Autobús" en inglés?', answer: 'Bus', options: ['Train', 'Bus', 'Car'], hint: 'Es un transporte terrestre grande que lleva a muchos pasajeros. 🚌'},
      {text: 'My family and I watch movies in the... (Mi familia y yo vemos películas en la...)', answer: 'Living room', options: ['Bedroom', 'Living room', 'Kitchen'], hint: 'Es el sitio con el sofá más cómodo de la casa. 🍿'},
      {text: 'This transport has 2 wheels but NO motor. (Tiene 2 ruedas pero NO tiene motor).', answer: 'Bike', options: ['Motorcycle', 'Bike', 'Car'], hint: 'Tienes que usar tus piernas para pedalear con fuerza. 🚲'},
      {text: 'It\'s time to sleep! Go to your... (¡Es hora de dormir! Ve a tu...)', answer: 'Bedroom', options: ['Garden', 'Kitchen', 'Bedroom'], hint: 'Es el lugar donde está tu almohada y tu cama. 💤'},
      {text: '¿Cómo se dice "Tren" en inglés?', answer: 'Train', options: ['Plane', 'Bus', 'Train'], hint: 'Es el transporte que es muy largo y hace chu-chu sobre los rieles. 🚂'},
      {text: '¿Cómo se dice "Motocicleta" en inglés?', answer: 'Motorcycle', options: ['Bike', 'Motorcycle', 'Bus'], hint: 'Es un vehículo de dos ruedas que usa motor y requiere casco. 🏍️'},
      {text: '¿Cómo se dice "Dormitorio" en inglés?', answer: 'Bedroom', options: ['Kitchen', 'Bedroom', 'Garden'], hint: 'Es la habitación donde descansas por las noches. 🛏️'},
      {text: '¿Cómo se dice "A pie" en inglés?', answer: 'By foot', options: ['By car', 'By bus', 'By foot'], hint: 'Es cuando te trasladas caminando con tus propias piernas. 👟'},
      {text: 'In the living room, I can sit on the... (En la sala, puedo sentarme en el...)', answer: 'Sofa', options: ['Stove', 'Sofa', 'Bed'], hint: 'Es el mueble largo y suave para descansar. 🛋️'},
      {text: '¿Cómo se dice "Carro" en inglés?', answer: 'Car', options: ['Car', 'Plane', 'Bike'], hint: 'Es el vehículo pequeño que usamos para viajar en familia por la ciudad. 🚗'}
    ]
  },
  4: {
    1: [
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
    2: [
      {text: 'I ________ ten years old.', answer: 'Am', options: ['Am', 'Is', 'Are'], hint: 'Recuerda: "I" es el único que usa Am. ¡Son mejores amigos! 🔟'},
      {text: 'The dog ________ brown.', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: '"The dog" es un animal (It), y It siempre camina con Is. 🐶'},
      {text: 'We ________ best friends.', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: '"We" significa nosotros (varios). Para el plural usamos Are. 👥'},
      {text: '________ is your birthday?', answer: 'When', options: ['Who', 'When', 'Where'], hint: 'Usamos When porque preguntamos por el tiempo o una fecha. 🎂'},
      {text: 'She ________ a tall girl.', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: 'Para una sola niña (She), la regla dice que usamos Is. 👧'},
      {text: '________ is your name?', answer: 'What', options: ['What', 'Who', 'Why'], hint: 'Usamos What para preguntar "qué" o "cuál" sobre una cosa. 🆔'},
      {text: 'You ________ very funny!', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: 'No importa si es uno o muchos, You siempre usa Are. 😂'},
      {text: '________ is the teacher?', answer: 'Who', options: ['What', 'Who', 'When'], hint: 'Usamos Who porque la respuesta es una persona. 👩‍🏫'},
      {text: 'My mom ________ a teacher.', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: '"My mom" es ella (She). Recuerda: He, She e It usan Is. 👩‍🏫'},
      {text: '________ is my backpack?', answer: 'Where', options: ['Where', 'Who', 'When'], hint: 'Usamos Where cuando queremos saber el lugar donde está algo. 🎒'},
      {text: 'They ________ playing soccer.', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: '"They" son ellos (plural). Con muchos amigos siempre va Are. ⚽'},
      {text: '________ are you sad?', answer: 'Why', options: ['Who', 'Why', 'Where'], hint: 'Usamos Why para preguntar la razón o el motivo de algo. 😢'},
      {text: 'It ________ a sunny day.', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: 'El clima es una cosa (It). Y It siempre va con su pareja Is. ☀️'},
      {text: '________ is your favorite color?', answer: 'What', options: ['What', 'Who', 'Where'], hint: 'What nos sirve para pedir información sobre cosas o gustos. 🎨'},
      {text: 'El Intruso: ¿Cuál está mal?', answer: 'He are sad', options: ['I am happy', 'He are sad', 'We are fine'], hint: '¡Error! He es uno solo (Él), así que debe usar Is, no Are. 🕵️‍♂️'},
      {text: '________ are my keys?', answer: 'Where', options: ['Where', 'Who', 'What'], hint: 'Si buscas la ubicación de tus llaves, pregunta con Where. 🔑'},
      {text: 'El Intruso: ¿Cuál está mal?', answer: 'You is smart', options: ['You is smart', 'She is nice', 'I am tall'], hint: '¡Cuidado! Aunque seas una sola persona, You nunca usa Is. 🕵️‍♂️'},
      {text: '________ is that boy?', answer: 'Who', options: ['Who', 'What', 'Where'], hint: 'Queremos saber la identidad de ese niño (persona), usa Who. 👦'},
      {text: 'My pencils ________ yellow.', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: '"Pencils" termina en "s", son varios (They). El plural usa Are. ✏️'},
      {text: '________ is the party?', answer: 'When', options: ['When', 'Who', 'Why'], hint: 'Para saber el día o la hora de un evento, usamos When. 🥳'},
      {text: 'The cat ________ on the sofa.', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: 'El gato es un animal (It). Los animales en singular usan Is. 🐱'},
      {text: '________ is the bathroom?', answer: 'Where', options: ['Where', 'What', 'When'], hint: 'Para pedir direcciones o encontrar un lugar, usa Where. 🚽'},
      {text: 'You and I ________ happy.', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: '"Tú y yo" somos nosotros (We). Por eso usamos el plural Are. 😃'},
      {text: '________ are you late?', answer: 'Why', options: ['Why', 'Who', 'Where'], hint: 'Si necesitas una explicación o motivo, pregunta con Why. ⏰'},
      {text: 'The pizza ________ delicious!', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: 'La pizza es una cosa (It). A las cosas singulares les gusta el Is. 🍕'},
      {text: '________ is your best friend?', answer: 'Who', options: ['Who', 'What', 'Where'], hint: 'Tu mejor amigo es una persona, así que preguntamos con Who. 🤝'},
      {text: 'I ________ a good student.', answer: 'Am', options: ['Am', 'Is', 'Are'], hint: '¡No lo olvides! I es especial y solo se une con Am. 🌟'},
      {text: '________ is in the box?', answer: 'What', options: ['What', 'Who', 'When'], hint: 'Para saber qué objeto (cosa) hay escondido, usa What. 📦'},
      {text: 'My friends ________ cool.', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: '"Mis amigos" son ellos (They). Como son varios, usamos Are. 😎'},
      {text: 'El Intruso: ¿Cuál está mal?', answer: 'We is brothers', options: ['We is brothers', 'I am seven', 'She is my sister'], hint: '¡Atención! We es plural, así que su pareja correcta es Are. 🕵️‍♂️'}
    ],
    3: [
      {text: 'In Soccer, you... the ball with your feet. (En el fútbol, tú... el balón con los pies).', answer: 'Kick', options: ['Kick', 'Hit', 'Throw'], hint: 'Piensa en la acción que haces con los zapatos para meter un gol. ⚽'},
      {text: 'To play Tennis, you use a racket to... the ball. (Para jugar tenis, usas una raqueta para... la bola).', answer: 'Hit', options: ['Kick', 'Hit', 'Swim'], hint: 'Es el contacto fuerte que hace la raqueta con la pelota para que pase la red. 🎾'},
      {text: 'In Basketball, players... the ball to the hoop. (En el básquet, los jugadores... el balón al aro).', answer: 'Throw', options: ['Throw', 'Kick', 'Swim'], hint: 'Es el movimiento que haces con los brazos para que el balón llegue a la cesta. 🏀'},
      {text: 'True or False: You use a bat to hit the ball in Soccer. (¿Verdadero o Falso? Usas un bate en el fútbol).', answer: 'False', options: ['True', 'False'], hint: 'Recuerda que los bates de madera son para el béisbol, no para el balompié. ❌'},
      {text: 'True or False: In Swimming, you move in the water. (¿Verdadero o Falso? En natación te mueves en el agua).', answer: 'True', options: ['True', 'False'], hint: 'Piensa en el lugar donde se practica este deporte: una piscina. ✅'},
      {text: 'If you are running, you move your legs very fast. (Si estás corriendo, mueves las piernas muy rápido).', answer: 'True', options: ['True', 'False'], hint: 'Imagina que estás en una carrera y quieres llegar de primero a la meta. ✅'},
      {text: '¿Cómo se dice "Tenis" en inglés?', answer: 'Tennis', options: ['Tennis', 'Soccer', 'Basket'], hint: 'Se escribe casi igual que en español, pero con una letra repetida en el medio. 🎾'},
      {text: 'I... in the pool every Saturday. (Yo... en la piscina cada sábado).', answer: 'Swim', options: ['Run', 'Kick', 'Swim'], hint: 'Es lo que haces cuando te pones el traje de baño y entras al agua. 🏊‍♂️'},
      {text: 'True or False: In Volleyball, you kick the ball to score. (¿Verdadero o Falso? En voleibol pateas el balón).', answer: 'False', options: ['True', 'False'], hint: 'En este deporte usamos las palmas de las manos para que el balón no toque el suelo. 🏐'},
      {text: 'In Baseball, the pitcher... the ball very fast. (En el béisbol, el lanzador... la bola muy rápido).', answer: 'Throws', options: ['Throws', 'Swims', 'Kicks'], hint: 'Es la acción inicial del juego donde el lanzador envía la bola al bateador. ⚾'},
      {text: '¿Cómo se dice "Correr" en inglés?', answer: 'Run', options: ['Run', 'Swim', 'Hit'], hint: 'Es la acción de ir a gran velocidad usando tus piernas. 🏃‍♂️'},
      {text: 'True or False: In Basketball, you can\'t kick the ball. (¿Verdadero o Falso? En básquet no puedes patear la bola).', answer: 'True', options: ['True', 'False'], hint: 'En el baloncesto, tocar el balón con los pies es una infracción. ✅'},
      {text: 'To play Baseball, you use a bat to... the ball. (Para jugar béisbol, usas un bate para... la bola).', answer: 'Hit', options: ['Swim', 'Hit', 'Run'], hint: 'Es el impacto que hace el bate de madera contra la pequeña pelota blanca. ⚾'},
      {text: 'True or False: You need a pool to play Tennis. (¿Verdadero o Falso? Necesitas una piscina para jugar tenis).', answer: 'False', options: ['True', 'False'], hint: 'Este deporte se juega en una cancha de arcilla, cemento o césped. ❌'},
      {text: 'In Soccer, the goalie can... the ball with his hands. (En el fútbol, el portero puede... la bola con las manos).', answer: 'Catch', options: ['Catch', 'Kick', 'Swim'], hint: 'Es la acción de sujetar firmemente el balón para evitar un gol. 🧤'},
      {text: 'True or False: Running is a sport with a ball. (¿Verdadero o Falso? Correr es un deporte con balón).', answer: 'False', options: ['True', 'False'], hint: 'En el atletismo solo compites tú contra el tiempo u otros atletas. 👟'},
      {text: 'You... the ball in Basketball to score points. (Tú... el balón en el básquet para anotar).', answer: 'Throw', options: ['Throw', 'Swim', 'Hit'], hint: 'Es el movimiento de elevar el balón hacia el aro naranja. 🏀'},
      {text: 'True or False: You swim in a court. (¿Verdadero o Falso? Tú nadas en una cancha).', answer: 'False', options: ['True', 'False'], hint: 'Recuerda que las canchas son suelos firmes y para este deporte necesitas agua. 🏊‍♀️'},
      {text: '¿Cómo se dice "Voleibol" en inglés?', answer: 'Volleyball', options: ['Volleyball', 'Basket', 'Tennis'], hint: 'Se escribe con "y" al final y suena muy parecido al español. 🏐'},
      {text: 'True or False: In Baseball, you run through four bases. (¿Verdadero o Falso? En béisbol corres por 4 bases).', answer: 'True', options: ['True', 'False'], hint: 'Es el camino que recorre el bateador para anotar una carrera. ✅'},
      {text: 'I... the ball in Tennis with my racket. (Yo... la bola en el tenis con mi raqueta).', answer: 'Hit', options: ['Kick', 'Hit', 'Swim'], hint: 'Es la acción de golpear la pelota para que pase por encima de la red. 🎾'},
      {text: 'True or False: You run to play Soccer. (¿Verdadero o Falso? Tú corres para jugar fútbol).', answer: 'True', options: ['True', 'False'], hint: 'Los jugadores de campo se desplazan rápidamente por todo el terreno. ✅'},
      {text: 'In Swimming, you use your arms and legs to... (En natación, usas brazos y piernas para...).', answer: 'Swim', options: ['Swim', 'Hit', 'Kick'], hint: 'Es el movimiento coordinado para avanzar a través del carril de la piscina. 🐬'},
      {text: 'True or False: Baseball uses a very big orange ball. (¿Verdadero o Falso? El béisbol usa una bola naranja grande).', answer: 'False', options: ['True', 'False'], hint: 'La pelota de este deporte es pequeña, dura y de color blanco. ❌'},
      {text: '¿Cómo se dice "Lanzar" en inglés?', answer: 'Throw', options: ['Throw', 'Hit', 'Run'], hint: 'Es el acto de enviar algo por el aire usando el brazo y la mano. 🥎'},
      {text: 'True or False: To kick the ball, you use your head. (¿Verdadero o Falso? Para patear usas la cabeza).', answer: 'False', options: ['True', 'False'], hint: 'Piensa en qué parte del cuerpo está dentro de los zapatos de fútbol. 🦶'},
      {text: 'In Volleyball, we... the ball over the net. (En voleibol, nosotros... el balón sobre la red).', answer: 'Hit', options: ['Hit', 'Swim', 'Run'], hint: 'Es el golpe que le das al balón con las manos para que pase al campo contrario. 🏐'},
      {text: 'True or False: A Tennis ball is usually yellow. (¿Verdadero o Falso? La bola de tenis es amarilla).', answer: 'True', options: ['True', 'False'], hint: 'Es el color brillante característico de este deporte de raqueta. ✅'},
      {text: '¿Cómo se dice "Natación" en inglés?', answer: 'Swimming', options: ['Swimming', 'Running', 'Soccer'], hint: 'Se refiere al deporte donde te sumerges y avanzas en el agua. 🏊‍♂️'},
      {text: 'True or False: In Soccer, you use your hands to play. (¿Verdadero o Falso? En el fútbol usas las manos).', answer: 'False', options: ['True', 'False'], hint: 'Solo una persona con guantes puede hacerlo; para los demás está prohibido. 🚫'}
    ]
  },
  5: {
    1: [
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
    2: [
      {text: 'I ________ ten years old.', answer: 'Am', options: ['Am', 'Is', 'Are'], hint: 'Recuerda: "I" es el único que usa Am. ¡Son mejores amigos! 🔟'},
      {text: 'The dog ________ brown.', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: '"The dog" es un animal (It), y It siempre camina con Is. 🐶'},
      {text: 'We ________ best friends.', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: '"We" significa nosotros (varios). Para el plural usamos Are. 👥'},
      {text: '________ is your birthday?', answer: 'When', options: ['Who', 'When', 'Where'], hint: 'Usamos When porque preguntamos por el tiempo o una fecha. 🎂'},
      {text: 'She ________ a tall girl.', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: 'Para una sola niña (She), la regla dice que usamos Is. 👧'},
      {text: '________ is your name?', answer: 'What', options: ['What', 'Who', 'Why'], hint: 'Usamos What para preguntar "qué" o "cuál" sobre una cosa. 🆔'},
      {text: 'You ________ very funny!', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: 'No importa si es uno o muchos, You siempre usa Are. 😂'},
      {text: '________ is the teacher?', answer: 'Who', options: ['What', 'Who', 'When'], hint: 'Usamos Who porque la respuesta es una persona. 👩‍🏫'},
      {text: 'My mom ________ a teacher.', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: '"My mom" es ella (She). Recuerda: He, She e It usan Is. 👩‍🏫'},
      {text: '________ is my backpack?', answer: 'Where', options: ['Where', 'Who', 'When'], hint: 'Usamos Where cuando queremos saber el lugar donde está algo. 🎒'},
      {text: 'They ________ playing soccer.', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: '"They" son ellos (plural). Con muchos amigos siempre va Are. ⚽'},
      {text: '________ are you sad?', answer: 'Why', options: ['Who', 'Why', 'Where'], hint: 'Usamos Why para preguntar la razón o el motivo de algo. 😢'},
      {text: 'It ________ a sunny day.', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: 'El clima es una cosa (It). Y It siempre va con su pareja Is. ☀️'},
      {text: '________ is your favorite color?', answer: 'What', options: ['What', 'Who', 'Where'], hint: 'What nos sirve para pedir información sobre cosas o gustos. 🎨'},
      {text: 'El Intruso: ¿Cuál está mal?', answer: 'He are sad', options: ['I am happy', 'He are sad', 'We are fine'], hint: '¡Error! He es uno solo (Él), así que debe usar Is, no Are. 🕵️‍♂️'},
      {text: '________ are my keys?', answer: 'Where', options: ['Where', 'Who', 'What'], hint: 'Si buscas la ubicación de tus llaves, pregunta con Where. 🔑'},
      {text: 'El Intruso: ¿Cuál está mal?', answer: 'You is smart', options: ['You is smart', 'She is nice', 'I am tall'], hint: '¡Cuidado! Aunque seas una sola persona, You nunca usa Is. 🕵️‍♂️'},
      {text: '________ is that boy?', answer: 'Who', options: ['Who', 'What', 'Where'], hint: 'Queremos saber la identidad de ese niño (persona), usa Who. 👦'},
      {text: 'My pencils ________ yellow.', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: '"Pencils" termina en "s", son varios (They). El plural usa Are. ✏️'},
      {text: '________ is the party?', answer: 'When', options: ['When', 'Who', 'Why'], hint: 'Para saber el día o la hora de un evento, usamos When. 🥳'},
      {text: 'The cat ________ on the sofa.', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: 'El gato es un animal (It). Los animales en singular usan Is. 🐱'},
      {text: '________ is the bathroom?', answer: 'Where', options: ['Where', 'What', 'When'], hint: 'Para pedir direcciones o encontrar un lugar, usa Where. 🚽'},
      {text: 'You and I ________ happy.', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: '"Tú y yo" somos nosotros (We). Por eso usamos el plural Are. 😃'},
      {text: '________ are you late?', answer: 'Why', options: ['Why', 'Who', 'Where'], hint: 'Si necesitas una explicación o motivo, pregunta con Why. ⏰'},
      {text: 'The pizza ________ delicious!', answer: 'Is', options: ['Am', 'Is', 'Are'], hint: 'La pizza es una cosa (It). A las cosas singulares les gusta el Is. 🍕'},
      {text: '________ is your best friend?', answer: 'Who', options: ['Who', 'What', 'Where'], hint: 'Tu mejor amigo es una persona, así que preguntamos con Who. 🤝'},
      {text: 'I ________ a good student.', answer: 'Am', options: ['Am', 'Is', 'Are'], hint: '¡No lo olvides! I es especial y solo se une con Am. 🌟'},
      {text: '________ is in the box?', answer: 'What', options: ['What', 'Who', 'When'], hint: 'Para saber qué objeto (cosa) hay escondido, usa What. 📦'},
      {text: 'My friends ________ cool.', answer: 'Are', options: ['Am', 'Is', 'Are'], hint: '"Mis amigos" son ellos (They). Como son varios, usamos Are. 😎'},
      {text: 'El Intruso: ¿Cuál está mal?', answer: 'We is brothers', options: ['We is brothers', 'I am seven', 'She is my sister'], hint: '¡Atención! We es plural, así que su pareja correcta es Are. 🕵️‍♂️'}
    ],
    3: [
      {text: 'Every morning, I ________ at 6:00 AM. (Cada mañana, yo... a las 6:00 AM).', answer: 'Get up', options: ['Get up', 'Sleep', 'Take a shower'], hint: 'Es la acción que realizas cuando abres los ojos y sales de la cama por primera vez. ⏰'},
      {text: 'What is the first day of the school week? (¿Cuál es el primer día de la semana escolar?)', answer: 'Monday', options: ['Saturday', 'Monday', 'Friday'], hint: 'Es el día en el que termina el descanso y todos regresamos al colegio. 📅'},
      {text: 'I use a toothbrush to ________. (Uso un cepillo de dientes para...)', answer: 'Brush my teeth', options: ['Brush my teeth', 'Get dressed', 'Eat breakfast'], hint: 'Es la actividad de limpieza necesaria después de comer para evitar caries. 🪥'},
      {text: 'True or False: Sunday is a school day. (¿Verdadero o Falso? El domingo es un día de escuela).', answer: 'False', options: ['True', 'False'], hint: 'Piensa en el orden de la semana: es el día dedicado a descansar con la familia. ❌'},
      {text: 'I need soap and water to ________. (Necesito agua y jabón para...)', answer: 'Take a shower', options: ['Get up', 'Take a shower', 'Take the bus'], hint: 'Es lo que haces dentro de la bañera para estar muy limpio y oler bien. 🚿'},
      {text: 'The day before Tuesday is... (El día antes del martes es...)', answer: 'Monday', options: ['Wednesday', 'Monday', 'Thursday'], hint: 'Se trata del día que inicia el calendario de clases. 🗓️'},
      {text: 'I put on my shirt and pants to ________. (Me pongo mi camisa y pantalones para...)', answer: 'Get dressed', options: ['Get dressed', 'Eat breakfast', 'Take the bus'], hint: 'Es lo que haces justo después de bañarte para estar listo para salir. 👕'},
      {text: 'True or False: We eat breakfast in the morning. (¿Verdadero o Falso? Desayunamos por la mañana).', answer: 'True', options: ['True', 'False'], hint: 'Es la primera comida que recibes en el día para tener energía. ✅'},
      {text: 'The day after Wednesday is... (El día después del miércoles es...)', answer: 'Thursday', options: ['Tuesday', 'Thursday', 'Monday'], hint: 'Es el día que viene justo después de la mitad de la semana escolar. 📝'},
      {text: 'I go to the stop to ________ to school. (Voy a la parada para... a la escuela).', answer: 'Take the bus', options: ['Take the bus', 'Get up', 'Eat breakfast'], hint: 'Es lo que haces cuando usas un vehículo grande de transporte público. 🚌'},
      {text: 'Milk and cereal are for ________. (La leche y el cereal son para...)', answer: 'Eat breakfast', options: ['Eat breakfast', 'Get dressed', 'Take a shower'], hint: 'Es la actividad de alimentarse apenas comienza el día. 🥣'},
      {text: 'The weekend days are... (Los días del fin de semana son...)', answer: 'Saturday and Sunday', options: ['Monday and Tuesday', 'Saturday and Sunday', 'Friday'], hint: 'Son los dos días en los que no tienes que venir a estudiar al colegio. 🏖️'},
      {text: 'True or False: Saturday comes after Friday. (¿Verdadero o Falso? El sábado viene después del viernes).', answer: 'True', options: ['True', 'False'], hint: 'Piensa si el descanso empieza inmediatamente después de salir de clase el viernes. ✅'},
      {text: 'What day is between Tuesday and Thursday? (¿Qué día está entre el martes y el jueves?)', answer: 'Wednesday', options: ['Friday', 'Wednesday', 'Monday'], hint: 'Es el tercer día de la semana, justo el que divide los días de clase. 🐫'},
      {text: 'I use a towel after I... (Uso una toalla después de que yo...)', answer: 'Take a shower', options: ['Take a shower', 'Take the bus', 'Get up'], hint: 'Es el momento en que tu cuerpo queda mojado y necesitas secarte. 🧼'},
      {text: 'True or False: Wednesday is the last day of the week. (¿Verdadero o Falso? El miércoles es el último día).', answer: 'False', options: ['True', 'False'], hint: 'Analiza si después del miércoles todavía tienes tareas que entregar. ❌'},
      {text: 'I put on my shoes to... (Me pongo los zapatos para...)', answer: 'Get dressed', options: ['Get dressed', 'Take a shower', 'Get up'], hint: 'Es el paso final para completar tu uniforme o vestimenta. 👟'},
      {text: 'What day comes after Thursday? (¿Qué día viene después del jueves?)', answer: 'Friday', options: ['Wednesday', 'Friday', 'Tuesday'], hint: 'Es el último día de la semana en el que saludas al Teacher en clase. 🎈'},
      {text: 'I check my alarm clock to... (Reviso mi despertador para...)', answer: 'Get up', options: ['Get up', 'Eat breakfast', 'Take the bus'], hint: 'Es lo que haces para asegurarte de no quedarte dormido. 🔔'},
      {text: 'True or False: Friday is before Thursday. (¿Verdadero o Falso? El viernes es antes que el jueves).', answer: 'False', options: ['True', 'False'], hint: 'Repasa el orden: lunes, martes, miércoles, jueves... ¿cuál sigue? ❌'},
      {text: 'I drink orange juice when I... (Bebo jugo de naranja cuando...)', answer: 'Eat breakfast', options: ['Eat breakfast', 'Take a shower', 'Take the bus'], hint: 'Es la acción de consumir alimentos saludables al iniciar el día. 🍊'},
      {text: 'After Monday, the next day is... (Después del lunes, el siguiente día es...)', answer: 'Tuesday', options: ['Tuesday', 'Wednesday', 'Sunday'], hint: 'Se trata del segundo día de la semana en el que vienes a clases. ✌️'},
      {text: 'I comb my hair and I ________. (Me peino el cabello y yo...)', answer: 'Get dressed', options: ['Get dressed', 'Eat breakfast', 'Take the bus'], hint: 'Son las acciones que realizas para verte bien y arreglado antes de salir. 🪮'},
      {text: 'True or False: Thursday is the fourth day of the week. (¿Verdadero o Falso? El jueves es el 4to día).', answer: 'True', options: ['True', 'False'], hint: 'Cuenta los días laborables empezando desde el lunes. ✅'},
      {text: 'The bus driver helps me to... (El conductor del bus me ayuda a...)', answer: 'Take the bus', options: ['Take the bus', 'Brush my teeth', 'Get up'], hint: 'Es la acción de trasladarte al colegio en un transporte compartido. 🚌'},
      {text: 'I go to my bed at night, but in the morning I... (Voy a la cama de noche, pero en la mañana yo...)', answer: 'Get up', options: ['Get up', 'Take a shower', 'Take the bus'], hint: 'Es lo opuesto a irse a dormir al final de la jornada. 🌅'},
      {text: 'Which day is "Sábado" in English?', answer: 'Saturday', options: ['Sunday', 'Saturday', 'Monday'], hint: 'Es el día que inicia el fin de semana y solemos ir a pasear. 🍦'},
      {text: 'True or False: We take a shower in the kitchen. (¿Verdadero o Falso? Nos duchamos en la cocina).', answer: 'False', options: ['True', 'False'], hint: 'Piensa en qué habitación de la casa están la ducha y el jabón. ❌'},
      {text: 'I need my backpack to ________. (Necesito mi mochila para...)', answer: 'Take the bus', options: ['Take the bus', 'Take a shower', 'Get up'], hint: 'Es lo que haces cuando ya estás listo para subirte al transporte. 🎒'},
      {text: 'Which day is "Viernes" in English?', answer: 'Friday', options: ['Friday', 'Thursday', 'Tuesday'], hint: 'Es el día que celebramos porque mañana ya no hay clases. 🥳'}
    ]
  },
  6: {
    1: [
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
    ],
    2: [
      {text: 'I ________ eating chocolate.', answer: 'like', options: ['like', 'likes', "doesn't"], hint: 'Con I (Yo), el verbo se queda igual. I like significa "Me gusta". 🍫'},
      {text: 'My sister ________ watching movies.', answer: 'likes', options: ['like', 'likes', "don't"], hint: '"My sister" es She (Ella). Recuerda: He, She e It siempre llevan la "S". 🎬'},
      {text: 'They ________ doing exercise.', answer: "don't like", options: ["don't like", "doesn't like", 'likes'], hint: 'Como son varios (They - Ellos), el "no" se dice con don\'t like. 🏃‍♂️'},
      {text: 'He ________ cleaning his bedroom.', answer: "doesn't like", options: ["don't like", "doesn't like", 'like'], hint: 'Con He (Él), el "no me gusta" se dice doesn\'t like. 🧹'},
      {text: 'We ________ English class!', answer: 'like', options: ['like', 'likes', "doesn't"], hint: '"We" significa Nosotros. Para los grupos grandes no usamos la "S". 📚'},
      {text: 'Negativo: I like swimming.', answer: "I don't like", options: ["I don't like", "I doesn't like", 'I likes'], hint: 'Para decir "No me gusta" con I (Yo), usa siempre don\'t like. 🏊‍♂️'},
      {text: 'Negativo: She likes apples.', answer: "She doesn't like", options: ["She don't like", "She doesn't like", 'She not'], hint: 'Con She (Ella), usamos doesn\'t. ¡Al ponerlo, le quitamos la "S" a like! 🍎'},
      {text: 'Error: She don\'t like pizza.', answer: "She doesn't like", options: ["She doesn't like", 'She likes', "She don't"], hint: '¡Cuidado! She (Ella) es especial y siempre usa doesn\'t para negar. 🍕'},
      {text: 'Error: He like reading.', answer: 'He likes', options: ["He don't like", 'He likes', 'He liking'], hint: '¡Falta la regla! He (Él) siempre necesita la "S" al final: He likes. 📖'},
      {text: 'Error: They doesn\'t like spiders.', answer: "They don't like", options: ["They don't like", 'They likes', "They doesn't"], hint: 'They (Ellos) es plural, así que le corresponde usar don\'t like. 🕷️'},
      {text: 'It ________ playing with the ball.', answer: 'likes', options: ['like', 'likes', "don't"], hint: 'Los animales (It) también llevan la "S" en el verbo: It likes. 🎾'},
      {text: 'You ________ eating pizza.', answer: 'like', options: ['like', 'likes', "doesn't"], hint: 'Con You (Tú/Ustedes), el verbo nunca lleva "S". Se dice You like. 🍕'},
      {text: 'My friends ________ playing games.', answer: 'like', options: ['like', 'likes', "doesn't"], hint: '"My friends" son varios (They). No necesitan la "S" al final. 🎮'},
      {text: 'Negativo: We like singing.', answer: "We don't like", options: ["We don't like", "We doesn't like", 'We likes'], hint: 'Para "Nosotros" (We), el "no" se escribe don\'t like. 🎤'},
      {text: 'She ________ dancing ballet.', answer: 'likes', options: ['like', 'likes', "don't"], hint: 'Como es ella (She), el verbo debe llevar la "S": She likes. 💃'},
      {text: 'Error: My dad like cooking.', answer: 'My dad likes', options: ['My dad likes', "My dad don't", 'My dad like'], hint: '"My dad" es He (Él). ¡No olvides la "S" del final! 👨‍🍳'},
      {text: 'I ________ playing video games.', answer: "don't like", options: ["don't like", "doesn't like", 'likes'], hint: 'Para decir "A mí no me gusta", la pareja de I es don\'t. 🕹️'},
      {text: 'Negativo: He likes running.', answer: "He doesn't like", options: ["He don't like", "He doesn't like", 'He not'], hint: 'Con He (Él), usamos doesn\'t y el verbo pierde su "S". 🏃‍♂️'},
      {text: 'You ________ drinking soda.', answer: "don't like", options: ["don't like", "doesn't like", 'likes'], hint: 'El "no" para You (Tú) es siempre con don\'t like. 🥤'},
      {text: 'My cat ________ sleeping.', answer: 'likes', options: ['like', 'likes', "don't"], hint: '"My cat" es un animal (It). Ponle la "S" al verbo: It likes. 🐈'},
      {text: 'I ________ my room yesterday.', answer: 'cleaned', options: ['clean', 'cleaned', 'cleans'], hint: 'Como fue ayer (yesterday), al verbo le agregamos -ed para el pasado. 🧹'},
      {text: 'We ________ soccer last Friday.', answer: 'played', options: ['play', 'played', 'playing'], hint: 'Para acciones pasadas (last Friday), usamos la terminación -ed. ⚽'},
      {text: 'She ________ her homework.', answer: 'finished', options: ['finish', 'finished', 'finishes'], hint: 'El pasado de los verbos regulares termina en -ed (finished - terminó). 📝'},
      {text: 'They ________ TV all night.', answer: 'watched', options: ['watch', 'watched', 'watching'], hint: 'Si pasó anoche (last night), "watch" se convierte en watched. 📺'},
      {text: 'My dad ________ a delicious cake.', answer: 'cooked', options: ['cook', 'cooked', 'cooks'], hint: 'Para decir "cocinó" (pasado), añadimos -ed al final del verbo. 👨‍🍳'},
      {text: 'It ________ a lot last night.', answer: 'rained', options: ['rain', 'rained', 'rains'], hint: 'El pasado de llover (rain) es muy fácil: solo ponle -ed al final. 🌧️'},
      {text: 'You ________ to the music.', answer: 'listened', options: ['listen', 'listened', 'listens'], hint: 'Si ya escuchaste la música, el verbo es listened (escuchó). 🎧'},
      {text: 'The boys ________ to the park.', answer: 'walked', options: ['walk', 'walked', 'walks'], hint: 'Caminaron (walked) en pasado, así que usamos la terminación -ed. 🚶‍♂️'},
      {text: 'I ________ my car on Monday.', answer: 'washed', options: ['wash', 'washed', 'washing'], hint: 'Fue el lunes, la acción ya terminó. Usamos el pasado washed. 🧼'},
      {text: 'The cat ________ on the tree.', answer: 'jumped', options: ['jump', 'jumped', 'jumps'], hint: '"Jumped" significa saltó. Recuerda el -ed para el pasado. 🐈'}
    ],
    3: [
      {text: 'Which sport is played with a racket and a yellow ball?', answer: 'Tennis', options: ['Tennis', 'Soccer', 'Swimming'], hint: 'Pregunta: ¿Qué deporte se juega con una raqueta y una pelota amarilla? Pista: Es el deporte donde golpeas la pelota sobre una red. 🎾'},
      {text: 'In American Football, players ________ the ball to a teammate.', answer: 'Throw', options: ['Swim', 'Throw', 'Kick'], hint: 'Pregunta: En el fútbol americano, los jugadores... el balón a un compañero. Pista: Es la acción de lanzar con las manos. 🏈'},
      {text: 'What day comes after Tuesday?', answer: 'Wednesday', options: ['Monday', 'Wednesday', 'Friday'], hint: 'Pregunta: ¿Qué día viene después del martes? Pista: Es el día que divide la semana escolar a la mitad. 📅'},
      {text: 'True or False: You need goggles to practice swimming.', answer: 'True', options: ['True', 'False'], hint: 'Pregunta: ¿Verdadero o Falso? Necesitas lentes protectores para practicar natación. Pista: Se usan para proteger los ojos bajo el agua. 🤿'},
      {text: 'In Soccer, players ________ the ball to score a goal.', answer: 'Kick', options: ['Hit', 'Kick', 'Throw'], hint: 'Pregunta: En el fútbol, los jugadores... el balón para meter un gol. Pista: Es el movimiento que haces con el pie. ⚽'},
      {text: 'What is the last day of the weekend?', answer: 'Sunday', options: ['Saturday', 'Sunday', 'Monday'], hint: 'Pregunta: ¿Cuál es el último día del fin de semana? Pista: Es el día de descanso antes de volver a clases el lunes. ⛪'},
      {text: 'In Basketball, you need to throw the ball into the ________.', answer: 'Hoop', options: ['Hoop', 'Goggles', 'Bike'], hint: 'Pregunta: En el básquet, necesitas lanzar el balón dentro del... Pista: Es el aro con red donde anotas los puntos. 🏀'},
      {text: 'To play Baseball, you use a bat to ________ the ball.', answer: 'Hit', options: ['Run', 'Hit', 'Swim'], hint: 'Pregunta: Para jugar béisbol, usas un bate para... la bola. Pista: Es la acción de golpear la bola con madera. ⚾'},
      {text: 'True or False: Thursday is the day before Wednesday.', answer: 'False', options: ['True', 'False'], hint: 'Pregunta: ¿Verdadero o Falso? El jueves es el día antes del miércoles. Pista: Repasa el orden: lunes, martes, miércoles... ❌'},
      {text: 'If you are running, you move your legs very...', answer: 'Fast', options: ['Slow', 'Fast', 'High'], hint: 'Pregunta: Si estás corriendo, mueves las piernas muy... Pista: Es lo opuesto a ir lento para poder ganar una carrera. 🏃‍♂️'},
      {text: 'Which equipment do you use for Cycling?', answer: 'Bike', options: ['Hoop', 'Ball', 'Bike'], hint: 'Pregunta: ¿Qué equipo usas para el ciclismo? Pista: Es el vehículo de dos ruedas que mueves con pedales. 🚲'},
      {text: 'True or False: You can use your hands in Soccer.', answer: 'False', options: ['True', 'False'], hint: 'Pregunta: ¿Verdadero o Falso? Puedes usar tus manos en el fútbol. Pista: Recuerda que solo el portero tiene ese permiso. 🚫'},
      {text: 'What day is between Wednesday and Friday?', answer: 'Thursday', options: ['Tuesday', 'Thursday', 'Saturday'], hint: 'Pregunta: ¿Qué día está entre el miércoles y el viernes? Pista: Es el cuarto día de la semana escolar. 🗓️'},
      {text: 'In Volleyball, players use their hands to ________ the ball.', answer: 'Hit', options: ['Kick', 'Hit', 'Run'], hint: 'Pregunta: En el voleibol, los jugadores usan sus manos para... el balón. Pista: Es el golpe que le das para que pase la red. 🏐'},
      {text: 'To see underwater in the pool, you wear...', answer: 'Goggles', options: ['Goggles', 'Racket', 'Hoop'], hint: 'Pregunta: Para ver bajo el agua en la piscina, usas... Pista: Son los lentes que cubren tus ojos al nadar. 🥽'},
      {text: 'True or False: Friday is the last day of the school week.', answer: 'True', options: ['True', 'False'], hint: 'Pregunta: ¿Verdadero o Falso? El viernes es el último día de la semana escolar. Pista: Es el día en que todos dicen "¡por fin llegó el fin de semana!". ✅'},
      {text: 'In Baseball, the pitcher ________ the ball to the batter.', answer: 'Throws', options: ['Throws', 'Kicks', 'Swims'], hint: 'Pregunta: En el béisbol, el lanzador... la bola al bateador. Pista: Es la acción de enviar la bola por el aire con el brazo. 🥎'},
      {text: 'What day is before Tuesday?', answer: 'Monday', options: ['Wednesday', 'Monday', 'Sunday'], hint: 'Pregunta: ¿Qué día es antes del martes? Pista: Es el primer día que vienes a la escuela cada semana. 🎒'},
      {text: 'A Basketball is big and ________.', answer: 'Orange', options: ['Blue', 'Orange', 'Green'], hint: 'Pregunta: Un balón de básquet es grande y... Pista: Es el color característico de la pelota de baloncesto. 🏀'},
      {text: 'True or False: You use a racket to play Volleyball.', answer: 'False', options: ['True', 'False'], hint: 'Pregunta: ¿Verdadero o Falso? Usas una raqueta para jugar voleibol. Pista: Piensa si usas un objeto o tus manos en este deporte. ❌'},
      {text: 'I ________ in the water to exercise.', answer: 'Swim', options: ['Swim', 'Run', 'Hit'], hint: 'Pregunta: Yo... en el agua para hacer ejercicio. Pista: Es lo que haces en la piscina o en el mar. 🏊‍♂️'},
      {text: 'Which day is "Sábado" in English?', answer: 'Saturday', options: ['Sunday', 'Saturday', 'Friday'], hint: 'Pregunta: ¿Qué día es Sábado en inglés? Pista: Es el primer día de descanso del fin de semana. 🍦'},
      {text: 'To play Tennis, you hit the ball with a ________.', answer: 'Racket', options: ['Bat', 'Racket', 'Hoop'], hint: 'Pregunta: Para jugar tenis, golpeas la bola con una... Pista: Es el implemento con cuerdas que usas para batear en tenis. 🎾'},
      {text: 'True or False: Monday is part of the weekend.', answer: 'False', options: ['True', 'False'], hint: 'Pregunta: ¿Verdadero o Falso? El lunes es parte del fin de semana. Pista: Recuerda si el lunes te quedas durmiendo o vienes a clase. ❌'},
      {text: 'The player ________ the ball in Soccer with his shoes.', answer: 'Kicks', options: ['Kicks', 'Throws', 'Swims'], hint: 'Pregunta: El jugador... el balón en fútbol con sus zapatos. Pista: Es la acción de golpear con el pie. 👟'},
      {text: 'What day comes after Friday?', answer: 'Saturday', options: ['Sunday', 'Saturday', 'Thursday'], hint: 'Pregunta: ¿Qué día viene después del viernes? Pista: Es el día favorito para ir al cine o pasear. 🎬'},
      {text: 'You use a ________ to play Baseball.', answer: 'Ball', options: ['Ball', 'Bike', 'Goggles'], hint: 'Pregunta: Usas una... para jugar al béisbol. Pista: Es el objeto redondo y duro que el pitcher lanza. ⚾'},
      {text: 'True or False: You run in a marathon.', answer: 'True', options: ['True', 'False'], hint: 'Pregunta: ¿Verdadero o Falso? Tú corres en un maratón. Pista: El maratón es una competencia de mucha velocidad y distancia. 🏁'},
      {text: 'In Basketball, the ball must go through the ________.', answer: 'Hoop', options: ['Hoop', 'Racket', 'Goggles'], hint: 'Pregunta: En el básquet, el balón debe pasar por el... Pista: Se refiere a la canasta donde se anotan los puntos. ⛹️‍♂️'},
      {text: 'Which day is "Jueves" in English?', answer: 'Thursday', options: ['Tuesday', 'Wednesday', 'Thursday'], hint: 'Pregunta: ¿Qué día es Jueves en inglés? Pista: Es el día que está justo antes del viernes. 🗓️'}
    ]
  }
};

const ldWords = [
    { en: 'DOG', es: 'PERRO' }, { en: 'CAT', es: 'GATO' }, { en: 'HOUSE', es: 'CASA' },
    { en: 'RED', es: 'ROJO' }, { en: 'BLUE', es: 'AZUL' }, { en: 'YELLOW', es: 'AMARILLO' },
    { en: 'ONE', es: 'UNO' }, { en: 'TWO', es: 'DOS' }, { en: 'THREE', es: 'TRES' },
    { en: 'SUN', es: 'SOL' }, { en: 'MOON', es: 'LUNA' }, { en: 'STAR', es: 'ESTRELLA' },
    { en: 'WATER', es: 'AGUA' }, { en: 'BREAD', es: 'PAN' }, { en: 'APPLE', es: 'MANZANA' },
    { en: 'CAR', es: 'CARRO' }, { en: 'TREE', es: 'ÁRBOL' }, { en: 'BOOK', es: 'LIBRO' },
    { en: 'RUN', es: 'CORRER' }, { en: 'EAT', es: 'COMER' }, { en: 'SLEEP', es: 'DORMIR' }
];

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const sections = {
    home: document.getElementById('home'),
    langMenu: document.getElementById('langMenu'),
    games: document.getElementById('gamesMenu'),
    grades: document.getElementById('grades'),
    practice: document.getElementById('practice'),
    evaluations: document.getElementById('evaluationsMenu'),
    wordSearch: document.getElementById('wordSearchSection'),
    prueba: document.getElementById('pruebaSection'),
    lingoDrift: document.getElementById('lingoDriftSection')
  };

  // Buttons & Interactive
  const homeBtn = document.getElementById('homeBtn');
  const backFromLangMenu = document.getElementById('backFromLangMenu');
  const backFromGrades = document.getElementById('backFromGrades');
  const backFromEvaluations = document.getElementById('backFromEvaluations');
  const backFromPractice = document.getElementById('backFromPractice');
  const backFromGames = document.getElementById('backFromGames');
  const backFromWordSearch = document.getElementById('backFromWordSearch');
  const backFromPrueba = document.getElementById('backFromPrueba');
  const backFromLingoDrift = document.getElementById('backFromLingoDrift');
  const pruebaFSBtn = document.getElementById('pruebaFSBtn');
  const pruebaMuteBtn = document.getElementById('pruebaMuteBtn');
  const lingoDriftFSBtn = document.getElementById('lingoDriftFSBtn');
  const lingoDriftMuteBtn = document.getElementById('lingoDriftMuteBtn');
  
  const themeBtn = document.getElementById('themeBtn');
  const feedbackBtn = document.getElementById('feedbackBtn');
  const studyBtn = document.getElementById('studyBtn');
  const gamesBtn = document.getElementById('gamesBtn');
  const eval1Btn = document.getElementById('eval1Btn');
  const eval2Btn = document.getElementById('eval2Btn');
  const eval1Info = document.getElementById('eval1Info');
  const eval1Tooltip = document.getElementById('eval1Tooltip');
  const eval2Info = document.getElementById('eval2Info');
  const eval2Tooltip = document.getElementById('eval2Tooltip');
  const eval3Info = document.getElementById('eval3Info');
  const eval3Tooltip = document.getElementById('eval3Tooltip');
  
  const pruebaBtn = document.getElementById('pruebaBtn');
  const wordSearchBtn = document.getElementById('wordSearchBtn');
  const lingoDriftBtn = document.getElementById('lingoDriftBtn');
  const newGameBtn = document.getElementById('newGameBtn');
  const wsHintBtn = document.getElementById('wsHintBtn');
  const wordSearchGrid = document.getElementById('wordSearchGrid');
  const wordListEl = document.getElementById('wordList');
  
  const wsSuccessPopup = document.getElementById('wsSuccessPopup');
  const wsRestartBtn = document.getElementById('wsRestartBtn');
  const wsExitBtn = document.getElementById('wsExitBtn');

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
  const gamesMenuTitle = document.getElementById('gamesMenuTitle');
  const langCards = document.querySelectorAll('.lang-card');
  const gradeBtns = document.querySelectorAll('.grade-btn');
  
  // Popup Elements
  const popupOverlay = document.getElementById('newsletterPopup');
  const closePopupBtn = document.getElementById('closePopupBtn');
  const newsletterForm = document.getElementById('newsletterForm');
  const formResult = document.getElementById('formResult');

  // Feedback Popup Elements
  const feedbackPopup = document.getElementById('feedbackPopup');
  const closeFeedbackBtn = document.getElementById('closeFeedbackBtn');
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackResult = document.getElementById('feedbackResult');

  // Eval Info Popup Elements
  const evalInfoPopup = document.getElementById('evalInfoPopup');
  const closeEvalPopupBtn = document.getElementById('closeEvalPopupBtn');
  const evalPopupBody = document.getElementById('evalPopupBody');

  // --- State ---
  let state = {
    language: null,
    grade: null,
    questions: [],
    evaluation: 1,
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
    state = { language: null, grade: null, questions: [], evaluation: 1, idx: 0, selected: null, selectedBtn: null, correctCount: 0 };
  }

  function showLangMenu(lang) {
    if (lang) state.language = lang;
    hideAll();
    sections.langMenu.classList.remove('hidden');
    const label = state.language === 'it' ? 'Italiano' : 'Inglés';
    document.getElementById('langMenuTitle').textContent = `Opciones — ${label}`;
    
    if ((state.language === 'it' || state.language === 'en') && gamesBtn) {
      gamesBtn.classList.remove('hidden');
    } else if (gamesBtn) {
      gamesBtn.classList.add('hidden');
    }
  }

  function showGamesMenu() {
    hideAll();
    sections.games.classList.remove('hidden');

    // Mostrar/ocultar juegos según el idioma
    if (state.language === 'it') {
      if (pruebaBtn) pruebaBtn.classList.remove('hidden');
      if (wordSearchBtn) wordSearchBtn.classList.remove('hidden');
      if (lingoDriftBtn) lingoDriftBtn.classList.add('hidden');
      if (gamesMenuTitle) gamesMenuTitle.textContent = 'Juegos';
    } else if (state.language === 'en') {
      if (pruebaBtn) pruebaBtn.classList.add('hidden');
      if (wordSearchBtn) wordSearchBtn.classList.remove('hidden');
      if (lingoDriftBtn) lingoDriftBtn.classList.remove('hidden');
      if (gamesMenuTitle) gamesMenuTitle.textContent = 'Games';
    }
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

    // Ocultar Evaluación #3 si es Italiano (solo hay 2)
    const eval3Btn = document.getElementById('eval3Btn');
    if (eval3Btn && eval3Btn.parentNode) {
      if (state.language === 'it') {
        eval3Btn.parentNode.classList.add('hidden');
      } else {
        eval3Btn.parentNode.classList.remove('hidden');
      }
    }
    
    // Actualizar contenido del tooltip según el grado
    const tooltip = document.getElementById('eval1Tooltip');
    if (tooltip) {
      let topics = '';
      let date = '';

      if (state.language === 'en') {
        if (state.grade === 6) {
          date = 'Viernes 30 de Enero';
          topics = 'What time is it?<br>Numbers and Years<br>I like it';
        } else if (state.grade === 5) {
          date = 'Viernes 30 de Enero';
          topics = 'I like<br>Past tense';
        } else if (state.grade === 4) {
          date = 'Jueves 29 de Enero';
          topics = 'Morning activities<br>Days of the week<br>I like';
        } else if (state.grade === 3) {
          date = 'Jueves 29 de Enero';
          topics = 'Numbers<br>School Objects<br>I like';
        } else if (state.grade === 2) {
          date = 'Miércoles 28 de Enero';
          topics = 'Morning Activities<br>School Subjects<br>I Like';
        } else if (state.grade === 1) {
          date = 'Miércoles 28 de Enero';
          topics = 'Numbers<br>Shapes<br>Math';
        }
      } else if (state.language === 'it') {
        if (state.grade === 1) {
          date = 'Martes 03 de Febrero';
          topics = 'Il cane<br>Il gatto<br>L\'uccello';
        } else if (state.grade === 2) {
          date = 'Martes 03 de Febrero';
          topics = 'I Numeri<br>La Settimana<br>Il tempo';
        } else {
          topics = 'I Colori<br>I Vestiti<br>Il Mio Corpo';
          if (state.grade === 3) {
            date = 'Martes 03 de Febrero';
          } else if (state.grade === 5 || state.grade === 6) {
            date = 'Miércoles 04 de Febrero';
          } else if (state.grade === 4) {
            date = 'Jueves 05 de Febrero';
          }
        }
      }
      
      tooltip.innerHTML = `
        <strong>Fecha:</strong><br>${date}<br><br>
        <strong>Temas:</strong><br>${topics}<br><br>
        <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
      `;
    }

    // Tooltip Evaluación #2
    const tooltip2 = document.getElementById('eval2Tooltip');
    if (tooltip2) {
      if (state.language === 'en' && state.grade === 1) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>Colors<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'it' && state.grade === 1) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>Gli animali<br>La mucca<br>Il pesce<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'it' && state.grade === 2) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>I mesi<br>Il mondo<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'it' && state.grade === 3) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>I sensi<br>Le mie azioni<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'it' && state.grade === 4) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>I sensi<br>Le mie azioni<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'it' && state.grade === 5) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>I sensi<br>Le mie azioni<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'it' && state.grade === 6) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>I sensi<br>Le mie azioni<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'en' && state.grade === 2) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>Sports<br>Action Verbs<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'en' && state.grade === 3) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>Sports<br>Action Verbs<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'en' && (state.grade === 4 || state.grade === 5)) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>Am, Is, Are<br>Questions<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'en' && state.grade === 6) {
        tooltip2.innerHTML = `
          <strong>Temas:</strong><br>I Like<br>Past Tense<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else {
        tooltip2.innerHTML = "Próximamente...";
      }
    }

    if (eval3Tooltip) {
      if (state.language === 'en' && state.grade === 1) {
        eval3Tooltip.innerHTML = `
          <strong>Temas:</strong><br>My Face<br>My House<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'en' && state.grade === 2) {
        eval3Tooltip.innerHTML = `
          <strong>Temas:</strong><br>My House<br>Transportation<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'en' && state.grade === 3) {
        eval3Tooltip.innerHTML = `
          <strong>Temas:</strong><br>My House<br>Transportation<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'en' && state.grade === 4) {
        eval3Tooltip.innerHTML = `
          <strong>Temas:</strong><br>Sports<br>Action Verbs<br>True or False<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'en' && state.grade === 5) {
        eval3Tooltip.innerHTML = `
          <strong>Temas:</strong><br>Morning Activities<br>Days of the Week<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else if (state.language === 'en' && state.grade === 6) {
        eval3Tooltip.innerHTML = `
          <strong>Temas:</strong><br>Sports<br>Action Verbs<br>Days of the Week<br><br>
          <strong>Nota:</strong><br>Estos ejercicios NO son los que aparecerán necesariamente en la evaluación. Son relacionados a los temas a estudiar para facilitar el aprendizaje de los alumnos.
        `;
      } else {
        eval3Tooltip.innerHTML = "Próximamente...";
      }
    }
  }

  function showPractice(grade) {
    state.grade = Number(grade);
    const bank = state.language === 'it' ? bankIt : bankEn;
    let questionsSource = bank[state.grade];
    if (questionsSource && !Array.isArray(questionsSource)) {
      questionsSource = questionsSource[state.evaluation || 1];
    }
    state.questions = shuffleArray((questionsSource || []).slice()).slice(0, 15);
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
    const isEval1 = (state.language === 'en' && [1,2,3,4,5,6].includes(state.grade)) || 
                    (state.language === 'it' && [1,2,3,4,5,6].includes(state.grade));

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

  // --- Word Search Logic ---
  const wsWordsIt = [
    // Animales
    {it: 'CANE', es: 'PERRO'}, {it: 'GATTO', es: 'GATO'}, {it: 'UCCELLO', es: 'PÁJARO'}, {it: 'PESCE', es: 'PEZ'}, 
    {it: 'LEONE', es: 'LEÓN'}, {it: 'MUCCA', es: 'VACA'}, {it: 'CAVALLO', es: 'CABALLO'}, {it: 'TOPO', es: 'RATÓN'}, 
    {it: 'FARFALLA', es: 'MARIPOSA'}, {it: 'ORSO', es: 'OSO'}, {it: 'LUPO', es: 'LOBO'}, {it: 'VOLPE', es: 'ZORRO'},
    {it: 'RAGNO', es: 'ARAÑA'}, {it: 'FORMICA', es: 'HORMIGA'}, {it: 'APE', es: 'ABEJA'}, {it: 'SCIMMIA', es: 'MONO'},

    // Comida y Bebida
    {it: 'PANE', es: 'PAN'}, {it: 'ACQUA', es: 'AGUA'}, {it: 'LATTE', es: 'LECHE'}, {it: 'FORMAGGIO', es: 'QUESO'}, 
    {it: 'FRUTTA', es: 'FRUTA'}, {it: 'MELA', es: 'MANZANA'}, {it: 'PERA', es: 'PERA'}, {it: 'UVA', es: 'UVA'}, 
    {it: 'POLLO', es: 'POLLO'}, {it: 'UOVO', es: 'HUEVO'}, {it: 'DOLCE', es: 'DULCE'}, {it: 'GELATO', es: 'HELADO'},
    {it: 'SUCCO', es: 'JUGO'}, {it: 'RISO', es: 'ARROZ'}, {it: 'CENA', es: 'CENA'}, {it: 'PRANZO', es: 'ALMUERZO'},

    // Naturaleza
    {it: 'SOLE', es: 'SOL'}, {it: 'STELLA', es: 'ESTRELLA'}, {it: 'MARE', es: 'MAR'}, {it: 'FIORE', es: 'FLOR'}, 
    {it: 'ALBERO', es: 'ÁRBOL'}, {it: 'FUOCO', es: 'FUEGO'}, {it: 'TERRA', es: 'TIERRA'}, {it: 'MONTAGNA', es: 'MONTAÑA'},
    {it: 'FIUME', es: 'RÍO'}, {it: 'BOSCO', es: 'BOSQUE'}, {it: 'PIOGGIA', es: 'LLUVIA'}, {it: 'VENTO', es: 'VIENTO'},
    {it: 'NEVE', es: 'NIEVE'}, {it: 'NUVOLA', es: 'NUBE'}, {it: 'SABBIA', es: 'ARENA'}, {it: 'ERBA', es: 'HIERBA'},

    // Colores
    {it: 'ROSSO', es: 'ROJO'}, {it: 'BLU', es: 'AZUL'}, {it: 'GIALLO', es: 'AMARILLO'}, {it: 'BIANCO', es: 'BLANCO'}, 
    {it: 'NERO', es: 'NEGRO'}, {it: 'ARANCIONE', es: 'NARANJA'}, {it: 'VIOLA', es: 'MORADO'}, {it: 'MARRONE', es: 'MARRÓN'},
    {it: 'GRIGIO', es: 'GRIS'}, {it: 'AZZURRO', es: 'CELESTE'},

    // Partes del Cuerpo
    {it: 'PIEDE', es: 'PIE'}, {it: 'TESTA', es: 'CABEZA'}, {it: 'OCCHIO', es: 'OJO'}, {it: 'NASO', es: 'NARIZ'}, 
    {it: 'BOCCA', es: 'BOCA'}, {it: 'BRACCIO', es: 'BRAZO'}, {it: 'GAMBA', es: 'PIERNA'}, {it: 'DITO', es: 'DEDO'}, 
    {it: 'CAPELLI', es: 'CABELLO'}, {it: 'ORECCHIO', es: 'OREJA'}, {it: 'COLLO', es: 'CUELLO'}, {it: 'SCHIENA', es: 'ESPALDA'},
    {it: 'PANCIA', es: 'BARRIGA'}, {it: 'CUORE', es: 'CORAZÓN'},

    // Ropa
    {it: 'CAMICIA', es: 'CAMISA'}, {it: 'PANTALONI', es: 'PANTALONES'}, {it: 'SCARPE', es: 'ZAPATOS'}, {it: 'GONNA', es: 'FALDA'},
    {it: 'VESTITO', es: 'VESTIDO'}, {it: 'GIACCA', es: 'CHAQUETA'}, {it: 'MAGLIONE', es: 'SUÉTER'}, {it: 'CAPPELLO', es: 'SOMBRERO'},
    {it: 'CALZE', es: 'CALCETINES'}, {it: 'GUANTI', es: 'GUANTES'}, {it: 'BORSA', es: 'BOLSO'},

    // Familia
    {it: 'FRATELLO', es: 'HERMANO'}, {it: 'SORELLA', es: 'HERMANA'}, {it: 'NONNO', es: 'ABUELO'}, {it: 'NONNA', es: 'ABUELA'}, 
    {it: 'FIGLIO', es: 'HIJO'}, {it: 'FIGLIA', es: 'HIJA'}, {it: 'ZIO', es: 'TÍO'}, {it: 'ZIA', es: 'TÍA'}, 
    {it: 'CUGINO', es: 'PRIMO'}, {it: 'NIPOTE', es: 'NIETO/SOBRINO'},

    // Números
    {it: 'DUE', es: 'DOS'}, {it: 'TRE', es: 'TRES'}, {it: 'QUATTRO', es: 'CUATRO'}, {it: 'CINQUE', es: 'CINCO'}, 
    {it: 'SEI', es: 'SEIS'}, {it: 'SETTE', es: 'SIETE'}, {it: 'OTTO', es: 'OCHO'}, {it: 'NOVE', es: 'NUEVE'}, 
    {it: 'DIECI', es: 'DIEZ'}, {it: 'VENTI', es: 'VEINTE'}, {it: 'TRENTA', es: 'TREINTA'}, {it: 'CENTO', es: 'CIEN'},

    // Días de la semana
    {it: 'LUNEDI', es: 'LUNES'}, {it: 'MARTEDI', es: 'MARTES'}, {it: 'MERCOLEDI', es: 'MIÉRCOLES'}, {it: 'GIOVEDI', es: 'JUEVES'},
    {it: 'VENERDI', es: 'VIERNES'}, {it: 'SABATO', es: 'SÁBADO'}, {it: 'DOMENICA', es: 'DOMINGO'},

    // Acciones
    {it: 'CORRERE', es: 'CORRER'}, {it: 'SALTARE', es: 'SALTAR'}, {it: 'RIDERE', es: 'REÍR'}, {it: 'PIANGERE', es: 'LLORAR'},
    {it: 'CANTARE', es: 'CANTAR'}, {it: 'BALLARE', es: 'BAILAR'}, {it: 'CAMMINARE', es: 'CAMINAR'}, {it: 'NUOTARE', es: 'NADAR'},
    {it: 'VOLARE', es: 'VOLAR'}, {it: 'APRIRE', es: 'ABRIR'}, {it: 'CHIUDERE', es: 'CERRAR'},

    // Casa y Objetos
    {it: 'TAVOLO', es: 'MESA'}, {it: 'SEDIA', es: 'SILLA'}, {it: 'PORTA', es: 'PUERTA'}, {it: 'FINESTRA', es: 'VENTANA'},
    {it: 'LETTO', es: 'CAMA'}, {it: 'CUCINA', es: 'COCINA'}, {it: 'BAGNO', es: 'BAÑO'}, {it: 'MURO', es: 'PARED'},
    {it: 'CHIAVE', es: 'LLAVE'}, {it: 'OROLOGIO', es: 'RELOJ'}, {it: 'SOLDI', es: 'DINERO'}, {it: 'PENNA', es: 'BOLÍGRAFO'},

    // Transporte
    {it: 'TRENO', es: 'TREN'}, {it: 'AEREO', es: 'AVIÓN'}, {it: 'NAVE', es: 'BARCO'}, {it: 'BARCA', es: 'BOTE'},
    {it: 'AUTOBUS', es: 'AUTOBÚS'}, {it: 'BICICLETTA', es: 'BICICLETA'}, {it: 'MACCHINA', es: 'COCHE'},

    // Sentidos
    {it: 'VISTA', es: 'VISTA'}, {it: 'UDITO', es: 'OÍDO'}, {it: 'OLFATTO', es: 'OLFATO'}, {it: 'TATTO', es: 'TACTO'},

    // Verbos Básicos
    {it: 'ESSERE', es: 'SER/ESTAR'}, {it: 'AVERE', es: 'TENER'}, {it: 'FARE', es: 'HACER'}, {it: 'ANDARE', es: 'IR'},
    {it: 'MANGIARE', es: 'COMER'}, {it: 'BERE', es: 'BEBER'}, {it: 'DORMIRE', es: 'DORMIR'}, {it: 'LEGGERE', es: 'LEER'},
    {it: 'SCRIVERE', es: 'ESCRIBIR'}, {it: 'GIOCARE', es: 'JUGAR'}, {it: 'VEDERE', es: 'VER'}, {it: 'PARLARE', es: 'HABLAR'},

    // Emociones y Otros
    {it: 'AMORE', es: 'AMOR'}, {it: 'FELICE', es: 'FELIZ'}, {it: 'TRISTE', es: 'TRISTE'}, {it: 'AMICO', es: 'AMIGO'},
    {it: 'CASA', es: 'CASA'}, {it: 'SCUOLA', es: 'ESCUELA'}, {it: 'LIBRO', es: 'LIBRO'}, {it: 'TEMPO', es: 'TIEMPO'},
    {it: 'VITA', es: 'VIDA'}, {it: 'MONDO', es: 'MUNDO'}, {it: 'CIAO', es: 'HOLA'}, {it: 'NOTTE', es: 'NOCHE'},
    {it: 'GIORNO', es: 'DÍA'}, {it: 'UOMO', es: 'HOMBRE'}, {it: 'DONNA', es: 'MUJER'}, {it: 'BAMBINO', es: 'NIÑO'}
  ];

  const wsWordsEn = [
    // Animals
    {en: 'DOG', es: 'PERRO'}, {en: 'CAT', es: 'GATO'}, {en: 'BIRD', es: 'PÁJARO'}, {en: 'FISH', es: 'PEZ'},
    {en: 'LION', es: 'LEÓN'}, {en: 'COW', es: 'VACA'}, {en: 'HORSE', es: 'CABALLO'}, {en: 'MOUSE', es: 'RATÓN'},
    {en: 'BEAR', es: 'OSO'}, {en: 'WOLF', es: 'LOBO'}, {en: 'FOX', es: 'ZORRO'}, {en: 'SPIDER', es: 'ARAÑA'},
    {en: 'ANT', es: 'HORMIGA'}, {en: 'BEE', es: 'ABEJA'}, {en: 'MONKEY', es: 'MONO'},

    // Food and Drink
    {en: 'BREAD', es: 'PAN'}, {en: 'WATER', es: 'AGUA'}, {en: 'MILK', es: 'LECHE'}, {en: 'CHEESE', es: 'QUESO'},
    {en: 'FRUIT', es: 'FRUTA'}, {en: 'APPLE', es: 'MANZANA'}, {en: 'PEAR', es: 'PERA'}, {en: 'GRAPE', es: 'UVA'},
    {en: 'CHICKEN', es: 'POLLO'}, {en: 'EGG', es: 'HUEVO'}, {en: 'CANDY', es: 'DULCE'}, {en: 'ICECREAM', es: 'HELADO'},
    {en: 'JUICE', es: 'JUGO'}, {en: 'RICE', es: 'ARROZ'}, {en: 'DINNER', es: 'CENA'}, {en: 'LUNCH', es: 'ALMUERZO'},

    // Nature
    {en: 'SUN', es: 'SOL'}, {en: 'STAR', es: 'ESTRELLA'}, {en: 'SEA', es: 'MAR'}, {en: 'FLOWER', es: 'FLOR'},
    {en: 'TREE', es: 'ÁRBOL'}, {en: 'FIRE', es: 'FUEGO'}, {en: 'EARTH', es: 'TIERRA'}, {en: 'MOUNTAIN', es: 'MONTAÑA'},
    {en: 'RIVER', es: 'RÍO'}, {en: 'FOREST', es: 'BOSQUE'}, {en: 'RAIN', es: 'LLUVIA'}, {en: 'WIND', es: 'VIENTO'},
    {en: 'SNOW', es: 'NIEVE'}, {en: 'CLOUD', es: 'NUBE'}, {en: 'SAND', es: 'ARENA'}, {en: 'GRASS', es: 'HIERBA'},

    // Colors
    {en: 'RED', es: 'ROJO'}, {en: 'BLUE', es: 'AZUL'}, {en: 'YELLOW', es: 'AMARILLO'}, {en: 'WHITE', es: 'BLANCO'},
    {en: 'BLACK', es: 'NEGRO'}, {en: 'ORANGE', es: 'NARANJA'}, {en: 'PURPLE', es: 'MORADO'}, {en: 'BROWN', es: 'MARRÓN'},
    {en: 'GREY', es: 'GRIS'}, {en: 'PINK', es: 'ROSA'},

    // Body Parts
    {en: 'FOOT', es: 'PIE'}, {en: 'HEAD', es: 'CABEZA'}, {en: 'EYE', es: 'OJO'}, {en: 'NOSE', es: 'NARIZ'},
    {en: 'MOUTH', es: 'BOCA'}, {en: 'ARM', es: 'BRAZO'}, {en: 'LEG', es: 'PIERNA'}, {en: 'FINGER', es: 'DEDO'},
    {en: 'HAIR', es: 'CABELLO'}, {en: 'EAR', es: 'OREJA'}, {en: 'NECK', es: 'CUELLO'}, {en: 'BACK', es: 'ESPALDA'},
    {en: 'HEART', es: 'CORAZÓN'},

    // Clothes
    {en: 'SHIRT', es: 'CAMISA'}, {en: 'PANTS', es: 'PANTALONES'}, {en: 'SHOES', es: 'ZAPATOS'}, {en: 'SKIRT', es: 'FALDA'},
    {en: 'DRESS', es: 'VESTIDO'}, {en: 'JACKET', es: 'CHAQUETA'}, {en: 'SWEATER', es: 'SUÉTER'}, {en: 'HAT', es: 'SOMBRERO'},
    {en: 'SOCKS', es: 'CALCETINES'}, {en: 'GLOVES', es: 'GUANTES'}, {en: 'BAG', es: 'BOLSO'},

    // Family
    {en: 'BROTHER', es: 'HERMANO'}, {en: 'SISTER', es: 'HERMANA'}, {en: 'GRANDPA', es: 'ABUELO'}, {en: 'GRANDMA', es: 'ABUELA'},
    {en: 'SON', es: 'HIJO'}, {en: 'DAUGHTER', es: 'HIJA'}, {en: 'UNCLE', es: 'TÍO'}, {en: 'AUNT', es: 'TÍA'},
    {en: 'COUSIN', es: 'PRIMO'},

    // Numbers
    {en: 'TWO', es: 'DOS'}, {en: 'THREE', es: 'TRES'}, {en: 'FOUR', es: 'CUATRO'}, {en: 'FIVE', es: 'CINCO'},
    {en: 'SIX', es: 'SEIS'}, {en: 'SEVEN', es: 'SIETE'}, {en: 'EIGHT', es: 'OCHO'}, {en: 'NINE', es: 'NUEVE'},
    {en: 'TEN', es: 'DIEZ'}, {en: 'TWENTY', es: 'VEINTE'}, {en: 'THIRTY', es: 'TREINTA'}, {en: 'HUNDRED', es: 'CIEN'},

    // Days
    {en: 'MONDAY', es: 'LUNES'}, {en: 'TUESDAY', es: 'MARTES'}, {en: 'WEDNESDAY', es: 'MIÉRCOLES'}, {en: 'THURSDAY', es: 'JUEVES'},
    {en: 'FRIDAY', es: 'VIERNES'}, {en: 'SATURDAY', es: 'SÁBADO'}, {en: 'SUNDAY', es: 'DOMINGO'},

    // Actions
    {en: 'RUN', es: 'CORRER'}, {en: 'JUMP', es: 'SALTAR'}, {en: 'LAUGH', es: 'REÍR'}, {en: 'CRY', es: 'LLORAR'},
    {en: 'SING', es: 'CANTAR'}, {en: 'DANCE', es: 'BAILAR'}, {en: 'WALK', es: 'CAMINAR'}, {en: 'SWIM', es: 'NADAR'},
    {en: 'FLY', es: 'VOLAR'}, {en: 'OPEN', es: 'ABRIR'}, {en: 'CLOSE', es: 'CERRAR'},

    // House and Objects
    {en: 'TABLE', es: 'MESA'}, {en: 'CHAIR', es: 'SILLA'}, {en: 'DOOR', es: 'PUERTA'}, {en: 'WINDOW', es: 'VENTANA'},
    {en: 'BED', es: 'CAMA'}, {en: 'KITCHEN', es: 'COCINA'}, {en: 'BATHROOM', es: 'BAÑO'}, {en: 'WALL', es: 'PARED'},
    {en: 'KEY', es: 'LLAVE'}, {en: 'CLOCK', es: 'RELOJ'}, {en: 'MONEY', es: 'DINERO'}, {en: 'PEN', es: 'BOLÍGRAFO'},

    // Transport
    {en: 'TRAIN', es: 'TREN'}, {en: 'PLANE', es: 'AVIÓN'}, {en: 'SHIP', es: 'BARCO'}, {en: 'BOAT', es: 'BOTE'},
    {en: 'BUS', es: 'AUTOBÚS'}, {en: 'BIKE', es: 'BICICLETA'}, {en: 'CAR', es: 'COCHE'},

    // Senses
    {en: 'SIGHT', es: 'VISTA'}, {en: 'HEARING', es: 'OÍDO'}, {en: 'SMELL', es: 'OLFATO'}, {en: 'TOUCH', es: 'TACTO'},

    // Basic Verbs
    {en: 'BE', es: 'SER/ESTAR'}, {en: 'HAVE', es: 'TENER'}, {en: 'DO', es: 'HACER'}, {en: 'GO', es: 'IR'},
    {en: 'EAT', es: 'COMER'}, {en: 'DRINK', es: 'BEBER'}, {en: 'SLEEP', es: 'DORMIR'}, {en: 'READ', es: 'LEER'},
    {en: 'WRITE', es: 'ESCRIBIR'}, {en: 'PLAY', es: 'JUGAR'}, {en: 'SEE', es: 'VER'}, {en: 'SPEAK', es: 'HABLAR'},

    // Emotions and Others
    {en: 'LOVE', es: 'AMOR'}, {en: 'HAPPY', es: 'FELIZ'}, {en: 'SAD', es: 'TRISTE'}, {en: 'FRIEND', es: 'AMIGO'},
    {en: 'HOME', es: 'CASA'}, {en: 'SCHOOL', es: 'ESCUELA'}, {en: 'BOOK', es: 'LIBRO'}, {en: 'TIME', es: 'TIEMPO'},
    {en: 'LIFE', es: 'VIDA'}, {en: 'WORLD', es: 'MUNDO'}, {en: 'HELLO', es: 'HOLA'}, {en: 'NIGHT', es: 'NOCHE'},
    {en: 'DAY', es: 'DÍA'}, {en: 'MAN', es: 'HOMBRE'}, {en: 'WOMAN', es: 'MUJER'}, {en: 'CHILD', es: 'NIÑO'}
  ];

  let wsGridSize = 9;
  let wsGrid = [];
  let wsPlacedWords = [];
  let wsSelectionStart = null;
  let wsTouchStartCell = null; // Para control táctil

  function initWordSearch() {
    hideAll();
    sections.wordSearch.classList.remove('hidden');
    const title = document.querySelector('#wordSearchSection h2');
    if (title) title.textContent = state.language === 'it' ? 'Sopa de Letras (Italiano)' : 'Word Search (English)';
    startNewWordSearch();
  }

  function startNewWordSearch() {
    wsGrid = Array(wsGridSize).fill(null).map(() => Array(wsGridSize).fill(''));
    wsPlacedWords = [];
    wsSelectionStart = null;
    wordSearchGrid.innerHTML = '';
    wordListEl.innerHTML = '';
    
    const langKey = state.language === 'it' ? 'it' : 'en';
    const sourceWords = state.language === 'it' ? wsWordsIt : wsWordsEn;
    const shuffled = sourceWords.slice().sort(() => 0.5 - Math.random());
    const selectedWords = [];
    
    for (const wordObj of shuffled) {
      if (selectedWords.length >= 8) break;
      if (placeWord(wordObj[langKey])) selectedWords.push(wordObj);
    }
    
    const letters = "ABCDEFGHILMNOPQRSTUVZ";
    for(let y=0; y<wsGridSize; y++) {
      for(let x=0; x<wsGridSize; x++) {
        if(!wsGrid[y][x]) {
          wsGrid[y][x] = letters.charAt(Math.floor(Math.random() * letters.length));
        }
      }
    }
    
    wordSearchGrid.style.gridTemplateColumns = `repeat(${wsGridSize}, 1fr)`;
    for(let y=0; y<wsGridSize; y++) {
      for(let x=0; x<wsGridSize; x++) {
        const cell = document.createElement('div');
        cell.className = 'ws-cell';
        cell.textContent = wsGrid[y][x];
        cell.dataset.x = x;
        cell.dataset.y = y;
        cell.addEventListener('click', handleWsClick);
        wordSearchGrid.appendChild(cell);
      }
    }
    
    selectedWords.forEach(wordObj => {
      const li = document.createElement('li');
      li.textContent = wordObj[langKey];
      li.dataset.word = wordObj[langKey];
      li.addEventListener('click', () => {
        if (li.classList.contains('flipping')) return;
        speakText(wordObj[langKey], state.language);
        li.classList.add('flipping');
        setTimeout(() => {
          li.textContent = wordObj.es;
          li.classList.remove('flipping');
          setTimeout(() => {
            li.classList.add('flipping');
            setTimeout(() => {
              li.textContent = wordObj[langKey];
              li.classList.remove('flipping');
            }, 300);
          }, 1500);
        }, 300);
      });
      wordListEl.appendChild(li);
    });

    // Touch support for drag selection
    wordSearchGrid.addEventListener('touchstart', handleWsTouchStart, {passive: false});
    wordSearchGrid.addEventListener('touchmove', handleWsTouchMove, {passive: false});
    wordSearchGrid.addEventListener('touchend', handleWsTouchEnd, {passive: false});
  }

  function placeWord(word) {
    const directions = [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: -1}];
    let placed = false;
    let attempts = 0;
    while(!placed && attempts < 100) {
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const startX = Math.floor(Math.random() * wsGridSize);
      const startY = Math.floor(Math.random() * wsGridSize);
      let endX = startX + (word.length - 1) * dir.x;
      let endY = startY + (word.length - 1) * dir.y;
      
      if(endX >= 0 && endX < wsGridSize && endY >= 0 && endY < wsGridSize) {
        let clear = true;
        for(let i=0; i<word.length; i++) {
          const cx = startX + i * dir.x;
          const cy = startY + i * dir.y;
          if(wsGrid[cy][cx] !== '' && wsGrid[cy][cx] !== word[i]) {
            clear = false;
            break;
          }
        }
        if(clear) {
          for(let i=0; i<word.length; i++) wsGrid[startY + i * dir.y][startX + i * dir.x] = word[i];
          placed = true;
          wsPlacedWords.push({ word, x: startX, y: startY });
        }
      }
      attempts++;
    }
    return placed;
  }

  function handleWsClick(e) {
    const cell = e.target;
    const x = parseInt(cell.dataset.x);
    const y = parseInt(cell.dataset.y);
    
    if (!wsSelectionStart) {
      wsSelectionStart = {x, y};
      cell.classList.add('selected');
    } else {
      const start = wsSelectionStart;
      const end = {x, y};
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      
      if ((dx !== 0 || dy !== 0) && (dx === 0 || dy === 0 || Math.abs(dx) === Math.abs(dy))) {
        const stepX = Math.sign(dx);
        const stepY = Math.sign(dy);
        let str = "";
        let cx = start.x, cy = start.y;
        let cells = [];
        while(true) {
          str += wsGrid[cy][cx];
          cells.push(document.querySelector(`.ws-cell[data-x="${cx}"][data-y="${cy}"]`));
          if (cx === end.x && cy === end.y) break;
          cx += stepX; cy += stepY;
        }
        const wordFound = Array.from(wordListEl.children).find(li => !li.classList.contains('found') && (li.dataset.word === str || li.dataset.word === str.split('').reverse().join('')));
        if (wordFound) {
          wordFound.classList.add('found');
          cells.forEach(c => c.classList.add('found'));
          playSuccess();
          speakText(wordFound.dataset.word, state.language);
          if (document.querySelectorAll('#wordList li:not(.found)').length === 0) {
            setTimeout(() => {
              playComplete();
              triggerConfetti();
              showWsSuccess();
            }, 500);
          }
        } else playError();
      }
      document.querySelectorAll('.ws-cell.selected').forEach(c => c.classList.remove('selected'));
      wsSelectionStart = null;
    }
  }

  // --- Word Search Touch Logic ---
  function getWsCellFromTouch(e) {
    const touch = e.touches[0] || e.changedTouches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    return element && element.classList.contains('ws-cell') ? element : null;
  }

  function handleWsTouchStart(e) {
    e.preventDefault();
    const cell = getWsCellFromTouch(e);
    if (cell) {
      const x = parseInt(cell.dataset.x);
      const y = parseInt(cell.dataset.y);
      wsTouchStartCell = {x, y};
      // Visual feedback start
      document.querySelectorAll('.ws-cell.selected').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
    }
  }

  function handleWsTouchMove(e) {
    e.preventDefault();
    if (!wsTouchStartCell) return;
    const cell = getWsCellFromTouch(e);
    if (cell) {
      const currentX = parseInt(cell.dataset.x);
      const currentY = parseInt(cell.dataset.y);
      
      // Redraw selection path
      document.querySelectorAll('.ws-cell.selected').forEach(c => c.classList.remove('selected'));
      
      // Logic similar to click selection to highlight range
      const dx = currentX - wsTouchStartCell.x;
      const dy = currentY - wsTouchStartCell.y;
      
      if (dx === 0 || dy === 0 || Math.abs(dx) === Math.abs(dy)) {
        const stepX = Math.sign(dx);
        const stepY = Math.sign(dy);
        let cx = wsTouchStartCell.x;
        let cy = wsTouchStartCell.y;
        // Highlight path
        while(true) {
          const c = document.querySelector(`.ws-cell[data-x="${cx}"][data-y="${cy}"]`);
          if(c) c.classList.add('selected');
          if (cx === currentX && cy === currentY) break;
          cx += stepX; cy += stepY;
        }
      }
    }
  }

  function handleWsTouchEnd(e) {
    e.preventDefault();
    if (wsTouchStartCell) {
      const cell = getWsCellFromTouch(e);
      if (cell) {
        // Simulate the second click logic
        wsSelectionStart = wsTouchStartCell; // Set start
        handleWsClick({target: cell}); // Trigger end logic
      } else {
        // If released outside, clear selection
        document.querySelectorAll('.ws-cell.selected').forEach(c => c.classList.remove('selected'));
      }
      wsTouchStartCell = null;
      wsSelectionStart = null; // Reset global selection state
    }
  }

  function showWsHint() {
    // Find words not yet found
    const foundWords = Array.from(document.querySelectorAll('#wordList li.found')).map(li => li.dataset.word);
    const availableHints = wsPlacedWords.filter(pw => !foundWords.includes(pw.word));
    
    if (availableHints.length > 0) {
      playHintSound();
      const hint = availableHints[Math.floor(Math.random() * availableHints.length)];
      const cell = document.querySelector(`.ws-cell[data-x="${hint.x}"][data-y="${hint.y}"]`);
      
      if (cell) {
        // Remove class if exists to restart animation
        cell.classList.remove('hint-active');
        void cell.offsetWidth; // Trigger reflow
        cell.classList.add('hint-active');
        
        setTimeout(() => cell.classList.remove('hint-active'), 3000);
      }
    }
  }

  function showWsSuccess() {
    if (wsSuccessPopup) wsSuccessPopup.classList.add('active');
  }

  function hideWsSuccess() {
    if (wsSuccessPopup) wsSuccessPopup.classList.remove('active');
  }

  function triggerConfetti() {
    if (typeof confetti !== 'function') return;
    
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#a0c4ff', '#ffadad', '#fdffb6', '#caffbf', '#bdb2ff']
    });
  }

  // --- Prueba Game Logic (Falling Words) ---
  let pruebaCanvas, pruebaCtx;
  let pruebaLoopId;
  let pGame = {
    active: false,
    score: 0,
    lives: 3,
    speed: 2,
    hue: 0,
    targetWord: null, // The Italian word to match
    fallingWords: [], // Array of objects {x, y, text, isCorrect}
    powerUps: [], // Array of objects {x, y, type, icon}
    particles: [], // Array of objects {x, y, vx, vy, life, color}
    player: { x: 275, y: 340, w: 50, h: 50, color: '#3a86ff' },
    keys: { left: false, right: false },
    roundLifeLost: false, // Flag to limit life loss to 1 per round
    muted: false,
    availableWords: []
  };

  function initPruebaGame() {
    hideAll();
    sections.prueba.classList.remove('hidden');
    
    pruebaCanvas = document.getElementById('pruebaGameCanvas');
    pruebaCtx = pruebaCanvas.getContext('2d');
    
    // Reset Game State
    resetPruebaState();

    // Hide overlay initially
    document.getElementById('pruebaOverlay').style.display = 'none';

    // Start Intro Animation
    playPruebaIntro();

    // Input Listeners
    window.addEventListener('keydown', handlePruebaKey);
    window.addEventListener('keyup', handlePruebaKey);
    
    // Touch Controls
    pruebaCanvas.addEventListener('touchstart', handlePruebaTouch);
    pruebaCanvas.addEventListener('touchend', () => { pGame.keys.left = false; pGame.keys.right = false; });
  }

  function playPruebaIntro() {
    let start = null;
    let audioState = { phase1: false, phase2: false, catch1: false, catch2: false };
    
    function loop(timestamp) {
      if (sections.prueba.classList.contains('hidden')) return;
      if (!start) start = timestamp;
      const progress = timestamp - start;
      
      // Audio Triggers
      if (progress > 100 && !audioState.phase1) {
        audioState.phase1 = true;
        playIntroMelody();
      }
      if (progress > 3000 && !audioState.phase2) {
        audioState.phase2 = true;
        playTitleSound();
      }

      pruebaCtx.clearRect(0, 0, pruebaCanvas.width, pruebaCanvas.height);
      
      // Retro Background (Dark)
      pruebaCtx.fillStyle = '#050510';
      pruebaCtx.fillRect(0, 0, pruebaCanvas.width, pruebaCanvas.height);
      
      // Retro Grid (Moving)
      pruebaCtx.strokeStyle = 'rgba(0, 255, 255, 0.15)';
      pruebaCtx.lineWidth = 1;
      pruebaCtx.beginPath();
      const gridSize = 40;
      const offset = (progress / 10) % gridSize; // Fluid movement speed
      
      // Vertical lines
      for (let x = 0; x <= pruebaCanvas.width; x += gridSize) {
        pruebaCtx.moveTo(x, 0);
        pruebaCtx.lineTo(x, pruebaCanvas.height);
      }
      // Horizontal lines (Moving down)
      for (let y = offset - gridSize; y <= pruebaCanvas.height; y += gridSize) {
        pruebaCtx.moveTo(0, y);
        pruebaCtx.lineTo(pruebaCanvas.width, y);
      }
      pruebaCtx.stroke();
      
      // PHASE 1: Author Intro (0 - 3000ms)
      if (progress < 3000) {
        let alpha = 0;
        let scale = 1;
        
        if (progress < 800) { // Fade In
          const t = progress / 800;
          scale = 3 - (2 * t); 
          alpha = t;
        } else if (progress < 2200) { // Hold
          alpha = 1;
          scale = 1;
        } else { // Fade Out
          const t = (progress - 2200) / 800;
          alpha = 1 - t;
          scale = 1 - (0.5 * t);
        }
        
        pruebaCtx.save();
        pruebaCtx.translate(pruebaCanvas.width / 2, pruebaCanvas.height / 2);
        pruebaCtx.scale(scale, scale);
        
        // Efecto Glitch (Distorsión visual)
        const isGlitch = Math.random() < 0.15 && progress > 500 && progress < 2500;
        const gX = isGlitch ? (Math.random() - 0.5) * 10 : 0;
        const gY = isGlitch ? (Math.random() - 0.5) * 5 : 0;

        pruebaCtx.textAlign = 'center';
        pruebaCtx.font = 'bold 28px "Courier New", monospace';
        
        if (isGlitch) {
          // Separación RGB (Efecto cromático)
          pruebaCtx.globalAlpha = alpha * 0.8;
          pruebaCtx.fillStyle = '#ff0055'; // Canal Rojo desplazado
          pruebaCtx.fillText("Creado por J.A. Ginestre", gX - 4, gY);
          pruebaCtx.fillStyle = '#00ffff'; // Canal Azul desplazado
          pruebaCtx.fillText("Creado por J.A. Ginestre", gX + 4, gY);
        }

        pruebaCtx.globalAlpha = alpha;
        pruebaCtx.shadowColor = '#00ffff';
        pruebaCtx.shadowBlur = isGlitch ? 25 : 15;
        pruebaCtx.fillStyle = '#e0ffff'; // Blanco cian
        pruebaCtx.fillText("Creado por J.A. Ginestre", gX, gY);
        
        // Blinking Subtitle
        pruebaCtx.shadowBlur = 0;
        pruebaCtx.fillStyle = '#00ff00';
        pruebaCtx.font = '16px "Courier New", monospace';
        if (Math.floor(progress / 250) % 2 === 0) {
          pruebaCtx.fillText("> FASE BETA <", 0, 60);
        }
        
        pruebaCtx.restore();

      // PHASE 2: Game Title & Demo (3000 - 6000ms)
      } else if (progress < 6000) {
        const p2 = progress - 3000;
        let alpha = 1;
        
        if (p2 < 500) alpha = p2 / 500;
        else if (p2 > 2500) alpha = 1 - (p2 - 2500) / 500;

        pruebaCtx.save();
        pruebaCtx.globalAlpha = alpha;
        pruebaCtx.textAlign = 'center';
        
        // Title
        pruebaCtx.shadowColor = '#ff00ff';
        pruebaCtx.shadowBlur = 20;
        pruebaCtx.fillStyle = '#ff00ff';
        pruebaCtx.font = 'bold 40px "Courier New", monospace';
        pruebaCtx.fillText("PAROLA CADENTE", pruebaCanvas.width / 2, 80);
        
        pruebaCtx.shadowBlur = 0;
        pruebaCtx.fillStyle = '#fff';
        pruebaCtx.font = '16px "Courier New", monospace';
        pruebaCtx.fillText("Atrapa las palabras correctas", pruebaCanvas.width / 2, 120);

        // Demo Animation
        const cx = pruebaCanvas.width / 2;
        const cy = pruebaCanvas.height - 60;
        let px = cx;
        
        // Simulate movement and catching
        if (p2 > 500 && p2 <= 1500) { // Left Catch
          const t = (p2 - 500) / 1000;
          px = t < 0.5 ? cx - (t * 2 * 80) : (cx - 80) + ((t - 0.5) * 2 * 80);
          if (t < 0.5) {
             pruebaCtx.fillStyle = '#a0c4ff';
             pruebaCtx.font = '20px Nunito';
             pruebaCtx.fillText("Ciao", cx - 80, 150 + (t * 2) * (cy - 150));
          } else if (t < 0.8) {
            pruebaCtx.fillText("✨", cx - 80, cy - 20);
            if (!audioState.catch1) { audioState.catch1 = true; playTone(880, 'sine', 0.1, 0, 0.1); }
          }
        } else if (p2 > 1500 && p2 <= 2500) { // Right Catch
          const t = (p2 - 1500) / 1000;
          px = t < 0.5 ? cx + (t * 2 * 80) : (cx + 80) - ((t - 0.5) * 2 * 80);
          if (t < 0.5) {
             pruebaCtx.fillStyle = '#ffadad';
             pruebaCtx.font = '20px Nunito';
             pruebaCtx.fillText("Grazie", cx + 80, 150 + (t * 2) * (cy - 150));
          } else if (t < 0.8) {
            pruebaCtx.fillText("✨", cx + 80, cy - 20);
            if (!audioState.catch2) { audioState.catch2 = true; playTone(1108, 'sine', 0.1, 0, 0.1); }
          }
        }

        pruebaCtx.font = '50px Arial';
        pruebaCtx.fillText('👦', px, cy + 40);
        pruebaCtx.restore();

      } else {
        showPruebaMenu();
        startBGM(); // Ensure music loops
        return;
      }
      
      // Scanlines Overlay
      pruebaCtx.fillStyle = 'rgba(0,0,0,0.1)';
      for(let i=0; i<pruebaCanvas.height; i+=3) {
        pruebaCtx.fillRect(0, i, pruebaCanvas.width, 1);
      }
      
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  function runCountdown(onComplete) {
    let count = 3;
    const step = () => {
      if (sections.prueba.classList.contains('hidden')) return;
      
      pruebaCtx.clearRect(0, 0, pruebaCanvas.width, pruebaCanvas.height);
      // Fondo estático (similar al del juego)
      pruebaCtx.fillStyle = document.body.classList.contains('dark-mode') ? '#050510' : '#e0f7fa';
      pruebaCtx.fillRect(0, 0, pruebaCanvas.width, pruebaCanvas.height);
      
      pruebaCtx.textAlign = 'center';
      pruebaCtx.textBaseline = 'middle';
      pruebaCtx.font = 'bold 100px Nunito';
      
      if (count > 0) {
        pruebaCtx.fillStyle = document.body.classList.contains('dark-mode') ? '#fff' : '#333';
        pruebaCtx.fillText(count, pruebaCanvas.width / 2, pruebaCanvas.height / 2);
        playTone(600, 'triangle', 0.1, 0, 0.3); // Beep
        count--;
        setTimeout(step, 1000);
      } else {
        pruebaCtx.fillStyle = '#00c853';
        pruebaCtx.fillText('VIA!', pruebaCanvas.width / 2, pruebaCanvas.height / 2);
        playTone(1200, 'square', 0.3, 0, 0.3); // Go sound
        setTimeout(onComplete, 500);
      }
    };
    step();
  }

  function showPruebaMenu() {
    const overlay = document.getElementById('pruebaOverlay');
    const msg = document.getElementById('pruebaMsg');
    const btn = document.getElementById('pruebaRestartBtn');
    
    resetPruebaState();
    
    msg.textContent = "Atrapa la traducción correcta";
    btn.textContent = "Comenzar";
    overlay.style.display = 'block';
    
    btn.onclick = () => {
      overlay.style.display = 'none';
      resetPruebaState();
      startBGM();
      runCountdown(() => {
        startPruebaRound();
      });
    };
  }

  function resetPruebaState() {
    pGame.score = 0;
    pGame.lives = 3;
    pGame.speed = 2.5;
    pGame.roundLifeLost = false;
    pGame.hue = 200;
    pGame.fallingWords = [];
    pGame.powerUps = [];
    pGame.particles = [];
    pGame.celebrationTimer = 0;
    // Filter out cognates (words spelled the same) and fill available pool
    pGame.availableWords = wsWordsIt.filter(w => w.it.trim().toUpperCase() !== w.es.trim().toUpperCase());
    pGame.active = false;
    pGame.player.x = pruebaCanvas.width / 2 - pGame.player.w / 2;
    pGame.player.y = pruebaCanvas.height - 60; // Ajuste dinámico de altura
    if (pruebaCanvas) {
      pruebaCanvas.style.background = '';
      pruebaCtx.clearRect(0, 0, pruebaCanvas.width, pruebaCanvas.height);
    }
    document.getElementById('pruebaLeaderboard').innerHTML = '';
  }

  function handlePruebaKey(e) {
    if (sections.prueba.classList.contains('hidden')) return;
    if (e.key === 'ArrowLeft') pGame.keys.left = (e.type === 'keydown');
    if (e.key === 'ArrowRight') pGame.keys.right = (e.type === 'keydown');
  }

  function handlePruebaTouch(e) {
    e.preventDefault();
    const rect = pruebaCanvas.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    if (touchX < rect.width / 2) {
      pGame.keys.left = true; pGame.keys.right = false;
    } else {
      pGame.keys.right = true; pGame.keys.left = false;
    }
  }

  function startPruebaRound() {
    pGame.active = true;
    pGame.roundLifeLost = false;
    spawnPruebaWave();
    if (pruebaLoopId) cancelAnimationFrame(pruebaLoopId);
    pruebaLoop();
  }

  function spawnPruebaWave() {
    // Refill pool if empty
    if (pGame.availableWords.length === 0) {
      pGame.availableWords = wsWordsIt.filter(w => w.it.trim().toUpperCase() !== w.es.trim().toUpperCase());
    }

    // Pick target word from available pool (no repeats until pool resets)
    const idx = Math.floor(Math.random() * pGame.availableWords.length);
    const targetObj = pGame.availableWords[idx];
    pGame.availableWords.splice(idx, 1); // Remove used word

    pGame.targetWord = targetObj;
    pGame.roundLifeLost = false; // Reset life loss flag for new wave
    
    // Pronounce the Italian word
    speakText(targetObj.it, 'it');

    // Pick distractors
    let distractors = [];
    while (distractors.length < 2) {
      const d = wsWordsIt[Math.floor(Math.random() * wsWordsIt.length)];
      // Ensure distractor is not a cognate, not the target, and not already picked
      if (d.it.trim().toUpperCase() !== d.es.trim().toUpperCase() && d.it !== targetObj.it && !distractors.includes(d)) {
        distractors.push(d);
      }
    }

    // Create falling objects
    const options = [
      { text: targetObj.es, isCorrect: true },
      { text: distractors[0].es, isCorrect: false },
      { text: distractors[1].es, isCorrect: false }
    ];
    
    // Shuffle positions (3 lanes)
    const lanes = [100, 300, 500]; // Center X of lanes
    options.sort(() => 0.5 - Math.random());
    
    pGame.fallingWords = options.map((opt, i) => ({
      x: lanes[i],
      y: -50, // Start above screen
      text: opt.text,
      isCorrect: opt.isCorrect,
      w: 120, h: 40
    }));
  }

  function pruebaLoop() {
    if (!pGame.active) return;

    // Dynamic Background
    pGame.hue = (pGame.hue + 0.2) % 360;
    pruebaCanvas.style.background = `linear-gradient(to bottom, hsl(${pGame.hue}, 70%, 90%), hsl(${pGame.hue}, 70%, 95%))`;

    // Spawn Power-ups (Dynamic rate based on speed)
    let spawnRate = 0.001; // Base rate
    if (pGame.speed > 4.0) spawnRate = 0.004; // 4x more frequent when fast
    else if (pGame.speed > 3.0) spawnRate = 0.002;

    if (Math.random() < spawnRate) spawnPowerUp();

    // Update Power-ups
    for (let i = pGame.powerUps.length - 1; i >= 0; i--) {
      let p = pGame.powerUps[i];
      p.y += pGame.speed;

      // Collision with Player
      if (
        pGame.player.x < p.x + 30 &&
        pGame.player.x + pGame.player.w > p.x - 10 &&
        pGame.player.y < p.y + 30 &&
        pGame.player.y + pGame.player.h > p.y
      ) {
        applyPowerUp(p.type);
        spawnParticles(p.x, p.y, p.type === 'life' ? '#ffadad' : '#a0c4ff');
        pGame.powerUps.splice(i, 1);
        continue;
      }

      // Remove if off screen
      if (p.y > pruebaCanvas.height) {
        pGame.powerUps.splice(i, 1);
      }
    }

    // Update Particles
    for (let i = pGame.particles.length - 1; i >= 0; i--) {
      let p = pGame.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.05;
      if (p.life <= 0) pGame.particles.splice(i, 1);
    }

    // Update Player
    if (pGame.keys.left && pGame.player.x > 0) pGame.player.x -= 7;
    if (pGame.keys.right && pGame.player.x < pruebaCanvas.width - pGame.player.w) pGame.player.x += 7;

    // Update Words
    let waveCleared = true;
    let waveReset = false;
    for (let i = pGame.fallingWords.length - 1; i >= 0; i--) {
      let word = pGame.fallingWords[i];
      word.y += pGame.speed;
      
      // Collision Check
      if (
        pGame.player.x < word.x + word.w/2 + 20 &&
        pGame.player.x + pGame.player.w > word.x - word.w/2 - 20 &&
        pGame.player.y < word.y + word.h &&
        pGame.player.y + pGame.player.h > word.y
      ) {
        if (word.isCorrect) {
          pGame.score++;
          pGame.speed += 0.2; // Increase difficulty
          playSuccess();
          spawnPruebaWave(); // Next wave immediately
          waveReset = true;
          pGame.celebrationTimer = 45; // Trigger celebration (approx 0.75s)
          break;
        }
        
        // Incorrect
        if (!pGame.roundLifeLost) {
          pGame.lives--;
          pGame.roundLifeLost = true;
          playError();
        }
        pGame.fallingWords.splice(i, 1);
        
        if (pGame.lives <= 0) {
          gameOverPrueba();
          return;
        }
        continue;
      }

      if (word.y < pruebaCanvas.height) waveCleared = false;
    }

    // If correct word passed bottom without catch -> Game Over
    if (!waveReset && waveCleared) {
       if (!pGame.roundLifeLost) {
         pGame.lives--;
         playError();
       }
       
       if (pGame.lives <= 0) {
         gameOverPrueba();
         return;
       } else {
         spawnPruebaWave();
       }
    }

    // Draw
    pruebaCtx.clearRect(0, 0, pruebaCanvas.width, pruebaCanvas.height);
    
    // Draw Target Word (Italian)
    pruebaCtx.fillStyle = '#333';
    pruebaCtx.font = 'bold 30px Nunito';
    pruebaCtx.textAlign = 'center';
    pruebaCtx.fillText(pGame.targetWord.it, pruebaCanvas.width / 2, 50);
    
    // Draw Score
    pruebaCtx.font = '20px Nunito';
    pruebaCtx.textAlign = 'left';
    pruebaCtx.fillText(`Puntos: ${pGame.score}`, 20, 30);

    // Draw Lives
    pruebaCtx.textAlign = 'right';
    pruebaCtx.fillText('❤️'.repeat(pGame.lives), pruebaCanvas.width - 20, 30);

    // Draw Player (Niño Emoji) with Animations
    pruebaCtx.save();
    const pCx = pGame.player.x + pGame.player.w/2;
    const pCy = pGame.player.y + 40;
    pruebaCtx.translate(pCx, pCy);

    if (pGame.celebrationTimer > 0) {
      pGame.celebrationTimer--;
      // Celebration: Jump and Spin
      const t = pGame.celebrationTimer / 45;
      const jump = Math.sin(t * Math.PI) * 20;
      pruebaCtx.translate(0, -jump);
      pruebaCtx.rotate((1 - t) * Math.PI * 4); // Spin 2 times
      pruebaCtx.scale(1.3, 1.3);
    } else if (pGame.keys.left || pGame.keys.right) {
      // Hurried Run: Tilt and Fast Bob
      const tilt = pGame.keys.left ? -0.2 : 0.2;
      const bob = Math.sin(Date.now() / 50) * 5;
      pruebaCtx.rotate(tilt);
      pruebaCtx.translate(0, bob);
    }

    pruebaCtx.textAlign = 'center';
    pruebaCtx.font = '50px Arial';
    pruebaCtx.fillText('👦', 0, 0);
    pruebaCtx.restore();

    // Draw Power-ups
    pGame.powerUps.forEach(p => {
      pruebaCtx.font = '30px Arial';
      pruebaCtx.textAlign = 'center';
      pruebaCtx.fillText(p.icon, p.x, p.y);
    });

    // Draw Particles
    pGame.particles.forEach(p => {
      pruebaCtx.globalAlpha = p.life;
      pruebaCtx.fillStyle = p.color;
      pruebaCtx.beginPath();
      pruebaCtx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      pruebaCtx.fill();
      pruebaCtx.globalAlpha = 1.0;
    });

    // Draw Falling Words
    pGame.fallingWords.forEach(word => {
      pruebaCtx.fillStyle = document.body.classList.contains('dark-mode') ? '#fff' : '#444';
      pruebaCtx.font = 'bold 20px Nunito';
      pruebaCtx.textAlign = 'center';
      pruebaCtx.fillText(word.text, word.x, word.y);
    });

    pruebaLoopId = requestAnimationFrame(pruebaLoop);
  }

  function spawnParticles(x, y, color) {
    for (let i = 0; i < 8; i++) {
      pGame.particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        life: 1.0,
        color: color
      });
    }
  }

  function spawnPowerUp() {
    // Increase chance of 'slow' (ice) if speed is high
    let iceChance = 0.5;
    if (pGame.speed > 4.0) iceChance = 0.8; // 80% chance of ice when fast

    const type = Math.random() < iceChance ? 'slow' : 'life';
    // Don't spawn hearts if lives are full (3)
    if (type === 'life' && pGame.lives >= 3) return; 
    
    pGame.powerUps.push({
      x: Math.random() * (pruebaCanvas.width - 40) + 20,
      y: -40,
      type: type,
      icon: type === 'life' ? '❤️' : '❄️'
    });
  }

  function applyPowerUp(type) {
    if (type === 'life') {
      playLifeSound();
      if (pGame.lives < 3) pGame.lives++;
    } else if (type === 'slow') {
      playFreezeSound();
      pGame.speed = Math.max(1.5, pGame.speed - 1); // Slow down, min speed 1.5
    }
  }

  function saveHighScore(score) {
    const key = 'pruebaHighScores';
    let scores = JSON.parse(localStorage.getItem(key) || '[]');
    scores.push({ score: score, date: new Date().toLocaleDateString() });
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 5); // Keep top 5
    localStorage.setItem(key, JSON.stringify(scores));
    return scores;
  }

  function gameOverPrueba() {
    pGame.active = false;
    stopBGM();
    playError();
    
    const topScores = saveHighScore(pGame.score);
    
    const overlay = document.getElementById('pruebaOverlay');
    const msg = document.getElementById('pruebaMsg');
    const lb = document.getElementById('pruebaLeaderboard');
    const btn = document.getElementById('pruebaRestartBtn');
    
    msg.textContent = `¡Juego Terminado! Puntos: ${pGame.score}`;
    
    // Render Leaderboard
    let lbHtml = '<strong>🏆 Mejores Puntajes:</strong><ul style="padding-left: 20px; margin-top: 5px;">';
    topScores.forEach(s => {
      lbHtml += `<li>${s.score} pts <span style="font-size:0.8em; color:#666;">(${s.date})</span></li>`;
    });
    lbHtml += '</ul>';
    lb.innerHTML = lbHtml;

    btn.textContent = "Intentar de nuevo";
    overlay.style.display = 'block';
  }

  // --- Lingo Drift Game Logic ---
  let lingoDriftCanvas, lingoDriftCtx;
  let ldLoopId;
  let ldGame = {
      state: 'INTRO', // INTRO, MAP, PLAYING, LEVEL_COMPLETE
      score: 0,
      lives: 3,
      speed: 0.005, // Z-speed
      player: { x: 0, y: 0, w: 70, h: 40 },
      level: 1,
      maxLevel: 1,
      levelConfig: null,
      mapSelection: 0, // Index of selected level (0-based)
      mapScrollZ: 0,   // Visual scroll position
      winTimer: 0,     // Timer for victory animation
      keys: { left: false, right: false },
      targetWord: null,
      options: [], // { text, isCorrect, lane, z }
      obstacles: [],
      powerUps: [],
      particles: [],
      turboTimer: 0,
      rotation: 0,
      rainDrops: [],
      lightning: { active: false, timer: 0, path: [] },
      availableWords: [],
      roadLines: [],
      muted: false,
      finishLineSpawned: false,
      finishLineZ: 0,
      lastObstacleTime: 0,
      mapDragY: null,
      isDraggingMap: false
  };

  // Level Configuration
  const ldLevels = [
    { id: 1, name: "Mundo de Colores", topic: 'Colors', scoreGoal: 100, icon: '🎨', bgIcons: ['🌈'], sky: ['#1a0537', '#fd5081'], ground: '#110328', words: ['RED','BLUE','YELLOW','GREEN','ORANGE','PURPLE','PINK','BLACK','WHITE','GREY','BROWN'] },
    { id: 2, name: "Autopista Numérica", topic: 'Numbers', scoreGoal: 100, icon: '🔢', bgIcons: ['1️⃣'], sky: ['#000033', '#0066cc'], ground: '#001133', words: ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','TWENTY','THIRTY','HUNDRED'] },
    { id: 3, name: "Safari Salvaje", topic: 'Animals', scoreGoal: 100, icon: '🦁', bgIcons: ['🐘'], sky: ['#331a00', '#ff9900'], ground: '#1a0d00', words: ['DOG','CAT','LION','TIGER','BEAR','WOLF','FOX','MONKEY','COW','HORSE','BIRD','FISH'] },
    { id: 4, name: "Ruta Deliciosa", topic: 'Food', scoreGoal: 100, icon: '🍕', bgIcons: ['🍔'], sky: ['#33001a', '#ff0066'], ground: '#1a000d', words: ['APPLE','BREAD','MILK','CHEESE','PIZZA','BURGER','WATER','JUICE','EGG','FRUIT','CANDY'] },
    { id: 5, name: "Valle de Acción", topic: 'Verbs', scoreGoal: 100, icon: '🏃', bgIcons: ['⚡'], sky: ['#003300', '#00ff00'], ground: '#001a00', words: ['RUN','JUMP','SWIM','EAT','SLEEP','PLAY','READ','WRITE','WALK','FLY','SING','DANCE'] }
  ];
  
  // Audio globals for Lingo Drift
  let ldEngineOsc = null;
  let ldEngineGain = null;
  let ldBgmInterval = null;

  function initLingoDrift() {
    hideAll();
    if (sections.lingoDrift) sections.lingoDrift.classList.remove('hidden');
    
    ldGame.state = 'INTRO';
    lingoDriftCanvas = document.getElementById('lingoDriftCanvas');
    if (lingoDriftCanvas) {
      lingoDriftCtx = lingoDriftCanvas.getContext('2d');
      document.getElementById('lingoDriftOverlay').style.display = 'none';
      if (audioCtx.state === 'suspended') audioCtx.resume();
      playLingoDriftIntro();
    }
  }

  function showLingoDriftMenu() {
    // Ya no usamos el menú HTML superpuesto para el inicio, 
    // la intro maneja el estado "waitingToStart" internamente.
    // Esta función queda vacía o se puede eliminar si no se usa para Game Over.
  }

  function playLingoDriftIntro() {
    if (!lingoDriftCanvas) return;

    let start = null;
    const duration = 7000; // 7 seconds total
    let audioState = { intro: false, whoosh: false };
    let introLoopId; // To store the animation frame ID
    let introParticles = [];
    let waitingToStart = false;

    const horizon = lingoDriftCanvas.height * 0.4;

    function loop(timestamp) {
        // Stop animation if section is hidden
        if (sections.lingoDrift.classList.contains('hidden')) {
            if (introLoopId) cancelAnimationFrame(introLoopId);
            return;
        }

        // Si estamos esperando input, dibujamos el loop de espera
        if (waitingToStart) {
            drawWaitingScreen(timestamp);
            introLoopId = requestAnimationFrame(loop);
            return;
        }

        if (!start) start = timestamp;
        const progress = timestamp - start;

        // --- Audio ---
        if (progress > 100 && !audioState.intro) {
            audioState.intro = true;
            try { playLingoDriftIntroSound(); } catch(e) { console.log(e); }
        }
        if (progress > 2500 && !audioState.whoosh) {
            audioState.whoosh = true;
            try { playCarSound('drift'); } catch(e) { console.log(e); }
        }

        // --- Drawing ---
        const ctx = lingoDriftCtx;
        const w = lingoDriftCanvas.width;
        const h = lingoDriftCanvas.height;

        // Camera Shake
        let shakeX = 0, shakeY = 0;
        if (progress > 3000 && progress < 4200) {
            const intensity = Math.max(0, 5 * (1 - (progress - 3000) / 1200));
            shakeX = (Math.random() - 0.5) * intensity;
            shakeY = (Math.random() - 0.5) * intensity;
        }
        ctx.save();
        ctx.translate(shakeX, shakeY);

        // 1. Background
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#020005'); // Deep black/purple
        grad.addColorStop(horizon / h, '#2a0e36'); // Dark horizon
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // 2. Ground with moving lines
        ctx.fillStyle = '#050010'; // Darker ground
        ctx.fillRect(0, horizon, w, h - horizon);
        
        // Grid Effect (Blade Runner style)
        ctx.strokeStyle = 'rgba(255, 0, 255, 0.4)'; // Neon Magenta
        ctx.lineWidth = 2;
        const lineSpeed = 0.3;
        const lineOffset = (progress * lineSpeed) % 40;

        for (let i = 0; i < h; i += 40) {
            const y = horizon + i + lineOffset;
            if (y > horizon) {
                const perspective = (y - horizon) / (h - horizon);
                ctx.globalAlpha = perspective * 0.8; 
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        }
        
        // Vertical Perspective Lines
        ctx.beginPath();
        for(let i = -2; i <= 2; i++) {
            const x = w/2 + (i * w * 0.8);
            ctx.moveTo(w/2 + (i * 20), horizon);
            ctx.lineTo(x, h);
        }
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // 3. Retro Sun (with stripes)
        const sunGrad = ctx.createLinearGradient(0, horizon - 100, 0, horizon);
        sunGrad.addColorStop(0, '#ffcc00');
        sunGrad.addColorStop(1, '#ff0055');
        ctx.fillStyle = sunGrad;
        ctx.beginPath();
        ctx.arc(w / 2, horizon, 50, 0, Math.PI * 2);
        ctx.fill();
        
        // Sun Stripes (Blind effect)
        ctx.fillStyle = '#020005'; // Match sky color
        for(let i = 0; i < 10; i++) {
            const y = horizon - (i * 6) - 2;
            const hStrip = i * 0.5 + 1;
            ctx.fillRect(w/2 - 60, y, 120, hStrip);
        }

        // 4. Rain / Stars Effect (Cyberpunk atmosphere)
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        const rainOffset = (progress * 0.8) % h;
        for(let i=0; i<20; i++) {
            const rx = (i * 37 + progress * 0.1) % w;
            const ry = (rainOffset + i * 50) % h;
            ctx.moveTo(rx, ry);
            ctx.lineTo(rx, ry + 15);
        }
        ctx.stroke();

        // --- Text & Car Animations ---
        // PHASE 1: Author (0 - 3500ms)
        if (progress < 3000) {
            let alpha = 0;
            if (progress < 1000) alpha = progress / 1000;
            else if (progress < 2200) alpha = 1;
            else alpha = 1 - (progress - 2200) / 800;

            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.textAlign = 'center';
            
            // Glitch Effect
            const glitchX = (Math.random() - 0.5) * 4;
            
            ctx.shadowColor = '#00c6ff';
            ctx.shadowBlur = 15;
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 32px "Courier New", monospace';
            ctx.fillText("Creado por José Ginestre", w / 2 + glitchX, h * 0.25);
            
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#00ff00';
            ctx.font = '18px "Courier New", monospace';
            if (Math.floor(progress / 300) % 2 === 0) {
                ctx.fillText("> FASE BETA <", w / 2, h * 0.25 + 35);
            }
            ctx.restore();
        }
        // PHASE 2: Title (3500 - 7000ms)
        else if (progress < duration) {
            const p2 = progress - 3000;
            let alpha = 0;
            if (p2 < 1000) alpha = p2 / 1000;
            else alpha = 1;

            // Car animation (Drift from bottom-right)
            const carY = h - 80;
            const targetX = w / 2;
            let carX = targetX;
            let rotation = 0; 
            let scale = 1.5; // Bigger car for intro

            if (p2 < 1200) {
                const t = p2 / 1200;
                const ease = 1 - Math.pow(1 - t, 3);
                
                // Slide from right side, drifting
                carX = (w + 200) - (w/2 + 200) * ease;
                
                // Rotation: Starts angled, ends straight (0)
                rotation = -0.5 * (1 - ease);
            }
            
            // Sparks Particles
            if (p2 < 1200) {
                for(let i=0; i<3; i++) {
                    introParticles.push({
                        x: carX + (Math.random() - 0.5) * 60,
                        y: carY + 18,
                        vx: (Math.random() - 0.5) * 10,
                        vy: Math.random() * -5,
                        life: 1.0
                    });
                }
            }
            for(let i=introParticles.length-1; i>=0; i--) {
                let p = introParticles[i];
                p.x += p.vx; p.y += p.vy; p.life -= 0.05;
                if(p.life <= 0) introParticles.splice(i, 1);
                else {
                    ctx.fillStyle = `rgba(255, 255, 0, ${p.life})`;
                    ctx.fillRect(p.x, p.y, 3, 3);
                }
            }

            ctx.save();
            ctx.translate(carX, carY);
            ctx.rotate(rotation);
            ctx.scale(scale, scale);
            
            // --- DRAW NEON CAR (Vector) ---
            // Centered at 0,0
            const cw = 70; 
            const ch = 40;
            const cx = -cw/2;
            const cy = -ch/2;

            ctx.shadowColor = '#00c6ff';
            ctx.shadowBlur = 20;
            ctx.fillStyle = '#000';
            ctx.strokeStyle = '#00c6ff';
            ctx.lineWidth = 3;
            
            // Car Body
            ctx.beginPath();
            ctx.moveTo(cx, cy + ch);
            ctx.lineTo(cx + cw, cy + ch); // Bottom
            ctx.lineTo(cx + cw, cy + ch/2); 
            ctx.lineTo(cx + cw - 10, cy); // Windshield right
            ctx.lineTo(cx + 10, cy); // Windshield left
            ctx.lineTo(cx, cy + ch/2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Tail lights (Bright Red)
            ctx.fillStyle = '#ff0055';
            ctx.shadowColor = '#ff0055';
            ctx.shadowBlur = 30;
            ctx.fillRect(cx + 5, cy + ch - 10, 15, 6);
            ctx.fillRect(cx + cw - 20, cy + ch - 10, 15, 6);
            
            // License Plate Glow
            ctx.fillStyle = '#fff';
            ctx.shadowColor = '#fff';
            ctx.shadowBlur = 10;
            ctx.fillRect(cx + cw/2 - 10, cy + ch - 10, 20, 5);
            
            ctx.restore();

            // Title Text
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.textAlign = 'center';
            
            // Cool Font & Gradient
            ctx.font = 'italic 900 70px "Nunito", sans-serif';
            const textGrad = ctx.createLinearGradient(0, h * 0.2, 0, h * 0.4);
            textGrad.addColorStop(0, '#ffffff');
            textGrad.addColorStop(0.5, '#00c6ff');
            textGrad.addColorStop(1, '#0072ff');
            ctx.fillStyle = textGrad;
            
            ctx.shadowColor = '#0072ff';
            ctx.shadowBlur = 30;
            ctx.fillText("Lingo Drift", w / 2, h * 0.35);
            
            // Stroke for contrast
            ctx.shadowBlur = 0;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.strokeText("Lingo Drift", w / 2, h * 0.35);

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 22px "Nunito", sans-serif';
            ctx.fillText("Atrapa la traducción correcta", w / 2, h * 0.45);
            ctx.restore();
        } else {
            // Animation finished, enter waiting state
            ctx.restore(); // Restore shake before exiting
            // waitingToStart = true; // Removed old waiting logic
            
            // Add one-time listener to start game
            const startGameHandler = () => {
                window.removeEventListener('keydown', startGameHandler);
                lingoDriftCanvas.removeEventListener('click', startGameHandler);
                lingoDriftCanvas.removeEventListener('touchstart', startGameHandler);
                startLingoDriftGame();
            };
            
            // Go to Map instead of direct start (Initial entry)
            enterLingoDriftMap(false);
            
            // Important: Continue the loop to render the waiting screen!
            // introLoopId = requestAnimationFrame(loop); // Stop intro loop
            return;
        }
        ctx.restore(); // Restore shake

        introLoopId = requestAnimationFrame(loop);
    }
    introLoopId = requestAnimationFrame(loop);

    function drawWaitingScreen(timestamp) {
        const ctx = lingoDriftCtx;
        const w = lingoDriftCanvas.width;
        const h = lingoDriftCanvas.height;

        // Redraw static elements (Background, Sun, Grid)
        // 1. Background
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#020005'); 
        grad.addColorStop(horizon / h, '#2a0e36');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // 2. Ground
        ctx.fillStyle = '#050010';
        ctx.fillRect(0, horizon, w, h - horizon);
        
        // Grid (Moving slowly)
        ctx.strokeStyle = 'rgba(255, 0, 255, 0.4)';
        ctx.lineWidth = 2;
        const lineOffset = (timestamp * 0.1) % 40;
        for (let i = 0; i < h; i += 40) {
            const y = horizon + i + lineOffset;
            if (y > horizon) {
                const perspective = (y - horizon) / (h - horizon);
                ctx.globalAlpha = perspective * 0.8; 
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
            }
        }
        // Vertical Lines
        ctx.beginPath();
        for(let i = -2; i <= 2; i++) {
            const x = w/2 + (i * w * 0.8);
            ctx.moveTo(w/2 + (i * 20), horizon); ctx.lineTo(x, h);
        }
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // 3. Sun
        const sunGrad = ctx.createLinearGradient(0, horizon - 100, 0, horizon);
        sunGrad.addColorStop(0, '#ffcc00'); sunGrad.addColorStop(1, '#ff0055');
        ctx.fillStyle = sunGrad;
        ctx.beginPath(); ctx.arc(w / 2, horizon, 50, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#020005';
        for(let i = 0; i < 10; i++) {
            const y = horizon - (i * 6) - 2;
            ctx.fillRect(w/2 - 60, y, 120, i * 0.5 + 1);
        }

        // 4. Car (Static center)
        const carY = h - 80;
        const carX = w / 2;
        ctx.save();
        ctx.translate(carX, carY);
        ctx.scale(1.5, 1.5);
        // ... Draw Car Code (Simplified reuse) ...
        const cw = 70, ch = 40, cx = -35, cy = -20;
        ctx.shadowColor = '#00c6ff'; ctx.shadowBlur = 20; ctx.fillStyle = '#000'; ctx.strokeStyle = '#00c6ff'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(cx, cy + ch); ctx.lineTo(cx + cw, cy + ch); ctx.lineTo(cx + cw, cy + ch/2); 
        ctx.lineTo(cx + cw - 10, cy); ctx.lineTo(cx + 10, cy); ctx.lineTo(cx, cy + ch/2); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#ff0055'; ctx.shadowColor = '#ff0055'; ctx.shadowBlur = 30;
        ctx.fillRect(cx + 5, cy + ch - 10, 15, 6); ctx.fillRect(cx + cw - 20, cy + ch - 10, 15, 6);
        ctx.restore();

        // 5. FLASHING START BUTTON
        const blink = Math.sin(timestamp / 200); // Fast blink
        const alpha = (blink + 1) / 2; // 0 to 1
        
        ctx.save();
        ctx.textAlign = 'center';
        ctx.font = '900 40px "Nunito", sans-serif';
        ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + alpha * 0.5})`;
        ctx.shadowColor = '#00ff00';
        ctx.shadowBlur = 20 * alpha;
        ctx.fillText("COMENZAR", w / 2, h * 0.3);
        
        ctx.font = '20px "Courier New", monospace';
        ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
        ctx.shadowBlur = 10;
        ctx.fillText("- PRESS START -", w / 2, h * 0.3 + 30);
        ctx.restore();
    }
  }

  function resetLingoDriftVars() {
      ldGame.score = 0;
      ldGame.lives = 3;
      ldGame.speed = 0.003; // FORCE RESET SPEED
      ldGame.player.x = lingoDriftCanvas.width / 2 - 35;
      ldGame.player.y = lingoDriftCanvas.height - 80;
      ldGame.keys = { left: false, right: false };
      ldGame.damageTimer = 0;
      ldGame.roundLifeLost = false;
      ldGame.turboTimer = 0;
      ldGame.rotation = 0;
      ldGame.rainDrops = [];
      ldGame.lightning = { active: false, timer: 0, path: [] };
      ldGame.options = [];
      ldGame.obstacles = [];
      ldGame.powerUps = [];
      ldGame.particles = [];
      ldGame.finishLineSpawned = false;
      ldGame.finishLineZ = 0;
      ldGame.lastObstacleTime = 0;
  }

  function startLingoDriftGame(levelId = 1) {
      ldGame.state = 'PLAYING';
      ldGame.level = levelId;
      ldGame.levelConfig = ldLevels.find(l => l.id === levelId) || ldLevels[0];
      
      resetLingoDriftVars(); // Use helper to ensure full reset
      ldGame.speed = 0.003; // DOUBLE CHECK SPEED RESET
      
      // Filter words for this level
      const targetWords = ldGame.levelConfig.words;
      ldGame.availableWords = wsWordsEn.filter(w => targetWords.includes(w.en.toUpperCase()));
      
      // Fallback if filter fails (shouldn't happen if config is correct)
      if (ldGame.availableWords.length < 5) {
          console.warn("Not enough words for level, using all words.");
          ldGame.availableWords = [...wsWordsEn];
      }

      document.getElementById('lingoDriftLeaderboard').innerHTML = '';
      
      // Initialize rain
      if (lingoDriftCanvas) {
          for (let i = 0; i < 100; i++) {
              ldGame.rainDrops.push({
                  x: Math.random() * lingoDriftCanvas.width,
                  y: Math.random() * lingoDriftCanvas.height,
                  length: Math.random() * 15 + 5,
                  speed: Math.random() * 5 + 5
              });
          }
      }

      // Initialize road lines for effect
      ldGame.roadLines = [];
      for(let i=0; i<30; i++) ldGame.roadLines.push({z: i/30});

      window.removeEventListener('keydown', handleLdKey);
      window.removeEventListener('keyup', handleLdKey);
      lingoDriftCanvas.removeEventListener('touchstart', handleLdTouch);
      lingoDriftCanvas.removeEventListener('touchmove', handleLdTouchMove);
      lingoDriftCanvas.removeEventListener('touchend', handleLdTouchEnd);
      lingoDriftCanvas.removeEventListener('click', handleLdClick);

      window.addEventListener('keydown', handleLdKey);
      window.addEventListener('keyup', handleLdKey);
      lingoDriftCanvas.addEventListener('touchstart', handleLdTouch, { passive: false });
      lingoDriftCanvas.addEventListener('touchmove', handleLdTouchMove, { passive: false });
      lingoDriftCanvas.addEventListener('touchend', handleLdTouchEnd);
      lingoDriftCanvas.addEventListener('click', handleLdClick); // Add click support

      startLdAudio();
      spawnLingoDriftWave();
      if (ldLoopId) cancelAnimationFrame(ldLoopId);
      lingoDriftLoop();
  }

  function handleLdKey(e) {
      // Map Navigation
      if (ldGame.state === 'MAP') {
          if (e.type === 'keydown') {
             if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
                 if (ldGame.mapSelection < ldGame.maxLevel - 1) {
                     ldGame.mapSelection++;
                     playTone(400, 'sine', 0.1); // Nav sound
                 }
             }
             if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
                 if (ldGame.mapSelection > 0) {
                     ldGame.mapSelection--;
                     playTone(300, 'sine', 0.1); // Nav sound
                 }
             }
             if (e.key === 'Enter') {
                 startLingoDriftGame(ldGame.mapSelection + 1);
                 playTone(600, 'square', 0.2); // Start sound
             }
          }
          return;
      }

      if (ldGame.state !== 'PLAYING') return;
      const isDown = e.type === 'keydown';
      if (e.key === 'ArrowLeft') ldGame.keys.left = isDown;
      if (e.key === 'ArrowRight') ldGame.keys.right = isDown;
  }

  function handleLdClick(e) {
      if (ldGame.state === 'MAP') {
          const rect = lingoDriftCanvas.getBoundingClientRect();
          const scaleX = lingoDriftCanvas.width / rect.width;
          const scaleY = lingoDriftCanvas.height / rect.height;
          const tx = (e.clientX - rect.left) * scaleX;
          const ty = (e.clientY - rect.top) * scaleY;
          checkMapTap(tx, ty);
      }
  }

  function checkMapTap(tx, ty) {
      const w = lingoDriftCanvas.width;
      const h = lingoDriftCanvas.height;

      for(let i=0; i<ldLevels.length; i++) {
          if (i >= ldGame.maxLevel) continue;
          const x = w/2 + Math.sin(i * 1.5) * (w * 0.3);
          const y = h - 100 - (i * 120) + (ldGame.mapScrollZ * 120);
          
          // Check distance to node OR button area (generous hit box)
          const dist = Math.sqrt((tx-x)**2 + (ty-y)**2);
          const inButton = (tx > x - 60 && tx < x + 60 && ty > y + 30 && ty < y + 90);

          if (dist < 50 || inButton) {
              ldGame.mapSelection = i;
              startLingoDriftGame(i + 1);
              return;
          }
      }
  }

  function handleLdTouch(e) {
      if (ldGame.state === 'MAP') {
          ldGame.mapDragY = e.touches[0].clientY;
          ldGame.isDraggingMap = false;
          return;
      }

      if (ldGame.state !== 'PLAYING') return;
      e.preventDefault();
      const rect = lingoDriftCanvas.getBoundingClientRect();
      const touchX = e.touches[0].clientX - rect.left;
      if (touchX < rect.width / 2) {
          ldGame.keys.left = true; ldGame.keys.right = false;
      } else {
          ldGame.keys.right = true; ldGame.keys.left = false;
      }
  }

  function handleLdTouchMove(e) {
      if (ldGame.state === 'MAP' && ldGame.mapDragY !== null) {
          e.preventDefault();
          const y = e.touches[0].clientY;
          const dy = y - ldGame.mapDragY;
          ldGame.mapDragY = y;
          
          // Dragging down (positive dy) moves content down (increases scrollZ)
          ldGame.mapScrollZ += dy * 0.01;
          // Clamp
          ldGame.mapScrollZ = Math.max(0, Math.min(ldGame.maxLevel - 1, ldGame.mapScrollZ));
          
          if (Math.abs(dy) > 2) ldGame.isDraggingMap = true;
      }
  }

  function handleLdTouchEnd(e) {
      if (ldGame.state === 'MAP') {
          if (!ldGame.isDraggingMap) {
              // Tap detection - Check if tapped on a node
              const rect = lingoDriftCanvas.getBoundingClientRect();
              const touch = e.changedTouches[0];
              const scaleX = lingoDriftCanvas.width / rect.width;
              const scaleY = lingoDriftCanvas.height / rect.height;
              const tx = (touch.clientX - rect.left) * scaleX;
              const ty = (touch.clientY - rect.top) * scaleY;
              
              checkMapTap(tx, ty);
          } else {
              // Snap to nearest
              ldGame.mapSelection = Math.round(ldGame.mapScrollZ);
          }
          ldGame.mapDragY = null;
          ldGame.isDraggingMap = false;
          return;
      }

      if (ldGame.state !== 'PLAYING') return;
      ldGame.keys.left = false;
      ldGame.keys.right = false;
  }

  function spawnLingoDriftWave() {
      if (ldGame.availableWords.length === 0) {
          // Refill based on level
          const targetWords = ldGame.levelConfig.words;
          ldGame.availableWords = wsWordsEn.filter(w => targetWords.includes(w.en.toUpperCase()));
      }

      const targetIndex = Math.floor(Math.random() * ldGame.availableWords.length);
      ldGame.targetWord = ldGame.availableWords.splice(targetIndex, 1)[0];
      ldGame.roundLifeLost = false;

      let distractors = [];
      const tempWords = [...wsWordsEn];
      while (distractors.length < 2) {
          const dIndex = Math.floor(Math.random() * tempWords.length);
          const d = tempWords.splice(dIndex, 1)[0];
          if (d.es !== ldGame.targetWord.es) {
              distractors.push(d);
          }
      }

      const waveOptions = [
          { text: ldGame.targetWord.es, isCorrect: true },
          { text: distractors[0].es, isCorrect: false },
          { text: distractors[1].es, isCorrect: false }
      ];
      
      shuffleArray(waveOptions);

      // Lanes: -1 (Left), 0 (Center), 1 (Right)
      const lanes = [-1, 0, 1];
      shuffleArray(lanes);

      ldGame.options = waveOptions.map((opt, i) => ({
          ...opt,
          lane: lanes[i],
          z: 0 // Start at horizon
      }));
      
      // TTS: Read the English target word
      speakText(ldGame.targetWord.en, 'en');
  }

  function spawnLdObstacle() {
      const lanes = [-1, 0, 1];
      const lane = lanes[Math.floor(Math.random() * lanes.length)];
      // Ensure no overlap with existing objects at z=0 would be complex, 
      // but simple random spawn works for arcade feel
      ldGame.obstacles.push({ lane: lane, z: 0, type: 'cone' });
  }

  function spawnLdPowerUp(type) {
      const lanes = [-1, 0, 1];
      const lane = lanes[Math.floor(Math.random() * lanes.length)];
      ldGame.powerUps.push({ lane: lane, z: 0, type: type });
  }

  function lingoDriftLoop() {
      if (sections.lingoDrift.classList.contains('hidden')) return;

      if (ldGame.state === 'MAP') {
          updateLingoDriftMap();
          drawLingoDriftMap();
      } else if (ldGame.state === 'PLAYING' || ldGame.state === 'LEVEL_COMPLETE') {
          updateLingoDrift();
          drawLingoDrift();
      }
      ldLoopId = requestAnimationFrame(lingoDriftLoop);
  }

  // --- Map System ---
  function enterLingoDriftMap(fromWin = false) {
      ldGame.state = 'MAP';
      // Initialize map car position
      // Select the highest unlocked level by default
      ldGame.mapSelection = ldGame.maxLevel - 1; 
      
      if (fromWin && ldGame.maxLevel > 1) {
          ldGame.mapScrollZ = ldGame.maxLevel - 2; // Start from previous level to show advance
      } else {
          ldGame.mapScrollZ = ldGame.mapSelection;
      }
      
      // Stop engine sound from game
      if (ldEngineOsc) {
          try {
              ldEngineOsc.frequency.cancelScheduledValues(audioCtx.currentTime);
              ldEngineGain.gain.cancelScheduledValues(audioCtx.currentTime);
              ldEngineGain.gain.setValueAtTime(0, audioCtx.currentTime);
          } catch(e) {}
      }

      // Init Rain for Map
      ldGame.rainDrops = [];
      for(let i=0; i<60; i++) {
          ldGame.rainDrops.push({
              x: Math.random() * lingoDriftCanvas.width,
              y: Math.random() * lingoDriftCanvas.height,
              length: Math.random() * 20 + 10,
              speed: Math.random() * 5 + 10
          });
      }
      
      // Attach listeners for Map interaction
      window.removeEventListener('keydown', handleLdKey);
      window.removeEventListener('keyup', handleLdKey);
      lingoDriftCanvas.removeEventListener('touchstart', handleLdTouch);
      lingoDriftCanvas.removeEventListener('touchmove', handleLdTouchMove);
      lingoDriftCanvas.removeEventListener('touchend', handleLdTouchEnd);
      lingoDriftCanvas.removeEventListener('click', handleLdClick);

      window.addEventListener('keydown', handleLdKey);
      window.addEventListener('keyup', handleLdKey);
      lingoDriftCanvas.addEventListener('touchstart', handleLdTouch, { passive: false });
      lingoDriftCanvas.addEventListener('touchmove', handleLdTouchMove, { passive: false });
      lingoDriftCanvas.addEventListener('touchend', handleLdTouchEnd);
      lingoDriftCanvas.addEventListener('click', handleLdClick);

      if (ldLoopId) cancelAnimationFrame(ldLoopId);
      lingoDriftLoop();
  }

  function updateLingoDriftMap() {
      // Update Rain
      ldGame.rainDrops.forEach(d => {
          d.y += d.speed;
          if(d.y > lingoDriftCanvas.height) {
              d.y = -d.length;
              d.x = Math.random() * lingoDriftCanvas.width;
          }
      });

      // Random Lightning
      if (!ldGame.lightning.active && Math.random() < 0.005) {
          ldGame.lightning.active = true;
          ldGame.lightning.timer = Math.random() * 10 + 5;
          const startX = Math.random() * lingoDriftCanvas.width;
          let path = [{x: startX, y: 0}];
          let cy = 0;
          while(cy < lingoDriftCanvas.height) {
              const lx = path[path.length-1].x + (Math.random()-0.5)*50;
              const ly = path[path.length-1].y + Math.random()*30 + 10;
              path.push({x: lx, y: ly});
              cy = ly;
          }
          ldGame.lightning.path = path;
      }
      if (ldGame.lightning.timer > 0) ldGame.lightning.timer--;
      else ldGame.lightning.active = false;

      // Smoothly scroll map to selection ONLY if not dragging
      if (!ldGame.isDraggingMap) {
          const diff = ldGame.mapSelection - ldGame.mapScrollZ;
          if (Math.abs(diff) > 0.01) ldGame.mapScrollZ += diff * 0.04;
          else ldGame.mapScrollZ = ldGame.mapSelection;
      }
  }

  function drawLingoDriftMap() {
      const ctx = lingoDriftCtx;
      const w = lingoDriftCanvas.width;
      const h = lingoDriftCanvas.height;

      // Map Background
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#0a0a2a');
      grad.addColorStop(1, '#2a0a3a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw Lightning
      if (ldGame.lightning.active) {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
          ctx.fillRect(0, 0, w, h);
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(ldGame.lightning.path[0].x, ldGame.lightning.path[0].y);
          for(let i=1; i<ldGame.lightning.path.length; i++) {
              ctx.lineTo(ldGame.lightning.path[i].x, ldGame.lightning.path[i].y);
          }
          ctx.stroke();
      }

      // Draw Road (Vertical winding path)
      ctx.strokeStyle = '#444';
      ctx.lineWidth = 40;
      ctx.lineCap = 'round';
      ctx.beginPath();
      
      const points = [];
      for(let i=0; i<ldLevels.length; i++) {
          const x = w/2 + Math.sin(i * 1.5) * (w * 0.3);
          const y = h - 100 - (i * 120) + (ldGame.mapScrollZ * 120); // Scroll based on selection
          points.push({x, y, level: ldLevels[i]});
      }

      if (points.length > 0) {
          ctx.moveTo(points[0].x, points[0].y);
          for(let i=1; i<points.length; i++) {
              ctx.lineTo(points[i].x, points[i].y);
          }
          ctx.stroke();
          
          // Center line
          ctx.strokeStyle = '#ffcc00';
          ctx.lineWidth = 2;
          ctx.setLineDash([10, 10]);
          ctx.stroke();
          ctx.setLineDash([]);
      }

      // Draw Level Nodes
      points.forEach((p, i) => {
          const isUnlocked = (i + 1) <= ldGame.maxLevel;
          const isCurrent = i === ldGame.mapSelection;
          
          // Node Circle
          ctx.fillStyle = isUnlocked ? (isCurrent ? '#00ff00' : '#00ccff') : '#555';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 25, 0, Math.PI * 2);
          ctx.fill();
          
          // Level Icon
          ctx.font = '24px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(p.level.icon, p.x - 40, p.y);

          // Level Number
          ctx.fillStyle = '#000';
          ctx.font = 'bold 20px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(p.level.id, p.x, p.y);

          // Level Name Label
          ctx.fillStyle = '#fff';
          ctx.font = '14px Nunito';
          ctx.textAlign = 'left';
          ctx.fillText(p.level.name, p.x + 35, p.y);
          
          // "JUGAR" button indicator if selected
          if (isCurrent) {
              const pulse = 1 + Math.sin(Date.now() / 100) * 0.1;
              
              ctx.save();
              ctx.translate(p.x, p.y + 60);
              ctx.scale(pulse, pulse);
              
              ctx.fillStyle = '#ff0055';
              ctx.shadowColor = '#ff0055';
              ctx.shadowBlur = 20;
              ctx.beginPath();
              ctx.roundRect(-40, -15, 80, 30, 10);
              ctx.fill();
              
              ctx.fillStyle = '#fff';
              ctx.font = 'bold 14px Arial';
              ctx.textAlign = 'center';
              ctx.fillText("JUGAR", 0, 5);
              
              ctx.restore();
          }
      });

      // Draw Car on Map
      // Car follows the curve at mapScrollZ
      const z = ldGame.mapScrollZ;
      const idx = Math.floor(z);
      
      // Car stays relatively fixed in Y (near bottom), world moves
      const carX = w/2 + Math.sin(z * 1.5) * (w * 0.3);
      const carY = h - 100;

      ctx.save();
      ctx.translate(carX, carY);
      ctx.scale(0.6, 0.6); // Smaller car
      
      // Draw Mini Neon Car
      ctx.shadowColor = '#00c6ff';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#000';
      ctx.strokeStyle = '#00c6ff';
      ctx.lineWidth = 4;
      
      ctx.beginPath();
      ctx.roundRect(-35, -20, 70, 40, 5);
      ctx.fill();
      ctx.stroke();
      
      // Windshield
      ctx.fillStyle = '#00ffff';
      ctx.beginPath();
      ctx.moveTo(-25, -20); ctx.lineTo(25, -20); ctx.lineTo(20, 0); ctx.lineTo(-20, 0);
      ctx.fill();
      
      // Lights
      ctx.fillStyle = '#ff0055';
      ctx.shadowColor = '#ff0055';
      ctx.fillRect(-30, 15, 15, 5); ctx.fillRect(15, 15, 15, 5);
      
      ctx.restore();

      // Draw Rain
      ctx.strokeStyle = 'rgba(150, 150, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ldGame.rainDrops.forEach(d => {
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(d.x, d.y + d.length);
      });
      ctx.stroke();
  }

  // Project 3D world coordinates to 2D screen
  function project(lane, z, w, h) {
      const horizonY = h * 0.4;
      const camY = h;
      // Perspective projection
      const currentY = horizonY + (camY - horizonY) * z;
      
      // Road width expands as it gets closer
      const roadWidthAtZ = (w * 0.1) + (w * 1.2) * z; 
      const laneWidth = roadWidthAtZ / 3;
      
      const centerX = w / 2;
      // Lane position relative to center
      const currentX = centerX + (lane * laneWidth * 0.8); 
      
      const scale = 0.2 + 0.8 * z; // Scale factor based on depth
      return { x: currentX, y: currentY, scale: scale };
  }

  function updateLingoDrift() {
      const w = lingoDriftCanvas.width;
      const h = lingoDriftCanvas.height;
      const playerSpeed = 7;
      const maxRotation = 0.2; // Radians
      const rotationSpeed = 0.04;
      
      // --- LEVEL COMPLETE SEQUENCE ---
      if (ldGame.state === 'LEVEL_COMPLETE') {
          // Phase 1: Decelerate to stop
          if (ldGame.speed > 0) {
              ldGame.speed *= 0.9; // Rapid deceleration
              if (ldGame.speed < 0.0001) ldGame.speed = 0;
          }
          
          // Phase 2: Wait then exit
          if (ldGame.winTimer < 150) {
              ldGame.winTimer++;
          }
          // Phase 3: Exit to Map
          else {
              if (ldGame.level < ldLevels.length) {
                  ldGame.maxLevel = Math.max(ldGame.maxLevel, ldGame.level + 1);
              }
              enterLingoDriftMap(true);
              return;
          }
          return;
      }

      // --- NORMAL GAMEPLAY ---
      
      let isDrifting = false;

      // Update Turbo Timer
      if (ldGame.turboTimer > 0) ldGame.turboTimer--;

      // Update Damage Timer
      if (ldGame.damageTimer > 0) ldGame.damageTimer--;

      // Update Rotation
      if (ldGame.keys.left) {
          ldGame.rotation = Math.max(-maxRotation, ldGame.rotation - rotationSpeed);
      } else if (ldGame.keys.right) {
          ldGame.rotation = Math.min(maxRotation, ldGame.rotation + rotationSpeed);
      } else {
          // Return to center smoothly
          if (ldGame.rotation > 0.01) {
              ldGame.rotation -= rotationSpeed / 2;
          } else if (ldGame.rotation < -0.01) {
              ldGame.rotation += rotationSpeed / 2;
          } else {
              ldGame.rotation = 0;
          }
      }

      // Player Movement
      if (ldGame.keys.left && ldGame.player.x > 0) {
        ldGame.player.x -= playerSpeed;
        isDrifting = true;
        spawnDriftSparks(ldGame.player.x + ldGame.player.w, h - 80 + ldGame.player.h); // Right tire
      }
      if (ldGame.keys.right && ldGame.player.x < w - ldGame.player.w) {
        ldGame.player.x += playerSpeed;
        isDrifting = true;
        spawnDriftSparks(ldGame.player.x, h - 80 + ldGame.player.h); // Left tire
      }

      // Update Rain
      ldGame.rainDrops.forEach(drop => {
          drop.y += drop.speed;
          if (drop.y > h) {
              drop.y = -drop.length;
              drop.x = Math.random() * w;
          }
      });

      // Move Finish Line
      if (ldGame.finishLineSpawned) {
          ldGame.finishLineZ += ldGame.speed;
          if (ldGame.finishLineZ > 0.75) { // Crossed player
             ldGame.state = 'LEVEL_COMPLETE';
             ldGame.winTimer = 0;
             playEpicVictory();
             return;
          }
      }

      // Check Level Win condition to spawn finish line
      if (!ldGame.finishLineSpawned && ldGame.score >= ldGame.levelConfig.scoreGoal) {
          ldGame.finishLineSpawned = true;
          ldGame.finishLineZ = 0; // Start at horizon
          ldGame.options = []; // Clear words
          ldGame.obstacles = []; // Clear obstacles
          ldGame.powerUps = []; // Clear powerups (No items behind finish line)
      }

      // Update Lightning
      if (ldGame.lightning.timer > 0) {
          ldGame.lightning.timer--;
      } else {
          ldGame.lightning.active = false;
      }

      // Update Engine Sound
      updateLdEngineSound(ldGame.speed, isDrifting);

      // Move Objects
      const moveObj = (o) => o.z += ldGame.speed;
      ldGame.options.forEach(moveObj);
      ldGame.obstacles.forEach(moveObj);
      ldGame.powerUps.forEach(moveObj);
      ldGame.roadLines.forEach(l => {
          l.z += ldGame.speed;
          if(l.z > 1) l.z -= 1;
      });

      // Collision Logic
      const playerRect = { 
          x: ldGame.player.x, 
          y: ldGame.player.y || (h - 80), 
          w: ldGame.player.w, 
          h: ldGame.player.h 
      };

      // Collision Thresholds
      // Car is at Y = h - 80. Horizon is h * 0.4.
      // Z = (Y - Horizon) / (h - Horizon).
      // For h=450, Horizon=180. h-Horizon=270. CarY=370. Z = (370-180)/270 = 0.70.
      // We check collision when object is roughly at the car's Z depth.
      const collisionZMin = 0.65;
      const collisionZMax = 0.85;

      // Check Words
      for (let i = ldGame.options.length - 1; i >= 0; i--) {
          let opt = ldGame.options[i];
          if (opt.z >= collisionZMin && opt.z <= collisionZMax) {
              const p = project(opt.lane, opt.z, w, h);
              const objW = 120 * p.scale;
              
              // Simple X-axis overlap check since Z is matched
              if (playerRect.x < p.x + objW/2 && playerRect.x + playerRect.w > p.x - objW/2) {
                  if (opt.isCorrect) {
                      ldGame.score += 10;
                      ldGame.speed += 0.0005;
                      ldGame.turboTimer = 60; // Activate turbo for ~1 second
                      playSuccess();
                      
                      spawnLingoDriftWave();
                      return; // Stop here to prevent splicing the NEW array
                  } else {
                      if (!ldGame.roundLifeLost) {
                          ldGame.lives--;
                          ldGame.roundLifeLost = true;
                          ldGame.damageTimer = 60;
                          playError();
                          if (ldGame.lives <= 0) gameOverLingoDrift();
                      }
                  }
                  ldGame.options.splice(i, 1); // Remove caught word
                  continue;
              }
          }
          if (opt.z > 1.2) { // Missed word
              if (opt.isCorrect) {
                  if (!ldGame.roundLifeLost) {
                      ldGame.lives--; // Missed correct word
                      ldGame.damageTimer = 60;
                      playError();
                  }
                  if (ldGame.lives <= 0) {
                      gameOverLingoDrift();
                      return;
                  } else {
                      spawnLingoDriftWave();
                      return;
                  }
              }
              ldGame.options.splice(i, 1);
          }
      }

      // Check Obstacles
      for (let i = ldGame.obstacles.length - 1; i >= 0; i--) {
          let obs = ldGame.obstacles[i];
          if (obs.z >= collisionZMin && obs.z <= collisionZMax) {
              const p = project(obs.lane, obs.z, w, h);
              if (playerRect.x < p.x + 20 && playerRect.x + playerRect.w > p.x - 20) {
                  ldGame.lives--;
                  ldGame.damageTimer = 60;
                  playError(); // Crash sound
                  ldGame.obstacles.splice(i, 1);
                  if (ldGame.lives <= 0) gameOverLingoDrift();
                  continue;
              }
          }
          if (obs.z > 1.2) ldGame.obstacles.splice(i, 1);
      }

      // Check PowerUps
      for (let i = ldGame.powerUps.length - 1; i >= 0; i--) {
          let pup = ldGame.powerUps[i];
          if (pup.z >= collisionZMin && pup.z <= collisionZMax) {
              const p = project(pup.lane, pup.z, w, h);
              if (playerRect.x < p.x + 20 && playerRect.x + playerRect.w > p.x - 20) {
                  if (pup.type === 'life') {
                      ldGame.lives++;
                      playLifeSound();
                  } else if (pup.type === 'slow') {
                      ldGame.speed = Math.max(0.003, ldGame.speed - 0.002);
                      playFreezeSound();
                  }
                  ldGame.powerUps.splice(i, 1);
                  continue;
              }
          }
          if (pup.z > 1.2) ldGame.powerUps.splice(i, 1);
      }

      // Random Spawns
      if (!ldGame.lightning.active && Math.random() < 0.002) {
          ldGame.lightning.active = true;
          ldGame.lightning.timer = Math.random() * 15 + 5; // duration of flash
          // Generate path
          const startX = Math.random() * w;
          const horizon = h * 0.4;
          let path = [{x: startX, y: 0}];
          let currentY = 0;
          while(currentY < horizon) {
              const last = path[path.length - 1];
              const nextX = last.x + (Math.random() - 0.5) * 40;
              const nextY = last.y + Math.random() * 20 + 10;
              path.push({x: nextX, y: nextY});
              currentY = nextY;
          }
          ldGame.lightning.path = path;
      }
      
      const now = Date.now();
      if (!ldGame.finishLineSpawned && !ldGame.lightning.active && Math.random() < 0.003 && (now - ldGame.lastObstacleTime > 1500)) {
          spawnLdObstacle();
          ldGame.lastObstacleTime = now;
      }

      if (!ldGame.finishLineSpawned && ldGame.lives < 3 && Math.random() < 0.002) spawnLdPowerUp('life');
      if (!ldGame.finishLineSpawned && ldGame.speed > 0.006 && Math.random() < 0.003) spawnLdPowerUp('slow');
      
      // Update Particles
      for (let i = ldGame.particles.length - 1; i >= 0; i--) {
          let p = ldGame.particles[i];
          p.x += p.vx; p.y += p.vy; p.life -= p.decay || 0.1;
          if (p.life <= 0) ldGame.particles.splice(i, 1);
      }
  }

  function drawLingoDrift() {
      const ctx = lingoDriftCtx;
      const w = lingoDriftCanvas.width;
      const h = lingoDriftCanvas.height;
      const horizon = h * 0.4;
      
      const theme = ldGame.levelConfig || ldLevels[0];

      // Background
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, theme.sky[0]);
      grad.addColorStop(horizon / h, theme.sky[1]);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Lightning Effect
      if (ldGame.lightning.active) {
          const flashAlpha = ldGame.lightning.timer / 15;
          ctx.fillStyle = `rgba(200, 200, 255, ${flashAlpha * 0.5})`;
          ctx.fillRect(0, 0, w, h);

          ctx.strokeStyle = `rgba(255, 255, 255, ${flashAlpha})`;
          ctx.lineWidth = Math.random() * 3 + 1;
          ctx.shadowColor = '#fff';
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.moveTo(ldGame.lightning.path[0].x, ldGame.lightning.path[0].y);
          for (let i = 1; i < ldGame.lightning.path.length; i++) {
              ctx.lineTo(ldGame.lightning.path[i].x, ldGame.lightning.path[i].y);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
      }

      // Sun
      ctx.fillStyle = '#ffcc00';
      ctx.beginPath();
      ctx.arc(w / 2, horizon, 40, 0, Math.PI * 2);
      ctx.fill();

      // Ground
      ctx.fillStyle = theme.ground;
      ctx.fillRect(0, horizon, w, h - horizon);

      // Moving Road Lines (Grid effect)
      ctx.strokeStyle = 'rgba(255, 0, 255, 0.3)';
      ctx.lineWidth = 2;
      ldGame.roadLines.forEach(l => {
          const y = horizon + (h - horizon) * l.z;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
      });
      // Perspective Lines
      ctx.beginPath();
      ctx.moveTo(w/2, horizon); ctx.lineTo(0, h);
      ctx.moveTo(w/2, horizon); ctx.lineTo(w, h);
      ctx.moveTo(w/2, horizon); ctx.lineTo(w*0.2, h);
      ctx.moveTo(w/2, horizon); ctx.lineTo(w*0.8, h);
      ctx.stroke();

      // Draw Finish Line
      if (ldGame.finishLineSpawned) {
          const p = project(0, ldGame.finishLineZ, w, h);
          const roadWidthAtZ = (w * 0.1) + (w * 1.2) * ldGame.finishLineZ;
          const y = p.y;
          
          ctx.save();
          ctx.translate(w/2, y);
          
          const checkSize = 20 * p.scale;
          const totalW = roadWidthAtZ;
          
          ctx.fillStyle = '#fff';
          ctx.fillRect(-totalW/2, -checkSize, totalW, checkSize*2);
          
          ctx.fillStyle = '#000';
          for(let r=0; r<2; r++) {
              for(let c=0; c<Math.ceil(totalW/checkSize); c++) {
                  if ((r+c)%2 === 0) {
                      ctx.fillRect(-totalW/2 + c*checkSize, -checkSize + r*checkSize, checkSize, checkSize);
                  }
              }
          }
          
          // Banner
          ctx.fillStyle = '#ff0055';
          ctx.fillRect(-totalW/2, -checkSize*4, totalW, checkSize*2);
          ctx.fillStyle = '#fff';
          ctx.font = `bold ${20*p.scale}px Arial`;
          ctx.textAlign = 'center';
          ctx.fillText("FINISH", 0, -checkSize*2.8);
          
          ctx.restore();
      }

      // Draw Objects (Sorted by Z to draw far objects first)
      const allObjs = [
          ...ldGame.options.map(o => ({...o, type: 'word'})),
          ...ldGame.obstacles.map(o => ({...o, type: 'obs'})),
          ...ldGame.powerUps.map(o => ({...o, type: 'pup'}))
      ].sort((a, b) => a.z - b.z);

      allObjs.forEach(obj => {
          const p = project(obj.lane, obj.z, w, h);
          ctx.save();
          ctx.translate(p.x, p.y);
          
          if (obj.type === 'word') {
              ctx.fillStyle = '#00ffff'; // Uniform color (Cyan)
              ctx.font = `bold ${30 * p.scale}px "Arial Black", sans-serif`;
              ctx.textAlign = 'center';
              ctx.shadowColor = ctx.fillStyle;
              ctx.shadowBlur = 10;
              ctx.fillText(obj.text, 0, 0);
          } else if (obj.type === 'obs') {
              // Cone
              ctx.fillStyle = '#ff5500';
              ctx.beginPath();
              ctx.moveTo(0, -20 * p.scale);
              ctx.lineTo(10 * p.scale, 0);
              ctx.lineTo(-10 * p.scale, 0);
              ctx.fill();
          } else if (obj.type === 'pup') {
              ctx.font = `${30 * p.scale}px Arial`;
              ctx.textAlign = 'center';
              ctx.fillText(obj.type === 'life' ? '❤️' : '❄️', 0, 0);
          }
          ctx.restore();
      });

      // Draw Player Car (Neon Style)
      const px = ldGame.player.x;
      const py = ldGame.player.y || (h - 80);
      const pw = ldGame.player.w;
      const ph = ldGame.player.h;

      ctx.save();
      ctx.translate(px + pw / 2, py + ph / 2);
      
      if (ldGame.state === 'LEVEL_COMPLETE') {
          // Victory Dance
          const danceTime = Date.now() / 100;
          const jump = Math.abs(Math.sin(danceTime)) * 15;
          const rock = Math.sin(danceTime) * 0.1;
          ctx.translate(0, -jump);
          ctx.rotate(rock);
      } else {
          ctx.rotate(ldGame.rotation);
      }

      const carBodyX = -pw / 2;
      const carBodyY = -ph / 2;

      // Blink Effect on Damage
      if (!(ldGame.damageTimer > 0 && Math.floor(ldGame.damageTimer / 4) % 2 === 0)) {

      // Turbo Exhaust Flames (New Effect)
      if (ldGame.turboTimer > 0) {
          const flicker = Math.random() * 10;
          const flameLen = 25 + (ldGame.turboTimer / 1.5) + flicker;
          
          ctx.save();
          ctx.shadowBlur = 20;
          ctx.shadowColor = '#00ffff'; // Blue glow
          
          // Helper to draw flame
          const drawFlame = (x, y) => {
              ctx.fillStyle = 'rgba(0, 255, 255, 0.8)'; // Cyan Fire
              ctx.beginPath();
              ctx.moveTo(x - 5, y);
              ctx.lineTo(x, y + flameLen);
              ctx.lineTo(x + 5, y);
              ctx.closePath();
              ctx.fill();
              
              // Inner core
              ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
              ctx.beginPath();
              ctx.moveTo(x - 2, y);
              ctx.lineTo(x, y + flameLen * 0.7);
              ctx.lineTo(x + 2, y);
              ctx.fill();
          };

          // Left Exhaust (Double Pipe)
          drawFlame(carBodyX + 12, carBodyY + ph);
          
          // Right Exhaust (Double Pipe)
          drawFlame(carBodyX + pw - 12, carBodyY + ph);
          
          ctx.restore();
      }

      ctx.shadowColor = '#00c6ff';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#000';
      ctx.strokeStyle = '#00c6ff';
      ctx.lineWidth = 3;

      // Car Body
      ctx.beginPath();
      ctx.moveTo(carBodyX, carBodyY + ph);
      ctx.lineTo(carBodyX + pw, carBodyY + ph); // Bottom
      ctx.lineTo(carBodyX + pw, carBodyY + ph/2); 
      ctx.lineTo(carBodyX + pw - 10, carBodyY); // Windshield right
      ctx.lineTo(carBodyX + 10, carBodyY); // Windshield left
      ctx.lineTo(carBodyX, carBodyY + ph/2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Tail lights
      ctx.fillStyle = '#ff0000';
      ctx.shadowColor = '#ff0000';
      ctx.fillRect(carBodyX + 5, carBodyY + ph - 10, 15, 5);
      ctx.fillRect(carBodyX + pw - 20, carBodyY + ph - 10, 15, 5);
      
      } // End Blink Check
      ctx.restore();
      
      // Draw Rain
      ctx.strokeStyle = 'rgba(200, 200, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ldGame.rainDrops.forEach(drop => {
          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(drop.x - 2, drop.y + drop.length); // Slanted rain
      });
      ctx.stroke();

      // Draw Particles (Sparks)
      ldGame.particles.forEach(p => {
          ctx.fillStyle = `rgba(255, 200, 0, ${p.life})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fill();
      });

      // UI
      // Target Word Box
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 2;
      ctx.fillRect(w/2 - 100, 20, 200, 50);
      ctx.strokeRect(w/2 - 100, 20, 200, 50);
      
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 24px "Nunito", sans-serif';
      ctx.textAlign = 'center';
      if (ldGame.targetWord) ctx.fillText(ldGame.targetWord.en, w/2, 53);

      // Stats
      ctx.textAlign = 'left';
      ctx.font = '20px Arial';
      ctx.fillText('❤️'.repeat(ldGame.lives), 20, 40);
      
      ctx.textAlign = 'right';
      ctx.fillText(`Score: ${ldGame.score}`, w - 20, 40);
      
      // Level Progress Bar
      const goal = ldGame.levelConfig ? ldGame.levelConfig.scoreGoal : 100;
      const pct = Math.min(1, ldGame.score / goal);
      ctx.fillStyle = '#333';
      ctx.fillRect(w/2 - 100, 80, 200, 10);
      ctx.fillStyle = '#00ff00';
      ctx.fillRect(w/2 - 100, 80, 200 * pct, 10);
  }

  function spawnDriftSparks(x, y) {
      for(let i=0; i<2; i++) {
          ldGame.particles.push({
              x: x + (Math.random() - 0.5) * 10,
              y: y,
              vx: (Math.random() - 0.5) * 5,
              vy: -Math.random() * 5,
              life: 1.0
          });
      }
  }

  function spawnSteam(x, y) {
      ldGame.particles.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y,
          vx: (Math.random() - 0.5) * 1,
          vy: -Math.random() * 2 - 1,
          life: 1.0,
          decay: 0.02 // Slower decay for steam
      });
  }

  // --- Lingo Drift Audio System ---
  function startLdAudio() {
      stopLdAudio(); // Clear any existing
      if (audioCtx.state === 'suspended') audioCtx.resume();
      
      // Engine Sound
      ldEngineOsc = audioCtx.createOscillator();
      ldEngineGain = audioCtx.createGain();
      ldEngineOsc.type = 'sawtooth';
      ldEngineOsc.frequency.value = 100;
      
      // Lowpass to muffle
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;
      
      ldEngineOsc.connect(filter);
      filter.connect(ldEngineGain);
      ldEngineGain.connect(audioCtx.destination);
      ldEngineGain.gain.value = 0.15;
      ldEngineOsc.start();

      // BGM Loop
      playLdBgmLoop();
      ldBgmInterval = setInterval(playLdBgmLoop, 3200);
  }

  function updateLdEngineSound(speed, isDrifting) {
      if (!ldEngineOsc) return;
      const baseFreq = 80 + (speed * 10000); 
      const targetFreq = isDrifting ? baseFreq * 1.2 : baseFreq;
      const targetVol = isDrifting ? 0.25 : 0.15;
      
      ldEngineOsc.frequency.setTargetAtTime(targetFreq, audioCtx.currentTime, 0.1);
      ldEngineGain.gain.setTargetAtTime(targetVol, audioCtx.currentTime, 0.1);
  }

  function playLdBgmLoop() {
      if (ldGame.muted || sections.lingoDrift.classList.contains('hidden')) return;
      const now = audioCtx.currentTime;
      
      // New BGM: Deep & Quiet (Synthwave style)
      
      // Bass Drone (Continuous)
      const bassOsc = audioCtx.createOscillator();
      const bassGain = audioCtx.createGain();
      const bassFilter = audioCtx.createBiquadFilter();
      
      bassOsc.type = 'sawtooth';
      bassOsc.frequency.setValueAtTime(32.70, now); // C1
      bassFilter.type = 'lowpass';
      bassFilter.frequency.value = 150;
      
      bassOsc.connect(bassFilter);
      bassFilter.connect(bassGain);
      bassGain.connect(audioCtx.destination);
      
      bassGain.gain.setValueAtTime(0.04, now);
      bassGain.gain.linearRampToValueAtTime(0.04, now + 3.0);
      bassGain.gain.linearRampToValueAtTime(0, now + 3.2);
      
      bassOsc.start(now);
      bassOsc.stop(now + 3.2);

      // Minimal Rhythm
      for(let i=0; i<4; i++) {
          // Soft Kick
          playTone(60, 'sine', 0.1, i * 0.8, 0.05);
          // Quiet Hat
          playTone(3000, 'square', 0.03, i * 0.8 + 0.4, 0.01);
      }
  }

  function stopLdAudio() {
      if (ldBgmInterval) clearInterval(ldBgmInterval);
      ldBgmInterval = null;
      if (ldEngineOsc) { try { ldEngineOsc.stop(); } catch(e){} ldEngineOsc = null; }
  }

  function saveLdHighScore(score) {
      const key = 'lingoDriftHighScores';
      let scores = JSON.parse(localStorage.getItem(key) || '[]');
      scores.push({ score: score, date: new Date().toLocaleDateString() });
      scores.sort((a, b) => b.score - a.score);
      scores = scores.slice(0, 5); // Keep top 5
      localStorage.setItem(key, JSON.stringify(scores));
      return scores;
  }

  function gameOverLingoDrift() {
      ldGame.state = 'GAME_OVER';
      if (ldLoopId) cancelAnimationFrame(ldLoopId);
      window.removeEventListener('keydown', handleLdKey);
      window.removeEventListener('keyup', handleLdKey);
      lingoDriftCanvas.removeEventListener('touchstart', handleLdTouch);
      lingoDriftCanvas.removeEventListener('touchend', handleLdTouchEnd);
      
      // Stop engine but maybe keep BGM or play game over sound?
      // User requested sound to stop when leaving section, but for game over usually we stop engine.
      if (ldEngineOsc) { try { ldEngineOsc.stop(); } catch(e){} ldEngineOsc = null; }

      const overlay = document.getElementById('lingoDriftOverlay');
      const msg = document.getElementById('lingoDriftMsg');
      const btn = document.getElementById('lingoDriftRestartBtn');
      const nextBtn = document.getElementById('lingoDriftNextLevelBtn');
      const lb = document.getElementById('lingoDriftLeaderboard');
      
      msg.textContent = `¡Juego Terminado! Puntaje: ${ldGame.score}`;
      
      // Save and show scores
      const topScores = saveLdHighScore(ldGame.score);
      let lbHtml = '<strong>🏆 Mejores Puntajes:</strong><ul style="padding-left: 20px; margin-top: 5px;">';
      topScores.forEach(s => {
        lbHtml += `<li>${s.score} pts <span style="font-size:0.8em; color:#666;">(${s.date})</span></li>`;
      });
      lbHtml += '</ul>';
      if(lb) lb.innerHTML = lbHtml;
      
      // Hide Next Level button on Game Over
      if(nextBtn) nextBtn.style.display = 'none';

      btn.textContent = "Intentar de nuevo";
      btn.onclick = () => {
        overlay.style.display = 'none';
        startLingoDriftGame(ldGame.level); // Restart current level
      };
      overlay.style.display = 'block';
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
    
    const isEval1 = (state.language === 'en' && [1,2,3,4,5,6].includes(state.grade)) || 
                    (state.language === 'it' && [1,2,3,4,5,6].includes(state.grade));

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
      
      // TTS Logic for Italian and English (Grades 1-6)
      if ((state.language === 'it' || state.language === 'en') && state.grade >= 1 && state.grade <= 6) {
        speakText(q.answer, state.language);
      }

      // Sound Effect (Italian & English All Grades)
      if (state.language === 'it' || state.language === 'en') {
        playSuccess();
      }
      
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
      
      // Sound Effect (Italian & English All Grades)
      if (state.language === 'it' || state.language === 'en') {
        playError();
      }

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

    // Sound Effect (Italian & English All Grades)
    if (state.language === 'it' || state.language === 'en') {
      playComplete();
    }

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
    if ((state.language === 'en' && [1,2,3,4,5,6].includes(state.grade)) || 
        (state.language === 'it' && [1,2,3,4,5,6].includes(state.grade))) {
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

  // --- TTS Helper ---
  let italianVoice = null;
  let englishVoice = null;

  function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    italianVoice = voices.find(v => v.lang === 'it-IT') || voices.find(v => v.lang.startsWith('it'));
    englishVoice = voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en'));
  }

  if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    // Warm up TTS engine to reduce latency
    const warmUp = new SpeechSynthesisUtterance('');
    warmUp.volume = 0;
    window.speechSynthesis.speak(warmUp);
  }

  function speakText(text, lang = 'it') {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text.toLowerCase()); // Lowercase fixes spelling out uppercase words
      
      if (lang === 'en') {
        utterance.lang = 'en-US';
        if (englishVoice) utterance.voice = englishVoice;
      } else {
        utterance.lang = 'it-IT';
        if (italianVoice) utterance.voice = italianVoice;
      }
      
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }

  // --- Sound Effects (Web Audio API) ---
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // Solución para móviles: Desbloquear AudioContext con la primera interacción
  function unlockAudio() {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    // Reproducir buffer silencioso para forzar el desbloqueo en iOS/Android
    const buffer = audioCtx.createBuffer(1, 1, 22050);
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start(0);

    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('touchstart', unlockAudio);
  }
  document.addEventListener('click', unlockAudio);
  document.addEventListener('touchstart', unlockAudio);

  function playTone(freq, type, duration, delay = 0, vol = 0.3) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    gain.gain.setValueAtTime(vol, audioCtx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + duration);
    
    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + duration);
  }

  // --- Background Music System ---
  let bgmInterval = null;
  
  function startBGM() {
    if (bgmInterval) clearInterval(bgmInterval);
    playBGMLoop();
    bgmInterval = setInterval(playBGMLoop, 3200); // Loop length
  }

  function stopBGM() {
    if (bgmInterval) clearInterval(bgmInterval);
    bgmInterval = null;
  }

  function playBGMLoop() {
    if (pGame.muted || sections.prueba.classList.contains('hidden')) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;
    
    // Varied Bassline (Cyberpunk style)
    const variations = [
      [65.41, 65.41, 77.78, 58.27], // C2, C2, Eb2, Bb1
      [65.41, 58.27, 65.41, 77.78], // Variation 1
      [65.41, 65.41, 87.31, 77.78]  // Variation 2
    ];
    const bassNotes = variations[Math.floor(Math.random() * variations.length)];
    
    bassNotes.forEach((freq, i) => {
      const t = now + i * 0.8;
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.1, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
      osc.connect(g);
      g.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.5);
    });

    // Hi-hats
    for(let i=0; i<16; i++) {
      if (i % 2 === 0) continue; // Off-beats
      const t = now + i * 0.2;
      playTone(4000 + Math.random()*1000, 'square', 0.05, i * 0.2, 0.02);
    }
  }

  function toggleMute() {
    pGame.muted = !pGame.muted;
    pruebaMuteBtn.textContent = pGame.muted ? '🔇' : '🔊';
  }

  function playIntroMelody() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;
    // Boost volume for mobile
    const volMult = window.innerWidth <= 768 ? 3.0 : 1.0;

    // 1. Acorde Synthwave (C Minor 9) con barrido de filtro
    const freqs = [130.81, 155.56, 196.00, 233.08]; // C3, Eb3, G3, Bb3
    
    freqs.forEach((f, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.value = f;
      // Ligera desafinación para sonido analógico
      osc.detune.value = (Math.random() - 0.5) * 15;

      filter.type = 'lowpass';
      filter.Q.value = 5;
      filter.frequency.setValueAtTime(0, now);
      filter.frequency.linearRampToValueAtTime(2500, now + 0.3); // Efecto "Wah" de apertura
      filter.frequency.exponentialRampToValueAtTime(100, now + 2.5);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12 * volMult, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start(now);
      osc.stop(now + 3.0);
    });

    // 2. Ruidos digitales de "Datos" (Glitch sounds)
    for (let i = 0; i < 6; i++) {
      const t = now + 0.2 + (Math.random() * 1.5);
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(800 + Math.random() * 1200, t);
      g.gain.setValueAtTime(0.04 * volMult, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
      
      osc.connect(g);
      g.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.05);
    }
  }

  function playTitleSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playTone(65.41, 'sawtooth', 1.5, 0, 0.15); // C2 (Bass)
    playTone(523.25, 'sine', 0.1, 0.5, 0.1); // C5
    playTone(659.25, 'sine', 0.1, 0.6, 0.1); // E5
    playTone(783.99, 'sine', 0.1, 0.7, 0.1); // G5
    playTone(1046.50, 'sine', 0.4, 0.8, 0.1); // C6
  }

  function playLifeSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playTone(523.25, 'square', 0.1, 0, 0.1); // C5
    playTone(659.25, 'square', 0.1, 0.1, 0.1); // E5
    playTone(783.99, 'square', 0.1, 0.2, 0.1); // G5
    playTone(1046.50, 'square', 0.4, 0.3, 0.1); // C6
  }

  function playFreezeSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    // Sonido cristalino
    playTone(2000, 'sine', 0.1, 0, 0.1);
    playTone(2500, 'sine', 0.2, 0.05, 0.1);
    
    // Efecto de "enfriamiento" (bajada de tono)
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  }

  function playSuccess() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playTone(523.25, 'sine', 0.1, 0, 0.3); // C5
    playTone(659.25, 'sine', 0.3, 0.1, 0.3); // E5
  }

  function playError() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playTone(150, 'sawtooth', 0.2, 0, 0.3);
    playTone(100, 'sawtooth', 0.2, 0.1, 0.3);
  }

  function playComplete() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playTone(523.25, 'triangle', 0.2, 0, 0.3);
    playTone(659.25, 'triangle', 0.2, 0.2, 0.3);
    playTone(783.99, 'triangle', 0.2, 0.4, 0.3);
    playTone(1046.50, 'triangle', 0.6, 0.6, 0.3);
  }

  function playEpicVictory() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;
    
    // Fanfare
    const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50]; // C, E, G, C, G, C
    const times = [0, 0.15, 0.3, 0.45, 0.6, 0.8];
    const lengths = [0.15, 0.15, 0.15, 0.15, 0.2, 0.8];
    
    notes.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = freq;
        
        gain.gain.setValueAtTime(0.3, now + times[i]);
        gain.gain.exponentialRampToValueAtTime(0.001, now + times[i] + lengths[i]);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + times[i]);
        osc.stop(now + times[i] + lengths[i] + 0.1);
    });
    
    // Bass boom
    const bassOsc = audioCtx.createOscillator();
    const bassGain = audioCtx.createGain();
    bassOsc.type = 'triangle';
    bassOsc.frequency.setValueAtTime(100, now);
    bassOsc.frequency.exponentialRampToValueAtTime(30, now + 1.0);
    bassGain.gain.setValueAtTime(0.5, now);
    bassGain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
    bassOsc.connect(bassGain);
    bassGain.connect(audioCtx.destination);
    bassOsc.start(now);
    bassOsc.stop(now + 1.5);
  }

  function playLingoDriftIntroSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;
    const vol = 0.6;

    // Bass Arpeggio (Outrun style)
    const notes = [36.71, 36.71, 43.65, 49.00, 36.71, 36.71, 43.65, 55.00]; // D1 (Deep Bass)
    notes.forEach((freq, i) => {
        const t = now + i * 0.2;
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = freq;
        
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 200;
        filter.Q.value = 10;

        g.gain.setValueAtTime(vol * 1.5, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        
        osc.connect(filter);
        filter.connect(g);
        g.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + 0.2);
    });
  }

  function playCarSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;
    if (type === 'drift') {
        // Futuristic Engine Rev (Blade Runner style)
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(50, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 1.5); // Rev up
        osc.frequency.linearRampToValueAtTime(100, now + 2.5); // Rev down
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, now);
        filter.frequency.linearRampToValueAtTime(2000, now + 1.0);
        filter.Q.value = 5;

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.3, now + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 2.5);
    } else if (type === 'whoosh') {
        const noise = audioCtx.createBufferSource();
        const bufferSize = audioCtx.sampleRate * 1.5;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        noise.buffer = buffer;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.Q.value = 5;
        filter.frequency.setValueAtTime(200, now);
        filter.frequency.exponentialRampToValueAtTime(2000, now + 0.5);
        filter.frequency.exponentialRampToValueAtTime(200, now + 1.2);

        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.3);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        noise.start(now);
        noise.stop(now + 1.5);
    }
  }

  function playHintSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playTone(880, 'sine', 0.1, 0, 0.2);
    playTone(1108, 'sine', 0.3, 0.1, 0.2);
  }

  function toggleFullScreen() {
    const container = document.getElementById('pruebaContainer');
    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => {
        if (screen.orientation && screen.orientation.lock) {
          screen.orientation.lock('landscape').catch(err => console.log('Orientation lock failed:', err));
        }
      }).catch(err => console.log(err));
    } else {
      document.exitFullscreen();
    }
  }

  // --- Popup Logic ---
  function initPopup() {
    const subscribed = localStorage.getItem('popupSubscribed') === 'true';

    // Mostrar solo si no está suscrito
    if (!subscribed) {
      setTimeout(() => {
        if (popupOverlay) popupOverlay.classList.add('active');
      }, 2000); // Retraso de 2 segundos
    }
  }

  if (closePopupBtn) {
    closePopupBtn.addEventListener('click', () => {
      popupOverlay.classList.remove('active');
    });
  }
  
  if (popupOverlay) {
    popupOverlay.addEventListener('click', (e) => {
      if (e.target === popupOverlay) popupOverlay.classList.remove('active');
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector('button');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Enviando...';

      try {
        const formData = new FormData(newsletterForm);
        const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
        
        if (response.ok) {
          newsletterForm.classList.add('hidden');
          formResult.classList.remove('hidden');
          localStorage.setItem('popupSubscribed', 'true');
          setTimeout(() => popupOverlay.classList.remove('active'), 3000);
        } else throw new Error('Error');
      } catch (err) {
        alert('Error al enviar. Intenta de nuevo.');
        btn.disabled = false;
        btn.textContent = originalText;
      }
    });
  }

  // --- Feedback Popup Logic ---
  if (feedbackBtn) {
    feedbackBtn.addEventListener('click', () => {
      if (feedbackPopup) feedbackPopup.classList.add('active');
    });
  }

  if (closeFeedbackBtn) {
    closeFeedbackBtn.addEventListener('click', () => {
      if (feedbackPopup) feedbackPopup.classList.remove('active');
    });
  }
  
  if (feedbackPopup) {
    feedbackPopup.addEventListener('click', (e) => {
      if (e.target === feedbackPopup) feedbackPopup.classList.remove('active');
    });
  }

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = feedbackForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Enviando...';

      try {
        const formData = new FormData(feedbackForm);
        const response = await fetch(feedbackForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
          feedbackForm.classList.add('hidden');
          if(feedbackResult) feedbackResult.classList.remove('hidden');
          
          setTimeout(() => {
            if (feedbackPopup) feedbackPopup.classList.remove('active');
            // Resetear el formulario para la próxima vez
            setTimeout(() => {
              feedbackForm.reset();
              btn.disabled = false;
              btn.textContent = originalText;
              feedbackForm.classList.remove('hidden');
              if(feedbackResult) feedbackResult.classList.add('hidden');
            }, 500);
          }, 3000);
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        alert('Hubo un error al enviar tu comentario. Por favor, inténtalo de nuevo.');
        btn.disabled = false;
        btn.textContent = originalText;
      }
    });
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
  if (gamesBtn) gamesBtn.addEventListener('click', showGamesMenu);

  // Grade Selection
  gradeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const g = btn.dataset.grade;
      const useEval = (state.language === 'en' && ['1','2','3','4','5','6'].includes(g)) ||
                      (state.language === 'it' && ['1','2','3','4','5','6'].includes(g));

      if (useEval) {
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
  if (backFromGames) backFromGames.addEventListener('click', () => showLangMenu());
  if (backFromPrueba) backFromPrueba.addEventListener('click', () => {
    pGame.active = false;
    stopBGM();
    resetPruebaState();
    showGamesMenu();
  });
  if (backFromLingoDrift) backFromLingoDrift.addEventListener('click', () => {
    // Stop any loops if necessary
    sections.lingoDrift.classList.add('hidden'); // To stop animation loop
    stopLdAudio(); // Stop all LD sounds
    showGamesMenu();
  });
  if (backFromWordSearch) backFromWordSearch.addEventListener('click', () => showGamesMenu());
  if (wordSearchBtn) wordSearchBtn.addEventListener('click', initWordSearch);
  if (newGameBtn) newGameBtn.addEventListener('click', startNewWordSearch);
  if (wsHintBtn) wsHintBtn.addEventListener('click', showWsHint);
  
  if (wsRestartBtn) wsRestartBtn.addEventListener('click', () => {
    hideWsSuccess();
    startNewWordSearch();
  });
  
  if (wsExitBtn) wsExitBtn.addEventListener('click', () => {
    hideWsSuccess();
    showGamesMenu();
  });

  // Game Buttons
  if (pruebaBtn) pruebaBtn.addEventListener('click', initPruebaGame);
  if (lingoDriftBtn) lingoDriftBtn.addEventListener('click', initLingoDrift);
  if (pruebaMuteBtn) pruebaMuteBtn.addEventListener('click', toggleMute);
  if (pruebaFSBtn) pruebaFSBtn.addEventListener('click', toggleFullScreen);
  if (lingoDriftMuteBtn) lingoDriftMuteBtn.addEventListener('click', toggleLdMute);
  if (lingoDriftFSBtn) lingoDriftFSBtn.addEventListener('click', toggleLdFullScreen);

  document.addEventListener('fullscreenchange', () => {
    // Prueba Logic
    const pContainer = document.getElementById('pruebaContainer');
    const pActions = document.querySelector('#pruebaSection .section-actions');
    const pFsBtn = document.getElementById('pruebaFSBtn');
    const pMuteBtn = document.getElementById('pruebaMuteBtn');
    const pBackBtn = document.getElementById('backFromPrueba');

    // Lingo Drift Logic
    const ldContainer = document.getElementById('lingoDriftContainer');
    const ldActions = document.querySelector('#lingoDriftSection .section-actions');
    const ldFsBtn = document.getElementById('lingoDriftFSBtn');
    const ldMuteBtn = document.getElementById('lingoDriftMuteBtn');
    const ldBackBtn = document.getElementById('backFromLingoDrift');

    if (document.fullscreenElement === pContainer) {
      // Setup Prueba FS
      let controls = document.getElementById('fsControlsWrapper');
      if (!controls) {
        controls = document.createElement('div');
        controls.id = 'fsControlsWrapper';
        controls.style.position = 'absolute';
        controls.style.top = '10px';
        controls.style.right = '10px';
        controls.style.display = 'flex';
        controls.style.gap = '10px';
        controls.style.zIndex = '20';
      }
      pContainer.appendChild(controls);
      controls.appendChild(pFsBtn);
      controls.appendChild(pMuteBtn);
      pFsBtn.className = 'fs-round-btn';
      pMuteBtn.className = 'fs-round-btn';

      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(err => console.log('Orientation lock failed:', err));
      }
    } else if (document.fullscreenElement === ldContainer) {
      // Setup Lingo Drift FS
      let controls = document.getElementById('ldFsControlsWrapper');
      if (!controls) {
        controls = document.createElement('div');
        controls.id = 'ldFsControlsWrapper';
        controls.style.position = 'absolute';
        controls.style.top = '10px';
        controls.style.right = '10px';
        controls.style.display = 'flex';
        controls.style.gap = '10px';
        controls.style.zIndex = '20';
      }
      ldContainer.appendChild(controls);
      controls.appendChild(ldFsBtn);
      controls.appendChild(ldMuteBtn);
      ldFsBtn.className = 'fs-round-btn';
      ldMuteBtn.className = 'fs-round-btn';
      
      const ldCanvas = document.getElementById('lingoDriftCanvas');
      if (ldCanvas) {
        if (!ldCanvas.dataset.origW) {
          ldCanvas.dataset.origW = ldCanvas.width;
          ldCanvas.dataset.origH = ldCanvas.height;
        }
        ldCanvas.width = window.innerWidth;
        ldCanvas.height = window.innerHeight;
        if (ldGame.active) {
          ldGame.player.x = ldCanvas.width / 2 - ldGame.player.w / 2;
        }
      }

      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(err => console.log('Orientation lock failed:', err));
      }
    } else {
      // Exit FS - Restore buttons
      if (pActions && pMuteBtn && pBackBtn && pFsBtn && !pActions.contains(pMuteBtn)) {
        pActions.insertBefore(pMuteBtn, pBackBtn);
        pActions.insertBefore(pFsBtn, pMuteBtn);
        pFsBtn.className = 'back-btn';
        pMuteBtn.className = 'back-btn';
      }
      if (ldActions && ldMuteBtn && ldBackBtn && ldFsBtn && !ldActions.contains(ldMuteBtn)) {
        ldActions.insertBefore(ldMuteBtn, ldBackBtn);
        ldActions.insertBefore(ldFsBtn, ldMuteBtn);
        ldFsBtn.className = 'back-btn';
        ldMuteBtn.className = 'back-btn';
      }
      
      const ldCanvas = document.getElementById('lingoDriftCanvas');
      if (ldCanvas && ldCanvas.dataset.origW) {
        ldCanvas.width = parseInt(ldCanvas.dataset.origW);
        ldCanvas.height = parseInt(ldCanvas.dataset.origH);
        if (ldGame.active) {
          ldGame.player.x = ldCanvas.width / 2 - ldGame.player.w / 2;
        }
      }

      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    }
  });

  function toggleLdMute() {
    ldGame.muted = !ldGame.muted;
    if (lingoDriftMuteBtn) lingoDriftMuteBtn.textContent = ldGame.muted ? '🔇' : '🔊';
  }

  function toggleLdFullScreen() {
    const container = document.getElementById('lingoDriftContainer');
    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => {
        if (screen.orientation && screen.orientation.lock) {
          screen.orientation.lock('landscape').catch(err => console.log('Orientation lock failed:', err));
        }
      }).catch(err => console.log(err));
    } else {
      document.exitFullscreen();
    }
  }

  // Evaluation Buttons
  if (eval1Btn) eval1Btn.addEventListener('click', () => {
    state.evaluation = 1;
    showPractice(state.grade);
  });

  if (eval2Btn) eval2Btn.addEventListener('click', () => {
    state.evaluation = 2;
    // Check availability
    const bank = state.language === 'it' ? bankIt : bankEn;
    const content = bank[state.grade];
    if (Array.isArray(content) || !content[2]) {
      alert("Evaluación no disponible aún.");
      return;
    }
    showPractice(state.grade);
  });

  if (eval3Btn) eval3Btn.addEventListener('click', () => {
    state.evaluation = 3;
    const bank = state.language === 'it' ? bankIt : bankEn;
    const content = bank[state.grade];
    if (Array.isArray(content) || !content[3]) { // Check if evaluation 3 exists
      alert("Evaluación no disponible aún.");
      return;
    }
    showPractice(state.grade);
  });

  // Info Button Logic
  const setupTooltip = (btn, tip) => {
    if (btn && tip) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (evalInfoPopup && evalPopupBody) {
          evalPopupBody.innerHTML = tip.innerHTML;
          evalInfoPopup.classList.add('active');
        }
      });
    }
  };
  setupTooltip(eval1Info, eval1Tooltip);
  setupTooltip(eval2Info, eval2Tooltip);
  setupTooltip(eval3Info, eval3Tooltip);

  // Close logic for Eval Info Popup
  if (closeEvalPopupBtn) {
    closeEvalPopupBtn.addEventListener('click', () => {
      evalInfoPopup.classList.remove('active');
    });
  }
  if (evalInfoPopup) {
    evalInfoPopup.addEventListener('click', (e) => {
      if (e.target === evalInfoPopup) evalInfoPopup.classList.remove('active');
    });
  }

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
  initPopup();
});
