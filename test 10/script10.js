// BANCO DE PREGUNTAS DEL TEST 10 (Preguntas 1 a 20: Sustancias, anatomía ósea y definiciones de la OMS)
const questions = [
    { id: 1, pregunta: "Sobre las precauciones al administrar un enema, ¿qué NO es cierto?", opciones: ["a. Se empleará con precaución en pacientes cardíacos, por provocar reflejo vagal", "b. Ante cualquier incidencia (dolor, hemorragia), se suspenderá su administración", "c. No se forzará la entrada de la sonda ni de la solución a administrar", "d. Todas las respuestas anteriores son ciertas"], correcta: 3 },
    { id: 2, pregunta: "El corazón está rodeado por...", opciones: ["a. El endocardio", "b. El pericardio", "c. El miocardio", "d. Todas las respuestas anteriores son incorrectas"], correcta: 1 },
    { id: 3, pregunta: "NO pertenece a las vías respiratorias inferiores...", opciones: ["a. La tráquea", "b. Los bronquios", "c. Los pulmones", "d. La laringe"], correcta: 3 },
    { id: 4, pregunta: "Con respecto al aparato cardiovascular, NO es cierto que...", opciones: ["a. La onda pulsátil se transmite a gran velocidad", "b. La tensión arterial se mide por la presión que ejerce la sangre sobre las paredes de las arterias", "c. Que la sístole ventricular hace que se relaje el ventrículo, y la diástole ventricular hace que éste se contraiga", "d. Ninguna de las respuestas anteriores es falsa"], correcta: 2 },
    { id: 5, pregunta: "El intercambio de gases que se produce en los pulmones al respirar, se conoce como...", opciones: ["a. Inspiración-espiración", "b. Transporte", "c. Perfusión", "d. Hematosis"], correcta: 3 },
    { id: 6, pregunta: "NO es cierto que...", opciones: ["a. Las sustancias perecederas se degradan en poco tiempo", "b. El material lábil es el que se estropea fácilmente y deja de ser útil", "c. Las sustancias termolábiles son las que se alteran fácilmente por la acción del calor", "d. Las sustancias fotosensibles son las que se alteran fácilmente por la acción del agua y de la humedad"], correcta: 3 },
    { id: 7, pregunta: "Las sustancias higroscópicas...", opciones: ["a. Son las que absorben agua con facilidad, tanto la líquida como la simple humedad del ambiente", "b. Son las sustancias perecederas que se degradan en poco tiempo", "c. Son las sustancias que se estropean fácilmente y dejan de ser útiles", "d. Son las sustancias que se alteran por la acción de la luz"], correcta: 0 },
    { id: 8, pregunta: "Según el grado de movilidad, las articulaciones se clasifican en...", opciones: ["a. Sinartrosis", "b. Anfiartrosis", "c. Diartrosis", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 9, pregunta: "Las articulaciones semimóviles reciben el nombre de...", opciones: ["a. Sinartrosis", "b. Anfiartrosis", "c. Diartrosis", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 1 },
    { id: 10, pregunta: "Las suturas del cráneo se encuadrarían dentro de...", opciones: ["a. La sinartrosis, fibrosa", "b. La anfiartrosis, cartilaginosa", "c. La diartrosis, sinovial", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 0 },
    { id: 11, pregunta: "¿Qué enunciado NO es cierto?", opciones: ["a. En la cánula nasal se administra un flujo de oxígeno de 6 a 8 litros por minuto, lo que aporta una concentración del 30-40%", "b. En la sonda nasal se administra un flujo de 6-8 litros por minuto, obteniendo una concentración de oxígeno del 15-25%", "c. Con la mascarilla se administra un flujo de de oxígeno de 8 a 10 litros por minuto, obteniendo una concentración de oxígeno del 40-50%", "d. Con la tienda de oxígeno se administra un flujo de 15 litros por minuto, obteniendo una concentración de oxígeno del 50-60%"], correcta: 1 },
    { id: 12, pregunta: "¿Qué enunciado de los siguientes NO es cierto?", opciones: ["a. El inventario consiste en recontar a mano y revisar a la vez todos los materiales almacenados", "b. La revisión de existencias es el conjunto de actos que permite saber cuántos artículos de cada tipo tiene disponibles el centro", "c. La documentación clínica incluye documentos de asesoría jurídica, salud laboral, orden interno y seguridad, y mantenimiento", "d. La documentación sanitaria es toda documentación que registre hechos relacionados con la salud del paciente y con la asistencia que le presta cualquier profesional sanitario"], correcta: 2 },
    { id: 13, pregunta: "El eje que atraviesa transversalmente el cuerpo, y que va de derecha a izquierda, recibe el nombre de...", opciones: ["a. Eje sagital", "b. Eje transversal", "c. Eje longitudinal", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 1 },
    { id: 14, pregunta: "El corazón es un músculo de tipo...", opciones: ["a. Involuntario y estriado", "b. Involuntario y liso", "c. Voluntario y estriado", "d. Voluntario y liso"], correcta: 0 },
    { id: 15, pregunta: "¿Cuál de los siguientes enunciados NO es correcto?", opciones: ["a. Flexión es plegar o doblar una extremidad sobre una articulación", "b. Extensión es extender o estirar una extremidad sobre una articulación", "c. Adducción es el alejamiento del plano medio", "d. Rotación es el movimiento de giro sobre un eje"], correcta: 2 },
    { id: 16, pregunta: "En 1948 la OMS definió la salud como...", opciones: ["a. Un proceso social, en su origen, que tiene repercusiones ecológicas en el ambiente de vida de la comunidad", "b. El conjunto de funcionamiento psíquico, psicológico, emocional y espiritual que hace posible que la persona lleve a cabo sus funciones", "c. El estado de completo bienestar físico, psíquico y mental, y no solamente la ausencia de enfermedad", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 2 },
    { id: 17, pregunta: "La historia clínica debe ser...", opciones: ["a. Única por paciente para todo el Centro", "b. Acumulativa, porque todo documento generado en la asistencia irá a parar a este dossier", "c. Integrada, porque debe contener un apartado en que se resume cada episodio asistencial del paciente", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 18, pregunta: "En la higiene del paciente encamado, ¿qué es lo primero y lo último que debe lavarse?", opciones: ["a. Lo primero, los ojos, y lo último, área genito-anal", "b. Lo primero, el cuello, y lo último, la espalda", "c. Lo primero, las orejas, y lo último, la espalda", "d. Lo primero, los brazos, y lo último, el área genito-anal"], correcta: 0 },
    { id: 19, pregunta: "¿De cuántos huesos está compuesto el esqueleto humano?", opciones: ["a. 199", "b. 204", "c. 205", "d. 206"], correcta: 3 },
    { id: 20, pregunta: "En la técnica para el uso de muletas, el apoyo sobre cuatro puntos consiste en...", opciones: ["a. Apoyar muleta derecha, pie izquierdo, muleta izquierda, pie derecho", "b. Apoyar muleta izquierda, pie derecho, muleta derecha, pie izquierdo", "c. Apoyar pie derecho, muleta izquierda, pie izquierdo, muleta derecha", "d. Apoyar pie izquierdo, muleta derecha, pie derecho, muleta izquierda"], correcta: 0 },
    { id: 21, pregunta: "Un paciente semisentado, con el respaldo de la cama formando un ángulo de 45° respecto a los pies, y manteniendo las rodillas ligeramente flexionadas, está en posición de...", opciones: ["a. Trendelenburg", "b. Antitrendelenburg", "c. Sims", "d. Fowler"], correcta: 3 },
    { id: 22, pregunta: "¿Qué otro nombre recibe la posición de Sims?", opciones: ["a. Morestin", "b. Invertida", "c. Semiprona", "d. Ninguna de las anteriores es correcta"], correcta: 2 },
    { id: 23, pregunta: "La posición raquídea está indicada para...", opciones: ["a. Intubaciones endotraqueales", "b. Problemas respiratorios", "c. Punción lumbar", "d. Ninguna de las anteriores es correcta"], correcta: 2 },
    { id: 24, pregunta: "¿Cuál de los siguientes conceptos NO es correcto?", opciones: ["a. Apnea: cese de la respiración de forma transitoria", "b. Taquipnea: disminución de la frecuencia respiratoria", "c. Disnea: sensación de dificultad respiratoria", "d. Ortopnea: Disnea de decúbito"], correcta: 1 },
    { id: 25, pregunta: "Si se intercalan periodos de apnea entre una o varias respiraciones rítmicas de distintas profundidades, nos estamos refiriendo a...", opciones: ["a. La respiración de Kussmaul", "b. La respiración de Biot", "c. La respiración torácica", "d. Respiración abdominal"], correcta: 1 },
    { id: 26, pregunta: "¿Qué arteria NO existe?", opciones: ["a. Poplítea", "b. Vagal", "c. Carótida", "d. Humeral"], correcta: 1 },
    { id: 27, pregunta: "'La sustancia material que, administrada al organismo y en virtud de una serie de acciones biofísicas o bioquímicas, es capaz de prevenir, corregir o curar una enfermedad', es una definición que se conoce con el nombre de...", opciones: ["a. Placebo", "b. Nutrición", "c. Residuo", "d. Fármaco"], correcta: 3 },
    { id: 28, pregunta: "El páncreas...", opciones: ["a. Se aloja entre el duodeno y el bazo", "b. Es una glándula exocrina y endocrina", "c. Interviene en la mayoría de los procesos metabólicos del organismo", "d. Son ciertas las respuestas a y b"], correcta: 3 },
    { id: 29, pregunta: "¿Qué nombre recibe la dieta que aporta un porcentaje muy elevado de proteínas?", opciones: ["a. Dieta hiperproteica", "b. Dieta hipoproteica", "c. Dieta blanda", "d. Dieta baja en grasas y colesterol"], correcta: 0 },
    { id: 30, pregunta: "La dieta laxante...", opciones: ["a. Está indicada en personas con estreñimiento", "b. Los alimentos deben ser ricos en residuos y fibras", "c. Aporta un número bajo de proteínas", "d. Son ciertas las respuestas a y b"], correcta: 3 },
    { id: 31, pregunta: "¿Cuál de los siguientes enunciados NO corresponde a la alimentación parenteral?", opciones: ["a. Es el aporte de alimentos, bien por vía oral o a través de un abordaje en alguno de los tramos del tubo digestivo", "b. Es la administración intravenosa de alimentos", "c. Aporta los elementos energéticos y plásticos indispensables para el organismo", "d. La nutrición parenteral puede ser total o parcial"], correcta: 0 },
    { id: 32, pregunta: "¿Con qué término definimos 'toda sustancia o producto, apto para el consumo humano, capaz de aportar las sustancias necesarias para la vida'?", opciones: ["a. Nutriente", "b. Alimento", "c. Hidratos de carbono", "d. Todas las respuestas anteriores son incorrectas"], correcta: 1 },
    { id: 33, pregunta: "El esfínter inferior del estómago, que comunica éste con el duodeno, se conoce como...", opciones: ["a. Cardias", "b. Píloro", "c. Cecal", "d. Ninguna de las anteriores es correcta"], correcta: 1 },
    { id: 34, pregunta: "Tiene efecto sedante general y dilata los vasos sanguíneos superficiales, mejorando la circulación cutánea la...", opciones: ["a. Bolsa de agua caliente", "b. Baño caliente", "c. Baño frío", "d. Remojo frío"], correcta: 1 },
    { id: 35, pregunta: "Para valorar la superficie quemada, se utiliza la regla de los nueves de Wallace, que puntúa de la siguiente forma:", opciones: ["a. Cabeza y cuello, 18%; cada miembro superior, 18%; cada miembro inferior, 9%, genitales externos hombre, 1%", "b. Cabeza y cuello, 9%; cada miembro superior, 9%; cada miembro inferior, 18%; genitales externos hombre, 2%", "c. Cabeza y cuello, 9%; cada miembro superior, 9%; cada miembro inferior, 18%; genitales externos hombre, 1%", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 2 },
    { id: 36, pregunta: "¿En qué tipo de quemaduras hay destrucción de toda la piel?", opciones: ["a. En las de primer grado", "b. En las de segundo grado", "c. En las de tercer grado", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 2 },
    { id: 37, pregunta: "El producto que entra en contacto con el sistema vascular del organismo se llama...", opciones: ["a. Semicrítico", "b. No crítico", "c. Crítico", "d. Ninguna de las anteriores es correcta"], correcta: 2 },
    { id: 38, pregunta: "Son controles biológicos de esterilización...", opciones: ["a. El Bacillus subtilis", "b. El Bacillus stearothermophilus", "c. La presión", "d. Son ciertas las respuestas a y b"], correcta: 3 },
    { id: 39, pregunta: "En la cirugía limpia, la tasa esperable de infección sin profilaxis es del...", opciones: ["a. 5-10%", "b. 1-5%", "c. 10-15%", "d. 15-20%"], correcta: 1 },
    { id: 40, pregunta: "En la cirugía contaminada, la tasa esperable de infección sin profilaxis es del...", opciones: ["a. 15-40%", "b. 15-30%", "c. 20-40%", "d. 25-35%"], correcta: 1 },
    { id: 41, pregunta: "El herpes zoster en pacientes inmunodeprimidos y la rabia requieren aislamiento...", opciones: ["a. Respiratorio", "b. Estricto", "c. Entérico", "d. Protector o inverso"], correcta: 1 },
    { id: 42, pregunta: "El aislamiento protector o inverso está indicado para...", opciones: ["a. Pacientes inmunodeprimidos", "b. Procesos cancerígenos", "c. Quemados", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 43, pregunta: "Las necesidades emocionales básicas son...", opciones: ["a. Necesidad de aceptación", "b. Necesidad de suficiencia y necesidad de afecto", "c. Necesidad de pertenencia a un grupo", "d. Son ciertas las respuestas a y b"], correcta: 3 },
    { id: 44, pregunta: "Es falso que un CD ROM sea...", opciones: ["a. De sólo lectura", "b. De sólo escritura", "c. Un haz láser de baja potencia es el que realiza la lectura", "d. Un disco compacto"], correcta: 1 },
    { id: 45, pregunta: "El Tribunal Constitucional se compone de...", opciones: ["a. 10 miembros nombrados por el Rey", "b. 13 miembros nombrados por el Rey", "c. 12 miembros nombrados por el Rey", "d. 11 miembros nombrados por el Rey"], correcta: 2 },
    { id: 46, pregunta: "La Constitución Española se compone de...", opciones: ["a. 1 título preliminar, 10 títulos, 4 disposiciones adicionales, 8 transitorias, 1 derogatoria y 1 final", "b. 1 preámbulo, 1 título preliminar, 10 títulos, 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final", "c. 1 preámbulo, 1 título preliminar, 10 títulos, 3 disposiciones adicionales, 9 disposiciones transitorias, 1 derogatoria y 1 final", "d. 1 preámbulo, 1 título preliminar, 10 títulos, 4 disposiciones adicionales, 7 disposiciones transitorias, 1 derogatoria y 1 final"], correcta: 1 },
    { id: 47, pregunta: "Las agrupaciones de recursos asistenciales que provienen de distintos servicios médicos o quirúrgicos o de soporte que atienden patologías comunes y garantizan una respuesta integral del paciente, se denominan:", opciones: ["a. Servicios Clínicos", "b. Unidades Clínicas", "c. Unidades Asistenciales", "d. Áreas Clínicas"], correcta: 3 },
    { id: 48, pregunta: "El art. 11 de la C.E., en su párrafo 2º, dice que...", opciones: ["a. Todo español de origen podrá ser privado de su nacionalidad", "b. Ningún español de origen podrá ser privado de su nacionalidad", "c. Todo español, según las circunstancias que concurran, podrá perder la nacionalidad", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 1 },
    { id: 49, pregunta: "El derecho a la vida viene recogido en la C.E., en su artículo...", opciones: ["a. 16", "b. 18", "c. 17", "d. 15"], correcta: 3 },
    { id: 50, pregunta: "La C.E. hace referencia, entre otros, a los siguientes derechos: el derecho de los consumidores y usuarios, el derecho a la vivienda y a las pensiones adecuadas para la tercera edad. Todos ellos se recogen en...", opciones: ["a. Capítulo II del título I", "b. Capítulo IV del título I", "c. Capítulo III del título I", "d. Capítulo V del título I"], correcta: 2 },
    { id: 51, pregunta: "¿Cuál de las siguientes opciones respecto al aparato respiratorio no es correcta?", opciones: ["a. El bronquio izquierdo es más corto y de menor calibre que el bronquio derecho", "b. El pulmón derecho tiene dos cisuras", "c. El cese transitorio de la ventilación se denomina apnea", "d. No informar al paciente solicitando su colaboración cuando se va a valorar su frecuencia ventilatoria"], correcta: 0 },
    { id: 52, pregunta: "El derecho a la intimidad personal y familiar se recoge en la C.E., concretamente en el artículo...", opciones: ["a. 16", "b. 17", "c. 18", "d. 19"], correcta: 2 },
    { id: 53, pregunta: "Según el calendario vacunal, la vacuna de la varicela se pone...", opciones: ["a. A los 12 años", "b. A los 13 años", "c. A los 11 años", "d. No se pone vacuna según el calendario vacunal"], correcta: 2 },
    { id: 54, pregunta: "La presión venosa central mide la presión de...", opciones: ["a. Aurícula izquierda", "b. Aurícula derecha", "c. Arteria aorta", "d. Intracardíaca"], correcta: 1 },
    { id: 55, pregunta: "Los supositorios son formas farmacéuticas...", opciones: ["a. Sólidas", "b. Semisólidas", "c. Las respuestas a y b son correctas", "d. Las respuestas a y b son incorrectas"], correcta: 0 }



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
