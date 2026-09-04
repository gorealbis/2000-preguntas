// BANCO DE PREGUNTAS DEL TEST 11 (Preguntas 1 a 20: Enemas, cardiovascular, ejes corporales e higiene)
const questions = [
    { id: 1, pregunta: "¿Qué es falso con respecto a los enemas?", opciones: ["a. El enema carminativo se emplea principalmente para eliminar el flato", "b. Existen enemas grandes y enemas pequeños", "c. El enema de retención o terapéutico tiene como finalidad ayudar a evacuar el contenido del colon", "d. El enema de flujo de retorno, conocido como enema de Harris, se emplea para expulsar el flato"], correcta: 2 },
    { id: 2, pregunta: "¿Qué es falso con respecto al aparato cardiovascular?", opciones: ["a. Lleva a los tejidos el oxígeno y otras sustancias", "b. Elimina los productos residuales", "c. Transporta sustancias entre las diversas partes del organismo", "d. Está formado sólo por el corazón, las venas y las arterias"], correcta: 3 },
    { id: 3, pregunta: "¿Qué es falso en relación al miocardio?", opciones: ["a. El grosor del ventrículo izquierdo es mayor que el derecho", "b. La válvula mitral tiene tres valvas", "c. Las aurículas actúan como reservorio, acumulando la sangre durante la sístole ventricular", "d. Todas las respuestas anteriores son falsas"], correcta: 1 },
    { id: 4, pregunta: "Sobre el aparato cardiovascular, es cierto que...", opciones: ["a. Normalmente suele haber dos arterias coronarias, derecha e izquierda que nacen en los senos de Valsalva", "b. Que el miocardio es el músculo cardíaco propiamente dicho", "c. Que el corazón ejerce su función impelente de sangre a través de dos propiedades, contractilidad y propiedad eléctrica", "d. Todas las anteriores son ciertas"], correcta: 3 },
    { id: 5, pregunta: "La válvula mitral del corazón separa...", opciones: ["a. Aurícula derecha-ventrículo izq", "b. Ventrículo derecho-aurícula izq", "c. Aurícula derecha-ventrículo der", "d. Aurícula izquierda-ventrículo izq"], correcta: 3 },
    { id: 6, pregunta: "¿Qué NO es cierto sobre las arterias?", opciones: ["a. La arteria temporal se localiza encima del hueso temporal, por delante de la oreja y detrás de la ceja", "b. La arteria carótida se encuentra en la cara anterior del cuello, a ambos lados de la laringe", "c. La arteria humeral se localiza en la cara anterior de la muñeca", "d. La arteria poplítea se localiza en la flexura de la rodilla, por la cara posterior"], correcta: 2 },
    { id: 7, pregunta: "Para administrar un enema, el paciente debe estar colocado en posición de...", opciones: ["a. Trendelenburg", "b. Antitrendelenburg", "c. Decúbito supino", "d. Sims"], correcta: 3 },
    { id: 8, pregunta: "¿Qué NO es cierto con respecto a la Higiene y el Aseo?", opciones: ["a. La Higiene es una parte de la Medicina que estudia la salud y el modo de conservarla", "b. Que la Higiene es un conjunto de prácticas que tienen como finalidad mantener la higiene del cuerpo", "c. El aseo es una parte de la Medicina, que estudia la salud y el modo de conservarla", "d. No son ciertas las respuestas b y c"], correcta: 2 },
    { id: 9, pregunta: "Las articulaciones fijas unidas por tejido fibroso reciben el nombre de...", opciones: ["a. Anfiartrosis", "b. Sinartrosis", "c. Diartrosis", "d. Ninguna de las anteriores"], correcta: 1 },
    { id: 10, pregunta: "¿Cuál de los siguientes NO es uno de los ejes imaginarios que definen el cuerpo humano?", opciones: ["a. El eje latitudinal", "b. El eje longitudinal", "c. El eje transversal", "d. Ninguna de las respuestas anteriores es correcta"], correcta: 0 },
    { id: 11, pregunta: "¿Cuál de los siguientes NO es un tipo de articulación?", opciones: ["a. La diartrosis", "b. La sinartrosis", "c. La muscular", "d. La anfiartrosis"], correcta: 2 },
    { id: 12, pregunta: "¿Qué es lo que permite que los músculos tiren de los huesos para producir el movimiento?", opciones: ["a. Las articulaciones", "b. La piel", "c. Los tendones", "d. Los ligamentos"], correcta: 2 },
    { id: 13, pregunta: "El eje que recorre el cuerpo en toda su longitud, pasando desde la cabeza a los pies, se denomina...", opciones: ["a. Eje longitudinal", "b. Eje transversal", "c. Eje sagital", "d. Todas las respuestas anteriores son incorrectas"], correcta: 0 },
    { id: 14, pregunta: "El eje que atraviesa de delante a atrás el cuerpo de forma perpendicular recibe el nombre de...", opciones: ["a. Eje transversal", "b. Eje sagital", "c. Eje longitudinal", "d. Eje de latitud"], correcta: 1 },
    { id: 15, pregunta: "¿Qué son las pinzas de Magill?", opciones: ["a. Un dispositivo para la liberación de la vía aérea", "b. Un dispositivo de barrera", "c. Unas pinzas curvas articuladas", "d. Las respuestas a y c son ciertas"], correcta: 3 },
    { id: 16, pregunta: "¿Qué es un Programa de Salud?", opciones: ["a. Un conjunto de actividades organizadas y coordinadas", "b. La finalidad de estas actividades es conseguir un objetivo definido en una población determinada", "c. Y con unos recursos dados", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 17, pregunta: "Llamamos documentación NO Clínica a...", opciones: ["a. La documentación que se utiliza en la gestión administrativa del centro", "b. Con ella nos referimos a la trasmisión de informaciones o de solicitudes entre los profesionales de una consulta o de un servicio", "c. Son documentos sin relación directa con la atención al paciente: administración, asesoría jurídica, almacenes, salud laboral, higiene, cocina y despensa", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 18, pregunta: "Si se administra la nutrición parenteral por la vía periférica, la vía de acceso suelen ser las venas...", opciones: ["a. Basílica", "b. Cefálica", "c. Subclavia o yugular interna", "d. Son ciertas las respuestas a y b"], correcta: 3 },
    { id: 19, pregunta: "Según su forma, los huesos pueden ser...", opciones: ["a. Largos, cortos, planos e irregulares", "b. Largos, cortos, profundos y regulares", "c. Largos, cortos, planos y regulares", "d. Largos, planos y regulares"], correcta: 0 },
    { id: 20, pregunta: "De los huesos cabe decir que...", opciones: ["a. En los huesos largos, la longitud predomina más que su anchura y grosor", "b. En el caso de los huesos cortos, son huesos pequeños donde su longitud, grosor y anchura son casi iguales entre sí", "c. Y en el caso de los huesos planos, son huesos en que el ancho y el largo son predominantes sobre el grosor; es decir, que son delgados", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 21, pregunta: "¿Qué NO es cierto en el uso de bastones y muletas?", opciones: ["a. El empleo del bastón está indicado en pacientes con lesión bilateral y pérdida del equilibrio", "b. El empleo del bastón está indicado en pacientes con lesión unilateral...", "c. La longitud del bastón...", "d. El uso de muletas..."], correcta: 0 },
    { id: 22, pregunta: "Paciente en decúbito supino en un plano oblicuo de 45º respecto al suelo, manteniendo la cabeza más baja que los pies...", opciones: ["a. Antitrendelenburg", "b. Trendelenburg o Morestin", "c. Decúbito lateral", "d. Ninguna..."], correcta: 0 },
    { id: 23, pregunta: "¿Qué otro nombre recibe la posición de Roser?", opciones: ["a. Morestin", "b. Semiprona", "c. Proetz", "d. La posición de Roser no recibe otro nombre"], correcta: 2 },
    { id: 24, pregunta: "Paciente que permanece tumbado en decúbito supino, en un plano inclinado de 45º...", opciones: ["a. Roser o Proetz", "b. Sims", "c. Trendelenburg", "d. Antitrendelenburg"], correcta: 3 },
    { id: 25, pregunta: "¿Qué es la eupnea?", opciones: ["a. La respiración irregular", "b. La respiración ruidosa", "c. Respiración normal", "d. Respiración suave"], correcta: 2 },
    { id: 26, pregunta: "Las características del pulso son...", opciones: ["a. La frecuencia", "b. El ritmo", "c. La amplitud o el volumen", "d. Todas las anteriores respuestas son correctas"], correcta: 3 },
    { id: 27, pregunta: "¿Qué nombre recibe la siguiente posición corporal? 'paciente en decúbito supino, con las piernas separadas...'", opciones: ["a. Genupectoral", "b. Litotomía o ginecológica", "c. Kraske", "d. Trendelenburg"], correcta: 1 },
    { id: 28, pregunta: "¿Qué normas generales se deben seguir para la administración de un medicamento?", opciones: ["a. Comprobar la orden", "b. Comprobar el nombre", "c. Comprobar la dosis", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 29, pregunta: "En una dieta equilibrada, ¿cuál es la proporción adecuada de proteínas, grasas e hidratos de carbono?", opciones: ["a. Proteínas: 15-25%; grasas: 30-35%; hidratos de carbono: 45-55%", "b. Proteínas...", "c. Proteínas...", "d. Ninguna..."], correcta: 0 },
    { id: 30, pregunta: "¿Qué nombre recibe una dieta baja en calorías?", opciones: ["a. Dieta hipercalórica", "b. Dieta laxante", "c. Dieta hipocalórica", "d. Dieta astringente"], correcta: 2 },
    { id: 31, pregunta: "¿En qué dieta NO está permitida el agua?", opciones: ["a. Líquida", "b. Blanda", "c. Absoluta", "d. Hipocalórica"], correcta: 2 },
    { id: 32, pregunta: "La Farmacocinética es la ciencia que estudia...", opciones: ["a. El movimiento...", "b. El movimiento de los fármacos en función del tiempo y la dosis", "c. La absorción...", "d. Ninguna..."], correcta: 1 },
    { id: 33, pregunta: "El paro cardíaco es...", opciones: ["a. El cese...", "b. El cese...", "c. El cese repentino del corazón en su función de expulsar la sangre", "d. Ninguna..."], correcta: 2 },
    { id: 34, pregunta: "¿Y qué nombre recibe el esfínter superior del estómago?", opciones: ["a. Píloro", "b. Cardias", "c. Cecal", "d. Ninguna..."], correcta: 1 },
    { id: 35, pregunta: "¿Cuál de las hemorragias siguientes es de origen respiratorio?", opciones: ["a. Vómica", "b. Hematemesis", "c. Hemoptisis", "d. Todas..."], correcta: 2 },
    { id: 36, pregunta: "¿En qué tipo de quemaduras aparecen vesículas?", opciones: ["a. En las de tercer grado", "b. En las de segundo grado", "c. En las de primer grado", "d. Ninguna..."], correcta: 1 },
    { id: 37, pregunta: "¿Qué es un esguince?", opciones: ["a. Es un desplazamiento...", "b. Lesión producida por traumatismo articular abierto...", "c. Lesión producida por traumatismo articular cerrado, caracterizada por la distensión o rotura indirecta de los ligamentos...", "d. Todas son incorrectas"], correcta: 2 },
    { id: 38, pregunta: "El producto semicrítico es aquel...", opciones: ["a. Que entra en contacto con mucosas y piel no intacta", "b. Que entra...", "c. Que entra...", "d. Ninguna..."], correcta: 0 },
    { id: 39, pregunta: "Las ventajas del vapor de agua son...", opciones: ["a. Rapidez, economía y seguridad", "b. Lentitud...", "c. Rapidez...", "d. Lentitud..."], correcta: 0 },
    { id: 40, pregunta: "En la cirugía limpia-contaminada, la tasa esperable de infección sin profilaxis es del...", opciones: ["a. 5-15%", "b. 1-5%", "c. 15-20%", "d. Ninguna..."], correcta: 0 },
    { id: 41, pregunta: "En la cirugía sucia o infectada, la tasa esperable de infección sin profilaxis es del...", opciones: ["a. 40-60%", "b. 25-30%", "c. 30-35%", "d. 60-70%"], correcta: 0 },
    { id: 42, pregunta: "La cólera, hepatitis A requieren aislamiento...", opciones: ["a. Respiratorio", "b. Estricto", "c. Protector o inverso", "d. Entérico"], correcta: 3 },
    { id: 43, pregunta: "¿Cuál de los siguientes enunciados NO es cierto?", opciones: ["a. La gestión de residuos comprende las fases de segregación, recogida y transporte y tratamiento", "b. Los residuos sólidos urbanos son los residuos que se consideran como específicos de una actividad sanitaria", "c. Contaminante es todo agente presente en el medio ambiente, que produce o puede producir efectos indeseables para la salud y/o el bienestar", "d. Los contaminantes se clasifican en físicos, químicos y biológicos"], correcta: 1 },
    { id: 44, pregunta: "¿Cuál de los siguientes periféricos es de entrada/salida?", opciones: ["a. Teclado", "b. Escáner", "c. Módem", "d. Impresora"], correcta: 2 },
    { id: 45, pregunta: "¿Cuál es el capítulo 'de las garantías de las libertades y derechos fundamentales'?", opciones: ["a. III", "b. II", "c. I", "d. IV"], correcta: 2 },
    { id: 46, pregunta: "¿En qué artículo se establece que los poderes públicos mantendrán un régimen público de Seguridad Social para todos los ciudadanos?", opciones: ["a. 47", "b. 41", "c. 49", "d. 50"], correcta: 1 },
    { id: 47, pregunta: "'España se constituye en un Estado social y democrático de Derecho...'. Este enunciado...", opciones: ["a. Viene establecido en el título preliminar de la Constitución Española", "b. Viene establecido en el preámbulo de la Constitución Española", "c. Viene establecido en el Título I de la C.E", "d. Viene establecido en el Título II de la C.E"], correcta: 0 },
    { id: 48, pregunta: "El Defensor del Pueblo se encuentra contenido en el artículo...", opciones: ["a. 51", "b. 50", "c. 55", "d. 54"], correcta: 3 },
    { id: 49, pregunta: "El artículo 9º, en su párrafo 1º, dice que los ciudadanos y poderes públicos están sujetos al...", opciones: ["a. Tribunal Constitucional", "b. A la Constitución y al resto del ordenamiento jurídico", "c. No son ciertas las respuestas a y b", "d. Son ciertas las respuestas a y b"], correcta: 1 },
    { id: 50, pregunta: "El Tribunal Constitucional se desarrolla por Ley Orgánica de...", opciones: ["a. 2/1979, del 3 de Octubre", "b. 3/1980, del 3 de Octubre", "c. 3/1981, del 3 de Octubre", "d. 4/1979, del 3 de Octubre"], correcta: 0 },
    { id: 51, pregunta: "El 'clapping' es...", opciones: ["a. Una dieta para adelgazar", "b. Una técnica para favorecer la circulación venosa", "c. Una técnica de fisioterapia respiratoria", "d. Un proceso de deambulación precoz"], correcta: 2 },
    { id: 52, pregunta: "¿A quién corresponde iniciar la reforma constitucional?", opciones: ["a. Al Gobierno", "b. Al Congreso y al Senado", "c. A las Asambleas de las Comunidades Autónomas", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 53, pregunta: "La hipercapnia es...", opciones: ["a. Aumento de la frecuencia respiratoria", "b. Aumento de los niveles de oxígeno en sangre arterial", "c. Aumento de la presión parcial de dióxido de carbono en sangre arterial", "d. Son ciertas las respuestas a y b"], correcta: 2 },
    { id: 54, pregunta: "¿En qué porcentaje se encuentra el oxígeno en el aire atmosférico?", opciones: ["a. 79%", "b. 21%", "c. 0,03%", "d. 52%"], correcta: 1 },
    { id: 55, pregunta: "Acerca de la palpación del pulso, es falso que...", opciones: ["a. El pulso pedio se palpa en la cara anterior del pie", "b. El pulso femoral se palpa a nivel inguinal", "c. El pulso apical se palpa en la cara anterior del tórax, a nivel del corazón", "d. El pulso radial se palpa en la flexura del codo"], correcta: 3 }



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
