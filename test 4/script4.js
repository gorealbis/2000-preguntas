// BANCO DE PREGUNTAS DEL TEST 4 (Preguntas 1 a 16)
const questions = [
    { id: 1, pregunta: "El secreto profesional afecta:", opciones: ["a. Al personal médico y de enfermería", "b. A todo el personal que actúa en el ámbito de la asistencia sanitaria", "c. Sólo al médico", "d. A los médicos especialistas"], correcta: 1 },
    { id: 2, pregunta: "Las afecciones broncopulmonares son debidas a polvos de:", opciones: ["a. Metales duros", "b. Escorias de Thomas", "c. Aluminio", "d. Todas las alternativas anteriores son correctas"], correcta: 3 },
    { id: 3, pregunta: "Los agentes biológicos se clasifican por la normativa vigente en:", opciones: ["a. 7 grupos", "b. 4 grupos", "c. 5 grupos", "d. Todas las anteriores son falsas"], correcta: 1 },
    { id: 4, pregunta: "Señale la alternativa falsa:", opciones: ["a. Los hongos son formas complejas de vida que presentan una estructura vegetal", "b. La toxoplasmosis es una enfermedad producida por parásitos", "c. El pie de atleta es una enfermedad producida por bacterias", "d. El asma es una enfermedad producida por hongo"], correcta: 2 },
    { id: 5, pregunta: "Señale la alternativa correcta:", opciones: ["a. El asma bronquial producido por sustancias de origen animal está clasificado como una enfermedad profesional de carácter parasitario", "b. La úlcera de la córnea producida por gases está clasificada como una enfermedad profesional provocada por la inhalación de sustancias", "c. El cáncer de riñón producido por anilinas está clasificado como una enfermedad profesional de carácter infeccioso", "d. El cáncer de la vejiga por exposición al benceno está clasificado como una enfermedad de carácter sistemático"], correcta: 1 },
    { id: 6, pregunta: "Se constituirá un comité de seguridad y salud en todas las empresas o centros de trabajo que cuenten:", opciones: ["a. Con menos de 50 trabajadores", "b. Con 50 trabajadores como mínimo", "c. Únicamente con más de 50 trabajadores", "d. Solamente con más de 150 trabajadores"], correcta: 1 },
    { id: 7, pregunta: "Señale cuál de las siguientes faltas se considera grave en relación con las actuaciones del personal estatutario de las instituciones sanitarias:", opciones: ["a. La aceptación de cualquier tipo de contraprestación por los servicios prestados a los usuarios de los servicios de salud", "b. La exigencia de cualquier tipo de compensación por los servicios prestados a los usuarios de los servicios de salud", "c. La incorrección con los superiores, compañeros, subordinados o usuarios", "d. La grave agresión a cualquier persona con la que se relacionen en el ejercicio de sus funciones"], correcta: 2 },
    { id: 8, pregunta: "El consejo regional de salud es un órgano colegiado de carácter...", opciones: ["a. ... ejecutivo", "b. ... directivo", "c. ... consultivo", "d. ... gubernativo"], correcta: 2 },
    { id: 9, pregunta: "El seguimiento de la calidad del sistema sanitario se realizará por:", opciones: ["a. El Consejo Interterritorial y la Inspección", "b. El Consejo Interterritorial", "c. La Inspección", "d. El Consejo Interterritorial y la Alta Inspección"], correcta: 3 },
    { id: 10, pregunta: "La creación del instituto de información sanitaria se llevará a cabo de acuerdo con lo previsto en el:", opciones: ["a. Art.67.1 de la Ley 6/1997, de 14 de abril", "b. Art.67.3 de la Ley 6/1997, de 14 de abril", "c. Art.67.1 de la Ley 1/1997, de 14 de abril", "d. Art.67.3 de la Ley 6/1997, de 14 de abril"], correcta: 0 },
    { id: 11, pregunta: "La gerencia de emergencias sanitarias se estructura en:", opciones: ["a. Dirección Asistencial y Dirección de Administración", "b. Dirección Sanitaria y Dirección de Gestión", "c. Dirección Asistencial y Dirección de Gestión", "d. Todas las respuestas anteriores son falsas"], correcta: 2 },
    { id: 12, pregunta: "Los órganos de coordinación y gestión de la comunidad autónoma en materia de transplantes a los que se refiere el decreto 51/1992, de 26 de marzo, quedan adscritos a:", opciones: ["a. La Dirección Técnica de Atención Especializada", "b. La Dirección Técnica de Coordinación Asistencial e Inspección", "c. La Dirección Técnica de Sistemas de Información", "d. Todas las anteriores son falsas"], correcta: 1 },
    { id: 13, pregunta: "El servicio de emergencias se encuentra adscrito a:", opciones: ["a. La Dirección Técnica de Sistemas de Información", "b. La Dirección Técnica de Atención Primaria", "c. La Dirección Técnica de Atención Especializada", "d. La Dirección Técnica de Coordinación Asistencial e Inspección"], correcta: 2 },
    { id: 14, pregunta: "La eutanasia pasiva se caracteriza por una conducta:", opciones: ["a. Genuina", "b. Directa", "c. Omisiva", "d. Todas las anteriores son falsas"], correcta: 2 },
    { id: 15, pregunta: "Una dieta hipolipídica está indicada en:", opciones: ["a. Una insuficiencia pancreática", "b. Una insuficiencia renal aguda", "c. Una anorexia nerviosa", "d. Una insuficiencia respiratoria"], correcta: 1 },
    { id: 16, pregunta: "En la hipopotasecemia la concentración de potasio en plasma es:", opciones: ["a. < de 3,8 y 5.mEq", "b. > de 10 mEq", "c. > de 15 mEq", "d. > de 6 mE"], correcta: 0 }
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
