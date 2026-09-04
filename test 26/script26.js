// BANCO DE PREGUNTAS DEL TEST 26 (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 22, pregunta: "¿EN QUÉ POSICIÓN COLOCARÍA A UN PACIENTE PARA LA ADMINISTRACIÓN DE UN FÁRMACO POR VÍA RECTAL?:", opciones: ["a. Fowler", "b. Trendelemburg", "c. Sims", "d. Ninguna es correcta"], correcta: 2 },
    { id: 23, pregunta: "¿DÓNDE QUEDARÁ REFLEJADO EL CONTAJE DE GASAS Y COMPRESAS DE LA INTERVENCIÓN?:", opciones: ["a. Hoja de anestesia", "b. Libro de quirófano", "c. Hoja de protocolo de intervención", "d. Hoja de enfermera circulante"], correcta: 3 },
    { id: 24, pregunta: "UNA URGENCIA MÉDICA ES:", opciones: ["a. Toda situación que lleva al paciente a solicitar asistencia médica inmediata", "b. Toda situación que pone en peligro, de forma inminente, la vida del paciente", "c. Toda situación que requiera la presencia de un sanitario", "d. Ninguna es cierta"], correcta: 0 },
    { id: 26, pregunta: "FIEBRE MODERADA SERÍA ENTRE:", opciones: ["a. 36°C - 37°C", "b. 40,5°C - 41°C", "c. 38,5°C - 39,4°C", "d. 37,5°C - 38°C"], correcta: 2 },
    { id: 27, pregunta: "PARA REALIZAR UN LAVADO CONTINUO EN UNA SITUACIÓN DE GRAN HEMATURIA, SE UTILIZA:", opciones: ["a. Sonda de tres vías, tipo Foley", "b. Sonda de Pezzer", "c. Sonda rígida", "d. Sonda de Nelaton"], correcta: 0 },
    { id: 28, pregunta: "ENTRE LAS CAUSAS DE LAS CAÍDAS NO SE ENCUENTRA:", opciones: ["a. Disminución de la agudeza visual", "b. La anosmia", "c. Los cuadros confusionales", "d. La presbiacusia"], correcta: 1 },
    { id: 29, pregunta: "LOS QUIRÓFANOS SON ZONA:", opciones: ["a. Semirrestringida", "b. Semipública", "c. Restringida", "d. Estéril"], correcta: 2 },
    { id: 30, pregunta: "SON FUNCIONES DE LOS AUXILIARES DE ENFERMERÍA EN LAS INSTITUCIONES SANITARIAS ABIERTAS (SEÑALE LA RESPUESTA CORRECTA):", opciones: ["a. Recogida de volantes y documentos", "b. Escritura de libros de registros, volantes, comprobantes o informes", "c. Recogida de signos y manifestaciones espontáneas de los enfermos sobre sus síntomas", "d. Todas son correctas"], correcta: 3 },
    { id: 32, pregunta: "HAGA COMIDAS FRECUENTES Y DE POCO VOLUMEN, CAMINE UN POCO DESPUÉS DE LAS COMIDAS Y DUERMA CON LA CAMA UN POCO LEVANTADA, SON RECOMENDACIONES PARA UN PACIENTE QUE PADECE:", opciones: ["a. Ardor", "b. Pirosis", "c. Síndrome de malabsorción", "d. Son correctas A y B"], correcta: 3 },
    { id: 33, pregunta: "CUANDO UN PACIENTE TIENE UN BALANCE DE LÍQUIDOS POSITIVO, QUIERE DECIR:", opciones: ["a. Pierde líquidos", "b. Retiene líquidos", "c. Está deshidratado", "d. Tiende a la hipertensión"], correcta: 1 },
    { id: 35, pregunta: "METERIAL NECESARIO EN EL CARRO DE PARADAS PARA REALIZAR UNA INTUBACIÓN OROTRAQUIAL PEDIÁTRICA:", opciones: ["a. Pinza de Allis", "b. Pinza de Michel", "c. Pinza de Magyll", "d. Pinza de Duval"], correcta: 2 },
    { id: 36, pregunta: "LA TRIADA EPIDEMIOLÓGICA NOS HABLA DE RELACIONES ENTRE:", opciones: ["a. Huésped, agente y medio ambiente", "b. Enfermedad, salud y medio ambiente", "c. Recuperación, enfermedad y cuidados", "d. Todas son correctas"], correcta: 0 },
    { id: 37, pregunta: "ANTE UNA PARADA CARDIO-RESPIRATORIA EN UN LACTANTE, EL LARINGOSCOPIO DE ELECCIÓN QUE DEBIERA PREPARAR, SERÍA:", opciones: ["a. Un laringoscopio de palas rectas", "b. Un laringoscopio de palas curvas", "c. Un laringoscopio de tipo Jackson-Wisconsin", "d. B y C son correctas"], correcta: 0 },
    { id: 38, pregunta: "LOS HOSPITALES EN LOS QUE SE ATIENDE DE URGENCIA TODAS LAS ESPECIALIDADES MÉDICAS, SE CONSIDERAN DE:", opciones: ["a. Nivel 1", "b. Nivel 2", "c. Nivel 3", "d. Nivel 4"], correcta: 2 },
    { id: 39, pregunta: "ES INDICATIVO DE LA CORRECTA CICATRIZACIÓN DE UNA HERIDA:", opciones: ["a. La inflamación de los bordes de la herida pasados los tres días", "b. La formación de un queloide", "c. La hemorragia", "d. La formación de tejido de granulación"], correcta: 3 },
    { id: 41, pregunta: "LAS SONDAS DE ROBINSON Y PEZZER SON:", opciones: ["a. Nasogástricas", "b. Vesicales", "c. Rectales", "d. Ninguna es cierta"], correcta: 1 },
    { id: 42, pregunta: "LA VASODILATACIÓN ESTÁ INDICADA PARA:", opciones: ["a. Alivio de la congestión e hinchazón", "b. Alivio del dolor e inflamación", "c. Alivio de los calambres musculares y contracturas traumáticas", "d. Para todo lo mencionado"], correcta: 3 },
    { id: 43, pregunta: "DENTRO DE LOS PROCEDIMIENTOS FÍSICOS DE DESINFECCIÓN NO SE ENCUENTRA:", opciones: ["a. Antisépticos", "b. Ultrasonidos", "c. Hervido", "d. Ebullición"], correcta: 0 },
    { id: 45, pregunta: "EL FORMOL, ¿CÓMO SE PUEDE UTILIZAR?:", opciones: ["a. Como comprimidos", "b. Como vapor", "c. Como polvo", "d. De las tres formas"], correcta: 1 },
    { id: 46, pregunta: "DURANTE LA APLICACIÓN DE FRÍO O CALOR, DEBE VERIFICARSE:", opciones: ["a. Que no se observa palidez", "b. Que no se observa enrojecimiento", "c. Que no presenta cianosis alta", "d. Se debe verificar todo ello"], correcta: 3 },
    { id: 47, pregunta: "¿EN QUÉ ORINA TIENE MÁS SIGNIFICACIÓN LA PIURIA?:", opciones: ["a. Nocturna", "b. Postprandial", "c. Primera de la mañana", "d. Es indiferente"], correcta: 2 },
    { id: 48, pregunta: "EN LA POSICIÓN DE FOWLER, LA CABECERA DE LA CAMA ESTARÁ INCORPORADA EN UN ÁNGULO DE:", opciones: ["a. 20 grados", "b. 25 grados", "c. 35 grados", "d. 45 grados"], correcta: 3 },
    { id: 49, pregunta: "CUÁL DE LAS SIGUIENTES AFIRMACIONES ES CORRECTA, RESPECTO A LA TÉCNICA DE RECOGIDA DE ORINA DE 24 HORAS:", opciones: ["a. Es un técnica estéril", "b. Se recoge la orina desde la segunda micción del primer día", "c. La segunda micción del primer día se desecha", "d. Se recogen todas las micciones excepto la última del segundo día"], correcta: 2 },
    { id: 50, pregunta: "¿QUÉ MEDICACIÓN DEBIERA DE IR A BUSCARLA A LA NEVERA, EN VEZ DE AL CARRO DE PARADAS, SI ME LA PIDEN EN UNA PARADA CARDIORRESPIRATORIA?:", opciones: ["a. La atropina", "b. La adrenalina", "c. El anectine", "d. El bicarbonato"], correcta: 2 },
    { id: 1, pregunta: "¿En qué zona del cuerpo dan buenos resultados las grapas?:", opciones: ["a. En las piernas", "b. En la cabeza", "c. a y b son ciertas", "d. Ninguna es correcta"], correcta: 1 },
    { id: 2, pregunta: "La herida limpia es:", opciones: ["a. Toda herida no infectada", "b. Toda herida infectada con más de 6 horas de evolución", "c. Toda herida infectada con menos de 6 horas de evolución", "d. Una herida con exudado purulento continuo"], correcta: 0 },
    { id: 3, pregunta: "¿Qué es una sutura quirúrgica?:", opciones: ["a. Es cualquier hilo de material utilizado para ligar los vasos sanguíneos o aproximar los tejidos.", "b. Es la forma de ligar los vasos sanguíneos o aproximar los tejidos.", "c. a y b son incorrectas", "d. Un parche adhesivo de fijación"], correcta: 0 },
    { id: 4, pregunta: "Sobre los drenajes filiformes:", opciones: ["a. No deja la incisión abierta", "b. Dejan la incisión abierta", "c. Ninguna es correcta", "d. Se conectan siempre a frascos de vacío activos"], correcta: 0 },
    { id: 5, pregunta: "Para retirar los puntos se usará:", opciones: ["a. Tijera y un bisturí", "b. Bisturí y pinza", "c. Una tijera y una pinza con dientes", "d. Un quitagrapas de presión central"], correcta: 2 },
    { id: 6, pregunta: "Zonas de riesgo de lesiones de estructuras nobles en cirugía menor:", opciones: ["a. Cara, cuello, axila, ingle", "b. Mandíbula, palma de la muñeca", "c. Todas son ciertas", "d. Ninguna es correcta"], correcta: 2 },
    { id: 8, pregunta: "¿Cómo se evitará la hiperpigmentación de una cicatriz?:", opciones: ["a. Hay que proteger la cicatriz del sol", "b. Usar protectores solares", "c. Todas son ciertas", "d. Utilizar cremas abrasivas de noche"], correcta: 2 },
    { id: 9, pregunta: "¿Qué procedimientos quirúrgicos menores son abordables en atención primaria?:", opciones: ["a. Extirpación de lesiones cutáneas", "b. Cirugía de la uña", "c. Todas son correctas", "d. Intervenciones vasculares mayores"], correcta: 2 },
    { id: 10, pregunta: "El catgut es fabricado a partir de:", opciones: ["a. Intestino animal", "b. Vegetales", "c. Todas son ciertas", "d. Materiales plásticos sintéticos inertes"], correcta: 0 },
    { id: 11, pregunta: "¿Qué errores son frecuentes en la sutura?:", opciones: ["a. Asepsia deficiente", "b. Pinchazos accidentales", "c. Las dos anteriores son ciertas", "d. Isquemia digital controlada prolongada"], correcta: 2 },
    { id: 12, pregunta: "El tisucol se clasifica esencialmente como:", opciones: ["a. Pegamento sintético", "b. Antibiótico", "c. Paquete de sutura", "d. Solución antiséptica tópica"], correcta: 0 },
    { id: 13, pregunta: "¿Qué sistema tiene el cuerpo humano para drenar sustancias líquidas o gaseosas de forma fisiológica?:", opciones: ["a. Sistema linfático", "b. Cadena gangliolar", "c. Sistema urinario", "d. Todas las anteriores son correctas"], correcta: 3 },
    { id: 14, pregunta: "¿Qué es el catgut crómico?:", opciones: ["a. Es un catgut normal", "b. Es un catgut vegetal", "c. Es catgut procesado con sales crómicas", "d. Hilo sintético monofilamento no absorbible"], correcta: 2 },
    { id: 15, pregunta: "Las posibles complicaciones postquirúrgicas de los drenajes son:", opciones: ["a. Imposibilidad de extracción", "b. No hace falta estar aséptico", "c. Todas son falsas", "d. Ausencia de exudación postquirúrgica"], correcta: 0 },
    { id: 16, pregunta: "El objetivo clínico prioritario de una sutura es:", opciones: ["a. Prevenir infección por microorganismos", "b. No previene la hemorragia", "c. No previene ni evita lesiones mayores", "d. Mantener la herida abierta de manera permanente"], correcta: 0 },
    { id: 17, pregunta: "Una vez realizada la sutura en la piel corporal general:", opciones: ["a. Se colocará un apósito oclusivo", "b. En cara y cuello se puede dejar sin apósito", "c. a y b son ciertas", "d. Se lavará de forma inmediata con agua caliente"], correcta: 2 },
    { id: 18, pregunta: "Las heridas contaminadas:", opciones: ["a. Se suturarán después de la limpieza", "b. No se suturan", "c. Para unir bordes se usará aguja recta", "d. Se cierran inmediatamente con agrafes"], correcta: 1 },
    { id: 19, pregunta: "Respecto a las heridas:", opciones: ["a. Pueden ser limpias y sucias", "b. Se tratan como sucias si han pasado más de 6 horas", "c. a y b son correctas", "d. Las sucias nunca requieren desbridamiento"], correcta: 2 },
    { id: 20, pregunta: "La herida con más de 12 horas de evolución se considera:", opciones: ["a. Sucia y contaminada", "b. Sucia y no contaminada", "c. Limpia y no contaminada", "d. Quirúrgica limpia"], correcta: 0 },
    { id: 21, pregunta: "El hilo metálico no se utiliza en:", opciones: ["a. Suturas de refuerzo", "b. Tendones", "c. Todas las anteriores son falsas", "d. Huesos largos en osteosíntesis"], correcta: 2 },
    { id: 22, pregunta: "Como norma general los drenajes quirúrgicos:", opciones: ["a. Deben mantenerse por debajo del nivel del paciente", "b. Deben estar numerados", "c. Las anteriores son correctas", "d. Deben pinzarse permanentemente"], correcta: 2 },
    { id: 23, pregunta: "Tras la sutura de una herida:", opciones: ["a. Hay que mantener la herida limpia", "b. Proteger la herida del sol durante 1 mes", "c. A y B son correctas", "d. Debe aplicarse pomada hidratante cada hora"], correcta: 2 },
    { id: 24, pregunta: "Para asegurar la salida de líquidos acumulados usaremos:", opciones: ["a. Un drenaje de succión", "b. Un drenaje de balón", "c. Un drenaje permanente", "d. Ninguna de las anteriores"], correcta: 0 },
    { id: 25, pregunta: "El drenaje simple es:", opciones: ["a. Aquel sobre el que no realizamos ninguna presión", "b. Favorece la salida de la sustancia acumulada", "c. Las dos anteriores son correctas", "d. El que utiliza frascos de vacío activos continuo"], correcta: 2 },
    { id: 26, pregunta: "Sobre las suturas no absorbibles, es cierto:", opciones: ["a. No le afectan las enzimas de la piel", "b. La más utilizada es la seda", "c. Las anteriores son ciertas", "d. Desaparecen de forma natural en 8 días"], correcta: 2 },
    { id: 27, pregunta: "En los pulpejos de los dedos se usará anestesia:", opciones: ["a. Sin vasoconstrictor", "b. Con vasoconstrictor", "c. Con vasodilatador", "d. General inhalatoria obligatoria"], correcta: 0 },
    { id: 28, pregunta: "Para retirar las grapas, el quitagrapas:", opciones: ["a. Ejerce presión sobre el punto medio de la grapa y así los extremos salen con facilidad", "b. Ejerce presión sobre los extremos y estos salen con facilidad", "c. Se utiliza por comodidad del profesional", "d. Requiere tracción lateral forzada de la piel"], correcta: 0 },
    { id: 29, pregunta: "Qué nos indica el calibre de la sutura:", opciones: ["a. El diámetro del hilo", "b. El diámetro de la aguja", "c. Las dos son correctas", "d. La longitud del envase"], correcta: 0 },
    { id: 30, pregunta: "¿Qué es la anestesia?:", opciones: ["a. Es un fármaco", "b. Se usa para bloquear la sensibilidad táctil y dolorosa de un paciente", "c. Todas son ciertas", "d. Un método exclusivo de relajación muscular esquelética"], correcta: 2 },
    { id: 31, pregunta: "¿Qué puede llegar a evitar la cicatrización de una sutura?:", opciones: ["a. Infección", "b. Una correcta asepsia", "c. Todas son ciertas", "d. La aproximación anatómica exacta de los bordes"], correcta: 0 },
    { id: 32, pregunta: "Las suturas son fáciles de realizar, así que es una técnica:", opciones: ["a. Que todo el equipo de enfermería debe conocer", "b. Muy invasiva", "c. A y B son ciertas", "d. Exclusiva del cirujano plástico de guardia"], correcta: 1 },
    { id: 33, pregunta: "En relación con las grapas quirúrgicas:", opciones: ["a. Aguantan bien las tensiones", "b. No provocan rechazo", "c. Todas son ciertas", "d. Provocan alta reacción tisular inflamatoria"], correcta: 2 },
    { id: 34, pregunta: "No es correcto decir que la succión en un drenaje:", opciones: ["a. Un drenaje no hace succión", "b. Se realiza mediante frascos de vacío", "c. El redón no es un drenaje de succión", "d. Las respuestas a y c son correctas"], correcta: 3 },
    { id: 35, pregunta: "Con la sutura se protege la herida de:", opciones: ["a. Agresiones externas", "b. Agresiones internas", "c. Ambas son correctas", "d. Ninguna es correcta"], correcta: 0 },
    { id: 36, pregunta: "Las suturas sintéticas son:", opciones: ["a. Muy inertes", "b. No poseen gran capacidad de estiramiento", "c. Las anteriores son falsas", "d. Altamente reabsorbibles por enzimas cutáneas"], correcta: 0 },
    { id: 37, pregunta: "¿Los esfacelos son?:", opciones: ["a. Restos inflamatorios y necróticos de tejidos", "b. Restos de sangre coagulada", "c. Heridas sucias", "d. Tejido de cicatrización sano"], correcta: 0 },



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
