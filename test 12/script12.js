// BANCO DE PREGUNTAS DEL TEST 12 (Preguntas 1 a 20: Reanimación, farmacia, drogas, escalas y desinfección)
const questions = [
    { id: 1, pregunta: "En la posición de Fowler alta, la cabecera de la cama está elevada respecto a los pies:", opciones: ["a. 45°", "b. 50°", "c. 60°", "d. 90°"], correcta: 3 },
    { id: 2, pregunta: "El ritmo de insuflaciones en la respiración artificial aplicada a un niño será:", opciones: ["a. 12 insuflaciones por minuto", "b. 1 insuflación cada 2 segundos", "c. 30 insuflaciones por minuto", "d. 1 insuflación cada 3 segundos"], correcta: 3 },
    { id: 3, pregunta: "Respecto a las áreas del servicio de farmacia, indica la respuesta incorrecta:", opciones: ["a. La dosificación de medicamentos citostáticos se realiza en zona estéril con cabinas de flujo laminar horizontal", "b. La preparación de dosis especiales de medicamentos se realiza en el área de farmacotecnia", "c. La nutrición parenteral se prepara en una zona estéril con cabina de flujo laminar horizontal", "d. Los medicamentos termolabiles se conservan en cámaras frigoríficas y congeladores"], correcta: 0 },
    { id: 4, pregunta: "Clasificación general de las drogas. Señale cuál de estas sustancias actúa como estimulante de la actividad del sistema nervioso central:", opciones: ["a. Heroína", "b. Cocaína", "c. Alcohol", "d. Morfina"], correcta: 1 },
    { id: 5, pregunta: "¿Cuál es el significado de antisepsia?", opciones: ["a. Conjunto de procedimientos científicos destinados a preservar de gérmenes infecciosos en el organismo", "b. Ausencia de materia séptica, libre de infección", "c. Etimológicamente significa sin putrefacción", "d. Método que consiste en combatir o prevenir padecimientos infecciosos destruyendo los microbios que los causan"], correcta: 3 },
    { id: 6, pregunta: "Respecto al test de Malt, una puntuación de 6-10 puntos indica:", opciones: ["a. No alcohólico", "b. Sospecha de alcoholismo", "c. Alcoholismo", "d. Abstemio"], correcta: 1 },
    { id: 7, pregunta: "Cuando orientamos a la familia de la persona drogodependiente que no quiere tratarse, estamos haciendo:", opciones: ["a. Prevención primaria", "b. Prevención secundaria", "c. Prevención terciaria", "d. Ninguna es correcta"], correcta: 2 },
    { id: 8, pregunta: "¿A qué denominamos hemorragia en sábana?", opciones: ["a. Cuando la sangre procede de una vena y su salida es de manera continua", "b. Cuando la sangre procede de una arteria y sale a 'golpes'", "c. Cuando la produce una herida por arma blanca", "d. Cuando se produce por rotura de capilares"], correcta: 3 },
    { id: 9, pregunta: "La parada respiratoria se manifiesta por:", opciones: ["a. Pulso rápido y débil", "b. Pulso lento", "c. Ausencia de respiración espontánea", "d. A y C son correctas"], correcta: 2 },
    { id: 10, pregunta: "La administración de zumo de limón está indicada en la intoxicación por:", opciones: ["a. Barbitúricos", "b. Amoniaco", "c. Raticidas", "d. Benzodiacepinas"], correcta: 1 },
    { id: 11, pregunta: "¿Qué escala utilizaremos para la valoración del riesgo de úlceras por presión?", opciones: ["a. Maslow", "b. Norton", "c. Katz", "d. Cualquiera de ellas"], correcta: 1 },
    { id: 12, pregunta: "La R.C.P. Se inicia:", opciones: ["a. Con el masaje cardiaco", "b. Insuflando aire a los pulmones", "c. Colocando al paciente en decúbito prono", "d. Todas son falsas"], correcta: 0 },
    { id: 13, pregunta: "En el proceso de formación de úlceras por presión, las vesículas, ¿de qué estadio son?", opciones: ["a. Estadio I", "b. Estadio II", "c. Estadio III", "d. Estadio IV"], correcta: 1 },
    { id: 14, pregunta: "Cuál de los siguientes aspectos no valora la escala de Norton:", opciones: ["a. Movilidad", "b. Estado nutricional", "c. Actividad", "d. Estado mental"], correcta: 1 },
    { id: 15, pregunta: "La localización más frecuente de una úlcera por presión en un paciente en decúbito lateral será:", opciones: ["a. Tuberosidad isquiática", "b. Mejillas", "c. Costillas", "d. Sacro"], correcta: 2 },
    { id: 16, pregunta: "Según Kübler Ross la cuarta etapa ante el duelo o la muerte es:", opciones: ["a. De ira", "b. De negación", "c. De depresión", "d. De negociación"], correcta: 2 },
    { id: 17, pregunta: "Respecto a los cuidados post-mortem, señale la respuesta incorrecta:", opciones: ["a. Taponar los orificios naturales", "b. Asear el cuerpo del finado", "c. Ponerlo en decúbito supino", "d. Cubrir todo el cuerpo con la mortaja"], correcta: 3 },
    { id: 18, pregunta: "Escalera analgésica según la O.M.S. Los antiinflamatorios no esteroideos están en:", opciones: ["a. Primer escalón", "b. Segundo escalón", "c. Tercer escalón", "d. Cuarto escalón"], correcta: 0 },
    { id: 19, pregunta: "Respecto al instrumental buco-dental, ¿a qué se denomina material crítico?", opciones: ["a. A aquel que no se introduce en la boca", "b. A aquel que aunque se introduzca en la cavidad oral es poco posible que se contamine", "c. A aquel que entra en contacto directo con los tejidos bucales y se contamina por sangre", "d. Ninguna de ellas es correcta"], correcta: 2 },
    { id: 20, pregunta: "Las tiras colorimétricas del autoclave son:", opciones: ["a. Un control físico", "b. Un control químico", "c. Un control biológico", "d. Todas son correctas"], correcta: 1 },
    { id: 21, pregunta: "El empaquetado en una central de esterilización debe ser:", opciones: ["a. Impermeable al agente esterilizante", "b. Permeable a agentes externos", "c. Impermeable a la contaminación externa y permeable al agente esterilizante", "d. Permeable a los agentes externos e impermeable al vapor"], correcta: 2 },
    { id: 22, pregunta: "Respecto a la esterilización por autoclave de vapor, indica la respuesta incorrecta:", opciones: ["a. Diariamente y con preferencia en el primer programa de carga se realizará un control biológico en cada autoclave", "b. Las cargas no superarán el 75% de la capacidad de las cámaras", "c. Los paquetes se colocarán siempre de forma vertical", "d. En la carga mixta colocar el material metálico en la parte superior y el textil en la parte inferior"], correcta: 3 },
    { id: 23, pregunta: "En la infección nosocomial, no es un mecanismo de transmisión directo:", opciones: ["a. Las manos del personal sanitario", "b. Las gotas de Flügge expulsadas al hablar, toser o estornudar", "c. Las ropas contaminadas por agitación de las mismas", "d. Los gérmenes resistentes que se transmiten a través de medicamentos, perfusiones, etc."], correcta: 3 },
    { id: 24, pregunta: "Mecanismo de acción de desinfectantes y antisépticos. El cloro es un agente que actúa:", opciones: ["a. Sobre la membrana citoplasmática", "b. Sobre la pared celular", "c. Sobre el núcleo", "d. Sobre las proteínas y enzimas"], correcta: 3 },
    { id: 25, pregunta: "Una desinfección que elimina bacterias patógenas en su forma vegetativa y algunos hongos es:", opciones: ["a. Desinfección de alto nivel", "b. Desinfección de nivel intermedio", "c. Desinfección de bajo nivel", "d. Esterilización"], correcta: 1 },
    { id: 26, pregunta: "No es un eslabón de la cadena epidemiológica:", opciones: ["a. Reservorio o fuente de infección", "b. Mecanismos de transmisión", "c. Huésped susceptible", "d. Microorganismo patógeno"], correcta: 3 },
    { id: 27, pregunta: "Según Eickhorff no es una medida de eficacia probada:", opciones: ["a. Vacunación frente a la hepatitis B", "b. Lavado de manos", "c. Muestreos bacteriológicos ambientales", "d. Vigilancia de los equipos de ventilación mecánica y oxigenoterapia"], correcta: 2 },
    { id: 28, pregunta: "Presentación de las enfermedades transmisibles. La presencia constante de una enfermedad transmisible en una zona geográfica determinada es la definición de:", opciones: ["a. Endemia", "b. Endoepidemia", "c. Epidemia", "d. Pandemia"], correcta: 0 },
    { id: 29, pregunta: "¿Qué es la sonda nelaton?", opciones: ["a. Una sonda uretral", "b. Una sonda nasofaringea", "c. Una sonda de aspiración", "d. Ninguna de ellas es correcta"], correcta: 0 },
    { id: 30, pregunta: "¿A qué se llama periodo prodómico?", opciones: ["a. El intervalo comprendido entre la entrada del microorganismo en un huésped y la aparición de los primeros síntomas de la enfermedad", "b. Aparición de signos inespecíficos y de carácter general de la enfermedad", "c. A la aparición de los síntomas y signos que definen la enfermedad", "d. Ninguna de ellas es correcta"], correcta: 1 },
    { id: 31, pregunta: "¿Qué son los espirilos?", opciones: ["a. Son bacterias", "b. Son virus", "c. Son hongos", "d. Son parásitos"], correcta: 0 },
    { id: 32, pregunta: "El dispositivo que permite la salida y el uso del oxígeno, graduado en litros/minuto, se denomina:", opciones: ["a. Humidificador", "b. Manómetro", "c. Manorreductor", "d. Flujómetro"], correcta: 3 }



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
