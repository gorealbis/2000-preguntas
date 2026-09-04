// BANCO DE PREGUNTAS DEL TEST 41 (Materia técnica de Auxiliar de Enfermería - Bloque 1 de 20 preguntas)
const questions = [
    { id: 8, pregunta: "LAS FUNCIONES DE LAS INTERVENCIONES DEL AUXILIAR DE ENFERMERÍA SE CLASIFICAN EN:", opciones: ["a. Asistencial, administrativa e investigadora", "b. Asistencial, administrativa, docente e investigadora", "c. Asistencial, docente y administrativa", "d. Asistencial, docente, administrativa y rehabilitadora"], correcta: 1 },
    { id: 9, pregunta: "UNA DE LAS CARACTERÍSTICAS QUE DEFINEN A UN GRUPO ES QUE:", opciones: ["a. Está formado por dos o más personas que confían en el trabajo en colaboración", "b. Los miembros no tienen contacto entre ellos", "c. Existen intereses personales", "d. No existe división de responsabilidad"], correcta: 0 },
    { id: 12, pregunta: "UNA VENTAJA DEL TRABAJO EN EQUIPO ES QUE:", opciones: ["a. Puede haber conflicto de intereses entre los miembros del equipo", "b. Permite ver múltiples puntos de vista sobre un tema", "c. Se duplican los esfuerzos", "d. Se diluye la responsabilidad entre los miembros del equipo"], correcta: 1 },
    { id: 13, pregunta: "EL LOGRO DE UN NUEVO COMPORTAMIENTO GRACIAS A UNA EXPERIENCIA RECIBE EL NOMBRE DE:", opciones: ["a. Hábito", "b. Conocimiento", "c. Aprendizaje", "d. Costumbre"], correcta: 2 },
    { id: 14, pregunta: "LA CHARLA EDUCATIVA ES EL PROCEDIMIENTO DIRECTO DE EDUCACIÓN SANITARIA MÁS UTILIZADO PARA DIRIGIRSE A:", opciones: ["a. Grupos", "b. Persona adulta", "c. Persona de bajo nivel cultural", "d. Solo a la población infantil"], correcta: 0 },
    { id: 15, pregunta: "¿DE QUÉ TRATA EL DESARROLLO SOSTENIBLE?", opciones: ["a. De obtener una mayor producción", "b. De cumplir de forma equilibrada con las necesidades de desarrollo y de carácter medioambiental de las generaciones presentes y futuras", "c. De fomentar el bienestar", "d. De impulsar el desarrollo sin tener en cuenta el medioambiente"], correcta: 1 },
    { id: 16, pregunta: "EL NIVEL DE SALUD DE LOS INDIVIDUOS Y LAS COMUNIDADES DEPENDE DE DIVERSOS FACTORES, SIENDO CONSIDERADOS LOS MÁS IMPORTANTES:", opciones: ["a. La biología humana y el sistema sanitario", "b. El medio ambiente y la biología humana", "c. Los estilos de vida y el medio ambiente", "d. Los estilos de vida y el sistema sanitario"], correcta: 2 },
    { id: 17, pregunta: "LAS FUNCIONES DEL ARCHIVO DE HISTORIAS CLÍNICAS SON:", opciones: ["a. Almacenamiento, supervisión y estadísticas clínicas", "b. Gestión sanitaria, documentación clínica y supervisión del gasto hospitalario", "c. Almacenamiento, custodia y conservación de las historias clínicas, así como el suministro de historias necesarias para la asistencia", "d. Gestión del fichero de pacientes y estadísticas epidemiológicas sanitarias"], correcta: 2 },
    { id: 18, pregunta: "LA HISTORIA CLÍNICA, CON LAS HOJAS QUE LA FORMAN Y CUALQUIER ESTUDIO QUE CONTENGA LA INFORMACIÓN CLÍNICA QUE SE PRODUZCA DURANTE LA ESTANCIA DEL PACIENTE, SE DENOMINA:", opciones: ["a. Anamnesis", "b. Historia general", "c. Documentación clínica", "d. Documentación particular"], correcta: 2 },
    { id: 19, pregunta: "EN LA HOJA DE EVOLUCIÓN DEL PACIENTE DEBEN CONSTAR LOS DATOS DE:", opciones: ["a. Evolución del tratamiento y sus cambios y complicaciones", "b. Si ha padeciedo con anterioridad EDOs", "c. Datos relativos a las enfermedades de sus familiares", "d. Si ha sido sometido con anterioridad a intervenciones quirúrgicas"], correcta: 0 },
    { id: 20, pregunta: "SON DOCUMENTOS CLÍNICOS DE USO EN ATENCIÓN PRIMARIA TODOS, EXCEPTO:", opciones: ["a. Impreso de citación", "b. Impreso de solicitud de pruebas complementarias", "c. Hoja de ingreso", "d. Historia de enfermería"], correcta: 2 },
    { id: 21, pregunta: "EL MÉTODO QUE CONSISTE EN COMBATIR O PREVENIR LOS PROCEDIMIENTOS INFECCIOSOS DESTRUYENDO LOS MICROBIOS QUE LOS CAUSAN SE DENOMINA:", opciones: ["a. Asepsia", "b. Antisepsia", "c. Desinfección", "d. Esterilización"], correcta: 1 },
    { id: 22, pregunta: "EL MATERIAL A ESTERILIZAR PREVIAMENTE SE:", opciones: ["a. Limpiará y empaquetará", "b. Limpiará, secará, lubricará y empaquetará", "c. Descontaminará y lubricará", "d. Desinfectará y secará"], correcta: 1 },
    { id: 23, pregunta: "DE LAS SIGUIENTES MODALIDADES, ¿CUÁL FORMA PARTE DE LOS MÉTODOS FÍSICOS DE DESINFECCIÓN?", opciones: ["a. Inmersión", "b. Hervido", "c. Pulverización", "d. Fumigación"], correcta: 1 },
    { id: 24, pregunta: "ES OBLIGATORIO QUE EL INSTRUMENTAL QUE PENETRA EN LAS CAVIDADES ORGÁNICAS ESTÉ:", opciones: ["a. Limpio", "b. Estéril", "c. Desinfectado", "d. Descontaminado"], correcta: 1 },
    { id: 25, pregunta: "EN LA CONSERVACIÓN DE LAS MUESTRAS, SEÑALE LA ALTERNATIVA CORRECTA:", opciones: ["a. La orina para análisis microscópico debe conservarse refrigerada", "b. Los esputos pueden mantenerse a temperatura ambiente", "c. El líquido cefalorraquídeo debe refrigerarse", "d. Los fragmentos de raspado de la piel, pelo y uñas deben congelarse"], correcta: 0 },
    { id: 26, pregunta: "EN LA TOMA DE MUESTRA DE EXUDADO FARÍNGEO:", opciones: ["a. No es necesario deprimir la lengua", "b. Se toca la lengua", "c. Se tocan las paredes de la boca", "d. Se pasa suavemente por las amígdalas o zona afectada"], correcta: 3 },
    { id: 27, pregunta: "SE DENOMINA POLIURIA:", opciones: ["a. Al volumen de orina superior a 2500 ml", "b. Al volumen de orina inferior a 1500 ml", "c. Al volumen de orina superior a 3000 ml", "d. Al volumen de orina superior a 500 ml"], correcta: 0 },
    { id: 28, pregunta: "SON REQUISITOS PARA LA CORRECTA PREPARACIÓN DE LAS MUESTRAS PARA SU TRANSPORTE TODOS, EXCEPTO:", opciones: ["a. Identificar correctamente las muestras", "b. Asegurarse que se acompañan de la documentación necesaria", "c. Controlar las variables que pueden influir en su estabilidad", "d. Exponer las muestras a la luz"], correcta: 3 },
    { id: 29, pregunta: "¿CÓMO SE ENCUENTRA EL PACIENTE SI ESTÁ EN LA POSICIÓN DE DECÚBITO SUPINO?", opciones: ["a. Tumbado sobre la espalda", "b. De lado izquierdo", "c. De lado derecho", "d. Tumbado sobre el abdomen"], correcta: 0 },
    { id: 30, pregunta: "A la hora de retirar una sonda nasogástrica, ¿en qué posición anatómica se debe colocar al paciente encamado?", opciones: ["a. Fowler", "b. Sims", "c. Trendelenburg", "d. Decúbito supino"], correcta: 0 },
    { id: 31, pregunta: "Ante un enfermo que se encuentra en situación de estancia prolongada en cama, ¿qué actuación del TCAE es prioritaria?", opciones: ["a. No mover en absoluto a la persona", "b. Practicar cambios posturales periódicos", "c. Poner únicamente almohadas debajo de las piernas", "d. Cambiar la lencería de la cama dos veces al día"], correcta: 1 },
    { id: 32, pregunta: "Atendiendo a si el propio paciente puede realizar por sí mismo los movimientos corporales, las movilizaciones se clasifican clínicamente en:", opciones: ["a. Primarias y Secundarias", "b. Activas y Pasivas", "c. Dirigidas y No Dirigidas", "d. Propias e Impropias"], correcta: 1 },
    { id: 33, pregunta: "Si una persona ingresada presenta problemas de insuficiencia respiratoria aguda, la posición terapéutica de elección es:", opciones: ["a. Sims izquierdo", "b. Fowler", "c. Roser", "d. Decúbito lateral"], correcta: 1 },
    { id: 34, pregunta: "Para realizar el aseo completo en cama a una persona que es portadora de un sistema de suero intravenoso:", opciones: ["a. Sacamos primero la manga del pijama del brazo que tiene el suero y después la del brazo sano", "b. Cerraremos el sistema, retiramos la botella y quitamos el pijama", "c. Cerramos el sistema, retiramos la botella y la colocamos sobre el colchón", "d. Sacamos primero la manga del pijama del brazo que no tiene el suero y después la manga del suero"], correcta: 3 },
    { id: 35, pregunta: "El orden cronológico correcto de las etapas anatomopatológicas en el proceso de formación de una úlcera por presión es:", opciones: ["a. Eritema, vesículas y erosión", "b. Erosión, vesícula y eritema", "c. Hiperoxia, erosión y eritema", "d. Hipoxia, erosión y eritema"], correcta: 3 },
    { id: 36, pregunta: "La técnica de fisioterapia que consiste en pellizcar de manera rítmica la piel y los músculos del paciente se denomina masaje de:", opciones: ["a. Una sucesión de golpes breves con ambas manos", "b. Friccionar la espalda con el puño cerrado", "c. Amasamiento", "d. Mantener el contacto de la piel con las palmas de las manos"], correcta: 2 },
    { id: 37, pregunta: "Dentro del estudio epidemiológico de las enfermedades transmisibles, ¿cuál se considera la fuente de infección más importante?", opciones: ["a. El ser humano", "b. Los animales", "c. El suelo", "d. El agua"], correcta: 0 },
    { id: 38, pregunta: "¿Cuál de las siguientes opciones representa una medida de prevención específica sobre los mecanismos de transmisión de las infecciones?", opciones: ["a. El aislamiento y cuarentena", "b. El saneamiento general", "c. El tratamiento precoz", "d. La declaración obligatoria"], correcta: 1 },
    { id: 39, pregunta: "Aquel sujeto que ha padecido una enfermedad infecciosa, de la cual han desaparecido los síntomas clínicos, pero que sigue eliminando gérmenes patógenos se denomina:", opciones: ["a. Portador sano", "b. Portador precoz", "c. Portador inmune", "d. Portador convaleciente"], correcta: 3 },
    { id: 40, pregunta: "Cuando en un cuadro patológico aparecen los primeros síntomas inespecíficos que permiten orientar un diagnóstico, nos encontramos en el:", opciones: ["a. Período de convalecencia", "b. Período prodrómico", "c. Período de incubación", "d. Período clínico"], correcta: 3 },
    { id: 41, pregunta: "Entre los mecanismos de transmisión indirecta de las enfermedades transmisibles se incluyen todos los siguientes recursos, excepto:", opciones: ["a. Agua", "b. Besos", "c. Pulgas", "d. Instrumental quirúrgico"], correcta: 1 },
    { id: 42, pregunta: "En una gráfica mensual ordinaria hospitalaria, el registro de la tensión arterial del paciente se representa mediante:", opciones: ["a. Tres puntos unidos para formar la curva de la tensión", "b. Dos puntos unidos por una línea vertical, con sus extremos en punta de flecha", "c. Dos puntos unidos por una línea horizontal", "d. Un diagrama de barras"], correcta: 1 },
    { id: 43, pregunta: "La cantidad global de energía que el organismo humano necesita consumir a lo largo de un ciclo completo de 24 horas se define como:", opciones: ["a. Técnica de usar los alimentos", "b. Metabolismo total", "c. Balance energético anual", "d. Cantidad mínima de energía por hora"], correcta: 1 },
    { id: 44, pregunta: "Los valores fisiológicos normales del pulso arterial en un paciente adulto sano y en reposo oscilan entre:", opciones: ["a. 50 y 100 ppm", "b. 40 y 60 ppm", "c. 60 y 80 ppm", "d. 20 y 30 ppm"], correcta: 2 },
    { id: 45, pregunta: "El incremento manifiesto de la frecuencia respiratoria por encima de los límites fisiológicos normales se denomina de forma médica:", opciones: ["a. Hiperpnea", "b. Taquipnea", "c. Ortopnea", "d. Bradipnea"], correcta: 1 },
    { id: 46, pregunta: "El cómputo exacto del balance de líquidos de una persona a lo largo de un día corresponde a:", opciones: ["a. Líquidos ingeridos menos diuresis", "b. Ingresos menos líquidos perdidos en 24h", "c. Líquidos perfundidos menos sudoración", "d. Ingresos totales en 24 h."], correcta: 1 },
    { id: 47, pregunta: "La inflamación de carácter superficial localizada en la mucosa de la membrana pituitaria se conoce técnicamente como:", opciones: ["a. Laringitis", "b. Rinitis", "c. Faringitis", "d. Sinusitis"], correcta: 1 },
    { id: 48, pregunta: "¿Cuál de las siguientes afirmaciones es correcta con respecto a los efectos demográficos y clínicos de la senectud?:", opciones: ["a. Aumenta la morbilidad", "b. Aumenta la capacidad funcional", "c. Disminuye la mortalidad", "d. Aumenta la independencia"], correcta: 0 },
    { id: 49, pregunta: "Son escalas validadas para la valoración de la capacidad funcional del paciente anciano todas las siguientes, excepto:", opciones: ["a. Mini Examen Cognoscitivo (MEC)", "b. Escala de Barthel", "c. Índice de Katz", "d. Escala de Lawton"], correcta: 0 },
    { id: 50, pregunta: "Son factores que alteran de forma directa el estado nutricional del anciano todos los siguientes, excepto:", opciones: ["a. La soledad", "b. Dentadura defectuosa", "c. Disminución de la sensibilidad gustativa", "d. Aumento de la actividad física"], correcta: 3 },
    { id: 51, pregunta: "Todas son complicaciones clínicas derivadas de la inmovilidad prolongada de la persona mayor, excepto:", opciones: ["a. Depresión", "b. Atrofia muscular", "c. Hipotensión Ortostática", "d. Aumento del tono venoso de las extremidades"], correcta: 3 },
    { id: 52, pregunta: "¿Qué nombre reciben los ejercicios fisioterapéuticos indicados para fortalecer el suelo pélvico?", opciones: ["a. Kartmen", "b. Kuffman", "c. Kegel", "d. Kandisnki"], correcta: 2 },
    { id: 53, pregunta: "Se considera una manifestación neurocognitiva inicial típica dentro de un cuadro de demencia:", opciones: ["a. La desorientación total", "b. La dificultad para la memoria reciente", "c. La incapacidad motora", "d. La pérdida de emociones"], correcta: 1 },
    { id: 54, pregunta: "La obsesión de carácter psiquiátrico por la ingesta exclusiva de comida biológicamente sana se denomina:", opciones: ["a. Anorexia", "b. Ortorexia", "c. Vigorexia", "d. Bulimia"], correcta: 1 },
    { id: 55, pregunta: "La deficiencia o insuficiencia de origen congénito en el desarrollo normal de la inteligencia se denomina:", opciones: ["a. Neurosis", "b. Paranoia", "c. Esquizofrenia", "d. Oligofrenia"], correcta: 3 },
    { id: 56, pregunta: "La patología psiquiátrica en la cual el objeto del impulso y la fijación sexual es un niño se conoce como:", opciones: ["a. Sadismo", "b. Pederasta", "c. Exhibicionismo", "d. Pedofilia"], correcta: 3 },
    { id: 57, pregunta: "La enfermedad que se encuentra en el último estadio de su evolución y a la que sucederá la muerte en un plazo relativamente corto se define como:", opciones: ["a. Enfermedad terminal", "b. Enfermedad crónica asintomática", "c. Fase de recuperación", "d. Enfermedad intermitente"], correcta: 0 },
    { id: 58, pregunta: "La atención médica o los denominados cuidados paliativos se establecen formalmente en el paciente cuando:", opciones: ["a. Cuando lo pide la familia", "b. Cuando el enfermo no responde ya a un tratamiento curativo", "c. Cuando lo indica la enfermera", "d. Cuando hay que calmar el dolor"], correcta: 1 },
    { id: 59, pregunta: "Según Elisabeth Kübler-Ross, la etapa en la que el paciente va asimilando e incorporando de forma gradual la idea de su propia muerte se denomina:", opciones: ["a. De aceptación", "b. De depresión", "c. De negociación", "d. De negación"], correcta: 0 },
    { id: 60, pregunta: "Es un signo clínico característico que indica que el fallecimiento de un enfermo puede ocurrir de forma inminente:", opciones: ["a. Manos y pies calientes al tacto", "b. Aumento de la coloración de la piel", "c. Disminución o ausencia de movimientos oculares", "d. Aumento de tono muscular"], correcta: 2 },
    { id: 61, pregunta: "Si se producen salpicaduras accidentales de sangre sobre la superficie de la piel intacta del profesional, el protocolo exige lavar con:", opciones: ["a. Agua y jabón", "b. Lejía diluida al 5%", "c. Lejía diluida al 10%", "d. Alcohol de 90°"], correcta: 0 },
    { id: 62, pregunta: "Todo el personal que desarrolle sus tareas en el medio sanitario, con contacto directo o indirectO con sangre u otros fluidos de pacientes deberá vacunarse obligatoriamente contra:", opciones: ["a. BCG (Tuberculosis)", "b. Gripe", "c. Hepatitis B", "d. Tétanos y Difteria"], correcta: 2 },
    { id: 63, pregunta: "Señale la afirmación correcta con respecto al uso clínico de los guantes como elemento de protección de barrera biológica:", opciones: ["a. Evitan los pinchazos con agujas huecas", "b. Se deben cambiar obligatoriamente tras el uso con cada paciente", "c. Si se perforan levemente no es necesario cambiarlos", "d. No son obligatorios al manipular fluidos corporales contaminados"], correcta: 1 },
    { id: 64, pregunta: "Al conjunto de técnicas no médicas que tratan de evitar de forma activa la aparición de enfermedades profesionales se denomina:", opciones: ["a. Ergonomía", "b. Riesgos posturales", "c. Higiene en el trabajo", "d. Sanidad laboral"], correcta: 2 },
    { id: 69, pregunta: "El primer eslabón biológico de la cadena epidemiológica estándar está constituido por:", opciones: ["a. El agente causal", "b. El mecanismo de transmisión", "c. La fuente de infección", "d. El huésped"], correcta: 0 },
    { id: 70, pregunta: "¿Qué pauta de higiene dermatológica habitual NO se recomienda aplicar en la persona mayor para el cuidado correcto de su piel?", opciones: ["a. Evitar la exposición prolongada a la luz solar", "b. Exponerse al frío intenso en invierno", "c. Utilizar ropa adecuada para conservar el calor corporal", "d. Tomar duchas o baños de cuerpo entero frecuentes"], correcta: 1 },
    { id: 71, pregunta: "El registro del siguiente dato clínico: 'Edema manifiesto en el tobillo derecho', sería incluido en el P.A.E. específicamente en la etapa de:", opciones: ["a. Valoración", "b. Diagnóstico", "c. Ejecución", "d. Evaluación"], correcta: 0 },
    { id: 72, pregunta: "La enfermedad de Alzheimer se clasifica de forma médica como:", opciones: ["a. Una enfermedad del aparato locomotor", "b. Una crisis de agitación aguda transitoria", "c. Una enfermedad neurológica degenerativa", "d. Una enfermedad del sistema endocrino primario"], correcta: 2 },
    { id: 1, pregunta: "La Administración Pública sirve con objetividad los intereses generales de acuerdo con los principios organizativos de (Test de Repaso):", opciones: ["a) Eficacia, jerarquía, descentralización, desconcentración y coordinación con sometimiento pleno a la ley", "b) Los órganos estatales son regidos exclusivamente por el Rey de forma directa", "c) La ley no regulará el estatuto general de los funcionarios públicos"], correcta: 0 },
    { id: 2, pregunta: "¿QUÉ ORDEN SE DEBE SEGUIR EN LA COLOCACIÓN DE PRENDAS QUE SE NECESITAN PARA LA ASEPSIA QUIRÚRGICA?", opciones: ["a) Calzas, gorro, bata, guantes, mascarilla", "b) Calzas, gorro, bata, mascarilla, guantes", "c) Calzas, gorro, mascarilla, bata, guantes"], correcta: 2 },
    { id: 3, pregunta: "¿QUÉ PROCESO DE AISLAMIENTO REQUIERE LA MENINGITIS MENINGOCÓCICA?", opciones: ["a) Aislamiento protector", "b) Aislamiento estricto", "c) Aislamiento respiratorio"], correcta: 2 },
    { id: 4, pregunta: "UNA HERIDA ES CONTUSA CUANDO SE PRODUCE POR:", opciones: ["a) Objetos afilados", "b) Estiletes", "c) Objetos romos"], correcta: 2 },
    { id: 5, pregunta: "¿QUÉ ES UNA ZONA SÉPTICA?", opciones: ["a) Zona desinfectada", "b) Zona infectada", "c) Zona sucia"], correcta: 2 },
    { id: 6, pregunta: "¿QUÉ PUNTUACIÓN MÍNIMA Y MÁXIMA SE PUEDE OBTENER TRAS APLICAR LA ESCALA DE NORTON A UN PACIENTE?", opciones: ["a) 4 puntos y 15 puntos", "b) 5 puntos y 15 puntos", "c) 5 puntos y 20 puntos"], correcta: 2 },
    { id: 7, pregunta: "EN LA CADENA EPIDEMIOLÓGICA, LA FUENTE DE INFECCIÓN MÁS IMPORTANTE ES:", opciones: ["a) El agua y los alimentos", "b) Los fómites y artrópodos", "c) El ser humano"], correcta: 2 },
    { id: 8, pregunta: "EL CONTENIDO DE HECES NORMALES SE DIVIDE EN:", opciones: ["a) 1/4 partes de agua y 3/4 partes de sustancias sólidas", "b) 3/4 partes de agua y 1/4 partes de sustancias sólidas", "c) 1/2 partes de agua y 1/2 partes de sustancias sólidas"], correcta: 1 },
    { id: 9, pregunta: "UN ENEMA ANTIHELMÍNTICO SE ADMINISTRA PARA:", opciones: ["a) Destruir microorganismos", "b) Ablandar heces", "c) Eliminar parásitos intestinales"], correcta: 2 },
    { id: 10, pregunta: "LA TEMPERATURA RECTAL SE TOMA DURANTE:", opciones: ["a) De 6 a 8 minutos", "b) 10 minutos", "c) De 1 a 3 minutos"], correcta: 2 },
    { id: 11, pregunta: "LAS VARIACIONES EN LA COMPOSICIÓN DE LA ORINA SON:", opciones: ["a) Poliuria, anuria, oliguria", "b) Polaquiuria, disuria, nicturia", "c) Piuria, leucocituria, proteinuria"], correcta: 2 },
    { id: 12, pregunta: "LLAMAMOS ONICOLISIS:", opciones: ["a) A la invasión micótica de las estructuras queratinizadas de las uñas", "b) Inflamación de los tejidos blandos que rodean a las uñas", "c) A la fragilidad de las uñas y su fácil destrucción por procesos tóxicos o infecciosos"], correcta: 2 },
    { id: 13, pregunta: "ES RESPIRACIÓN EUPNEICA:", opciones: ["a) Si la frecuencia es menor de 10 respiraciones por minuto", "b) Si es suave, silenciosa, amplia y regular", "c) Si la frecuencia es de más de 20 respiraciones por minuto"], correcta: 1 },
    { id: 14, pregunta: "EN UNA DIETA POBRE EN RESIDUOS, SE ELIMINAN O SE REDUCEN LOS SIGUIENTES ALIMENTOS:", opciones: ["a) El plátano y la leche", "b) La verdura y las naranjas", "c) Los embutidos"], correcta: 1 },
    { id: 15, pregunta: "ANTE UN PACIENTE QUE NO PUEDE COMER POR SÍ MISMO, EL AUXILIAR DE ENFERMERÍA:", opciones: ["a) Le animará a que coma solo", "b) Le ofrecerá la comida en el orden que quiera", "c) Las dos anteriores son verdaderas"], correcta: 1 },
    { id: 16, pregunta: "EL DÉFICIT DE VITAMINA B12 PRODUCE:", opciones: ["a) Fatiga", "b) Anemia perniciosa", "c) Lesiones renales"], correcta: 1 },
    { id: 17, pregunta: "EL LAVADO GENITAL SE REALIZARÁ:", opciones: ["a) De arriba hacia abajo y de afuera hacia dentro", "b) De dentro hacia fuera y de arriba hacia abajo", "c) De afuera hacia dentro y de abajo hacia arriba"], correcta: 0 },
    { id: 18, pregunta: "ORDEN EN QUE SE REALIZARÁ EL LAVADO EN CAMA:", opciones: ["a) Tórax, nalgas, abdomen, manos y cara", "b) Cuello, tórax, pies y región genital", "c) Cara, mamas, abdomen y región genital"], correcta: 2 },
    { id: 19, pregunta: "PARA ASEGURAR UNA ATENCIÓN EFICAZ, LA AUXILIAR DE ENFERMERÍA INTERVIENE:", opciones: ["a) Participando en los proyectos de investigación del equipo", "b) Proporcionando y manteniendo la felicidad del paciente en todo momento", "c) Observando, registrando y conservando sólo los datos proporcionados por el paciente"], correcta: 0 },
    { id: 20, pregunta: "LOS CUIDADOS PALIATIVOS Y, POR EXTENSIÓN, LOS EQUIPOS DE CUIDADOS PALIATIVOS:", opciones: ["a) Proporcionan alivio al dolor y a otros síntomas", "b) Intentan acelerar el fallecimiento", "c) Sustituyen a la familia"], correcta: 0 },
    { id: 21, pregunta: "LA AUSENCIA TOTAL O CASI TOTAL DE ELIMINACIÓN DE ORINA SE DENOMINA:", opciones: ["a) Anuria", "b) Enuresis", "c) Oliguria"], correcta: 0 }



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
