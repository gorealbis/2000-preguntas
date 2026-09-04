// BANCO DE PREGUNTAS DEL TEST 33 NUEVO (Materia técnica de Auxiliar de Enfermería - Bloque de 20)
const questions = [
    { id: 1, pregunta: "¿Cómo se llama el derrame serosanguinolento que aparece por la vagina días después del parto?", opciones: ["a. Metrorragia", "b. Exudado", "c. Loquios", "d. Edema"], correcta: 2 },
    { id: 2, pregunta: "Es un signo...", opciones: ["a. La angustia", "b. La hipertensión", "c. La fiebre", "d. B y c son correctas"], correcta: 3 },
    { id: 3, pregunta: "La prueba que estudia la función respiratoria se llama...", opciones: ["a. Endoscopia", "b. Broncoscopia", "c. Espirometría", "d. Fibrobroncoscopia"], correcta: 2 },
    { id: 4, pregunta: "¿Cómo se denomina la presencia de aire en la cavidad pleural?", opciones: ["a. Neumotórax", "b. Hemotórax", "c. Pleuritis", "d. Hidrotórax"], correcta: 0 },
    { id: 5, pregunta: "A la inflamación de la lengua la denominamos...", opciones: ["a. Disfagia", "b. Piorrea", "c. Halitosis", "d. Glositis"], correcta: 3 },
    { id: 6, pregunta: "¿Qué es un coprocultivo?", opciones: ["a. Un estudio del exudado vaginal", "b. Un estudio del exudado laríngeo", "c. Un estudio bacteriológico de las heces", "d. Ninguna de las anteriores es correcta"], correcta: 2 },
    { id: 7, pregunta: "Cuando nos referimos a un enfermo con incontinencia es que...", opciones: ["a. Tiene hemorragias digestivas", "b. No controla sus micciones", "c. No tiene apetito", "d. Tiene líquidos en la cavidad pleural"], correcta: 1 },
    { id: 8, pregunta: "La disfagia...", opciones: ["a. Es una acumulación de gases en el intestino", "b. Aparece en la diabetes, asociada con polifagia", "c. Se refiere a enfermedad del aparato digestivo", "d. Es un síntoma frecuente en alteraciones patológicas del esófago"], correcta: 3 },
    { id: 9, pregunta: "¿En qué consiste la osteomalacia?", opciones: ["a. En un aumento de la deformación del hueso", "b. En una disminución proteica del hueso", "c. Es una descalcificación que conlleva un reblandecimiento de los huesos", "d. En una disminución de la destrucción ósea"], correcta: 2 },
    { id: 10, pregunta: "La necesidad de orinar durante la noche, se denomina...", opciones: ["a. Polaquiuria", "b. Nicturia", "c. Tenesmo vesical", "d. Disuria"], correcta: 1 },
    { id: 11, pregunta: "¿Qué mide el histerómetro?", opciones: ["a. La vagina", "b. El útero", "c. El pene", "d. La cavidad pélvica"], correcta: 1 },
    { id: 12, pregunta: "Proteinuria es...", opciones: ["a. Presencia de proteínas en la sangre", "b. Porcentaje de proteínas por milímetro cúbico de sangre", "c. Presencia de proteínas en los alimentos", "d. Presencia de proteínas en la orina"], correcta: 3 },
    { id: 13, pregunta: "¿Cómo se llama a la alteración consistente en la dilatación permanente de los alvéolos pulmonares?", opciones: ["a. Enfisema", "b. Neumotórax", "c. Atelectasia", "d. Bronquiectasia"], correcta: 0 },
    { id: 14, pregunta: "¿Qué son las petequias?", opciones: ["a. Bacterias patógenas de la piel", "b. Un tipo especial de anticuerpos", "c. Hemorragias de tipo puntiforme", "d. Una pequeñas proteínas"], correcta: 2 },
    { id: 15, pregunta: "Hematuria es:", opciones: ["a. Presencia de sangre en la orina", "b. Presencia de proteínas en la orina", "c. Escozor y dolor al orinar", "d. Presencia de azúcar en la orina"], correcta: 0 },
    { id: 16, pregunta: "Anorexia es:", opciones: ["a. Aumento de oxígeno en los tejidos", "b. Ausencia de apetito", "c. Disminución de oxígeno en los tejidos", "d. Ninguna de las anteriores es correcta"], correcta: 1 },
    { id: 17, pregunta: "¿Cómo se denomina la disminución de la frecuencia respiratoria?", opciones: ["a. Ortopnea", "b. Taquipnea", "c. Bradipnea", "d. Disnea"], correcta: 2 },
    { id: 18, pregunta: "¿Qué utilizaremos para aliviar la flatulencia?", opciones: ["a. Sedante", "b. Emoliente", "c. Espectorante", "d. Carminativo"], correcta: 3 },
    { id: 19, pregunta: "La coloración azul de piel y mucosa se llama...", opciones: ["a. Cianosis", "b. Anoxia", "c. Albuminosis", "d. Itericia"], correcta: 0 },
    { id: 20, pregunta: "¿Qué significa taquipnea?", opciones: ["a. Frecuencia cardiaca superior a lo normal", "b. Frecuencia respiratoria inferior a lo normal", "c. Frecuencia respiratoria superior a lo normal", "d. Frecuencia cardiaca inferior a lo normal"], correcta: 2 }
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
