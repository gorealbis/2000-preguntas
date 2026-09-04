// BANCO DE PREGUNTAS DEL TEST 20 (Preguntas 1 a 15: Con respuestas reales del PDF)
const questions = [
    { id: 1, pregunta: "Se define asepsia como:", opciones: ["a. Consiste en utilizar productos químicos para intentar destruir los microorganismos contaminantes", "b. Conjunto de técnicas utilizadas que garantizan la eliminación de microorganismos infecciosos, de los objetos, materiales, superficies etc.", "c. Conjunto de técnicas destinadas a eliminar a los artrópodos", "d. Todas son ciertas"], correcta: 1 },
    { id: 2, pregunta: "¿Qué medidas importantes se toman en la desinsectación?", opciones: ["a. Eliminar las basuras para evitar que aniden los artrópodos (moscas etc.)", "b. Desecar las charcas donde ponen sus huevos (mosquitos) que están cerca de centros sanitarios", "c. Los parásitos de la ropa se destruyen lavándola con agua caliente", "d. Solo son ciertas la 1 y 2", "e. Todas son ciertas"], correcta: 4 },
    { id: 3, pregunta: "Utilizar insecticidas de acción rápida, duradera y no tóxica para la especie humana y los animales, es una medida a tomar en:", opciones: ["a. Asepsia", "b. Antisepsia", "c. Desinsectacion", "d. Infección", "e. Ninguna es cierta"], correcta: 2 },
    { id: 4, pregunta: "Se conoce como la invasion y entrada en el organismo humano de agentes extraños vivos ya sean bacterias, virus u hongos, es la definición de:", opciones: ["a. Asepsia", "b. Antisepsia", "c. Desinsectacion", "d. Infección", "e. Ninguna es cierta"], correcta: 3 },
    { id: 5, pregunta: "Entre los desinfectantes, se puede tomar como referencia la forma de actuar para destruir a los microorganismos:", opciones: ["a. Su acción sobre la pared y las membranas celulares", "b. Desarrollan su acción sobre las proteínas y las enzimas", "c. Desarrollan sobre el núcleo celular", "d. Ninguna es cierta", "e. Son ciertas la 1, 2 y 3"], correcta: 4 },
    { id: 6, pregunta: "Los diferentes niveles de desinfección que se pueden llevar a cabo en un hospital varían de los productos que se utilicen y su concentración:", opciones: ["a. Desinfección de alto nivel", "b. Desinfección de bajo nivel", "c. Desinfección de nivel intermedio", "d. Desinfección concomitante o concurrente", "e. Son ciertas la 1, 2 y 3"], correcta: 4 },
    { id: 7, pregunta: "Es un compuesto bifenólico con acción bactericida que su mecanismo de acción consiste en atacar a las proteínas de las membranas celulares desnaturalizándolas y produciendo la muerte celular, corresponde a:", opciones: ["a. Povidona yodada", "b. Hipoclorito sódico", "c. Clorhexidina", "d. Fenol y derivados", "e. Alcohol"], correcta: 3 },
    { id: 8, pregunta: "La acción que consiste en suprimir los microorganismos patógenos existentes en la habitación del enfermo, ropa, manos, piel, etc. se denomina:", opciones: ["a. Desinfección", "b. Desinsectación", "c. Asepsia", "d. Esterilización", "e. Ninguna es correcta"], correcta: 0 },
    { id: 9, pregunta: "De los procedimientos químicos, las propiedades de los aldehídos son:", opciones: ["a. Es un importante bactericida", "b. El formaldehído es un importante bactericida, se usa en estufa o cámara de fenol donde emite vapores a temperatura de 40º", "c. El glutaraldehído 2% es un bactericida muy potente capaz de destruir también esporas, hongos y virus", "d. Ninguna es cierta", "e. Son ciertas la 1, 2 y 3"], correcta: 4 },
    { id: 10, pregunta: "Es material fungible:", opciones: ["a. Bisturí", "b. Cama", "c. Tijeras", "d. Material de vidrio", "e. Son ciertas 1, 3 y 4"], correcta: 4 },
    { id: 11, pregunta: "El material inventariable, se caracteriza por:", opciones: ["a. Tienen vida larga", "b. Se deteriora con el uso", "c. Forman parte del inventario del centro", "d. Excelente, asepsia y antiséptico", "e. Son ciertas la 1 y 3"], correcta: 4 },
    { id: 12, pregunta: "En la clasificación del material según su peligrosidad infectiva del mismo se clasifica en:", opciones: ["a. Material fungible y material inventariable", "b. Crítico, semicrítico y no crítico", "c. Desinfectado, asepsia y antiséptico", "d. Material fungible", "e. Crítico y semicrítico"], correcta: 1 },
    { id: 13, pregunta: "Pertenece al material \"no crítico\":", opciones: ["a. Prótesis de cadera", "b. Mascarillas", "c. Orinales", "d. Válvulas cardíacas", "e. Gafas de oxígeno"], correcta: 4 }, // Nota: La clave oficial marca 'E' (Gafas de oxígeno)
    { id: 14, pregunta: "De los métodos de acción de los procedimientos desinfectantes, del grupo de los procedimientos físicos podemos enumerar:", opciones: ["a. Hervido o ebullición", "b. Pasterización", "c. Flujo laminar", "d. Antisépticos", "e. Son ciertos 1, 2 y 3"], correcta: 4 },
    { id: 15, pregunta: "El agua sola no moja bien, el detergente le ayuda a mojar y colabora a romper la tensión superficial de la misma ¿cuál es la propiedad del detergente que permite esta opción?:", opciones: ["a. Poder humectante", "b. Dispersión", "c. Suspensión", "d. Ninguna es cierta", "e. Con el agua sola se puede limpiar"], correcta: 0 },
    { id: 16, pregunta: "Las propiedad del óxido de etileno son:", opciones: ["a. Es un bactericida", "b. Se encuentra en estado de gas", "c. Esta muy utilizado en los hospitales", "d. Puede ser cancerígeno, teratogénico", "e. Todas son ciertas"], correcta: 4 },
    { id: 17, pregunta: "En el caso de la limpieza de la ropa de la cama, las bolsas van según el color de la actuación hospitalaria:", opciones: ["a. Bolsa roja: ropa muy manchada", "b. Bolsa blanca: ropa de la actuación hospitalaria", "c. Bolsa roja: ropa sucia simplemente", "d. Bolsa blanca: ropa sucia simplemente", "e. Bolsa amarilla: ropa sucia simplemente"], correcta: 3 },
    { id: 18, pregunta: "En la limpieza del material e instrumental clínico, hay que hacerlo con:", opciones: ["a. Agua caliente y jabón", "b. Agua fría y jabón", "c. Todas son falsas", "d. Se sumerge en solución antiséptica con agua caliente", "e. Solución antiséptica con agua fría"], correcta: 1 },
    { id: 19, pregunta: "A la técnica de desinfección que consiste en introducir instrumentos en una solución desinfectante durante cierto tiempo, se le denomina:", opciones: ["a. Loción", "b. Brumas", "c. Inmersión", "d. Pulverización", "e. Vaporización"], correcta: 2 },
    { id: 20, pregunta: "Para realizar la técnica de pasterización se debe alcanzar la temperatura de:", opciones: ["a. 150", "b. 125", "c. 68", "d. 75", "e. 24"], correcta: 2 },
    { id: 21, pregunta: "Cual de los siguientes no es un eslabón de la cadena epidemiológica:", opciones: ["a. Ciclo reproductivo", "b. Fuente de infección", "c. Reservorio", "d. Mecanismo de transmisión", "e. Sujeto susceptible"], correcta: 0 },
    { id: 22, pregunta: "Cuando hablamos de antigenicidad nos referimos a:", opciones: ["a. Grado o cantidad de enfermedad que puede producir el agente causal", "b. La capacidad del agente para extenderse", "c. Capacidad para multiplicarse el agente causal en los tejidos, dando o no lugar enfermedad", "d. Capacidad para provocar una enfermedad", "e. La habilidad de un agente causal para producir reacción inmunológica local o general"], correcta: 4 },
    { id: 23, pregunta: "Un elemento que actúa en la cadena epidemiológica como fuente puede ser en otro caso reservorio o mecanismo de transmisión, como ejemplo tenemos:", opciones: ["a. Esto no es cierto", "b. El suelo puede ser reservorio o mecanismo de transmisión", "c. Solo en algunos casos", "d. Siempre", "e. Son ciertas la 2 y 3"], correcta: 4 },
    { id: 24, pregunta: "Se define \"portador convaleciente\":", opciones: ["a. Aquel que elimina gérmenes no patógenos", "b. Elimina el microorganismo antes de que aparezca la enfermedad que suele estar incubando", "c. Ha padecído una enfermedad contagiosa que ha curado clínicamente pero elimina gérmenes durante tres meses siguientes", "d. Son personas colonizadas pero no infectadas", "e. Todas son ciertas"], correcta: 2 },
    { id: 25, pregunta: "Se define \"sujeto sano susceptible\" como:", opciones: ["a. Aquel que elimina gérmenes no patógenos", "b. Todo sujeto sano y capaz de enfermar", "c. Es el último eslabón de la cadena epidemiológica", "d. Son ciertas la 2 y 3", "e. Todas son ciertas"], correcta: 3 }

];

// --- MOTOR DE LÓGICA DEL SIMULADOR ---
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
