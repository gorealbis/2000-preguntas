// BANCO DE PREGUNTAS DEL TEST 29 (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 1, pregunta: "La técnica higiénica mediante la cual se realiza el lavado de la cabeza a un paciente encamado exige situar al paciente en posición de:", opciones: ["a. Roser o de Proetz", "b. Sims izquierda", "c. Decúbito prono con cojín", "d. Fowler baja a 15 grados"], correcta: 0 },
    { id: 2, pregunta: "La presencia de cilindros granulosos en un sedimento urinario suele ser indicativo anatomopatológico de:", opciones: ["a. Una enfermedad renal intrínseca o afección glomerular", "b. Una infección urinaria baja no complicada", "c. Fisiología normal tras ejercicio intenso", "d. Litiasis renal asintomática"], correcta: 0 },
    { id: 3, pregunta: "Para evitar la aparición de úlceras por presión en los talones de un paciente en decúbito supino, la medida más eficaz es:", opciones: ["a. Mantener los talones totalmente en el aire (flotación) mediante almohadillas bajo los gemelos", "b. Aplicar masajes enérgicos con alcohol de 70º sobre la piel ósea", "c. Colocar parches hidrocoloides gruesos directamente en la barandilla móvil", "d. Disminuir el aporte de líquidos diarios en la dieta común"], correcta: 0 },
    { id: 4, pregunta: "El instrumental quirúrgico articulado provisto de dientes en sus extremos que se utiliza para la sujeción fuerte de tejidos o campos se denomina:", opciones: ["a. Pinzas de Backhaus o de campo", "b. Pinzas de disección sin dientes", "c. Separadores de Farabeuf", "d. Portaagujas de Mayo-Hegar"], correcta: 0 },
    { id: 5, pregunta: "La evacuación de heces con un color anormalmente pálido o blanquecino debido a la ausencia de pigmentos biliares se denomina:", opciones: ["a. Acolia", "b. Melenas", "c. Esteatorrea supurativa", "d. Coluria hepática"], correcta: 0 },
    { id: 6, pregunta: "A la hora de trasladar a un paciente desde la cama a una silla de ruedas, la silla debe colocarse idealmente:", opciones: ["a. Al lado de la cama, paralela a ella y con el freno echado de forma segura", "b. A la mitad de los pies de la cama totalmente abierta", "c. En la cabecera retirando la almohada protectora móvil", "d. Separada a una distancia mínima de un metro de la base ósea"], correcta: 0 },
    { id: 7, pregunta: "La capa más interna de la pared del corazón, constituida por un endotelio liso que tapiza las cámaras cardíacas, se denomina:", opciones: ["a. Endocardio", "b. Miocardio", "c. Pericardio", "d. Epicardio"], correcta: 0 },
    { id: 8, pregunta: "La escala de valoración que se utiliza específicamente en geriatría para medir el nivel de equilibrio estático y la marcha es la:", opciones: ["a. Escala o Test de Tinetti", "b. Escala de Norton", "c. Índice de Lawton-Brody", "d. Test cognitivo de Pfeiffer"], correcta: 0 },
    { id: 9, pregunta: "El desinfectante químico de nivel intermedio recomendado para la desinfección de superficies lisas y mobiliario clínico es:", opciones: ["a. Los compuestos de amonio cuaternario o alcohol al 70º", "b. El glutaraldehído concentrado al 2%", "c. El formaldehído en estufa caliente", "d. El agua oxigenada pura concentrada"], correcta: 0 },
    { id: 10, pregunta: "La acumulación de líquido de aspecto seroso en el interior de la cavidad pleural se denomina clínicamente:", opciones: ["a. Hidrotórax o derrame pleural", "b. Neumotórax a tensión", "c. Hemotórax masivo", "d. Empiema pleural agudo"], correcta: 0 },
    { id: 11, pregunta: "El reflejo pupilar que cursa con la contracción de la pupila al proyectar un estímulo luminoso directo sobre el ojo se llama:", opciones: ["a. Miosis fotomotora", "b. Midriasis refleja", "c. Isocoria adaptativa", "d. Anisocoria pupilar"], correcta: 0 },
    { id: 12, pregunta: "La dilatación patológica permanente e irreversible de una vena superficial en los miembros inferiores se conoce como:", opciones: ["a. Variz", "b. Aneurisma sacular", "c. Arteriosclerosis obstructiva", "d. Flebitis superficial"], correcta: 0 },
    { id: 13, pregunta: "La técnica de desambulación asistida con un andador exige que la altura del dispositivo se ajuste de forma que:", opciones: ["a. Los brazos del paciente queden ligeramente flexionados a unos 20-30 grados", "b. Los brazos queden completamente estirados en tensión rígida", "c. El paciente deba doblar la cintura hacia delante", "d. Quede situado por encima de la línea mamaria"], correcta: 0 },
    { id: 14, pregunta: "El hilo de sutura quirúrgica de origen natural que no es absorbible por el organismo y destaca por su alta resistencia es:", opciones: ["a. La seda", "b. El catgut crómico", "c. El ácido poliglicólico", "d. El vicryl sintético"], correcta: 0 },
    { id: 15, pregunta: "La parálisis que afecta exclusivamente a los dos miembros inferiores (piernas) debido a una lesión medular se denomina:", opciones: ["a. Paraplejía", "b. Hemiplejía", "c. Tetraplejía", "d. Monoplejía"], correcta: 0 },
    { id: 16, pregunta: "La sonda rectal se introduce habitualmente en el ano del paciente alcanzando una profundidad de inserción aproximada de:", opciones: ["a. 10 a 15 centímetros", "b. 2 a 3 centímetros", "c. 30 a 40 centímetros", "d. 50 centímetros de longitud"], correcta: 0 },
    { id: 17, pregunta: "La medición de la frecuencia cardíaca mediante la palpación directa de la arteria radial situada en la muñeca se denomina:", opciones: ["a. Pulso radial", "b. Pulso apical", "c. Pulso carotídeo", "d. Pulso femoral"], correcta: 0 },
    { id: 18, pregunta: "El desbridamiento que consiste en la aplicación de apósitos hidrocoloides para que las propias enzimas de la herida eliminen el tejido necrótico es:", opciones: ["a. Desbridamiento autolítico", "b. Desbridamiento quirúrgico o cortante", "c. Desbridamiento mecánico por arrastre", "d. Desbridamiento químico enzimático"], correcta: 0 },
    { id: 19, pregunta: "La inmunidad que adquiere un lactante a través de la transferencia placentaria de anticuerpos IgG maternos se clasifica como:", opciones: ["a. Inmunidad natural pasiva", "b. Inmunidad natural activa", "c. Inmunidad artificial activa", "d. Inmunidad artificial pasiva"], correcta: 0 },
    { id: 20, pregunta: "La técnica de aislamiento hospitalario que exige el uso obligatorio de mascarilla de alta eficacia (FFP2/FFP3) al entrar en la habitación es:", opciones: ["a. Aislamiento por transmisión aérea", "b. Aislamiento protector inverso", "c. Aislamiento entérico común", "d. Aislamiento de contacto"], correcta: 0 },
    { id: 21, pregunta: "Si se prescribe la administración de 1500 ml de suero fisiológico para pasar en 12 horas, ¿cuántas gotas por minuto deben programarse en el sistema de goteo estándar?:", opciones: ["a. 42 gotas/min", "b. 21 gotas/min", "c. 63 gotas/min", "d. 12 gotas/min"], correcta: 0 },
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
    { id: 48, pregunta: "La posición quirúrgica en la que el paciente se encuentra en decúbito prono con los brazos extendidos hacia delante se conoce como:", opciones: ["a. Decúbito prono o ventral", "b. Posición de Trendelenburg", "c. Posición de Sims", "d. Posición ginecológica"], correcta: 0 },
    { id: 49, pregunta: "La disminución del volumen total de orina emitido por un adulto por debajo de 500 ml en 24 horas se denomina clínicamente:", opciones: ["a. Oliguria", "b. Anuria", "c. Poliuria", "d. Disuria"], correcta: 0 },
    { id: 50, pregunta: "La escala analógica visual (EVA) es un instrumento clínico utilizado de forma primordial en los cuidados de enfermería para medir:", opciones: ["a. La intensidad del dolor percibido por el paciente", "b. El nivel de sobrecarga del cuidador principal", "c. El grado de deterioro intelectual o cognitivo", "d. El riesgo de sufrir úlceras por presión por humedad"], correcta: 0 },
    { id: 51, pregunta: "La presencia de cálculos o concreciones minerales en el interior de los riñones o de las vías urinarias se denomina:", opciones: ["a. Urolitiasis o nefrolitiasis", "b. Cistitis supurativa", "c. Pielonefritis aguda", "d. Glomerulonefritis"], correcta: 0 },
    { id: 52, pregunta: "El principal tipo de lípidos que forman la estructura bicapa de las membranas celulares del organismo humano son:", opciones: ["a. Los fosfolípidos", "b. Los triglicéridos neutros", "c. Los ácidos grasos libres", "d. Las lipoproteínas plasmáticas"], correcta: 0 },
    { id: 53, pregunta: "La administración de un enema de limpieza exige que la solución líquida se introduzca en el recto a una temperatura aproximada de:", opciones: ["a. 37ºC a 40ºC (temperatura corporal)", "b. 20ºC a 25ºC (temperatura ambiente)", "c. 15ºC para inducir vasoconstricción", "d. 45ºC para ablandar los esfacelos fecaloides"], correcta: 0 },
    { id: 54, pregunta: "EL documento clínico hospitalario donde se registran los tratamientos médicos prescritos, las dosis y los horarios de administración de fármacos se llama:", opciones: ["a. Hoja de tratamiento médico o de medicación", "b. Hoja de evolución de enfermería", "c. Gráfica ordinaria mensual de constantes", "d. Hoja clínico-estadística de admisión"], correcta: 0 },
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
