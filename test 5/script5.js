// BANCO DE PREGUNTAS DEL TEST 5 (Preguntas 1 a 15: Gasometría, cultivos, normativas y precauciones)
const questions = [
    { id: 1, pregunta: "La técnica de extracción de sangre para medir gases arteriales es:", opciones: ["a. Hemocultivo", "b. Antibiograma", "c. Gasometría arterial", "d. Venopunción arterial"], correcta: 2 },
    { id: 2, pregunta: "Para saber el antibiótico más efectivo tras aislar un microorganismo, se solicita:", opciones: ["a. Antibiograma", "b. Espectograma", "c. Halograma", "d. Ninguna es correcta"], correcta: 0 },
    { id: 3, pregunta: "La ausencia total de eliminación de orina se denomina:", opciones: ["a. Oliguria", "b. Anuria", "c. Polaquiuria", "d. Poliuria"], correcta: 1 },
    { id: 4, pregunta: "Oliguria significa un volumen de orina inferior en 24 horas a:", opciones: ["a. 500 ml", "b. 1000 ml", "c. 1500 ml", "d. 2000 ml"], correcta: 0 },
    { id: 5, pregunta: "La prueba que requiere una muestra de orina estéril es el:", opciones: ["a. Control de diuresis", "b. Análisis elemental", "c. Urocultivo", "d. Análisis básico"], correcta: 2 },
    { id: 6, pregunta: "La prueba que requiere una muestra de heces estéril es el:", opciones: ["a. Sangre en heces", "b. Coprocultivo", "c. Oxiuros", "d. Parche de Jacobs"], correcta: 1 },
    { id: 7, pregunta: "Para orina de 24 horas cuantitativa, se indica:", opciones: ["a. Rechazar primera micción y recoger hasta la primera del día siguiente incluida", "b. Rechazar primera micción sin incluir la última", "c. Recoger primera micción y excluir la última", "d. Recoger todas incluyendo ambas"], correcta: 0 },
    { id: 8, pregunta: "La extracción de sangre para hemocultivo se suele prescribir:", opciones: ["a. A primera hora", "b. Sin fiebre", "c. Con pico febril", "d. Siempre de noche"], correcta: 2 },
    { id: 9, pregunta: "La muestra de sangre arterial se envía al laboratorio:", opciones: ["a. Tras varias horas", "b. Inmediatamente", "c. En nevera 24h", "d. Congelada"], correcta: 1 },
    { id: 10, pregunta: "Una muestra de urocultivo en nevera (4°C) se retiene máximo:", opciones: ["a. Inmediatamente", "b. 24 horas", "c. Temperatura ambiente", "d. Indefinido"], correcta: 1 },
    { id: 11, pregunta: "Para estudio de parásitos en heces se necesitan:", opciones: ["a. Una muestra", "b. Dos días", "c. Tres muestras en días distintos", "d. Ninguna"], correcta: 2 },
    { id: 12, pregunta: "Normativa sobre riesgos por agentes biológicos en el trabajo:", opciones: ["a. RD 225/1995", "b. RD 664/1997", "c. RD 721/1999", "d. RD 215/2005"], correcta: 1 },
    { id: 13, pregunta: "Vacuna no recomendada de rutina a todo el personal sanitario:", opciones: ["a. Hepatitis B", "b. Gripe", "c. Sarampión", "d. Hepatitis C"], correcta: 3 },
    { id: 14, pregunta: "La vacuna de la parotiditis se administra por vía:", opciones: ["a. Intradérmica", "b. Subcutánea", "c. Intraarterial", "d. Intravenosa"], correcta: 1 },
    { id: 15, pregunta: "Precauciones para microorganismos transmitidos por partículas <5 micras:", opciones: ["a. Aerosoles", "b. Gotas", "c. Contacto", "d. Universales"], correcta: 0 },
    { id: 16, pregunta: "Precauciones para microorganismos transmitidos por partículas goticulares >5 micras:", opciones: ["a. Precauciones de transmisión por aerosoles", "b. Precauciones de transmisión por gotas", "c. Precauciones de transmisión por contacto", "d. Precauciones universales"], correcta: 1 },
    { id: 17, pregunta: "¿Cuál de las siguientes medidas en la ubicación del paciente para evitar transmisión por aerosoles NO es correcta?", opciones: ["a. Situar al paciente en habitación individual", "b. Presión de aire positiva en la habitación", "c. Mantener la puerta de la habitación cerrada", "d. Salidas de aire adecuadas o filtro de alta eficiencia"], correcta: 1 },
    { id: 18, pregunta: "En las precauciones de transmisión por aerosoles, ¿cuántos recambios de aire por hora son necesarios?", opciones: ["a. 1 a 3 recambios por hora", "b. 6 a 12 recambios por hora", "c. 15 a 20 recambios por hora", "d. 25 a 30 recambios por hora"], correcta: 1 },
    { id: 19, pregunta: "¿Cuál de los siguientes procesos de esterilización se considera químico a baja temperatura?", opciones: ["a. Radiaciones gamma", "b. Radiaciones beta", "c. Radiaciones ultravioleta", "d. Plasma-gas de peróxido de hidrógeno"], correcta: 3 },
    { id: 20, pregunta: "El sistema de esterilización húmeda a baja temperatura por inmersión utilizando ácido peracético requiere una temperatura de:", opciones: ["a. 10-20°C", "b. 20-30°C", "c. 50-55°C", "d. 80-90°C"], correcta: 2 },
    { id: 21, pregunta: "Escala Norton: Estado general bueno (4), Estado mental confuso (2), Actividad en silla de ruedas (2), Movilidad muy limitada (2), Incontinencia ninguna (4). ¿Puntuación total?", opciones: ["a. 10", "b. 12", "c. 14", "d. 16"], correcta: 2 },
    { id: 22, pregunta: "Escala Norton: Estado general bueno (4), Estado mental alerta (4), Actividad encamado (1), Movilidad inmovilizado (1), Incontinencia urinaria y fecal (1). ¿Puntuación total?", opciones: ["a. 10", "b. 11", "c. 12", "d. 13"], correcta: 1 },
    { id: 23, pregunta: "¿Cuáles son los parámetros que mide la escala de valoración de riesgo de úlceras denominada 'Escala de Norton'?", opciones: ["a. Estado general-raza-edad-sexo-actividad", "b. Estado general-estado mental-actividad-edad-alimentación", "c. Estado general-sexo-edad-movilidad-alimentación", "d. Estado general-estado mental-actividad-movilidad-incontinencia"], correcta: 3 },
    { id: 24, pregunta: "La aparición de úlceras por presión en la rodilla de un/una paciente se relaciona con la posición de:", opciones: ["a. Decúbito lateral derecho", "b. Decúbito supino", "c. Decúbito prono", "d. Decúbito lateral izquierdo"], correcta: 2 },
    { id: 25, pregunta: "La aparición de úlceras por presión en la zona del occipucio de un/una paciente se relaciona con la posición de:", opciones: ["a. Decúbito lateral derecho", "b. Decúbito supino", "c. Decúbito prono", "d. Decúbito lateral izquierdo"], correcta: 1 },
    { id: 26, pregunta: "Paciente acostado sobre su espalda, piernas extendidas y brazos alineados al cuerpo, en plano paralelo al suelo:", opciones: ["a. Decúbito dorsal", "b. Decúbito prono", "c. Posición de Sims", "d. Posición de Trendelenburg"], correcta: 0 },
    { id: 27, pregunta: "¿Con qué otro nombre conocemos la posición denominada semiprona?", opciones: ["a. Morestin", "b. Decúbito supino", "c. Fowler baja", "d. Sims"], correcta: 3 },
    { id: 28, pregunta: "¿Con qué otro nombre conocemos la posición denominada antitrendelenburg?", opciones: ["a. Supina", "b. Dorsal", "c. Morestin", "d. Semiprona"], correcta: 2 },
    { id: 29, pregunta: "Cama que utiliza un flujo continuo e intenso de aire para que el paciente permanezca en suspensión y evite el contacto:", opciones: ["a. Cama de Roto-test", "b. Cama electrocircular", "c. Cama de Judet", "d. Cama de levitación"], correcta: 3 },
    { id: 30, pregunta: "¿Cuál de las siguientes opciones NO se corresponde con una cama utilizada en el hospital?", opciones: ["a. Cama libro", "b. Cama electrocircular o de Judet", "c. Cama de levitación", "d. Cama articulada"], correcta: 0 },
    { id: 31, pregunta: "¿Cuál de los siguientes tipos de colchones es el más utilizado en el hospital?", opciones: ["a. De muelles", "b. Alternating", "c. De agua", "d. De agua y bolas de poliuretano"], correcta: 1 },
    { id: 32, pregunta: "Las camillas en el hospital se usan para exploración y transporte. ¿Cuáles son las camillas más utilizadas?", opciones: ["a. Largas y estrechas", "b. Rígidas y articuladas", "c. Semirrígidas y de angulación", "d. Rígidas y electrocirculares"], correcta: 1 },
    { id: 33, pregunta: "El denominado colchón antiescaras es utilizado en clínica para evitar la aparición de úlceras por presión en los pacientes, ¿con qué otro nombre se conoce?", opciones: ["a. Colchón de muelles", "b. Colchón alternating", "c. Colchón de látex", "d. Colchón de espuma"], correcta: 1 },
    { id: 34, pregunta: "¿Qué cantidad de agua necesita el llamado 'colchón de agua' para llenarse?", opciones: ["a. 20 litros, aproximadamente", "b. 40 litros, aproximadamente", "c. 60 litros, aproximadamente", "d. 100 litros, aproximadamente"], correcta: 0 },
    { id: 35, pregunta: "¿Qué cantidad de agua necesita el llamado 'colchón de agua con bolas de poliuretano' para llenarse?", opciones: ["a. 10-12 litros, aproximadamente", "b. 40 litros, aproximadamente", "c. 60 litros, aproximadamente", "d. 80 litros, aproximadamente"], correcta: 0 },
    { id: 36, pregunta: "Cuando doblamos las esquinas de la sábana en forma de mitra o inglete estamos realizando un arreglo de la cama denominado:", opciones: ["a. Cama cerrada", "b. Cama abierta", "c. Cama ocupada", "d. Cama quirúrgica"], correcta: 0 },
    { id: 37, pregunta: "El instrumento que utiliza el personal médico en las consultas o en los distintos servicios hospitalarios para visualizar radiografías recibe el nombre de:", opciones: ["a. Otoscopio", "b. Oftalmoscopio", "c. Espejo radiográfico", "d. Negatoscopio"], correcta: 3 },
    { id: 38, pregunta: "Cuando el personal médico realiza el procedimiento de exploración física denominado percusión sobre una zona donde se contiene aire obtendrá un sonido:", opciones: ["a. Mate", "b. Timpánico", "c. Arrítmico", "d. Difuso"], correcta: 1 },
    { id: 39, pregunta: "La técnica diagnóstica que se realiza con el fin de registrar la actividad bioeléctrica del corazón recibe el nombre de:", opciones: ["a. Gammagrafía arterial", "b. Ecodoppler", "c. Electrocardiograma", "d. Espiometría"], correcta: 2 },
    { id: 40, pregunta: "El procedimiento realizado para drenar el líquido de la cavidad peritoneal recibe el nombre de:", opciones: ["a. Punción lumbar", "b. Toracocentesis", "c. Paracentesis", "d. Punción cisternal"], correcta: 2 },
    { id: 41, pregunta: "¿En qué área anatómica se encuentra la cavidad peritoneal?", opciones: ["a. Abdomen", "b. Tórax", "c. Zona acromio-clavicular", "d. Cerebro"], correcta: 0 },
    { id: 42, pregunta: "El interior de las fosas nasales está tapizado por una capa de tejido:", opciones: ["a. Epitelial", "b. Conectivo", "c. Cartilaginoso", "d. Conjuntivo"], correcta: 0 },
    { id: 43, pregunta: "¿Cuál de los cartílagos que forman las paredes de la laringe es el de mayor tamaño?", opciones: ["a. Cricoides", "b. Tiroides", "c. Epiglotis", "d. Aritenoide"], correcta: 1 },
    { id: 44, pregunta: "¿Cuál de los cartílagos que forman las paredes de la laringe presenta una prominencia en la parte anterior del cuello denominado 'manzana o bocado de Adán'?", opciones: ["a. Tiroides", "b. Cricoides", "c. Aritenoides", "d. Epiglotis"], correcta: 0 },
    { id: 45, pregunta: "De los siguientes cartílagos que forman las paredes de la laringe, ¿cuál es impar y único?", opciones: ["a. Aritenoide", "b. Corniculado", "c. Cuneiforme", "d. Cricoides"], correcta: 3 },
    { id: 46, pregunta: "La laringe es un órgano del aparato respiratorio que se encuentra situado a nivel de:", opciones: ["a. Las vértebras dorsales 3 y 5", "b. Las vértebras cervicales 1 y 2", "c. Las vértebras dorsales 1 y 2", "d. Las vértebras cervicales 4 y 6"], correcta: 3 },
    { id: 47, pregunta: "El órgano del aparato respiratorio que está formado por anillos cartilaginosos en forma de C se llama:", opciones: ["a. Faringe", "b. Tráquea", "c. Laringe", "d. Pleura"], correcta: 1 },
    { id: 48, pregunta: "El orificio situado en la cara mediastínica de cada pulmón que facilita la entrada y salida del bronquio, las arterias y venas pulmonares recibe el nombre de:", opciones: ["a. Alvéolos pulmonares", "b. Parrilla costal", "c. Pleura", "d. Hilio pulmonar"], correcta: 3 },
    { id: 49, pregunta: "El flujómetro forma parte del equipo de administración de oxigenoterapia pero, ¿con qué otro nombre es conocido?", opciones: ["a. Caudalímetro", "b. Manorreductor", "c. Gafa nasal", "d. Humidificador"], correcta: 0 },
    { id: 50, pregunta: "Dentro de la ventilación mecánica no invasiva, aquella que posibilita una presión positiva continua en las vías respiratorias sin utilizar un ventilador recibe el nombre de:", opciones: ["a. BiPAP", "b. CPAP", "c. NIPSV", "d. PEEP"], correcta: 1 },
    { id: 51, pregunta: "El nódulo aurículo-ventricular que tiene como función recoger los potenciales procedentes de las aurículas recibe también el nombre de:", opciones: ["a. Aschoff Tawara", "b. Purkinje", "c. Keith Flack", "d. Haz de His"], correcta: 0 },
    { id: 52, pregunta: "El fascículo de fibras situado en el corazón que va desde el nódulo aurículo-ventricular al tabique interventricular dividiéndose en dos ramas recibe el nombre de:", opciones: ["a. Fibras de Keith Flack", "b. Fibras de Aschoff Tawara", "c. Haz de His", "d. Nódulo sino-auricular"], correcta: 2 },
    { id: 53, pregunta: "El entramado de fibras que recorren las paredes de los ventrículos reciben el nombre de:", opciones: ["a. Fibras de Purkinje", "b. Fibras endoteliales", "c. Fibras de Keith Flack", "d. Fibras de Aschoff Tawara"], correcta: 0 },
    { id: 54, pregunta: "En la denominada rueda de alimentos del programa EDALNU del Ministerio de Sanidad, el grupo 2 está compuesto por:", opciones: ["a. Leche y sus derivados", "b. Carnes, pescado y huevos", "c. Aceite, grasas vegetales y animales", "d. Verduras y hortalizas"], correcta: 1 },
    { id: 55, pregunta: "Según el valor energético de los principios inmediatos, ¿cuál es el valor de 1 gramo de hidratos de carbono?", opciones: ["a. 2 Kilocalorías", "b. 4 Kilocalorías", "c. 7 Kilocalorías", "d. 9 Kilocalorías"], correcta: 1 },
    { id: 56, pregunta: "En la denominada rueda de los alimentos del programa EDALNU del Ministerio de Sanidad, el grupo 6 está compuesto por:", opciones: ["a. Verduras y hortalizas", "b. Cereales, arroz y azúcar", "c. Aceites, grasas vegetales y animales", "d. Carnes, pescado y huevos"], correcta: 1 },
    { id: 57, pregunta: "En la denominada rueda de los alimentos del programa EDALNU del Ministerio de Sanidad, el grupo 7 está compuesto por:", opciones: ["a. Leche y sus derivados", "b. Carnes, pescado y huevos", "c. Aceites, grasas vegetales y animales", "d. Verduras y hortalizas"], correcta: 2 },
    { id: 58, pregunta: "Las proteínas están formadas por aminoácidos; ¿cuál de los siguientes es considerado un aminoácido esencial?", opciones: ["a. Valina", "b. Serina", "c. Glisina", "d. Prolina"], correcta: 0 },
    { id: 59, pregunta: "En la denominada rueda de los alimentos del programa EDALNU del Ministerio de Sanidad, en el grupo 7 predominan los nutrientes:", opciones: ["a. Glucídicos", "b. Proteicos", "c. Reguladores", "d. Lipídicos"], correcta: 3 },
    { id: 60, pregunta: "En la denominada rueda de los alimentos del programa EDALNU del Ministerio de Sanidad, en el grupo 6 predominan los nutrientes:", opciones: ["a. Proteicos", "b. Lipídicos", "c. Glucídicos", "d. Reguladores"], correcta: 2 },
    { id: 61, pregunta: "¿Cuál de los siguientes aminoácidos es considerado no esencial?", opciones: ["a. Leucina", "b. Isoleucina", "c. Treonina", "d. Ácido glutámico"], correcta: 3 },
    { id: 62, pregunta: "La energía que necesita el organismo para mantener sus funciones vitales en estado de absoluto reposo se denomina:", opciones: ["a. Metabolismo basal", "b. Metabolismo total", "c. Nutrición total", "d. Alimentación básica"], correcta: 0 },
    { id: 63, pregunta: "Según las unidades de energía utilizadas en nutrición, ¿cuántos kilojulios son 20 kilocalorías?", opciones: ["a. 72,1 kilojulios", "b. 65,3 kilojulios", "c. 83,6 kilojulios", "d. 57,8 kilojulios"], correcta: 2 },
    { id: 64, pregunta: "Tomando como referencia las unidades de energía utilizadas en nutrición, ¿cuántas calorías son 10 julios?", opciones: ["a. 2,39 calorías", "b. 18,25 calorías", "c. 25,70 calorías", "d. 18,21 calorías"], correcta: 0 },
    { id: 65, pregunta: "A la hora de confeccionar una dieta equilibrada el porcentaje aproximado de proteínas en un día sería:", opciones: ["a. 55% del total", "b. 30% del total", "c. 15% del total", "d. 5% del total"], correcta: 2 },
    { id: 66, pregunta: "A la hora de confeccionar una dieta equilibrada, el porcentaje aproximado de lípidos en un día sería:", opciones: ["a. 55%", "b. 30%", "c. 15%", "d. 5%"], correcta: 1 },
    { id: 67, pregunta: "¿Cuál de las siguientes proteínas es una heteroproteína?", opciones: ["a. Albúmina", "b. Globulina", "c. Lipoproteína", "d. Fibrinógeno"], correcta: 2 },
    { id: 68, pregunta: "¿Cuál de las siguientes vitaminas es soluble a los lípidos?", opciones: ["a. Vitamina A", "b. Vitamina C", "c. Vitamina B12", "d. Vitamina B2"], correcta: 0 },
    { id: 69, pregunta: "De las siguientes vitaminas hidrosolubles, ¿a cuál se le conoce con el nombre de tiamina?", opciones: ["a. Vitamina B12", "b. Vitamina B9", "c. Vitamina B6", "d. Vitamina B1"], correcta: 3 },
    { id: 70, pregunta: "¿Cuál de las siguientes vitaminas liposolubles se denomina calciferol?", opciones: ["a. Vitamina A", "b. Vitamina D", "c. Vitamina E", "d. Vitamina K"], correcta: 1 },
    { id: 71, pregunta: "El ácido linoleico es un ácido graso:", opciones: ["a. Saturado", "b. Altamente saturado", "c. Poliinsaturado", "d. Parcialmente insaturado"], correcta: 2 },
    { id: 72, pregunta: "¿Cuál de los siguientes minerales forma parte de las hormonas tiroideas?", opciones: ["a. Hierro", "b. Yodo", "c. Cloro", "d. Cobre"], correcta: 1 },
    { id: 73, pregunta: "La enfermedad denominada bocio está relacionada con la deficiencia de un mineral en la dieta. ¿Cuál?", opciones: ["a. Calcio", "b. Fósforo", "c. Magnesio", "d. Yodo"], correcta: 3 },
    { id: 74, pregunta: "Desde el punto de vista del objetivo que se persigue en la realización de una intervención quirúrgica, ¿cuál es la finalidad de la cirugía ablativa?", opciones: ["a. Extirpar una parte (órgano, tumor, etc.) enferma", "b. Fortalecer zonas debilitadas", "c. Determinar la causa de los síntomas", "d. Aliviar los síntomas sin curar la enfermedad"], correcta: 0 },
    { id: 75, pregunta: "¿Cuál es la finalidad general de una cirugía paliativa?", opciones: ["a. Determinar la causa de los síntomas", "b. Aliviar los síntomas sin curar la enfermedad", "c. Corregir deformidades", "d. Resección de una parte enferma"], correcta: 1 },
    { id: 76, pregunta: "Si tenemos que clasificar el instrumental quirúrgico según su función, ¿dónde colocaríamos las denominadas tijeras de Metzenbaum?", opciones: ["a. Instrumental de talla o campo", "b. Instrumental de síntesis", "c. Instrumental de diéresis", "d. Instrumental de hemostasia"], correcta: 2 },
    { id: 77, pregunta: "La dieta recomendada para los pacientes con hipertensión arterial es:", opciones: ["a. Dieta hiposódica", "b. Dieta blanda", "c. Dieta absoluta", "d. Dieta hídrica"], correcta: 0 },
    { id: 78, pregunta: "Para evitar la obstrucción de la sonda nasogástrica procuraremos:", opciones: ["a. Sondar al paciente cada vez que se proceda a alimentarlo", "b. Lavar el interior de la sonda con agua antes y después de administrar el alimento", "c. Retirar la sonda dos centímetros, después de cada administración de alimentos", "d. Insuflar aire a presión a través de la sonda"], correcta: 1 },
    { id: 79, pregunta: "A la hora de limpiar el instrumental clínico para enviarlo a la central de esterilización realizamos un procedimiento denominado:", opciones: ["a. Asepsia-antisepsia", "b. Desinfección-esterilización", "c. Limpieza-descontaminación", "d. Loción-vaporización"], correcta: 2 },
    { id: 80, pregunta: "Los agentes básicos que se emplean en el procedimiento de limpieza del instrumental clínico son:", opciones: ["a. Hipoclorito potásico y agua", "b. Detergente y agua", "c. Glutaraldehído", "d. Ácido peracético"], correcta: 1 },
    { id: 81, pregunta: "¿Cuál de las fases de un ciclo de autoclave de prevacío se considera el tiempo real de esterilización?", opciones: ["a. Acondicionamiento de la carga", "b. Meseta de esterilización", "c. Desvaporización", "d. Secado"], correcta: 1 },
    { id: 82, pregunta: "¿Cuál de los siguientes epígrafes NO es una de las normas de aislamiento que se deben cumplir en la realización de un aislamiento estricto?", opciones: ["a. Usar mascarillas, batas y guantes cuando se entre en la habitación", "b. Mantener siempre la puerta cerrada", "c. Utilizar vajillas desechables", "d. Vacunar al paciente"], correcta: 3 },
    { id: 83, pregunta: "De los cartílagos que forman la laringe, ¿cuál es el que tiene la función de abrirse y cerrarse para evitar el paso de alimentos a la vía respiratoria?", opciones: ["a. Aritenoide", "b. Cuneiforme", "c. Epiglotis", "d. Cricoides"], correcta: 2 },
    { id: 84, pregunta: "Si tenemos que recoger una muestra de heces para la realización de un estudio parasitológico, ¿qué recipiente debemos utilizar?", opciones: ["a. Frasco estéril", "b. Frasco normal de bioquímica", "c. Un vaso limpio puede servir", "d. Frasco para examen básico"], correcta: 0 },
    { id: 85, pregunta: "Una vez finalizada una intervención quirúrgica programada el/la auxiliar de enfermería recoge el instrumental y:", opciones: ["a. Lo manda directamente a la central de esterilización para su procesamiento", "b. Lo limpia antes de enviarlo a esterilizar", "c. Recoge una muestra para cultivo para comprobar la existencia o no de infección", "d. Lo sumerge directamente en glutaraldehído y lo manda a esterilizar"], correcta: 1 },
    { id: 86, pregunta: "Procedemos a la limpieza del instrumental clínico después de una intervención quirúrgica, ¿qué haremos con el material que se ha seleccionado pero no se ha utilizado en dicha intervención?", opciones: ["a. Guardarlo porque es materia estéril", "b. Mandarlo a esterilizar sin lavarlo pues está limpio", "c. Lavarlo como el material que se ha utilizado en la intervención y enviarlo a esterilización", "d. A y b son correctas"], correcta: 2 },
    { id: 87, pregunta: "Cuando vamos a anotar en la gráfica del paciente las cifras de la frecuencia respiratoria usamos un bolígrafo de color:", opciones: ["a. Azul", "b. Negro", "c. Verde", "d. Rojo"], correcta: 2 },
    { id: 88, pregunta: "Cuando vamos a anotar en la gráfica del paciente las cifras de la tensión arterial usamos un bolígrafo de color:", opciones: ["a. Rojo", "b. Negro", "c. Azul", "d. Verde"], correcta: 2 },
    { id: 89, pregunta: "En el compartimento extracelular el catión más abundante es el:", opciones: ["a. Potasio", "b. Sodio", "c. Calcio", "d. Magnesio"], correcta: 1 },
    { id: 90, pregunta: "En el compartimento intracelular el catión más abundante es el:", opciones: ["a. Calcio", "b. Cloro", "c. Potasio", "d. Sodio"], correcta: 2 },
    { id: 91, pregunta: "En el espacio extracelular e intracelular nos encontramos cationes y aniones. ¿Cuál de los siguientes aniones es el más importante en el espacio extracelular?", opciones: ["a. Cloro", "b. Sulfato", "c. Fosfato", "d. Proteína"], correcta: 0 },
    { id: 92, pregunta: "A la hora de hacer un balance hídrico debemos saber que el medio principal de excreción de líquidos es:", opciones: ["a. Heces", "b. Sudor", "c. Transpiración", "d. Orina"], correcta: 3 },
    { id: 93, pregunta: "En la gráfica de un enfermo de la unidad de cuidados intensivos está anotado el resultado de una medición de la presión venosa central, concretamente la presión de la aurícula derecha. ¿Cuáles deberían ser sus valores normales?", opciones: ["a. 0 y 4 cm. de agua", "b. 6 y 12 cm. de agua", "c. 14-18 cm. de agua", "d. 20 y 22 cm. de agua"], correcta: 1 },
    { id: 94, pregunta: "Cuando en la hoja de evolución clínica se indica que a la hora de la toma de la temperatura un paciente está apirético significa que:", opciones: ["a. Tiene febrícula", "b. Tiene fiebre continua", "c. Está sin fiebre", "d. Tiene fiebre alta"], correcta: 2 },
    { id: 95, pregunta: "Cuando se anota en la hoja de observaciones que un determinado paciente presenta febrícula, ¿qué cifras de temperatura indican esa situación?", opciones: ["a. 36-37°C", "b. 37,1-37,9°C", "c. 38-38,4°C", "d. 38,5-39°C"], correcta: 1 },
    { id: 96, pregunta: "Consideramos que un/una paciente padece fiebre muy alta cuando presenta cifras de temperatura superiores a:", opciones: ["a. 38,4°C", "b. 40,5°C", "c. 39,5°C", "d. 38,9°C"], correcta: 1 },
    { id: 97, pregunta: "Si en la gráfica de constantes vitales observamos bruscos ascensos de la temperatura y descensos hasta la normalidad es un tipo de fiebre:", opciones: ["a. Remitente", "b. En meseta", "c. Recurrente", "d. Intermitente"], correcta: 3 },
    { id: 98, pregunta: "La alteración de la respiración en la que se observa una incapacidad de respirar o incremento en el esfuerzo cuando la persona está en posición horizontal o acostada recibe el nombre de:", opciones: ["a. Eupnea", "b. Ortopnea", "c. Taquipnea", "d. Respiración estertorosa"], correcta: 1 },
    { id: 99, pregunta: "Las personas que padecen acidosis metabólica pueden presentar una respiración característica. ¿Cuál?", opciones: ["a. Respiración de Kussmaul", "b. Respiración de Biot", "c. Respiración de Cheyne-Stokes", "d. Respiración de Bouchut"], correcta: 0 },
    { id: 100, pregunta: "Cuando en una persona ingresada en neumología con un aumento de las secreciones bronquiales observamos que al respirar emite ruidos roncantes anormales, ¿de qué tipo de respiración se trata?", opciones: ["a. Respiración de Biot", "b. Respiración de Bouchut", "c. Respiración estertorosa", "d. Respiración de Cheyne-Stokes"], correcta: 2 }





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
