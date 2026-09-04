// BANCO DE PREGUNTAS DEL TEST 28 (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 1, pregunta: "La transmisión de una infección hospitalaria que se produce de forma directa a través de las manos del personal sanitario se clasifica epidemiológicamente como:", opciones: ["a. Transmisión por contacto directo", "b. Transmisión por fómite inanimado", "c. Transmisión vectorial", "d. Transmisión por gota aérea"], correcta: 0 },
    { id: 2, pregunta: "La complicación respiratoria del recién nacido que se caracteriza por una inmadurez pulmonar con déficit de surfactante alveolar se denomina:", opciones: ["a. Enfermedad de la membrana hialina", "b. Síndrome de aspiración meconial", "c. Taquipnea transitoria neonatal", "d. Displasia broncopulmonar avanzada"], correcta: 0 },
    { id: 3, pregunta: "A la hora de aplicar un vendaje elástico compresivo en un miembro inferior, la dirección del vendaje debe realizarse siempre:", opciones: ["a. Desde la zona distal hacia la proximal (de abajo hacia arriba)", "b. Desde la zona proximal hacia la distal (de arriba hacia abajo)", "c. Con vueltas circulares concéntricas fijas en el tobillo", "d. Es indiferente el sentido mecánico de la presión"], correcta: 0 },
    { id: 4, pregunta: "El instrumental de diéresis articulado provisto de hojas romas o cortantes que se utiliza para seccionar tejidos blandos o material médico se denomina:", opciones: ["a. Tijeras quirúrgicas", "b. Bisturís de hoja móvil", "c. Pinzas de disección con dientes", "d. Cizallas óseas de presión"], correcta: 0 },
    { id: 5, pregunta: "La presencia de un exceso de grasa no absorbida en las heces, que les da un aspecto pastoso, brillante y maloliente, se llama:", opciones: ["a. Esteatorrea", "b. Melenas", "c. Lientería", "d. Rectorragia"], correcta: 0 },
    { id: 6, pregunta: "Para realizar una punción lumbar con fines diagnósticos, la posición en la que el paciente debe colocarse en la cama es:", opciones: ["a. Decúbito lateral con la espalda arqueada y rodillas aproximadas al pecho (posición fetal)", "b. Posición de decúbito prono estricto", "c. Posición de Fowler elevada a 90 grados", "d. Posición de Roser con hiperextensión"], correcta: 0 },
    { id: 7, pregunta: "La capa intermedia y más gruesa de la pared del corazón, constituida por tejido muscular cardíaco de contracción involuntaria, se denomina:", opciones: ["a. Miocardio", "b. Endocardio", "c. Pericardio visceral", "d. Epicardio"], correcta: 0 },
    { id: 8, pregunta: "La escala de valoración que mide de forma específica el nivel de sobrecarga o afectación del cuidador principal de un paciente dependiente es:", opciones: ["a. Escala o Test de Zarit", "b. Índice de Lawton", "c. Escala de Pfeiffer", "d. Mini-mental de Lobo"], correcta: 0 },
    { id: 9, pregunta: "El desinfectante químico de alto nivel de elección para la desinfección en frío de endoscopios e instrumental óptico termolábil es:", opciones: ["a. El glutaraldehído al 2%", "b. El alcohol etílico al 70%", "c. El hipoclorito sódico diluido", "d. La solución acuosa de clorhexidina"], correcta: 0 },
    { id: 10, pregunta: "La presencia de aire y sangre de forma simultánea en el interior de la cavidad pleural se denomina técnicamente:", opciones: ["a. Hemoneumotórax", "b. Quilotórax agudo", "c. Empiema supurativo", "d. Pleuritis exudativa"], correcta: 0 },
    { id: 11, pregunta: "La escala de Glasgow se utiliza para realizar la valoración neurológica objetiva midiendo los siguientes parámetros, excepto:", opciones: ["a. La respuesta motora voluntaria", "b. La apertura de los ojos", "c. La respuesta verbal y orientación", "d. El reflejo plantar de Babinski"], correcta: 3 },
    { id: 12, pregunta: "El estrechamiento patológico de la luz de una arteria debido a la acumulación de placas de lípidos y colesterol en su pared interna se denomina:", opciones: ["a. Arteriosclerosis o ateromatosis", "b. Aneurisma sacular", "c. Variz superficial", "d. Flebitis obstructiva"], correcta: 0 },
    { id: 13, pregunta: "La técnica de desambulación en la que el paciente camina con el apoyo del auxiliar de enfermería situado en su lado afectado se realiza para:", opciones: ["a. Proporcionar seguridad y estabilidad mecánica", "b. Tirar del miembro sano del paciente", "c. Evitar el uso de andadores o bastones", "d. Acelerar el proceso post-mortem"], correcta: 0 },
    { id: 14, pregunta: "El material de sutura quirúrgica absorbible de origen sintético que mantiene su resistencia durante el proceso de cicatrización se denomina:", opciones: ["a. Ácido poliglicólico o vicryl", "b. Seda trenzada natural", "c. Hilo de nailon monofilamento", "d. Grapas de titanio o acero"], correcta: 0 },
    { id: 15, pregunta: "La parálisis que afecta de forma completa a una mitad lateral del cuerpo (brazo, tronco y pierna de un mismo lado) se conoce como:", opciones: ["a. Hemiplejía", "b. Paraplejía", "c. Tetraplejía", "d. Monoplejía"], correcta: 0 },
    { id: 16, pregunta: "La sonda rectal se introduce en el ano del paciente con el objetivo clínico primordial de:", opciones: ["a. Facilitar la expulsión de gases o gases acumulados en el colon", "b. Realizar un lavado continuo urinario", "c. Suministrar nutrición parenteral total", "d. Medir el aclaramiento de creatinina"], correcta: 0 },
    { id: 17, pregunta: "La disminución de la frecuencia cardíaca por debajo de 60 latidos por minuto en un adulto en reposo se denomina clínicamente:", opciones: ["a. Bradicardia", "b. Taquicardia", "c. Arritmia sinusal", "d. Pulso filiforme"], correcta: 0 },
    { id: 18, pregunta: "La eliminación de los tejidos necróticos, esfacelos o materias extrañas de una herida hasta descubrir el tejido sano circundante se llama:", opciones: ["a. Desbridamiento", "b. Fricción antiséptica", "c. Dehiscencia tisular", "d. Evisceración"], correcta: 0 },
    { id: 19, pregunta: "El principal tipo de inmunoglobulinas o anticuerpos presentes en la leche materna (calostro) que proporcionan inmunidad pasiva al lactante son:", opciones: ["a. IgA", "b. IgG", "c. IgM", "d. IgE"], correcta: 0 },
    { id: 20, pregunta: "La técnica de aislamiento que se aplica específicamente para proteger a pacientes inmunodeprimidos de gérmenes externos se denomina:", opciones: ["a. Aislamiento protector o inverso", "b. Aislamiento estricto respiratorio", "c. Aislamiento entérico", "d. Aislamiento de contacto"], correcta: 0 },
    { id: 21, pregunta: "Si se prescribe la administración de 1000 ml de suero glucosado al 5% para pasar en 8 horas, ¿cuántas gotas por minuto deben programarse en el sistema de goteo estándar?:", opciones: ["a. 42 gotas/min", "b. 21 gotas/min", "c. 63 gotas/min", "d. 12 gotas/min"], correcta: 0 },
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
    { id: 41, pregunta: "La posición quirúrgica en la que el paciente se encuentra en decúbito supino inclinado, con la cabeza más baja que los pies, se denomina:", opciones: ["a. Posición de Trendelenburg", "b. Posición de Fowler", "c. Posición de Morestin", "d. Posición de Sims"], correcta: 0 },
    { id: 42, pregunta: "La muestra biológica de líquido cefalorraquídeo (LCR) obtenida por punción lumbar debe trasladarse al laboratorio de forma:", opciones: ["a. Inmediata y a temperatura ambiente, nunca refrigerada", "b. Congelada a -20°C para preservar las proteínas", "c. En un frasco abierto con hielo seco", "d. Tras reposar 24 horas en la nevera de planta"], correcta: 0 },
    { id: 43, pregunta: "El instrumental de diéresis quirúrgica diseñado específicamente para enganchar las hojas de bisturí móviles se conoce como:", opciones: ["a. Mango de bisturí", "b. Portaagujas de Mayo", "c. Pinza de disección", "d. Cizalla recta"], correcta: 0 },
    { id: 44, pregunta: "La incapacidad para realizar movimientos coordinados intencionados, a pesar de conservar la fuerza muscular y la capacidad motora, se llama:", opciones: ["a. Apraxia", "b. Agnosia", "c. Afasia", "d. Ataxia"], correcta: 0 },
    { id: 45, pregunta: "El control biológico utilizado de forma específica para verificar la efectividad de la esterilización por vapor en autoclave contiene esporas de:", opciones: ["a. Geobacillus stearothermophilus", "b. Bacillus subtilis", "c. Clostridium difficile", "d. Bacillus pumilus"], correcta: 0 },
    { id: 46, pregunta: "La complicación grave de las úlceras por presión que cursa con una infección invasiva de los tejidos blandos profundos se conoce como:", opciones: ["a. Fascitis necrotizante", "b. Eritema localizado", "c. Maceración epidérmica", "d. Queloide reactivo"], correcta: 0 },
    { id: 47, pregunta: "Al realizar la higiene bucal a un paciente consciente con prótesis dental completa extraíble, la prótesis debe limpiarse con:", opciones: ["a. Cepillo, pasta o jabón neutro y agua fresca", "b. Alcohol de 96º directamente", "c. Solución de glutaraldehído al 2%", "d. En seco con una gasa de algodón"], correcta: 0 },
    { id: 48, pregunta: "La presencia de moco denso y pus en el análisis macroscópico del esputo se cataloga clínicamente como:", opciones: ["a. Esputo mucopurulento", "b. Esputo hemoptoico", "c. Esputo seroso", "d. Esputo numular"], correcta: 0 },
    { id: 49, pregunta: "El primer eslabón biológico de la cadena epidemiológica, donde los microorganismos viven y se multiplican de forma natural, se denomina:", opciones: ["a. Reservorio", "b. Mecanismo de transmisión", "c. Huésped susceptible", "d. Fómite inanimado"], correcta: 0 },
    { id: 50, pregunta: "La posición asistencial idónea en la que debe colocarse a una paciente gestante para aliviar la compresión de la vena cava es:", opciones: ["a. Decúbito lateral izquierdo", "b. Decúbito prono estricto", "c. Posición de Roser elevada", "d. Decúbito supino horizontal"], correcta: 0 },
    { id: 51, pregunta: "La complicación mecánica obstructiva producida por el acodamiento de un circuito de drenaje vesical suele provocar de forma inmediata:", opciones: ["a. Retención urinaria o globo vesical", "b. Incontinencia urinaria por rebosamiento", "c. Poliuria compensatoria", "d. Insuficiencia renal prerrenal"], correcta: 0 },
    { id: 52, pregunta: "El indicador de la escala de Braden que evalúa la capacidad del paciente para reaccionar de forma adecuada ante las molestias causadas por la presión es:", opciones: ["a. Percepción sensorial", "b. Movilidad física", "c. Exposición a la humedad", "d. Fricción y rozamiento"], correcta: 0 },
    { id: 53, pregunta: "La pérdida de continuidad de la superficie cutánea que afecta a la epidermis y la dermis, con escasa tendencia a la cicatrización espontánea, se llama:", opciones: ["a. Úlcera cutánea", "b. Mácula eritematosa", "c. Pápula sólida", "d. Habón o roncha"], correcta: 0 },
    { id: 54, pregunta: "Al realizar el balance hídrico hospitalario, el agua producida en el interior del organismo por las reacciones metabólicas celulares se denomina:", opciones: ["a. Agua endógena o metabólica", "b. Líquido transcelular", "c. Ingreso parenteral puro", "d. Pérdida insensible"], correcta: 0 },
    { id: 55, pregunta: "El desinfectante químico de elección para la antisepsia de la piel sana antes de realizar una punción venosa periférica es:", opciones: ["a. Clorhexidina alcohólica al 2% o alcohol al 70%", "b. Glutaraldehído activado al 2%", "c. Formaldehído diluido", "d. Agua oxigenada de 10 volúmenes"], correcta: 0 },
    { id: 56, pregunta: "La rigidez muscular esquelética que se instaura en el cadáver de forma progresiva tras el fallecimiento se denomina técnicamente:", opciones: ["a. Rigor mortis", "b. Algor mortis", "c. Livor mortis", "d. Autólisis celular"], correcta: 0 },
    { id: 57, pregunta: "El plano anatómico imaginario que atraviesa el cuerpo humano de forma horizontal dividiéndolo en una mitad superior y otra inferior es el:", opciones: ["a. Plano transversal o axial", "b. Plano sagital medio", "c. Plano frontal o coronal", "d. Plano oblicuo anterior"], correcta: 0 },
    { id: 58, pregunta: "La presencia de pus y bacterias en la orina, evidenciable por un aspecto turbio y maloliente, se denomina clínicamente:", opciones: ["a. Piuria", "b. Coluria", "c. Hematuria", "d. Proteinuria"], correcta: 0 },
    { id: 59, pregunta: "El material clínico reutilizable de larga duración que no se destruye con el uso de un único paciente se clasifica de forma contable como:", opciones: ["a. Material inventariable", "b. Material fungible blando", "c. Material séptico común", "d. Material de un solo uso"], correcta: 0 },
    { id: 60, pregunta: "La escala de valoración analgésica diseñada por la OMS para guiar el tratamiento farmacológico escalonado del dolor se denomina:", opciones: ["a. Escalera analgésica de la OMS", "b. Escala de Norton modificada", "c. Test de valoración de Barthel", "d. Índice funcional de Katz"], correcta: 0 }


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
