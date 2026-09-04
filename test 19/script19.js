// BANCO DE PREGUNTAS DEL TEST 19 (Materia técnica de Auxiliar de Enfermería - Preguntas 1 a 20)
const questions = [
    { id: 1, pregunta: "Tienen derecho los ciudadanos al acceso a su historial médico:", opciones: ["a. Sí, siempre", "b. No, nunca", "c. Solo si se traslada a otra provincia", "d. Solo si es una enfermedad grave"], correcta: 0 },
    { id: 2, pregunta: "El autoclave esteriliza por:", opciones: ["a. Calor seco", "b. Vapor de agua", "c. Óxido de etileno", "d. Glutaraldehído"], correcta: 1 },
    { id: 3, pregunta: "¿De qué es sinónimo antisepsia?", opciones: ["a. Desinfección", "b. Asepsia", "c. Desinsectación", "d. Esterilización"], correcta: 0 },
    { id: 4, pregunta: "Entre los inconvenientes que presenta la esterilización en autoclave, destaca el que:", opciones: ["a. Deteriora los materiales de plástico", "b. Deja residuos", "c. Contamina", "d. Su utilización es peligrosa"], correcta: 0 },
    { id: 5, pregunta: "Junto con el autoclave, ¿cuál es uno de los métodos de esterilización más extendido en los hospitales?:", opciones: ["a. Óxido de etileno", "b. Peróxido de hidrógeno", "c. Tindalización", "d. Radiación en frío"], correcta: 0 },
    { id: 6, pregunta: "Cuando hablamos de caducidad de la esterilización, nos referimos:", opciones: ["a. Al buen aspecto del empaquetado", "b. Al número de ciclos de esterilización", "c. Al tiempo que la esterilidad mantiene su efectividad", "d. Es un control interno físico"], correcta: 2 },
    { id: 7, pregunta: "¿Cuál es la posición en que el cuerpo descansa sobre la espalda?:", opciones: ["a. Decúbito prono", "b. Decúbito supino", "c. Decúbito lateral", "d. Decúbito superior"], correcta: 1 },
    { id: 8, pregunta: "¿Qué es movilización pasiva?:", opciones: ["a. La que realizas sin ningún esfuerzo", "b. La que realiza el celador sin ayuda", "c. La que no realizas", "d. La que se realiza a un paciente que no puede colaborar"], correcta: 3 },
    { id: 9, pregunta: "La posición más idónea para la colocación de una sonda vesical es:", opciones: ["a. Trendelenburg", "b. Decúbito supino", "c. Decúbito prono", "d. Decúbito lateral izquierdo"], correcta: 1 },
    { id: 10, pregunta: "Entre los objetivos que buscamos a la hora de realizar la movilización de los pacientes, destaca como primordial:", opciones: ["a. Realizar exploraciones de enfermería", "b. Realizar una buena higiene", "c. Prevenir la aparición de úlceras por presión", "d. Ayudar a dormir al paciente"], correcta: 2 },
    { id: 11, pregunta: "Con relación al aseo del enfermo, ¿qué afirmación no es la correcta?:", opciones: ["a. La temperatura del agua debe ser de 20º", "b. Hay que cambiar el agua cada vez que sea necesario", "c. Hay que estimular al paciente para que colabore con su aseo", "d. Hay que evitar las corrientes de aire en la habitación"], correcta: 0 },
    { id: 12, pregunta: "¿Qué debemos tener en cuenta al realizar el lavado de ojos de un paciente?:", opciones: ["a. Lavarlos siempre del lagrimal hacia fuera", "b. Utilizar una solución desinfectante", "c. Lavarlos después del resto de la cara", "d. Hay que limpiarlos en seco"], correcta: 0 },
    { id: 13, pregunta: "En el aseo del paciente encamado lo último que debe lavarse es:", opciones: ["a. Las piernas y los pies", "b. La región genital", "c. Ojos", "d. Espalda y nalgas"], correcta: 1 },
    { id: 14, pregunta: "Las prótesis bucales en los pacientes inconscientes:", opciones: ["a. Hay que retirarlas siempre", "b. Hay que retirarlas sólo por las noches", "c. Hay que dejarlas puestas", "d. Hay que retirarlas para su limpieza y volverlas a colocar"], correcta: 0 },
    { id: 15, pregunta: "Generalmente la temperatura del agua para el aseo e higiene del paciente, salvo excepciones es de:", opciones: ["a. 17º", "b. 37º", "c. 20º", "d. 47º"], correcta: 1 },
    { id: 16, pregunta: "Para administrar un enema al enfermo, deberá colocarse en posición de:", opciones: ["a. Decúbito lateral", "b. Decúbito prono", "c. Trendelenburg", "d. Genupectoral"], correcta: 0 },
    { id: 17, pregunta: "Cuando un paciente se va de alta hospitalaria, debe comunicarse al servicio de:", opciones: ["a. Recepción", "b. Dietética", "c. Admisión", "d. Administración"], correcta: 2 },
    { id: 18, pregunta: "Constituye material séptico:", opciones: ["a. Cuñas", "b. Palanganas", "c. Botellas de orina", "d. Todas son correctas"], correcta: 3 },
    { id: 19, pregunta: "La práctica de la eliminación de gérmenes en los suelos, se denomina:", opciones: ["a. Limpieza", "b. Desinfección", "c. Esterilización", "d. Desinsectación"], correcta: 1 },
    { id: 20, pregunta: "¿Qué es lo primero que se debe hacer antes de movilizar a un paciente que lleva tiempo encamado?:", opciones: ["a. Quitar la almohada", "b. Debemos poner las barandillas de protección", "c. Hacerle girar y sentarle al borde de la cama", "d. Explicar al paciente el procedimiento"], correcta: 3 },
    { id: 21, pregunta: "La prevencion de ulceras por presion en ancianos encamados consiste en:", opciones: ["a. Administrar Vitamina A a todos los ancianos mayores de 65 años", "b. Movilizacion dos veces al dia", "c. Procurar no limpiar diariamente la piel para evitar la maceracion", "d. Practicar cuidados a la piel y movilizar"], correcta: 3 },
    { id: 22, pregunta: "En caso de pacientes encamados, se debe pinzar la sonda vesical al cambiar la bolsa recolectora de orina, para:", opciones: ["a. Evitar el derramamiento de orina en la cama", "b. Evitar el reflujo de orina a la vejiga", "c. Por higiene para el personal sanitario", "d. Todas son incorrectas"], correcta: 1 },
    { id: 23, pregunta: "No es requisito que deba reunir una cama hospitalaria, una vez instalada en la habitacion:", opciones: ["a. Ser accesible desde tres lados", "b. No habra fuente de luz frente a ella", "c. No se pondra debajo de una ventana ni muy cerca de la puerta", "d. La distancia existente entre la cama y la pared lateral debe ser de 0,5 metros"], correcta: 3 },
    { id: 24, pregunta: "Un elemento que actúa en la cadena epidemiológica como fuente puede ser en otro caso reservorio o mecanismo de transmisión, como ejemplo tenemos:", opciones: ["a. Esto no es cierto", "b. El suelo puede ser reservorio o mecanismo de transmisión", "c. Solo en algunos casos", "d. Siempre"], correcta: 1 },
    { id: 25, pregunta: "Se define \"portador convaleciente\":", opciones: ["a. Aquel que elimina gérmenes no patógenos", "b. Elimina el microorganismo antes de que aparezca la enfermedad que suele estar incubando", "c. Ha padecido una enfermedad contagiosa que ha curado clínicamente pero elimina gérmenes durante tres meses siguientes", "d. Son personas colonizadas pero no infectadas"], correcta: 2 },
    { id: 26, pregunta: "Se define \"sujeto sano susceptible\" como:", opciones: ["a. Aquel que elimina gérmenes no patógenos", "b. Todo sujeto sano y capaz de enfermar", "c. Es el último eslabón de la cadena epidemiológica", "d. Son ciertas la 2 y 3"], correcta: 3 },
    { id: 27, pregunta: "El foco desde el que se transmiten los gérmenes a un organismo vivo infectándolo se denomina:", opciones: ["a. Vía de salida", "b. Fuente de infección", "c. Mecanismo de transmisión", "d. Vía de entrada"], correcta: 1 },
    { id: 28, pregunta: "El aparato de Golgi se encuentra en:", opciones: ["a. Citoplasma", "b. Carioteca", "c. Lisosomas", "d. Ribosomas"], correcta: 0 },
    { id: 29, pregunta: "¿Qué afirmación es correcta respecto a la técnica de recogida de orina de 24 horas?:", opciones: ["a. Es una técnica estéril", "b. Se pide al paciente que recoja la orina desde la segunda micción del primer día", "c. La segunda micción del primer día se desecha", "d. Todas las afirmaciones anteriores son correctas"], correcta: 1 },
    { id: 30, pregunta: "La alteración renal que cursa con inflamación del glomérulo se denomina:", opciones: ["a. Pielonefritis", "b. Síndrome nefrótico", "c. Tubulopatía", "d. Glomerulonefritis"], correcta: 3 },
    { id: 31, pregunta: "La prueba diagnóstica que sirve para medir los volúmenes de aire movilizados con los movimientos respiratorios se llama:", opciones: ["a. Espirografía", "b. Espirometría", "c. Gasometría", "d. Broncoscopia"], correcta: 1 },
    { id: 32, pregunta: "¿Cuál de las siguientes sondas se utiliza en el sondaje nasogástrico?:", opciones: ["a. Rectal", "b. Endotraqueal", "c. Levin", "d. Foley"], correcta: 2 },
    { id: 33, pregunta: "Para facilitar el proceso de absorción, los principios inmediatos deben desdoblarse en elementos más sencillos que puedan atravesar la pared intestinal hacia la circulación sanguínea. De esta manera las proteínas se desdoblan en:", opciones: ["a. Glicéridos", "b. Aminoácidos", "c. Monosacáridos", "d. Glicerina"], correcta: 1 },
    { id: 34, pregunta: "La posición más adecuada para administrar enemas es:", opciones: ["a. Morestin", "b. Decúbito lateral derecho", "c. Roser", "d. Sims"], correcta: 3 },
    { id: 35, pregunta: "Un paciente que se encuentra en decúbito supino no es probable que sufra úlceras por presión en:", opciones: ["a. Talón", "b. Rodillas", "c. Sacro", "d. Codos"], correcta: 1 },
    { id: 36, pregunta: "A la eliminación de tejido desvitalizado hasta que se descubre tejido sano circundante se denomina:", opciones: ["a. Fricción", "b. Desbridamiento", "c. Disección", "d. Regeneración"], correcta: 1 },
    { id: 37, pregunta: "Señale qué factor influye en la persona candidata a sufrir una infección:", opciones: ["a. La edad", "b. El estado nutricional", "c. Algunos tratamientos agresivos", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 38, pregunta: "El músculo estriado y voluntario es:", opciones: ["a. Liso", "b. Esquelético", "c. Cardiaco", "d. Todas las anteriores son correctas"], correcta: 1 },
    { id: 39, pregunta: "El herpes simple es una enfermedad de la piel producida por:", opciones: ["a. Un virus", "b. Una Ricketsia", "c. Un hongo", "d. Un prión"], correcta: 0 },
    { id: 40, pregunta: "¿Cuál de las siguientes enzimas no es segregada por el páncreas?:", opciones: ["a. Lipasa", "b. Amilasa", "c. Lactasa", "d. Tripsina"], correcta: 2 },
    { id: 41, pregunta: "La válvula que comunica la aurícula izquierda con el ventrículo izquierdo se denomina:", opciones: ["a. Tricúspide", "b. Mitral", "c. Bicúspide", "d. Las respuestas B y C"], correcta: 3 },
    { id: 42, pregunta: "¿Qué material no se precisa para comprobar que la sonda nasogástrica se encuentra situada correctamente?:", opciones: ["a. Esfigmomanómetro", "b. Fonendoscopio", "c. Jeringa de 50 ml", "d. Radiografía de tórax"], correcta: 0 },
    { id: 43, pregunta: "En el análisis macroscópico de esputo valoramos:", opciones: ["a. Color", "b. Olor", "c. Consistencia", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 44, pregunta: "Anuria es:", opciones: ["a. Ausencia de respiración", "b. Ausencia de orina", "c. Ausencia de pulso", "d. Dificultad para respirar"], correcta: 1 }




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
