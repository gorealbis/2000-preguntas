// BANCO DE PREGUNTAS DEL TEST 17 (Preguntas 15 a 35: Junta de Extremadura - Parte 1)
const questions = [

    { id: 15, pregunta: "Uno de los criterios que estableció Barlett para realizar la Educación Sanitaria a enfermos es:", opciones: ["a. La individualización en la educación", "b. El conocimiento no es necesario para modificar la conducta", "c. Los enfermos no exigen atención continuada", "d. No se debe orientar al paciente sobre lo que debe hacer"], correcta: 0 },
    { id: 16, pregunta: "¿Cuál no es una etapa en la elaboración del Plan Marco de Educación para la Salud de Extremadura?", opciones: ["a. De análisis de situación", "b. De definición de líneas de actuación", "c. De discusión pública", "d. De determinación de objetivos"], correcta: 2 },
    { id: 17, pregunta: "Al realizar un correcto aseo de la piel del anciano, no se pretende:", opciones: ["a. Conservar el buen estado de la piel", "b. Estimular la circulación sanguínea", "c. Refrescar al paciente", "d. Activar el metabolismo basal"], correcta: 3 },
    { id: 18, pregunta: "Los ejercicios vesicales sirven:", opciones: ["a. Para mejorar la circulación sanguínea del anciano", "b. Para evitar el dolor de cabeza del anciano", "c. Para evitar la incontinencia urinaria del anciano", "d. Para mejorar la función hepática del anciano"], correcta: 2 },
    { id: 19, pregunta: "¿Qué es el luto?", opciones: ["a. Es el proceso a través del cual el duelo se resuelve o altera", "b. Es una conducta obsesiva ante la muerte", "c. Es un estado de incredulidad ante la muerte", "d. Es el estado de una persona que ha experimentado la pérdida de un ser allegado"], correcta: 0 },
    { id: 20, pregunta: "El rigor mortis abandona el cuerpo:", opciones: ["a. Unas 48 horas después de la muerte", "b. Unas 24 horas después de la muerte", "c. Unas 96 horas después de la muerte", "d. Unas 15 horas después de la muerte"], correcta: 2 },
    { id: 21, pregunta: "¿Qué es la Ergoterapia?", opciones: ["a. Una rehabilitación a través de trabajos no remunerados", "b. Una actividad a través de actividades recreativas", "c. Una rehabilitación en pacientes inmovilizados", "d. Una rehabilitación a través de trabajos remunerados"], correcta: 0 },
    { id: 22, pregunta: "Respecto a la Terapia Ocupacional, ¿qué tres actividades son fundamentales en el anciano?", opciones: ["a. La bipedestación activa, las AVD y el programa terapéutico", "b. Las AVD, el programa de rehabilitación y el programa terapéutico", "c. No son tres, sino dos, las AVD y el programa de rehabilitación", "d. La bipedestación activa, las AVD y el programa de rehabilitación"], correcta: 1 },
    { id: 23, pregunta: "En las unidades de Psiquiatría, los dispositivos más usados para la sujeción mecánica utilizan un sistema:", opciones: ["a. Digital", "b. Magnético", "c. Manual", "d. Eléctrico"], correcta: 1 },
    { id: 24, pregunta: "¿Cada cuánto tiempo hay que realizar cambios posturales a un paciente con sujeción mecánica?", opciones: ["a. Cada vez que lo pida el paciente", "b. Cada 10-12 horas", "c. Cada 2-3 horas", "d. Cada 24 horas"], correcta: 2 },
    { id: 25, pregunta: "Proporcionar una dieta rica en fibras:", opciones: ["a. Es una medida no farmacológica de prevención del estreñimiento", "b. Es una medida farmacológica de prevención del estreñimiento", "c. Es una medida para ganar peso", "d. Es una obligación del dietista prescribirla"], correcta: 0 },
    { id: 26, pregunta: "Un enema evacuante está contraindicado:", opciones: ["a. Si existe obstrucción intestinal", "b. Antes y después del parto", "c. Para obtener muestra de heces", "d. En caso de estreñimiento"], correcta: 0 },
    { id: 27, pregunta: "Los alimentos cuya composición principal son las proteínas y el calcio, se conocen como:", opciones: ["a. Energéticos", "b. Plásticos", "c. Reguladores", "d. Light"], correcta: 1 },
    { id: 28, pregunta: "¿Cuáles son dos determinaciones antropométricas en nutrición?", opciones: ["a. Peso y tamaño de pies", "b. Talla y perímetro torácico", "c. Perímetro braquial y pliegues cutáneos", "d. Pliegues cutáneos y grosor del cuello"], correcta: 2 },
    { id: 29, pregunta: "¿Cuál es la forma más frecuente de Diabetes mellitus?", opciones: ["a. La diabetes tipo 1", "b. La diabetes estacional", "c. La diabetes tipo 2", "d. La diabetes gestacional"], correcta: 2 },
    { id: 30, pregunta: "Son tipos de insulina:", opciones: ["a. Ultrarrápida, Rápida, Intermedia y Veloz", "b. Ultrarrápida, Regular, NPH y Prolongada", "c. Rápida, Regular, Intermedia y HPA", "d. Rápida, NPH, Prolongada y Detenida"], correcta: 1 },
    { id: 31, pregunta: "La regulación de la temperatura corporal se lleva a cabo en:", opciones: ["a. El hígado", "b. El hipotálamo", "c. El cerebelo", "d. Las axilas"], correcta: 1 },
    { id: 32, pregunta: "¿Cuál es la arteria más utilizada para tomar el pulso?", opciones: ["a. Humeral", "b. Braquial", "c. Radial", "d. Femoral"], correcta: 2 },
    { id: 33, pregunta: "Pertenece a las ABVD:", opciones: ["a. Continencia de esfínteres", "b. Tomar medicación", "c. Utilizar el transporte público", "d. Realizar actividades lúdicas"], correcta: 0 },
    { id: 34, pregunta: "Cuál de las siguientes definiciones no se corresponde con la de geriatría:", opciones: ["a. Diagnóstico y tratamiento de enfermedades agudas y crónicas en el anciano", "b. Recuperación funcional en el anciano", "c. Trastornos y enfermedades de la vejez", "d. Estudio científico de la vejez y de todos los fenómenos del envejecimiento en general"], correcta: 3 },
    { id: 35, pregunta: "Indique la respuesta correcta:", opciones: ["a. La escala de Pfeiffer consta de cinco ítems y valora la capacidad funcional", "b. El índice de Katz contiene seis ítems y valora las actividades avanzadas de la vida diaria", "c. El índice de Barthel contiene diez ítems y la puntuación de 100 es para la máxima independencia", "d. El MEC (Miniexamen cognoscitivo) de Lobo es una escala para la valoración del deterioro intelectual del anciano"], correcta: 2 },
    { id: 36, pregunta: "Las vitaminas liposolubles son:", opciones: ["a. Vitamina C, vitamina B1 y B6", "b. Vitaminas B1, B2, B6 y B12", "c. Vitaminas A, D, E y K", "d. Vitaminas: Tiamina, Biotina, Ácido Fólico y Niacina"], correcta: 2 },
    { id: 37, pregunta: "En la valoración física de un paciente con desnutrición no aparece:", opciones: ["a. Palidez en la conjuntiva", "b. Cabellos frágiles", "c. Uñas quebradizas", "d. Parestesias"], correcta: 3 },
    { id: 38, pregunta: "¿Cuál de las siguientes afirmaciones no procede en la alimentación por S.N.G.?:", opciones: ["a. La dieta debe ser líquida a temperatura de 38º C a 40º C", "b. Está contraindicado aspirar antes de iniciar la alimentación", "c. Colocar al paciente en posición correcta 30º elevada la cabeza como mínimo y mantener en dicha posición 30-60 minutos tras la toma", "d. Es necesario cambiar el equipo de infusión cada 24 horas"], correcta: 1 },
    { id: 39, pregunta: "Con respecto al clapping, ¿cuál de las siguientes afirmaciones es la incorrecta?:", opciones: ["a. Es un método de fisioterapia respiratoria", "b. Es un método para estimular el apetito", "c. Ayuda a expulsar las mucosidades", "d. La percusión debe ser suave y rítmica"], correcta: 1 },
    { id: 40, pregunta: "Los cambios funcionales en el anciano producen:", opciones: ["a. Aumento de la masa muscular esquelética", "b. Aumento de la sensibilidad a la sed", "c. Dificultad para absorber la vitamina B12", "d. Mayor elasticidad en los vasos sanguíneos"], correcta: 2 },
    { id: 41, pregunta: "Indique cuál de las siguientes respuestas es falsa como consecuencia de la inmovilización en el anciano:", opciones: ["a. Se favorece la circulación periférica", "b. Se producen rigideces y contracturas", "c. Aumenta la temperatura corporal", "d. Aumenta la fuerza muscular al disminuir el grado de actividad"], correcta: 0 },
    { id: 42, pregunta: "Entre los objetivos de la asistencia en la enfermedad crónica no se encuentra:", opciones: ["a. Conseguir el máximo nivel de dependencia", "b. Evitar complicaciones", "c. Fomentar una buena adaptación a la enfermedad", "d. Curación de la enfermedad"], correcta: 0 },
    { id: 43, pregunta: "Señale la frase incorrecta:", opciones: ["a. En una situación de hemoptisis se debe colocar a la persona afectada en posición de semisentado", "b. En una situación de epistaxis debe colocarse a la persona afectada en posición lateral de seguridad", "c. En una situación de otorragia se debe colocar a la persona afectada en posición lateral de seguridad sobre el oído que no sangra", "d. Ante una situación de hematemesis se debe colocar a la persona afectada en posición lateral de seguridad"], correcta: 2 },
    { id: 44, pregunta: "La actuación prioritaria ante una parada cardio-respiratoria sería:", opciones: ["a. Avisar a los servicios de emergencia", "b. Colocar al paciente en posición lateral de seguridad", "c. Comprobar el estado de conciencia", "d. Iniciar el masaje cardio-externo"], correcta: 2 },
    { id: 45, pregunta: "En el carro de parada no es imprescindible:", opciones: ["a. Ambu", "b. Guantes", "c. Sondas vesicales", "d. Apósitos hidrocoloides"], correcta: 3 },
    { id: 46, pregunta: "No es un signo/síntoma de fractura:", opciones: ["a. El dolor", "b. La deformidad", "c. Los hematomas", "d. La hipotermia"], correcta: 3 },
    { id: 47, pregunta: "Entre las causas de las caídas no se encuentra:", opciones: ["a. La disminución de la agudeza visual", "b. La anosmia", "c. Los cuadros confusionales", "d. La presbiacusia"], correcta: 1 },
    { id: 48, pregunta: "Dentro de las medidas preventivas para evitar las caídas en el anciano no se incluye:", opciones: ["a. Retirar los reposabrazos de las sillas", "b. Colocar felpudos con topes antideslizantes", "c. Colocar un asidero portátil a cada lado de la bañera", "d. Colocar interruptores accesibles a la entrada de las habitaciones"], correcta: 0 },
    { id: 49, pregunta: "Las relaciones interpersonales no son eficientes cuando producen:", opciones: ["a. Empatía", "b. Suspicacia", "c. Respeto", "d. Autenticidad"], correcta: 1 },
    { id: 50, pregunta: "Son actuaciones correctas ante una hemorragia:", opciones: ["a. La primera medida sería la aplicación de un torniquete en la zona afectada", "b. Presionar la arteria femoral si la hemorragia se produce en el miembro superior", "c. Controlar las constantes vitales", "d. Presionar la arteria braquial colocando la mano sobre la ingle para detener la hemorragia"], correcta: 2 },
    { id: 51, pregunta: "Síntomas del shock hipovolémico:", opciones: ["a. La fiebre", "b. El pulso débil y acelerado", "c. La cetoacidosis", "d. La seborrea"], correcta: 1 },
    { id: 52, pregunta: "Son actuaciones correctas ante una quemadura:", opciones: ["a. Limpieza exhaustiva con solución yodada", "b. Vacunación antitetánica: gammaglobulina antitetánica y/o toxoide", "c. Almohadillar la zona quemada con vendas de algodón", "d. Aplicar mercurocromo para evitar infecciones posteriores"], correcta: 1 },
    { id: 53, pregunta: "Entre los cuidados ante un cuadro de insolación no se debe:", opciones: ["a. Colocar a la persona afectada en posición de Trendelenburg", "b. Retirar del foco de calor", "c. Aplicar compresas frías", "d. Colocar a la persona afectada en posición de seguridad"], correcta: 0 },
    { id: 54, pregunta: "La cama que se utiliza en las unidades de grandes quemados se denomina:", opciones: ["a. Cama libro", "b. Cama roto-test", "c. Cama electrocircular", "d. Cama de levitación"], correcta: 3 },
    { id: 55, pregunta: "Para la administración de un enema utilizaremos la posición:", opciones: ["a. Decúbito lateral", "b. Decúbito ventral", "c. Semifowler", "d. Morestin"], correcta: 0 },
    { id: 56, pregunta: "Una de las siguientes precauciones generales en la administración de fármacos es incorrecta, señale cuál:", opciones: ["a. Administrar la dosis a la hora indicada", "b. Anotar cada medicación administrada", "c. Preparación y administración del fármaco por varias personas", "d. Comprobar que el medicamento está ordenado y firmado"], correcta: 2 },
    { id: 57, pregunta: "La absorción de un fármaco no está condicionada por:", opciones: ["a. La liposolubilidad", "b. La superficie de absorción", "c. El flujo sanguíneo", "d. Las afecciones a nivel renal"], correcta: 3 },
    { id: 58, pregunta: "Señale cuál de las siguientes afirmaciones acerca de la epilepsia es errónea:", opciones: ["a. Se debe a una descarga anormal en una parte del cerebro", "b. Las más características son las tónico-clónicas", "c. Su control farmacológico es complicado, ya que requieren de varios fármacos", "d. Cuando no responde a tratamiento médico, se puede utilizar el quirúrgico"], correcta: 2 },
    { id: 59, pregunta: "Las crisis epilépticas que cursan sin afectación de la conciencia se denominan:", opciones: ["a. Crisis parciales simples", "b. Crisis parciales complejas", "c. Petit mal", "d. Crisis tónico-clónicas"], correcta: 0 },
    { id: 60, pregunta: "En relación al reglamento de régimen interno de los centros de mayores en Extremadura, ¿cuál de estas expresiones es incorrecta?:", opciones: ["a. Es obligatorio para centros tanto públicos como privados", "b. Se entiende aprobado si la Administración no emite respuesta transcurridos tres meses desde su presentación", "c. Se entregará una copia al usuario en el momento del ingreso", "d. Es obligatorio sólo para centros públicos"], correcta: 3 },
    { id: 61, pregunta: "Según el Decreto 83/2000, de 4 de Abril, por el que se regula el estatuto de los centros de mayores de la Comunidad Autónoma de Extremadura, ¿cuál de las siguientes actuaciones constituye una infracción leve?:", opciones: ["a. Alterar las normas de convivencia y respeto mutuo, creando en el centro situaciones de malestar", "b. Utilizar aparatos o herramientas no autorizadas por las normas del centro", "c. No comunicar la ausencia del centro residencial cuando es superior a cuatro días", "d. Demora injustificada de un mes en el pago de la estancia o servicio"], correcta: 1 },
    { id: 62, pregunta: "En la escala de Norton, ¿a partir de qué puntuación se considera un alto riesgo de formación de úlcerca?:", opciones: ["a. 12 puntos o menos", "b. 15 puntos o menos", "c. Entre 7 y 15 puntos", "d. Ninguna de las anteriores es correcta"], correcta: 0 },
    { id: 63, pregunta: "En un paciente en decúbito lateral la zona con riesgo de sufrir úlceras por presión será:", opciones: ["a. Talen", "b. Rodilla", "c. Trocánter mayor y región sacra", "d. Región sacra"], correcta: 2 },
    { id: 64, pregunta: "Los cambios posturales para evitar la aparición de úlceras por presión se deben hacer:", opciones: ["a. Cada 2 horas", "b. Cada 4 horas durante el día y por la noche", "c. Cada 6 horas en horario nocturno", "d. Cada 8 horas"], correcta: 0 },
    { id: 65, pregunta: "De los siguientes términos, ¿cuál hace referencia a la incapacidad para reconocer objetos o personas?:", opciones: ["a. Afasia", "b. Apraxia", "c. Agnosia", "d. Ninguna de las anteriores"], correcta: 2 },
    { id: 66, pregunta: "Señale la respuesta incorrecta en relación a la atención a personas con demencia:", opciones: ["a. Procurar que el anciano esté activo el mayor tiempo posible", "b. Evitar la rutina en las actividades cotidianas", "c. No es preciso un régimen especial de comidas, pero sí un horario de comidas fijo", "d. Los viajes no son aconsejables"], correcta: 1 },
    { id: 67, pregunta: "Dentro de las manifestaciones clínicas de las demencias NO se encuentra:", opciones: ["a. Las jergafasias", "b. La agnosia del espejo", "c. La apraxia en el vestir", "d. La orientación temporo-espacial"], correcta: 3 },
    { id: 68, pregunta: "¿Cuál de las siguientes es una causa de incontinencia urinaria por rebosamiento?:", opciones: ["a. La atrofia vaginal", "b. El prolapso uterino", "c. La hipertrofia prostática", "d. La litiasis"], correcta: 2 },
    { id: 69, pregunta: "¿Cuál de las siguientes actuaciones no es una finalidad del sondaje vesical?:", opciones: ["a. La realización de lavados vesicales", "b. La recogida de orina estéril", "c. La realización de un balance de líquidos", "d. Para tratamiento de infecciones urinarias"], correcta: 3 },
    { id: 70, pregunta: "Indicar el orden correcto de la lencería al hacer una cama:", opciones: ["a. Colchón, entremetida, encimera, manta", "b. Colchón, hule, encimera, colcha", "c. Funda, bajera, encimera, manta, colcha", "d. Colchón y funda, bajera, entremetida, encimera, manta, colcha, almohada y su funda"], correcta: 3 },
    { id: 71, pregunta: "La técnica correcta para hacer la cama de un paciente encamado, debe ser:", opciones: ["a. Entre dos auxiliares de enfermería colocándose cada uno a un lado de la cama, de forma que mientras uno hace su parte de la cama, el otro sostiene al enfermo", "b. Entre dos auxiliares de enfermería colocándose ambos en el mismo lado de la cama, de forma que mientras uno hace su parte de la cama, el otro sostiene al enfermo", "c. No es función del auxiliar de enfermería hacer la cama ocupada", "d. Trasladar al paciente a una camilla auxiliar y, posteriormente, proceder a hacer la cama"], correcta: 0 },
    { id: 72, pregunta: "Atendiendo al tipo de financiación de las residencias de mayores, indicar qué denominación no es correcta:", opciones: ["a. Residencias públicas", "b. Residencias privadas", "c. Residencias gratuitas", "d. Residencias concertadas o mixtas"], correcta: 2 },
    { id: 73, pregunta: "Los Centros de día de mayores, no tienen como objetivo:", opciones: ["a. El apoyo a los familiares", "b. Favorecer la rehabilitación", "c. La estancia de ancianos encamados", "d. Demorar la institucionalización en residencias"], correcta: 2 },
    { id: 74, pregunta: "En relación con el envejecimiento, señalar qué frase no es correcta:", opciones: ["a. Es un proceso universal que afecta a todos los seres vivos", "b. Es la suma de todos los cambios que se dan en el organismo con el paso del tiempo", "c. Es una sucesión de modificaciones morfológicas, fisiológicas y psicosociales", "d. Es una causa morbosa originaria de enfermedad"], correcta: 3 }


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
