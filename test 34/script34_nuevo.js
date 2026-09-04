// BANCO DE PREGUNTAS DEL TEST 34 CORREGIDO (Materia técnica de Auxiliar de Enfermería - Bloque de 20 preguntas)
const questions = [
    { id: 4, pregunta: "¿Tienen derecho los ciudadanos al acceso a su historial médico?", opciones: ["a. Si, siempre", "b. No, nunca", "c. Solo si se traslada a otra provincia", "d. Solo si es una enfermedad grave"], correcta: 0 },
    { id: 5, pregunta: "EL AUTOCLAVE ESTERILIZA POR:", opciones: ["a. Calor seco", "b. Vapor de agua", "c. Óxido de Etileno", "d. Glutaraldehido"], correcta: 1 },
    { id: 6, pregunta: "¿DE QUÉ ES SINÓNIMO ANTISEPSIA?", opciones: ["a. Desinfección", "b. Asepsia", "c. Desinsectación", "d. Esterilización"], correcta: 0 },
    { id: 7, pregunta: "ENTRE LOS INCONVENIENTES QUE PRESENTA LA ESTERILIZACIÓN EN AUTOCLAVE, DESTACA EL QUE...", opciones: ["a. Deteriora los materiales de plástico", "b. Deja residuos", "c. Contamina", "d. Su utilización es peligrosa"], correcta: 0 },
    { id: 8, pregunta: "JUNTO CON EL AUTOCLAVE, ¿CUÁL ES UNO DE LOS MÉTODOS DE ESTERILIZACIÓN MÁS EXTENDIDO EN LOS HOSPITALES?", opciones: ["a. Óxido de Etileno", "b. Peróxido de hidrógeno", "c. Tindalización", "d. Radiación en frio"], correcta: 0 },
    { id: 9, pregunta: "CUANDO HABLAMOS DE CADUCIDAD DE LA ESTERILIZACIÓN NOS REFERIMOS...", opciones: ["a. Al buen aspecto del empaquetado", "b. Al número de ciclos de esterilización", "c. Al tiempo que la esterilización mantiene su esterilidad", "d. Es un control interno fisico"], correcta: 2 },
    { id: 10, pregunta: "¿CUÁL ES LA POSICIÓN EN LA QUE EL CUERPO DESCANSA SOBRE LA ESPALDA?", opciones: ["a. Decúbito prono", "b. Decúbito supino", "c. Decúbito lateral", "d. Decúbito lateral izquierdo"], correcta: 1 },
    { id: 11, pregunta: "¿QUÉ ES LA MOVILIZACIÓN PARESIVA / PASIVA?", opciones: ["a. La que realizas sin ningún esfuerzo", "b. La que realiza el celador sin ayuda", "c. La que no realizas", "d. La que se realiza a un paciente que no puede colaborar"], correcta: 3 },
    { id: 12, pregunta: "LA POSICIÓN MÁS IDÓNEA PARA LA COLOCACIÓN DE UNA SONDA VESICAL ES:", opciones: ["a. Trendelemburg", "b. Decúbito supino", "c. Decúbito prono", "d. Decúbito lateral izquierdo"], correcta: 1 },
    { id: 13, pregunta: "ENTRE LOS OBJETIVOS QUE BUSCAMOS A LA HORA DE REALIZAR LA MOVILIZACIÓN DE LOS PACIENTES, DESTACA COMO PRIMORDIAL:", opciones: ["a. Realizar exploraciones de enfermería", "b. Realizar una buena higiene", "c. Prevenir la aparición de úlceras por presión", "d. Ayudar a dormir al paciente"], correcta: 2 },
    { id: 14, pregunta: "CON RELACIÓN AL ASEO DEL ENFERMO, ¿QUÉ AFIRMACIÓN NO ES LA CORRECTA?", opciones: ["a. La temperatura del agua debe ser de 20 grados", "b. Hay que cambiar el agua cada vez que sea necesario", "c. Hay que estimular al paciente para que colabore con su aseo", "d. Hay que evitar las corrientes de aire en la habitación"], correcta: 0 },
    { id: 15, pregunta: "¿QUÉ DEBEMOS DE TENER EN CUENTA AL LAVAR LOS OJOS A UN PACIENTE?", opciones: ["a. Lavarlos siempre del lagrimal hacia afuera", "b. Utilizar siempre una loción desinfectante", "c. Lavarlos después del resto de la cara", "d. Hay que limpiarlos en seco"], correcta: 0 },
    { id: 16, pregunta: "EN EL ASEO DEL ENFERMO ENCAMADO LO ÚLTIMO QUE DEBE LAVARSE ES:", opciones: ["a. Las piernas y los pies", "b. La región genital", "c. Ojos", "d. Espalda y nalgas"], correcta: 1 },
    { id: 17, pregunta: "LAS PRÓTESIS BUCALES EN LOS PACIENTES INCONSCIENTES:", opciones: ["a. Hay que retirarlas siempre", "b. Hay que retirarlas sólo por las noches", "c. Hay que dejarlas puestas", "d. Hay que retirarlas para limpiarlas y volverlas a colocar"], correcta: 0 },
    { id: 18, pregunta: "GENERALMENTE LA TEMPERATURA DEL AGUA PARA EL ASEO E HIGIENE DEL PACIENTE SALVO EXCEPCIONES ES DE:", opciones: ["a. 17°C", "b. 37°C", "c. 20°C", "d. 47°C"], correcta: 1 },
    { id: 19, pregunta: "PARA COLOCAR UN ENEMA AL ENFERMO, SE DEBE COLOCAR EN POSICIÓN DE:", opciones: ["a. Decúbito lateral", "b. Decúbito prono", "c. Trendelemburg", "d. Genupectoral"], correcta: 0 },
    { id: 20, pregunta: "CUANDO UN PACIENTE SE VA DE ALTA HOSPITALARIA, DEBE COMUNICARSE AL SERVICIO DE:", opciones: ["a. Recepción", "b. Dietética", "c. Admisión", "d. Administración"], correcta: 2 },
    { id: 21, pregunta: "CONSTITUYE MATERIAL SÉPTICO:", opciones: ["a. Cuñas", "b. Palanganas", "c. Botellas de orina", "d. Todas son correctas"], correcta: 3 },
    { id: 22, pregunta: "LA PRÁCTICA DE LA ELIMINACIÓN DE LOS GÉRMENES EN LOS SUELOS SE DENOMINA:", opciones: ["a. Limpieza", "b. Desinfección", "c. Esterilización", "d. Desinsectación"], correcta: 1 },
    { id: 23, pregunta: "¿QUÉ ES LO PRIMERO QUE SE DEBE DO HACER ANTES DE MOVILIZAR A UN PACIENTE QUE LLEVA TIEMPO ENCAMADO?", opciones: ["a. Quitar la almohada", "b. Debemos poner la barandilla de protección", "c. Hacerle girar y sentarle al borde de la cama", "d. Explicarle al paciente el procedimiento"], correcta: 3 },
    { id: 1, pregunta: "¿Cuál de los siguientes no es un criterio de diagnóstico de diabetes según la Asociación Americana de Diabetes (ADA 1997)?", opciones: ["a. Glucemia plasmática al azar mayor o igual a 200 mg/dl y síntomas de diabetes", "b. Glucemia plasmática basal mayor o igual a 126 mg/dl", "c. Glucemia basal alterada, si en ayunas está comprendida entre 110-126 mg/dl", "d. Glucemia post-prandial inferior a 110 mg/dl."], correcta: 3 },
    { id: 2, pregunta: "Hablamos de hipoglucemia cuando los niveles de glucosa...", opciones: ["a. Son superiores a 50 mg/dl", "b. Son inferiores a 50 mg/dl", "c. Son superiores a 100 mg/dl", "d. Se disparan."], correcta: 1 },
    { id: 3, pregunta: "Hablamos de eupnea cuando:", opciones: ["a. La frecuencia respiratoria en un adulto está entre 12-18 respiraciones por minuto", "b. La frecuencia respiratoria en un adulto está por debajo de 12 respiraciones por minuto", "c. Hay dificultad respiratoria", "d. Hay ausencia de respiración."], correcta: 0 },
    { id: 4, pregunta: "La gráfica de las constantes vitales del enfermo se incluye en:", opciones: ["a. El tratamiento", "b. La historia clínica", "c. La historia vital", "d. El diagnóstico."], correcta: 1 },
    { id: 5, pregunta: "No pertenece a las escalas de valoración funcional:", opciones: ["a. Escala de Lawton", "b. Índice de Katz", "c. Escala de Incapacidad Física de Cruz Roja", "d. Escala de Pfeiffer."], correcta: 3 },
    { id: 6, pregunta: "Señale la respuesta incorrecta en referencia a la Escala de Barthel:", opciones: ["a. La puntuación diez es para la máxima independencia", "b. Se utiliza para la valoración de A.I.V.D", "c. Se utiliza para la valoración de A.V.D.B", "d. Contiene diez ítems."], correcta: 0 },
    { id: 7, pregunta: "De las siguientes afirmaciones indicar cuál es la incorrecta:", opciones: ["a. Las escalas de A.V.D.B son de mayor utilidad en ancianos institucionalizados", "b. Las escalas de A.I.V.D son más útiles para detectar los primeros grados de deterioro funcional del anciano en el domicilio", "c. En las escalas de A.I.V.D se utilizan ítems relacionados con tareas aprendidas habitualmente por las mujeres", "d. En las escalas de valoración de la salud mental se valoran conjuntamente la función cognitiva y afectiva."], correcta: 2 },
    { id: 8, pregunta: "Señale la respuesta correcta:", opciones: ["a. El escorbuto es consecuencia de déficit de vitamina A", "b. La pelagra está provocada por déficit de vitamina D", "c. El beri-beri está provocado por déficit de vitamina B1", "d. La deficiencia de vitamina A provoca raquitismo."], correcta: 2 },
    { id: 9, pregunta: "En el anciano no es aconsejable aumentar la ingesta de:", opciones: ["a. Calcio", "b. Sodio", "c. Fibra", "d. Proteínas."], correcta: 1 },
    { id: 10, pregunta: "Entre las complicaciones de la nutrición parenteral se encuentra:", opciones: ["a. Broncoaspiración", "b. Náuseas y vómitos", "c. Fiebre", "d. Lesiones a nivel del tubo digestivo."], correcta: 2 },
    { id: 11, pregunta: "Es causa de inmovilidad en el anciano:", opciones: ["a. Traumatismos", "b. Retención urinaria", "c. Úlceras por presión", "d. Estreñimiento."], correcta: 0 },
    { id: 12, pregunta: "Respecto a los cambios en las funciones intelectuales en el anciano, ¿cuál de las siguientes afirmaciones no es correcta?:", opciones: ["a. Existe mayor deterioro de la memoria a corto plazo", "b. Existe un aumento de sensibilidad", "c. Existe una mayor adaptación a situaciones nuevas", "d. Existe una disminución sensorial, consecuencia del envejecimiento."], correcta: 2 },
    { id: 13, pregunta: "Indique cuál de las siguientes respuestas es falsa con respecto a los objetivos del ejercicio físico en los ancianos:", opciones: ["a. Fortalecer y mejorar el tono muscular", "b. Potenciar la musculatura", "c. Aliviar el aburrimiento y reducir el aislamiento", "d. Favorecer la autoestima."], correcta: 1 },
    { id: 14, pregunta: "Señale la respuesta incorrecta:", opciones: ["a. En la enfermedad crónica existen períodos de remisión y exacerbación", "b. El envejecimiento es un proceso irreversible e inevitable", "c. En el proceso del envejecimiento existen períodos de remisión", "d. Los problemas del envejecimiento y la enfermedad crónica se influyen mutuamente."], correcta: 2 },
    { id: 15, pregunta: "Ante una herida grave no se debe:", opciones: ["a. Asegurar el mantenimiento de las constantes vitales", "b. Extraer el cuerpo extraño que esté clavado", "c. Traslado a un centro hospitalario", "d. Contener la hemorragia."], correcta: 1 },
    { id: 16, pregunta: "Una hematemesis es:", opciones: ["a. Salida de sangre por la boca procedente de aparato digestivo", "b. Presencia de sangre en la orina", "c. Expectoración de sangre", "d. Expulsión de sangre digerida por el recto."], correcta: 0 },
    { id: 17, pregunta: "Señale ante qué situación no se debe suspender la resucitación cardio-pulmonar:", opciones: ["a. Cuando comprobemos que existe pulso", "b. Siempre que las maniobras se hayan iniciado pasados 10 minutos de la parada cardiorrespiratoria", "c. Cuando la persona haya manifestado legalmente su deseo de no iniciar maniobras de R.C.P", "d. Cuando no haya retorno de la circulación ni respiración espontánea pasados 30 minutos de reanimación cardio-pulmonar adecuada."], correcta: 1 },
    { id: 18, pregunta: "Dentro de las medidas preventivas para evitar las caídas en el anciano no se incluye:", opciones: ["a. Los cuidados podológicos", "b. La corrección de déficits sensoriales", "c. La utilización de zapatos estrechos, tacones y cordones", "d. El evitar los reposabrazos en las sillas."], correcta: 2 },
    { id: 19, pregunta: "Son causas extrínsecas de las caídas:", opciones: ["a. La hipotensión ortostática", "b. Los suelos resbaladizos", "c. El uso de fármacos hipnóticos", "d. Los déficits sensoriales."], correcta: 1 },
    { id: 21, pregunta: "Es indicativo de la correcta cicatrización de una herida:", opciones: ["a. La inflamación de los bordes de la herida pasados los tres días", "b. La formación de un queloide", "c. La hemorragia", "d. La formación de tejido de granulación."], correcta: 3 },
    { id: 22, pregunta: "Señale la respuesta correcta:", opciones: ["a. Para la valoración de la profundidad de las quemaduras se utiliza la regla de los 9", "b. En la regla de los 9, la cabeza y el cuello representan el 9%", "c. Para la valoración de la extensión de una quemadura, el factor edad no es influyente", "d. En la regla de los 9, la extremidad superior representa el 18%."], correcta: 1 },
    { id: 23, pregunta: "Las quemaduras de tercer grado:", opciones: ["a. Son más dolorosas por su profundidad", "b. Presentan flictenas", "c. El tiempo de curación oscila entre diez y quince días", "d. El tratamiento es siempre quirúrgico."], correcta: 3 },
    { id: 24, pregunta: "Un enfermo con hemorragia importante suele presentar como signos básicos:", opciones: ["a. Hipertensión, taquipnea y frialdad de piel", "b. Taquicardia, hipotensión y taquipnea", "c. Hipertensión, taquicardia y agitación", "d. Hipotensión, bradicardia y frialdad de piel."], correcta: 1 },
    { id: 25, pregunta: "Son signos / síntomas de la insolación:", opciones: ["a. Las náuseas y vómitos", "b. La anhidrosis", "c. La bradipnea", "d. El hirsutismo."], correcta: 0 },
    { id: 26, pregunta: "No es un accesorio de la cama hospitalaria:", opciones: ["a. Los centinelas de cama", "b. El pupitre", "c. La férula de acero", "d. La mitra."], correcta: 3 },
    { id: 27, pregunta: "La cama circoeléctrica se utiliza en pacientes cuya patología sea:", opciones: ["a. Lesión medular", "b. Úlcera por presión", "c. Insuficiencia renal", "d. Problemas de retorno venoso."], correcta: 0 }

];

// --- MOTOR DE LÓGICA DEL SIMULADOR ---
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
