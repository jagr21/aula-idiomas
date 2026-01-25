// --- Data Banks (Global) ---
const bankIt = {
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
  3: [
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
  4: [
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
  5: [
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
  6: [
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
  ]
};

const bankEn = {
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
  
  // Popup Elements
  const popupOverlay = document.getElementById('newsletterPopup');
  const closePopupBtn = document.getElementById('closePopupBtn');
  const newsletterForm = document.getElementById('newsletterForm');
  const formResult = document.getElementById('formResult');

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
      const utterance = new SpeechSynthesisUtterance(text);
      
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
  initPopup();
});
