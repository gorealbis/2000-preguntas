// BANCO DE PREGUNTAS DEL TEST 31 (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 1, pregunta: "La técnica de aseo en la cama de un paciente que presenta una extremidad fracturada o con suero exige retirar la camisa o pijama comenzando por:", opciones: ["a. El miembro sano o libre de dispositivos", "b. El miembro afectado o con suero", "c. La región cefálica de forma estricta", "d. Es indiferente el orden de las extremidades"], correcta: 0 },
    { id: 2, pregunta: "La presencia de abundantes cristales de oxalato cálcico en un sedimento urinario reciente puede estar relacionada con la dieta o con:", opciones: ["a. La predisposición a la formación de nefrolitiasis", "b. Una infección activa por Pseudomonas aeruginosa", "c. Una insuficiencia prerrenal aguda", "d. El aclaramiento normal de bilirrubina"], correcta: 0 },
    { id: 3, pregunta: "Para evitar la rotación externa de la cadera en un paciente hemipléjico que permanece en decúbito supino, el auxiliar de enfermería debe colocar:", opciones: ["a. Un rulo o almohadilla trocantérea desde la cresta ilíaca hasta el tercio medio del muslo", "b. Una almohada blanda directamente debajo del talón afectado", "c. Un arco protector de lencería sobre las rodillas", "d. Sacos de arena pesados bajo la región sacra"], correcta: 0 },
    { id: 4, pregunta: "El instrumental quirúrgico de prensión elástica o continua que se utiliza para sujetar temporalmente tejidos sin dañarlos se denomina:", opciones: ["a. Pinzas de disección sin dientes", "b. Pinzas hemostáticas de Pean", "c. Bisturís de mango circular", "d. Separadores autorretentivos de Balfour"], correcta: 0 },
    { id: 5, pregunta: "La expulsión de heces pastosas de color amarillo-verdoso con restos de alimentos sin digerir se denomina técnicamente:", opciones: ["a. Lientería", "b. Melenas", "c. Acolia biliar", "d. Rectorragia activa"], correcta: 0 },
    { id: 6, pregunta: "Al realizar el lavado de los ojos de un paciente con conjuntivitis exudativa, el movimiento de la torunda de gasa debe realizarse:", opciones: ["a. Desde el ángulo interno (lagrimal) hacia el ángulo externo", "b. Desde el ángulo externo hacia el ángulo interno", "c. Mediante movimientos circulares de frotación enérgica", "d. De forma vertical sobre el párpado superior"], correcta: 0 },
    { id: 7, pregunta: "El marcapasos fisiológico natural del corazón, donde se origina normalmente el impulso eléctrico cardíaco, se denomina:", opciones: ["a. Nodo sinusal o de Keith-Flack", "b. Nodo auriculoventricular de Aschoff-Tawara", "c. Haz de His", "d. Fibras de Purkinje"], correcta: 0 },
    { id: 8, pregunta: "La escala de valoración neurológica que evalúa de forma específica las funciones cognitivas superiores y la orientación temporo-espacial en demencias es el:", opciones: ["a. Mini-Mental State Examination (MMSE) de Folstein o Lobo", "b. Índice de Katz", "c. Escala de Norton", "d. Test de Zarit"], correcta: 0 },
    { id: 9, pregunta: "El desinfectante químico de bajo nivel utilizado habitualmente para la limpieza por arrastre de suelos y paredes en zonas no críticas es:", opciones: ["a. Compuestos de amonio cuaternario", "b. Glutaraldehído alcalinizado al 2%", "c. Óxido de etileno gaseoso", "d. Formaldehído concentrado"], correcta: 0 },
    { id: 10, pregunta: "La acumulación patológica de aire a presión en el espacio pleural que desplaza el mediastino y compromete el retorno venoso se denomina:", opciones: ["a. Neumotórax a tensión", "b. Hemotórax masivo", "c. Hidrotórax simple", "d. Quilotórax traumático"], correcta: 0 },
    { id: 11, pregunta: "La contracción patológica o disminución del diámetro de la pupila por debajo de los niveles fisiológicos normales se conoce como:", opciones: ["a. Miosis", "b. Midriasis", "c. Anisocoria", "d. Isocoria adaptativa"], correcta: 0 },
    { id: 12, pregunta: "La inflamación de una vena producida por la irritación química de un fármaco o por un catéter intravenoso periférico se denomina:", opciones: ["a. Flebitis", "b. Arteritis", "c. Linfangitis", "d. Aneurisma"], correcta: 0 },
    { id: 13, pregunta: "La desambulación asistida de un paciente que utiliza un bastón simple exige que este se coloque y sujete siempre en:", opciones: ["a. El lado sano o contralateral a la extremidad afectada", "b. El lado afectado para soportar el peso de forma directa", "c. El lado dominante de forma indiferente a la patología", "d. Ambas manos de forma simultánea cruzando el tronco"], correcta: 0 },
    { id: 14, pregunta: "El material de sutura quirúrgica monofilamento sintético absorbible que destaca por mantener una resistencia prolongada en planos aponeuróticos es la:", opciones: ["a. Polidioxanona (PDS)", "b. Seda natural trenzada", "c. Clorhexidina sólida", "d. Grapa de acero"], correcta: 0 },
    { id: 15, pregunta: "La pérdida total de la función motora voluntaria en una sola extremidad (un brazo o una pierna) se denomina clínicamente:", opciones: ["a. Monoplejía", "b. Hemiplejía", "c. Paraplejía", "d. Tetraplejía"], correcta: 0 },
    { id: 16, pregunta: "La sonda vesical flexible de una sola luz utilizada exclusivamente para realizar sondajes intermitentes o evacuar la vejiga de forma puntual es la sonda de:", opciones: ["a. Nelaton", "b. Foley", "c. Pezzer", "d. Mercier"], correcta: 0 },
    { id: 17, pregunta: "Un pulso arterial que se caracteriza por presentar latidos anticipados seguidos de una pausa compensatoria se conoce clínicamente como:", opciones: ["a. Pulso extrasistólico o arritmia", "b. Pulso filiforme", "c. Pulso dicroto", "d. Pulso alternante"], correcta: 0 },
    { id: 18, pregunta: "El desbridamiento que consiste en la eliminación del tejido necrótico mediante el uso de instrumental cortante (bisturí o tijeras) en condiciones estériles es el:", opciones: ["a. Desbridamiento quirúrgico o cortante", "b. Desbridamiento autolítico", "c. Desbridamiento químico enzimático", "d. Desbridamiento mecánico"], correcta: 0 },
    { id: 19, pregunta: "La inmunidad pasiva artificial se adquiere de forma inmediata en el organismo mediante la administración directa de:", opciones: ["a. Gammaglobulinas o sueros con anticuerpos preformados", "b. Vacunas con antígenos atenuados", "c. Vacunas con toxoides inactivados", "d. Transferencia placentaria de IgG"], correcta: 0 },
    { id: 20, pregunta: "La técnica de aislamiento hospitalario indicada para evitar la transmisión de microorganismos patógenos que se propagan a través del aire a cortas distancias (gotitas de Flügge) se denomina:", opciones: ["a. Aislamiento respiratorio por gotas", "b. Aislamiento aéreo estricto", "c. Aislamiento de contacto", "d. Aislamiento protector inverso"], correcta: 0 },
    { id: 21, pregunta: "Si se prescribe la administración de 500 ml de suero glucosado al 5% para pasar en 6 horas, ¿cuántas gotas por minuto deben programarse en el sistema de goteo estándar?:", opciones: ["a. 28 gotas/min", "b. 14 gotas/min", "c. 42 gotas/min", "d. 21 gotas/min"], correcta: 0 },
    { id: 22, pregunta: "El principal riesgo asociado a la reutilización inadecuada de material clasificado como crítico en el ámbito hospitalario es:", opciones: ["a. La transmisión de infecciones nosocomiales cruzadas", "b. El deterioro estético del instrumental", "c. El aumento del coste por proceso de lavado", "d. La alteración de los registros informáticos de almacén"], correcta: 0 },
    { id: 23, pregunta: "La enzima presente en la saliva encargada de iniciar la degradación química de los hidratos de carbono (almidón) se denomina:", opciones: ["a. Ptialina o amilasa salival", "b. Pepsinógeno activo", "c. Lipasa lingual", "d. Tripsina secretora"], correcta: 0 },
    { id: 24, pregunta: "Las articulaciones semimóviles, constituidas por discos de fibrocartílago entre los cuerpos óseos (como las de la columna vertebral), se clasifican como:", opciones: ["a. Anfiartrosis", "b. Sinartrosis", "c. Diartrosis", "d. Enartrosis"], correcta: 0 },
    { id: 25, pregunta: "La sonda de Salem es un dispositivo específico de doble luz utilizado en el sondaje nasogástrico con la finalidad primordial de:", opciones: ["a. Evitar el colapso o la succión de la mucosa gástrica durante la aspiración continua", "b. Permitir el inflado de balones compresores en varices", "c. Drenar de forma simultánea la vía biliar y la pancreática", "d. Suministrar irrigación vesical intermitente"], correcta: 0 },
    { id: 26, pregunta: "La medición del espesor del pliegue cutáneo tricipital mediante un cáliper o plicómetro es una determinación útil para valorar:", opciones: ["a. La reserva de grasa corporal o tejido adiposo del paciente", "b. La masa muscular esquelética neta", "c. El riesgo inminente de sufrir UPP por fricción", "d. El grado de edema en extremidades"], correcta: 0 },
    { id: 27, pregunta: "Un pulso arterial que se caracteriza por presentar dos ondas sistólicas o un doble latido por cada ciclo cardíaco se conoce clínicamente como:", opciones: ["a. Pulso dicroto o bisferiens", "b. Pulso filiforme", "c. Pulso alternante", "d. Pulso arrítmico ordinario"], correcta: 0 },
    { id: 28, pregunta: "La posición quirúrgica en la que el paciente descansa en decúbito supino con el tronco inclinado hacia atrás y los pies más elevados que la cabeza se denomina:", opciones: ["a. Posición de Trendelenburg", "b. Posición de Fowler alta", "c. Posición de Morestin o Trendelenburg invertida", "d. Posición de Roser"], correcta: 0 },
    { id: 29, pregunta: "La complicación de la inmovilidad prolongada a nivel vascular periférico que cursa con la formación de un coágulo en las venas profundas se denomina:", opciones: ["a. Trombosis venosa profunda (TVP)", "b. Flebitis superficial química", "c. Arteriosclerosis obliterante", "d. Linfangitis obstructiva"], correcta: 0 },
    { id: 30, pregunta: "La técnica de esterilización química que utiliza una solución de glutaraldehído al 2% exige un tiempo de inmersión total para destruir esporas de:", opciones: ["a. 10 horas", "b. 20 minutos", "c. 30 minutos", "d. 2 horas"], correcta: 0 },
    { id: 31, pregunta: "Al realizar el cambio de lencería de una cama hospitalaria ocupada, el paciente debe ser colocado inicialmente en posición de:", opciones: ["a. Decúbito lateral orientado hacia el borde libre de la cama", "b. Decúbito supino estricto con barandillas bajadas", "c. Posición de Fowler elevada a 90 grados", "d. Decúbito prono con soporte almohadillado"], correcta: 0 },
    { id: 32, pregunta: "La presencia de moco, sangre y restos tisulares en la expulsión de las heces, característica de procesos inflamatorios severos del colon, se denomina:", opciones: ["a. Disentería", "b. Melenas", "c. Esteatorrea", "d. Acolia"], correcta: 0 },
    { id: 33, pregunta: "El índice de Katz es un instrumento de valoración geriátrica utilizado de forma primordial para medir:", opciones: ["a. El grado de independencia en las actividades básicas de la vida diaria", "b. El nivel de deterioro cognitivo avanzado", "c. El riesgo de sufrir caídas accidentales domésticas", "d. La sobrecarga del cuidador principal"], correcta: 0 },
    { id: 34, pregunta: "El dispositivo de oxigenoterapia de alto flujo que permite regular con precisión la fracción inspirada de oxígeno (FiO2) es:", opciones: ["a. La mascarilla tipo Venturi", "b. La gafa nasal estándar", "c. La mascarilla simple", "d. La sonda nasofaríngea"], correcta: 0 },
    { id: 35, pregunta: "La presencia de toxinas bacterianas circulando de forma libre por el torrente sanguíneo se denomina clínicamente:", opciones: ["a. Toxemia", "b. Septicemia", "c. Bacteriemia", "d. Viremia"], correcta: 0 },
    { id: 36, pregunta: "Las quemaduras superficiales que afectan exclusivamente a la epidermis, cursando con eritema, dolor y ausencia de flictenas, se clasifican como de:", opciones: ["a. Primer grado", "b. Segundo grado", "c. Tercer grado", "d. Cuarto grado"], correcta: 0 },
    { id: 37, pregunta: "La capa intermedia de la piel, ricamente vascularizada y provista de receptores sensoriales y fibras de colágeno y elastina, es la:", opciones: ["a. Dermis", "b. Epidermis", "c. Hipodermis", "d. Estrato córneo"], correcta: 0 },
    { id: 38, pregunta: "El material clínico que entra en contacto con mucosas intactas o piel no íntegra (como los endoscopios digestivos) se clasifica como:", opciones: ["a. Material semicrítico", "b. Material crítico", "c. Material no crítico", "d. Material fungible"], correcta: 0 },
    { id: 39, pregunta: "La alteración del ritmo respiratorio que cursa con un aumento de la frecuencia por encima de los valores fisiológicos normales se llama:", opciones: ["a. Taquipnea", "b. Bradipnea", "c. Apnea", "d. Ortopnea"], correcta: 0 },
    { id: 40, pregunta: "El contenedor rígido de color amarillo provisto de tapa hermética se utiliza en los hospitales para desechar de forma exclusiva:", opciones: ["a. Agujas, hojas de bisturí y objetos cortopunzantes usados", "b. Ropa sucia procedente de aislamientos ordinarios", "c. Residuos orgánicos comunes de cocina", "d. Envases de vidrio vacíos de soluciones salinas"], correcta: 0 },
    { id: 41, pregunta: "La monitorización de la presión venosa central (PVC) a través de un catéter central permite valorar de forma directa:", opciones: ["a. La presión de la sangre en la aurícula derecha y el estado de la volemia", "b. La presión parcial de gases en la arteria radial", "c. La saturación de oxígeno en el bulbo capilar", "d. El gasto sistólico del ventrículo izquierdo"], correcta: 0 },
    { id: 42, pregunta: "El orgánulo celular de doble membrana especializado en realizar los procesos de respiración celular y síntesis de ATP se denomina:", opciones: ["a. Mitocondria", "b. Lisosoma", "c. Ribosoma", "d. Complejo de Golgi"], correcta: 0 },
    { id: 43, pregunta: "La sonda de Sengstaken-Blakemore se caracteriza fundamentalmente por contar con:", opciones: ["a. Tres luces o vías y dos balones (esofágico y gástrico)", "b. Una sola luz roma para descompresión", "c. Dos luces y un balón de fijación urinaria", "d. Cuatro vías rígidas de aspiración pasiva"], correcta: 0 },
    { id: 44, pregunta: "Los residuos sanitarios que contienen restos de citostáticos o medicamentos antineoplásicos deben depositarse en contenedores rígidos de color:", opciones: ["a. Azul o con etiquetado específico según el estándar de residuos químicos", "b. Negro común de basura general", "c. Amarillo ordinario de punzantes", "d. Rojo exclusivo de fluidos"], correcta: 0 },
    { id: 45, pregunta: "Dentro de la escala analgésica de la O.M.S., los fármacos analgésicos antipiréticos no opioides (como el paracetamol o el metamizol) se sitúan en el:", opciones: ["a. Primer escalón", "b. Segundo escalón", "c. Tercer escalón", "d. Cuarto escalón"], correcta: 0 },
    { id: 46, pregunta: "La alteración de la piel por presión que cursa con eritema cutáneo que no palidece al presionar, manteniendo la piel íntegra, se clasifica como UPP de:", opciones: ["a. Estadio o Grado I", "b. Estadio o Grado II", "c. Estadio o Grado III", "d. Estadio o Grado IV"], correcta: 0 },
    { id: 47, pregunta: "El tipo de desinfección hospitalaria que se realiza de forma exhaustiva en la habitación del paciente tras su alta, traslado o fallecimiento se denomina:", opciones: ["a. Desinfección terminal", "b. Desinfección concurrente", "c. Antisepsia de arrastre", "d. Esterilización biológica"], correcta: 0 },
    { id: 48, pregunta: "La posición quirúrgica en la que el paciente se encuentra en decúbito lateral con la espalda alineada al borde de la mesa se conoce como:", opciones: ["a. Decúbito lateral o de nefrectomía según la flexión de la mesa", "b. Posición de Kraske", "c. Posición de Fowler", "d. Posición ginecológica"], correcta: 0 },
    { id: 49, pregunta: "La emisión de orina en cantidades anormalmente grandes, generalmente superior a 2500 ml en 24 horas, se denomina clínicamente:", opciones: ["a. Poliuria", "b. Oliguria", "c. Anuria", "d. Disuria"], correcta: 0 },
    { id: 50, pregunta: "La escala analgésica de la O.M.S. fue diseñada originalmente como una estrategia médica para el control correcto del dolor de tipo:", opciones: ["a. Oncológico", "b. Postraumático agudo", "c. Neuropático periférico", "d. Quirúrgico inmediato"], correcta: 0 },
    { id: 51, pregunta: "La presencia de pus mezclado de forma evidente con la orina, lo que le da un aspecto turbio, se denomina técnicamente:", opciones: ["a. Piuria", "b. Hematuria", "c. Proteinuria", "d. Coluria"], correcta: 0 },
    { id: 52, pregunta: "Las proteínas que actúan como catalizadores biológicos, acelerando la velocidad de las reacciones químicas del organismo sin consumirse, se denominan:", opciones: ["a. Enzimas", "b. Hormonas", "c. Lípidos estructurales", "d. Vitaminas coenzimáticas"], correcta: 0 },
    { id: 53, pregunta: "La administración de un enema evacuante en un adulto exige introducir la cánula rectal en el ano a una profundidad de aproximada de:", opciones: ["a. 7,5 a 10 centímetros", "b. 2 a 3 centímetros", "c. 20 a 25 centímetros", "d. 30 centímetros"], correcta: 0 },
    { id: 54, pregunta: "El documento hospitalario que recoge de forma ordenada y cronológica las anotaciones diarias sobre la evolución del estado de salud del paciente realizadas por el personal de enfermería se llama:", opciones: ["a. Hoja de evolución de enfermería", "b. Gráfica mensual ordinaria", "c. Hoja clínico-estadística de admisión", "d. Hoja de tratamiento médico"], correcta: 0 },
    { id: 55, pregunta: "La técnica de desinfección química que consiste en frotar las superficies del mobiliario con una bayeta impregnada en solución desinfectante se denomina:", opciones: ["a. Loción", "b. Inmersión", "c. Pulverización", "d. Vaporización"], correcta: 0 },
    { id: 56, pregunta: "La posición en la que el paciente descansa sobre un plano inclinado de forma que los pies quedan más bajos que la cabeza se denomina:", opciones: ["a. Posición de Morestin o Trendelenburg invertida", "b. Posición de Trendelenburg estricta", "c. Posición de Sims", "d. Posición de Fowler"], correcta: 0 },
    { id: 57, pregunta: "La presencia de sangre visible macroscópicamente en la orina, dándole una coloración rojiza, se denomina técnicamente:", opciones: ["a. Hematuria macroscópica", "b. Coluria hepática", "c. Piuria supurativa", "d. Proteinuria"], correcta: 0 },
    { id: 58, pregunta: "La escala de Norton valora el riesgo de sufrir UPP midiendo los siguientes parámetros: estado general, estado mental, actividad, movilidad y:", opciones: ["a. Incontinencia", "b. Nutrición", "c. Fricción", "d. Edad"], correcta: 0 },
    { id: 59, pregunta: "La complicación de una herida quirúrgica abdominal que cursa con la separación de los planos profundos aponeuróticos pero manteniendo la piel íntegra se llama:", opciones: ["a. Eventración", "b. Evisceración", "c. Dehiscencia completa", "d. Queloide"], correcta: 0 },
    { id: 60, pregunta: "El control químico de esterilización hospitalaria consiste en dispositivos (como cintas adhesivas) que cambian de color para indicar que el paquete:", opciones: ["a. Ha sido expuesto a las condiciones físicas del ciclo de esterilización", "b. Está completamente estéril y libre de esporas biológicas", "c. Ha superado la fecha límite de caducidad de almacén", "d. Contiene material exclusivamente crítico fungible"], correcta: 0 }


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
