// BANCO DE PREGUNTAS DEL TEST 3 (Preguntas 1 a 20)
const questions = [
    { id: 1, pregunta: "Se define la salud como:", opciones: ["a. Ausencia de alteraciones fisiológicas", "b. Bienestar físico, psíquico y social", "c. Ausencia de enfermedad", "d. Integración de la persona en la sociedad"], correcta: 1 },
    { id: 2, pregunta: "El conjunto de medidas que permiten una buena recuperación después de un infarto agudo de miocardio, son medidas de prevención:", opciones: ["a. Primaria", "b. Secundaria", "c. Terciaria", "d. Cuaternaria"], correcta: 3 },
    { id: 3, pregunta: "Según la composición de las vacunas, éstas pueden ser:", opciones: ["a. Monovalentes como la del Sarampión", "b. Combinadas como la de la D.T.P", "c. Polivalentes como la de la Gripe", "d. Todas las anteriores son correctas"], correcta: 3 },
    { id: 4, pregunta: "¿Cuál es la causa más frecuente de mortalidad en edad escolar?", opciones: ["a. Accidentes", "b. Malformaciones congénitas", "c. Tumores malignos", "d. Infecciones generalizadas"], correcta: 0 },
    { id: 5, pregunta: "¿Qué entendemos por prevención terciaria?", opciones: ["a. Evitar que aparezca la enfermedad", "b. Diagnóstico Precoz", "c. Evitar las complicaciones", "d. Curar y reinsertar al paciente"], correcta: 2 },
    { id: 6, pregunta: "¿Cuál es en la actualidad la causa fundamental de mortalidad materna?", opciones: ["a. Infecciones post-parto", "b. Hemorragias", "c. Abortos", "d. Hipertensión Arterial"], correcta: 1 },
    { id: 7, pregunta: "La sustancia cancerígena por excelencia en el humo del tabaco es:", opciones: ["a. Nicotina", "b. Monóxido de Carbono", "c. Óxido Nitroso", "d. Alquitrán"], correcta: 3 },
    { id: 8, pregunta: "Indicar lo correcto respecto a la mortalidad infantil:", opciones: ["a. España tiene una tasa baja y los países subdesarrollados tienen una tasa alta", "b. Se refiere a los niños que naciendo vivos, fallecen antes del primer año de vida", "c. En esta época, la principal causa de muerte son las anomalías congénitas", "d. Todas las anteriores son correctas"], correcta: 3 },
    { id: 9, pregunta: "¿En relación a qué procesos está relacionado el consumo del tabaco?", opciones: ["a. Cáncer de Pulmón", "b. Cáncer de Esófago", "c. Cáncer de Laringe", "d. Todos los anteriores"], correcta: 3 },
    { id: 10, pregunta: "¿Cuál es la causa más frecuente de obesidad?", opciones: ["a. De origen gástrico", "b. Por trastornos endocrinológicos", "c. Por sobrealimentación", "d. De origen desconocido"], correcta: 2 },
    { id: 11, pregunta: "¿Qué necesita el tiroides para producir hormona tiroidea?", opciones: ["a. Calcio", "b. Yodo", "c. Magnesio", "d. Hierro"], correcta: 1 },
    { id: 12, pregunta: "La primera causa de muerte en la adolescencia son:", opciones: ["a. Los procesos diarreicos", "b. Los accidentes", "c. Los procesos infecciosos", "d. Los tumores malignos"], correcta: 1 },
    { id: 13, pregunta: "¿Cómo es la inmunidad que se obtiene al pasar las paperas?", opciones: ["a. Natural y Activa", "b. Artificial y Pasiva", "c. Natural y Pasiva", "d. Artificial y Activa"], correcta: 0 },
    { id: 14, pregunta: "¿Por qué vía es administrada la vacuna de la Poliomielitis?", opciones: ["a. Vía Parenteral", "b. Vía Oral", "c. Vía Intramuscular", "d. Vía Intradérmica"], correcta: 1 },
    { id: 15, pregunta: "La educación para la salud es una técnica de:", opciones: ["a. Prevención Primaria", "b. Prevención Secundaria", "c. Prevención Terciaria", "d. Prevención Cuaternaria"], correcta: 0 },
    { id: 16, pregunta: "La denominada vacuna 'triple vírica' es para:", opciones: ["a. Tétanos, Difteria, Tosferina", "b. Sarampión, Rubeola, Parotiditis", "c. Difteria, Tétanos, Parotiditis", "d. Ninguna de las anteriores es correcta"], correcta: 1 },
    { id: 17, pregunta: "¿Dónde se producen los glucocorticoides?", opciones: ["a. Hipófisis", "b. Adenohipófisis", "c. Médula Suprarrenal", "d. Cápsula Suprarrenal"], correcta: 3 },
    { id: 18, pregunta: "¿Qué situaciones de las siguientes predisponen a padecer trombosis venosas?", opciones: ["a. Obesidad", "b. Puerperio", "c. Postoperatorio", "d. Todas las anteriores"], correcta: 3 },
    { id: 19, pregunta: "¿Frente a qué inmuniza al niño la vacuna D.T.P.?", opciones: ["a. Difteria, Parotiditis, Tétanos", "b. Poliomielitis, Tétanos, Tosferina", "c. Sarampión, Parotiditis, Rubeola", "d. Difteria, Tétanos, Tosferina"], correcta: 3 },
    { id: 20, pregunta: "¿Cuál es la primera causa de muerte en la época preescolar?", opciones: ["a. Las enfermedades infectiousas", "b. Las enfermedades respiratorias", "c. Los procesos digestivos", "d. Los envenenamientos y accidentes"], correcta: 3 }
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
