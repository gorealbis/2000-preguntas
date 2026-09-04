// BANCO DE PREGUNTAS DEL TEST 32 (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 1, pregunta: "La técnica correcta para la recogida de una muestra de orina en un lactante exige la utilización de:", opciones: ["a. Una bolsa colectora de plástico estéril y adhesiva perineal", "b. Una sonda rígida de Nelaton de calibre grueso", "c. Un frasco ordinario de recogida por medio chorro", "d. Una punción suprapúbica obligatoria en planta"], correcta: 0 },
    { id: 2, pregunta: "La presencia de cilindros leucocitarios en un sedimento urinario es un signo anatomopatológico muy indicativo de:", opciones: ["a. Pielonefritis aguda o infección del parénquima renal", "b. Cistitis aguda bacteriana no complicada", "c. Litiasis renal asintomática en el uréter", "d. Uretritis inespecífica supurativa"], correcta: 0 },
    { id: 3, pregunta: "Para evitar la aparición de úlceras por presión en las rodillas de un paciente en decúbito lateral prolongado, se debe:", opciones: ["a. Colocar una almohada o cojín separador entre ambas rodillas", "b. Aplicar masajes enérgicos con alcohol sobre los cóndilos", "c. Mantener las piernas totalmente extendidas y rígidas", "d. Colocar parches oclusivos secos en los maléolos"], correcta: 0 },
    { id: 4, pregunta: "El instrumental quirúrgico de prensión elástica con cremallera y puntas provistas de dientes de ratón finos (como la pinza de Allis) se utiliza para:", opciones: ["a. Sostener o traccionar tejidos consistentes o fascias sin resbalar", "b. Realizar la sección o diéresis de la piel superficial", "c. Ocluir de forma hemostática vasos arteriales sangrantes", "d. Alojar los hilos de sutura en el portaagujas"], correcta: 0 },
    { id: 5, pregunta: "La presencia de un exceso de moco y filamentos en las deposiciones, frecuente en procesos irritativos del colon, se denomina clínicamente:", opciones: ["a. Heces mucoides o mixorrea", "b. Esteatorrea lipídica masiva", "c. Acolia biliar completa", "d. Melenas por sangrado digestivo alto"], correcta: 0 },
    { id: 6, pregunta: "Al realizar la higiene bucal a un paciente encamado consciente y colaborador, la posición más idónea en la que se le debe colocar es:", opciones: ["a. Posición de Fowler o semisentado", "b. Decúbito supino estricto sin almohada", "c. Posición de Roser con la cabeza colgando", "d. Decúbito lateral izquierdo puro"], correcta: 0 },
    { id: 7, pregunta: "Las arterias encargadas de aportar sangre oxigenada y nutrientes de forma específica al tejido muscular del propio corazón son:", opciones: ["a. Las arterias coronarias", "b. Las arterias pulmonares", "c. Las arterias carótidas comunes", "d. Las arterias subclavias"], correcta: 0 },
    { id: 8, pregunta: "La escala de valoración que mide de forma objetiva el riesgo de sufrir caídas accidentales valorando la marcha, equilibrio y funciones basales es la:", opciones: ["a. Escala de Tinetti o de Downton según el entorno", "b. Escala de Braden para la piel", "c. Test de Zarit para cuidadores", "d. Índice de Lawton-Brody"], correcta: 0 },
    { id: 9, pregunta: "El desinfectante químico hospitalario de alto nivel utilizado comúnmente en soluciones acuosas estables para material óptico termolábil es:", opciones: ["a. El ortoftalaldehído (OPA) o el glutaraldehído", "b. El alcohol isopropílico al 70%", "c. El hipoclorito sódico concentrado", "d. La clorhexidina en solución alcohólica"], correcta: 0 },
    { id: 10, pregunta: "La acumulación patológica de líquido de aspecto quiloso (linfa) en el interior de la cavidad pleural se denomina clínicamente:", opciones: ["a. Quilotórax", "b. Hemotórax masivo", "c. Neumotórax espontáneo", "d. Empiema pleural agudo"], correcta: 0 },
    { id: 11, pregunta: "La alteración pupilar que cursa con una desigualdad manifiesta en el tamaño de las dos pupilas se denomina clínicamente:", opciones: ["a. Anisocoria", "b. Isocoria ordinaria", "c. Miosis bilateral", "d. Midriasis refleja"], correcta: 0 },
    { id: 12, pregunta: "La formación de un coágulo o trombo en el interior de una vena del sistema profundo, frecuentemente en miembros inferiores, se conoce como:", opciones: ["a. Trombosis venosa profunda (TVP)", "b. Flebitis química superficial", "c. Arteriosclerosis obliterante", "d. Linfangeítis aguda"], correcta: 0 },
    { id: 13, pregunta: "La desambulación asistida de un paciente hemipléjico exige al auxiliar de enfermería caminar situándose siempre en:", opciones: ["a. El lado afectado del paciente para proporcionarle estabilidad y soporte", "b. El lado sano del paciente tirando de su brazo libre", "c. La parte posterior empujando la cintura pélvica", "d. La parte anterior guiando sus pasos de forma visual"], correcta: 0 },
    { id: 14, pregunta: "El hilo de sutura quirúrgica sintético monofilamento no absorbible, muy flexible y utilizado habitualmente en cirugía cardiovascular y cutánea es el:", opciones: ["a. Polipropileno", "b. Catgut crómico natural", "c. Ácido poliglicólico (vicryl)", "d. Hilo de seda trenzada"], correcta: 0 },
    { id: 15, pregunta: "La pérdida total de la función motora voluntaria en una mitad lateral completa del cuerpo (un brazo y una pierna del mismo lado) se llama:", opciones: ["a. Hemiplejía", "b. Paraplejía", "c. Tetraplejía", "d. Monoplejía"], correcta: 0 },
    { id: 16, pregunta: "La sonda vesical flexible provista de un balón hinchable de fijación y dos vías (una para drenaje y otra para inflado) se denomina sonda de:", opciones: ["a. Foley", "b. Nelaton", "c. Pezzer", "d. Mercier"], correcta: 0 },
    { id: 17, pregunta: "Un pulso arterial que presenta un ritmo regular pero alternando de forma sucesiva una onda fuerte con una onda débil se denomina clínicamente:", opciones: ["a. Pulso alternante", "b. Pulso filiforme", "c. Pulso dicroto", "d. Pulso extrasistólico"], correcta: 0 },
    { id: 18, pregunta: "El desbridamiento que consiste en la aplicación de enzimas exógenas (como la colagenasa) sobre la herida para digerir los esfacelos es el:", opciones: ["a. Desbridamiento enzimático o químico", "b. Desbridamiento autolítico puro", "c. Desbridamiento quirúrgico cortante", "d. Desbridamiento mecánico manual"], correcta: 0 },
    { id: 19, pregunta: "La inmunidad que adquiere un lactante a través de la transferencia de anticuerpos IgA presentes en el calostro y leche materna se clasifica como:", opciones: ["a. Inmunidad natural pasiva", "b. Inmunidad natural activa", "c. Inmunidad artificial activa", "d. Inmunidad artificial pasiva"], correcta: 0 },
    { id: 20, pregunta: "La técnica de aislamiento hospitalario indicada para cortar la transmisión de microorganismos patógenos que se propagan a gran distancia por vía aérea es el:", opciones: ["a. Aislamiento de transmisión aérea (o estricto)", "b. Aislamiento respiratorio por gotas", "c. Aislamiento entérico común", "d. Aislamiento protector inverso"], correcta: 0 },
    { id: 21, pregunta: "Si se prescribe la administración de 1000 ml de suero fisiológico para pasar en 12 horas, ¿cuántas gotas por minuto deben programarse en el sistema de goteo estándar?:", opciones: ["a. 28 gotas/min", "b. 14 gotas/min", "c. 42 gotas/min", "d. 21 gotas/min"], correcta: 0 },
    { id: 22, pregunta: "El principal riesgo asociado a la reutilización inadecuada de material clasificado como crítico en el ámbito hospitalario es:", opciones: ["a. La transmisión de infecciones nosocomiales cruzadas", "b. El deterioro estético del instrumental", "c. El aumento del coste por proceso de lavado", "d. La alteración de los registros informáticos de almacén"], correcta: 0 },
    { id: 23, pregunta: "La enzima presente en la saliva encargada de iniciar la degradación química de los hidratos de carbono (almidón) se denomina:", opciones: ["a. Ptialina o amilasa salival", "b. Pepsinógeno activo", "c. Lipasa lingual", "d. Tripsina secretora"], correcta: 0 },
    { id: 24, pregunta: "Las articulaciones semimóviles, constituidas por discos de fibrocartílago entre los cuerpos óseos (como las de la columna vertebral), se clasifican como:", opciones: ["a. Anfiartrosis", "b. Sinartrosis", "c. Diartrosis", "d. Enartrosis"], correcta: 0 },
    { id: 25, pregunta: "La sonda de Salem es un dispositivo específico de doble luz utilizado en el sondaje nasogástrico con la finalidad primordial de:", opciones: ["a. Evitar el colapso o la succión de la mucosa gástrica durante la aspiración continua", "b. Permitir el inflado de balones compresores en varices", "c. Drenar de forma simultánea la vía biliar y la pancreática", "d. Suministrar irrigación vesical intermitente"], correcta: 0 },
    { id: 26, pregunta: "La medición del espesor del pliegue cutáneo tricipital mediante un cáliper o plicómetro es una determinación útil para valorar:", opciones: ["a. La reserva de grasa corporal o tejido adiposo del paciente", "b. La masa muscular esquelética neta", "c. El riesgo inminente de sufrir UPP por fricción", "d. El grado de edema en extremidades"], correcta: 0 },
    { id: 27, pregunta: "Un pulso arterial que se caracteriza por presentar de forma sucesiva variaciones rítmicas en su amplitud se conoce clínicamente como:", opciones: ["a. Pulso alternante", "b. Pulso filiforme", "c. Pulso dicroto", "d. Pulso arrítmico ordinario"], correcta: 0 },
    { id: 28, pregunta: "La posición quirúrgica en la que el paciente descansa en decúbito supino con el tronco inclinado hacia atrás y los pies más elevados que la cabeza se denomina:", opciones: ["a. Posición de Trendelenburg", "b. Posición de Fowler alta", "c. Posición de Morestin o Trendelenburg invertida", "d. Posición de Roser"], correcta: 0 },
    { id: 29, pregunta: "La complicación de la inmovilidad prolongada a nivel vascular periférico que cursa con la formación de un coágulo en las venas profundas se denomina:", opciones: ["a. Trombosis venosa profunda (TVP)", "b. Flebitis superficial química", "c. Arteriosclerosis obliterante", "d. Linfangitis obstructiva"], correcta: 0 },
    { id: 30, pregunta: "La técnica de esterilización química que utiliza una solución de glutaraldehído al 2% exige un tiempo de inmersión total para destruir esporas de:", opciones: ["a. 10 horas", "b. 20 minutos", "c. 30 minutos", "d. 2 horas"], correcta: 0 },
    { id: 31, pregunta: "Al realizar el cambio de lencería de una cama hospitalaria ocupada, el paciente debe ser colocado inicialmente en posición de:", opciones: ["a. Decúbito lateral orientado hacia el borde opuesto de la cama", "b. Decúbito supino estricto con barandillas bajadas", "c. Posición de Fowler elevada a 90 grados", "d. Decúbito prono con soporte almohadillado"], correcta: 0 },
    { id: 32, pregunta: "La presencia de moco, sangre y restos tisulares en la expulsión de las heces, característica de procesos inflamatorios severos del colon, se denomina:", opciones: ["a. Disentería", "b. Melenas", "c. Esteatorrea", "d. Acolia"], correcta: 0 },
    { id: 33, pregunta: "El índice de开atz es un instrumento de valoración geriátrica utilizado de forma primordial para medir:", opciones: ["a. El grado de independencia en las actividades básicas de la vida diaria", "b. El nivel de deterioro cognitivo avanzado", "c. El riesgo de sufrir caídas accidentales domésticas", "d. La sobrecarga del cuidador principal"], correcta: 0 },
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
