// BANCO DE PREGUNTAS DEL TEST 8 (Preguntas 1 a 21: Esterilización, dietas, aseo y constantes)
const questions = [
    { id: 1, pregunta: "El puerperio puede dividirse en 3 etapas...", opciones: ["a. Puerperio inmediato: abarca hasta las 6 horas tras el parto", "b. Puerperio precoz: desde las 6 hasta las 72 horas (3 días) tras el parto", "c. Puerperio tardío: desde las 72 horas hasta la recuperación, que tiene un promedio estadístico de 37 días", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 2, pregunta: "¿A qué se denomina vector de la cadena de infección?", opciones: ["a. Al microorganismo que causa la infección", "b. Al lugar donde crece el microorganismo", "c. Al portador no humano que transmite el microorganismo", "d. A la puerta de entrada del microorganismo"], correcta: 2 },
    { id: 3, pregunta: "¿A cuántas Kilocalorías equivale 1 gramo de grasa?", opciones: ["a. 4", "b. 5", "c. 7", "d. 9"], correcta: 3 },
    { id: 4, pregunta: "El autoclave es un método de esterilización...", opciones: ["a. Por métodos químicos", "b. Sus características, que le diferencian de otros métodos de esterilización, son la economía, seguridad y lentitud", "c. Por calor húmedo", "d. Todas las anteriores son incorrectas"], correcta: 2 },
    { id: 5, pregunta: "Dentro de los métodos de esterilización por calor seco, destacan...", opciones: ["a. El óxido de etileno y el autoclave", "b. Las cabinas de flujo laminar", "c. La incineración y la estufa Poupinel", "d. El formaldehído y la acetona"], correcta: 2 },
    { id: 6, pregunta: "¿En cuál de las siguientes vías NO se produce la absorción del medicamento?", opciones: ["a. Vía rectal", "b. Vía vaginal", "c. Vía oral", "d. Vía intravenosa"], correcta: 3 },
    { id: 7, pregunta: "En cuanto al baño caliente, es cierto que...", opciones: ["a. Es una aplicación tibia y seca", "b. Alivia la rigidez muscular", "c. Es vasoconstrictor", "d. Todas las anteriores son falsas"], correcta: 1 },
    { id: 8, pregunta: "La sonda de Levin se usa para...", opciones: ["a. Sondaje vesical", "b. Sondaje rectal", "c. Sondaje nasogástrico", "d. Sondaje para gastrostomía"], correcta: 2 },
    { id: 9, pregunta: "El centro regulador de la temperatura está en...", opciones: ["a. La hipófisis", "b. El hipotálamo", "c. La pineal", "d. La parótida"], correcta: 1 },
    { id: 10, pregunta: "¿A cuántas Kilocalorías equivale 1 gramo de proteínas?", opciones: ["a. 9", "b. 3", "c. 5", "d. 4"], correcta: 3 },
    { id: 11, pregunta: "En la intoxicación por cáusticos está contraindicado...", opciones: ["a. La colocación del SNG", "b. La administración de leche", "c. La inducción del vómito", "d. Son ciertas las respuestas a y c"], correcta: 2 },
    { id: 12, pregunta: "La intoxicación por insecticidas organofosforados se puede producir por...", opciones: ["a. Ingestión", "b. Inhalación", "c. Absorción percutánea", "d. Todas son ciertas"], correcta: 3 },
    { id: 13, pregunta: "La puesta en marcha de una serie de actividades de un programa, nos remite a la fase de...", opciones: ["a. Planificación", "b. Diagnóstico", "c. Elaboración", "d. Ejecución"], correcta: 3 },
    { id: 14, pregunta: "La carencia de qué vitamina, produce raquitismo en los lactantes?", opciones: ["a. 4", "b. 7", "c. 9", "d. 3"], correcta: 0 },
    { id: 15, pregunta: "¿Qué NO es cierto en relación con el lavado de genitales externos masculinos?", opciones: ["a. Se debe proporcionar intimidad al paciente", "b. Se deben colocar guantes", "c. El lavado se inicia desde el ano hacia el pubis", "d. El glande se limpia deslizando el prepucio hacia atrás"], correcta: 2 },
    { id: 16, pregunta: "En el cuidado de las uñas...", opciones: ["a. Las uñas de las manos se cortarán ovaladas y rectas en los pies", "b. Las uñas de las manos se cortarán rectas y ovaladas en los pies", "c. Las uñas de las manos y pies se cortarán rectas", "d. Las uñas de las manos y pies se cortarán ovaladas"], correcta: 0 },
    { id: 17, pregunta: "Para realizar el baño en la cama, la temperatura de la habitación debe estar entre...", opciones: ["a. 30-36°", "b. 12-15°", "c. 20-24°", "d. Es indiferente. Sólo es importante la temperatura del agua"], correcta: 2 },
    { id: 18, pregunta: "¿Qué es cierto en el lavado de los ojos del paciente?", opciones: ["a. Lavarlos siempre del lagrimal hacia fuera", "b. Utilizar una solución desinfectante", "c. Lavarlos después del resto de la cara", "d. Hay que limpiarlos en seco"], correcta: 0 },
    { id: 19, pregunta: "'Paciente erguido, con los miembros inferiores y superiores pegados al cuerpo y las palmas de las manos mirando al frente'. Esta posición corporal recibe el nombre de...", opciones: ["a. Decúbito supino", "b. Decúbito prono", "c. Anatómica", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 2 },
    { id: 20, pregunta: "¿En cuántos grupos se distribuyen los productos sanitarios?", opciones: ["a. 18", "b. 19", "c. 10", "d. 17"], correcta: 0 },
    { id: 21, pregunta: "¿Qué NO es cierto en relación a las direcciones de los movimientos?", opciones: ["a. Abducción: alejamiento del plano medio", "b. Adducción: acercamiento al plano medio", "c. Rotación: movimiento de giro sobre un eje", "d. Eversión: cambio de dirección hacia dentro"], correcta: 3 },
    { id: 22, pregunta: "Las muletas de Lofstrand o muletas de antebrazo son...", opciones: ["a. Tienen superficies forradas o acolchadas y se emplean en pacientes que no pueden suportar la descarga del peso corporal sobre sus muñecas", "b. Son de uso habitual y se emplean en enyesados de miembros inferiores o esguinces; es preciso para utilizarlas tener fuerza en la parte superior del cuerpo y en las extremidades superiores", "c. Constan de un anillo que se adapta al antebrazo y una asidera para apoyarse, y se emplean cuando el individuo no tiene fuerza en la parte inferior del cuerpo. Se utilizan en pacientes parapléjicos", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 2 },
    { id: 23, pregunta: "En la técnica para el uso de muletas, en el apoyo sobre tres puntos, ¿qué debe avanzar primero el paciente?", opciones: ["a. La muleta derecha y la pierna afectada", "b. La muleta izquierda y la pierna afectada", "c. Ambas muletas y la pierna afectada", "d. Ambas muletas y la pierna sana"], correcta: 2 },
    { id: 24, pregunta: "¿Qué es falso en relación con la administración de los enemas terapéuticos?", opciones: ["a. Consisten en introducir una solución medicamentosa por recto, reteniendo por un período de tiempo para facilitar su absorción, con un mínimo de 30 minutos", "b. Se coloca al paciente en posición de Sims y se lubrica y se introduce la sonda unos 15 cm", "c. Se insufla el balón de la sonda aproximadamente 15-20c.c. De aire", "d. Se administra lentamente la solución, situando el irrigador por debajo del nivel de la cama"], correcta: 3 },
    { id: 25, pregunta: "¿Qué es falso con respecto a las precauciones que hay que tomar al administrar un enema?", opciones: ["a. Se empleará con precaución en pacientes cardíacos, por provocar reflejo vagal", "b. Ante cualquier incidencia (dolor, hemorragia), se suspenderá su administración", "c. No se forzará la entrada de la sonda ni de la solución a administrar y no se debe sobrepasar la administración de tres enemas seguidos", "d. Ninguna de las anteriores es falsa"], correcta: 3 },
    { id: 26, pregunta: "La presión que 'consiste en la medida de la presión media de la aurícula derecha, por medio de una columna de agua que fluye desde una presión superior a una presión inferior, hasta que las fuerzas se igualan'. Nos estamos refiriendo a la presión...", opciones: ["a. Arterial sistólica", "b. Venosa central", "c. Arterial diastólica", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 1 },
    { id: 27, pregunta: "'Un tubo plástico flexible, de unos 25cm de longitud, con punta redondeada y varios orificios en los últimos 3 cm del tubo'. Esta definición corresponde a...", opciones: ["a. La sonda nasal o catéter orofaríngeo", "b. Cánula nasal o gafas nasales", "c. Mascarilla", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 0 },
    { id: 28, pregunta: "En la tienda de oxígeno, manteniendo un flujo de 15 litros por minuto, se obtienen concentraciones de oxígeno del...", opciones: ["a. 20-30%", "b. 30-40%", "c. 50-60%", "d. 40-50%"], correcta: 1 },
    { id: 29, pregunta: "¿Qué es falso en relación a los medicamentos?", opciones: ["a. Se definen como la sustancia material que, administrada al organismo y en virtud de una serie de acciones biofísicas o bioquímicas, es capaz de prevenir, corregir o curar una enfermedad", "b. Se componen de un principio activo y de un excipiente", "c. Que el excipiente es el responsable de la acción farmacológica del medicamento", "d. El placebo es un agente con forma farmacéutica como los medicamentos, pero sin principio activo"], correcta: 2 },
    { id: 30, pregunta: "¿Cuál de los siguientes términos NO corresponde a un tipo de papila de la lengua?", opciones: ["a. Filiformes", "b. Fungiformes", "c. Pediformes", "d. Calciformes"], correcta: 2 },
    { id: 31, pregunta: "El consentimiento informado será escrito...", opciones: ["a. En caso de intervención quirúrgica", "b. En caso de procedimiento diagnóstico", "c. En caso de aplicación de procedimientos que suponen riesgos sobre la salud del paciente", "d. Todas las anteriores son ciertas"], correcta: 3 },
    { id: 32, pregunta: "Los centros sanitarios tienen la obligación de conservar la documentación clínica, con un tiempo mínimo, contado desde la fecha del alta de cada proceso asistencial, de:", opciones: ["a. 1 año", "b. 5 años", "c. 7 años", "d. 10 años"], correcta: 1 },
    { id: 33, pregunta: "En la limpieza de los ojos, ésta se debe hacer...", opciones: ["a. Hacia el ángulo interno de los ojos, en sentido horizontal", "b. Hacia el ángulo interno de los ojos, en sentido vertical", "c. Hacia el ángulo externo de los ojos, en sentido horizontal", "d. Hacia el ángulo externo de los ojos, en sentido vertical"], correcta: 2 },
    { id: 34, pregunta: "El centro regulador de la respiración se encuentra en...", opciones: ["a. El hipotálamo", "b. La hipófisis", "c. El bulbo raquídeo", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 2 },
    { id: 35, pregunta: "De los siguientes enunciados, ¿cuál NO es correcto?", opciones: ["a. Taquipnea es el aumento de la frecuencia respiratoria", "b. Bradipnea es la disminución de la frecuencia respiratoria", "c. Disnea es la sensación de dificultad respiratoria", "d. Apnea es la respiración normal"], correcta: 3 },
    { id: 36, pregunta: "'La respiración profunda y rítmica con pausas', que es una respiración acidótica, es lo que recibe el nombre de...", opciones: ["a. Respiración de Kussmaul", "b. Respiración de Biot", "c. Respiración torácica", "d. Respiración de Cheyne-Stokes"], correcta: 0 },
    { id: 37, pregunta: "En la campana de oxígeno, si se administra un flujo de oxígeno de 5 litros por minuto, se obtiene una concentración del...", opciones: ["a. 30%", "b. 40%", "c. 45%", "d. 50%"], correcta: 1 },
    { id: 38, pregunta: "¿Qué NO es cierto sobre los fármacos?", opciones: ["a. Los fármacos inotrópicos disminuyen la actividad cardíaca", "b. Los fármacos simpaticolíticos bloquean la acción de los receptores adrenérgicos", "c. Los fármacos simpaticomiméticos estimulan los receptores adrenérgicos, como la adrenalina, noradrenalina", "d. Los fármacos antieméticos disminuyen o eliminan el vómito"], correcta: 0 },
    { id: 39, pregunta: "Sobre los baños y las duchas, es cierto que...", opciones: ["a. La cura de Kneipp consiste en baños y lociones de agua fría y paseos por sitios húmedos con los pies descalzos", "b. Los baños de contraste consisten en la aplicación de forma alternativa de agua fría (10º-18º) y caliente (38º a 43º), 3 minutos en tanque de agua caliente y 2 minutos en tanque de agua fría, hasta un total de 20 minutos", "c. La talasoterapia consiste en utilizar los baños de mar con fines terapéuticos", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 40, pregunta: "¿Dónde se encuentran las microvellosidades?", opciones: ["a. En el recto", "b. En el colón", "c. En el intestino delgado", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 2 },
    { id: 41, pregunta: "¿Qué son las criptas de Lieberkühn (Morgagni)?", opciones: ["a. Son depresiones mucosas, dispuestas entre las columnas de Morgagni", "b. Son pequeñas prominencias, correspondientes a la base de la columna de Morgagni", "c. Son 3 repliegues semilunares", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 0 },
    { id: 42, pregunta: "¿Qué es falso sobre los fermentos digestivos del jugo pancreático?", opciones: ["a. La lipasa transforma las grasas en ácidos grasos y glicerina", "b. La amilasa actúa sobre las proteínas", "c. La quimotripsina-Tripsina transforma el almidón en maltosa", "d. Son falsas las respuestas b y c"], correcta: 3 },
    { id: 43, pregunta: "¿En qué dieta se deben evitar los alimentos ricos en leche, cacao, chocolate, nueces y vísceras animales?", opciones: ["a. Dieta baja en residuos", "b. Dieta laxante", "c. Dieta astringente", "d. Dieta baja en calcio y fósforo"], correcta: 3 },
    { id: 44, pregunta: "Los ordenadores sólo son capaces de manejar señales...", opciones: ["a. Analógicas", "b. Digitales", "c. Discretas", "d. Simbólicas"], correcta: 1 },
    { id: 45, pregunta: "El incumplimiento de la obligación de atender los servicios esenciales establecidos en caso de huelga, es falta...", opciones: ["a. Muy leve", "b. Leve", "c. Grave", "d. Muy grave"], correcta: 3 },
    { id: 46, pregunta: "El traslado forzoso sólo podrá imponerse como consecuencia de...", opciones: ["a. Faltas leves", "b. Faltas graves", "c. Faltas muy graves", "d. Son ciertas las respuestas b y c"], correcta: 2 },
    { id: 47, pregunta: "Los consellers serán nombrados y separados por...", opciones: ["a. El Rey", "b. El Presidente de la Generalitat", "c. El Presidente de las Cortes Valencianas", "d. El Presidente del Gobierno del Estado"], correcta: 1 },
    { id: 48, pregunta: "Los consellers tienen tratamiento de...", opciones: ["a. Ilustrísimo", "b. Excelentísimo", "c. Honorable señor", "d. Ninguno de los anteriores"], correcta: 2 },
    { id: 49, pregunta: "La Ley de Prevención de Riesgos Laborales es de...", opciones: ["a. Ley 31/1995, de 8 de Noviembre", "b. Ley 14/1986, de 25 de Abril", "c. Ley 16/2003, de 28 de Mayo", "d. Ley 8/2003, de 8 de Abril"], correcta: 0 },
    { id: 50, pregunta: "Los representantes de los trabajadores con funciones específicas en materia de prevención de riesgos laborales se denominan...", opciones: ["a. Delegados de Personal", "b. Delegados de Prevención", "c. Comité de Empresa", "d. Comité de Seguridad y Salud"], correcta: 1 },
    { id: 51, pregunta: "La nutrición enteral...", opciones: ["a. Es el aporte de alimentos digeridos, bien por vía oral o a través de un abordaje en algunos de los tramos del tubo digestivo", "b. Es de menor coste, con menos complicaciones mayores (sépticas) y con mejor respuesta del aparato digestivo que la nutrición parenteral", "c. Es preferible a la vía parenteral", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 52, pregunta: "Cuando hablamos de oligoelementos, ¿a qué nos estamos refiriendo en concreto?", opciones: ["a. A las proteínas", "b. A los hidratos de carbono", "c. A elementos como el zinc, cobre, cromo y manganeso", "d. A las vitaminas"], correcta: 2 },
    { id: 53, pregunta: "El calostro...", opciones: ["a. Es de color amarillento y espeso", "b. Su contenido en proteínas, vitaminas y sales minerales es mayor que en la leche definitiva", "c. El contenido en grasas e hidratos de carbono es menor que en la leche definitiva", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 54, pregunta: "¿Qué medidas, entre otras, debemos tomar ante un derrame de medicamentos citostáticos?", opciones: ["a. Utilización del equipo de protección individual (adaptador buco-nasal, gafas protectoras y guantes impermeables)", "b. Si el derrame es líquido, absorber el vertido mediante toallas o gasas. Si el derrame es sólido cubrirlo o humedecerlo, retirarlo y limpiar con gasas absorbentes humedecidas", "c. Dejar los restos contaminados en un contenedor de residuos. Limpiar las zonas contaminadas tres veces con alcohol o con detergente y agua", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 55, pregunta: "¿Qué producto químico puede causar irritación local sobre ojos y piel, cataratas, efectos cancerígenos, mutagénicos y teratogénicos?", opciones: ["a. El formaldehído", "b. El glutaraldehído", "c. El óxido de etileno", "d. Ninguna de las anteriores es correcta"], correcta: 2 }


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
