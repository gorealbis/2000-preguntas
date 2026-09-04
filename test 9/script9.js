// BANCO DE PREGUNTAS DEL TEST 9 (Preguntas 1 a 20: Medicación, balance hídrico, residuos y escalas)
const questions = [
    { id: 1, pregunta: "Si pautan la administración de una medicación en el intértrigo, ¿qué vía se utilizaría?", opciones: ["a. Oral", "b. Intravenosa", "c. Rectal", "d. Tópica"], correcta: 3 },
    { id: 2, pregunta: "La PCO2 indica la presencia en sangre arterial de co2 disuelto. ¿el valor normal oscila entre?", opciones: ["a. Entre 35 y 55 mmHg", "b. Entre 25 y 35 mmHg", "c. Entre 35 y 45 mmHg", "d. Entre 35 y 65 mmHg"], correcta: 2 },
    { id: 3, pregunta: "¿Qué tipo de residuos, son los materiales de tela impregnados de fluidos corporales?", opciones: ["a. residuos sólidos tipo ii", "b. residuos sólidos tipo i", "c. residuos infecciosos", "d. residuos líquidos"], correcta: 0 },
    { id: 4, pregunta: "¿Qué concentración de oxígeno se aporta con la administración de o2 mediante gafas nasales?", opciones: ["a. Menor del 40%", "b. Menor del 10%", "c. 60%", "d. Superior al 40%"], correcta: 3 },
    { id: 5, pregunta: "En el anciano, la disminución de la actividad física y de la intensidad de su metabolismo reduce el número de calorías necesarias para mantener el peso normal, por lo que, señale la respuesta correcta:", opciones: ["a. la ingestión de proteínas debe permanecer sin cambios en el anciano", "b. los hidratos de carbono complejos no son necesarios", "c. la dieta tiene que tener alto contenido en sodio", "d. los hidratos de carbono no deben aportar más del 40% de las calorías diarias de la dieta"], correcta: 0 },
    { id: 6, pregunta: "¿Qué temperatura se empleará para realizar baños de asiento calientes?", opciones: ["a. Como máximo 36°C", "b. Más de 46°C", "c. Entre 36°C a 38°C", "d. Entre 40°C a 46°C"], correcta: 3 },
    { id: 7, pregunta: "¿Qué factor externo degrada más a los medicamentos?", opciones: ["a. El calor más que la humedad", "b. La humedad más que el calor", "c. No afecta ningún factor externo a los medicamentos", "d. El calor no afecta a los medicamentos"], correcta: 1 },
    { id: 8, pregunta: "La nutrición por sonda nasoentérica se debe iniciar:", opciones: ["a. Después de la toma de medicación", "b. En presencia del facultativo", "c. Cada cambio de turno", "d. Con peristaltismo positivo y con buen drenaje gástrico"], correcta: 3 },
    { id: 9, pregunta: "Al hacer el balance hídrico, ¿cómo se valora el agua endógena?", opciones: ["a. Como ingreso de ingesta oral (aproximadamente 1500 cc/día)", "b. Como egreso, pérdida de orina (600 a 2000 cc/día)", "c. Como ingreso por metabolismo de los principio inmediatos y lisis de los tejidos (7-11 cc/Kg/día)", "d. Como egreso por pérdidas insensibles (15 cc/Kg/día)"], correcta: 2 },
    { id: 10, pregunta: "En relación a la mascarilla con efecto venturi, señale la respuesta incorrecta:", opciones: ["a. Dificulta la ingesta por boca", "b. Facilita el habla del enfermo", "c. Es el dispositivo estándar, como sistema de alto flujo", "d. Da sensación de claustrofobia en algunos enfermos"], correcta: 1 },
    { id: 11, pregunta: "El contenido calórico de una dieta hipercalórica es alrededor de:", opciones: ["a. 2.000 Kcal/día", "b. 2.500 Kcal/día", "c. 4.000 Kcal/día", "d. 3.000 Kcal/día"], correcta: 3 },
    { id: 12, pregunta: "Según establece la Ley 16/2003, de cohesión y calidad del sistema nacional de salud, el real decreto por el que se establecen los criterios marco para garantizar un tiempo máximo de acceso a las prestaciones del sistema nacional de salud, se acuerda en el seno de:", opciones: ["a. El Ministerio de Sanidad", "b. Cada Comunidad Autónoma", "c. El Consejo de Gobierno", "d. El Consejo Interterritorial"], correcta: 3 },
    { id: 13, pregunta: "La esterilización por medio de aire caliente se aplica para:", opciones: ["a. Vendas, textiles", "b. Aceites libres de agua y grasas, ceras, parafinas, petrolatum", "c. Caucho", "d. Productos sanitarios ópticos sensibles"], correcta: 1 },
    { id: 14, pregunta: "Kalish dividió las necesidades fisiológicas de la pirámide de maslow en necesidades de:", opciones: ["a. Protección y Seguridad", "b. Supervivencia y Estimulación", "c. Estimulación y Cercanía", "d. Protección y Amor"], correcta: 1 },
    { id: 15, pregunta: "¿Qué es una dieta terapéutica?", opciones: ["a. Es la administración razonada y adaptada al estado del enfermo de determinados alimentos, con el fin de obtener una curación o mejoría de su enfermedad", "b. Es la alimentación que no necesita ninguna modificación y proporciona a la persona todos los componentes básicos de la nutrición", "c. Es la alimentación adaptada al lactante", "d. En algunos hospitales se la llama dieta basal"], correcta: 0 },
    { id: 16, pregunta: "Señale la respuesta correcta. el enema carminativo o lavativa de harris, ¿se administra para?", opciones: ["a. Suavizar y ablandar la mucosa del colon", "b. Eliminar parásitos intestinales", "c. Eliminar la flatulencia", "d. Limpiar el colon y el recto de materia fecal"], correcta: 2 },
    { id: 17, pregunta: "Señale la respuesta correcta. ¿qué distribución de nutrientes se aconseja en el aporte diario?", opciones: ["a. Hidratos de Carbono 55-60%, Proteínas 10-15% y Lípidos 30-35%", "b. Hidratos de Carbono 40-45%, Proteínas 35% y Lípidos 20-25%", "c. Hidratos de Carbono 30%, Proteínas 40% y Lípidos 30%", "d. Hidratos de Carbono 50%, Proteínas 25% y Lípidos 25%"], correcta: 0 },
    { id: 18, pregunta: "Es una de las funciones del consejo interterritorial conocer, debatir y, en su caso, emitir recomendaciones sobre diferentes materias. indique qué materia es la correcta:", opciones: ["a. Los criterios básicos y condiciones de las convocatorias de profesionales que aseguren su movilidad en todo el territorio del Estado", "b. La cartera de servicios específica de cada Comunidad Autónoma", "c. Los criterios para la elaboración y evaluación de las políticas de desempleo para el conjunto del Sistema Nacional de Salud", "d. La aprobación del Plan de Salud de la Comunidad de Madrid"], correcta: 0 },
    { id: 19, pregunta: "¿La carencia de qué vitamina, produce raquitismo en los lactantes?", opciones: ["a. Vitamina A", "b. Vitamina D", "c. Vitamina C", "d. Vitamina B"], correcta: 1 },
    { id: 20, pregunta: "Para realizar los cuidados orales a un paciente inconsciente, ¿en qué posición debemos colocarle?", opciones: ["a. Sims", "b. Decúbito Lateral", "c. Fowler", "d. Decúbito Supino"], correcta: 1 },
    { id: 21, pregunta: "¿Cuál es el decreto que regula las actividades de producción y gestión de los residuos biosanitarios y citotóxicos de la comunidad de madrid?", opciones: ["a. Decreto 6/1994 de 9 de Junio", "b. Decreto 83/1999 de 3 de Junio", "c. Real Decreto 952/1997 del 20 de Junio", "d. Ley 42/1975 del 19 de Noviembre"], correcta: 1 },
    { id: 22, pregunta: "Señale la respuesta correcta. en la ayuda a la deambulación de un paciente:", opciones: ["a. El inicio de la deambulación lo señala el paciente", "b. Primero el paciente debe ser capaz de conservar la posición de sedestación", "c. Se debe esperar largo tiempo para iniciarla y de ésta manera no hará falta que sea gradual", "d. Nunca se usarán medios auxiliares"], correcta: 1 },
    { id: 23, pregunta: "El artículo 43 de la constitución española de 1978 en su punto 2 dice:", opciones: ["a. Los poderes públicos fomentarán la educación sanitaria, la educación física y el deporte. Así mismo, facilitarán la adecuada utilización del ocio", "b. Se reconoce el derecho a la protección de la salud", "c. Compete a los poderes públicos organizar y tutelar la salud pública a través de medidas preventivas y de las prestaciones y servicios necesarios. La ley establecerá los derechos y deberes de todos al respecto", "d. Los niños gozarán de la protección prevista"], correcta: 2 },
    { id: 24, pregunta: "Señale la respuesta correcta, ¿qué escala es la más utilizada para evaluar la sobrecarga del cuidador?", opciones: ["a. Escala de Fast", "b. Escala de Zarit", "c. Escala de Karnofsky", "d. Índice de Katz"], correcta: 1 },
    { id: 25, pregunta: "La colostomía es la exteriorización de un tramo del colon a la piel. según la porción abocada, puede ser:", opciones: ["a. Ascendente, transversa y convexa", "b. Transversa, sigmoide, ascendente y gastrostomizada", "c. Sigmoide o descendente, transversa y ascendente", "d. Ascendente, yeyunostomizada, transversa y sigmoide"], correcta: 2 },
    { id: 26, pregunta: "¿Qué factores predisponen o determinan la aparición de las úlceras por presión?", opciones: ["a. Exógenos e intrínsecos", "b. Endógenos e intrínsecos", "c. Extrínsecos e intrínsecos", "d. Extrínsecos y endógenos"], correcta: 2 },
    { id: 27, pregunta: "¿Es correcto poner el termómetro timpánico en presencia de otitis, para medir la temperatura?", opciones: ["a. No es correcto dado el estado del paciente", "b. No se debe poner el termómetro en esas condiciones, ya que alteraría la temperatura", "c. Previamente se deben haber instilado gotas de antibiótico", "d. Sí, es correcto"], correcta: 1 },
    { id: 28, pregunta: "Indique la respuesta correcta. el aseo se realizará en el siguiente orden:", opciones: ["a. Ojos, brazos, manos, axilas, piernas y pies, abdomen y tórax, cara, espalda, nalgas y zona genital", "b. Ojos, cara y orejas, cuello y hombros, brazos, manos y axilas, tórax, mamas, abdomen, piernas y pies, espalda y nalgas, región genital", "c. Cara, ojos, tronco, brazos, manos y axilas, espalda y zona genital", "d. Manos, ojos, cara, cuello, hombros, brazos, tórax y abdomen, pies y piernas, espalda y nalgas y zona genital"], correcta: 1 },
    { id: 29, pregunta: "¿Cuál de las siguientes afirmaciones es cierta?", opciones: ["a. En las personas con demencia el dolor no está presente", "b. Los pacientes con deterioro cognitivo reciben más analgésicos que los pacientes con estado cognitivo indemne", "c. La presencia de dolor nunca debe sospecharse", "d. El dolor está presente en muchas personas con demencia, pero muchas veces no se identifica y en consecuencia, no se trata de forma adecuada"], correcta: 3 },
    { id: 30, pregunta: "Señale la respuesta correcta. el material quirúrgico que se utiliza para dividir, separar o como material cortante es:", opciones: ["a. Material de campo", "b. Material de hemostasia", "c. Material de diéresis", "d. Material de exposición"], correcta: 2 },
    { id: 31, pregunta: "¿Cuáles son la necesidades calóricas aconsejadas para la población anciana?", opciones: ["a. Unas 2.000 Kcal", "b. Unas 3.000 Kcal", "c. Unas 1.500 Kcal", "d. Unas 3.500 Kcal"], correcta: 0 },
    { id: 32, pregunta: "Señale la respuesta correcta. la técnica del rasurado:", opciones: ["a. Sólo se realiza en mujeres", "b. Es imprescindible para los pacientes a los que se va a realizar una gastroscopia", "c. Es muy importante para evitar el riesgo de infecciones en la herida quirúrgica", "d. Se realiza días antes de la intervención"], correcta: 2 },
    { id: 33, pregunta: "¿A qué tipo/grupo de residuos pertenecen los medicamentos caducados?", opciones: ["a. Grupo I", "b. Grupo II", "c. Grupo III", "d. Grupo IV"], correcta: 3 },
    { id: 34, pregunta: "Indique, ¿quiénes de los siguientes profesionales forman parte del equipo de apoyo de atención primaria?", opciones: ["a. Trabajadores Sociales", "b. Administrativos", "c. Auxiliares de Enfermería", "d. Técnicos de Laboratorio"], correcta: 0 },
    { id: 35, pregunta: "¿Qué es la gerontología?", opciones: ["a. Es la ciencia que se ocupa de mantener la salud en los ancianos", "b. Es la ciencia que se ocupa de estudiar todos los aspectos sanitarios, sociales y legales que afectan a los ancianos", "c. Es la ciencia que se ocupa de estudiar todos los aspectos sanitarios, que afectan a los jóvenes", "d. Es la ciencia que estudia el medio en el que se encuentra el anciano"], correcta: 1 },
    { id: 36, pregunta: "En la cama de postoperados, indique la norma a seguir:", opciones: ["a. Llevar a la habitación el material necesario, cuando ya se encuentre el paciente en la misma", "b. Colocar siempre al paciente en decúbito supino", "c. No se colocarán sábanas entremetidas en ningún caso", "d. Retirar las almohadas de la cama"], correcta: 3 },
    { id: 37, pregunta: "¿Cuál de las siguientes opciones responde a la clasificación de los residuos generados en los centros sanitarios?", opciones: ["a. Sólidos, Líquidos y Radioactivos", "b. Sólidos, Líquidos y Gaseosos", "c. Fungibles y No Fungibles", "d. Sólidos y Volátiles"], correcta: 0 },
    { id: 38, pregunta: "¿Cuál de los siguientes no corresponden a los riesgos laborales más significativos?", opciones: ["a. Riesgos posturales", "b. Riesgos químicos", "c. Riesgos psicológicos", "d. Riesgos sociales"], correcta: 3 },
    { id: 39, pregunta: "Según establece la ley 55/2003, de 16 de diciembre, del estatuto marco, dentro de los derechos individuales del personal estatutario se encuentra:", opciones: ["a. La libre sindicación", "b. La jubilación en los términos y condiciones establecidas en las normas en cada caso aplicables", "c. Disponer de Servicio de Prevención y de órganos representativos en materia de seguridad laboral", "d. La reunión"], correcta: 1 },
    { id: 40, pregunta: "Respecto a la cura del cordón umbilical, indique el cuidado más recomendado:", opciones: ["a. Limpieza con alcohol de 96° cada 24 horas", "b. Aplicar antibióticos de uso tópico", "c. Limpieza con clorhexidina acuosa al 10% cada 12 horas", "d. Mantener limpio y seco el cordón umbilical"], correcta: 3 },
    { id: 41, pregunta: "En casos de violencia de género, si la mujer ha sido atendida en consultas externas del centro de especialidades y su situación hace necesario el traslado a un hospital:", opciones: ["a. El traslado se efectuará en ambulancia", "b. El traslado se efectuará por los Cuerpos de Seguridad del Estado", "c. El traslado se efectuará con su coche particular, acompañado de la policía municipal", "d. El traslado lo realiza la policía municipal acompañado por una enfermera"], correcta: 0 },
    { id: 42, pregunta: "La característica 'el hombre es un ser biopsicosocial y está en constante interacción con el entorno', ¿a qué modelo de enfermería pertenece?", opciones: ["a. Modelo de autocuidado", "b. Modelo de adaptación", "c. Modelo de la conservación", "d. Modelo de promoción de la salud"], correcta: 1 },
    { id: 43, pregunta: "Los cuidados post mortem se efectuarán:", opciones: ["a. Después de la muerte aunque, el médico no haya firmado el certificado de defunción", "b. Después de la muerte y cuando ha aparecido el rigor mortis", "c. Después de que el médico ha firmado el certificado de defunción", "d. Antes de producirse el óbito y el rigor mortis"], correcta: 2 },
    { id: 44, pregunta: "En la comunidad de madrid, un paciente quiere ejercer el derecho a la libre elección de médico de familia en atención primaria. para poder ejercer ese derecho deberá comunicarlo al siguiente organismo:", opciones: ["a. Centro de Salud de referencia", "b. Centro de Salud en el que presta servicio el médico elegido", "c. Gerencia de Atención Primaria", "d. Hospital de referencia"], correcta: 1 },
    { id: 45, pregunta: "¿Cuál de los siguientes, es una norma fundamental de mecánica corporal para prevenir los riesgos laborales?", opciones: ["a. No utilizar puntos de apoyo", "b. No juntar los pies", "c. Cargar el peso alejado lo más posible del cuerpo", "d. Sujetar el objeto para que haga de contrapeso"], correcta: 3 },
    { id: 46, pregunta: "Identifique el paso correcto para medir la presión venosa central:", opciones: ["a. El paciente debe colocarse en decúbito prono", "b. El paciente será portador de un catéter colocado en aurícula derecha", "c. No es necesario medir la Presión Venosa Central actualmente", "d. El paciente será portador de un catéter colocado en aurícula izquierda"], correcta: 1 },
    { id: 47, pregunta: "En relación a la lactancia materna, Señale la incorrecta:", opciones: ["a. Fomentar la lactancia a demanda, con periodos de descanso de 2 a 4 horas", "b. Comprobar el reflejo de succión", "c. Colocar al bebé en decúbito prono para evitar el riesgo de aspiración", "d. No dar tetinas ni chupetes"], correcta: 0 },
    { id: 48, pregunta: "¿Cuál de los siguientes documentos forma parte de la documentación clínica de un paciente?", opciones: ["a. Receta médica", "b. Impreso de reclamaciones", "c. Hoja de interconsulta", "d. Petición de dietas"], opciones: ["a. Receta médica", "b. Impreso de reclamaciones", "c. Hoja de interconsulta", "d. Petición de dietas"], correcta: 2 },
    { id: 49, pregunta: "Cuando se detecta un caso de violencia en cualquier ámbito sanitario:", opciones: ["a. es preciso realizar la valoración del riesgo vital", "b. es preciso realizar una valoración de enfermería", "c. es preciso valorar las señales de riesgo no grave", "d. No hay que intervenir de forma inmediata"], correcta: 0 },
    { id: 50, pregunta: "¿Cuál es el procedimiento a seguir en la toma de muestras para la investigación de oxiuros, utilizando el método graham?", opciones: ["a. Recoger la muestra a la última hora del día", "b. Lavar la zona antes de la recogida de la muestra", "c. Recoger la muestra a primera hora de la mañana", "d. Recoger la muestra durante 4 días consecutivos"], correcta: 2 },
    { id: 51, pregunta: "Sobre las precauciones al administrar un enema, ¿qué NO es cierto?", opciones: ["a. Se empleará con precaución en pacientes cardíacos, por provocar reflejo vagal", "b. Ante cualquier incidencia (dolor, hemorragia), se suspenderá su administración", "c. No se forzará la entrada de la sonda ni de la solución a administrar", "d. Todas las respuestas anteriores son ciertas"], correcta: 3 },
    { id: 52, pregunta: "El corazón está rodeado por...", opciones: ["a. El endocardio", "b. El pericardio", "c. El miocardio", "d. Todas las respuestas anteriores son incorrectas"], correcta: 1 },
    { id: 53, pregunta: "NO pertenece a las vías respiratorias inferiores...", opciones: ["a. La tráquea", "b. Los bronquios", "c. Los pulmones", "d. La laringe"], correcta: 3 },
    { id: 54, pregunta: "Con respecto al aparato cardiovascular, NO es cierto que...", opciones: ["a. La onda pulsátil se transmite a gran velocidad", "b. La tensión arterial se mide por la presión que ejerce la sangre sobre las paredes de las arterias", "c. Que la sístole ventricular hace que se relaje el ventrículo, y la diástole ventricular hace que éste se contraiga", "d. Ninguna de las respuestas anteriores es falsa"], correcta: 2 },
    { id: 55, pregunta: "El intercambio de gases que se produce en los pulmones al respirar, se conoce como...", opciones: ["a. Inspiración-espiración", "b. Transporte", "c. Perfusión", "d. Hematosis"], correcta: 3 }




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
