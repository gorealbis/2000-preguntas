// BANCO DE PREGUNTAS DEL TEST 35 (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 1, pregunta: "La técnica de desbridamiento que consiste en la aplicación de apósitos hidrocoloides para que las propias enzimas e hidratación de la herida eliminen de forma natural el tejido necrótico es el:", opciones: ["a. Desbridamiento autolítico", "b. Desbridamiento quirúrgico o cortante", "c. Desbridamiento mecánico por arrastre", "d. Desbridamiento químico enzimático"], correcta: 0 },
    { id: 2, pregunta: "La presencia de cristales de fosfato triple (estruvita) en un sedimento urinario, característicos por su forma de 'tapa de ataúd', se asocia frecuentemente con:", opciones: ["a. Infecciones del tracto urinario por gérmenes productores de ureasa", "b. Gota o hiperuricemia crónica severa", "c. Insuficiencia renal crónica avanzada", "d. Eliminación fisiológica postprandial de calcio"], correcta: 0 },
    { id: 3, pregunta: "Para evitar la aparición de úlceras por presión en los talones de un paciente en decúbito supino prolongado, la medida más eficaz es:", opciones: ["a. Mantener los talones totalmente elevados en el aire mediante almohadillas bajo las pantorrillas", "b. Aplicar fricciones enérgicas con soluciones alcohólicas puras", "c. Colocar parches hidrocoloides gruesos directamente sobre las sábanas", "d. Reducir drásticamente el aporte de líquidos diarios en la dieta común"], correcta: 0 },
    { id: 4, pregunta: "El instrumental quirúrgico de prensión elástica o continua con cremallera y mandíbulas estriadas transversales que se utiliza para ocluir vasos sanguíneos se denomina:", opciones: ["a. Pinza hemostática de Pean o de Kocher", "b. Pinza de disección sin dientes", "c. Portaagujas de Mayo-Hegar", "d. Separador autorretentivo de Balfour"], correcta: 0 },
    { id: 5, pregunta: "La presencia de abundantes grasas no digeridas en las heces, dándoles un aspecto brillante, pastoso y maloliente, se denomina técnicamente:", opciones: ["a. Esteatorrea", "b. Melenas", "c. Lientería", "d. Acolia biliar"], correcta: 0 },
    { id: 6, pregunta: "Al realizar el aseo bucal a un paciente encamado inconsciente, ¿cuál es el accesorio de protección indispensable que se introduce para mantener las mandíbulas abiertas de forma segura?:", opciones: ["a. Un depresor lingual almohadillado o un abrebocas helicoidal", "b. Un esfigmomanómetro portátil invertido", "c. Una cánula rectal de polivinilo blando", "d. No se precisa ningún accesorio protector en la práctica"], correcta: 0 },
    { id: 7, pregunta: "La túnica o capa interna de los vasos sanguíneos, constituida por una sola capa de células endoteliales lisas que reducen la fricción de la sangre, se denomina:", opciones: ["a. Íntima o endotelio", "b. Media o muscular", "c. Adventicia o conectiva", "d. Capa elástica externa"], correcta: 0 },
    { id: 8, pregunta: "La escala utilizada en los cuidados de enfermería geriátrica que valora de forma específica el nivel de sobrecarga emocional y física del cuidador principal es la:", opciones: ["a. Escala o Cuestionario de Zarit", "b. Índice de Barthel de autonomía", "c. Escala de Norton para la piel", "d. Escala de Lawton-Brody"], correcta: 0 },
    { id: 9, pregunta: "El desinfectante químico hospitalario de nivel intermedio recomendado para la desinfección de superficies lisas y mobiliario clínico es:", opciones: ["a. Solución hidroalcohólica al 70% o derivados fenólicos", "b. Glutaraldehído concentrado al 2%", "c. Óxido de etileno gaseoso puro", "d. Formaldehído en estufa caliente"], correcta: 0 },
    { id: 10, pregunta: "La presencia de aire y pus de forma simultánea en el interior de la cavidad pleural se denomina técnicamente:", opciones: ["a. Piomeumotórax", "b. Quilotórax agudo", "c. Hemotórax masivo", "d. Pleuritis exudativa simple"], correcta: 0 },
    { id: 11, pregunta: "La contracción permanente de las pupilas, de forma que presentan un diámetro anormalmente reducido por debajo de los valores fisiológicos ordinarios, se denomina:", opciones: ["a. Miosis de reflejo fotomotor", "b. Midriasis", "c. Anisocoria pupilar", "d. Isocoria adaptativa"], correcta: 0 },
    { id: 12, pregunta: "La inflamación de la capa interna de una arteria, frecuentemente de origen autoinmune o infeccioso, se conoce clínicamente como:", opciones: ["a. Arteritis", "b. Flebitis superficial", "c. Linfangeítis aguda", "d. Aneurisma sacular"], correcta: 0 },
    { id: 13, pregunta: "La desambulación asistida de un paciente que camina utilizando una muleta simple exige que esta se sujete e incorpore siempre en:", opciones: ["a. El lado sano o contralateral al miembro inferior afectado", "b. El lado afectado para recibir el peso de forma vertical", "c. El lado dominante de forma indiferente a la patología ósea", "d. Ambas manos alternando el apoyo a cada paso dado"], correcta: 0 },
    { id: 14, pregunta: "El hilo de sutura quirúrgica de origen orgánico natural que destaca por ser no absorbible y poseer una alta resistencia a la tracción es la:", opciones: ["a. Seda", "b. Catgut simple", "c. Polidioxanona (PDS)", "d. Ácido poliglicólico (vicryl)"], correcta: 0 },
    { id: 15, pregunta: "La parálisis completa que afecta exclusivamente a una extremidad corporal (un único brazo o una sola pierna) se denomina clínicamente:", opciones: ["a. Monoplejía", "b. Hemiplejía", "c. Paraplejía", "d. Tetraplejía"], correcta: 0 },
    { id: 16, pregunta: "La sonda vesical flexible de tres vías utilizada de forma específica para realizar lavados vesicales continuos ante grandes hematurias es la sonda de:", opciones: ["a. Foley de tres vías (o sonda de irrigación)", "b. Nelaton común", "c. Pezzer rígida", "d. Sonda de Robinson"], correcta: 0 },
    { id: 17, pregunta: "Un pulso arterial que presenta un ritmo totalmente irregular y caótico, reflejo de una desorganización eléctrica en las aurículas, es característico de:", opciones: ["a. Fibrilación auricular", "b. Bradicardia sinusal ordinaria", "c. Pulso alternante compensado", "d. Fisiología cardiovascular normal"], correcta: 0 },
    { id: 18, pregunta: "La complicación de una incisión quirúrgica abdominal que cursa con la separación de los bordes cutáneos exponiendo el tejido subcutáneo se denomina:", opciones: ["a. Dehiscencia de la herida", "b. Evisceración completa", "c. Eventración profunda", "d. Queloidosis cicatrizal"], correcta: 0 },
    { id: 19, pregunta: "La inmunidad pasiva natural se adquiere por el feto o recién nacido mediante la transferencia biológica directa de:", opciones: ["a. Anticuerpos maternos IgG a través de la placenta e IgA en la leche materna", "b. Vacunas de antígenos atenuados en planta", "c. Inyección de gammaglobulinas hiperinmunes", "d. Síntesis propia tras exposición a patógenos ambientales"], correcta: 0 },
    { id: 20, pregunta: "La técnica de aislamiento hospitalario indicada para evitar la transmisión de patógenos que se propagan a través de gotitas respiratorias de gran tamaño a cortas distancias se denomina:", opciones: ["a. Aislamiento por gotas", "b. Aislamiento aéreo estricto", "c. Aislamiento entérico común", "d. Aislamiento protector inverso"], correcta: 0 },
    { id: 21, pregunta: "Si se prescribe la administración de 1000 ml de suero fisiológico para pasar en 8 horas, ¿cuántas gotas por minuto deben programarse en el sistema de goteo estándar?:", opciones: ["a. 42 gotas/min", "b. 21 gotas/min", "c. 63 gotas/min", "d. 14 gotas/min"], correcta: 0 },
    { id: 22, pregunta: "El principal riesgo asociado a la reutilización inadecuada de material clasificado como crítico en el ámbito hospitalario es:", opciones: ["a. La transmisión de infecciones nosocomiales cruzadas", "b. El deterioro estético del instrumental", "c. El aumento del coste por proceso de lavado", "d. La alteración de los registros informáticos de almacén"], correcta: 0 },
    { id: 23, pregunta: "La enzima presente en el jugo gástrico encargada de iniciar la degradación y digestión química de las proteínas se denomina:", opciones: ["a. Pepsina", "b. Amilasa gástrica", "c. Lipasa pancreática", "d. Tripsina activa"], correcta: 0 },
    { id: 24, pregunta: "Las articulaciones fijas o inmóviles, como las suturas que unen los huesos del cráneo, pertenecen al grupo de las:", opciones: ["a. Sinartrosis", "b. Anfiartrosis", "c. Diartrosis", "d. Anfiartrodias"], correcta: 0 },
    { id: 25, pregunta: "La sonda de Sengstaken-Blakemore es un dispositivo específico provisto de balones hinchables que se utiliza para:", opciones: ["a. Taponar por compresión la hemorragia de varices esofágicas", "b. Realizar lavados gástricos en intoxicaciones agudas", "c. Administrar nutrición enteral a largo plazo", "d. Drenar la orina residual en vejigas neurógenas"], correcta: 0 },
    { id: 26, pregunta: "El indicador antropométrico en nutrición que se calcula dividiendo el peso en kilogramos por el cuadrado de la talla en metros se denomina:", opciones: ["a. Índice de Masa Corporal (IMC) o de Quetelet", "b. Pliegue cutáneo tricipital", "c. Balance nitrogenado total", "d. Perímetro braquial"], correcta: 0 },
    { id: 27, pregunta: "Un pulso arterial que se caracteriza por ser muy débil, rápido y difícil de palpar en situaciones de shock grave se denomina:", opciones: ["a. Pulso filiforme", "b. Pulso alternante", "c. Pulso dicroto", "d. Pulso de rampa"], correcta: 0 },
    { id: 28, pregunta: "La posición quirúrgica en la que el paciente descansa boca abajo en decúbito prono con la mesa quebrada a nivel de las caderas se conoce como:", opciones: ["a. Posición de navaja sevillana o Kraske", "b. Posición de Trendelenburg", "c. Posición de Morestin", "d. Posición ginecológica"], correcta: 0 },
    { id: 29, pregunta: "La complicación de la inmovilidad prolongada en el sistema musculoesquelético que cursa con acortamiento permanente de las fibras musculares se llama:", opciones: ["a. Contractura muscular o rigidez articular", "b. Atrofia ósea por desuso", "c. Osteoporosis adaptativa", "d. Luxación patológica espontánea"], correcta: 0 },
    { id: 30, pregunta: "La técnica de desinfección química por inmersión exige que el instrumental clínico esté previamente:", opciones: ["a. Lavado, aclarado con agua y completamente seco", "b. Esterilizado en autoclave Poupinel", "c. Impregnado en solución hidroalcohólica caliente", "d. Mojado en agua jabonosa hirviendo"], correcta: 0 },
    { id: 31, pregunta: "Al realizar la cama hospitalaria vacía (cerrada), la sábana encimera se coloca fijando las esquinas inferiores mediante la técnica de:", opciones: ["a. Esquina en mitra o mitra", "b. Pliegue doble longitudinal", "c. Dobladillo simple inverso", "d. Nudo de fijación lateral"], correcta: 0 },
    { id: 32, pregunta: "La presencia de sangre fresca de color rojo brillante mezclada de forma evidente con las heces se denomina:", opciones: ["a. Rectorragia o hematoquecia", "b. Melenas", "c. Esteatorrea", "d. Coluria hepática"], correcta: 0 },
    { id: 33, pregunta: "La escala de Pfeiffer es un instrumento de cribado rápido utilizado en geriatría para valorar:", opciones: ["a. El grado de deterioro cognitivo o intelectual", "b. La capacidad para realizar las actividades instrumentales de la vida diaria", "c. El riesgo de sufrir úlceras por presión", "d. El estado de nutrición global del anciano"], correcta: 0 },
    { id: 34, pregunta: "El método de administración de oxígeno de bajo flujo que permite mezclar el gas con el aire ambiente mediante orificios laterales es:", opciones: ["a. La mascarilla facial simple", "b. El tubo endotraqueal oclusivo", "c. La tienda de oxígeno infantil", "d. La gafa nasal con regulador Venturi"], correcta: 0 },
    { id: 35, pregunta: "La presencia de bacterias viables y en multiplicación activa en el torrente sanguíneo se denomina clínicamente:", opciones: ["a. Septicemia o bacteriemia", "b. Toxemia bacteriana", "c. Viremia sistémica", "d. Piorrea obstructiva"], correcta: 0 },
    { id: 36, pregunta: "Las quemaduras que afectan a la epidermis y a la dermis de forma parcial, cursando con dolor intenso y formación de flictenas (ampollas), son de:", opciones: ["a. Segundo grado", "b. Primer grado", "c. Tercer grado", "d. Cuarto grado"], correcta: 0 },
    { id: 37, pregunta: "La capa más interna de la piel, constituida fundamentalmente por tejido conectivo laxo y células adiposas que almacenan grasa, es la:", opciones: ["a. Hipodermis o tejido subcutáneo", "b. Dermis reticular", "c. Epidermis superficial", "d. Dermis papilar"], correcta: 0 },
    { id: 38, pregunta: "El material clínico que se introduce directamente en el torrente sanguíneo o en cavidades orgánicas estériles (como los catéteres vasculares) se clasifica como:", opciones: ["a. Material crítico", "b. Material semicrítico", "c. Material no crítico", "d. Material fungible blando"], correcta: 0 },
    { id: 39, pregunta: "La respiración que cursa con un cese temporal y transitorio de los movimientos ventilatorios se denomina:", opciones: ["a. Apnea", "b. Disnea", "c. Bradipnea", "d. Ortopnea"], correcta: 0 },
    { id: 40, pregunta: "El residuo hospitalario que contiene fluidos biológicos infecciosos o agujas usadas se desecha en un contenedor de color:", opciones: ["a. Rojo o amarillo según el estándar de biocontaminados", "b. Negro o gris común", "c. Azul para cartón clínico", "d. Verde para vidrios de ampollas"], correcta: 0 },
    { id: 41, pregunta: "La monitorización de la presión parcial de dióxido de carbono (PCO2) en sangre arterial es una técnica crítica para valorar:", opciones: ["a. El estado de la ventilación alveolar y el equilibrio ácido-base", "b. La saturación periférica de oxígeno en los capilares", "c. La presión venosa central en la aurícula derecha", "d. El gasto cardíaco neto del ventrículo izquierdo"], correcta: 0 },
    { id: 42, pregunta: "El orgánulo celular que contiene enzimas hidrolíticas encargadas de realizar la digestión intracelular y la destrucción de detritos se denomina:", opciones: ["a. Lisosoma", "b. Mitocondria", "c. Ribosoma", "d. Aparato de Golgi"], correcta: 0 },
    { id: 43, pregunta: "La sonda de Levin es un dispositivo flexible de una sola luz que se introduce por vía nasal con el objetivo clínico principal de:", opciones: ["a. Realizar descompresión gástrica, aspiración de jugos o administración de nutrición", "b. Drenar la orina de forma continua en retenciones agudas", "c. Controlar la hemorragia activa de varices esofágicas por compresión", "d. Aspirar secreciones del árbol traqueobronquial profundo"], correcta: 0 },
    { id: 44, pregunta: "La eliminación de los residuos sanitarios cortantes o punzantes (como agujas y hojas de bisturí) exige su depósito inmediato en:", opciones: ["a. Contenedores rígidos e imperforables resistentes a la perforación", "b. Bolsas de polietileno galga de color negro común", "c. Bolsas amarillas de baja densidad situadas en el carro de curas", "d. Cajas de cartón clínico sin recubrimiento interno"], correcta: 0 },
    { id: 45, pregunta: "Dentro de la escala analgésica de la O.M.S., los fármacos opioides potentes como el fentanilo o la oxicodona se sitúan específicamente en el:", opciones: ["a. Tercer escalón", "b. Primer escalón", "c. Segundo escalón", "d. Cuarto escalón"], correcta: 0 },
    { id: 46, pregunta: "La alteración observable en la piel de un paciente encamado que se manifiesta por una pérdida de la continuidad epidérmica (abrasión o ampolla) se clasifica como UPP de:", opciones: ["a. Estadio o Grado II", "b. Estadio o Grado I", "c. Estadio o Grado III", "d. Estadio o Grado IV"], correcta: 0 },
    { id: 47, pregunta: "El tipo de desinfección hospitalaria que se realiza de manera continua en la habitación del paciente mientras este permanece ingresado se denomina:", opciones: ["a. Desinfección concurrente o concomitante", "b. Desinfección terminal post-alta", "c. Esterilización ambiental por ozonizadores", "d. Antisepsia de arrastre superficial"], correcta: 0 },
    { id: 48, pregunta: "La posición quirúrgica en la que el paciente se encuentra en decúbito prono con los brazos extendidos hacia delante se conoce como:", opciones: ["a. Decúbito prono o ventral", "b. Posición de Trendelenburg", "c. Posición de Mesa quebrada", "d. Posición ginecológica"], correcta: 0 },
    { id: 49, pregunta: "La disminución del volumen total de orina emitido por un adulto por debajo de 500 ml en 24 horas se denomina clínicamente:", opciones: ["a. Oliguria", "b. Anuria", "c. Poliuria", "d. Disuria"], correcta: 0 },
    { id: 50, pregunta: "La escala analógica visual (EVA) es un instrumento clínico utilizado de forma primordial en los cuidados de enfermería para medir:", opciones: ["a. La intensidad del dolor percibido por el paciente", "b. El nivel de sobrecarga del cuidador principal", "c. El grado de deterioro intelectual o cognitivo", "d. El riesgo de sufrir úlceras por presión por humedad"], correcta: 0 },
    { id: 51, pregunta: "La presencia de cálculos o concreciones minerales en el interior de los riñones o de las vías urinarias se denomina:", opciones: ["a. Urolitiasis o nefrolitiasis", "b. Cistitis supurativa", "c. Pielonefritis aguda", "d. Glomerulonefritis"], correcta: 0 },
    { id: 52, pregunta: "El principal tipo de lípidos que forman la estructura bicapa de las membranas celulares del organismo humano son:", opciones: ["a. Los fosfolípidos", "b. Los triglicéridos neutros", "c. Los ácidos grasos libres", "d. Las lipoproteínas plasmáticas"], correcta: 0 },
    { id: 53, pregunta: "La administración de un enema de limpieza exige que la solución líquida se introduzca en el recto a una temperatura aproximada de:", opciones: ["a. 37ºC a 40ºC (temperatura corporal)", "b. 20ºC a 25ºC (temperatura ambiente)", "c. 15ºC para inducir vasoconstricción", "d. 45ºC para ablandar los esfacelos fecaloides"], correcta: 0 },
    { id: 54, pregunta: "El documento clínico hospitalario donde se registran los tratamientos médicos prescritos, las dosis y los horarios de administración de fármacos se llama:", opciones: ["a. Hoja de tratamiento médico o de medicación", "b. Hoja de evolución de enfermería", "c. Gráfica ordinaria mensual de constantes", "d. Hoja clínico-estadística de admisión"], correcta: 0 },
    { id: 55, pregunta: "La destrucción de microorganismos patógenos sobre tejidos vivos (como la piel del paciente antes de una incisión) mediante antisépticos se denomina:", opciones: ["a. Antisepsia", "b. Asepsia quirúrgica", "c. Desinfección terminal", "d. Esterilización ambiental"], correcta: 0 },
    { id: 56, pregunta: "La posición en la que el paciente descansa sobre un plano inclinado de forma que la cabeza queda más baja que los pies se denomina:", opciones: ["a. Posición de Trendelenburg", "b. Posición de Fowler alta", "c. Posición de Morestin", "d. Posición de Sims"], correcta: 0 },
    { id: 57, pregunta: "La presencia de proteínas en la orina en cantidades superiores a los valores normales se denomina técnicamente:", opciones: ["a. Proteinuria", "b. Glucosuria", "c. Hematuria", "d. Piuria supurativa"], correcta: 0 },
    { id: 58, pregunta: "El test o escala utilizado de forma específica para valorar el nivel de riesgo de sufrir caídas en un paciente anciano institucionalizado es:", opciones: ["a. Escala de J.H. Downton", "b. Índice de Barthel", "c. Escala de Norton", "d. Test de Zarit"], correcta: 0 },
    { id: 59, pregunta: "La complicación de una herida quirúrgica abdominal que cursa con la separación espontánea de los bordes de la incisión se denomina:", opciones: ["a. Dehiscencia", "b. Evisceración", "c. Flictena", "d. Escara necrótica"], correcta: 0 },
    { id: 60, pregunta: "El método de esterilización físico que utiliza vapor de agua a presión y alta temperatura en un recipiente hermético se denomina:", opciones: ["a. Autoclave de vapor", "b. Horno Poupinel", "c. Gas plasma", "d. Estufa de óxido de etileno"], correcta: 0 }


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