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
    {text: 'We ___ friends.', answer: 'are', options: ['is','are','am']},
    {text: 'He ___ to school.', answer: 'goes', options: ['go','goes','going']},
    {text: 'She ___ a letter.', answer: 'writes', options: ['write','writes','writing']},
    {text: 'I ___ an orange.', answer: 'eat', options: ['eat','eats','ate']},
    {text: 'They ___ books.', answer: 'have', options: ['has','have','had']},
    {text: 'The dog ___ loud.', answer: 'barks', options: ['bark','barks','barked']},
    {text: 'We ___ in class.', answer: 'sit', options: ['sit','sits','sat']},
    {text: 'You ___ my friend.', answer: 'are', options: ['is','are','am']},
    {text: 'I ___ a pencil.', answer: 'have', options: ['have','has','had']},
    {text: 'She ___ the ball.', answer: 'kicks', options: ['kick','kicks','kicked']}
  ],
  4: [
    {text: 'I ___ want an ice cream.', answer: 'really', options: ['never','really','sometimes']},
    {text: 'They ___ playing now.', answer: 'are', options: ['is','are','am']},
    {text: 'She ___ a new book.', answer: 'has', options: ['have','has','had']},
    {text: 'We ___ to the park.', answer: 'went', options: ['go','went','gone']},
    {text: 'He ___ the guitar.', answer: 'plays', options: ['play','plays','playing']},
    {text: 'The cake is ___', answer: 'delicious', options: ['delicious','bitter','cold']},
    {text: 'Please ___ your hand up.', answer: 'raise', options: ['raise','lower','hide']},
    {text: 'She is ___ than me.', answer: 'taller', options: ['taller','shorter','smaller']},
    {text: 'They ___ breakfast at eight.', answer: 'have', options: ['has','have','had']},
    {text: 'We ___ homework every day.', answer: 'do', options: ['did','do','does']}
  ],
  5: [
    {text: 'I ___ like chocolate.', answer: 'really', options: ['not','really','never']},
    {text: 'She ___ traveling yesterday.', answer: 'went', options: ['go','gone','went']},
    {text: 'They ___ been to London.', answer: 'have', options: ['has','have','had']},
    {text: 'He ___ the answer now.', answer: 'knows', options: ['know','knows','knew']},
    {text: 'We ___ studying for tests.', answer: 'are', options: ['is','are','am']},
    {text: 'The teacher ___ the lesson.', answer: 'explains', options: ['explain','explains','explained']},
    {text: 'Please ___ quietly.', answer: 'speak', options: ['speak','shout','run']},
    {text: 'This story is very ___', answer: 'interesting', options: ['boring','interesting','short']},
    {text: 'She ___ the piano well.', answer: 'plays', options: ['play','plays','played']},
    {text: 'They will ___ tomorrow.', answer: 'arrive', options: ['arrive','left','go']}
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
    const isEval1 = state.language === 'en' && state.grade === 6;
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
    
    const isEval1 = state.language === 'en' && state.grade === 6;

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
    if (state.language === 'en' && state.grade === 6) {
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
      if (state.language === 'en' && btn.dataset.grade === '6') {
        showEvaluations();
      } else {
        showPractice(btn.dataset.grade);
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
  if (eval1Btn) eval1Btn.addEventListener('click', () => showPractice('6'));

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
