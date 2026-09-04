// BANCO DE PREGUNTAS DEL TEST 22 (Materia técnica de Auxiliar de Enfermería - Primer bloque de 20)
const questions = [
    { id: 1, pregunta: "La ATENCIÓN ESPECIALIZADA:", opciones: ["a. Es la puerta de entrada ordinaria de la población al sistema sanitario", "b. Se lleva a cabo en los centros de salud", "c. Su acceso es restringido ya que se produce por indicación de los profesionales del equipo de atención primaria", "d. Sus funciones son la promoción de la salud, la prevención de la enfermedad y la resolución de los problemas de salud más frecuentes"], correcta: 2 },
    { id: 2, pregunta: "¿En qué documento de la HISTORIA CLÍNICA DE ATENCIÓN PRIMARIA se registran los datos relativos a la TENSIÓN ARTERIAL DE UN HIPERTENSO?:", opciones: ["a. Gráfica de constantes vitales", "b. Hoja de evolución", "c. Hoja de monitorización de datos", "d. Hoja clínico-estadística"], correcta: 2 },
    { id: 3, pregunta: "¿Cuál de los siguientes es un DOCUMENTO SANITARIO CLÍNICO?:", opciones: ["a. Formulario P10", "b. Hoja de interconsulta", "c. Impreso de derivación", "d. Parte EDO"], correcta: 1 },
    { id: 4, pregunta: "¿A qué determinante de la salud se destina mayor dotación económica?:", opciones: ["a. Medio ambiente", "b. Biología humana", "c. Estilo de vida", "d. Asistencia sanitaria"], correcta: 3 },
    { id: 5, pregunta: "En una población de 5000 habitantes, 150 han fallecido, de los cuales 50 eran mayores de 50 años. ¿El índice de Swaroop es?:", opciones: ["a. El índice de Swaroop es 33,3%", "b. La tasa de mortalidad general es 3‰", "c. El índice de Swaroop es 1%", "d. La tasa de mortalidad general es 20‰"], correcta: 0 },
    { id: 6, pregunta: "Señala la respuesta CORRECTA:", opciones: ["a. Una persona está sana cuando puede trabajar y participar en la vida social de la comunidad donde vive", "b. Cuando se altera su entorno, la persona cae enferma", "c. El equilibrio saludable se fundamenta en las adaptaciones orgánicas de las personas al medio ambiente", "d. Todas son ciertas"], correcta: 2 },
    { id: 7, pregunta: "La etapa de EVALUACIÓN DEL PROCESO DE ATENCIÓN DE ENFERMERÍA consiste en:", opciones: ["a. Analizar el estado de salud del paciente", "b. Llevar a cabo las actividades propuestas en el plan de cuidados de enfermería", "c. Criterio de valoración: alcanzar el logro de los objetivos, valorar el plan de cuidados de enfermería y la satisfacción del paciente", "d. Registrar el resultado obtenido en la hoja clínico-estadística del paciente"], correcta: 2 },
    { id: 8, pregunta: "NO es una función del TÉCNICO EN CUIDADOS AUXILIARES DE ENFERMERÍA:", opciones: ["a. Llevar la cuña al enfermo", "b. Colaborar en la administración de medicamentos por vía oral y parenteral", "c. Colaborar en la recogida de datos termométricos", "d. Trasladar comunicaciones verbales y escritas"], correcta: 1 },
    { id: 9, pregunta: "¿Cuál NO es un derecho general de los pacientes y usuarios de Osakidetza?:", opciones: ["a. Recibir la información sobre su estado de salud", "b. Negarse ser sujeto de investigación sanitaria", "c. Conocer los gastos originados por el uso de los recursos hospitalarios en el centro sanitario", "d. Solicitar una segunda opinión médica en otra comunidad autónoma antes de acceder a tratamientos o intervenciones quirúrgicas que generen riesgo para su salud o vida"], correcta: 2 },
    { id: 12, pregunta: "El documento que registra la ENTRADA Y SALIDA DE LOS MATERIALES y, por lo tanto, controla la CANTIDAD DE EXISTENCIAS ALMACENADAS se llama:", opciones: ["a. Punto de pedido", "b. Ficha de almacén", "c. Inventario permanente", "d. Depósito activo"], correcta: 1 },
    { id: 13, pregunta: "Los GUANTES DE LÁTEX ESTÉRILES SE CLASIFICAN COMO MATERIAL:", opciones: ["a. Fungible desechable", "b. Fungible reutilizable", "c. Inventariable", "d. Tipo C"], correcta: 0 },
    { id: 14, pregunta: "¿A qué nivel de la piel, se localizan los melanocitos?:", opciones: ["a. En la dermis papilar", "b. En la epidermis", "c. En la dermis reticular", "d. En el estrato basal"], correcta: 1 },
    { id: 15, pregunta: "Respecto a los colutorios indica la respuesta CORRECTA:", opciones: ["a. Llevan los mismos principios activos que las pastas dentríficas", "b. Llevan concentraciones más altas de principios activos que las pastas dentríficas", "c. Pueden utilizarse como sustitutivo de la higiene dental", "d. No son útiles para la higiene bucal"], correcta: 1 },
    { id: 16, pregunta: "Respecto al ASEO BUCAL EN UN PACIENTE ENCAMADO, indica la respuesta INCORRECTA:", opciones: ["a. Si el paciente está inconsciente, se le colocará la cabeza sobre una almohada", "b. Si el paciente está intubado, se realizará igual que al paciente inconsciente", "c. Si el paciente tiene dentadura postiza, se la retirará con una gasa", "d. Si no está contraindicado, se elevará la cabecera de la cama"], correcta: 0 },
    { id: 17, pregunta: "En la formación de las ÚLCERAS POR PRESIÓN, ¿qué factores INTRÍNSECOS predisponen?:", opciones: ["a. La fricción", "b. La presión", "c. El sobrepeso", "d. La humedad"], correcta: 2 },
    { id: 18, pregunta: "¿Qué zona está en RIESGO DE SUFRIR UNA ÚLCERA POR PRESIÓN, si el paciente está en DECÚBITO LATERAL?:", opciones: ["a. El acromion", "b. Los codos", "c. El sacro", "d. El talón"], correcta: 1 },
    { id: 19, pregunta: "Según la ESCALA NORTON, para la VALORACIÓN DE LAS ÚLCERAS POR PRESIÓN, se considera RIESGO EVIDENTE:", opciones: ["a. 16 o menos puntos", "b. 14 o menos puntos", "c. 12 o menos puntos", "d. 11 o menos puntos"], correcta: 1 },
    { id: 20, pregunta: "El APÉNDICE XIFOIDES FORMA PARTE DE:", opciones: ["a. El hueso maxilar", "b. La clavícula", "c. El esternón", "d. La cintura pélvica"], correcta: 2 },
    { id: 21, pregunta: "Los MÚSCULOS FLEXORES:", opciones: ["a. Disminuyen el ángulo de una articulación", "b. Elevan una parte del cuerpo", "c. Aumentan el ángulo de una articulación", "d. Descienden una parte del cuerpo"], correcta: 0 },
    { id: 22, pregunta: "El hueso VÓMER se encuentra situado en:", opciones: ["a. En el cráneo", "b. En la cara", "c. En el miembro superior", "d. En el miembro inferior"], correcta: 1 },
    { id: 23, pregunta: "CUANDO EL PACIENTE ESTÁ TUMBADO SOBRE LA ESPALDA, CON LOS BRAZOS Y LAS PIERNAS EXTENDIDOS Y PRÓXIMOS AL CUERPO, EN UN PLANO PARALELO AL SUELO, ESTÁ EN POSICIÓN DE:", opciones: ["a. Decúbito prono", "b. Decúbito supino", "c. Semiprona", "d. Morestin"], correcta: 1 },
    { id: 24, pregunta: "¿EN CUÁL DE ESTAS POSICIONES DEBE COLOCARSE AL PACIENTE CON LA CABEZA COLGANDO?:", opciones: ["a. Fowler", "b. Morestin", "c. Roser", "d. Litotomía"], correcta: 2 },
    { id: 25, pregunta: "EL PROCESO DE FORMACIÓN DEL HUESO SE DENOMINA:", opciones: ["a. Osteoporosis", "b. Osteogénesis", "c. Osteopenia", "d. Neosteosis"], correcta: 1 },
    { id: 26, pregunta: "UN PACIENTE CON UNA TEMPERATURA CORPORAL DE 38,7º C. TIENE:", opciones: ["a. Febrícula", "b. Fiebre ligera", "c. Fiebre alta", "d. Fiebre moderada"], correcta: 3 },
    { id: 27, pregunta: "La VÁLVULA QUE UNE LA AURÍCULA DERECHA CON EL VENTRÍCULO DERECHO SE DENOMINA:", opciones: ["a. Válvula mitral", "b. Válvula tricúspide", "c. Válvula aórtica", "d. Válvula semilunar"], correcta: 1 },
    { id: 28, pregunta: "¿DÓNDE OCURRE EL INTERCAMBIO GASEOSO?:", opciones: ["a. Bronquios", "b. Tráquea", "c. Membrana alveolocapilar", "d. Fosas nasales"], correcta: 2 },
    { id: 29, pregunta: "EN LA VÍA TÓPICA, EL FÁRMACO SE ADMINISTRARÁ:", opciones: ["a. Sobre la piel y mucosas del organismo", "b. Atravesando la piel del organismo", "c. Atravesando las mucosas del organismo", "d. En el tejido celular subcutáneo del organismo"], correcta: 0 },
    { id: 30, pregunta: "RESPECTO A LA DETERMINACIÓN DE OXÍGENO EN LA SANGRE, RESPONDE LA PREMISA CORRECTA:", opciones: ["a. Hablamos de hipoxemia cuando valores de presión parcial de oxígeno están por debajo de 98 mmHg", "b. Llamamos hipercapnia a valores de presión parcial de dióxido de carbono superiores a 10 mmHg", "c. La pulsioximetría es una técnica que mide la saturación de oxígeno de la hemoglobina", "d. La determinación de gases en sangre, en situaciones de hipoxemia, se realiza mediante gasometría venosa"], correcta: 2 },
    { id: 31, pregunta: "¿CÓMO SE LLAMA EL DISPOSITIVO QUE MIDE LA PRESIÓN A LA QUE SE ADMINISTRA EL OXÍGENO EN OXIGENOTERAPIA?:", opciones: ["a. Caudalímetro", "b. Humidificador", "c. Manómetro", "d. Bombona o 'bala de oxígeno'"], correcta: 2 },
    { id: 32, pregunta: "¿QUÉ DISPOSITIVO DE VENTILACIÓN UTILIZARÁ SI EL PACIENTE PUEDE RESPIRAR POR LA NARIZ?:", opciones: ["a. Cánula de traqueotomía", "b. Tubo endotraqueal", "c. Gafa o cánula nasal", "d. Respirador volumétrico"], correcta: 2 },
    { id: 33, pregunta: "RESPECTO A LA ASPIRACIÓN DE SECRECIONES TRAQUEO-BRONQUIALES, RESPONDE LA PREMISA CORRECTA:", opciones: ["a. Utilizaré guantes desechables no estériles", "b. Utilizaré una sonda nasogástrica estéril", "c. La presión de vacío ha de superar los 300 mmHg", "d. La aspiración no debe mantenerse más de 10-15 segundos"], correcta: 3 },
    { id: 34, pregunta: "¿QUÉ ESTRUCTURA ANATÓMICA DE LAS QUE CITO A CONTINUACIÓN TRANSPORTA SANGRE OXIGENADA?:", opciones: ["a. Ventrículo derecho", "b. Arteria pulmonar", "c. Aurícula derecha", "d. Vena pulmonar"], correcta: 3 },
    { id: 35, pregunta: "¿EN QUÉ POSICIÓN COLOCOAREMOS A UN PACIENTE ENCAMADO PARA LA ADMINISTRACIÓN DE UN ENEMA?:", opciones: ["a. Posición de Trendelenburg", "b. Posición de Fowler", "c. Posición de Sims", "d. Posición de decúbito supino"], correcta: 2 },
    { id: 36, pregunta: "¿CUÁL DE LOS SIGUIENTES ALIMENTOS SE CLASIFICA DENTRO DEL GRUPO DE LOS ALIMENTOS PLÁSTICOS O ESTRUCTURALES?:", opciones: ["a. Pescado", "b. Aceite", "c. Verduras", "d. Cereales"], correcta: 0 },
    { id: 37, pregunta: "¿QUÉ TIPO DE DIETA TERAPÉUTICA DE LAS CITADAS A CONTINUACIÓN ESTÁ BASADA EN LA MODIFICACIÓN DE LA CONSISTENCIA?:", opciones: ["a. Dieta baja en purinas", "b. Dieta hipocalórica", "c. Dieta blanda", "d. Dieta baja en colesterol"], correcta: 2 },
    { id: 38, pregunta: "¿CUÁL DE LOS SIGUIENTES PASOS EN EL PROTOCOLO DE ACTUACIÓN DE CAMBIO DE BOLSA DE OSTOMÍA, ES INCORRECTO?:", opciones: ["a. Lavarse las manos con agua y jabón", "b. Ponerse los guantes y explicar al paciente lo que se le va a hacer", "c. Retirar la bolsa de abajo a arriba", "d. Limpiar el estoma con agua y jabón neutro en forma circular"], correcta: 2 },
    { id: 39, pregunta: "¿CUÁL DE LOS SIGUIENTES NUTRIENTES, NO APORTA ENERGÍA?:", opciones: ["a. Glúcidos", "b. Proteínas", "c. Lípidos", "d. Vitaminas"], correcta: 3 },
    { id: 40, pregunta: "¿CUÁL DE LOS SIGUIENTES PROCEDIMIENTOS ES ADECUADO PARA COMPROBAR LA CORRECTA COLOCACIÓN DE UNA SONDA NASOGÁSTRICA?:", opciones: ["a. Exploración abdominal en donde se palpa la sonda a nivel del epigastrio", "b. Insuflación de aire a través de la sonda, comprobando su entrada mediante auscultación en epigastrio", "c. Mediante la observación minuciosa del abdomen, apreciándose el trayecto correcto", "d. Comprobación mediante laparoscopia de la presencia de jugo gástrico"], correcta: 1 },
    { id: 41, pregunta: "LA UNIDAD ESTRUCTURAL Y FUNCIONAL DEL RIÑÓN ES:", opciones: ["a. El glomérulo", "b. La nefrona", "c. El Asa de Henle", "d. Los túbulos contorneados"], correcta: 1 },
    { id: 42, pregunta: "LA REABSORCIÓN ACTIVA DE SODIO Y PASIVA DE CLORO, Y LA SECRECIÓN DE POTASIO, SE LLEVA A CABO EN:", opciones: ["a. Túbulo contorneado proximal", "b. Asa de Henle", "c. Túbulo contorneado distal", "d. Túbulo colector"], correcta: 2 },
    { id: 43, pregunta: "EL PH DE LA ORINA, SE ENCUENTRA ENTRE:", opciones: ["a. 4,8 y 7,5", "b. 5,7 y 8,4", "c. 7,8 y 9,5", "d. 4,2 y 6,7"], correcta: 0 },
    { id: 44, pregunta: "INDICA LA PREMISA CORRECTA SOBRE LOS URÉTERES:", opciones: ["a. Los uréteres son dos tubos, de aproximadamente 20 centímetros de longitud", "b. Las paredes de los uréteres constan de dos capas", "c. El extremo inferior de los uréteres entra en la vejiga por la cara anterior", "d. Los uréteres tienen un trayecto retroperitoneal"], correcta: 3 },
    { id: 45, pregunta: "RESPECTO A LOS CUIDADOS POST MORTEM, ES FALSO QUE:", opciones: ["a. Hay que realizarlos antes de que aparezca el rigor mortis", "b. Hay que realizarlos después de que el médico haya firmado el certificado de defunción", "c. Hay que realizarlos con: guantes, bata, mascarilla y gorro", "d. Hay que realizarlos identificando al fallecido únicamente sobre la sábana"], correcta: 3 },
    { id: 46, pregunta: "¿EN QUÉ CASO DE LOS CITADOS A CONTINUACIÓN, ESTÁ INDICADA LA MANIOBRA DE HEIMLICH?:", opciones: ["a. En los primeros auxilios si observamos fracturas desplazadas", "b. En el taponamiento de heridas contusas", "c. En la obstrucción de vías aéreas por cuerpos extraños", "d. En el caso de una epistaxis"], correcta: 2 },
    { id: 47, pregunta: "SI DURANTE EL PROTOCOLO DE ACTUACIÓN DE LA REANIMACIÓN CARDIOPULMONAR BÁSICA EN UN ADULTO, EL PACIENTE SE RECUPERA, ¿CUÁL SERÁ LA CONDUCTA A SEGUIR?:", opciones: ["a. Administrar dos insuflaciones de rescate", "b. Disminuir la frecuencia de las compresiones torácicas ajustándolas a un ritmo de 15:2", "c. Colocar a la víctima en decúbito lateral de seguridad", "d. Suministrar una ampolla de 1 mg de adrenalina"], correcta: 2 },
    { id: 48, pregunta: "¿CUÁL SERÁ LA ACTITUD ANTE UNA QUEMADURA?:", opciones: ["a. Pinchar las ampollas para drenar el líquido", "b. Aplicar una ligera capa de pasta dentífrica", "c. Curar con algodón impregnado en alcohol", "d. Enfriar la zona con abundante agua"], correcta: 3 },
    { id: 49, pregunta: "EL ÍNDICE DE APGAR ES UN INDICADOR DEL NIVEL DE ADAPTACIÓN DEL RECIÉN NACIDO. ¿CUÁNDO SE EVALÚA?:", opciones: ["a. Al minuto y a los cinco minutos de nacer", "b. A la hora del nacimiento", "c. A las veinticuatro horas del nacimiento", "d. A las cuarenta y ocho horas del nacimiento"], correcta: 0 },
    { id: 50, pregunta: "¿CUÁL DE LAS SIGUIENTES MODIFICACIONES ESTÁ LIGADA AL PROCESO DE ENVEJECIMIENTO?:", opciones: ["a. Disminución de la talla", "b. Aumento paulatino del peso a partir de los 60 años", "c. Descalcificación progresiva más frecuente en el varón", "d. Aumento del sentido del gusto, especialmente de lo salado y lo dulce"], correcta: 0 },
    { id: 51, pregunta: "¿CUÁL ES EL TIEMPO ESTIMADO PARA LA RETIRADA DE PUNTOS, TRAS LA REALIZACIÓN DE LA SUTURA?:", opciones: ["a. Al segundo día", "b. Entre cuatro y cinco días", "c. Entre siete y diez días", "d. Entre quince y veintiuno días"], correcta: 2 },
    { id: 52, pregunta: "EL AUTOCLAVE ES UN MÉTODO DE ESTERILIZACIÓN:", opciones: ["a. Físico por calor seco", "b. Físico por calor húmedo", "c. Químico por gases", "d. Químico por líquido"], correcta: 1 },
    { id: 53, pregunta: "EL CONTROL BIOLÓGICO DE ESTERILIZACIÓN PARA EL ÓXIDO DE ETILENO ES:", opciones: ["a. Bacillus cereus", "b. Bacillus pumilis", "c. Bacillus subtilis", "d. Bacillus stearothermophilus"], correcta: 2 },
    { id: 54, pregunta: "UNA ÚLCERA POR DECÚBITO INFECTADA POR CLOSTRIDIUM DIFFICILE ¿QUÉ TIPO DE PRECAUCIÓN DE AISLAMIENTO REQUERIRÁ?:", opciones: ["a. De transmisión por gotas", "b. De transmisión aérea", "c. De transmisión por contacto", "d. De transmisión inversa"], correcta: 2 },
    { id: 55, pregunta: "SON FACTORES DE RIESGO DE LAS INFECCIONES RESPIRATORIAS LOS PACIENTES:", opciones: ["a. Con sonda Foley", "b. Intubados", "c. Psiquiátricos", "d. Con úlceras por presión"], correcta: 1 },
    { id: 56, pregunta: "LA HEPATITIS B ES PRODUCIDA POR:", opciones: ["a. Una bacteria", "b. Un hongo", "c. Un virus", "d. Un parásito"], correcta: 2 },
    { id: 57, pregunta: "EL LAVADO HIGIÉNICO DE MANOS DEBE REALIZARSE:", opciones: ["a. Entre paciente y paciente", "b. Antes de una intervención quirúrgica", "c. Después de quitarse los guantes", "d. Las respuestas a y c son correctas"], correcta: 4 },
    { id: 60, pregunta: "SE LLAMAN ENURESIS A:", opciones: ["a. Micción durante el sueño", "b. Imposibilidad de orinar", "c. Dolor al orinar", "d. Deseo de orinar"], correcta: 0 },
    { id: 1, pregunta: "EL AUTOCONCEPTO DE CADA PERSONA, ESTÁ CONSTITUIDO POR:", opciones: ["a. La estima, la imagen que proyectamos y el comportamiento que tienen con nosotros.", "b. La autoestima, la autoimagen corporal y el comportamiento que tenemos con los demás.", "c. La autoestima, la autoimagen corporal y mental; y la conducta para con nosotros mismos, es decir el autocomportamiento.", "d. La valoración o aprecio que nos tienen los demás, la autoimagen corporal; y la conducta para con nosotros mismos, es decir el autocomportamiento."], correcta: 2 },
    { id: 2, pregunta: "UNA CONDUCTA ASERTIVA SE BASA EN:", opciones: ["a. Decir lo que se piensa, sin agresividad y con respeto hacia los demás.", "b. Ser sincero y agresivo si es necesario para imponer nuestras ideas.", "c. Anteponer los criterios e ideas de los otros a los propios", "d. Decir lo que se piensa de forma camuflada para no herir sentimientos, manipulando la conversación si fuera necesario."], correcta: 0 },
    { id: 3, pregunta: "LA ORGANIZACIÓN MUNDIAL DE LA SALUD (OMS) DEFINE LA SALUD COMO:", opciones: ["a. El bienestar físico del individuo, y no sólo la ausencia de enfermedad.", "b. El estado de la persona fisiológicamente sano.", "c. El estado completo de bienestar físico, psíquico y social, y no sólo la ausencia de enfermedad.", "d. El estado físico, psíquico y social de la persona."], correcta: 2 },
    { id: 4, pregunta: "LA ANSIEDAD ANTE LA ENFERMEDAD, ES UN SÍNTOMA:", opciones: ["a. Somático.", "b. Emocional.", "c. Social.", "d. Corporal."], correcta: 1 },
    { id: 5, pregunta: "EL HECHO DE QUE UN NIÑO ENFERME, HACE QUE ÉSTE:", opciones: ["a. Se sienta invulnerable.", "b. Siga sintiendo que todo lo puede.", "c. Tome conciencia del riesgo y del peligro.", "d. Se sienta fuerte y omnipotente."], correcta: 2 },
    { id: 6, pregunta: "EL AUXILIAR DE ENFERMERÍA TRABAJA EN EQUIPO:", opciones: ["a. Multidisciplinar, en el que trabajan independientemente según sus funciones definidas en el Estatuto de los Trabajadores.", "b. De enfermería, con trabajos perfectamente delimitados e independientes.", "c. En el que intervienen distintas disciplinas y en la que cada profesional complementa a los demás.", "d. En ocasiones contadas, según lo indique la División de Enfermería."], correcta: 2 },
    { id: 7, pregunta: "ES FUNCIÓN DEL AUXILIAR DE ENFERMERÍA:", opciones: ["a. La colocación de un cateterismo periférico.", "b. La administración de antibióticos vía intramuscular.", "c. La colaboración en el control de las infecciones.", "d. La colocación de una sonda Malecot."], correcta: 2 },
    { id: 8, pregunta: "LA PREDISPOSICIÓN DEL AUXILIAR DE ENFERMERÍA PARA COMPORTARSE DE UNA MANERA DETERMINADA, SEGÚN SUS SENTIMIENTOS, VALORES, CREENCIAS Y EXPERIENCIAS, ES SU:", opciones: ["a. Actitud.", "b. Aptitud.", "c. Capacidad intelectual.", "d. Empatía."], correcta: 0 },
    { id: 9, pregunta: "ES UNA FUNCIÓN RELACIONAL DEL AUXILIAR DE ENFERMERÍA:", opciones: ["a. El control de los almacenes de ropa.", "b. La revisión del carro de curas.", "c. La esterilización del material.", "d. La higiene del paciente."], correcta: 3 },
    { id: 10, pregunta: "LA ANOREXIA NERVIOSA SE CARACTERIZA PORQUE LAS PERSONAS QUE LO SUFREN ACTÚAN COMO SI ESTUVIERAN SANAS, NO ACEPTAN LA ENFERMEDAD. ESTO SIGNIFICA QUE:", opciones: ["a. Es un mecanismo de defensa denominado represión.", "b. Es una estrategia psicológica denominada negación.", "c. La persona no está realmente enferma.", "d. Sufre una reacción emocional denominada racionalización."], correcta: 1 },
    { id: 11, pregunta: "ANTE LA PÉRDIDA DE SALUD SON FRECUENTES SENTIMIENTOS COMO LA TRISTEZA, APATÍA Y PÉRDIDA DE LA CAPACIDAD DE DISFRUTAR. SON SENTIMIENTOS DE TIPO:", opciones: ["a. Neuróticos.", "b. Maníacos.", "c. Regresivos.", "d. Depresivos."], correcta: 3 },
    { id: 12, pregunta: "UN PACIENTE TIENE UNA ACTITUD AGRESIVA PORQUE LLEVA MUCHAS HORAS ESPERANDO A SER ATENDIDO, Y ADEMÁS CUANDO LE INFORMAN DE SU PATOLOGÍA LO HACEN CON UN TRATO INCORRECTO Y UTILIZANDO TÉRMINOS MÉDICOS QUE NO ENTIENDE. ESTA REACCIÓN SE DEBE ESENCIALMENTE A:", opciones: ["a. La desinformación.", "b. Otras experiencias de enfermedad vividas.", "c. La especificidad de la relación asistencial.", "d. Un trastorno de la personalidad que sufre."], correcta: 0 },
    { id: 13, pregunta: "LA VIVENCIA DE LA ENFERMEDAD DEPENDE DE:", opciones: ["a. Factores internos como el tipo de enfermedad que se sufre y externos como el ambiente familiar.", "b. Factores internos como las relaciones familiares y externos como el ambiente socio-cultural del enfermo.", "c. Factores internos como las experiencias ya vividas y externos como la economía de la persona.", "d. Factores internos como la edad de la persona y externos como la gravedad de la enfermedad."], correcta: 0 },
    { id: 14, pregunta: "EN RELACIÓN AL DOLOR Y EL SUFRIMIENTO HUMANO, SE PUEDE DECIR QUE:", opciones: ["a. Van asociados. Aparecen los dos síntomas siempre que hay enfermedad.", "b. Muchas enfermedades no conllevan dolor pero sí algún nivel de sufrimiento.", "c. Significan lo mismo en la enfermedad.", "d. El concepto de dolor abarca más elementos que el sufrimiento, ya que depende de la actitud emocional del sujeto."], correcta: 1 },
    { id: 15, pregunta: "LA SALUD PÚBLICA ANALIZA CÓMO ORGANIZAR DETERMINADAS MEDIDAS:", opciones: ["a. Dirigidas al medio biológico, físico y social.", "b. Que tienen como objetivo la protección, promoción, prevención, restauración y rehabilitación de la salud.", "c. Tomadas por los gobernantes.", "d. Todas son ciertas."], correcta: 3 },
    { id: 16, pregunta: "EL PROCESO QUE CAPACITA A LOS INDIVIDUOS Y A LA COMUNIDAD PARA AUMENTAR SU CONTROL SOBRE LOS DETERMINANTES DE SU SALUD Y, POR TANTO, MEJORARLAS ES LA DEFINICIÓN SEGÚN LA OMS DE:", opciones: ["a. Promoción de la salud.", "b. Prevención de la enfermedad.", "c. Educación para la salud.", "d. Salud pública."], correcta: 0 },
    { id: 17, pregunta: "ENTRE LOS OBJETIVOS DE LA ESTRATEGIA GLOBAL DE SALUD PARA TODOS EN EL AÑO 2000 EN EUROPA QUE PUBLICÓ LA OMS EN 1981, SE CONSIDERA ESENCIAL:", opciones: ["a. El desarrollo de una atención primaria accesible a todos los ciudadanos.", "b. La promoción de estilos de vida saludables.", "c. La realización de actividades sanitarias, educativas y sociales para prevenir enfermedades.", "d. Todas son ciertas."], correcta: 3 },
    { id: 18, pregunta: "LA PREVENCIÓN SECUNDARIA TIENE COMO OBJETIVO:", opciones: ["a. Evitar los problemas de salud antes de que ocurran.", "b. Diagnosticar y tratar de forma precoz para limitar el desarrollo de la dolencia y reducir el riesgo de recurrencia y las secuelas.", "c. Conseguir que cuando la enfermedad o sus secuelas no pueden ser eliminadas completamente, causen el mínimo de incapacidad.", "d. Potenciar el nivel de salud de toda la población en su vida cotidiana."], correcta: 1 },
    { id: 19, pregunta: "SEÑALA LA RESPUESTA INCORRECTA:", opciones: ["a. La prevención tiene como objetivo la conservación de la salud evitando los problemas de salud o controlando las enfermedades.", "b. Los programas de vacunación son una medida de prevención.", "c. La educación para potenciar una alimentación equilibrada, la lactancia materna y la regulación de las condiciones de los alimentos para evitar la obesidad son medidas preventivas.", "d. La OMS propone que la prevención debe basarse en una atención especializada adecuada."], correcta: 3 },
    { id: 20, pregunta: "EL MIEDO O ANGUSTIA A LAS MULTITUDES, ES:", opciones: ["a. Obsesión.", "b. Trastorno adaptativo.", "c. Fobia.", "d. Manía."], correcta: 2 },
    { id: 21, pregunta: "ENTRE LOS TRASTORNOS DE TIPO PSICÓTICO, SE ENCUENTRA:", opciones: ["a. Fobia a la luz.", "b. Autismo infantil.", "c. Anorexia nerviosa.", "d. Dislexia."], correcta: 1 },
    { id: 22, pregunta: "LOS TRASTORNOS DE PERSONALIDAD, SE PUEDEN PRESENTAR COMO:", opciones: ["a. Demencias.", "b. Alucinaciones.", "c. Pérdida de la realidad.", "d. Agresividad."], correcta: 3 },
    { id: 23, pregunta: "EL PACIENTE DE LA HABITACIÓN 373 OYE VOCES QUE LE INCITAN AL SUICIDIO. SUFRE:", opciones: ["a. Trastorno conductual.", "b. Alucinación.", "c. Déficit cognitivo.", "d. Desviación psicosexual."], correcta: 1 },
    { id: 24, pregunta: "EL PACIENTE ES INGRESADO CONTRA SU VOLUNTAD Y POR REQUERIMIENTO JUDICIAL, SU HOSPITALIZACIÓN ES:", opciones: ["a. Voluntaria.", "b. Involuntaria.", "c. Forzosa.", "d. Ilegal."], correcta: 1 },
    { id: 25, pregunta: "EL ALCOHOLISMO ES UNA:", opciones: ["a. Buena costumbre.", "b. Actividad social.", "c. Tóxicodependencia.", "d. Patología psíquica aguda."], correcta: 2 },
    { id: 36, pregunta: "LA CIENCIA Y EL ARTE DE IMPEDIR LA ENFERMEDAD, PROLONGAR LA VIDA Y FOMENTAR LA SALUD MEDIANTE EL ESFUERZO ORGANIZADO DE LA COMUNIDAD PARA QUE EL INDIVIDUO Y LA COMUNIDAD SE ENCUENTREN EN CONDICIONES DE GOZAR DE SU DERECHO NATURAL A LA SALUD Y A LA LONGEVIDAD ES LA DEFINICIÓN SEGÚN LA OMS DE:", opciones: ["a. Salud comunitaria.", "b. Salud pública.", "c. Promoción de la salud.", "d. Protección de la salud."], correcta: 1 },
    { id: 37, pregunta: "HIPÓCRATES:", opciones: ["a. Pertenece al siglo de oro (s. XVII).", "b. Crea hospitales militares para atender a los heridos en los campos de batalla.", "c. Realiza grandes avances en materia de higiene y salud pública.", "d. Trata la enfermedad como un problema orgánico, diagnosticable y tratable."], correcta: 3 },
    { id: 38, pregunta: "¿CUÁL DE LAS SIGUIENTES FUNCIONES NO ES PROPIA DE LA PIEL?", opciones: ["a. Recepción y transmisión de impulsos nerviosos de carácter sensorial.", "b. Adaptación del organismo a las fluctuaciones térmicas.", "c. Proteger de las radiaciones solares mediante la producción de sudor", "d. Síntesis de vitamina D a partir de la luz ultravioleta."], correcta: 2 },
    { id: 39, pregunta: "¿CUÁL DE ESTAS CAPAS DE LA PIEL ES MÁS PROFUNDA?", opciones: ["a. Dermis papilar.", "b. Dermis reticular.", "c. Epidermis", "d. Hipodermis."], correcta: 3 },
    { id: 40, pregunta: "SEGÚN SU FORMA, EL HUESO HÚMERO SE CLASIFICARÍA COMO:", opciones: ["a. Un hueso corto.", "b. Un hueso largo.", "c. Un hueso irregular.", "d. Un hueso plano."], correcta: 1 },
    { id: 41, pregunta: "¿CUÁNTOS PARES DE COSTILLAS POSEE EL ORGANISMO HUMANO?", opciones: ["a. 14 pares.", "b. 13 pares.", "c. 12 pares.", "d. 11 pares."], correcta: 2 },
    { id: 42, pregunta: "ORTOPNEA ES:", opciones: ["a. Aumento de la frecuencia respiratoria.", "b. Incapacidad de respirar en posición horizontal.", "c. Respiración con sibilantes.", "d. Dificultad al respirar."], correcta: 1 },
    { id: 43, pregunta: "¿CUÁL ES LA TASA NORMAL DE OXÍGENO EN EL AIRE ATMOSFÉRICO?", opciones: ["a. 10 %.", "b. 21 %.", "c. 50 %.", "d. 80 %."], correcta: 1 },
    { id: 44, pregunta: "¿CUÁLES SON LOS DIENTES ENCARGADOS DE APLASTAR Y TRITURAR LOS ALIMENTOS?", opciones: ["a. Los incisivos.", "b. Los caninos superiores.", "c. Los caninos inferiores.", "d. Los molares."], correcta: 3 },
    { id: 45, pregunta: "¿EN QUÉ PARTE DEL INTESTINO DESEMBOCA EL CONDUCTO COLÉDOCO?", opciones: ["a. En el colon.", "b. En el duodeno.", "c. En el yeyuno.", "d. En el íleon."], correcta: 1 },
    { id: 46, pregunta: "LA PRIMERA ACCIÓN ANTE UN ACCIDENTADO ES SEGUIR EL PROTOCOLO DENOMINADO \"CONDUCTA P.A.S.\" QUE CONSISTE EN ADOPTAR LAS SIGUIENTES MEDIDAS DE PRIMEROS AUXILIOS:", opciones: ["a. Preguntar, Actuar, Sanar.", "b. Proteger, Avisar, Socorrer.", "c. Protocolizar, Auxiliar, Situar.", "d. Prevenir, Aliviar, Solucionar."], correcta: 1 },
    { id: 47, pregunta: "¿CUÁL DE LOS SIGUIENTES CAMBIOS FISIOLÓGICOS ES CARACTERÍSTICO DEL PUERPERIO?", opciones: ["a. Rotura del saco amniótico.", "b. Presencia de loquios.", "c. Dilatación del útero.", "d. Aparición de vómitos."], correcta: 1 },
    { id: 48, pregunta: "LAS PRECAUCIONES DE AISLAMIENTO ESTÁNDAR SE APLICAN EN:", opciones: ["a. Piel intacta.", "b. Sudor.", "c. Sangre.", "d. Pelo."], correcta: 2 },
    { id: 49, pregunta: "EN EL SARAMPIÓN ¿QUÉ TIPO DE PRECAUCIONES DE AISLAMIENTO DEBEREMOS UTILIZAR?", opciones: ["a. Precauciones de transmisión por gotas.", "b. Precauciones de transmisión aérea.", "c. Precauciones estándar.", "d. Las respuestas b y c son correctas."], correcta: 3 },
    { id: 50, pregunta: "LA RAMA DE LA PSICOLOGÍA QUE ESTUDIA LOS CAMBIOS DEL SER HUMANO A LO LARGO DE SU VIDA ES LA:", opciones: ["a. Psicología conductual.", "b. Psicología evolutiva.", "c. Psicología sociocultural.", "d. Psicología psiquiátrica."], correcta: 1 },
    { id: 51, pregunta: "EN EL PROCESO DE LA COMUNICACIÓN, EL ELEMENTO QUE ENVÍA EL MENSAJE:", opciones: ["a. El emisor", "b. El receptor", "c. La información", "d. El contexto"], correcta: 0 },
    { id: 52, pregunta: "LA EDUCACIÓN PARA LA SALUD TIENE COMO OBJETIVO:", opciones: ["a. Insertar en la comunidad la idea de la salud como un valor fundamental.", "b. Reducir el riesgo de recurrencia de algunas enfermedades.", "c. Reorientar los servicios sanitarios para lograr una corresponsabilidad de la promoción de la salud entre los profesionales, los individuos, la comunidad, las administraciones y los gobiernos.", "d. Todas las respuestas son objetivos de la educación para la salud."], correcta: 3 },
    { id: 1, pregunta: "LA AUSENCIA DE MATERIA SÉPTICA, O ESTADO LIBRE DE INFECCIÓN, SE LLAMA:", opciones: ["a. Contrasepsia", "b. Antisepsia", "c. Asepsia", "d. Ninguna de las tres"], correcta: 2 },
    { id: 4, pregunta: "¿CON QUÉ OTRO NOMBRE SE DENOMINA A LA POSICIÓN DE ANTITRENDELENBURG?:", opciones: ["a. Rose", "b. Fowler", "c. Morestin", "d. Sims"], correcta: 2 }




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
