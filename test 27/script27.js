// BANCO DE PREGUNTAS DEL TEST 27 (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 1, pregunta: "El instrumental de diéresis utilizado en cirugía menor para cortar o separar tejidos blandos comprende:", opciones: ["a. Los bisturís y las tijeras", "b. Las pinzas de Kocher y Pean", "c. Los separadores autorretentivos", "d. Las agujas y los portaagujas"], correcta: 0 },
    { id: 2, pregunta: "La presencia de glucosa en la orina en cantidades detectables se denomina:", opciones: ["a. Glucuria o glucosuria", "b. Proteinuria", "c. Hematuria", "d. Cetonuria"], correcta: 0 },
    { id: 3, pregunta: "La complicación de las úlceras por presión que cursa con destrucción ósea subyacente se denomina:", opciones: ["a. Osteomielitis", "b. Celulitis superficial", "c. Fascitis necrotizante", "d. Miositis supurativa"], correcta: 0 },
    { id: 4, pregunta: "Para la administración de oxígeno con gafa nasal, el flujo máximo recomendado en litros por minuto es de:", opciones: ["a. 2 a 4 litros/min", "b. 6 a 8 litros/min", "c. 10 a 12 litros/min", "d. 15 litros/min"], correcta: 0 },
    { id: 5, pregunta: "Al realizar la higiene de los genitales a una paciente encamada, el arrastre higiénico debe realizarse:", opciones: ["a. De la región púbica hacia el ano (de delante hacia atrás)", "b. De la región anal hacia el pubis (de atrás hacia delante)", "c. Con movimientos circulares concéntricos", "d. Es indiferente la dirección del arrastre"], correcta: 0 },
    { id: 6, pregunta: "La técnica de desinfección mediante la cual se proyectan líquidos desinfectantes en forma de gotas finas sobre las superficies se llama:", opciones: ["a. Pulverización", "b. Inmersión", "c. Loción", "d. Vaporización"], correcta: 0 },
    { id: 7, pregunta: "El fómite se define técnicamente en epidemiología hospitalaria como:", opciones: ["a. Un objeto inanimado que puede transmitir gérmenes patógenos", "b. Un ser vivo animado transmisor de infecciones", "c. El reservorio natural del microorganismo", "d. El huésped susceptible de enfermar"], correcta: 0 },
    { id: 8, pregunta: "La posición en la que el paciente se encuentra sentado en la cama con la cabecera elevada a 90 grados se denomina:", opciones: ["a. Posición de Fowler elevada o alta", "b. Posición de Sims", "c. Posición de Trendelenburg", "d. Posición de Roser"], correcta: 0 },
    { id: 9, pregunta: "Un vómito con restos alimenticios sin digerir procedentes del estómago se denomina:", opciones: ["a. Vómito alimenticio", "b. Vómito bilioso", "c. Vómito fecaloideo", "d. Hematemesis"], correcta: 0 },
    { id: 10, pregunta: "El dispositivo oclusivo utilizado temporalmente en ostomías para la recogida de efluentes se denomina:", opciones: ["a. Bolsa de ostomía", "b. Sonda de Foley", "c. Colector de drenaje", "d. Apósito hidrocoloide"], correcta: 0 },
    { id: 11, pregunta: "La técnica que consiste en dar golpeteos rítmicos con las manos ahuecadas sobre el tórax del paciente se denomina:", opciones: ["a. Percusión o clapping", "b. Vibración torácica", "c. Drenaje postural", "d. Tos asistida"], correcta: 0 },
    { id: 12, pregunta: "La disminución del número de plaquetas en sangre por debajo de los valores normales se denomina:", opciones: ["a. Trombocitopenia o plaquetopenia", "b. Leucopenia", "c. Anemia", "d. Trombocitosis"], correcta: 0 },
    { id: 13, pregunta: "El antiséptico de elección recomendado para la higiene del cordón umbilical en el recién nacido es:", opciones: ["a. Alcohol de 70º o clorhexidina acuosa", "b. Povidona yodada al 10%", "c. Agua oxigenada pura", "d. Mercurocromo líquido"], correcta: 0 },
    { id: 14, pregunta: "La lesión cutánea primaria sólida, sobreelevada y de tamaño inferior a 1 cm se denomina:", opciones: ["a. Pápula", "b. Mácula", "c. Vesícula", "d. Pústula"], correcta: 0 },
    { id: 15, pregunta: "El drenaje de Kher o drenaje en 'T' es de tipo colector y se inserta específicamente en:", opciones: ["a. La vía biliar (colédoco)", "b. La cavidad pleural", "c. El espacio peritoneal abdominal", "d. El tejido subcutáneo"], correcta: 0 },
    { id: 16, pregunta: "El método de esterilización por calor seco que utiliza una estufa de aire caliente circulante se conoce como:", opciones: ["a. Horno de Pasteur o Poupinel", "b. Autoclave de vapor", "c. Cámara de óxido de etileno", "d. Gas plasma"], correcta: 0 },
    { id: 17, pregunta: "La presencia de cálculos o 'piedras' en el interior de la vesícula biliar se denomina:", opciones: ["a. Colelitiasis", "b. Colecistitis", "c. Colangitis", "d. Coledocolitiasis"], correcta: 0 },
    { id: 18, pregunta: "La hormona secretada por las células alfa de los islotes de Langerhans en el páncreas es:", opciones: ["a. El glucagón", "b. La insulina", "c. La somatostatina", "d. La tiroxina"], correcta: 0 },
    { id: 19, pregunta: "La incapacidad total o parcial para reconocer objetos o personas a través de los sentidos se denomina:", opciones: ["a. Agnosia", "b. Apraxia", "c. Afasia", "d. Amnesia"], correcta: 0 },
    { id: 20, pregunta: "El volumen de aire que entra y sale de los pulmones en una respiración normal y en reposo se denomina:", opciones: ["a. Volumen corriente o basal", "b. Volumen de reserva inspiratorio", "c. Capacidad vital total", "d. Volumen residual respiratorio"], correcta: 0 },
    { id: 21, pregunta: "¿Cuál de los siguientes instrumentos quirúrgicos se clasifica dentro del material de separación o exposición?:", opciones: ["a. Pinzas de Pean", "b. Separadores de Farabeuf", "c. Portaagujas de Mayo", "d. Bisturís de mango plano"], correcta: 1 },
    { id: 22, pregunta: "La respiración que se caracteriza por ser rápida y superficial se denomina clínicamente:", opciones: ["a. Polipnea o taquipnea superficial", "b. Bradipnea", "c. Hipernea", "d. Respiración de Kussmaul"], correcta: 0 },
    { id: 23, pregunta: "Cuando una úlcera por presión presenta pérdida parcial del grosor de la dermis, manifestándose como una llaga abierta superficial con lecho de la herida rosado, se clasifica como:", opciones: ["a. Categoría o Grado I", "b. Categoría o Grado II", "c. Categoría o Grado III", "d. Categoría o Grado IV"], correcta: 1 },
    { id: 24, pregunta: "El sondaje vesical intermitente se utiliza de forma preferente para:", opciones: ["a. Vaciar la vejiga en retenciones agudas de orina o recogida de muestras puntuales", "b. Controlar la diuresis continua en pacientes críticos", "c. Realizar lavados vesicales continuos con hematuria", "d. Mantener la vía urinaria abierta de por vida"], correcta: 0 },
    { id: 25, pregunta: "La dieta terapéutica que restringe de forma severa los alimentos ricos en ácido úrico (como vísceras y mariscos) se denomina:", opciones: ["a. Dieta hipoproteica", "b. Dieta baja en purinas", "c. Dieta hiposódica", "d. Dieta astringente"], correcta: 1 },
    { id: 26, pregunta: "La destrucción de los tejidos corporales del cadáver producida por sus propias enzimas celulares tras la muerte se conoce como:", opciones: ["a. Autólisis", "b. Putrefacción", "c. Livor mortis", "d. Espasmo cadavérico"], correcta: 0 },
    { id: 27, pregunta: "Para medir la presión venosa central (PVC), el catéter debe estar alojado idealmente en:", opciones: ["a. La arteria radial", "b. La vena cava superior o aurícula derecha", "c. La vena femoral superficial", "d. La arteria aorta ascendente"], correcta: 1 },
    { id: 28, pregunta: "La maniobra que consiste en abrir la vía aérea de una víctima inconsciente mediante la extensión del cuello se llama:", opciones: ["a. Maniobra frente-mentón", "b. Maniobra de Heimlich", "c. Maniobra de Esmarch-Heiberg", "d. Tracción mandibular pura"], correcta: 0 },
    { id: 29, pregunta: "La presencia de pus en la cavidad pleural se denomina técnicamente:", opciones: ["a. Empiema pleural", "b. Quilotórax", "c. Hemotórax masivo", "d. Hidrotórax"], correcta: 0 },
    { id: 30, pregunta: "El grupo de leucocitos que interviene de manera específica en las reacciones alérgicas y defensas antiparasitarias son:", opciones: ["a. Los eosinófilos", "b. Los linfocitos T", "c. Los monocitos", "d. Los basófilos puros"], correcta: 0 },
    { id: 31, pregunta: "El porcentaje de saturación de oxígeno arterial medido con pulsioximetría que marca el límite inferior de la normalidad en un adulto sano es:", opciones: ["a. 95%", "b. 90%", "c. 85%", "d. 80%"], correcta: 0 },
    { id: 32, pregunta: "La parte de la aguja quirúrgica que se une o ensambla directamente con el hilo de sutura se denomina:", opciones: ["a. Mandril o culata", "b. Bisel", "c. Cuerpo", "d. Punta cortante"], correcta: 0 },
    { id: 33, pregunta: "La técnica de movilización que consiste en girar al paciente en bloque manteniendo alineado el eje cabeza-cuello-tronco se realiza en pacientes con lesión de:", opciones: ["a. Columna vertebral o medular", "b. Fractura de fémur", "c. Traumatismo craneoencefálico leve", "d. Amputación de miembro inferior"], correcta: 0 },
    { id: 34, pregunta: "Un desinfectante de nivel intermedio es capaz de destruir:", opciones: ["a. Bacterias vegetativas, la mayoría de hongos y Mycobacterium tuberculosis, pero no esporas", "b. Absolutamente todas las esporas bacterianas", "c. Exclusivamente virus con envoltura lipídica", "d. Solo la carga fúngica ambiental"], correcta: 0 },
    { id: 35, pregunta: "La bolsa de lencería de color amarillo en el entorno hospitalario se reserva por protocolo para la ropa:", opciones: ["a. Infectada o contaminada", "b. Sucia común de planta", "c. Procedente de quirófano limpia", "d. De desecho directo para destrucción"], correcta: 0 },
    { id: 36, pregunta: "El tiempo mínimo recomendado para realizar un lavado de manos higiénico o común con agua y jabón es de:", opciones: ["a. 40 a 60 segundos", "b. 10 a 15 segundos", "c. 5 minutos exactos", "d. 10 minutos de arrastre"], correcta: 0 },
    { id: 37, pregunta: "La incapacidad para coordinar voluntariamente los movimientos musculares esqueléticos se denomina:", opciones: ["a. Ataxia", "b. Apraxia", "c. Disartria", "d. Afasia motora"], correcta: 0 },
    { id: 38, pregunta: "El esfínter muscular situado en la transición entre el esófago y el estómago se denomina:", opciones: ["a. Cardias", "b. Píloro", "c. Esfínter de Oddi", "d. Válvula ileocecal"], correcta: 0 },
    { id: 39, pregunta: "La presencia de cuerpos cetónicos en la orina, frecuente en la cetoacidosis diabética, se llama:", opciones: ["a. Cetonuria", "b. Glucuria", "c. Proteinuria de Bence-Jones", "d. Hemoglobinuria paroxística"], correcta: 0 },
    { id: 40, pregunta: "Un apósito hidrocoloide está indicado principalmente en las úlceras por presión para:", opciones: ["a. Mantener un ambiente húmedo aislado que favorezca la granulación y autólisis", "b. Realizar un desbridamiento mecánico cortante", "c. Secar heridas con exudado purulento masivo", "d. Evitar la fricción externa en piel sana intacta"], correcta: 0 },
    { id: 41, pregunta: "La presión arterial mínima medida durante la fase de relajación del ventrículo izquierdo se denomina:", opciones: ["a. Presión diastólica", "b. Presión sistólica", "c. Presión diferencial", "d. Presión media"], correcta: 0 },
    { id: 42, pregunta: "El sistema de oxigenoterapia de alto flujo que permite administrar concentraciones exactas de O2 mediante el efecto Venturi se denomina:", opciones: ["a. Mascarilla Venturi", "b. Gafas nasales", "c. Tienda de oxígeno", "d. Mascarilla con reservorio"], correcta: 0 },
    { id: 43, pregunta: "La recogida de muestras de esputo para cultivo microbiológico ordinario debe realizarse preferentemente:", opciones: ["a. A primera hora de la mañana, en ayunas y tras enjuagar la boca con agua", "b. Después de la comida principal del día", "c. Justo antes de acostarse por la noche", "d. Es indiferente la hora y el estado de la ingesta"], correcta: 0 },
    { id: 44, pregunta: "Para comprobar que una sonda nasogástrica está correctamente situada en el estómago, el método de auscultación consiste en insuflar:", opciones: ["a. 20 ml de aire en la sonda buscando el sonido de burbujeo en el epigastrio", "b. 50 ml de agua destilada buscando ruidos hidroaéreos", "c. 10 ml de suero fisiológico buscando ruidos colónicos", "d. 5 ml de aire buscando soplos traqueales"], correcta: 0 },
    { id: 45, pregunta: "La inmunidad que adquiere un individuo tras padecer de forma natural una enfermedad infecciosa se clasifica como:", opciones: ["a. Inmunidad natural activa", "b. Inmunidad natural pasiva", "c. Inmunidad artificial activa", "d. Inmunidad artificial pasiva"], correcta: 0 },
    { id: 46, pregunta: "¿Cuál de las siguientes pinzas quirúrgicas se clasifica dentro del instrumental de hemostasia para ocluir vasos sanguíneos?:", opciones: ["a. Pinza de Halsted o mosquito", "b. Pinza de Backhaus", "c. Pinza de Forester", "d. Pinza de dissection sin dientes"], correcta: 0 },
    { id: 47, pregunta: "El término melenas hace referencia macroscópicamente a la expulsión por el recto de:", opciones: ["a. Heces negras, pastosas y malolientes debidas a sangre digerida del tracto digestivo alto", "b. Heces con estrías de sangre roja brillante procedentes del recto", "c. Heces sin coloración o blanquecinas por ausencia de bilis", "d. Heces con alto contenido en grasas no digeridas"], correcta: 0 },
    { id: 48, pregunta: "Al realizar la reanimación cardiopulmonar (RCP) básica en un adulto por un solo reanimador, la relación entre compresiones torácicas e insuflaciones es de:", opciones: ["a. 30 compresiones y 2 insuflaciones", "b. 15 compresiones y 2 insuflaciones", "c. 5 compresiones y 1 insuflación", "d. 30 compresiones y 5 insuflaciones"], correcta: 0 },
    { id: 49, pregunta: "La decoloración o aparición de manchas de color rojo-violáceo en las zonas declives del cadáver por acumulación de sangre se denomina:", opciones: ["a. Livor mortis o livideces cadavéricas", "b. Algor mortis", "c. Rigor mortis", "d. Espasmo cadavérico"], correcta: 0 },
    { id: 50, pregunta: "El principal tipo de leucocitos granulocíticos encargados de fagocitar y combatir las infecciones bacterianas agudas son:", opciones: ["a. Los neutrófilos", "b. Los linfocitos", "c. Los eosinófilos", "d. Los monocitos"], correcta: 0 },
    { id: 51, pregunta: "El método de esterilización químico en frío que utiliza un gas para esterilizar instrumental termolábil es:", opciones: ["a. El óxido de etileno", "b. El autoclave de vapor", "c. El horno Poupinel", "d. La pasteurización continua"], correcta: 0 },
    { id: 52, pregunta: "La inflamación aguda de la mucosa que reviste las paredes del estómago se conoce como:", opciones: ["a. Gastritis", "b. Estomatitis", "c. Gastroenteritis", "d. Esofagitis"], correcta: 0 },
    { id: 53, pregunta: "El volumen de orina emitido por un adulto sano en condiciones fisiológicas normales a lo largo de 24 horas oscila habitualmente entre:", opciones: ["a. 1000 y 1500 ml", "b. 100 y 500 ml", "c. 3000 y 4000 ml", "d. 50 y 100 ml"], correcta: 0 },
    { id: 54, pregunta: "La capa más profunda y celular de la epidermis, donde se produce la mitosis continua de los queratinocitos, es el:", opciones: ["a. Estrato basal o germinativo", "b. Estrato córneo", "c. Estrato espinoso", "d. Estrato granuloso"], correcta: 0 },
    { id: 55, pregunta: "Para la recogida de una muestra de diuresis minutada de 24 horas, la primera micción de la mañana del primer día debe:", opciones: ["a. Desecharse completamente, anotando la hora de inicio", "b. Recogerse íntegramente en el contenedor", "c. Guardarse en un frasco estéril separado", "d. Llevarse a ebullición previa"], correcta: 0 },
    { id: 56, pregunta: "La posición quirúrgica en la que el paciente está en decúbito supino con las piernas abiertas y elevadas apoyadas sobre perneras se denomina:", opciones: ["a. Posición de litotomía o ginecológica", "b. Posición de Sims", "c. Posición de Trendelenburg", "d. Posición genupectoral"], correcta: 0 },
    { id: 57, pregunta: "El principal catión (ion con carga positiva) que se encuentra en el líquido extracelular y regula el equilibrio osmótico es el:", opciones: ["a. Sodio", "b. Potasio", "c. Calcio", "d. Magnesio"], correcta: 0 },
    { id: 58, pregunta: "El estrechamiento o repliegue excesivo de la piel del prepucio que impide su retracción sobre el glande se denomina:", opciones: ["a. Fimosis", "b. Criptorquidia", "c. Parafimosis", "d. Orquitis"], correcta: 0 },
    { id: 59, pregunta: "La presencia de aire acumulado en el interior de la cavidad pleural que provoca el colapso pulmonar se llama:", opciones: ["a. Neumotórax", "b. Hemotórax", "c. Quilotórax", "d. Atelectasia"], correcta: 0 },
    { id: 60, pregunta: "La escala de Norton se utiliza en la práctica de enfermería hospitalaria para valorar el riesgo de sufrir:", opciones: ["a. Úlceras por presión", "b. Caídas accidentales", "c. Deterioro cognitivo agudo", "d. Pérdida de autonomía funcional"], correcta: 0 }


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
