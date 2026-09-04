// BANCO DE PREGUNTAS DEL TEST 14 (Preguntas 1 a 20: Gráficas, gasometría, movilización, anatomía y nutrición)
const questions = [
    { id: 1, pregunta: "Las gráficas ordinarias:", opciones: ["a. Se las conoce también como gráficas mensuales", "b. Sirven para registrar los valores de las constantes vitales del paciente día a día", "c. Permiten registrar hasta dos controles al día (mañana y tarde)", "d. Todas las respuestas son correctas"], correcta: 3 },
    { id: 2, pregunta: "El registro gráfico de los movimientos de ventilación pulmonar se conoce como:", opciones: ["a. Espirometría", "b. Espirografía", "c. Gasometría", "d. Auscultación"], correcta: 1 },
    { id: 3, pregunta: "En una gasometría arterial se determina en sangre:", opciones: ["a. Oxígeno", "b. Ácido clorhídrico", "c. Dióxido de carbono", "d. Sólo son correctas a. y c)"], correcta: 3 },
    { id: 4, pregunta: "La dilatación patológica de la pared de los vasos sanguíneos se denomina:", opciones: ["a. Arteriosclerosis", "b. Shock", "c. Aneurisma", "d. Síndrome varicoso"], correcta: 2 },
    { id: 5, pregunta: "La distensión o agrandamiento irreversible de los espacios aéreos alveolares con destrucción de los tabiques interalveolares, se denomina:", opciones: ["a. Atelectasia", "b. Enfisema", "c. Bronquiectasia", "d. Neumonía"], correcta: 1 },
    { id: 6, pregunta: "El movimiento de separación del miembro inferior derecho del plano medio-sagital se conoce como movimiento de:", opciones: ["a. Abducción", "b. Adducción", "c. Rotación", "d. Flexión"], correcta: 0 },
    { id: 7, pregunta: "El músculo que por su función se opone directamente a la acción de otro músculo se dice que es:", opciones: ["a. Agonista", "b. Sinérgico", "c. Antagonista", "d. Pronador"], correcta: 2 },
    { id: 8, pregunta: "El proceso de formación del tejido óseo se conoce con el nombre de:", opciones: ["a. Osteolisis", "b. Osteoporosis", "c. Osteogénesis", "d. Osteomalacia"], correcta: 2 },
    { id: 9, pregunta: "Un ejemplo característico de una anfiartrosis es la articulación de:", opciones: ["a. La rodilla", "b. Cadera", "c. Sínfisis del pubis", "d. Sacro-ilíaca"], correcta: 2 },
    { id: 10, pregunta: "En qué posición se debe colocar al paciente para realizar una exploración rectal:", opciones: ["a. Posición de Roser", "b. Decúbito lateral", "c. Decúbito prono", "d. Posición Genupectoral"], correcta: 3 },
    { id: 11, pregunta: "La localización más frecuente de las úlceras por presión en pacientes encamados es:", opciones: ["a. Espinas ilíacas", "b. Tobillos", "c. Región tibial", "d. Trocánteres mayores y región sacra"], correcta: 3 },
    { id: 12, pregunta: "La especialidad médica que estudia las enfermedades del Sistema Nervioso Central y periférico se denomina:", opciones: ["a. Neumología", "b. Neurología", "c. Psiquiatría", "d. Reumatología"], correcta: 1 },
    { id: 13, pregunta: "El primer signo en la formación de una úlcera por presión:", opciones: ["a. Eritema local", "b. Edema local", "c. Exudado local", "d. Escara"], correcta: 0 },
    { id: 14, pregunta: "Para prevención de las úlceras por presión en los pacientes encamados se aconseja:", opciones: ["a. Realizar cambios posturales cada 2 ó 3 horas", "b. Dieta rica en proteínas y vitaminas", "c. Adecuado aporte de líquidos", "d. Todas las respuestas son correctas"], correcta: 3 },
    { id: 15, pregunta: "Señala la respuesta correcta en relación con la válvula pulmonar:", opciones: ["a. Es una válvula aurículo-ventricular", "b. Es una válvula sigmoidea", "c. Está localizada entre la aurícula y ventrículo derecho", "d. Está situada entre la aurícula y ventrículo izquierdo"], correcta: 1 },
    { id: 16, pregunta: "Entre los nutrientes que se citan uno cumple función reguladora en el organismo ¿Cuál?:", opciones: ["a. Vitaminas", "b. Lípidos", "c. Proteínas", "d. Hidratos de carbono"], correcta: 0 },
    { id: 17, pregunta: "Al proceso de degradación general de unas moléculas en otras más pequeñas, en el conjunto de reacciones del organismo, se conoce como:", opciones: ["a. Catabolismo", "b. Metabolismo basal", "c. Anabolismo", "d. Metabolismo total"], correcta: 0 },
    { id: 18, pregunta: "Es un polisacárido de reserva animal:", opciones: ["a. La celulosa", "b. El glucógeno", "c. El almidón", "d. La maltosa"], correcta: 1 },
    { id: 19, pregunta: "Los ácidos grasos saturados se encuentran en gran cantidad en las grasas:", opciones: ["a. De semillas", "b. Animales", "c. Aceite de oliva", "d. Pescado azul"], correcta: 1 },
    { id: 20, pregunta: "Entre las sondas que se nombran a continuación señala cuál es la vesical:", opciones: ["a. Levin", "b. Salem", "c. Sengstaken-Blakemore", "d. Foley"], correcta: 3 },
    { id: 21, pregunta: "Señala la respuesta verdadera. ¿Qué alimentos aportan proteínas de alto valor biológico?", opciones: ["a. Pescado azul", "b. Carne de pollo", "c. Lentejas", "d. a. y b. son correctas"], correcta: 3 },
    { id: 22, pregunta: "La actina y la miosina son:", opciones: ["a. Hormonas", "b. Lípidos", "c. Proteínas", "d. Vitaminas"], correcta: 2 },
    { id: 23, pregunta: "Un vector es:", opciones: ["a. Un objeto transmisor de gérmenes", "b. Un ser animado transmisor de gérmenes", "c. Un fómite", "d. Ninguna respuesta es correcta"], correcta: 1 },
    { id: 24, pregunta: "Se conoce como vía parenteral a:", opciones: ["a. La vía que administra el medicamento por vía IV", "b. La vía que administra el medicamento por vía IM", "c. La vía que administra el medicamento por vía subcutánea", "d. Todas son correctas"], correcta: 3 },
    { id: 25, pregunta: "¿Qué enfermedad se produce por la falta de Yodo?:", opciones: ["a. Raquitismo", "b. Bocio", "c. Pelagra", "d. Anemia"], correcta: 1 },
    { id: 26, pregunta: "Llamamos metabolismo basal a la energía...", opciones: ["a. ...que se gasta en un día normal", "b. ...de los alimentos consumidos en un día", "c. ...que se consume al hacer deporte", "d. Nada de lo anterior es cierto"], correcta: 3 },
    { id: 27, pregunta: "Una quemadura en la que hay destrucción de tejidos con formación de una costra es:", opciones: ["a. De primer grado", "b. De segundo grado", "c. De tercer grado", "d. Entre primer y segundo grado"], correcta: 2 },
    { id: 28, pregunta: "La estomatitis es:", opciones: ["a. Inflamación de la mucosa gástrica", "b. Inflamación de la mucosa bucal", "c. Inflamación de las encías", "d. Inflamación del estómago"], correcta: 1 },
    { id: 29, pregunta: "La hepatitis B se transmite:", opciones: ["a. Por jeringuillas", "b. Por relaciones sexuales", "c. Por el agua", "d. Las respuestas A y B"], correcta: 3 },
    { id: 30, pregunta: "Una aguja 30/7 indica:", opciones: ["a. 30 cm de longitud y 7 mm de grosor", "b. 30 mm de longitud y 7 décimas de milímetro de calibre", "c. 30 mm de calibre y 7 mm de longitud", "d. 30 décimas de milímetro de calibre y 7 mm de longitud"], correcta: 1 },
    { id: 31, pregunta: "Las pinzas Doyen:", opciones: ["a. Son material de disección", "b. Sirven para fijar compresas a los bordes de la herida quirúrgica", "c. Son pinzas hemostáticas", "d. Se utilizan fundamentalmente como material de sutura"], correcta: 1 },
    { id: 32, pregunta: "En relación con las suturas ¿cuál de las siguientes se reabsorbe preferentemente y no es necesario quitar puntos?:", opciones: ["a. Catgut", "b. Seda", "c. Agrafes", "d. Polivinilo"], correcta: 0 },
    { id: 33, pregunta: "El esfenoides es un hueso que se encuentra en:", opciones: ["a. Cráneo", "b. Mano", "c. Cara", "d. Pelvis"], correcta: 0 },
    { id: 34, pregunta: "Para esterilizar un laringoscopio, podemos utilizar:", opciones: ["a. Horno Pasteur", "b. Autoclave", "c. Ebullición", "d. Gas Plasma"], correcta: 3 },
    { id: 35, pregunta: "A un paciente con fractura de pelvis lo colocaríamos en una cama:", opciones: ["a. Electrocircular", "b. Ortopédica de Judet", "c. Ortopédica reversible", "d. Normal"], correcta: 2 },
    { id: 36, pregunta: "Para fabricar los controles biológicos de esterilización se suelen utilizar:", opciones: ["a. Virus de la Hepatitis B", "b. Bacillus stearothermophilus", "c. Hongos", "d. Esporas de protozoos parásitos"], correcta: 1 },
    { id: 37, pregunta: "Para cortar un hueso, se utiliza:", opciones: ["a. Un bisturí", "b. Una tijera Lister", "c. Una cizalla", "d. Un osteotomo"], correcta: 3 },
    { id: 38, pregunta: "Sobre los músculos de fibra lisa:", opciones: ["a. Son de contracción voluntaria", "b. Su contracción está regulada por el Sistema Nervioso Vegetativo", "c. Forman parte de la musculatura esquelética", "d. Forman parte de la musculatura cardiaca"], correcta: 1 },
    { id: 39, pregunta: "¿Cuál de los siguientes órganos digestivos produce enzimas que intervienen en la digestión de las proteínas?", opciones: ["a. Hígado", "b. Glándulas salivales", "c. Esófago", "d. Páncreas"], correcta: 3 },
    { id: 40, pregunta: "El pico máximo de la secreción de estrógenos se produce:", opciones: ["a. El día 1 del ciclo menstrual", "b. El día 28 del ciclo menstrual", "c. El día 14 del ciclo menstrual", "d. El último día de la menstruación"], correcta: 2 },
    { id: 41, pregunta: "La sialorrea es:", opciones: ["a. Presencia de grasa en heces", "b. Hemorragia nasal", "c. Significa lo mismo que halitosis", "d. Aumento de la salivación"], correcta: 3 },
    { id: 42, pregunta: "El eritema es:", opciones: ["a. El enrojecimiento de la piel", "b. Pérdida de sustancia cutánea", "c. Lesión sólida de la piel", "d. Coloración amarillo verdosa de la piel"], correcta: 0 },
    { id: 43, pregunta: "La presencia de gérmenes en la sangre se produce en:", opciones: ["a. Septicemia", "b. Epidemia", "c. Hemofilia", "d. Hemoptisis"], correcta: 0 },
    { id: 44, pregunta: "La fecundación del óvulo tiene lugar en:", opciones: ["a. El endometrio", "b. El ovario", "c. El cuello uterino", "d. La trompa"], correcta: 3 },
    { id: 45, pregunta: "La emisión de orina en pequeñas cantidades y de forma repetida se denomina:", opciones: ["a. Disuria", "b. Nicturia", "c. Polaquiuria", "d. Poliuria"], correcta: 2 },
    { id: 46, pregunta: "Cuando aparece un edema generalizado con derrame en serosas, podemos definirlo como:", opciones: ["a. Ascitis", "b. Enantema", "c. Neumotorax", "d. Anasarca"], correcta: 3 },
    { id: 47, pregunta: "¿Cuál de las siguientes afirmaciones es correcta?:", opciones: ["a. Melenas son heces sin coloración", "b. Hematemesis es una hemorragia procedente de las vías respiratorias", "c. Esteatorrea es la presencia de grasa en las heces", "d. Rectorragia son heces negras y pegajosas"], correcta: 2 },
    { id: 48, pregunta: "La falta de apetito se denomina:", opciones: ["a. Astenia", "b. Caquexia", "c. Apatía", "d. Anorexia"], correcta: 3 },
    { id: 49, pregunta: "¿Qué enfermedad produce el déficit de vitamina C?:", opciones: ["a. Pelagra", "b. Raquitismo", "c. Escorbuto", "d. Acromegalia"], correcta: 2 },
    { id: 50, pregunta: "Las infecciones de la vejiga urinaria se denominan:", opciones: ["a. Cistitis", "b. Vesiculitis", "c. Nefritis", "d. Pielonefritis"], correcta: 0 },
    { id: 51, pregunta: "La presión arterial máxima corresponde a:", opciones: ["a. Presión diastólica", "b. Presión sistólica", "c. Presión hidrostática", "d. Presión oncótica"], correcta: 1 },
    { id: 52, pregunta: "Denominamos fecundación:", opciones: ["a. El desarrollo del embrión", "b. La unión del óvulo y el espermatozoide", "c. La salida del óvulo a la trompa", "d. La formación del feto"], correcta: 1 },
    { id: 53, pregunta: "Los ejercicios pasivos son los que el paciente:", opciones: ["a. Observa realizar a otros", "b. Los realiza por sí mismo", "c. Los realiza con fines relajantes", "d. Los realiza con ayuda de otra persona"], correcta: 3 },
    { id: 54, pregunta: "Antes de aplicar un vendaje, las articulaciones deben estar:", opciones: ["a. Extendidas", "b. Flexionadas", "c. Ligeramente flexionadas", "d. Es indiferente la posición de la articulación"], correcta: 2 },
    { id: 55, pregunta: "El antiséptico de elección para el lavado quirúrgico de manos a nivel hospitalario es:", opciones: ["a. El jabón líquido neutro", "b. El jabón con povidona yodada", "c. Los compuestos clorados", "d. El alcohol"], correcta: 1 }




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
