// BANCO DE PREGUNTAS DEL TEST 16 (Preguntas 1 a 20: Drenajes, hormonas, anatomía respiratoria y cálculo clínico)
const questions = [
    { id: 2, pregunta: "El aparato de Golgi se encuentra en:", opciones: ["a. Citoplasma", "b. Carioteca", "c. Lisosomas", "d. Ribosomas"], correcta: 0 },
    { id: 3, pregunta: "¿Qué afirmación es correcta respecto a la técnica de recogida de orina de 24 horas?:", opciones: ["a. Es una técnica estéril", "b. Se pide al paciente que recoja la orina desde la segunda micción del primer día", "c. La segunda micción del primer día se desecha", "d. Todas las afirmaciones anteriores son correctas"], correcta: 1 },
    { id: 4, pregunta: "La alteración renal que cursa con inflamación del glomérulo se denomina:", opciones: ["a. Pielonefritis", "b. Síndrome nefrótico", "c. Tubulopatía", "d. Glomerulonefritis"], correcta: 3 },
    { id: 5, pregunta: "La prueba diagnóstica que sirve para medir los volúmenes de aire movilizados con los movimientos respiratorios se llama:", opciones: ["a. Espirografía", "b. Espirometría", "c. Gasometría", "d. Broncoscopia"], correcta: 1 },
    { id: 6, pregunta: "¿Cuál de las siguientes sondas se utiliza en el sondaje nasogástrico?:", opciones: ["a. Rectal", "b. Endotraqueal", "c. Levin", "d. Foley"], correcta: 2 },
    { id: 7, pregunta: "Para facilitar el proceso de absorción, los principios inmediatos deben desdoblarse en elementos más sencillos que puedan atravesar la pared intestinal hacia la circulación sanguínea. De esta manera las proteínas se desdoblan en:", opciones: ["a. Glicéridos", "b. Aminoácidos", "c. Monosacáridos", "d. Glicerina"], correcta: 1 },
    { id: 8, pregunta: "La posición más adecuada para administrar enemas es:", opciones: ["a. Morestin", "b. Decúbito lateral derecho", "c. Roser", "d. Sims"], correcta: 3 },
    { id: 9, pregunta: "Un paciente que se encuentra en decúbito supino no es probable que sufra úlceras por presión en:", opciones: ["a. Talón", "b. Rodillas", "c. Sacro", "d. Codos"], correcta: 1 },
    { id: 10, pregunta: "A la eliminación de tejido desvitalizado hasta que se descubre tejido sano circundante se denomina:", opciones: ["a. Fricción", "b. Desbridamiento", "c. Disección", "d. Regeneración"], correcta: 1 },
    { id: 11, pregunta: "Señale qué factor influye en la persona candidata a sufrir una infección:", opciones: ["a. La edad", "b. El estado nutricional", "c. Algunos tratamientos agresivos", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 12, pregunta: "El músculo estriado y voluntario es:", opciones: ["a. Liso", "b. Esquelético", "c. Cardiaco", "d. Todas las anteriores son correctas"], correcta: 1 },
    { id: 13, pregunta: "El herpes simple es una enfermedad de la piel producida por:", opciones: ["a. Un virus", "b. Una Ricketsia", "c. Un hongo", "d. Un prión"], correcta: 0 },
    { id: 14, pregunta: "¿Cuál de las siguientes enzimas no es segregada por el páncreas?:", opciones: ["a. Lipasa", "b. Amilasa", "c. Lactasa", "d. Tripsina"], correcta: 2 },
    { id: 15, pregunta: "La válvula que comunica la aurícula izquierda con el ventrículo izquierdo se denomina:", opciones: ["a. Tricúspide", "b. Mitral", "c. Bicúspide", "d. Las respuestas B y C"], correcta: 3 },
    { id: 16, pregunta: "¿Qué material no se precisa para comprobar que la sonda nasogástrica se encuentra situada correctamente?:", opciones: ["a. Esfigmomanómetro", "b. Fonendoscopio", "c. Jeringa de 50 ml", "d. Radiografía de tórax"], correcta: 0 },
    { id: 17, pregunta: "En el análisis macroscópico de esputo valoramos:", opciones: ["a. Color", "b. Olor", "c. Consistencia", "d. Todas las respuestas anteriores son correctas"], correcta: 3 },
    { id: 18, pregunta: "Anuria es:", opciones: ["a. Ausencia de respiración", "b. Ausencia de orina", "c. Ausencia de pulso", "d. Dificultad para respirar"], correcta: 1 },
    { id: 19, pregunta: "¿Cuántas vías o luces tiene una sonda Sengstaken Blakemore?:", opciones: ["a. 1", "b. 2", "c. 2 ó 3", "d. 3"], correcta: 2 },
    { id: 20, pregunta: "Indique cuál no es una forma de administrar oxígeno:", opciones: ["a. Mascarilla facial", "b. Cánula nasal", "c. Catéter nasofaringeo", "d. Sonda gástrica"], correcta: 3 },
    { id: 21, pregunta: "¿Cuál de los siguientes métodos de esterilización utiliza calor húmedo?:", opciones: ["a. Estufa Poupinel", "b. Autoclave", "c. Radiaciones gamma", "d. Incineración"], correcta: 1 },

    { id: 37, pregunta: "El Penrose es un material específico de:", opciones: ["a. Exploración", "b. Sutura", "c. Drenaje", "d. Anestesia"], correcta: 2 },
    { id: 38, pregunta: "Las hormonas son producidas por:", opciones: ["a. Las glándulas holocrinas", "b. Las glándulas apocrinas", "c. Las glándulas endocrinas", "d. Las glándulas exocrinas"], correcta: 2 },
    { id: 39, pregunta: "En el aparato respiratorio:", opciones: ["a. Los orificios que comunican las fosas nasales y la faringe se denominan ventanas nasales", "b. La faringe forma parte de las vías respiratorias bajas", "c. La epiglotis impide el paso del bolo alimenticio a la laringe durante la deglución", "d. La glotis se encuentra situada en el interior de la faringe"], correcta: 2 },
    { id: 40, pregunta: "Los islotes de Langerhans se encuentran en:", opciones: ["a. El hígado", "b. El cerebro", "c. El intestino", "d. El páncreas"], correcta: 3 },
    { id: 41, pregunta: "Las plaquetas:", opciones: ["a. Intervienen en el control de las hemorragias", "b. Defienden al organismo en los procesos infecciosos", "c. Tienen en su interior hemoglobina", "d. Su déficit provoca anemia"], correcta: 0 },
    { id: 42, pregunta: "Para realizar la higiene bucal a un paciente inconsciente, ¿qué no prepararías?:", opciones: ["a. Guantes", "b. Toalla", "c. Gasas", "d. Cepillo dental"], correcta: 3 },
    { id: 43, pregunta: "La lesión de la piel de contenido purulento se denomina:", opciones: ["a. Ampolla", "b. Vesícula", "c. Pápula", "d. Pústula"], correcta: 3 },
    { id: 44, pregunta: "El plano frontal divide al cuerpo en dos partes:", opciones: ["a. Izquierda y derecha", "b. Anterior y posterior", "c. Superior e inferior", "d. Próxima y distal"], correcta: 1 },
    { id: 45, pregunta: "Las células óseas que se encargan de la osteogénesis se denominan:", opciones: ["a. Osteoblastos", "b. Osteoclastos", "c. Osteocitos", "d. Osteocitos"], correcta: 0 },
    { id: 46, pregunta: "La disminución de la matriz ósea del hueso recibe el nombre de:", opciones: ["a. Osteomalacia", "b. Osteoporosis", "c. Osteomielitis", "d. Fibroma"], correcta: 1 },
    { id: 47, pregunta: "Si 600 cc. de levulosa al 5% tienen que pasar cuatro horas. ¿Cuántas gotas tienen que pasar en un minuto?:", opciones: ["a. 25", "b. 50", "c. 20", "d. 60"], correcta: 2 },
    { id: 48, pregunta: "Referente a la mecánica corporal, señala la respuesta INCORRECTA:", opciones: ["a. Al levantar un objeto pesado no hay que doblar la cintura", "b. Se deben utilizar preferentemente los músculos de la espalda", "c. Se debe ampliar la base de sustentación, separando los pies", "d. Se debe trasladar el objeto manteniéndolo cerca del cuerpo"], correcta: 1 },
    { id: 49, pregunta: "Las suturas del cráneo pertenecen a un tipo de articulación denominado:", opciones: ["a. Fontanelas", "b. Anfiartrosis", "c. Sinartrosis", "d. Diartrosis"], correcta: 2 },
    { id: 50, pregunta: "La presencia de aire en la cavidad pleural se denomina:", opciones: ["a. Pleuritis", "b. Neumotórax", "c. Asma", "d. Ninguna es correcta"], correcta: 1 },
    { id: 51, pregunta: "La disminución de leucocitos recibe el nombre de:", opciones: ["a. Leucemia", "b. Leucopenia", "c. Leucocitosis", "d. Leucocitemia"], correcta: 1 },
    { id: 52, pregunta: "Todos estos dispositivos o materiales EXCEPTO UNO, son métodos de administración de O2. Indícalo:", opciones: ["a. Gafas nasales", "b. Sonda de Levin", "c. Tienda de oxígeno", "d. Mascarilla de oxígeno"], correcta: 1 },
    { id: 53, pregunta: "La cavidad pleural es:", opciones: ["a. El espacio que ocupan los pulmones en la inspiración", "b. El espacio que ocupan los pulmones en la espiración", "c. El espacio existente entre los pulmones", "d. El espacio existente entre la pleura visceral y parietal"], correcta: 3 },
    { id: 54, pregunta: "Un signo es lo mismo que:", opciones: ["a. Un síndrome objetivo", "b. Un síndrome subjetivo", "c. Un síntoma objetivo", "d. Un síntoma subjetivo"], correcta: 2 },
    { id: 55, pregunta: "Las neuronas que transmiten el impulso nervioso desde el SNC a la periferia reciben el nombre de:", opciones: ["a. Sensitivas", "b. Aferentes", "c. Motoras", "d. Ninguna es correcta"], correcta: 2 },
    { id: 1, pregunta: "El foco desde el que se transmiten los gérmenes a un organismo vivo infectándolo se denomina:", opciones: ["a. Vía de salida", "b. Fuente de infección", "c. Mecanismo de transmisión", "d. Vía de entrada"], correcta: 1 },
    { id: 22, pregunta: "Los ágrafes es un material de:", opciones: ["a. Síntesis", "b. Disección", "c. Exploración", "d. Diéresis"], correcta: 0 },
    { id: 23, pregunta: "La salida de un órgano al exterior a través de una herida quirúrgica, se denomina:", opciones: ["a. Dehiscencia", "b. Evisceración", "c. Distensión", "d. Atelectasia"], correcta: 1 },
    { id: 24, pregunta: "¿Cuál de los siguientes drenajes se utilizaría en una herida quirúrgica, a nivel grande?:", opciones: ["a. En cigarrillo", "b. Penrose", "c. Redón", "d. De tejadillo"], correcta: 2 },
    { id: 25, pregunta: "¿Cuál del siguiente material no es imprescindible para realizar la higiene bucal en un paciente?:", opciones: ["a. Guantes estériles", "b. Batea riñonera", "c. Pinzas de Kocher", "d. Antiséptico bucal"], correcta: 0 },
    { id: 26, pregunta: "¿En qué posición colocarías a un paciente que va a ser sometido a intubación endotraqueal?:", opciones: ["a. Trendelenburg", "b. Trendelenburg invertida", "c. Litotomía dorsal", "d. Roser"], correcta: 3 },
    { id: 27, pregunta: "¿Cuál de los siguientes factores que predisponen a la aparición de úlceras por presión es intrínseco?:", opciones: ["a. Fricción", "b. Humedad", "c. Déficit higiénico", "d. Déficit nutricional"], correcta: 3 },
    { id: 28, pregunta: "¿Cuál de las siguientes direcciones no depende directamente de la Gerencia?:", opciones: ["a. Médica", "b. Auxiliares", "c. Enfermería", "d. Gestión"], correcta: 1 },
    { id: 29, pregunta: "El \"DRUM\" sirve para canalizar:", opciones: ["a. Una vena central desde un acceso periférico", "b. Una vena central directamente", "c. Una arteria central directamente", "d. Una arteria central desde un acceso periférico"], correcta: 0 },
    { id: 30, pregunta: "¿Cuál de los siguientes elementos no es necesario para la administración de oxígeno?:", opciones: ["a. Humidificador", "b. Caudalímetro", "c. Manorreductor", "d. Toma de vacío"], correcta: 3 },
    { id: 31, pregunta: "La falta de extensión o dilatación por colapso parcial del pulmón se denomina:", opciones: ["a. Atelectasia", "b. Neumonía", "c. Bronquitis", "d. Enfisema"], correcta: 0 },
    { id: 32, pregunta: "¿Cuál del siguiente material no pertenece al equipo de intubación endotraqueal?:", opciones: ["a. Laringoscopio", "b. Fiador", "c. Sonda nasal", "d. Pinzas de Magill"], correcta: 2 },
    { id: 33, pregunta: "¿Qué órgano comunica la faringe con la tráquea?:", opciones: ["a. Bronquios", "b. Fosas nasales", "c. Tráquea", "d. Laringe"], correcta: 3 },
    { id: 34, pregunta: "El clapping es:", opciones: ["a. Una técnica de fisioterapia respiratoria", "b. Se realiza siempre desde la parte superior a la inferior", "c. Debe durar de tres a cinco minutos", "d. Las respuestas a y c son correctas"], correcta: 3 },
    { id: 35, pregunta: "El corpúsculo renal está formado por:", opciones: ["a. La nefrona", "b. El asa de Henle y los vasos rectos", "c. El corpúsculo de Malpighi y el asa de Henle", "d. El glomérulo y la cápsula de Bowman"], correcta: 3 },
    { id: 36, pregunta: "¿Qué tubo une el riñón con la vejiga urinaria?:", opciones: ["a. La uretra", "b. El uréter", "c. El túbulo proximal", "d. El túbulo distal"], correcta: 1 },
    { id: 37, pregunta: "Valores superiores a las cifras normales de PCO2 se denomina:", opciones: ["a. Hipoxemia", "b. Hipoxia", "c. Hipercapnia", "d. Hipocapnia"], correcta: 2 },
    { id: 38, pregunta: "Cuando a un paciente se le coloca para mejorar el riego sanguíneo en extremidades inferiores, la posición adecuada es:", opciones: ["a. Morestin", "b. Roser", "c. Trendelenburg", "d. Sims"], correcta: 2 },
    { id: 39, pregunta: "Para el estudio de un paciente por el personal de enfermería, una anamnesis es:", opciones: ["a. La exploración de un paciente", "b. Los resultados del laboratorio", "c. La documentación previamente recogida", "d. Una entrevista verbal al paciente"], correcta: 3 },
    { id: 40, pregunta: "Una hormona hipoglucemiante es fundamentalmente:", opciones: ["a. El glucagón", "b. La insulina", "c. Los glucocorticoides", "d. La adrenalina"], correcta: 1 },
    { id: 41, pregunta: "La membrana más externa que protege el SNC (Sistema Nervioso Central) y que está en contacto con el hueso recibe el nombre de:", opciones: ["a. Aracnoides", "b. Duramadre", "c. Piamadre", "d. Calota craneal"], correcta: 1 },
    { id: 42, pregunta: "La estructura del SNC responsable del equilibrio es:", opciones: ["a. Cerebelo", "b. Corteza cerebral", "c. Lóbulo parietal", "d. Bulbo raquídeo"], correcta: 0 },
    { id: 43, pregunta: "La exploración que permite la visualización directa del árbol bronquial se denomina:", opciones: ["a. Gastroscopia", "b. Fibrobroncoscopia", "c. Traqueostomía", "d. Mediastinoscopia"], correcta: 1 },
    { id: 44, pregunta: "La aplicación de calor está contraindicada para:", opciones: ["a. Aliviar espasmos musculares", "b. Reblandecer exudados", "c. Acelerar los procesos de cicatrización", "d. Cohibir hemorragias"], correcta: 3 },
    { id: 45, pregunta: "Una contusión es una lesión:", opciones: ["a. Traumática sin solución de continuidad en la piel", "b. Traumática con solución de continuidad en la piel", "c. Infecciosa de la piel", "d. Que puede deberse a cualquiera de las anteriores respuestas"], correcta: 0 },
    { id: 46, pregunta: "Los orificios que presenta la pared de la aurícula izquierda son los correspondientes a:", opciones: ["a. Las venas pulmonares", "b. Las venas coronarias", "c. Arteria aorta", "d. Venas cavas"], correcta: 0 },
    { id: 47, pregunta: "¿Cuál de los siguientes signos y síntomas pueden hacer pensar en la infección de la herida en un postoperado?:", opciones: ["a. Calor y enrojecimiento de la zona de la incisión", "b. Drenaje purulento de la herida", "c. Dolor intenso en la zona de incisión", "d. Todas las respuestas son correctas"], correcta: 3 },
    { id: 48, pregunta: "De los siguientes drenajes, indica cuál es de tipo colector:", opciones: ["a. El de Penrose", "b. El de Kher", "c. De tejadillo", "d. Ninguna es verdadera"], correcta: 1 },
    { id: 49, pregunta: "El método cerrado en el cuidado de heridas, se caracteriza por:", opciones: ["a. Realizar sólo limpieza y antisepsia de la zona", "b. Mantenerla al descubierto una vez realizada la asepsia", "c. Emplear un apósito estéril sobre ella tras su asepsia", "d. Emplear esparadrapo para sellarla"], correcta: 2 },
    { id: 50, pregunta: "El periodo NEONATAL abarca:", opciones: ["a. Desde la concepción hasta las 40 semanas de gestación", "b. Desde la 2ª semana de gestación hasta el 7º día tras el nacimiento", "c. Las 4 primeras semanas de vida", "d. El periodo fetal, parto y primer año de vida"], correcta: 2 },
    { id: 51, pregunta: "¿Cómo se denomina el volumen de orina producido por los riñones en 24 horas?:", opciones: ["a. Diuresis", "b. Isostenuria", "c. Anuria", "d. Según los casos, puede ser cualquiera de los anteriores"], correcta: 0 },
    { id: 52, pregunta: "El plano sagital medio divide el cuerpo humano en dos mitades:", opciones: ["a. Superior e inferior", "b. Media y distal", "c. Izquierda y derecha", "d. Ventral y dorsal"], correcta: 2 }



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
