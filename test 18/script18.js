// BANCO DE PREGUNTAS DEL TEST 18 (Materia técnica de Auxiliar de Enfermería - Preguntas 78 a 24)
const questions = [
    { id: 78, pregunta: "¿Qué es la Crioterapia?", opciones: ["a. Un tratamiento para el dolor de cabeza", "b. Un tratamiento para la artritis", "c. Un tratamiento quirúrgico para las hemorroides", "d. Un tratamiento quirúrgico para las contracturas"], correcta: 2 },
    { id: 79, pregunta: "¿Cuál es la unidad de energía empleada tradicionalmente en nutri-ción?", opciones: ["a. Caloría", "b. Julio", "c. Newton", "d. Voltio"], correcta: 0 },
    { id: 80, pregunta: "En la posición de Fowler, la cabe-cera de la cama estará incorporada en un ángulo de:", opciones: ["a. 20 grados", "b. 25 grados", "c. 35 grados", "d. 45 grados"], correcta: 3 },
    { id: 81, pregunta: "Por efectos secundarios de un fár-maco entendemos:", opciones: ["a. Solo los efectos indeseables", "b. Los efectos inesperados", "c. Cualquier efecto distinto al efecto principal", "d. Solo los efectos tóxicos"], correcta: 2 },
    { id: 82, pregunta: "En el proceso de granulacion de úlceras por presión, ¿qué cura sería la más conveniente?", opciones: ["a. Un buen desbridamiento de la úlcera", "b. Realizar una cura seca", "c. Realizar una cura húmeda", "d. Ninguna de las anteriores es correcta"], correcta: 2 },
    { id: 83, pregunta: "¿Cuál de las siguientes afirmacio-nes es correcta, respecto a la téc-nica de recogida de orina de 24 horas?", opciones: ["a. Es una técnica estéril", "b. Se recoge la orina desde la segunda micción del primer día", "c. La segunda micción del primer día se desecha", "d. Todas las anteriores son correctas"], correcta: 1 },
    { id: 84, pregunta: "¿Cuál es una característica del an-ciano frágil?", opciones: ["a. Sufre una o varias enfermedades, que le producen algún riesgo de incapacidad", "b. Sufre problemas mentales", "c. Sufre una enfermedad aguda o crónica sin riesgo de incapacidad", "d. Generalmente, es menor de 70 años"], correcta: 0 },
    { id: 15, pregunta: "¿Cuáles son los tres elementos fundamentales que intervienen en el proceso de la comunicación?", opciones: ["a. Destino, Codificación y Retroalimentación", "b. Mensaje, Destino y Fuente", "c. Fuente, Mensaje y Codificación", "d. No son tres, sino dos los elementos fundamentales"], correcta: 2 },
    { id: 16, pregunta: "La entrevista clínica es:", opciones: ["a. Un medio indirecto de Educación para la Salud", "b. Un medio directo de Educación para la Salud", "c. Un método unidireccional", "d. No es un medio de Educación para la Salud"], correcta: 1 },
    { id: 17, pregunta: "¿Cuál de estos materiales no es necesario para la higiene bucal de un enfermo inconsciente?", opciones: ["a. Toalla", "b. Lubricante", "c. Batea", "d. Pasta dentífrica"], correcta: 3 },
    { id: 18, pregunta: "¿Cuáles son los márgenes de tem-peratura del agua más adecuados para bañar a un anciano?", opciones: ["a. Entre 37ºC - 40º C", "b. Entre 35ºC - 41ºC", "c. Entre 0º - 50º C", "d. Entre 15º - 35º C"], correcta: 0 },
    { id: 19, pregunta: "Según la doctora Kübler-Ross, ¿qué dos períodos de depresión existen como etapas de aceptación de la muerte por parte del pa-ciente?", opciones: ["a. Depresión activa y preparatoria", "b. No se pasa por procesos de de-presión", "c. Depresión externa e interna", "d. Depresión reactiva y preparatoria"], correcta: 3 },
    { id: 20, pregunta: "Es parte del procedimiento post-mortem:", opciones: ["a. Colocar al difunto en posición vertical", "b. Cerrar los párpados y abrir la boca", "c. Proceder a la higiene del cadáver", "d. Colocarle la identificación en el pie derecho"], correcta: 2 },
    { id: 21, pregunta: "En los programas de la Terapía Ocupacional, una de las funciones del Auxiliar de Enfermería es:", opciones: ["a. La restauración psicomotriz", "b. Administrar el tratamiento prescrito por el medico rehabilitador", "c. La reinserción laboral", "d. A y C son correctas"], correcta: 1 },
    { id: 22, pregunta: "La cinesiterapia forzada está indi-cada para:", opciones: ["a. Actividades lúdicas", "b. Alivio del dolor", "c. Embarazos", "d. Traumatismo espinal"], correcta: 3 },
    { id: 23, pregunta: "¿Cuándo se puede realizar la su-jeción mecánica de un anciano?", opciones: ["a. Siempre", "b. Nunca", "c. Bajo prescripción facultativa", "d. Por indicación del fisioterapeuta"], correcta: 2 },
    { id: 24, pregunta: "El llamado \"nudo para cuerda\" se utiliza en la sujeción mecánica de un paciente para:", opciones: ["a. La sujeción de muñeca o tobillo", "b. La sujeción de la cabeza", "c. Fijar la sujeción de rodillas", "d. La sujeción de la cadera"], correcta: 0 },
    { id: 25, pregunta: "Es parte de la actuación de un auxiliar de enfermería para prevenir el estreñimiento en el anciano:", opciones: ["a. Los auxiliares no intervienen", "b. Marcar el tratamiento", "c. Extraer la masa fecal", "d. Sentar al anciano en el inodoro después del desayuno y de la comida"], correcta: 3 },
    { id: 26, pregunta: "Si decimos que a un paciente se le ha colocado en la posición de Sims es que:", opciones: ["a. Se le ha colocado acercando al paciente al lateral de la cama o a la cabecera de forma que la cabeza quede colgando", "b. Se le ha colocado en decúbito supino", "c. Se le va a aplicar un enema", "d. Se le ha colocado en decúbito prono"], correcta: 2 },
    { id: 27, pregunta: "Una dieta equilibrada debe proporcionar:", opciones: ["a. Proteínas, vitaminas, minerales y enzimas", "b. Calorías, proteínas, enzimas y vitaminas", "c. Vitaminas, calorías, fibras y minerales", "d. Minerales, proteínas, calorías y vitaminas"], correcta: 3 },
    { id: 28, pregunta: "Una dieta blanda es:", opciones: ["a. Aquella en que se seleccionan alimentos pobres o carentes de grasas y fácil digestión", "b. Aquella que utiliza alimentos blandos", "c. Aquella en la que solo se ingieren líquidos", "d. Aquella en que se suministran alimentos de fácil digestión, pero con grasas para dar energía"], correcta: 0 },
    { id: 29, pregunta: "¿Cuál de los siguientes NO es un criterio de diagnóstico de diabetes según la Asociación Americana de Diabetes (ADA 1997)?:", opciones: ["a. Glucemia plasmática al azar mayor o igual a 200 mg/dl y síntomas de diabetes", "b. Glucemia plasmática basal mayor o igual a 126 mg/dl", "c. Glucemia basal alterada, si en ayunas está comprendida entre 110-126 mg/dl", "d. Glucemia post-prandial inferior a 110 mg/dl"], correcta: 3 },
    { id: 30, pregunta: "Hablamos de hipoglucemia cuando:", opciones: ["a. Los niveles de glucosa son superiores a 50 mg/dl", "b. Los niveles de glucosa son inferiores a 50 mg/dl", "c. Los niveles de glucosa son superiores a 100 mg/dl", "d. Los niveles de glucosa se disparan"], correcta: 1 },
    { id: 31, pregunta: "Hablamos de disnea cuando:", opciones: ["a. La frecuencia respiratoria en un adulto está entre 12-18 respiraciones por minuto", "b. La frecuencia respiratoria en un adulto está por debajo de 12 respiraciones por minuto", "c. Hay dificultad respiratoria", "d. Hay ausencia de respiración"], correcta: 2 },
    { id: 32, pregunta: "La gráfica de las constantes vitales del enfermo se incluye en:", opciones: ["a. El tratamiento", "b. La historia clínica", "c. La historia vital", "d. El diagnóstico"], correcta: 1 },
    { id: 33, pregunta: "NO pertenece a las escalas de valoración funcional:", opciones: ["a. Escala de Lawton", "b. Índice de Katz", "c. Escala de Incapacidad Física de Cruz Roja", "d. Escala de Pfeiffer"], correcta: 3 },
    { id: 34, pregunta: "Señale la respuesta incorrecta en referencia a la Escala de Barthel:", opciones: ["a. La puntuación de cien es para la máxima independencia", "b. Se utiliza para la valoración de A.I.V.D", "c. Se utiliza para la valoración de A.V.D.B", "d. Contiene diez ítems"], correcta: 1 },
    { id: 35, pregunta: "De las siguientes afirmaciones indicar cuál es la incorrecta:", opciones: ["a. Las escalas de A.V.D.B son de mayor utilidad en ancianos institucionalizados", "b. Las escalas de A.I.V.D son más útiles para detectar los primeros grados de deterioro funcional del anciano en el domicilio", "c. En las escalas de A.I.V.D se utilizan ítems relacionados con tareas aprendidas habitualmente por las mujeres", "d. En las escalas de valoración de la salud mental se valoran conjuntamente la función cognitiva y afectiva"], correcta: 2 },
    { id: 36, pregunta: "Señale la respuesta correcta:", opciones: ["a. El escorbuto es consecuencia de déficit de vitamina A", "b. La pelagra está provocada por déficit de vitamina D", "c. El beri-beri está provocado por déficit de vitamina B1", "d. La deficiencia de vitamina A provoca raquitismo"], correcta: 2 },
    { id: 37, pregunta: "En el anciano NO es aconsejable aumentar la ingesta de:", opciones: ["a. Calcio", "b. Sodio", "c. Fibra", "d. Proteínas"], correcta: 1 },
    { id: 38, pregunta: "Entre las complicaciones de la nutrición parenteral se encuentra:", opciones: ["a. Broncoaspiración", "b. Náuseas y vómitos", "c. Fiebre", "d. Lesiones en tubo digestivo"], correcta: 2 },
    { id: 39, pregunta: "Causa inmovilidad en el anciano:", opciones: ["a. Traumatismos", "b. Retención urinaria", "c. Úlceras por presión", "d. Estreñimiento"], correcta: 0 },
    { id: 40, pregunta: "Respecto a los cambios en las funciones intelectuales en el anciano, ¿cuál de las siguientes afirmaciones NO es correcta?:", opciones: ["a. Existe mayor deterioro de la memoria a corto plazo", "b. Existe un aumento de sensibilidad", "c. Existe una mayor adaptación a situaciones nuevas", "d. Existe una disminución sensorial, consecuencia del envejecimiento"], correcta: 2 },
    { id: 41, pregunta: "Indique cuál de las siguientes respuestas es falsa con respecto a los objetivos del ejercicio físico en los ancianos:", opciones: ["a. Fortalecer y mejorar el tono muscular", "b. Potenciar la musculatura", "c. Aliviar el aburrimiento y reducir el aislamiento", "d. Favorecer la autoestima"], correcta: 1 },
    { id: 42, pregunta: "Señale la respuesta incorrecta:", opciones: ["a. En la enfermedad crónica existen períodos de remisión y exacerbación", "b. El envejecimiento es un proceso irreversible e inevitable", "c. En el proceso del envejecimiento existen períodos de remisión", "d. Los problemas del envejecimiento y la enfermedad crónica se influyen mutuamente"], correcta: 2 },
    { id: 43, pregunta: "Ante una herida grave NO se debe:", opciones: ["a. Asegurar el mantenimiento de las constantes vitales", "b. Extraer el cuerpo extraño que esté clavado", "c. Traslado a un centro hospitalario", "d. Contener la hemorragia"], correcta: 1 },
    { id: 44, pregunta: "Una hematemesis es:", opciones: ["a. Salida de sangre por la boca procedente de aparato digestivo", "b. Presencia de sangre en la orina", "c. Expectoración de sangre", "d. Expulsión de sangre digerida por el recto"], correcta: 0 },
    { id: 45, pregunta: "Señale ante qué situación NO se debe suspender la resucitación cardio-pulmonar:", opciones: ["a. Cuando comprobemos que existe pulso", "b. Siempre que las maniobras se hayan iniciado pasados 10 minutos de la parada cardiorrespiratoria", "c. Cuando la persona haya manifestado legalmente su deseo de no iniciar maniobras de R.C.P", "d. Cuando no haya retorno de la circulación ni respiración espontánea tras 30 min. de reanimación cardio-pulmonar adecuada"], correcta: 1 },
    { id: 46, pregunta: "Dentro de las medidas preventivas para evitar las caídas en el anciano no se incluye:", opciones: ["a. Los cuidados podológicos", "b. La corrección de déficits sensoriales", "c. La utilización de zapatos estrechos, tacones y cordones", "d. Evitar los reposabrazos en las sillas"], correcta: 2 },
    { id: 47, pregunta: "Son causas extrínsecas de las caídas:", opciones: ["a. La hipotensión ortostática", "b. Los suelos resbaladizos", "c. El uso de fármacos hipnóticos", "d. Los déficits sensoriales"], correcta: 1 },
    { id: 48, pregunta: "En relación al genograma señale la respuesta incorrecta:", opciones: ["a. Informa acerca de las relaciones familiares con el entorno", "b. Debe contener como mínimo tres generaciones", "c. Es útil para la prevención, diagnóstico y tratamiento de los problemas de salud", "d. Recoge información sobre las relaciones afectivas de la familia a estudio"], correcta: 0 },
    { id: 49, pregunta: "Es indicativo de la correcta cicatrización de una herida:", opciones: ["a. La inflamación de los bordes de la herida pasados los tres días", "b. La formación de un queloide", "c. La hemorragia", "d. La formación de tejido de granulación"], correcta: 3 },
    { id: 50, pregunta: "Señale la respuesta correcta:", opciones: ["a. Para la valoración de la profundidad de las quemaduras se utiliza la regla de los 9. B. En la regla de los 9, la cabeza y el cuello representan el 9%", "b. Para la valoración de la extensión de una quemadura, la factor edad no es influyente", "c. En la regla de los 9, la extremidad superior representa el 18%", "d. Ninguna de las anteriores respuestas es correcta"], correcta: 0 },
    { id: 51, pregunta: "Las quemaduras de tercer grado:", opciones: ["a. Son más dolorosas por su profundidad", "b. Presentan flictenas", "c. El tiempo de curación oscila entre diez y quince días", "d. El tratamiento es siempre quirúrgico"], correcta: 3 },
    { id: 52, pregunta: "Un enfermo con hemorragia importante suele presentar como signos básicos:", opciones: ["a. Hipertensión, taquipnea y frialdad de piel", "b. Taquicardia, hipotensión y taquipnea", "c. Hipertensión, taquicardia y agitación", "d. Hipotensión, bradicardia y frialdad de piel"], correcta: 1 },
    { id: 53, pregunta: "Son signos / síntomas de la insolación:", opciones: ["a. Náuseas y vómitos", "b. Anhidrosis", "c. Bradipnea", "d. Hirsutismo"], correcta: 0 },
    { id: 54, pregunta: "No es un accesorio de la cama hospitalaria:", opciones: ["a. Los centinelas de cama", "b. El pupitre", "c. La férula de acero", "d. La mitra"], correcta: 3 },
    { id: 55, pregunta: "La cama circoeléctrica se utiliza en pacientes cuya patología sea:", opciones: ["a. Lesión medular", "b. Úlcera por presión", "c. Insuficiencia renal", "d. Problemas de retorno venoso"], correcta: 0 },
    { id: 56, pregunta: "Señale cuál de estos procesos no forma parte de la farmacocinética de un fármaco:", opciones: ["a. La absorción", "b. La eliminación", "c. La interacción", "d. La metabolización"], correcta: 2 },
    { id: 57, pregunta: "¿Cuál de los siguientes no es un criterio de clasificación de los fármacos?:", opciones: ["a. Por su forma de acción", "b. Por su forma de administración", "c. Por el tiempo que tardan en actuar", "d. Por su composición química"], correcta: 2 },
    { id: 58, pregunta: "Durante un ataque convulsivo, ¿qué actuación no es correcta?:", opciones: ["a. Aflojar las ropas", "b. Poner en decúbito lateral", "c. Administrar diazepam vía intravenosa", "d. Instaurar siempre una cánula bucal"], correcta: 2 },
    { id: 59, pregunta: "En la escala de Glasgow ¿qué parámetro no se valora?:", opciones: ["a. Respuesta motora", "b. Apertura de ojos", "c. Movimientos respiratorios", "d. Respuesta verbal"], correcta: 2 },
    { id: 60, pregunta: "¿Cuál de los siguientes es un requisito sin excepción para la admisión como residente en un centro de personas mayores de la Comunidad Autónoma de Extremadura?:", opciones: ["a. Edad mínima de admisión 65 años", "b. Residir en la Comunidad Autónoma de Extremadura", "c. No padecer trastornos de conductas que impidan la convivencia de los usuarios", "d. Ser pensionista"], correcta: 2 },
    { id: 62, pregunta: "Cuando una úlcera afecta a piel, tejido subcutáneo y músculo, decimos que la misma se encuentra en:", opciones: ["a. Grado I", "b. Grado II", "c. Grado IV", "d. Ninguna de las tres"], correcta: 2 },
    { id: 63, pregunta: "La escala de Norton utiliza los siguientes parámetros:", opciones: ["a. Estado general, estado mental, actividad, incontinencia e hidratación", "b. Estado general, estado mental, movilidad, incontinencia y alimentación", "c. Estado general, estado mental, movilidad, incontinencia y actividad", "d. Ninguna de las anteriores es correcta"], correcta: 2 },
    { id: 64, pregunta: "De los siguientes factores favorecedores de úlceras por presión señale aquel que sea extrínseco:", opciones: ["a. Parálisis debidas a lesiones cerebrales o medulares", "b. Fricción", "c. Fallos circulatorios periféricos", "d. Déficit de absorción de vitamina K"], correcta: 1 }



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
