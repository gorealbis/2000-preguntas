// BANCO DE PREGUNTAS DEL TEST 39 LIMPIO (Materia técnica de Auxiliar de Enfermería - Bloque de 20)
const questions = [
    { id: 1, pregunta: "LA MESOTERAPIA ES:", opciones: ["a. Terapia estomacal", "b. Parte de la terapia ocupacional", "c. Terapia por masaje", "d. Ninguna de las respuestas anteriores es cierta"], correcta: 2 },
    { id: 2, pregunta: "CUANDO NOS ENCONTRAMOS CON UN EDEMA PERIMALEOLAR, LA POSICIÓN PREFERENTE QUE SE ADOPTARÁ ES:", opciones: ["a. Con los brazos levantados", "b. Elevando las piernas por encima de la horizontal", "c. En posición sentado", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 1 },
    { id: 3, pregunta: "¿Qué es la cinesiterapia?", opciones: ["a. Terapia a través del cine", "b. Terapia a través del movimiento", "c. Terapia a través de micro-ondas", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 1 },
    { id: 4, pregunta: "LAS CÉLULAS ENCARGADAS DE TRANSPORTAR EL OXÍGENO SON:", opciones: ["a. Linfocitos", "b. Hematíes", "c. Glóbulos blancos", "d. A, B y C son ciertas"], correcta: 1 },
    { id: 5, pregunta: "LA ERGOTERAPIA ES:", opciones: ["a. Terapia a través del juego", "b. Terapia a través del trabajo", "c. Terapia por micro-ondas", "d. Ninguna de las anteriores es cierta"], correcta: 1 },
    { id: 6, pregunta: "LA RODILLA ESTÁ FORMADA POR ¿CUÁNTAS ARTICULACIONES?...:", opciones: ["a. Una", "b. Dos", "c. Tres", "d. Cuatro"], correcta: 2 },
    { id: 7, pregunta: "LA MÉDULA ÓSEA NORMALMENTE NO ES ACTIVA PARA LA HEMATOPOYESIS MÁS QUE EN CIERTOS PUNTOS DEL ORGANISMO, ¿CUÁL DE ÉSTOS NO ES HABITUAL?:", opciones: ["a. Esternón", "b. Cúbito", "c. Clavícula", "d. Vértebras"], correcta: 1 },
    { id: 8, pregunta: "¿Cuántas vértebras lumbares tenemos?:", opciones: ["a. Tres", "b. Cinco", "c. Siete", "d. Nueve"], correcta: 1 },
    { id: 9, pregunta: "¿Para qué se utiliza la lámpara Solux?:", opciones: ["a. Aplicación de frío", "b. Aplicación de calor", "c. Aplicación de masaje", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 1 },
    { id: 10, pregunta: "El tiempo medio para la administración de un enema deberá ser...:", opciones: ["a. 2 minutos", "b. 5 minutos", "c. 20 minutos", "d. 60 minutos"], correcta: 2 },
    { id: 11, pregunta: "¿Para qué se utilizan los enemas medicamentosos?:", opciones: ["a. Examen radiológico", "b. Administración de medicamentos", "c. Expulsión de gases", "d. Facilitar deposición"], correcta: 1 },
    { id: 12, pregunta: "Decimos que una sustancia es desinfectante cuando...:", opciones: ["a. Mata todos los microorganismos", "b. Mata hongos y bacterias", "c. Mata muchos microorganismos o por lo menos impide su multiplicación", "d. Mata los hongos"], correcta: 2 },
    { id: 13, pregunta: "¿Qué entendemos por enema carminativo?:", opciones: ["a. Enemas para exploración con Rayos X", "b. Enemas de limpieza", "c. Enemas para expulsar gases de colon", "d. Ninguno de los anteriores"], correcta: 2 },
    { id: 14, pregunta: "¿Qué temperatura normal sería la tomada en boca, axila y recto?:", opciones: ["a. 36,5º - 37º - 36º", "b. 37º - 36,5º - 37,5º", "c. 37º - 37,5º - 36,5º", "d. 38º - 37,5º - 36,5º"], correcta: 1 },
    { id: 15, pregunta: "Los testículos son glándulas...:", opciones: ["a. Endocrinas", "b. Exocrinas", "c. Mixtas", "d. Ninguna de las anteriores es cierta"], correcta: 2 },
    { id: 16, pregunta: "¿Cómo se denomina el modo de reproducción de las células sexuales?:", opciones: ["a. Mitosis", "b. Midriasis", "c. Micosis", "d. Meiosis"], correcta: 3 },
    { id: 17, pregunta: "Las fosas nasales tienen la función de...:", opciones: ["a. Humidificar, lubricar y filtrar", "b. Calentar, lubricar y filtrar", "c. Filtrar, secar y calentar", "d. Humidificar, calentar y filtrar"], correcta: 3 },
    { id: 18, pregunta: "¿Cuántas son las vértebras dorsales?:", opciones: ["a. Ocho", "b. Diez", "c. Doce", "d. Catorce"], correcta: 2 },
    { id: 19, pregunta: "De los siguientes alimentos ¿Cuál contiene más hidratos de carbono?:", opciones: ["a. Lentejas", "b. Carne", "c. Pan", "d. Pescado"], correcta: 2 },
    { id: 4, pregunta: "EL PROCESO DE ATENCIÓN DE ENFERMERÍA (P.A.E.) COMO MÉTODO DE TRABAJO, FUE DESCRITO POR:", opciones: ["a. Lidia Hall", "b. M. Rogers", "c. R. Parse", "d. Virginia Henderson"], correcta: 0 },
    { id: 5, pregunta: "¿DE CUÁNTAS ETAPAS SE COMPONE EL P.A.E.?:", opciones: ["a. Una", "b. Dos", "c. Tres", "d. Cinco"], correcta: 3 },
    { id: 6, pregunta: "¿EN QUÉ FASE DEL P.A.E. SE INCLUIRÍA: 'RIESGO DE ESTREÑIMIENTO RELACIONADO CON INMOVILIDAD PROLONGADA'?:", opciones: ["a. Valoración", "b. Diagnóstico de enfermería", "c. Planificación de la intervención", "d. Ejecución"], correcta: 1 },
    { id: 7, pregunta: "SERÁN FUNCIONES DEL AUXILIAR DE ENFERMERÍA:", opciones: ["a. Ayudar al personal médico en la ejecución de intervenciones quirúrgicas", "b. Administrar medicamentos por vía parenteral", "c. Administrar medicación por vía oral, rectal y tópica", "d. Aplicación de tratamientos curativos de carácter no medicamentoso"], correcta: 2 },
    { id: 10, pregunta: "UN INCONVENIENTE DEL TRABAJO EN EQUIPO ES:", opciones: ["a. Conocimiento mutuo de los componentes del equipo", "b. Riesgo de que la responsabilidad se diluya", "c. Presencia de un coordinador", "d. Existencia de reuniones donde se deciden objetivos"], correcta: 1 },
    { id: 11, pregunta: "INDIQUE CUAL ES UN FACTOR QUE FACILITA LA COMUNICACIÓN INTERPERSONAL PACIENTE/SANITARIO/FAMILIA:", opciones: ["a. Hablar demasiado deprisa", "b. Evitar la terminología científica", "c. La sordera del paciente", "d. Hablar al paciente en momentos inoportunos"], correcta: 1 },
    { id: 12, pregunta: "UN MÉTODO DE COMUNICACIÓN UNIDIRECCIONAL SERÍA:", opciones: ["a. El diálogo", "b. Un folleto", "c. Rol playing", "d. Brainstorming"], correcta: 1 },
    { id: 14, pregunta: "¿CUÁL DE LOS SIGUIENTES ES UN FACTOR CONDICIONANTE DE SALUD?:", opciones: ["a. La información sanitaria", "b. La educación para la salud", "c. Estilos de vida", "d. La gestión de los hospitales"], correcta: 2 },
    { id: 15, pregunta: "EL TIPO DE COMUNICACIÓN QUE DEBE UTILIZAR EL AUXILIAR SANITARIO DESDE EL PUNTO DE VISTA PERSONAL ES EL:", opciones: ["a. Contractual", "b. Solidario", "c. Cooperativo", "d. Asertivo"], correcta: 3 },
    { id: 16, pregunta: "POR ARCHIVO SE ENTIENDE:", opciones: ["a. El conjunto de documentos producidos y conservados por personas o entidades", "b. La institución que administra una documentación", "c. El lugar donde se conservan los documentos", "d. Todas las opciones anteriores son correctas"], correcta: 3 },
    { id: 17, pregunta: "LA ANAMNESIS ES:", opciones: ["a. La historia clínica", "b. El interrogatorio que forma parte de la historia clínica", "c. La falta progresiva de memoria", "d. La hoja de observaciones de enfermería"], correcta: 1 },
    { id: 18, pregunta: "LA HISTORIA CLÍNICA, CON LAS HOJAS QUE LA FORMAN Y CUALQUIER ESTUDIO QUE CONTENGA LA INFORMACIÓN CLÍNICA QUE SE PRODUZCA DURANTE LA ASISTENCIA AL PACIENTE, SE DENOMINA:", opciones: ["a. Anamnesis", "b. Historia general", "c. Documentación clínica", "d. Documentación particular"], correcta: 2 },
    { id: 19, pregunta: "EL MÉTODO DE LIMPIEZA QUE TIENE POR MISIÓN DESTRUIR LOS GÉRMENES PATÓGENOS, PERO QUE NO ELIMINA TODOS LOS MICROORGANISMOS NI SUS FORMAS DE RESISTENCIA SE DEMOMINA:", opciones: ["a. Desinfección", "b. Esterilización", "c. Antisepsia", "d. Descontaminación"], correcta: 0 },
    { id: 20, pregunta: "AL CONJUNTO DE PROCEDIMIENTOS FÍSICOS, QUÍMICOS O MIXTOS, QUE HACE POSIBLE LA ELIMINACIÓN O REDUCCIÓN DE LOS MICROORGANISMOS INFEC-CIOSOS SE DENOMINA:", opciones: ["a. Desinfección", "b. Limpieza", "c. Descontaminación", "d. Esterilización"], correcta: 0 },
    { id: 21, pregunta: "ES UN SISTEMA DE ESTERILIZACIÓN QUÍMICO:", opciones: ["a. El calor seco", "b. El plasma de peróxido/hidrógeno", "c. Las radiaciones", "d. El vapor"], correcta: 1 },
    { id: 22, pregunta: "¿EN QUÉ MOMENTO DEBE HACERSE LA LIMPIEZA DEL INSTRUMENTAL?:", opciones: ["a. Inmediatamente después de usarlo", "b. Preferiblemente después de que se seque", "c. Únicamente transcurridas 24 horas", "d. Solamente si tienen restos de sangre, pero sin residuos sólidos"], correcta: 0 },
    { id: 23, pregunta: "EN LA RELACIÓN A LA SOLICITUD DE LAS PRUEBAS ANALÍTICAS, SEÑALE LA ALTERNATIVA CORRECTA:", opciones: ["a. Debe hacerse siempre por escrito", "b. El enfermero es el profesional que las solicita", "c. Todos los impresos de solicitud de distintas pruebas son iguales", "d. Debe hacerse siempre de forma verbal"], correcta: 0 },
    { id: 24, pregunta: "INDIQUE CUÁL DE LAS SIGUIENTES VIAS NO SE INCLUYE DENTRO DE LA VÍA PARENTERAL:", opciones: ["a. Intradérmica", "b. Intravenosa", "c. Sublingual", "d. Subcutánea"], correcta: 2 },
    { id: 25, pregunta: "LAS TORUNDAS NO SE UTILIZAN PARA LA RECOGIDA DE LAS MUESTRAS DE:", opciones: ["a. Líquido seminal", "b. Exudados de heridas", "c. Secreciones vaginales", "d. Exudados conjuntivales"], correcta: 0 },
    { id: 26, pregunta: "EN LA CONSERVACIÓN DE LAS MUESTRAS, SEÑALE LA ALTERNATIVA INCORRECTA:", opciones: ["a. La orina para análisis microscópico puede mantenerse a temperatura ambiente", "b. Los esputos deben mantenerse refrigerados", "c. El líquido cefalorraquídeo se mantiene a temperatura ambiente", "d. Los fragmentos de raspado de la piel, pelo y uñas se mantienen a temperatura ambiente"], correcta: 0 },
    { id: 27, pregunta: "SON REQUISITOS PARA LA CORRECTA PREPARACIÓN DE LAS MUESTRAS PARA SU TRANS-PORTE TODOS EXCEPTO:", opciones: ["a. La correcta identificación de muestras", "b. Asegurarse de que se acompañan de la documentación necesaria", "c. Controlar las variables que pueden influir en su estabilidad", "d. Exponer las muestras a la luz"], correcta: 3 },
    { id: 28, pregunta: "¿CÓMO SE ENCUENTRA EL PACIENTE SI ESTÁ EN LA POSICIÓN DE DECÚBITO PRONO?", opciones: ["a. Tumbado sobre la espalda", "b. De lado izquierdo", "c. De lado derecho", "d. Tumbado sobre el abdomen"], correcta: 3 },
    { id: 29, pregunta: "PARA BAJAR POR UNA RAMPA CON UNA PERSONA EN SILLA DE RUEDAS:", opciones: ["a. Se camina detrás de la silla y se tira hacia atrás", "b. Se camina detrás de la silla y se empuja hacia delante", "c. Se camina a un lado de la silla y se empuja hacia delante sujetándola", "d. Se camina a un lado de la silla y se tira hacia atrás"], correcta: 0 },
    { id: 30, pregunta: "EL MÉTODO \"ENTRECRUZAMIENTO DE BRAZOS\" SE UTILIZA PARA:", opciones: ["a. Sentar a una persona en un sillón", "b. Poner a una persona encamada en decúbito prono", "c. Levantar a una persona de la cama y ponerla de pie", "d. Ayudar a una persona a ponerse de pie desde el sillón"], correcta: 2 },
    { id: 31, pregunta: "LA POSICIÓN INTERMEDIA ENTRE DECÚBITO PRONO Y DECÚBITO LATERAL SE DENOMINA:", opciones: ["a. Roser", "b. Fowler", "c. Sims", "d. Decúbito supino"], correcta: 2 },
    { id: 32, pregunta: "CON RESPECTO AL ASEO DE LA PERSONA A NUESTRO CARGO:", opciones: ["a. Es aconsejable descubrirla totalmente si está encamada", "b. Está desaconsejada su colaboración", "c. Deben evitarse las zonas sometidas a presión", "d. Se debe completar el aseo de una zona antes de comenzar con la siguiente"], correcta: 3 },
    { id: 33, pregunta: "REFERENTE AL CUIDADO DE LAS UÑAS DE LA PERSONA A NUESTRO CARGO:", opciones: ["a. Las de las manos se cortan en línea recta y con los bordes lisos", "b. Las de las manos se cortan en pico y con el extremo redondeado", "c. Las de los pies se cortan en línea recta y con los bordes lisos", "d. Las de los pies se cortan en línea curva y con los bordes redondeados"], correcta: 2 },
    { id: 34, pregunta: "EN LA POSICIÓN DECÚBITO PRONO, LA PERSONA ENCAMADA TIENDE A DESARROLLAR ÚLCERAS POR PRESIÓN EN:", opciones: ["a. Codos", "b. Nuca", "c. Caderas", "d. Rodillas"], correcta: 3 },
    { id: 35, pregunta: "LAS ETAPAS EN LA FORMACIÓN DE ÚLCERAS POR PRESIÓN SON:", opciones: ["a. Eritema, vesículas y erosión", "b. Erosión, vesícula y eritema", "c. Hiperoxia, erosión y eritema", "d. Hipoxia, erosión y eritema"], correcta: 3 },
    { id: 36, pregunta: "CUANDO APARECEN SÍNTOMAS INESPECÍFICOS DE LA ENFERMEDAD QUE NO PERMITEN LLEGAR A UN DIAGNÓSTICO DEFINITIVO, HABLAMOS DEL:", opciones: ["a. Periodo de convalecencia", "b. Periodo prodómico", "c. Periodo de incubación", "d. Periodo clínico"], correcta: 1 },
    { id: 37, pregunta: "¿A QUÉ HACE REFERENCIA LOS MÉTODOS \"DDD\", DE SANEA-MIENTO ESPECÍFICO, COMO MEDIDA DE PREVENCIÓN SOBRE LOS MECANISMOS DE TRANSMISIÓN DE LAS ENFERMEDADES?", opciones: ["a. Desinfección, desparasitación, desratización", "b. Desparasitación, desinsectación, desratización", "c. Desinfección, declaración, desinsectación", "d. Desinfección, desinsectación, desratización"], correcta: 3 },
    { id: 38, pregunta: "LA FUENTE DE INFECCIÓN MÁS IMPORTANTE ES:", opciones: ["a. El ser humano", "b. Los animales", "c. El suelo", "d. El agua"], correcta: 0 },
    { id: 39, pregunta: "EL TERCER ESLABÓN DE LA CA-DENA EPIDEMIOLÓGICA ES:", opciones: ["a. El agente causal", "b. El mecanismo de transmisión", "c. La fuente de infección", "d. El huésped"], correcta: 1 },
    { id: 40, pregunta: "SE DENOMINA PORTADOR SANO:", opciones: ["a. Aquel que padece la enfermedad y elimina microorganismos", "b. Aquel que elimina microorganismos patógenos antes de que se desarrolle la enfermedad", "c. Aquel que no padece la enfermedad porque tiene inmunidad frente al agente etiológico que porta", "d. Aquel que ha padecido la enfermedad infecciosa, han desaparecido los síntomas, pero elimina microorganismos patógenos"], correcta: 2 },
    { id: 41, pregunta: "ENTRE LOS MECANISMOS DE TRANSMISIÓN DIRECTA DE LAS ENFERMEDADES CUÁL NO SE EN-CUENTRA?:", opciones: ["a. Agua", "b. Besos", "c. Arañazos de personas", "d. Mordeduras de animales"], correcta: 0 },
    { id: 42, pregunta: "LOS DATOS QUE REGISTRAN EL PESO Y LA TALLA, SON DATOS:", opciones: ["a. Antropométricos", "b. Bioquímicos", "c. Médicos y sociales", "d. Dietéticos"], correcta: 0 },
    { id: 43, pregunta: "EL NÚMERO DE RESPIRACIONES NORMALES ES DE:", opciones: ["a. De 5 a 10 respiraciones por minuto", "b. De 12 a 18 respiraciones por minuto", "c. De 20 a 30 respiraciones por minuto", "d. De 60 a 70 respiraciones por minuto"], correcta: 1 },
    { id: 44, pregunta: "¿QUÉ CONSTANTE SE REPRE-SENTA EN LA GRÁFICA DE CONS-TANTES VITALES COMO UNA SERIE DE LÍNEAS VERTICALES CON SUS EXTREMOS EN PUNTA DE FLECHA?", opciones: ["a. La tensión arterial", "b. El pulso", "c. La respiración", "d. La temperatura"], correcta: 0 },
    { id: 45, pregunta: "¿EN QUÉ SITUACIÓN ESTÁ INDI-CADO EL ENEMA DE LIMPIEZA?", opciones: ["a. Después de la extracción de un fecaloma", "b. Después de un enema opaco", "c. Después de una endoscopia", "d. Después de un parto"], correcta: 3 },
    { id: 46, pregunta: "CUANDO SE MIDE LA RESPIRA-CIÓN DE UN PACIENTE SE DEBE VALORAR:", opciones: ["a. Frecuencia, ritmo y simetría", "b. Frecuencia, profundidad y ritmo", "c. Frecuencia, ritmo, profundidad y simetría", "d. Frecuencia, profundidad y simetria"], correcta: 2 },
    { id: 47, pregunta: "¿CUÁL DE LOS SIGUIENTES TIPOS DE SONDAS, NO ES VESI-CAL?", opciones: ["a. Foley", "b. Levin", "c. Robinson", "d. Pezzer"], correcta: 1 }


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
