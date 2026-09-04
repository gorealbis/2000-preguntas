// BANCO DE PREGUNTAS DEL TEST 21 (Materia técnica de Auxiliar de Enfermería - Bloque 1)
const questions = [
    { id: 1, pregunta: "El baño del niño se hará a diario, en horario regular y con una duración de 5 a 7 minutos, y la temperatura del agua será:", opciones: ["a. 36°C", "b. 37°C", "c. 25°C", "d. 35°C", "e. 22°C"], correcta: 1 },
    { id: 2, pregunta: "La temperatura ambiental mientras se lleva a cabo el baño del niño:", opciones: ["a. 22-23°C", "b. 22-24°C", "c. 22-25°C", "d. 21-23°C", "e. 35°C"], correcta: 1 },
    { id: 3, pregunta: "Respecto a la higiene del cordón umbilical, hay una condición que no es apropiada:", opciones: ["a. El desprendimiento del cordón umbilical tiene lugar a la semana de vida", "b. El cordón se debe mantener limpio y seco en todo momento", "c. El cordón se trata como una herida", "d. Se debe emplear para curar povidona yodada", "e. No se debe sumergir al niño en agua para evitar la infección a nivel de la herida umbilical"], correcta: 3 },
    { id: 4, pregunta: "Está formada por células epiteliales y no posee vasos sanguíneos ni terminaciones nerviosas, esta definición corresponde a:", opciones: ["a. Dermis", "b. Epidermis", "c. Melanita", "d. Estrato corneo", "e. Ninguna es cierta"], correcta: 1 },
    { id: 5, pregunta: "La queratina es una proteína que protege la capa superficial de la piel en las abrasiones y además es:", opciones: ["a. Permeable al agua", "b. Impermeable al agua", "c. Ninguna es cierta", "d. Es la parte mas superficial y externa de la piel", "e. Son ciertas la 2 y 4"], correcta: 4 },
    { id: 6, pregunta: "Desde el punto de vista histológico podemos diferenciar en la epidermis varios estratos, que de la superficie a la parte profunda hay una que no es la apropiada:", opciones: ["a. Estrato corneo", "b. Estrato granuloso", "c. Estrato espinoso", "d. Estrato basal o estrato germinativo", "e. Estrato basal o estrato evolutivo"], correcta: 4 },
    { id: 7, pregunta: "En el estrato basal hay otros tipos de células, que migran hacia la dermis y dan lugar a las:", opciones: ["a. Glándulas sudoríparas", "b. Glándulas sebáceas", "c. Los folículos pilosos", "d. Ninguna es cierta", "e. Son ciertas la 1, 2 y 3"], correcta: 4 },
    { id: 8, pregunta: "La melanina es el pigmento que se forma a partir de:", opciones: ["a. Estrógenos", "b. Prolactina", "c. Cortisol", "d. Tiroxina", "e. Adrenalina"], correcta: 3 },
    { id: 9, pregunta: "Contiene las terminaciones nerviosas para el calor, frío, dolor y presión:", opciones: ["a. Epidermis", "b. Dermis", "c. Glándulas sebáceas", "d. Ninguna es cierta", "e. Todas son ciertas"], correcta: 1 },
    { id: 10, pregunta: "Las glándulas sudoríparas están distribuidas por todas las regiones de la piel excepto:", opciones: ["a. Cara", "b. Tímpano", "c. Oído", "d. Pies", "e. Manos"], correcta: 1 },
    { id: 11, pregunta: "Las glándulas apocrinas están restringidas en:", opciones: ["a. Axilas", "b. La aureola mamaria", "c. El conducto auditivo externo", "d. Los parpados", "e. Todas son ciertas"], correcta: 4 },
    { id: 12, pregunta: "No existen en la palma de las manos ni en la planta de los pies y son muy abundantes en la cara y cuero cabelludo, son:", opciones: ["a. Glándulas sudoríparas", "b. Pelo", "c. Uñas", "d. Glándulas sebáceas", "e. Ninguna es cierta"], correcta: 3 },
    { id: 13, pregunta: "Las glándulas ecrinas desembocan directamente en la piel y se distribuyen por toda la superficie corporal, excepto en:", opciones: ["a. Labios", "b. Glande", "c. La superficie interna del prepucio", "d. Los labios menores", "e. Todas son ciertas"], correcta: 4 },
    { id: 14, pregunta: "Hay un tipo de glándulas que se definen como glándulas andrógeno-dependientes:", opciones: ["a. Glándulas apocrinas", "b. Glándulas ecrinas", "c. Glándulas sebáceas", "d. Glándulas sudoríparas", "e. Ninguna es cierta"], correcta: 2 },
    { id: 15, pregunta: "Las faneras están formadas por:", opciones: ["a. Glándulas sudoríparas", "b. Glándulas sebáceas", "c. Pelo", "d. Uñas", "e. Todas son ciertas"], correcta: 4 }
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
