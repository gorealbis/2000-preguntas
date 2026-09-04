// BANCO DE PREGUNTAS DEL TEST 37 NUEVO (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 1, pregunta: "La absorción de un fármaco no está condicionada por:", opciones: ["a. La liposolubilidad", "b. La superficie de absorción", "c. El flujo sanguíneo", "d. Las afecciones a nivel renal."], correcta: 3 },
    { id: 2, pregunta: "Acerca de la epilepsia, ¿cuál es ERRÓNEA?", opciones: ["a. Se debe a una descarga anormal en una parte del cerebro", "b. Las más características son las tónico-clónicas", "c. Su control farmacológico es complicado, ya que requieren de varios fármacos", "d. Cuando no responde a tratamiento médico, se puede utilizar el quirúrgico."], correcta: 2 },
    { id: 3, pregunta: "Las crisis epilépticas que cursan sin afectación de la conciencia se denominan:", opciones: ["a. Crisis parciales simples", "b. Crisis parciales complejas", "c. Petit Mal", "d. Crisis Tónico-clónicas."], correcta: 0 },
    { id: 6, pregunta: "En la escala de Norton, ¿a partir de qué puntuación se considera un alto riesgo de formación de úlcera?:", opciones: ["a. 12 puntos ó menos", "b. 15 puntos ó menos", "c. Entre 7 y 15 puntos", "d. Ninguna de las anteriores es correcta."], correcta: 0 },
    { id: 7, pregunta: "En un paciente en decúbito lateral la zona con riesgo de sufrir úlceras por presión será:", opciones: ["a. Talón", "b. Rodilla", "c. Trocánter mayor", "d. Región sacra."], correcta: 2 },
    { id: 8, pregunta: "Los cambios posturales para evitar la aparición de úlceras por presión se deben hacer:", opciones: ["a. Cada 2 horas", "b. Cada 4 horas durante el día y por la noche", "c. Cada 6 horas en horario nocturno", "d. Cada 8 horas."], correcta: 0 },
    { id: 9, pregunta: "Incapacidad para reconocer objetos o personas:", opciones: ["a. Afasia", "b. Apraxia", "c. Agnosia", "d. Ninguna de las anteriores."], correcta: 2 },
    { id: 10, pregunta: "Señale la respuesta incorrecta en relación a la atención a personas con demencia:", opciones: ["a. Procurar que el anciano esté activo el mayor tiempo posible", "b. Evitar la rutina en las actividades cotidianas", "c. No es preciso un régimen especial de comidas, pero sí un horario de comidas fijo", "d. Los viajes no son aconsejables."], correcta: 1 },
    { id: 11, pregunta: "No es un síntoma de depresión:", opciones: ["a. La anhedonia", "b. La agitación psicomotora", "c. Las alucinaciones", "d. La apraxia."], correcta: 3 },
    { id: 12, pregunta: "¿Cuál de las siguientes es una causa de incontinencia urinaria por rebosamiento?:", opciones: ["a. La atrofia vaginal", "b. El prolapso uterino", "c. La hipertrofia prostática", "d. La litiasis."], correcta: 2 },
    { id: 13, pregunta: "¿Cuál de las siguientes actuaciones no es una finalidad del sondaje vesical?:", opciones: ["a. La realización de lavados vesicales", "b. La recogida de orina estéril", "c. La realización de un balance de líquidos", "d. Para tratamiento de infecciones urinarias."], correcta: 3 },
    { id: 14, pregunta: "Cuando hablamos de ropa de cama, se denomina entremetida a:", opciones: ["a. Una sábana especial para evitar caídas", "b. Una forma especial de remeter los extremos de la sábana encimera", "c. Una sábana colocada transversalmente, para remeter más fácilmente", "d. Una forma especial de hacer la cama para personas agitadas."], correcta: 2 },
    { id: 15, pregunta: "La técnica correcta para hacer la cama de un paciente encamado, debe ser:", opciones: ["a. Entre dos auxiliares de enfermería, colocándose cada uno a un lado de la cama, de forma que mientras uno hace su parte de la cama, el otro sostiene al enfermo", "b. Entre dos auxiliares de enfermería, colocándose ambos en el mismo lado de la cama, de forma que mientras uno hace su parte de la cama, el otro sostiene al enfermo", "c. No es función del auxiliar de enfermería hacer la cama ocupada", "d. Trasladar al paciente a una camilla auxiliar y, posteriormente, proceder a hacer la cama."], correcta: 0 },
    { id: 17, pregunta: "Los Centros de día de mayores, no tienen como objetivo:", opciones: ["a. El apoyo a los familiares", "b. Favorecer la rehabilitación", "c. La estancia de ancianos encamados", "d. Demorar la institucionalización en residencias."], correcta: 2 },
    { id: 18, pregunta: "En relación con el envejecimiento, señalar qué frase no es correcta:", opciones: ["a. Es un proceso universal que afecta a todos los seres vivos", "b. Es la suma de todos los cambios que se dan en el organismo con el paso del tiempo", "c. Es una sucesión de modificaciones morfológicas, fisiológicas y psicosociales", "d. Es una causa morbosa originaria de enfermedad."], correcta: 3 },
    { id: 22, pregunta: "¿Qué es la Crioterapia?:", opciones: ["a. Un tratamiento para el dolor de cabeza", "b. Un tratamiento para la artritis", "c. Un tratamiento quirúrgico para las hemorroides", "d. Un tratamiento quirúrgico para las contracturas."], correcta: 2 },
    { id: 23, pregunta: "¿Cuál es la unidad de energía empleada tradicionalmente en nutrición?:", opciones: ["a. Caloría", "b. Julio", "c. Newton", "d. Voltio."], correcta: 0 },
    { id: 24, pregunta: "En la posición de Fowler, la cabecera de la cama estará incorporada en un ángulo de:", opciones: ["a. 20 grados", "b. 25 grados", "c. 35 grados", "d. 45 grados."], correcta: 3 },
    { id: 25, pregunta: "Por efectos secundarios de un fármaco entendemos:", opciones: ["a. Sólo los efectos indeseables", "b. Los efectos inesperados", "c. Cualquier efecto distinto al efecto principal", "d. Sólo los efectos tóxicos."], correcta: 2 },
    { id: 26, pregunta: "En el proceso de granulación de úlceras por presión, ¿qué cura sería la más conveniente?:", opciones: ["a. Realizar un buen desbridamiento de la úlcera", "b. Realizar una cura seca", "c. Realizar una cura húmeda", "d. Ninguna de las anteriores es correcta."], correcta: 2 },
    { id: 27, pregunta: "¿Cuál de las siguientes afirmaciones es correcta, respecto a la técnica de recogida de orina de 24 horas?:", opciones: ["a. Es una técnica estéril", "b. Se recoge la orina desde la segunda micción del primer día", "c. La segunda micción del primer día se desecha", "d. Todas las afirmaciones anteriores son correctas."], correcta: 1 },
    { id: 28, pregunta: "¿Cuál es una característica del anciano frágil?", opciones: ["a. Sufre una o varias enfermedades, que le producen algún riesgo de incapacidad", "b. Sufre problemas mentales", "c. Sufre una enfermedad aguda o crónica sin riesgo de incapacidad", "d. Generalmente, es menor de 70 años."], correcta: 0 },
    { id: 29, pregunta: "LA MESOTERAPIA ES:", opciones: ["a. Terapia estomacal", "b. Parte de la terapia ocupacional", "c. Terapia por masaje", "d. Ninguna de las respuestas anteriores es cierta"], correcta: 2 },
    { id: 30, pregunta: "CUANDO NOS ENCONTRAMOS CON UN EDEMA PERIMALEOLAR, LA POSICIÓN PREFERENTE QUE SE ADOPTARÁ ES:", opciones: ["a. Con los brazos levantados", "b. Elevando las piernas por encima de la horizontal", "c. En posición sentado", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 1 },
    { id: 31, pregunta: "¿Qué es la cinesiterapia?", opciones: ["a. Terapia a través del cine", "b. Terapia a través del movimiento", "c. Terapia a través de micro-ondas", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 1 },
    { id: 32, pregunta: "LA CÉLULAS ENCARGADAS DE TRANSPORTAR EL OXÍGENO SON:", opciones: ["a. Linfocitos", "b. Hematíes", "c. Glóbulos blancos", "d. A, B y C son ciertas"], correcta: 1 },
    { id: 33, pregunta: "LA ERGOTERAPIA ES:", opciones: ["a. Terapia a través del juego", "b. Terapia a través del trabajo", "c. Terapia por micro-ondas", "d. Ninguna de las anteriores es cierta"], correcta: 1 },
    { id: 34, pregunta: "LA RODILLA ESTÁ FORMADA POR ¿CUÁNTAS ARTICULACIONES?...:", opciones: ["a. Una", "b. Dos", "c. Tres", "d. Cuatro"], correcta: 1 },
    { id: 35, pregunta: "LA MÉDULA ÓSEA NORMALMENTE NO ES ACTIVA PARA LA HEMATOPOYESIS MÁS QUE EN CIERTOS PUNTOS DEL ORGANISMO, ¿CUÁL DE ÉSTOS NO ES HABITUAL?:", opciones: ["a. Esternón", "b. Cúbito", "c. Clavícula", "d. Vértebras"], correcta: 1 },
    { id: 36, pregunta: "¿Cuántas vértebras lumbares tenemos?:", opciones: ["a. Tres", "b. Cinco", "c. Siete", "d. Nueve"], correcta: 1 },
    { id: 37, pregunta: "¿Para qué se utiliza la lámpara Solux?:", opciones: ["a. Aplicación de frío", "b. Aplicación de calor", "c. Aplicación de masaje", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 1 },
    { id: 38, pregunta: "El tiempo medio para la administración de un enema deberá ser...:", opciones: ["a. 2 minutos", "b. 5 minutos", "c. 20 minutos", "d. 60 minutos"], correcta: 2 },
    { id: 39, pregunta: "¿Para qué se utilizan los enemas medicamentosos?:", opciones: ["a. Examen radiológico", "b. Administración de medicamentos", "c. Expulsión de gases", "d. Facilitar deposición"], correcta: 1 },
    { id: 40, pregunta: "Decimos que una sustancia es desinfectante cuando...:", opciones: ["a. Mata todos los microorganismos", "b. Mata hongos y bacterias", "c. Mata muchos microorganismos o por lo menos impide su multiplicación", "d. Mata los hongos"], correcta: 2 },
    { id: 41, pregunta: "¿Qué entendemos por enema carminativo?:", opciones: ["a. Enemas para exploración con Rayos X", "b. Enemas de limpieza", "c. Enemas para expulsar gases de colon", "d. Ninguno de los anteriores"], correcta: 2 },
    { id: 42, pregunta: "¿Qué temperatura normal sería la tomada en boca, axila y recto?:", opciones: ["a. 36,5º - 37º - 36º", "b. 37º - 36,5º - 37,5º", "c. 37º - 37,5º - 36,5º", "d. 38º - 37,5º - 36,5º"], correcta: 1 },
    { id: 43, pregunta: "Los testículos son glándulas...:", opciones: ["a. Endocrinas", "b. Exocrinas", "c. Mixtas", "d. Ninguna de las anteriores es cierta"], correcta: 2 },
    { id: 44, pregunta: "¿Cómo se denomina el modo de reproducción de las células sexuales?:", opciones: ["a. Mitosis", "b. Midriasis", "c. Micosis", "d. Meiosis"], correcta: 3 },
    { id: 45, pregunta: "Las fosas nasales tienen la función de...:", opciones: ["a. Humidificar, lubricar y filtrar", "b. Calentar, lubricar y filtrar", "c. Filtrar, secar y calentar", "d. Humidificar, calentar y filtrar"], correcta: 3 },
    { id: 46, pregunta: "¿Cuántas son las vértebras dorsales?:", opciones: ["a. Ocho", "b. Diez", "c. Doce", "d. Catorce"], correcta: 2 },
    { id: 47, pregunta: "De los siguientes alimentos ¿Cuál contiene más hidratos de carbono?:", opciones: ["a. Lentejas", "b. Carne", "c. Pan", "d. Pescado"], correcta: 2 },
    { id: 48, pregunta: "EL PROCESO DE ATENCIÓN DE ENFERMERÍA (P.A.E.) COMO MÉTODO DE TRABAJO, FUE DESCRITO POR:", opciones: ["a. Lidia Hall", "b. M. Rogers", "c. R. Parse", "d. Virginia Henderson"], correcta: 0 },
    { id: 49, pregunta: "¿DE CUÁNTAS ETAPAS SE COMPONE EL P.A.E.?:", opciones: ["a. Una", "b. Dos", "c. Tres", "d. Cinco"], correcta: 3 },
    { id: 50, pregunta: "¿EN QUÉ FASE DEL P.A.E. SE INCLUIRÍA: 'RIESGO DE ESTREÑIMIENTO RELACIONADO CON INMOVILIDAD PROLONGADA'?:", opciones: ["a. Valoración", "b. Diagnóstico de enfermería", "c. Planificación de la intervención", "d. Ejecución"], correcta: 1 },
    { id: 51, pregunta: "SERÁN FUNCIONES DEL AUXILIAR DE ENFERMERÍA:", opciones: ["a. Ayudar al personal médico en la ejecución de intervenciones quirúrgicas", "b. Administrar medicamentos por vía parenteral", "c. Administrar medicación por vía oral, rectal y tópica", "d. Aplicación de tratamientos curativos de carácter no medicamentoso"], correcta: 2 },
    { id: 52, pregunta: "UN INCONVENIENTES DEL TRABAJO EN EQUIPO ES:", opciones: ["a. Conocimiento mutuo de los componentes del equipo", "b. Riesgo de que la responsabilidad se diluya", "c. Presencia de un coordinador", "d. Existencia de reuniones donde se deciden objetivos"], correcta: 1 },
    { id: 53, pregunta: "INDIQUE CUÁL ES UN FACTOR QUE FACILITA LA COMUNICACIÓN INTERPERSONAL PACIENTE/SANITARIO/FAMILIA:", opciones: ["a. Hablar demasiado deprisa", "b. Evitar la terminología científica", "c. La sordera del paciente", "d. Hablar al paciente en momentos inoportunos"], correcta: 1 },
    { id: 54, pregunta: "UN MÉTODO DE COMUNICACIÓN UNIDIRECCIONAL SERÍA:", opciones: ["a. El diálogo", "b. Un folleto", "c. Rol playing", "d. Brainstorming"], correcta: 1 },
    { id: 55, pregunta: "¿CUÁL DE LOS SIGUIENTES ES UN FACTOR CONDICIONANTE DE SALUD?:", opciones: ["a. La información sanitaria", "b. La educación para la salud", "c. Estilos de vida", "d. La gestión de los hospitales"], correcta: 2 },
    { id: 56, pregunta: "EL TIPO DE COMUNICACIÓN QUE DEBE UTILIZAR EL AUXILIAR SANITARIO DESDE EL PUNTO DE VISTA PERSONAL ES EL:", opciones: ["a. Contractual", "b. Solidario", "c. Cooperativo", "d. Asertivo"], correcta: 3 },
    { id: 57, pregunta: "POR ARCHIVO SE ENTIENDE:", opciones: ["a. El conjunto de documentos producidos y conservados por personas o entidades", "b. La institución que administra una documentación", "c. El lugar donde se conservan los documentos", "d. Todas las opciones anteriores son correctas"], correcta: 3 },
    { id: 58, pregunta: "LA ANAMNESIS ES:", opciones: ["a. La historia clínica", "b. El interrogatorio que forma parte de la historia clínica", "c. La falta progresiva de memoria", "d. La hoja de observaciones de enfermería"], correcta: 1 },
    { id: 59, pregunta: "LA HISTORIA CLÍNICA, CON LAS HOJAS QUE LA FORMAN Y CUALQUIER ESTUDIO QUE CONTENGA LA INFORMACIÓN CLÍNICA QUE SE PRODUZCA DURANTE LA ASISTENCIA AL PACIENTE, SE DENOMINA:", opciones: ["a. Anamnesis", "b. Historia general", "c. Documentación clínica", "d. Documentación particular"], correcta: 2 },
    { id: 60, pregunta: "EL MÉTODO DE LIMPIEZA QUE TIENE POR MISIÓN DESTRUIR LOS GÉRMENES PATÓGENOS, PERO QUE NO ELIMINA TODOS LOS MICROORGANISMOS NI SUS FORMAS DE RESISTENCIA SE DENOMINA:", opciones: ["a. Desinfección", "b. Esterilización", "c. Antisepsia", "d. Descontaminación"], correcta: 0 }




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
