// BANCO DE PREGUNTAS DEL TEST 42 NUEVO (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 22, pregunta: "¿CÓMO SUBIR A UN PACIENTE EN LA CAMA HACIA EL CABECERO, SI ÉSTE COLABORA?", opciones: ["a) Poner la cama en posición horizontal o en ligero Trendelemburg", "b) Pedimos al paciente que estire las rodillas y que coloque los pies de tal manera que no pueda impulsarse con ellos", "c) Comprobar que la cama no esté frenada"], correcta: 0 },
    { id: 23, pregunta: "SEÑALE CUÁL ES UNA ALTERACIÓN FRECUENTE EN EL ENVEJECIMIENTO:", opciones: ["a) Aumento del olfato", "b) Pérdida de la autoestima", "c) Aumento del gusto"], correcta: 1 },
    { id: 24, pregunta: "¿QUÉ SERIE DE NORMAS DEBEMOS CUMPLIR, PARA MOVILIZAR CORRECTAMENTE AL PACIENTE ENCAMADO?", opciones: ["a) Procurar no realizar el esfuerzo con los grupos musculares mayores y más fuertes, como piernas y muslos", "b) Alejarnos lo más posible de la cama del enfermo para que el esfuerzo sea menor", "c) Cuando sea posible debe actuar más de una persona"], correcta: 2 },
    { id: 25, pregunta: "CAMBIOS FISIOLÓGICOS Y MORFOLÓGICOS EN LA PIEL, ASOCIA-DOS AL ENVEJECIMIENTO:", opciones: ["a) Disminuye el vello en zonas como nariz y orejas", "b) Uñas hiperqueratósicas en los pies", "c) Buena pigmentación"], correcta: 1 },
    { id: 26, pregunta: "EN EL BAÑO COMPLETO EN LA CAMA, ¿POR QUÉ PARTE DEL CUERPO DEBEMOS COMENZAR?", opciones: ["a) Abdomen; insistir en la limpieza del ombligo", "b) Tórax y mamas; en especial la zona submamaria", "c) Cara, cuello y orejas"], correcta: 2 },
    { id: 27, pregunta: "¿QUÉ PRETENDE REDUCIR LA PREVENCIÓN PRIMARIA DE LA SALUD MENTAL?", opciones: ["a) La incidencia", "b) La prevalencia", "c) La transcendencia"], correcta: 0 },
    { id: 28, pregunta: "CARACTERÍSTICAS DE LA DEPRESIÓN:", opciones: ["a) Interés por el aspecto físico", "b) Autoestima, empatía", "c) Cansancio y apatía"], correcta: 2 },
    { id: 29, pregunta: "EN UN CUADRO DE AGITACIÓN PSICOMOTRIZ, ¿QUÉ DEBEMOS HACER?", opciones: ["a) Aplicar sujeción mecánica solamente en manos", "b) Potenciar los estímulos con luz, ruidos, etc.", "c) Retirar objetos punzantes, gafas, cinturones, objetos de la habitación que sean superfluos"], correcta: 2 },
    { id: 30, pregunta: "EN UN CUADRO DEPRESIVO, ¿QUÉ ATENCIÓN DEBEMOS PRESTAR A LOS PACIENTES?", opciones: ["a) Debemos potenciar comentarios como: 'Pero si la vida es bella' o 'Es una cobardía matarse'", "b) Es conveniente para el paciente tener gran cantidad de visitas", "c) Nunca ignorar las señales de suicidio, una medida eficaz es nuestra presencia a su lado, y comunicarlo a su médico"], correcta: 2 },
    { id: 31, pregunta: "¿QUÉ TIPO DE ENFERMEDAD MENTAL PODEMOS INCLUIR DENTRO DE LOS TRASTORNOS NEURÓTICOS SECUNDARIOS A SITUACIONES ESTRESANTES O SOMATOMORFOS?", opciones: ["a) Trastornos psicóticos", "b) Trastornos de ansiedad", "c) Trastorno de ansiedad orogenias"], correcta: 1 },
    { id: 32, pregunta: "LOS OBJETIVOS DE LA ATENCIÓN EN RESIDENCIAS GERIÁTRICAS SON:", opciones: ["a) Atención de las necesidades personales básicas, terapéuticas y socioculturales de los mayores", "b) Mantener el máximo grado de autonomía de los mayores que se alojen en las mismas", "c) Ambas son ciertas"], correcta: 2 },
    { id: 33, pregunta: "PARA PREVENIR CONTAGIOS ANTE MANIPULACIÓN DE SANGRE O FLUIDOS BIOLÓGICOS PARA SU SEGURIDAD, ¿QUÉ MÉTODOS UTILIZARÍA?", opciones: ["a) Lavado de manos, guantes, mascarilla", "b) Anteojos, calzado antideslizante, bata", "c) Vestimenta especial, lavado de manos"], correcta: 0 },
    { id: 34, pregunta: "¿CUÁLES SON LAS VACUNACIONES ESPECIALMENTE INDICADAS POR MAYOR RIESGO, PARA TODOS LOS TRABAJADORES SANITARIOS?", opciones: ["a) Hepatitis A, Meningococo y Fiebre Tifoidea", "b) Gripe, Hepatitis B, Rubeola, Sarampión", "c) La A y la B son correctas"], correcta: 1 },
    { id: 35, pregunta: "¿CUÁL DE LAS SIGUIENTES ES LA DEFINICIÓN DE RESIDENCIA ASISTIDA?", opciones: ["a) Centro destinado a la atención social de personas mayores que, valiéndose por sí mismas para las actividades de la vida diaria por distintas circunstancias, no pueden permanecer en su propio domicilio", "b) Centro destinado a la atención social de personas mayores afectadas de minusvalías físicas o psíquicas que requieren, además de los cuidados ordinarios, una atención de enfermería y vigilancia médica", "c) Dispositivo sanitario en régimen de internamiento"], correcta: 1 },
    { id: 36, pregunta: "SEÑALE CUÁL DE LOS SIGUIENTES PROGRAMAS NO DEBE IMPLEMENTAR UN CENTRO DE SALUD MENTAL, SEGÚN EL PLAN DE SALUD MENTAL DE ARAGÓN:", opciones: ["a) Programas de atención a pacientes graves que incluyan prevención secundaria", "b) La atención en unidades de agudos de sus correspondientes pacientes", "c) Los programas de promoción de la salud mental dirigidos a personas sanas, incluido el medio escolar"], correcta: 2 },
    { id: 37, pregunta: "SEÑALE, DE ENTRE LAS SIGUIENTES, UNA DE LAS FUNCIONES DE LOS CENTROS DE LA SALUD MENTAL:", opciones: ["a) Los Centros de Salud Mental son los responsables de articular el proceso asistencial y la continuidad de los cuidados del enfermo mental", "b) El Centro de Salud Mental no gestiona las derivaciones a los recursos más especializados de la red", "c) La hospitalización breve y/o ambulatoria"], correcta: 0 },
    { id: 38, pregunta: "ENTRE LAS COMPETENCIAS DEL AUXILIAR EN SALUD MENTAL NO ESTÁ CONTEMPLADA UNA DE LAS SIGUIENTES, SEÑALA CUÁL:", opciones: ["a) En general, realizará todas aquellas actividades que tengan un carácter profesional sanitario", "b) Colaborar en cualquier tarea urgente no prevista en el Plan individualizado de Tratamiento", "c) Vigilar y observar la conducta de los enfermos, con el fin de prevenir"], correcta: 0 },
    { id: 39, pregunta: "CON EL FIN DE POSIBILITAR UNA ADECUADA ORDENACIÓN DE LA ATENCIÓN AL ENFERMO SOCIO-SANITARIO:", opciones: ["a) Se valorará la necesidad y se priorizarán las actividades a realizar, en función de la condición del usuario", "b) Se impulsará la creación de una red de cuidados paliativos domiciliarios, hospitales de media y larga estancia y servicios sociosanitarios", "c) Se ofrecerá atención especializada a aquellos pacientes que hayan satisfecho las cuotas requeridas"], correcta: 1 },
    { id: 40, pregunta: "LOS CENTROS HOSPITALARIOS:", opciones: ["a)... desarrollarán funciones estrictamente asistenciales en régimen de internamiento", "b)... desarrollarán, además de las áreas estrictamente asistenciales, funciones de promoción de la salud, prevención de las enfermedades y de investigación y docencia", "c)... se encargan de los internamientos clínicos y su actividad no se considera complementaria de las realizadas en la red de atención primaria"], correcta: 1 },
    { id: 41, pregunta: "EL VENDAJE EN OCHO SE UTILIZA SOBRE TODO EN:", opciones: ["a) Cabeza", "b) Dedos", "c) Articulaciones"], correcta: 2 },
    { id: 42, pregunta: "EN LOS CUIDADOS POSTMORTEM LA PRIMERA MANIOBRA A REALIZAR ES:", opciones: ["a) Lavar el cuerpo", "b) Retirar drenajes y sondas", "c) Taponar orificios naturales"], correcta: 1 },
    { id: 43, pregunta: "LA QUEMADURA EN LA QUE SE HA PRODUCIDO NECROSIS DE LOS TEJIDOS Y QUE EVOLUCIONA HACIA LA FORMACIÓN DE ESCARA ES DE GRADO:", opciones: ["a) 3", "b) 2", "c) 4"], correcta: 0 },
    { id: 44, pregunta: "EN CUALQUIER PROCESO DE ENFERMEDAD TERMINAL EN EL ANCIANO, UNO DE LOS OBJETIVOS ES:", opciones: ["a) La atención diaria de las necesidades del anciano", "b) La elaboración de un testamento vital", "c) La atención debe centrarse en la presencia de la muerte"], correcta: 0 },
    { id: 45, pregunta: "LA ELABORACIÓN DE UN TESTAMENTO VITAL:", opciones: ["a) Es un método de modular el miedo que produce la muerte", "b) Es una tarea que debe realizar el anciano cuando padece una enfermedad terminal y la muerte es inminente", "c) Es un documento que recoge los acontecimientos más importantes de la vida del paciente"], correcta: 0 },
    { id: 46, pregunta: "A LA MÍNIMA CANTIDAD DE ENERGÍA QUE NECESITA EL ORGANISMO PARA MANTENER LA VIDA EN CONDICIONES DE AYUNO, RELAJACIÓN, REPOSO Y TEMPERATURA EXTERIOR APROPIADA SE DENOMINA:", opciones: ["a) Metabolismo total", "b) Metabolismo basal", "c) Balance energético"], correcta: 1 },
    { id: 47, pregunta: "LOS NUTRIENTES QUE ORGANIZAN Y FACILITAN LOS PROCESOS METABÓLICOS SON:", opciones: ["a) Energéticos", "b) Plásticos", "c) Reguladores"], correcta: 2 },
    { id: 48, pregunta: "EN LA NUTRICIÓN ENTERAL, LA VÍA DE ADMINISTRACIÓN PUEDE SER:", opciones: ["a) Por boca", "b) Por vía periférica", "c) Por sondaje de implantación quirúrgica"], correcta: 2 },
    { id: 49, pregunta: "¿CUÁL ES EL OBJETIVO DEL USO TERAPÉUTICO DE LA ACTIVIDAD?", opciones: ["a) La Actividad", "b) La Autonomía", "c) La Terapia Ocupacional"], correcta: 1 },
    { id: 50, pregunta: "EL SERVICIO SOCIAL ESPECIALIZADO QUE OFRECE DURANTE EL DÍA ATENCIÓN A LAS NECESIDADES BÁSICAS TERAPÉUTICAS Y SOCIOCULTURALES DE PERSONAS AFECTADAS POR DIFERENTES GRADOS DE DEPENDENCIA, PROMOVIENDO SU AUTONOMÍA Y PERMANENCIA EN SU ENTORNO Y APOYO FAMILIAR, SE REALIZA EN:", opciones: ["a) Pensiones concertadas", "b) Estancias temporales", "c) Centro de día"], correcta: 2 },
    { id: 51, pregunta: "LA FINALIDAD DE LA SUSPENSOTERAPIA ES:", opciones: ["a) Proporcionar un movimiento pasivo continuo en las articulaciones", "b) Suprimir el efecto de la gravedad, de tal manera que con una mínima contracción muscular sea posible conseguir movilizar un miembro", "c) Se aplica a pacientes que presentan atrofia o parálisis de los grupos musculares proximales"], correcta: 1 },
    { id: 52, pregunta: "NO ES UN PRINCIREO DE LA PRÁCTICA REHABILITADORA DE LOS ANCIANOS:", opciones: ["a) Se debe estimular la máxima colaboración", "b) Se comienza siempre con tratamientos simples", "c) Las sensaciones terapéuticas deben ser intensas para conseguir la rápida recuperación"], correcta: 2 },
    { id: 53, pregunta: "EL LLANTO DEL PACIENTE (O FAMILIARES) ES UNA RESPUESTA QUE CONDICIONA AL PROFESIONAL, POR LO QUE ÉSTE DEBERÁ:", opciones: ["a) Involucrarse afectivamente con el paciente", "b) Mantenerse más cercano a sus preocupaciones", "c) Procurar mantener la neutralidad"], correcta: 2 },
    { id: 54, pregunta: "¿CUÁL DE LAS SIGUIENTES OPCIONES NO FACILITA EL BUEN DESARROLLO DE LOS EQUIPOS MULTIDISCIPLINARES?", opciones: ["a) Capacidad de realizar autocrítica", "b) Una jerarquía clara y bien diferenciada", "c) Mantener las normas bien claras"], correcta: 1 },
    { id: 55, pregunta: "EL OBJETIVO PREVENTIVO DE LA REHABILITACIÓN POR CINESITERAPIA ES:", opciones: ["a) La recuperación de la movilidad articular", "b) Emplear métodos pasivos de movilización", "c) Mantener el potencial de extensibilidad"], correcta: 2 },
    { id: 56, pregunta: "¿CUÁL DE LAS SIGUIENTES AFIRMACIONES SOBRE LAS DIFERENCIAS ENTRE EL CUADRO CONFUSIONAL AGUDO (CCA) Y LA DEMENCIA ES FALSA?", opciones: ["a) El CCA es de curso fluctuante y la demencia no", "b) El CCA es de comienzo lento y la demencia de comienzo brusco", "c) La demencia presenta un electroencefalograma normal y en el CCA se aprecia alterado"], correcta: 1 },
    { id: 57, pregunta: "INDIQUE QUÉ ESCALA VALORA LAS ACTIVIDADES INSTRUMENTALES DE LA VIDA DIARIA:", opciones: ["a) Katz", "b) Lawton", "c) Bhoarhead"], correcta: 1 },
    { id: 58, pregunta: "LA RESPIRACIÓN DE CHEYNE-STOKES:", opciones: ["a) A menudo asociada con insuficiencia cardiaca, aumento de la presión intracraneal o lesión cerebral", "b) Consiste en una respiración rítmica ordinaria interrumpida por largas pausas de apnea", "c) Es también conocida con el nombre de eupnea"], correcta: 0 },
    { id: 59, pregunta: "EL DÉFICIT PERSISTENTE Y ADQUIRIDO DE LA FUNCIÓN INTELECTUAL QUE COMPROMETE POR LO MENOS A TRES ÁREAS DEL FUNCIONAMIENTO MENTAL, DEFINE A:", opciones: ["a) El Delirium", "b) El Trastorno de la personalidad", "c) La Demencia"], correcta: 2 },
    { id: 60, pregunta: "¿CUÁLES SON LOS SÍNTOMAS TEMPRANOS QUE APARECEN EN UN PACIENTE CON ENFERMEDAD DE ALZHEIMER?", opciones: ["a) Olvido en la realización de las tareas domésticas y en el manejo del dinero", "b) Falta de concentración y aislamiento social", "c) Irritabilidad e insomnio"], correcta: 0 },
    { id: 61, pregunta: "INDICAR, DE ENTRE LAS SIGUIENTES PATOLOGÍAS, LA QUE NO ES PROPIA DEL SISTEMA NERVIOSO:", opciones: ["a) Afasia", "b) Ataxia", "c) Anoxemia"], correcta: 2 },


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
