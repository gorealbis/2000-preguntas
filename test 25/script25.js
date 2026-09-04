// BANCO DE PREGUNTAS DEL TEST 25 CORREGIDO (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 1, pregunta: "CUANDO INGRESA UN PACIENTE DEBEMOS:", opciones: ["a. Comprobar que está identificado y presentarnos", "b. Presentarnos y tomarle la temperatura", "c. Avisar a la enfermera, comprobar que está identificado y presentarnos", "d. Todas son correctas"], correcta: 2 },
    { id: 2, pregunta: "PARA DAR DE COMER A UN PACIENTE SUBIREMOS LA CAMA:", opciones: ["a. 20°", "b. 35°", "c. 45°", "d. 90°"], correcta: 2 },
    { id: 3, pregunta: "CUANDO EL PACIENTE ESTÁ SENTADO, LA PROMINENCIA QUE MÁS SUFRE ES:", opciones: ["a. Los glúteos", "b. El isquion", "c. El sacro", "d. Los talones"], correcta: 1 },
    { id: 4, pregunta: "EN LA POSICIÓN DE DECÚBITO SUPINO, LA ALMOHADA A LA ALTURA DE LOS GEMELOS:", opciones: ["a. Nos deja los talones al aire, para quitar presión en ellos", "b. Evita que las rodillas estén en extensión", "c. Ayuda a que el paciente esté más cómodo", "d. Todas son correctas"], correcta: 0 },
    { id: 5, pregunta: "SI UTILIZAMOS VASELINA LÍQUIDA O ACEITE PARA HIDRATAR EL CUERPO, LA PIEL DEBE ESTAR:", opciones: ["a. La tendremos que secar muy bien", "b. Tendrá que estar húmeda", "c. Da igual, de las dos formas se hidrata la piel", "d. Ninguna es correcta"], correcta: 1 },
    { id: 6, pregunta: "EL LAVADO HIGIÉNICO DEL PACIENTE DEBE REALIZARSE CON UN JABÓN CON UN PH:", opciones: ["a. Ácido", "b. Básico", "c. Neutro", "d. Extremadamente ácido"], correcta: 2 },
    { id: 7, pregunta: "DENOMINAMOS ANURIA A:", opciones: ["a. Ausencia en la producción de orina", "b. Producción baja de orina, normalmente menos de 500 ml./día", "c. Producción de orina en cantidades anormalmente grandes", "d. Dificultad o dolor en la micción"], correcta: 0 },
    { id: 8, pregunta: "EN LA APARICIÓN DE ÚLCERAS POR PRESIÓN, ¿CUÁL DE LOS SIGUIENTES ES UN FACTOR DE RIESGO?:", opciones: ["a. Inmovilidad", "b. Incontinencia", "c. A y b son correctas", "d. Ninguna de las anteriores"], correcta: 2 },
    { id: 9, pregunta: "SE NOS INDICA COLOCAR LA CAMA DEL PACIENTE EN POSICIÓN DE FOWLER, ES DECIR:", opciones: ["a. Con la cabecera elevada un ángulo de 30-45° y rodilla flexionadas o horizontales", "b. Totalmente recta, paralela al suelo", "c. Con la cabecera de cama baja y pies elevados", "d. En decúbito lateral con soporte almohadillado"], correcta: 0 },
    { id: 10, pregunta: "CON RESPECTO AL LAVADO DE MANOS, SEÑALA LA RESPUESTA CORRECTA:", opciones: ["a. No es necesario en los hospitales", "b. Es una de las medidas más eficaces para luchar contra las infecciones", "c. Sólo es necesario después de prestar cualquier cuidado", "d. Debe durar un mínimo de 15 minutos"], correcta: 1 },
    { id: 11, pregunta: "DESINFECTANTE Y ANTISÉPTICO:", opciones: ["a. Son lo mismo", "b. Un desinfectante es un preparado químico que se aplica sobre piel y tejidos y un antiséptico se aplica sobre objetos inanimados", "c. Un desinfectante es un preparado químico que se aplica sobre objetos inanimados y un antiséptico se aplica sobre piel o tejidos", "d. Ambas son incorrectas"], correcta: 2 },
    { id: 12, pregunta: "EN EL PROCESO DE COMUNICACIÓN, EL MENSAJE QUE EL RECEPTOR DEVUELVE AL EMISOR SE DENOMINA:", opciones: ["a. Feedback", "b. Respuesta", "c. A y b son correctas", "d. Interferencia"], correcta: 2 },
    { id: 13, pregunta: "¿CUÁL DE LAS SIGUIENTES AFIRMACIONES ES CORRECTA EN EL CUIDADO DE UN PACIENTE CON SONDA VESICAL?:", opciones: ["a. Se debe mantener la bolsa de diuresis más baja que la sonda para evitar reflujos", "b. Evitar acodamientos de la sonda y del circuito de drenaje para facilitar la salida de la orina", "c. A y b son correctas", "d. La bolsa debe colgarse directamente de la barandilla móvil"], correcta: 2 },
    { id: 14, pregunta: "LAS PRÓTESIS BUCALES EN LOS PACIENTES INCONSCIENTES:", opciones: ["a. Hay que retirarlas siempre", "b. Hay que retirarlas sólo por las noches", "c. Hay que dejarlas puestas", "d. Hay que retirarlas para su limpieza y volverlas a colocar"], correcta: 0 },
    { id: 15, pregunta: "LOS ENEMAS ORDINARIOS PARA LIMPIAR EL INTESTINO GRUESO PROVOCANDO LA EVACUACIÓN RÁPIDA DE LAS HECES, SE DENOMINAN:", opciones: ["a. Enema ciego", "b. Enema evacuador o de limpieza", "c. Enema de retención", "d. Enema medicamentoso"], correcta: 1 },
    { id: 16, pregunta: "ORDEN A SEGUIR AL HACER EL ASEO DE UNA PERSONA ENCAMADA:", opciones: ["a. Cara, orejas, cuello, tórax, brazos y manos, abdomen, espalda, muslos, piernas y pies", "b. Cara, orejas, cuello, abdomen, región púbica y miembros superiores e inferiores", "c. Cara, orejas, cuello, región púbica, tórax, abdomen y miembros superiores e inferiores", "d. El orden es totalmente indiferente"], correcta: 0 },
    { id: 17, pregunta: "UNA CAUSA FRECUENTE DE INCONTINENCIA URINARIA EN PERSONAS MAYORES ES:", opciones: ["a. Demencia severa", "b. Infecciones", "c. Enfermedad neurológica avanzada", "d. Todas las anteriores"], correcta: 3 },
    { id: 18, pregunta: "SEGÚN LA ESCALERA ANALGÉSICA DE LA O.M.S., LA MORFINA PERTENECERÍA A:", opciones: ["a. El primer escalón", "b. El segundo escalón", "c. El tercer escalón", "d. El cuarto escalón"], correcta: 2 },
    { id: 19, pregunta: "SE DENOMINA APNEA A:", opciones: ["a. Aumento de la frecuencia respiratoria", "b. Disminución de la frecuencia respiratoria", "c. El cese de la respiración", "d. El esfuerzo respiratorio aumentado"], correcta: 2 },
    { id: 20, pregunta: "ENTRE LAS LOCALIZACIONES MÁS FRECUENTES DE LAS ÚLCERAS POR PRESIÓN NO SE ENCUENTRA:", opciones: ["a. Abdomen", "b. Sacro", "c. Talón", "d. Maléolos"], correcta: 0 },
    { id: 21, pregunta: "LA INFLAMACIÓN DE LA CONJUNTIVA OCULAR PRODUCIDA POR INFECCIONES, TRAUMATISMOS O PROBLEMAS ALÉRGICOS SE DENOMINA:", opciones: ["a. Conjuntivitis", "b. Glaucoma", "c. Catarata", "d. Blefaritis"], correcta: 0 },
    { id: 22, pregunta: "¿EN QUÉ ESCALÓN DE LA ESCALA ANALGÉSICA DE LA O.M.S. SE ENCUENTRA LA CODEÍNA?:", opciones: ["a. 2º escalón", "b. 3º escalón", "c. 4º escalón", "d. 1er escalón"], correcta: 0 },
    { id: 23, pregunta: "¿A QUÉ SE LLAMA XEROSTOMÍA?:", opciones: ["a. Sequedad de boca", "b. Sequedad de la piel", "c. Maceración de la piel por excesiva humedad de la misma", "d. Fisura anal"], correcta: 0 },
    { id: 24, pregunta: "DE LA DEFINICIÓN DE CUIDADOS PALIATIVOS DE LA O.M.S. DE 2002, SE DEDUCE QUE DICHOS CUIDADOS NO INTENTAN:", opciones: ["a. Ayudarle a la familia en el duelo", "b. Posponer la muerte a toda costa", "c. Tratar impecablemente el dolor", "d. Dar soporte vital básico"], correcta: 1 },
    { id: 25, pregunta: "UNO DE LOS PRINCIPALES INCONVENIENTES DE LA ESTERILIZACIÓN CON AUTOCLAVE ES:", opciones: ["a. Alta contaminación del medio ambiente", "b. Su elevado coste", "c. Deteriora los materiales plásticos", "d. Es un método muy lento"], correcta: 2 },
    { id: 26, pregunta: "SEÑALE CUÁL DE LAS SIGUIENTES ACTIVIDADES NO SE ENCUENTRA ENTRE LAS FUNCIONES DEL CENTRO DE SALUD:", opciones: ["a. Promoción de la salud, prevención y asistencia de las enfermedades", "b. Rehabilitación", "c. Establecer los cauces de coordinación con otros niveles asistenciales", "d. Gestión de urgencias mayores de tercer nivel"], correcta: 3 },
    { id: 27, pregunta: "LA ZONA BÁSICA DE SALUD:", opciones: ["a. Es el marco territorial de intervención de la Atención Primaria y donde se desarrolla la actividad, el Centro de Salud", "b. Es el territorio que rodea a los Centros de Salud", "c. Es la zona donde desarrollan su actividad los profesionales", "d. Es el hospital de referencia"], correcta: 0 },
    { id: 28, pregunta: "LOS E.A.P. (EQUIPOS DE ATENCIÓN PRIMARIA):", opciones: ["a. Realizan las actividades de prevención en los Centros de Salud", "b. Organizan y llevan a cabo actividades encaminadas a la promoción, prevención, asistencia y rehabilitación de la salud", "c. Organizan las consultas externas y visitas domiciliarias", "d. Son de uso exclusivo administrativo"], correcta: 1 },
    { id: 29, pregunta: "LA ESCALA DE BARTHEL VALORA:", opciones: ["a. El grado de autonomía en las actividades de la vida diaria", "b. El deterioro cognitivo", "c. El riesgo de aparición de úlceras por presión", "d. El estado afectivo de la persona"], correcta: 0 },
    { id: 30, pregunta: "¿CUÁL ES EL FACTOR EXTRÍNSECO QUE PREDISPONE A LA APARICIÓN DE ÚLCERAS POR PRESIÓN (UPP)?:", opciones: ["a. Fricción", "b. Deshidratación", "c. Disminución de la conciencia", "d. Edad avanzada"], correcta: 0 },
    { id: 31, pregunta: "CUANDO REALIZAMOS UN BALANCE HÍDRICO CONSIDERAMOS:", opciones: ["a. Los ingresos de líquidos en el organismo", "b. Las pérdidas de líquidos en el organismo", "c. A y b son ciertas", "d. Ninguna es cierta"], correcta: 2 },
    { id: 32, pregunta: "ALTERACIÓN OBSERVABLE EN PIEL ÍNTEGRA, RELACIONADA CON LA PRESIÓN, SE MANIFIESTA POR ERITEMA CUTÁNEO QUE NO PALIDECE AL PRESIONAR:", opciones: ["a. UPP grado 1", "b. Lesión por humedad", "c. Absceso", "d. UPP grado 2"], correcta: 0 },
    { id: 33, pregunta: "CUANDO SE ADMINISTRA UN ENEMA, ES NECESARIO PARA INTRODUCIR LA SONDA:", opciones: ["a. Procurar intimidad y lavarse las manos", "b. Limpiar la zona e introducir la sonda hasta el final", "c. Lubricar la sonda rectal e insertarla suavemente con movimientos giratorios, dirigidos hacia el ombligo", "d. Todas las respuestas anteriores son correctas"], correcta: 2 },
    { id: 34, pregunta: "LOS MÉTODOS DE ESTERILIZACIÓN UTILIZADOS CON MAYOR FRECUENCIA SON:", opciones: ["a. Calor húmedo, gas, agua hirviendo y radiación", "b. Vapor, óxido, agua y luz", "c. Antisépticos, jabón, cloro y fenol", "d. El calor húmedo o autoclave"], correcta: 3 },
    { id: 35, pregunta: "PRÁCTICA QUE ES UTILIZADA EN TODAS LAS INTERVENCIONES PARA MANTENER UNA ZONA U OBJETO LIBRE DE MICROORGANISMOS Y ESPORAS:", opciones: ["a. Técnica estéril", "b. Técnica médica", "c. Técnica limpia", "d. Antisepsia concurrente"], correcta: 0 },
    { id: 36, pregunta: "UNO DE LOS FACTORES MÁS IMPORTANTES DEL APOYO A LA FAMILIA DEL ENFERMO AGONIZANTE ES:", opciones: ["a. Utilizar la comunicación terapéutica con el fin de facilitar la expresión de sentimientos", "b. Sustituir a la familia del enfermo permitiendo que se aleje y distraiga", "c. Realizar los cuidados del aseo sin permitir que participe la familia", "d. Mantener la habitación totalmente a oscuras"], correcta: 0 },
    { id: 37, pregunta: "LOS TUBOS DE DRENAJE Y ASPIRACIÓN SE INSERTAN EN HERIDAS QUIRÚRGICAS PARA:", opciones: ["a. Ser suturados a través de la línea de incisión", "b. Limpiar la herida siguiendo los pasos del protocolo establecido para ese fin", "c. Permitir la salida del líquido serosanguinolento en exceso y promover la cicatrización de los tejidos subyacentes", "d. Fijar el apósito estéril"], correcta: 2 },
    { id: 38, pregunta: "LA AUXILIAR DE ENFERMERÍA QUE HA DESARROLLADO LA CAPACIDAD DE LA ESCUCHA ACTIVA, ENTIENDE QUE ESA TÉCNICA EXIGE:", opciones: ["a. Absorber tanto el contenido como el sentimiento que transmite la persona sin hacer selecciones", "b. Presuponer las necesidades del paciente", "c. Adoptar una postura profesional cerrada", "d. Interrumpir constantemente para corregir"], correcta: 0 },
    { id: 39, pregunta: "DECIMOS QUE UNA COMUNICACIÓN ES CONGRUENTE CUANDO:", opciones: ["a. Las relaciones entre el emisor y el receptor influyen en el proceso", "b. Los aspectos verbales y no verbales del mensaje se corresponden", "c. El lenguaje corporal y la comunicación no verbal no están presentes", "d. Solo se utiliza la vía escrita"], correcta: 1 },
    { id: 40, pregunta: "EL EQUIPO DE CUIDADOS PALIATIVOS DEBE FACILITAR LOS CUIDADOS:", opciones: ["a. En el Hospital", "b. En el domicilio", "c. Donde el paciente y su familia decidan, acompañándoles en el proceso, y respetando esta decisión", "d. Únicamente de forma ambulatoria"], correcta: 2 },
    { id: 41, pregunta: "LA ESCALA QUE MIDE LAS ACTIVIDADES INSTRUMENTALES DE LA VIDA DIARIA ES:", opciones: ["a. Escala de Edmonton", "b. Índice de Lawton", "c. Mini-mental", "d. Escala de Braden"], correcta: 1 },
    { id: 42, pregunta: "¿QUÉ TIPO DE AISLAMIENTO SE DEBE EMPLEAR ANTE UN PACIENTE CON TUBERCULOSIS PULMONAR?:", opciones: ["a. Asepsia o aislamiento inverso", "b. Asepsia o protección respiratoria", "c. Asepsia de protección entérica", "d. Aislamiento protector estándar"], correcta: 1 },
    { id: 43, pregunta: "LA ESTERILIZACIÓN:", opciones: ["a. Destruye las bacterias, virus, hongos y cualquier forma de vida", "b. No es capaz de destruir el virus del SIDA", "c. No destruye formas de resistencia de las bacterias (esporas)", "d. Solo elimina la carga fúngica superficial"], correcta: 0 },
    { id: 44, pregunta: "LA ALIMENTACIÓN PARENTERAL CONSISTE EN:", opciones: ["a. Administración de nutrientes por vía endovenosa", "b. Administración de alimentos por sonda vesical", "c. Administración de alimentos por sonda nasogástrica", "d. Infusión directa a través del colon"], correcta: 0 },
    { id: 45, pregunta: "LOS OZONIZADORES SIRVEN PARA:", opciones: ["a. Esterilizar quirófanos", "b. Esterilizar aire ambiente", "c. Esterilizar habitaciones de enfermos", "d. Todas son ciertas"], correcta: 3 },
    { id: 46, pregunta: "AL CONJUNTO DE MEDIOS Y PROCEDIMIENTOS ENCAMINADOS A ASEGURAR A TODOS LOS INTEGRANTES DE LA COMUNIDAD ACCIONES DE PROMOCIÓN, PREVENCIÓN Y RECUPERACIÓN DE LA SALUD, JUNTO A MEDIDAS QUE AYUDEN A MEJORAR SU NIVEL DE SALUD, SE LLAMA:", opciones: ["a. Atención Continuada", "b. Atención Integral", "c. Atención Primaria", "d. Atención en Equipo"], correcta: 1 },
    { id: 47, pregunta: "NO ES UN DERECHO DEL ENFERMO:", opciones: ["a. Ser escuchado", "b. El respeto a su intimidad", "c. A elegir su medicación", "d. A que no se experimente con él"], correcta: 2 },
    { id: 48, pregunta: "UN PACIENTE CON ÍNDICE DE MASA CORPORAL DE 28 TIENE:", opciones: ["a. Sobrepeso", "b. Normopeso", "c. Obesidad", "d. Obesidad mórbida"], correcta: 0 },
    { id: 49, pregunta: "EL AUTOCLAVE ES UN MECANISMO DE ESTERILIZACIÓN:", opciones: ["a. Biológico", "b. Mecánico", "c. Fraccionado", "d. Químico"], correcta: 1 },
    { id: 50, pregunta: "SEÑALE LA RESPUESTA FALSA, EN REFERENCIA A LA ESCALA DE BARTHEL:", opciones: ["a. La puntuación 100 (90 si va en silla de ruedas) es para la máxima independencia", "b. Se utiliza para la valoración A.V.D. Básicas", "c. Se utiliza para la valoración A.V.D. Instrumentales", "d. Contiene 10 ítems"], correcta: 2 },
    { id: 51, pregunta: "¿CUÁL DE ESTOS NO ES INSTRUMENTAL DE HEMOSTASIA?:", opciones: ["a. Pinzas de Pean", "b. Pinzas de Kocher", "c. Mosquitos", "d. Pinzas de Jones"], correcta: 3 },
    { id: 52, pregunta: "LA PRINCIPAL MEDIDA PARA EVITAR INFECCIÓN NOSOCOMIAL ES:", opciones: ["a. La utilización siempre de mascarilla", "b. El lavado de manos", "c. El uso de guantes estériles", "d. La desinfección del material con glutaraldehído durante 7 minutos"], correcta: 1 },
    { id: 53, pregunta: "EL COLOR DE LAS HECES NEGRAS, PEGAJOSAS Y MALOLIENTES, INDICAN LA PRESENCIA DE SANGRE DIGERIDA CORRESPONDIENTE A:", opciones: ["a. Tracto digestivo bajo", "b. Tracto rectal", "c. Tracto digestivo alto", "d. Zona rectal"], correcta: 2 },
    { id: 54, pregunta: "ANTE UN POSIBLE CASO DE PARADA CARDIO-RESPIRATORIA, ¿CÓMO VALORARÍA EL NIVEL DE CONCIENCIA DEL INDIVIDUO?:", opciones: ["a. Aplicando la escala de Glasgow", "b. Sacudiendo al paciente y gritándole con energía 'oiga qué le pasa'", "c. Aplicando la regla ALEC", "d. Tratando de conversar con él"], correcta: 1 },
    { id: 55, pregunta: "DENTRO DE LAS MEDIDAS DE PREVENCIÓN EN ACCIDENTES DE RIESGO BIOLÓGICO:", opciones: ["a. No están contemplados los elementos de protección de barrera", "b. Las normas de higiene personal de los trabajadores se consideran precaución universal", "c. La desinfección correcta de instrumental es una medida preventiva opcional", "d. El protocolo de actuación ante infección por VIH no es una medida de prevención"], correcta: 1 },
    { id: 56, pregunta: "LOS ÁCIDOS GRASOS HIPEROXIGENADOS CUMPLEN LAS SIGUIENTES FUNCIONES EXCEPTO UNA:", opciones: ["a. Aumentan la tonicidad cutánea", "b. Tienen efecto antiséptico", "c. Mejorar la microcirculación", "d. Evitan la deshidratación de la piel"], correcta: 1 },
    { id: 57, pregunta: "DEFINICIÓN DE ALGOR MORTIS:", opciones: ["a. La decoloración de la piel que aparece en las zonas inferiores del cuerpo después de la muerte", "b. La disminución gradual de la temperatura del cuerpo después de la muerte", "c. El aumento del funcionamiento del hipotálamo antes de la muerte", "d. Todas son correctas"], correcta: 1 },
    { id: 58, pregunta: "LA ESCALA DE BRADEN MIDE:", opciones: ["a. El estado nutricional de los pacientes", "b. El riesgo de caída de los pacientes", "c. El riesgo de desarrollar Úlceras por Presión (UPP)", "d. El estado de la piel, la actividad y la exposición a la humedad"], correcta: 2 },
    { id: 59, pregunta: "LA MUESTRA DE LÍQUIDO CÉFALO-RAQUÍDEO DEBE SER CONSERVA-DA:", opciones: ["a. Humedad relativa del aire >70%", "b. En estufa a 35-37°C", "c. Refrigerada a 0°C", "d. Ninguna es correcta"], correcta: 1 },
    { id: 60, pregunta: "LA NECROSIS DE LA PIEL Y TEJIDOS SUBYACENTES DEBIDO A UNA COMPRESIÓN ENTRE UNA PROTUBERANCIA ÓSEA Y UNA SUPERFICIE DURA SE DENOMINA:", opciones: ["a. Eczema", "b. Eritema", "c. Edema", "d. Escara"], correcta: 3 }


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
