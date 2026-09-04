// BANCO DE PREGUNTAS DEL TEST 36 NUEVO (Materia técnica de Auxiliar de Enfermería - Bloque completo de 20 preguntas)
const questions = [
    { id: 1, pregunta: "EN LOS CAMBIOS POSTURALES EN EL PACIENTE ENCAMADO, ES INCORRECTO:", opciones: ["a. Se debe evitar la presión mediante la utilización de sistemas que disminuyan la presión en las prominencias óseas", "b. Los cambios posturales deben realizarse cada 6 u 8 horas como máxima y puede utilizarse material textil de apoyo como almohadas", "c. La situación clínica del paciente, la influencia de los factores de riesgo así como su intensidad pueden condicionar la frecuencia de los cambios posturales"], correcta: 1 },
    { id: 2, pregunta: "EN RELACIÓN AL PROGRAMA DE CAMBIOS POSTURALES, ES CIERTO:", opciones: ["a. Al realizar los cambios posturales evitaremos arrastrar al paciente", "b. La movilización se realizará girando al paciente", "c. Ambas respuestas son correctas"], correcta: 2 },
    { id: 3, pregunta: "TRASLADA USTED A UN PACIENTE EN CAMILLA Y DEBE ENTRAR EN UN ASCENSOR. ELIJA LA OPCIÓN CORRECTA:", opciones: ["a. Primero usted de espalda tirando de la cabecera", "b. Primero los pies del paciente empujando usted desde la cabecera", "c. Primero usted de espalda tirando de los pies del paciente"], correcta: 0 },
    { id: 4, pregunta: "CUÁL DE LAS SIGUIENTES TÉCNICAS EJERCE LA MÍNIMA TENSIÓN EN LA ESPALDA DE LA PERSONA QUE LA REALIZA:", opciones: ["a. Utilizar tres personas o más para trasladar al paciente", "b. Trasladar el propio peso hacia atrás para levantar a un paciente de la cama", "c. Mantener las piernas rectas mientras se levanta a un paciente"], correcta: 1 },
    { id: 5, pregunta: "DE LOS DESINFECTANTES QUE SE CITAN A CONTINUACIÓN, UNO DE ELLES ES EL MÁS ACONSEJABLE EN CLÍNICA HUMANA PARA LAS HERIDAS SUPERFICIALES:", opciones: ["a. Agua oxigenada", "b. Compuestos Catiónicos", "c. Alcohol etílico de 70°"], correcta: 0 },
    { id: 6, pregunta: "UNA SOLUCIÓN QUE BLOQUEA LA MULTIPLICACIÓN Y CRECIMIENTO DE LAS BACTERIAS, SE DICE QUE ES:", opciones: ["a. Esterilizante", "b. Bactericida", "c. Bacteriostática"], correcta: 2 },
    { id: 7, pregunta: "LA EBULLICIÓN ES UN MÉTODO:", opciones: ["a. Para la desinfección", "b. Para la esterilización", "c. Muy usado para esterilizar jeringas y agujas"], correcta: 0 },
    { id: 8, pregunta: "EN UN CENTRO DE SALUD SE USAN COMO INDICADORES O TESTIGOS DE ESTERILIZACIÓN:", opciones: ["a. Biológicos", "b. Químicos (testigos termosensibles que cambian de color)", "c. Ambas respuestas"], correcta: 1 },
    { id: 9, pregunta: "EN LA LIMPIEZA DEL INSTRUMENTAL DE QUIRÓFANO, PARA ELIMINAR LOS RESTOS DE MATERIA ORGÁNICA ANTES DE SOMETERLO A ESTERILIZACIÓN:", opciones: ["a. Hay que lavarlo en primer lugar con agua corriente y fría para suprimir los restos de materia orgánica", "b. En segundo lugar debe lavarse con agua caliente, jabón y cepillo", "c. Son correctas ambas respuestas"], correcta: 2 },
    { id: 10, pregunta: "LA ESTERILIZACIÓN:", opciones: ["a. Destruye las bacterias, virus, hongos y cualquier forma de vida", "b. Destruye las formas de resistencia de las bacterias (esporas)", "c. Las respuestas A y B son correctas"], correcta: 2 },
    { id: 11, pregunta: "EL MÉTODO DE ESTERILIZACIÓN MÁS USADO EN LOS HOSPITALES, DE EFICACIA PROBADA, MANEJO FÁCIL Y ESCASO COSTE ES:", opciones: ["a. Estufa de calor seco", "b. Incineración", "c. Estufa de calor húmedo (vapor de agua)"], correcta: 2 },
    { id: 12, pregunta: "LOS MATERIALES DE USO ÚNICO DE PRODUCCIÓN INDUSTRIAL (JERINGAS, AGUJAS, SONDAS, CATÉTERES, ETC.) UNA VEZ EMBALADOS Y ETIQUETADOS SE ESTERILIZAN EN:", opciones: ["a. Autoclave", "b. Frío", "c. Solución de un desinfectante"], correcta: 1 },
    { id: 13, pregunta: "EL FORMOL SIRVE PARA:", opciones: ["a. Desinfectar materiales instrumentales", "b. Esterilizar materiales instrumentales", "c. Esterilización del aire"], correcta: 0 },
    { id: 14, pregunta: "LA ESTERILIZACIÓN EN FRÍO UTILIZA:", opciones: ["a. Radiaciones alfa", "b. Radiaciones beta", "c. Radiaciones gamma"], correcta: 2 },
    { id: 15, pregunta: "ALGUNA DE LAS AFIRMACIONES NO ES CORRECTA:", opciones: ["a. Todo material desinfectado está esterilizado", "b. Todo material esterilizado está desinfestado", "c. El autoclave utiliza calor húmedo como medio de esterilización"], correcta: 0 },
    { id: 16, pregunta: "EL CEPILLADO DE DIENTES DEBE HACERSE:", opciones: ["a. Como mínimo una vez al día antes de acostarse", "b. Con la ayuda de una seda dental", "c. Ambas son correctas"], correcta: 2 },
    { id: 17, pregunta: "EL LAVADO DE LOS GENITALES DEL PACIENTE ENCAMADO SE REALIZA:", opciones: ["a. De delante hacia atrás (de pubis a ano)", "b. Colocando una cuña debajo de la pelvis", "c. Las respuestas A y B son correctas"], correcta: 2 },
    { id: 18, pregunta: "LA HIGIENE BUCAL DE UN PACIENTE INCONSCIENTE DEBE HACERSE:", opciones: ["a. Con la cabeza ladeada", "b. Con la cabeza boca arriba", "c. Con un cepillo dental"], correcta: 0 },
    { id: 19, pregunta: "EN EL ASEO DEL PACIENTE ENCAMADO LO ÚLTIMO QUE DEBE LAVARSE ES:", opciones: ["a. Las piernas y pies", "b. La región genital", "c. No importa el orden en que se haga el lavado"], correcta: 1 },
    { id: 20, pregunta: "UNA DE LAS SIGUIENTES AFIRMACIONES ES CORRECTA:", opciones: ["a. En caso de fiebre el baño debe ser tibio o frío con el fin de bajar la temperatura corporal", "b. La ducha tiene un efecto relajante", "c. El baño tiene un efecto estimulante"], correcta: 0 },
    { id: 21, pregunta: "EL BAÑO O DUCHA EN EL PACIENTE CUMPLE MÚLTIPLES FINALIDADES, EXCEPTO UNA DE LAS QUE SE CITAN:", opciones: ["a. Modificar el pH de la piel para evitar sudoración", "b. Estimular la circulación sanguínea", "c. Favorecer la propia autoestima"], correcta: 0 },
    { id: 22, pregunta: "EN EL LAVADO HIGIÉNICO DEL PACIENTE HOSPITALIZADO DEBE UTILIZARSE EN LA MEDIDA DE LO POSIBLE:", opciones: ["a. Jabones neutros", "b. Biombo de aislamiento cuando hay que asearlo en una habitación compartida", "c. Las respuestas A y B son correctas"], correcta: 2 },
    { id: 23, pregunta: "GENERALMENTE LA TEMPERATURA DEL AGUA PARA EL ASEO E HIGIENE DEL PACIENTE, SALVO EXCEPCIONES ES DE:", opciones: ["a. 27°C", "b. 37°C", "c. 47°C"], correcta: 1 },
    { id: 24, pregunta: "QUÉ POSICIÓN CORPORAL DE LAS SIGUIENTES NO SE INCLUYA EN UN PROGRAMA DE CAMBIOS POSTURALES:", opciones: ["a. Decúbito supino", "b. Decúbito lateral", "c. Litotomía"], correcta: 2 },
    { id: 1, pregunta: "¿CUÁL ES LA DIFERENCIA ENTRE LOS CONCEPTOS DE REANIMACIÓN CARDIO-PULMONAR Y SOPORTE VITAL BÁSICO?", opciones: ["a. La RCP se compone de una serie de maniobras, mientras que el SV es un conjunto de conocimientos teóricos", "b. El SV es la continuación de la RCP básica, pero con personal experto y equipo especializado", "c. El SV es un concepto más amplio que integra, junto con las maniobras de RCP contenidos referidos a la prevención y difusión de los conocimientos a la población", "d. En nada, es lo mismo"], correcta: 2 },
    { id: 3, pregunta: "¿CUÁL ES LA POSICIÓN CORRECTA EN QUE DEBEMOS COLOCAR A UN PACIENTE INCONSCIENTE QUE NECESITE CUIDADOS DE REANIMACIÓN CARDIO-PULMONAR?", opciones: ["a. Posición lateral de seguridad", "b. Trendelemburg", "c. Decúbito supino con la cabeza en hiperextensión", "d. Decúbito supino con la cabeza ladeada"], correcta: 2 },
    { id: 4, pregunta: "¿CÓMO SE DENOMINA LA MANIOBRA QUE CONSISTE EN ABRAZAR AL PACIENTE DESDE LA ESPALDA Y EJERCER UNA FUERTE PRESIÓN SOBRE LA ZONA DEL ABDOMEN, EN CASO DE ATRAGANTAMIENTO?", opciones: ["a. De Rodeo", "b. De Papanicolau", "c. De Heimlich", "d. De Wersma"], correcta: 2 },
    { id: 5, pregunta: "TRAS UN ACCIDENTE AUTOMOVILÍSTICO, EL ACCIDENTADO SUFRE LA AMPUTACIÓN DEL BRAZO IZQUIERDO ¿CÓMO TRASLADARÍAMOS EL MIEMBRO AMPUTADO HASTA EL HOSPITAL?", opciones: ["a. No es necesario trasladarlo, pues los miembros amputados traumáticamente nunca pueden volver a reimplantarse", "b. No es importante la forma de trasladarlo, lo urgente es que llegue pronto", "c. Dentro de una bolsa en contacto directo con hielo", "d. Dentro de una bolsa, y esta a su vez, dentro de otra que contenga hielo, pero sin estar en contacto directo con el miembro"], correcta: 3 },
    { id: 7, pregunta: "¿CÓMO DEFINIRÍAS LA EMPATÍA?", opciones: ["a. Estar de acuerdo en todo", "b. Ponerse en el lugar de la otra persona", "c. Observar a la persona", "d. Compartir la misma opinión"], correcta: 1 },
    { id: 8, pregunta: "¿QUÉ ENTIENDES POR COMUNICACIÓN?", opciones: ["a. Transmitir o intercambiar información", "b. Estudio de significado de las palabras", "c. Idea u opinión que se tiene de una cosa", "d. Relación afectiva entre dos personas"], correcta: 0 },
    { id: 10, pregunta: "LA SENSACIÓN DE CONTROL EMOCIONAL ES UN COMPORTAMIENTO...", opciones: ["a. Agresivo", "b. Asertivo", "c. Pasivo", "d. Pasivo-Agresivo"], correcta: 1 },
    { id: 11, pregunta: "¿CUÁL DE ESTOS PRINCIPIOS ES UN ELEMENTO DE LA BIOÉTICA?", opciones: ["a. Dignidad", "b. Bienestar", "c. Beneficencia", "d. Libertad"], correcta: 2 },
    { id: 12, pregunta: "PROTEGER LOS DERECHOS DE LOS PACIENTES ES UNA FUNCIÓN DE:", opciones: ["a. Comisión de Calidad", "b. Comités de Ética", "c. Comisión de Investigación", "d. Ninguna de las anteriores tiene dicha función"], correcta: 1 },
    { id: 13, pregunta: "ALGUNAS DE LAS FUNCIONES QUE DESEMPEÑAN LAS UNIDADES DE PREVENCIÓN DE RIESGOS LABORALES SON:", opciones: ["a. La información y formación de los trabajadores", "b. La elaboración de planes y actuaciones a desarrollar en situaciones de emergencia", "c. La evaluación de los factores de riesgo que puedan afectar a la seguridad y salud de los trabajadores en los términos previstos en el artículo 16 de la Ley de Prevención de Riesgos Laborales", "d. Todas las anteriores son correctas"], correcta: 3 },
    { id: 14, pregunta: "¿QUÉ PRINCIPIO ÉTICO SUPONE EL RECONOCIMIENTO DEL DERECHO DEL PACIENTE A PARTICIPAR EN LA TOMA DE LAS DECISIONES SANITARIAS QUE LE PUEDAN AFECTAR?", opciones: ["a. Principio de Autonomía", "b. Principio de Beneficencia", "c. Principio de Justicia", "d. Principio de no Maleficencia"], correcta: 0 },
    { id: 15, pregunta: "NO REALIZAR TAREAS DETERMINADAS EN EL MOMENTO INDICADO ES:", opciones: ["a. Daño intencionado", "b. Agravio", "c. Negligencia", "d. Olvido"], correcta: 2 },
    { id: 16, pregunta: "¿QUÉ DEFINIRÍAS POR ÚLCERAS POR PRESIÓN?", opciones: ["a. Es un órgano de protección", "b. Son lesiones de la piel en los que afecta a la dermis, epidermis y capas profundas", "c. Es un epitelio pavimentoso, estratificado, queratizado", "d. Es una capa de tejido conjuntivo"], correcta: 1 },
    { id: 17, pregunta: "SERÍA UN ERROR EN UN CAMBIO POSTURAL:", opciones: ["a. Efectuar cambios cada 2 ó 3 horas", "b. Arrastrar al paciente", "c. Repartir el peso del cuerpo por igual", "d. Registrar los horarios de cada cambio"], correcta: 1 },
    { id: 18, pregunta: "EN EL PROTOCOLO GENERAL DE TRATAMIENTO DE ÚLCERAS DEBE EVITARSE:", opciones: ["a. Suero fisiológico", "b. Cremas a base de colágeno", "c. Solución antiséptica", "d. Cubrir la herida con apósitos estériles"], correcta: 2 },
    { id: 19, pregunta: "¿QUÉ FACTOR NO FACILITA LA INFORMACIÓN?", opciones: ["a. Escoger un lugar adecuado", "b. La escucha activa", "c. Pedir opinión, flexibilidad", "d. Un lugar inadecuado"], correcta: 3 },
    { id: 20, pregunta: "EL ENSAÑAMIENTO TERAPÉUTICO SON SITUACIONES DADAS EN:", opciones: ["a. Eutanasia activa", "b. Eutanasia pasiva", "c. Distanasia", "d. Adistanasia"], correcta: 2 },
    { id: 22, pregunta: "LA ALIMENTACIÓN SE DEFINE:", opciones: ["a. Como la forma y manera de proporcionar al organismo los alimentos que le son indispensables", "b. Como el conjunto de procesos materiales y esenciales para el mantenimiento de la vida", "c. Como el conjunto de procesos gracias a los cuales el organismo recibe y utiliza las sustancias químicas contenidas en los alimentos", "d. Como la absorción a nivel intestinal de los alimentos ingeridos"], correcta: 0 },
    { id: 23, pregunta: "LOS HUESOS DEL CRÁNEO SON:", opciones: ["a. Radiados", "b. Cortos", "c. Planos", "d. Papiráceos"], correcta: 2 },
    { id: 24, pregunta: "SEGÚN LA O.M.S. (ORGANIZACIÓN MUNDIAL DE LA SALUD), LA CAÍDA ES:", opciones: ["a. La consecuencia de cualquier acontecimiento que hace al paciente cambiar de posición", "b. La pérdida de equilibrio del paciente", "c. La consecuencia de cualquier acontecimiento que precipita al paciente al suelo en contra de su voluntad", "d. La pérdida involuntaria del equilibrio"], correcta: 2 },
    { id: 25, pregunta: "¿QUÉ ALIMENTOS, DE LOS SEÑALADOS A CONTINUACIÓN, PREVIENEN LA SEQUEDAD DE BOCA EN EL ANCIANO?", opciones: ["a. Alimentos lácteos", "b. Hidratos de carbono", "c. Proteínas", "d. Sopas"], correcta: 3 },
    { id: 41, pregunta: "La monitorización de la presión parcial de oxígeno (PO2) en sangre arterial mediante gasometría es la técnica idónea para diagnosticar:", opciones: ["a. La presencia y grado de hipoxemia", "b. La saturación de la hemoglobina capilar periférica", "c. El nivel de presión venosa en el ventrículo derecho", "d. El gasto cardíaco del miocardio de forma directa"], correcta: 0 },
    { id: 42, pregunta: "El orgánulo celular formado por un sistema de cisternas aplanadas que se encarga de la modificación, empaque y secreción de proteínas y lípidos es el:", opciones: ["a. Aparato de Golgi", "b. Lisosoma", "c. Ribosoma", "d. Retículo endoplasmático liso"], correcta: 0 },
    { id: 43, pregunta: "La sonda de Foley se caracteriza clínicamente por disponer de un balón inflable cerca de su punta cuya finalidad principal es:", opciones: ["a. Fijar y mantener la sonda en el interior de la vejiga urinaria", "b. Taponar el sangrado de las varices esofágicas", "c. Permitir la aspiración continua de jugos gástricos", "d. Facilitar la descompresión pasiva del intestino grueso"], correcta: 0 },
    { id: 44, pregunta: "La eliminación de materiales textiles empapados en sangre procedentes de un paciente con aislamiento estricto exige su depósito en:", opciones: ["a. Bolsas de plástico amarillas de galga adecuada para residuos biocontaminados de Clase III", "b. Bolsas negras comunes de residuos generales de Clase I", "c. Contenedores rígidos estancos para residuos químicos de Clase IV", "d. Cajas de cartón clínico sin forro protector interno"], correcta: 0 },
    { id: 45, pregunta: "Dentro de la escala analgésica de la O.M.S., los fármacos opioides débiles (como el tramadol o la codeína) se sitúan específicamente en el:", opciones: ["a. Segundo escalón", "b. Primer escalón", "c. Tercer escalón", "d. Cuarto escalón"], correcta: 0 },
    { id: 46, pregunta: "La alteración de la piel por presión que cursa con pérdida total del grosor de la piel, visualizándose el tejido subcutáneo (grasa) pero sin llegar a músculo o hueso, es una UPP de:", opciones: ["a. Estadio o Grado III", "b. Estadio o Grado I", "c. Estadio o Grado II", "d. Estadio o Grado IV"], correcta: 0 },
    { id: 47, pregunta: "La aplicación de compuestos antisépticos (como la povidona yodada o clorhexidina) se realiza específicamente sobre:", opciones: ["a. Tejidos vivos o piel del paciente para disminuir la carga microbiana", "b. Superficies lisas del mobiliario clínico de la habitación", "c. Instrumental quirúrgico de acero inoxidable antes del autoclave", "d. Suelos y paredes de las zonas restringidas de quirófano"], correcta: 0 },
    { id: 48, pregunta: "La posición quirúrgica en la que el paciente se encuentra en decúbito prono con el tronco elevado y la cabeza apoyada en un soporte facial se conoce como:", opciones: ["a. Decúbito prono con soporte de almohadillas", "b. Posición de Trendelenburg", "c. Posición de Sims", "d. Posición ginecológica"], correcta: 0 },
    { id: 49, pregunta: "La presencia de micciones dolorosas o difíciles en el paciente se denomina técnicamente:", opciones: ["a. Disuria", "b. Anuria", "c. Poliuria", "d. Oliguria"], correcta: 0 },
    { id: 50, pregunta: "La escala analógica visual (EVA) puntúa la intensidad del dolor percibido por el paciente en un rango numérico que va de:", opciones: ["a. 0 (sin dolor) a 10 (dolor insoportable)", "b. 1 a 5 según la gravedad clínica", "c. 0 a 100 según el grado de afectación tisular", "d. 1 a 3 según el escalón analgésico"], correcta: 0 },
    { id: 51, pregunta: "La presencia de proteínas en la orina en cantidades normales (proteinuria) es un indicador clínico que suele asociarse a:", opciones: ["a. Alteración o daño en la filtración glomerular renal", "b. Infección aislada del tracto urinario bajo", "c. Litiasis alojada en la vejiga urinaria", "d. Fisiología metabólica normal en ayunas"], correcta: 0 },
    { id: 52, pregunta: "El principal carbohidrato de reserva energética que se almacena en el hígado y en los músculos de los animales se denomina:", opciones: ["a. Glucógeno", "b. Almidón", "c. Celulosa", "d. Sacarosa"], correcta: 0 },
    { id: 53, pregunta: "La administración de un enema en un paciente adulto exige colocarlo preferentemente en posición de:", opciones: ["a. Sims o decúbito lateral izquierdo con la rodilla derecha flexionada", "b. Decúbito supino estricto con almohada alta", "c. Posición de Fowler elevada a 90 grados", "d. Decúbito prono con flexión abdominal"], correcta: 0 },
    { id: 54, pregunta: "El documento clínico hospitalario que contiene los datos de identificación, filiación y el resumen de los motivos de ingreso y alta del paciente se llama:", opciones: ["a. Hoja clínico-estadística o de ingreso y alta", "b. Hoja de evolución de enfermería diaria", "c. Gráfica ordinaria mensual de constantes", "d. Hoja de tratamiento médico farmacológico"], correcta: 0 },
    { id: 55, pregunta: "La técnica de desinfección química hospitalaria que consiste en dispersar un desinfectante líquido en forma de vapores o gas en un espacio cerrado se llama:", opciones: ["a. Vaporización o fumigación", "b. Inmersión instrumental", "c. Loción por frotar", "d. Pulverización por gotas"], correcta: 0 },
    { id: 56, pregunta: "La posición en la que el paciente se encuentra en decúbito supino y los pies de la cama están elevados unos 30-45 cm sobre la cabecera es la posición de:", opciones: ["a. Trendelenburg", "b. Morestin o Trendelenburg invertida", "c. Fowler", "d. Sims"], correcta: 0 }


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
