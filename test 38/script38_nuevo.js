// BANCO DE PREGUNTAS DEL TEST 38 NUEVO (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 20, pregunta: "AL CONJUNTO DE PROCEDIMIENTOS FÍSICOS, QUÍMICOS O MIXTOS, QUE HACE POSIBLE LA ELIMINACIÓN O REDUCCIÓN DE LOS MICROORGANISMOS INFECCIOSOS SE DENOMINA:", opciones: ["a. Desinfección", "b. Limpieza", "c. Descontaminación", "d. Esterilización"], correcta: 0 },
    { id: 21, pregunta: "ES UN SISTEMA DE ESTERILIZACIÓN QUÍMICO:", opciones: ["a. El calor seco", "b. El plasma de peróxido/hidrógeno", "c. Las radiaciones", "d. El vapor"], correcta: 1 },
    { id: 22, pregunta: "¿EN QUÉ MOMENTO DEBE HACERSE LA LIMPIEZA DEL INSTRUMENTAL?", opciones: ["a. Inmediatamente después de usarlo", "b. Preferiblemente después de que se seque", "c. Únicamente transcurridas 24 horas", "d. Solamente si tienen restos de sangre, pero sin residuos sólidos"], correcta: 0 },
    { id: 23, pregunta: "EN RELACIÓN A LA SOLICITUD DE LAS PRUEBAS ANALÍTICAS, SEÑALE LA ALTERNATIVA CORRECTA:", opciones: ["a. Debe hacerse siempre por escrito", "b. El enfermero es el profesional que las solicita", "c. Todos los impresos de solicitud de distintas pruebas son iguales", "d. Debe hacerse siempre de forma verbal"], correcta: 0 },
    { id: 24, pregunta: "INDIQUE CUÁL DE LAS SIGUIENTES VÍAS NO SE INCLUYE DENTRO DE LA VÍA PARENTERAL:", opciones: ["a. Intradérmica", "b. Intravenosa", "c. Sublingual", "d. Subcutánea"], correcta: 2 },
    { id: 25, pregunta: "LAS TORUNDAS NO SE UTILIZAN PARA LA RECOGIDA DE LAS MUESTRAS DE:", opciones: ["a. Líquido seminal", "b. Exudados de heridas", "c. Secreciones vaginales", "d. Exudados conjuntivales"], correcta: 0 },
    { id: 26, pregunta: "EN LA CONSERVACIÓN DE LAS MUESTRAS, SEÑALE LA ALTERNATIVA INCORRECTA:", opciones: ["a. La orina para análisis microscópico puede mantenerse a temperatura ambiente", "b. Los esputos deben mantenerse refrigerados", "c. El líquido cefalorraquídeo se mantiene a temperatura ambiente", "d. Los fragmentos de raspado de la piel, pelo y uñas se mantienen a temperatura ambiente"], correcta: 0 },
    { id: 27, pregunta: "SON REQUISITOS PARA LA CORRECTA PREPARACIÓN DE LAS MUESTRAS PARA SU TRANSPORTE TODOS EXCEPTO:", opciones: ["a. La correcta identificación de muestras", "b. Asegurarse de que se acompañan de la documentación necesaria", "c. Controlar las variables que pueden influir en su estabilidad", "d. Exponer las muestras a la luz"], correcta: 3 },
    { id: 28, pregunta: "¿CÓMO SE ENCUENTRA EL PACIENTE SI ESTÁ EN LA POSICIÓN DE DECÚBITO PRONO?", opciones: ["a. Tumbado sobre la espalda", "b. De lado izquierdo", "c. De lado derecho", "d. Tumbado sobre el abdomen"], correcta: 3 },
    { id: 29, pregunta: "PARA BAJAR POR UNA RAMPA CON UNA PERSONA EN SILLA DE RUEDAS:", opciones: ["a. Se camina detrás de la silla y se tira hacia atrás", "b. Se camina detrás de la silla y se empuja hacia delante", "c. Se camina a un lado de la silla y se empuja hacia delante sujetándola", "d. Se camina a un lado de la silla y se tira hacia atrás"], correcta: 0 },
    { id: 30, pregunta: "EL MÉTODO \"ENTRECRUZAMIENTO DE BRAZOS\" SE UTILIZA PARA:", opciones: ["a. Sentar a una persona en un sillón", "b. Poner a una persona encamada en de-cúbito prono", "c. Levantar a una persona de la cama y ponerla de pie", "d. Ayudar a una persona a ponerse de pie desde el sillón"], correcta: 2 },
    { id: 31, pregunta: "LA POSICIÓN INTERMEDIA ENTRE DECÚBITO PRONO Y DECÚBITO LATERAL SE DENOMINA:", opciones: ["a. Roser", "b. Fowler", "c. Sims", "d. Decúbito supino"], correcta: 2 },
    { id: 32, pregunta: "CON RESPECTO AL ASEO DE LA PERSONA A NUESTRO CARGO:", opciones: ["a. Es aconsejable descubrirla totalmente si está encamada", "b. Está desaconsejada su colaboración", "c. Deben evitarse las zonas sometidas a presión", "d. Se debe completar el aseo de una zona antes de comenzar con la siguiente"], correcta: 3 },
    { id: 33, pregunta: "REFERENTE AL CUIDADO DE LAS UÑAS DE LA PERSONA A NUESTRO CARGO:", opciones: ["a. Las de las manos se cortan en línea recta y con los bordes lisos", "b. Las de las manos se cortan en pico y con el extremo redondeado", "c. Las de los pies se cortan en línea recta y con los bordes lisos", "d. Las de los pies se cortan en línea curva y con los bordes redondeados"], correcta: 2 },
    { id: 34, pregunta: "EN LA POSICIÓN DECÚBITO PRONO, LA PERSONA ENCAMADA TIENDE A DESARROLLAR ÚLCERAS POR PRESIÓN EN:", opciones: ["a. Codos", "b. Nuca", "c. Caderas", "d. Rodillas"], correcta: 3 },
    { id: 35, pregunta: "LAS ETAPAS EN LA FORMACIÓN DE ÚLCERAS POR PRESIÓN SON:", opciones: ["a. Eritema, vesículas y erosión", "b. Erosión, vesícula y eritema", "c. Hiperoxia, erosión y eritema", "d. Hipoxia, erosión y eritema"], correcta: 3 },
    { id: 36, pregunta: "CUANDO APARECEN SÍNTOMAS INESPECÍFICOS DE LA ENFERMEDAD QUE NO PERMITEN LLEGAR A UN DIAGNÓSTICO DEFINITIVO, HABLAMOS DEL:", opciones: ["a. Periodo de convalecencia", "b. Periodo prodrómico", "c. Periodo de incubación", "d. Periodo clínico"], correcta: 1 },
    { id: 37, pregunta: "¿A QUÉ HACE REFERENCIA LOS MÉTODOS \"DDD\", DE SANEAMIENTO ESPECÍFICO, COMO MEDIDA DE PREVENCIÓN SOBRE LOS MECANISMOS DE TRANSMISIÓN DE LAS ENFERMEDADES?", opciones: ["a. Desinfección, desparasitación, desratización", "b. Desparasitación, desinsectación, desratización", "c. Desinfección, declaración, desinsectación", "d. Desinfección, desinsectación, desratización"], correcta: 3 },
    { id: 38, pregunta: "LA FUENTE DE INFECCIÓN MÁS IMPORTANTE ES:", opciones: ["a. El ser humano", "b. Los animales", "c. El suelo", "d. El agua"], correcta: 0 },
    { id: 39, pregunta: "EL TERCER ESLABÓN DE LA CAENA EPIDEMIOLÓGICA ES:", opciones: ["a. El agente causal", "b. El mecanismo de transmisión", "c. La fuente de infección", "d. El huésped"], correcta: 1 },
    { id: 40, pregunta: "SE DENOMINA PORTADOR SANO:", opciones: ["a. Aquel que padece la enfermedad y elimina microorganismos", "b. Aquel que elimina microorganismos patógenos antes de que se desarrolle la enfermedad", "c. Aquel que no padece la enfermedad porque tiene inmunidad frente al agente etiológico que porta", "d. Aquel que ha padecido la enfermedad infecciosa, han desaparecido los síntomas, pero elimina microorganismos patógenos"], correcta: 2 },
    { id: 41, pregunta: "ENTRE LOS MECANISMOS DE TRANSMISIÓN DIRECTA DE LAS ENFERMEDADES ¿CUÁL NO SE ENCUENTRA?:", opciones: ["a. Agua", "b. Besos", "c. Arañazos de personas", "d. Mordeduras de animales"], correcta: 0 },
    { id: 42, pregunta: "LOS DATOS QUE REGISTRAN EL PESO Y LA TALLA, SON DATOS:", opciones: ["a. Antropométricos", "b. Bioquímicos", "c. Médicos y sociales", "d. Dietéticos"], correcta: 0 },
    { id: 43, pregunta: "EL NÚMERO DE RESPIRACIONES NORMALES EN ADULTO ES DE:", opciones: ["a. De 5 a 10 respiraciones por minuto", "b. De 12 a 18 respiraciones por minuto", "c. De 20 a 30 respiraciones por minuto", "d. De 60 a 70 respiraciones por minuto"], correcta: 1 },
    { id: 44, pregunta: "¿QUÉ CONSTANTE SE REPRESENTA EN LA GRÁFICA DE CONSTANTES VITALES COMO UNA SERIE DE LÍNEAS VERTICALES CON SUS EXTREMOS EN PUNTA DE FLECHA?", opciones: ["a. La tensión arterial", "b. El pulso", "c. La respiración", "d. La temperatura"], correcta: 0 },
    { id: 45, pregunta: "¿EN QUÉ SITUACIÓN ESTÁ INDICADO EL ENEMA DE LIMPIEZA?", opciones: ["a. Después de la extracción de un fecaloma", "b. Después de un enema opaco", "c. Después de una endoscopia", "d. Después de un parto"], correcta: 3 },
    { id: 46, pregunta: "CUANDO SE MIDE LA RESPIRACIÓN DE UN PACIENTE SE DEBE VALORAR:", opciones: ["a. Frecuencia, ritmo y simetría", "b. Frecuencia, profundidad y ritmo", "c. Frecuencia, ritmo, profundidad y simetría", "d. Frecuencia, profundidad y simetría"], correcta: 2 },
    { id: 47, pregunta: "¿CUÁL DE LOS SIGUIENTES TIPOS DE SONDAS, NO ES VESICAL?", opciones: ["a. Foley", "b. Levin", "c. Robinson", "d. Pezzer"], correcta: 1 },
    { id: 48, pregunta: "EL ÍNDICE DE KATZ ES:", opciones: ["a. Una escala de valoración de la función afectiva del anciano", "b. Una escala de valoración de la salud mental del anciano", "c. Una escala de valoración de la capacidad funcional del anciano", "d. Una escala de valoración social del anciano"], correcta: 2 },
    { id: 49, pregunta: "LA DEMENCIA SENIL ES UNA ENFERMEDAD FRECUENTE EN LAS PERSONAS MAYORES Y CARACTERIZADA POR:", opciones: ["a. La disminución generalizada de las funciones intelectuales", "b. Afectar solo a las mujeres", "c. La pérdida progresiva de los sentidos", "d. Actividad diurna y aletargamiento nocturno"], correcta: 0 },
    { id: 50, pregunta: "¿QUÉ ES LO QUE NO SE RECOMIENDA A LA PERSONA MAYOR PARA EL CUIDADO DE SU PIEL?", opciones: ["a. Evitar la exposición a la luz solar", "b. Exponerse al frío intenso en invierno", "c. Utilizar ropa adecuada para conservar el calor corporal", "d. Tomar duchas o baños de cuerpo entero"], correcta: 1 },
    { id: 51, pregunta: "TODAS SON COMPLICACIONES DEBIDAS A LA INMOVILIDAD DE LA PERSONA MAYOR EXCEPTO:", opciones: ["a. Osteoporosis", "b. Alteraciones del sueño", "c. Ansiedad", "d. Diarrea"], correcta: 3 },
    { id: 52, pregunta: "EL TRASTORNO QUE SE CARACTERIZA POR EL AFÁN DE ORDEN, PERFECCIONAMIENTO Y CONTROL SE DENOMINA:", opciones: ["a. Narcisista", "b. Obsesivo-compulsivo", "c. Histriónico", "d. Dependiente"], correcta: 1 },
    { id: 53, pregunta: "SON MANIFESTACIONES AVANZADAS DE UNA DEMENCIA:", opciones: ["a. Defectos al articular palabras", "b. Dificultad para la memoria reciente", "c. Dificultad para identificar fechas", "d. Pérdida de emociones"], correcta: 3 },
    { id: 54, pregunta: "ANTE UN PACIENTE DEPRIMIDO, EL AUXILIAR DE ENFERMERÍA NO DEBE:", opciones: ["a. Levantar la voz", "b. Dejar tiempo para que se exprese", "c. Prestar atención a lo que nos dice", "d. Respetar la intimidad del paciente"], correcta: 0 },
    { id: 55, pregunta: "LA ENFERMEDAD TERMINAL SE DEFINE COMO:", opciones: ["a. La enfermedad que se encuentra en el último estadio de su evolución y a la que sucederá la muerte en un plazo relativamente corto", "b. La enfermedad que se encuentra en el último estadio de su evolución, pero que se puede cronificar", "c. La enfermedad que se encuentra en un estadío de recuperación", "d. Las enfermedades que son más graves"], correcta: 0 },
    { id: 56, pregunta: "DENTRO DE LA ETAPA FINAL DE UNA ENFERMEDAD APARECEN UNA SERIE DE SÍNTOMAS. UNO DE ELLOS ES LA CAQUEXIA, QUE SE DEFINE COMO:", opciones: ["a. Delgadez extrema y pérdida de peso", "b. Falta de apetito", "c. Anuria", "d. Náuseas y vómitos"], correcta: 0 },
    { id: 57, pregunta: "LA O.M.S. SEÑALA COMO FINALIDAD DE LOS CUIDADOS PALIATIVOS:", opciones: ["a. Calmar el dolor y controlar los síntomas de la enfermedad", "b. Proporcionar apoyo psicológico, social y espiritual, tanto a la familia como al enfermo", "c. Mantener la vida, sin alargarla ni acortarla", "d. Todas las afirmaciones anteriores son ciertas"], correcta: 3 },
    { id: 58, pregunta: "PARA PONER EN MARCHA LOS CUIDADOS POST-MORTEM, ES NECESARIO QUE EL PERSONAL QUE LOS LLEVE A CABO UTILICE LOS GUANTES, BATA, MASCARILLA Y GORRO:", opciones: ["a. Cuando la enfermedad de que ha muerto el paciente haya sido contagiosa", "b. Cada hospital tiene su propio protocolo", "c. Siempre", "d. Cuando así lo indique el médico o la enfermera"], correcta: 2 },
    { id: 59, pregunta: "SI SE PRODUCEN SALPICADURAS DE SANGRE SOBRE LA PIEL INTACTA SE LAVA CON:", opciones: ["a. Agua y jabón", "b. Lejía diluida al 5%", "c. Lejía diluida al 10%", "d. Alcohol de 90°"], correcta: 0 },
    { id: 60, pregunta: "ENTRE LAS AYUDAS PSICOLÓGICAS A LOS PACIENTES TERMINALES SE DEBE INCLUIR:", opciones: ["a. Visitas de la familia a cualquier hora", "b. Acompañamiento espiritual y religioso, si el paciente lo requiere", "c. Obligarlo a estar distraído, para que se olvide", "d. Mostrar una actitud despreocupada"], correcta: 1 },
    { id: 61, pregunta: "EN LA RECOGIDA DE MUESTRAS DE ORINA PARA LA REALIZACIÓN DE UN UROCULTIVO, NO ES NECESARIO:", opciones: ["a. Usar guantes desechables", "b. Preparar frascos estériles debidamente etiquetados", "c. Preparar el material necesario para realizar previamente el aseo parcial del paciente", "d. Recoger la primera parte de la micción"], correcta: 3 },
    { id: 62, pregunta: "LAS SOLUCIONES OFTÁLMICAS SE ADMINISTRAN A TRAVÉS DE LA VÍA:", opciones: ["a. Parenteral", "b. Subcutánea", "c. Tópica", "d. Entérica"], correcta: 2 },
    { id: 63, pregunta: "UNA FRECUENCIA DE 50 RESPIRACIONES POR MINUTO SE DENOMINA:", opciones: ["a. Hipernea", "b. Apnea", "c. Taquipnea", "d. Bradipnea"], correcta: 2 },
    { id: 64, pregunta: "EN UNA DIETA EQUILIBRADA, SE RECOMIENDA CONSUMIR APROXIMADAMENTE UN 35% DE:", opciones: ["a. Vitaminas", "b. Lípidos", "c. Proteínas", "d. Calcio"], correcta: 1 },
    { id: 8, pregunta: "LAS FUNCIONES DE LAS INTERVENCIONES DEL AUXILIAR DE ENFERMERÍA SE CLASIFICAN EN:", opciones: ["a. Asistencial, administrativa e investigadora", "b. Asistencial, administrativa, docente e investigadora", "c. Asistencial, docente y administrativa", "d. Asistencial, docente, administrativa y rehabilitadora"], correcta: 1 },
    { id: 9, pregunta: "UNA DE LAS CARACTERÍSTICAS QUE DEFINEN A UN GRUPO ES QUE:", opciones: ["a. Está formado por dos o más personas que confían en el trabajo en colaboración", "b. Los miembros no tienen contacto entre ellos", "c. Existen intereses personales", "d. No existe división de responsabilidad"], correcta: 0 },
    { id: 12, pregunta: "UNA VENTAJA DEL TRABAJO EN EQUIPO ES QUE:", opciones: ["a. Puede haber conflicto de intereses entre los miembros del equipo", "b. Permite ver múltiples puntos de vista sobre un tema", "c. Se duplican los esfuerzos", "d. Se diluye la responsabilidad entre los miembros del equipo"], correcta: 1 },
    { id: 13, pregunta: "EL LOGRO DE UN NUEVO COMPORTAMIENTO GRACIAS A UNA EXPERIENCIA RECIBE EL NOMBRE DE:", opciones: ["a. Hábito", "b. Conocimiento", "c. Aprendizaje", "d. Costumbre"], correcta: 2 },
    { id: 14, pregunta: "LA CHARLA EDUCATIVA ES EL PROCEDIMIENTO DIRECTO DE EDUCACIÓN SANITARIA MÁS UTILIZADO PARA DIRIGIRSE A:", opciones: ["a. Grupos", "b. Persona adulta", "c. Persona de bajo nivel cultural", "d. Solo a la población infantil"], correcta: 0 },
    { id: 15, pregunta: "¿DE QUÉ TRATA EL DESARROLLO SOSTENIBLE?:", opciones: ["a. De obtener una mayor producción", "b. De cumplir de forma equilibrada con las necesidades de desarrollo y de carácter medioambiental de las generaciones presentes y futuras", "c. De fometar el bienestar", "d. De impulsar el desarrollo sin tener en cuenta el medioambiente"], correcta: 1 },
    { id: 16, pregunta: "EL NIVEL DE SALUD DE LOS INDIVIDUOS Y LAS COMUNIDADES DEPENDE DE DIVERSOS FACTORES, SIENDO CONSIDERADOS LOS MÁS IMPORTANTES:", opciones: ["a. La biología humana y el sistema sanitario", "b. El medio ambiente y la biología humana", "c. Los estilos de vida y el medio ambiente", "d. Los estilos de vida y el sistema sanitario"], correcta: 2 },
    { id: 17, pregunta: "LAS FUNCIONES DEL ARCHIVO DE HISTORIAS CLÍNICAS SON:", opciones: ["a. Almacenamiento, supervisión y estadísticas clínicas", "b. Gestión sanitaria, documentación clínica y supervisión del gasto hospitalario", "c. Almacenamiento, custodia y conservación de las historias clínicas, así como el suministro de historias necesarias para la asistencia", "d. Gestión del fichero de pacientes y estadísticas epidemiológicas sanitarias"], correcta: 2 },
    { id: 18, pregunta: "LA HISTORIA CLÍNICA, CON LAS HOJAS QUE LA FORMAN Y CUALQUIER ESTUDIO QUE CONTENGA LA INFORMACIÓN CLÍNICA QUE SE PRODUZCA DURANTE LA ESTANCIA DEL PACIENTE, SE DENOMINA:", opciones: ["a. Anamnesis", "b. Historia general", "c. Documentación clínica", "d. Documentación particular"], correcta: 2 },
    { id: 19, pregunta: "EN LA HOJA DE EVOLUCIÓN DEL PACIENTE DEBEN CONSTAR LOS DATOS DE:", opciones: ["a. Evolución del tratamiento y sus cambios y complicaciones", "b. Si ha padecido con anterioridad EDOs", "c. Datos relativos a las enfermedades de sus familiares", "d. Si ha sido sometido con anterioridad a intervenciones quirúrgicas"], correcta: 0 },
    { id: 20, pregunta: "SON DOCUMENTOS CLÍNICOS DE USO EN ATENCIÓN PRIMARIA TODOS, EXCEPTO:", opciones: ["a. Impreso de citación", "b. Impreso de solicitud de pruebas complementarias", "c. Hoja de ingreso", "d. Historia de enfermería"], correcta: 2 },
    { id: 21, pregunta: "EL MÉTODO QUE CONSISTE EN COMBATIR O PREVENIR LOS PROCEDIMIENTOS INFECCIOSOS DESTRUYENDO LOS MICROBIOS QUE LOS CAUSAN SE DENOMINA:", opciones: ["a. Asepsia", "b. Antisepsia", "c. Desinfección", "d. Esterilización"], correcta: 1 },
    { id: 22, pregunta: "EL MATERIAL A ESTERILIZAR PREVIAMENTE SE:", opciones: ["a. Limpiará y empaquetará", "b. Limpiará, secará, lubricará y empaquetará", "c. Descontaminará y lubricará", "d. Desinfectará y secará"], correcta: 1 },
    { id: 23, pregunta: "DE LAS SIGUIENTES MODALIDADES, ¿CUÁL FORMA PARTE DE LOS MÉTODOS FÍSICOS DE DESINFECCIÓN?:", opciones: ["a. Inmersión", "b. Hervido", "c. Pulverización", "d. Fumigación"], correcta: 1 },
    { id: 24, pregunta: "ES OBLIGATORIO QUE EL INSTRUMENTAL QUE PENETRA EN LAS CAVIDADES ORGÁNICAS ESTÉ:", opciones: ["a. Limpio", "b. Estéril", "c. Desinfectado", "d. Descontaminado"], correcta: 1 }

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
