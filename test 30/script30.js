// BANCO DE PREGUNTAS DEL TEST 30 (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 1, pregunta: "La técnica de desbridamiento que emplea apósitos de hidrogel para favorecer la licuación natural del tejido necrótico por las propias enzimas del huésped se denomina:", opciones: ["a. Desbridamiento autolítico", "b. Desbridamiento quirúrgico", "c. Desbridamiento mecánico", "d. Desbridamiento enzimático"], correcta: 0 },
    { id: 2, pregunta: "La presencia de cilindros hialinos en un examen microscópico de sedimento urinario puede considerarse normal en situaciones de:", opciones: ["a. Ejercicio físico intenso o deshidratación transitoria", "b. Infección aguda del parénquima renal", "c. Insuficiencia renal crónica avanzada", "d. Obstrucción litiásica de los uréteres"], correcta: 0 },
    { id: 3, pregunta: "Para prevenir la aparición de úlceras por presión en la región sacra de un paciente en sedestación (sentado), el tiempo máximo de permanencia en la misma postura sin realizar cambios de peso debe ser de:", opciones: ["a. 1 hora", "b. 3 horas", "c. 4 horas", "d. 6 horas"], correcta: 0 },
    { id: 4, pregunta: "El instrumental de diéresis utilizado en cirugía menor que consta de un mango plano y una hoja cortante intercambiable de un solo uso se denomina:", opciones: ["a. Bisturí quirúrgico", "b. Tijera de disección Mayo", "c. Cizalla ósea de presión", "d. Pinza de Backhaus"], correcta: 0 },
    { id: 5, pregunta: "La presencia de sangre oculta en heces se determina en el laboratorio clínico principalmente mediante el test bioquímico de:", opciones: ["a. Test de Guayaco o inmunoquímico", "b. Reacción de Benedict", "c. Prueba de aclaramiento", "d. Tinción de Gram"], correcta: 0 },
    { id: 6, pregunta: "Al realizar la higiene bucal a un paciente encamado inconsciente, para evitar la aspiración bronquial de líquidos, se le debe colocar en posición de:", opciones: ["a. Decúbito lateral con la cabeza ligeramente inclinada hacia abajo", "b. Decúbito supino estricto con almohada alta", "c. Posición de Fowler elevada a 90 grados", "d. Posición de Roser en hiperextensión quirúrgica"], correcta: 0 },
    { id: 7, pregunta: "La capa serosa externa que envuelve y protege al corazón, dividida en una hoja visceral y otra parietal, se denomina:", opciones: ["a. Pericardio", "b. Miocardio", "c. Endocardio", "d. Epicardio superficial"], correcta: 0 },
    { id: 8, pregunta: "La escala utilizada en geriatría que valora la capacidad del anciano para realizar las actividades de la vida diaria y puntúa de 0 a 100 es el:", opciones: ["a. Índice de Barthel", "b. Índice de Lawton-Brody", "c. Test cognitivo de Pfeiffer", "d. Escala de Braden"], correcta: 0 },
    { id: 9, pregunta: "El procedimiento físico de desinfección hospitalaria que utiliza agua a una temperatura inferior a la de ebullición (unos 65-75ºC) durante un tiempo determinado se llama:", opciones: ["a. Pasteurización", "b. Hervido", "c. Planchado", "d. Autoclave de vapor"], correcta: 0 },
    { id: 10, pregunta: "La presencia de sangre en el interior de la cavidad pleural debida a un traumatismo torácico se denomina clínicamente:", opciones: ["a. Hemotórax", "b. Neumotórax", "c. Quilotórax", "d. Empiema pleural"], correcta: 0 },
    { id: 11, pregunta: "La dilatación patológica o aumento del diámetro de la pupila por encima de los niveles fisiológicos normales se denomina:", opciones: ["a. Midriasis", "b. Miosis", "c. Isocoria", "d. Anisocoria"], correcta: 0 },
    { id: 12, pregunta: "La inflamación de la pared de una vena, frecuentemente asociada a la formación de un trombo sanguíneo en su interior, se conoce como:", opciones: ["a. Tromboflebitis", "b. Arteriosclerosis", "c. Aneurisma sacular", "d. Variz superficial"], correcta: 0 },
    { id: 13, pregunta: "La técnica de desambulación asistida de un paciente que utiliza muletas axilares exige que el apoyo del peso corporal se realice sobre:", opciones: ["a. Las empuñaduras de las muletas con las manos", "b. Las almohadillas axilares de forma directa", "c. El hombro del auxiliar de enfermería", "d. El miembro inferior afectado de forma rígida"], correcta: 0 },
    { id: 14, pregunta: "El hilo de sutura quirúrgica monofilamento sintético no absorbible, muy utilizado por su alta resistencia a la tracción y baja reacción tisular, es el:", opciones: ["a. Nailon", "b. Catgut simple", "c. Ácido poliglicólico", "d. Seda trenzada"], correcta: 0 },
    { id: 15, pregunta: "La pérdida total de la función motora y voluntaria en las cuatro extremidades (brazos y piernas) se denomina clínicamente:", opciones: ["a. Tetraplejía o cuadriplejía", "b. Paraplejía", "c. Hemiplejía", "d. Monoplejía"], correcta: 0 },
    { id: 16, pregunta: "La administración de un enema de retención exige instruir al paciente para que mantenga el líquido en el colon durante un tiempo mínimo de:", opciones: ["a. 30 minutos", "b. 5 minutos", "c. 2 horas", "d. 12 horas"], correcta: 0 },
    { id: 17, pregunta: "La medición de la frecuencia cardíaca mediante auscultación directa con fonendoscopio sobre el vértice del corazón se denomina:", opciones: ["a. Pulso apical", "b. Pulso radial", "c. Pulso carotídeo", "d. Pulso pedio"], correcta: 0 },
    { id: 18, pregunta: "La complicación de una herida quirúrgica abdominal que cursa con la salida de vísceras al exterior a través de la incisión abierta se denomina:", opciones: ["a. Evisceración", "b. Dehiscencia", "c. Queloidosis", "d. Fistulización"], correcta: 0 },
    { id: 19, pregunta: "La inmunidad que adquiere un individuo de forma inmediata mediante la administración directa de anticuerpos o sueros específicos se clasifica como:", opciones: ["a. Inmunidad artificial pasiva", "b. Inmunidad artificial activa", "c. Inmunidad natural activa", "d. Inmunidad natural pasiva"], correcta: 0 },
    { id: 20, pregunta: "La técnica de aislamiento hospitalario indicada para cortar la transmisión de microorganismos patógenos a través de la vía fecal-oral se denomina:", opciones: ["a. Aislamiento entérico", "b. Aislamiento respiratorio por gotas", "c. Aislamiento de contacto estricto", "d. Aislamiento protector inverso"], correcta: 0 },
    { id: 21, pregunta: "Si se prescribe la administración de 500 ml de suero fisiológico para pasar en 4 horas, ¿cuántas gotas por minuto deben programarse en el sistema de goteo estándar?:", opciones: ["a. 42 gotas/min", "b. 21 gotas/min", "c. 63 gotas/min", "d. 12 gotas/min"], correcta: 0 },
    { id: 22, pregunta: "El principal inconveniente del uso hospitalario de los compuestos clorados (como la lejía) como desinfectantes de superficies es:", opciones: ["a. Su alto poder corrosivo sobre los metales e inestabilidad a la luz", "b. Su nula eficacia frente a virus con envoltura", "c. Que dejan una película aceitosa muy adherente", "d. Su elevado coste económico en comparación con los aldehídos"], correcta: 0 },
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
    { id: 59, pregunta: "La complicación de una herida quirúrgica que cursa con la separación espontánea de los bordes de la incisión se denomina:", opciones: ["a. Dehiscencia", "b. Evisceración", "c. Flictena", "d. Escara necrótica"], correcta: 0 },
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
