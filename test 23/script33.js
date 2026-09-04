

// BANCO DE PREGUNTAS DEL TEST 33 (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 1, pregunta: "La técnica de desbridamiento que utiliza enzimas aplicadas tópicamente sobre la herida para digerir selectivamente el tejido necrótico sin dañar el tejido sano se denomina:", opciones: ["a. Desbridamiento enzimático", "b. Desbridamiento autolítico", "c. Desbridamiento quirúrgico", "d. Desbridamiento mecánico"], correcta: 0 },
    { id: 2, pregunta: "La presencia de cristales de ácido úrico en un sedimento urinario, característicos por su forma romboidal y coloración amarillenta, se asocia frecuentemente con:", opciones: ["a. Gota o hiperuricemia", "b. Infección por microorganismos coliformes", "c. Insuficiencia prerrenal aguda", "d. Eliminación fisiológica postprandial de lípidos"], correcta: 0 },
    { id: 3, pregunta: "Para evitar la aparición de úlceras por presión en los maléolos (tobillos) de un paciente en decúbito lateral prolongado, se debe:", opciones: ["a. Colocar una almohada protectora intermedia que evite el contacto directo entre ambos maléolos", "b. Aplicar fricciones enérgicas con alcohol sobre las prominencias óseas", "c. Mantener las extremidades rígidas en extensión completa", "d. Colocar parches hidrocoloides gruesos directamente sobre la lencería"], correcta: 0 },
    { id: 4, pregunta: "El instrumental quirúrgico articulado provisto de una cremallera de fijación y mandíbulas de agarre fuerte que se utiliza para fijar los campos estériles a la piel se denomina:", opciones: ["a. Pinzas de Backhaus o de campo", "b. Pinzas hemostáticas de Pean", "c. Portaagujas de Mayo-Hegar", "d. Separadores de Farabeuf"], correcta: 0 },
    { id: 5, pregunta: "La evacuación de heces mezcladas con alimentos sin digerir debido a un tránsito intestinal sumamente acelerado se conoce técnicamente como:", opciones: ["a. Lientería", "b. Esteatorrea", "c. Melenas", "d. Acolia biliar"], correcta: 0 },
    { id: 6, pregunta: "Al realizar el lavado de la cara a un paciente encamado, ¿cuál debe ser el orden de limpieza correcto de las distintas zonas faciales?:", opciones: ["a. Ojos (del lagrimal hacia fuera), frente, mejillas, nariz, boca y orejas", "b. Nariz, boca, mejillas, ojos y nalgas en último lugar", "c. Orejas, cuello, región frontal, ojos y mejillas circulares", "d. El orden es totalmente indiferente en la práctica de enfermería"], correcta: 0 },
    { id: 7, pregunta: "La túnica muscular gruesa encargada de realizar la contracción involuntaria y rítmica que propulsa la sangre fuera del corazón se denomina:", opciones: ["a. Miocardio", "b. Endocardio", "c. Pericardio", "d. Epicardio"], correcta: 0 },
    { id: 8, pregunta: "La escala de valoración que mide específicamente la capacidad intelectual y el grado de deterioro cognitivo en el paciente geriátrico mediante 10 ítems sencillos es el:", opciones: ["a. Test o Cuestionario de Pfeiffer", "b. Índice de Barthel", "c. Escala de Norton", "d. Índice de Katz"], correcta: 0 },
    { id: 9, pregunta: "El procedimiento químico mediante el cual se destruyen los microorganismos patógenos (excepto formas de resistencia como esporas) sobre objetos inanimados se denomina:", opciones: ["a. Desinfección", "b. Antisepsia", "c. Asepsia", "d. Esterilización"], correcta: 0 },
    { id: 10, pregunta: "La acumulación patológica de líquido serofibrinoso de origen inflamatorio en el interior de la cavidad pleural se conoce como:", opciones: ["a. Pleuritis exudativa o derrame pleural", "b. Neumotórax espontáneo", "c. Hemotórax masivo", "d. Quilotórax agudo"], correcta: 0 },
    { id: 11, pregunta: "La contracción máxima o disminución del diámetro pupilar provocada por un estímulo luminoso intenso se denomina clínicamente:", opciones: ["a. Miosis fotomotora", "b. Midriasis refleja", "c. Anisocoria pupilar", "d. Isocoria adaptativa"], correcta: 0 },
    { id: 12, pregunta: "La inflamación de una vena asociada a la presencia de un trombo o coágulo sanguíneo que obstruye de forma parcial o total su luz se denomina:", opciones: ["a. Tromboflebitis", "b. Arteriosclerosis", "c. Aneurisma sacular", "d. Linfangeítis"], correcta: 0 },
    { id: 13, pregunta: "La desambulación asistida de un paciente que presenta hemiplejía exige al auxiliar de enfermería caminar colocándose habitualmente en:", opciones: ["a. El lado afectado del paciente para servirle de punto de apoyo y control", "b. El lado sano del paciente tirando de su extremidad superior libre", "c. La parte posterior sujetando fijamente la región lumbar", "d. La parte anterior guiándole mediante señales de forma visual"], correcta: 0 },
    { id: 14, pregunta: "El hilo de sutura quirúrgica de origen orgánico que es absorbible de forma natural por las enzimas digestivas tisulares del organismo se denomina:", opciones: ["a. Catgut", "b. Seda trenzada", "c. Hilo de nailon", "d. Hilo de acero inoxidable"], correcta: 0 },
    { id: 15, pregunta: "La parálisis completa que afecta de forma selectiva a las dos extremidades inferiores (ambas piernas) debido a una lesión medular se llama:", opciones: ["a. Paraplejía", "b. Hemiplejía", "c. Tetraplejía", "d. Monoplejía"], correcta: 0 },
    { id: 16, pregunta: "La sonda rectal flexible de una sola luz se utiliza de forma primordial en los cuidados hospitalarios para lograr:", opciones: ["a. Facilitar la expulsión de gases acumulados en el colon", "b. Suministrar una perfusión intravenosa periférica", "c. Realizar un lavado continuo en hematurias", "d. Medir el aclaramiento analítico de creatinina"], correcta: 0 },
    { id: 17, pregunta: "Un pulso arterial que se caracteriza por ser sumamente rápido, irregular y con variaciones continuas de amplitud se asocia clínicamente con:", opciones: ["a. Fibrilación auricular u otras arritmias complejas", "b. Bradicardia sinusal en reposo", "c. Pulso alternante rítmico", "d. Fisiología cardiovascular normal"], correcta: 0 },
    { id: 18, pregunta: "La complicación de una herida quirúrgica que cursa con la salida de órganos abdominales o vísceras a través de la incisión totalmente abierta se denomina:", opciones: ["a. Evisceración", "b. Dehiscencia simple", "c. Queloidosis", "d. Fistulización"], correcta: 0 },
    { id: 19, pregunta: "La inmunidad activa artificial se confiere a un individuo de forma preventiva mediante la administración controlada de:", opciones: ["a. Vacunas con antígenos atenuados, inactivados o sus componentes", "b. Gammaglobulinas con anticuerpos ya preformados", "c. Sueros hiperinmunes de origen animal", "d. Transferencia transplacentaria de anticuerpos IgG maternales"], correcta: 0 },
    { id: 20, pregunta: "La técnica de aislamiento hospitalario indicada para evitar el contagio de enfermedades infecciosas que se transmiten por contacto directo con la piel o fómites del paciente se denomina:", opciones: ["a. Aislamiento de contacto", "b. Aislamiento respiratorio por gotas", "c. Aislamiento aéreo estricto", "d. Aislamiento protector inverso"], correcta: 0 },
    { id: 21, pregunta: "Si se prescribe la administración de 1000 ml de suero glucosado al 5% para pasar en 6 horas, ¿cuántas gotas por minuto deben programarse en el sistema de goteo estándar?:", opciones: ["a. 55 gotas/min", "b. 28 gotas/min", "c. 42 gotas/min", "d. 14 gotas/min"], correcta: 0 },
    { id: 22, pregunta: "El principal riesgo asociado a la reutilización inadecuada de material clasificado como semicrítico en el ámbito hospitalario es:", opciones: ["a. La transmisión de infecciones nosocomiales cruzadas por mucosas", "b. El deterioro estético del instrumental", "c. El aumento del coste por proceso de lavado", "d. La alteración de los registros informáticos de almacén"], correcta: 0 },
    { id: 23, pregunta: "La enzima presente en el jugo pancreático encargada de degradación química de los lípidos o grasas neutras se denomina:", opciones: ["a. Lipasa pancreática", "b. Amilasa salival", "c. Pepsina gástrica", "d. Tripsina secretora"], correcta: 0 },
    { id: 24, pregunta: "Las articulaciones móviles que permiten una amplia gama de movimientos (como la articulación de la cadera o el hombro) se clasifican como:", opciones: ["a. Diartrosis", "b. Sinartrosis", "c. Anfiartrosis", "d. Suturas"], correcta: 0 },
    { id: 25, pregunta: "La sonda de Levin es un dispositivo flexible de una sola luz utilizado en el sondaje nasogástrico con la finalidad de:", opciones: ["a. Administrar nutrición, medicamentos o realizar descompresión gástrica", "b. Permitir el inflado de balones compresores en varices", "c. Drenar la vía biliar y pancreática de forma simultánea", "d. Suministrar irrigación vesical intermitente"], correcta: 0 },
    { id: 26, pregunta: "La medición del perímetro braquial es una determinación útil para valorar de forma rápida en nutrición:", opciones: ["a. La reserva de masa muscular esquelética del paciente", "b. La reserva de grasa o tejido adiposo subcutáneo", "c. El riesgo inminente de sufrir UPP por fricción", "d. El grado de edema periférico"], correcta: 0 },
    { id: 27, pregunta: "Un pulso arterial que se caracteriza por ser rítmico pero con una amplitud sumamente baja debido a una disminución de la volemia se conoce clínicamente como:", opciones: ["a. Pulso filiforme", "b. Pulso alternante", "c. Pulso dicroto", "d. Pulso bisferiens"], correcta: 0 },
    { id: 28, pregunta: "La posición quirúrgica en la que el paciente descansa en decúbito supino con el tronco inclinado hacia delante y la cabeza más elevada que los pies se denomina:", opciones: ["a. Posición de Morestin o Trendelenburg invertida", "b. Posición de Trendelenburg", "c. Posición de Fowler alta", "d. Posición de Roser"], correcta: 0 },
    { id: 29, pregunta: "La complicación de la inmovilidad prolongada a nivel respiratorio que se caracteriza por el colapso parcial o total de los alvéolos debido a la acumulación de secreciones se llama:", opciones: ["a. Atelectasia", "b. Enfisema pulmonar", "c. Trombosis pulmonar", "d. Bronquitis crónica"], correcta: 0 },
    { id: 30, pregunta: "La técnica de esterilización por calor húmedo que utiliza vapor de agua a presión exige habitualmente un tiempo mínimo de exposición a 121ºC de:", opciones: ["a. 15 a 20 minutos", "b. 5 a 10 minutos", "c. 1 hora", "d. 2 horas"], correcta: 0 },
    { id: 31, pregunta: "Al realizar el cambio de pañal a un paciente encamado con incontinencia urinaria, ¿qué precaución es prioritaria para proteger su piel?:", opciones: ["a. Limpiar meticulosamente, secar sin friccionar y aplicar crema barrera", "b. Mantener la zona húmeda para evitar el rozamiento", "c. Limpiar utilizando soluciones alcohólicas puras de arrastre", "d. Cambiar el pañal estrictamente una vez cada 24 horas"], correcta: 0 },
    { id: 32, pregunta: "La presencia de un exceso de grasa no digerida en las deposiciones, dándoles un aspecto brillante, pastoso y maloliente, se denomina clínicamente:", opciones: ["a. Esteatorrea", "b. Melenas", "c. Disentería", "d. Acolia"], correcta: 0 },
    { id: 33, pregunta: "El Miniexamen Cognoscitivo (MEC) de Lobo es un instrumento de valoración geriátrica utilizado de forma primordial para medir:", opciones: ["a. El grado de deterioro cognitivo o intelectual", "b. El nivel de autonomía funcional en las actividades básicas", "c. El riesgo de sufrir caídas accidentales domésticas", "d. La sobrecarga emocional del cuidador principal"], correcta: 0 },
    { id: 34, pregunta: "El dispositivo de oxigenoterapia de bajo flujo que consta de un tubo plástico flexible que se introduce en la faringe a través de la nariz es:", opciones: ["a. El catéter nasofaríngeo", "b. La mascarilla tipo Venturi", "c. La gafa nasal estándar", "d. El tubo endotraqueal oclusivo"], correcta: 0 },
    { id: 35, pregunta: "La presencia de virus en multiplicación activa en el torrente sanguíneo se denomina clínicamente:", opciones: ["a. Viremia", "b. Septicemia", "c. Bacteriemia", "d. Toxemia"], correcta: 0 },
    { id: 36, pregunta: "Las quemaduras que afectan a todo el espesor de la piel, destruyendo la epidermis, la dermis y afectando a tejidos profundos, caracterizándose por una costra o escara blanquecina o negruzca e indolora, son de:", opciones: ["a. Tercer grado", "b. Primer grado", "c. Segundo grado", "d. Cuarto grado"], correcta: 0 },
    { id: 37, pregunta: "La capa más superficial de la piel, constituida por tejido epitelial estratificado queratinizado y libre de vasos sanguíneos, es la:", opciones: ["a. Epidermis", "b. Dermis", "c. Hipodermis", "d. Tejido subcutáneo"], correcta: 0 },
    { id: 38, pregunta: "El material clínico que entra en contacto directo con la piel intacta del paciente (como los manguitos de esfigmomanómetro) se clasifica como:", opciones: ["a. Material no crítico", "b. Material crítico", "c. Material semicrítico", "d. Material fungible"], correcta: 0 },
    { id: 39, pregunta: "La alteración del ritmo respiratorio que cursa con una disminución de la frecuencia por debajo de los valores fisiológicos normales se llama:", opciones: ["a. Bradipnea", "b. Taquipnea", "c. Apnea", "d. Ortopnea"], correcta: 0 },
    { id: 40, pregunta: "El contenedor rígido de color negro o gris común se utiliza en los hospitales para desechar de forma exclusiva:", opciones: ["a. Residuos urbanos o asimilables a urbanos (cartón, papel, restos comunes)", "b. Agujas y objetos cortopunzantes contaminados", "c. Medicamentos citostáticos caducados", "d. Muestras biológicas infecciosas de laboratorio"], correcta: 0 },
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
    { id: 51, pregunta: "La presencia de proteínas en la orina en cantidades anormales (proteinuria) es un indicador clínico que suele asociarse a:", opciones: ["a. Alteración o daño en la filtración glomerular renal", "b. Infección aislada del tracto urinario bajo", "c. Litiasis alojada en la vejiga urinaria", "d. Fisiología metabólica normal en ayunas"], correcta: 0 },
    { id: 52, pregunta: "El principal carbohidrato de reserva energética que se almacena en el hígado y en los músculos de los animales se denomina:", opciones: ["a. Glucógeno", "b. Almidón", "c. Celulosa", "d. Sacarosa"], correcta: 0 },
    { id: 53, pregunta: "La administración de un enema en un paciente adulto exige colocarlo preferentemente en posición de:", opciones: ["a. Sims o decúbito lateral izquierdo con la rodilla derecha flexionada", "b. Decúbito supino estricto con almohada alta", "c. Posición de Fowler elevada a 90 grados", "d. Decúbito prono con flexión abdominal"], correcta: 0 },
    { id: 54, pregunta: "El documento clínico hospitalario que contiene los datos de identificación, filiación y el resumen de los motivos de ingreso y alta del paciente se llama:", opciones: ["a. Hoja clínico-estadística o de ingreso y alta", "b. Hoja de evolución de enfermería diaria", "c. Gráfica ordinaria mensual de constantes", "d. Hoja de tratamiento médico farmacológico"], correcta: 0 },
    { id: 55, pregunta: "La técnica de desinfección química hospitalaria que consiste en dispersar un desinfectante líquido en forma de vapores o gas en un espacio cerrado se llama:", opciones: ["a. Vaporización o fumigación", "b. Inmersión instrumental", "c. Loción por frotar", "d. Pulverización por gotas"], correcta: 0 },
    { id: 56, pregunta: "La posición en la que el paciente se encuentra en decúbito supino y los pies de la cama están elevados unos 30-45 cm sobre la cabecera es la posición de:", opciones: ["a. Trendelenburg", "b. Morestin o Trendelenburg invertida", "c. Fowler", "d. Sims"], correcta: 0 },
    { id: 57, pregunta: "La presencia de cilindros eritrocitarios en el examen microscópico de orina es un signo patognomónico de:", opciones: ["a. Glomerulonefritis o sangrado del parénquima renal", "b. Cistitis hemorrágica baja", "c. Uretritis aguda bacteriana", "d. Litiasis renal asintomática"], correcta: 0 },
    { id: 58, pregunta: "La escala de Braden valora el riesgo de desarrollar UPP midiendo los siguientes parámetros: percepción sensorial, exposición a la humedad, actividad, movilidad, nutrición y:", opciones: ["a. Fricción y peligro de rozamiento", "b. Incontinencia de esfínteres", "c. Estado mental cognitivo", "d. Edad del paciente"], correcta: 0 },
    { id: 59, pregunta: "La complicación de una herida quirúrgica abdominal que consiste en la salida de las vísceras fuera de la cavidad a través de la incisión abierta se denomina:", opciones: ["a. Evisceración", "b. Eventración profunda", "c. Dehiscencia parcial", "d. Queloidosis"], correcta: 0 },
    { id: 60, pregunta: "El método de esterilización físico por calor seco que utiliza una estufa Poupinel actúa destruyendo los microorganismos mediante el mecanismo de:", opciones: ["a. Oxidación de las proteínas celulares", "b. Coagulación del protoplasma celular", "c. Alquilación de los ácidos nucleicos", "d. Fijación de la membrana citoplasmática"], correcta: 0 }


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
