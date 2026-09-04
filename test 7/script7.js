// BANCO DE PREGUNTAS DEL TEST 7 (Preguntas 1 a 20: Transmisiones, desinfección y microbiología)
const questions = [
    { id: 1, pregunta: "¿Cómo se llama la transmisión de enfermedades infecciosas a través de organismos vivos?", opciones: ["a. transmisión por fómites", "b. transmisión directa", "c. transmisión por vectores", "d. ninguna de las anteriores es correcta"], correcta: 2 },
    { id: 2, pregunta: "¿Cómo se llama la presencia de parásitos en el organismo humano?", opciones: ["a. infestación", "b. enfermedad infecciosa", "c. infección", "d. ninguna de las anteriores es correcta"], correcta: 0 },
    { id: 3, pregunta: "La cadena epidemiológica de las enfermedades infecciosas está compuesta por:", opciones: ["a. virus, bacterias y hongos", "b. fuente de infección y reservorio", "c. virus, bacterias y hombres portadores", "d. fuente de infección, el huésped y el mecanismo de transmisión"], correcta: 3 },
    { id: 4, pregunta: "¿Qué son los fómites?", opciones: ["a. unos virus bastante letales", "b. objetos contaminados por microorganismos que transmiten infecciones", "c. insectos que transmiten enfermedades infecciosas", "d. un tipo de hongos"], correcta: 1 },
    { id: 5, pregunta: "Las fuentes de infección son:", opciones: ["a. el hombre enfermo", "b. el animal enfermo", "c. el hombre portador", "d. todas las anteriores son correctas"], correcta: 3 },
    { id: 6, pregunta: "¿Cómo se denomina el periodo de síntomas inespecíficos en una enfermedad?", opciones: ["a. periodo de prodromos", "b. periodo de estado ó clínico", "c. periodo de incubación", "d. periodo de convalecencia"], correcta: 0 },
    { id: 7, pregunta: "¿Cómo se clasifican las enfermedades según su evolución?", opciones: ["a. agudas y locales", "b. sistémicas y crónicas", "c. agudas y crónicas", "d. locales y generales"], correcta: 2 },
    { id: 8, pregunta: "Cuando hablamos de métodos psíquicos como desinfectantes... ¿a qué nos referimos?", opciones: ["a. mosquiteras", "b. repelentes o ahuyentadores", "c. mayas", "d. todas son correctas"], correcta: 1 },
    { id: 9, pregunta: "Una micosis está producida por:", opciones: ["a. virus", "b. parásitos", "c. hongos", "d. bacterias"], correcta: 2 },
    { id: 10, pregunta: "¿Cuál de los siguientes es un método de desratización pasiva?", opciones: ["a. venenos", "b. anticoagulantes", "c. trampas", "d. telas metálicas"], correcta: 3 },
    { id: 11, pregunta: "¿Por qué vía se contagia la tuberculosis?", opciones: ["a. contacto sexual", "b. aérea", "c. fómites", "d. agua y alimentos"], correcta: 1 },
    { id: 12, pregunta: "La pediculosis es producida por:", opciones: ["a. piojos", "b. virus", "c. bacterias", "d. hongos"], correcta: 0 },
    { id: 13, pregunta: "¿Qué se entiende por prevención secundaria?", opciones: ["a. evitar que aparezca la enfermedad", "b. reintegrar al paciente a la sociedad", "c. el diagnóstico precoz", "d. evitar las complicaciones"], correcta: 2 },
    { id: 14, pregunta: "Son enfermedades de transmisión sexual:", opciones: ["a. gonorrea", "b. sífilis", "c. v.i.h", "d. todas son correctas"], correcta: 3 },
    { id: 15, pregunta: "Enfermedad orgánica es la que afecta a:", opciones: ["a. un órgano de un sistema", "b. todo el organismo", "c. el sistema inmunológico", "d. el órgano sexual"], correcta: 0 },
    { id: 16, pregunta: "Con respecto a la morfología de las bacterias, es falso que pueden ser:", opciones: ["a. virus", "b. bacilos", "c. cocos", "d. espirilos"], correcta: 0 },
    { id: 17, pregunta: "¿A través de qué se realiza el contagio directo en una enfermedad infecciosa?", opciones: ["a. gotas de pflugge", "b. agua o excrementos", "c. relaciones sexuales", "d. objetos contaminados"], correcta: 0 },
    { id: 18, pregunta: "¿A qué denominamos reservorio?", opciones: ["a. a un agente infeccioso", "b. a una persona portadora, pero sin síntomas", "c. a una persona enferma", "d. al lugar en que los gérmenes patógenos viven y se multiplican"], correcta: 3 },
    { id: 19, pregunta: "¿Cuál es el principal síntoma de las pediculosis?", opciones: ["a. escozor", "b. inflamación", "c. dolor", "d. prurito"], correcta: 3 },
    { id: 20, pregunta: "Indicar lo incorrecto respecto a las zoonosis:", opciones: ["a. algunas pueden ser consideradas enfermedades profesionales", "b. son infecciones transmitidas del animal al hombre", "c. la brucelosis es un ejemplo típico de zoonosis", "d. se pueden transmitir entre personas"], correcta: 3 }
];

// --- MOTOR DE LOGICA DEL SIMULADOR ---
let currentIndex = 0;
let score = 0;

function loadQuiz() {
    currentIndex = 0;
    score = 0;
    document.getElementById('score').innerText = score;
    showQuestion();
}

function showQuestion() {
    if (questions.length === 0) return;
    const q = questions[currentIndex];
    
    document.getElementById('question-number').innerText = "Pregunta " + (currentIndex + 1) + " de " + questions.length;
    document.getElementById('question-text').innerText = q.id + ". " + q.pregunta;
    document.getElementById('next-btn').style.display = 'none';
    
    const progressPercent = (currentIndex / questions.length) * 100;
    document.getElementById('progress').style.width = progressPercent + "%";

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.opciones.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerText = option;
        button.onclick = function() { checkAnswer(index, q.correcta, button); };
        container.appendChild(button);
    });
}

function checkAnswer(selectedIndex, correctIndex, selectedButton) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        selectedButton.classList.add('correct');
        score++;
        document.getElementById('score').innerText = score;
    } else {
        selectedButton.classList.add('incorrect');
        buttons[correctIndex].classList.add('correct');
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById('progress').style.width = '100%';
        document.getElementById('quiz-body-wrapper').innerHTML = `
            <div style="text-align: center; padding: 20px 0;">
                <h2 style="font-size: 26px; color: #1e293b; margin-bottom: 10px;">¡Test Completado!</h2>
                <p style="font-size: 18px; color: #64748b;">Has respondido este bloque de preguntas.</p>
                <div style="font-size: 48px; font-weight: bold; color: #10b981; margin: 20px 0;">` + score + ` / ` + questions.length + `</div>
                <p style="font-size: 16px; color: #475569;">Porcentaje de acierto: <strong>` + ((score / questions.length) * 100).toFixed(1) + `%</strong></p>
            </div>
        `;
        document.getElementById('next-btn').style.display = 'none';
    }
}

window.onload = loadQuiz;
