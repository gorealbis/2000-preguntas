// BANCO DE PREGUNTAS DEL TEST 15 (Preguntas 1 a 15: Célula, hormonas, drenajes, nutrición e inmunidad)
const questions = [
    { id: 1, pregunta: "Los leucocitos más abundantes de la sangre son:", opciones: ["a. Los linfocitos", "b. Los monocitos", "c. Los neutrófilos", "d. Los eosinófilos"], correcta: 2 },
    { id: 2, pregunta: "Definimos TAQUIPNEA como:", opciones: ["a. Aceleración del pulso", "b. Aceleración del ritmo cardiaco", "c. Aceleración de la respiración", "d. Deceleración de la PVC"], correcta: 2 },
    { id: 3, pregunta: "La vena donde se toma la tensión es:", opciones: ["a. Temporal", "b. Radial", "c. Humeral", "d. Ninguna es correcta"], correcta: 3 },
    { id: 4, pregunta: "Señale la sonda que no es gástrica:", opciones: ["a. Levin", "b. Segstake", "c. Nutrisoft", "d. Foley"], correcta: 3 },
    { id: 5, pregunta: "Para introducir a un enfermo un tubo endotraqueal debemos colocarle:", opciones: ["a. Con hiperextensión de la cabeza", "b. Con la cabeza hacia la izquierda", "c. Con la cabeza hacia la derecha", "d. Con la cabeza recta"], correcta: 0 },
    { id: 6, pregunta: "Respecto a la célula, los orgánulos encargados de la síntesis proteica son:", opciones: ["a. Lisosomas", "b. Mitocondrias", "c. Ribosomas", "d. Ap. Golgi"], correcta: 2 },
    { id: 7, pregunta: "El glucagón es una hormona producida por:", opciones: ["a. Tiroides", "b. Páncreas", "c. Adenohipófisis", "d. Cápsulas suprarrenales"], correcta: 1 },
    { id: 8, pregunta: "El 'Drenaje Redón' actúa por:", opciones: ["a. Gravedad", "b. Presión positiva", "c. Difusión", "d. Aspiración"], correcta: 3 },
    { id: 9, pregunta: "Los lípidos ingeridos con la dieta aportan al organismo por gramo:", opciones: ["a. 4 Calorías", "b. 7 Calorías", "c. 9 Calorías", "d. Igual cantidad de Calorías que las proteínas"], correcta: 2 },
    { id: 10, pregunta: "Un enfermo con problemas respiratorios y cardíacos deberá colocarse en:", opciones: ["a. Posición de Sims izquierda", "b. Posición de Roser", "c. Posición genupectoral", "d. Posición de Fowler elevada"], correcta: 3 },
    { id: 11, pregunta: "Un vómito con sangre procedente del aparato digestivo se denomina:", opciones: ["a. Hemoptisis", "b. Hematemesis", "c. Vómito en posos de café", "d. Melenas"], correcta: 1 },
    { id: 12, pregunta: "Cuál de los siguientes no es un drenaje simple:", opciones: ["a. Drenaje de mecha", "b. Drenaje Penrose", "c. Drenaje de Tejadillo", "d. Redón"], correcta: 3 },
    { id: 13, pregunta: "El método de esterilización preferente para esterilizar material de goma como guantes, sondas, etc. es:", opciones: ["a. Autoclave", "b. Glutaraldehido", "c. Formol", "d. Óxido de etileno"], correcta: 3 },
    { id: 14, pregunta: "El fármaco constituido por sustancias sin acción farmacológica se denomina:", opciones: ["a. Excipiente", "b. Placebo", "c. Inofensivo", "d. Principio activo"], correcta: 1 },
    { id: 15, pregunta: "Cuando se administra una vacuna se produce inmunidad:", opciones: ["a. Artificial pasiva", "b. Natural activa", "c. Artificial activa", "d. Natural pasiva"], correcta: 2 },
    { id: 16, pregunta: "El aparato que se utiliza para medir la capacidad pulmonar se llama:", opciones: ["a. Espirómetro", "b. Broncoscopio", "c. Laringoscopio", "d. Manómetro"], correcta: 0 },
    { id: 17, pregunta: "La \"Pelagra\" es una enfermedad por déficit de vitamina:", opciones: ["a. B1 o Tiamina", "b. Ácido Fólico", "c. B3 o Niacina", "d. A"], correcta: 2 },
    { id: 18, pregunta: "Las \"Cataratas\" es una enfermedad producida por:", opciones: ["a. Infecciones del iris", "b. Alteraciones de córnea", "c. Alteración del cristalino", "d. Alteración de la retina"], correcta: 2 },
    { id: 19, pregunta: "Una tensión arterial de 160/95 mm de Hg, se denomina:", opciones: ["a. Hipertensión", "b. Normotensión", "c. Hipotensión", "d. Taquicardia"], correcta: 0 },
    { id: 20, pregunta: "Cuando se aisla a un enfermo \"Inmunodeprimido\", estamos haciendo:", opciones: ["a. Aislamiento entérico", "b. Aislamiento de contacto", "c. Aislamiento respiratorio", "d. Aislamiento protector o inverso"], correcta: 3 },
    { id: 21, pregunta: "En caso de una \"enfermedad biliar\" se recomienda dieta:", opciones: ["a. Bando", "b. Hiposódica", "c. Hipersódica", "d. Pobre en grasas"], correcta: 3 },
    { id: 22, pregunta: "La \"Instilación vesical\" consiste en:", opciones: ["a. Drenaje continuo de la vejiga", "b. Lavado continuo de la vejiga", "c. Técnica diagnóstica del aparato urinario", "d. Introducción de una solución medicamentosa en la vejiga"], correcta: 3 },
    { id: 23, pregunta: "Es material de \"Hemostasia\":", opciones: ["a. Pinzas de Pean y Kocher", "b. Separadores autorretentivos", "c. Pinzas de Pean y Depresor Lingual", "d. Pinzas de Duval y Michael"], correcta: 0 },
    { id: 24, pregunta: "La trasmisión de la Hepatitis B se realiza principalmente por vía:", opciones: ["a. Digestiva", "b. Parenteral", "c. Tópica", "d. Ótica"], correcta: 1 },
    { id: 25, pregunta: "Cuando hablamos de \"Purgar\" un suero, nos referimos a:", opciones: ["a. Perfundir suero al paciente", "b. Abrir la cámara de aire del sistema", "c. Abrir el tapón de la botella para eliminar el vacio", "d. Quitar el aire al sistema"], correcta: 3 },
    { id: 26, pregunta: "Se conoce como \"Criptorquidia\" a:", opciones: ["a. Ausencia de uno o dos testículos en las bolsas escrotales", "b. Inflamación testicular", "c. Inflamación de la próstata", "d. Repliegue excesivo del prepucio"], correcta: 0 },
    { id: 27, pregunta: "La central energética celular es:", opciones: ["a. Retículo endoplasmático", "b. Lisosomas", "c. Ribosomas", "d. Mitocondrias"], correcta: 3 },
    { id: 28, pregunta: "La primera deposición del bebé se denomina:", opciones: ["a. Meconio", "b. Lanugo", "c. Muget", "d. Vernix"], correcta: 0 },
    { id: 29, pregunta: "La \"Pediculosis\" son infestaciones producidas por:", opciones: ["a. Hongos", "b. Protozoos", "c. Bacterias", "d. Parásitos"], correcta: 3 },
    { id: 30, pregunta: "Respecto al Sistema Nervioso, indique la respuesta correcta:", opciones: ["a. La corteza cerebral está constituida por sustancia gris", "b. Las fibras nerviosas se unen formando los nervios", "c. En el bulbo raquídeo se encuentra el centro reflejo respiratorio", "d. Son correctas todas las respuestas"], correcta: 3 },
    { id: 31, pregunta: "¿Para qué se utiliza una \"Férula\"?:", opciones: ["a. Para aspirar exudados", "b. Para inmovilizar", "c. Para realizar cambios posturales", "d. Para realizar fisioterapia respiratoria"], correcta: 1 },
    { id: 32, pregunta: "Son fármacos de acción local:", opciones: ["a. Jarabes", "b. Pomadas", "c. Colirios", "d. Son correctas b y c"], correcta: 3 },
    { id: 33, pregunta: "A través de la válvula mitral la sangre pasa en condiciones normales:", opciones: ["a. De la aurícula izquierda a la aurícula derecha", "b. De la aurícula izquierda al ventrículo izquierdo", "c. De la aurícula derecha al ventrículo derecho", "d. Del ventrículo derecho a la aurícula derecha"], correcta: 1 },
    { id: 34, pregunta: "En la sangre:", opciones: ["a. A la parte sólida se le denomina plasma", "b. Los glóbulos blancos se denominan también hematíes", "c. Los hematíes intervienen en la coagulación sanguínea", "d. Los glóbulos rojos transportan el oxígeno en la hemoglobina"], correcta: 3 },
    { id: 35, pregunta: "Con respecto al tubo digestivo:", opciones: ["a. La ingestión se produce en el esófago", "b. La absorción se produce fundamentalmente en el estómago", "c. La digestión se produce en el colon", "d. Todas son incorrectas"], correcta: 3 },
    { id: 36, pregunta: "La orina está formada en su mayor parte por:", opciones: ["a. Urea", "b. Ácido Úrico", "c. Amoniaco", "d. Agua"], correcta: 3 }


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
