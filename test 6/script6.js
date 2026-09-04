// BANCO DE PREGUNTAS DEL TEST 6 (Preguntas 1 a 20: Legislación, úlceras, sondas y constantes)
const questions = [
    { id: 1, pregunta: "¿A qué se denomina consentimiento informado?", opciones: ["a. Documento de obligado cumplimiento para cualquier prueba que así considere el personal de enfermería", "b. La conformidad libre, voluntaria y consciente de un paciente ante una actuación que afecte a su salud, una vez recibida toda la información", "c. Es un conjunto de datos de carácter asistencial, en los que no interviene el paciente", "d. Es un documento emitido por el médico responsable al paciente en un centro sanitario"], correcta: 1 },
    { id: 2, pregunta: "El paciente encamado cuando está en posición de decúbito lateral tiene tendencia a desarrollar más úlceras en:", opciones: ["a. Sacro", "b. Cadera", "c. Glúteos", "d. Nuca"], correcta: 1 },
    { id: 3, pregunta: "Las fases evolutivas del proceso de aparición de las úlceras por presión son:", opciones: ["a. Eritematosa, necrótica y escoriativa", "b. Eritematosa, escoriativa y necrótica", "c. Escoriativa, necrótica y eritematosa", "d. La necrosis aparece sin lesiones previas"], correcta: 1 },
    { id: 4, pregunta: "Una de las complicaciones y la causa más común de muerte en un paciente 'gran quemado' es:", opciones: ["a. Infección", "b. Hematuria", "c. Hipertermia", "d. Sibilancias"], correcta: 0 },
    { id: 5, pregunta: "Después de alimentar a un paciente con sonda nasogástrica, el procedimiento recomienda irrigar 30 ml. de agua, ¿podría indicar con qué finalidad?", opciones: ["a. Evitar la formación de costras, obstrucción de la sonda y reproducción de bacterias", "b. Hidratar al paciente", "c. Evitar que el alimento refluya por la sonda", "d. Por sistema, no existe fundamento que lo justifique"], correcta: 0 },
    { id: 6, pregunta: "¿Cuál de los siguientes medios de aplicación de crioterapia se clasifica como un medio sólido?", opciones: ["a. Baños fríos", "b. Nieve carbónica", "c. Bolsa de hielo", "d. Sprays de vapor frío"], correcta: 1 },
    { id: 7, pregunta: "¿Qué vacuna está recomendada a todo el personal sanitario?", opciones: ["a. Papiloma virus", "b. Meningitis C", "c. Hepatitis B", "d. Tuberculosis BCG"], correcta: 2 },
    { id: 8, pregunta: "La constitución española establece que el estatuto de los trabajadores se regulará por:", opciones: ["a. Las organizaciones sindicales", "b. Acuerdo entre las organizaciones sindicales y los empresarios", "c. Ley", "d. El defensor del pueblo"], correcta: 2 },
    { id: 9, pregunta: "El nombramiento y cese del director general del servicio madrileño de salud, corresponde a:", opciones: ["a. La presidenta de la comunidad de madrid", "b. La asamblea de la comunidad de madrid", "c. El consejo de gobierno de la comunidad de madrid", "d. El consejero de sanidad de la comunidad de madrid"], correcta: 2 },
    { id: 10, pregunta: "Según la ley de la autonomía del paciente, cuando se trate de procesos de hospitalización, ¿qué documento debe constar en la historia clínica del paciente?", opciones: ["a. El informe de quirófano o de registro de parto", "b. La aplicación terapéutica de enfermería", "c. Los informes de exploraciones complementarias", "d. La hoja de interconsulta"], correcta: 0 },
    { id: 11, pregunta: "¿Cómo se llama la restricción de actividad de una persona sana que ha estado expuesta al contacto de una enfermedad transmisible?", opciones: ["a. Aislamiento", "b. Cuarentena", "c. Vigilancia", "d. Ingreso"], correcta: 1 },
    { id: 12, pregunta: "¿Qué material es imprescindible y debe formar parte del carro de reanimación cardiopulmonar?", opciones: ["a. Cloruro potásico", "b. Gasas estériles", "c. Laringoscopio", "d. Sonda de Sengstaken"], correcta: 2 },
    { id: 13, pregunta: "¿Cómo se llevaría a cabo la movilización de un paciente, que sufre un traumatismo pélvico, para cambiarle las sábanas?", opciones: ["a. En decúbito supino y luego en decúbito lateral derecho e izquierdo", "b. En decúbito prono y luego en decúbito lateral derecho e izquierdo", "c. En conjunto 'en plancha' entre varios profesionales", "d. En decúbito lateral izquierdo y luego llevando a cabo rotación sacro ilíaca"], correcta: 2 },
    { id: 14, pregunta: "¿En qué orden debe actuar un profesional ante un paciente inconsciente y con sospecha de posible parada cardiorrespiratoria?", opciones: ["a. Iniciar maniobras de resucitación cardiopulmonar (rcp): 2 insuflaciones y 30 compresiones", "b. Colocar al paciente en decúbito lateral, comprobar pulso, respiración y medir la TA", "c. Comprobar que el paciente no responde, pedir ayuda e iniciar las maniobras de reanimación cardiopulmonar (rcp)", "d. Iniciar masaje cardiaco, pedir ayuda y comprobar si el paciente responde"], correcta: 2 },
    { id: 15, pregunta: "Cuando la pupila de un paciente está anormalmente dilatada, se denomina:", opciones: ["a. Miosis", "b. Anisocoria", "c. Midriasis", "d. Isocoria"], correcta: 2 },
    { id: 16, pregunta: "¿Qué signos se presentan en una quemadura de grado II?", opciones: ["a. El aspecto de la piel es edematoso y con ampollas", "b. El aspecto de la piel es eritematoso, con picor y dolor", "c. Existe lesión con escara", "d. No hay dolor"], correcta: 0 },
    { id: 17, pregunta: "En la valoración de una úlcera por presión con la escala de Norton se obtiene una puntuación de 5. ¿Qué información aporta sobre el estado del paciente?", opciones: ["a. Estado general muy malo, estuporoso, encamado, inmovilizado, con incontinencia urinaria y fecal", "b. Estado general bueno, alerta, capaz de andar, con movilidad completa y sin incontinencia", "c. Estado general malo, apático, capaz de andar, ligera limitación a la movilidad y sin incontinencia", "d. Estado general bueno, alerta, en silla de ruedas, movilidad muy limitada y con incontinencia ocasional"], correcta: 0 },
    { id: 18, pregunta: "Con respecto a la alimentación del enfermo terminal, la auxiliar de enfermería debe:", opciones: ["a. Controlar que coma por lo menos la mitad de lo que lleva en la bandeja", "b. Obligarle a comer dentro del horario establecido en el hospital", "c. Dejarle que coma lo que quiera, cuando quiera y cuanto quiera", "d. Prohibir a la familia que le lleve comida"], correcta: 2 },
    { id: 19, pregunta: "Al aplicar un protocolo de intervención para el tratamiento de una toxicomanía, ¿podría señalar cuál es el orden establecido para dicha intervención?", opciones: ["a. Deshabituación, desintoxicación, rehabilitación y reinserción", "b. Desintoxicación, deshabituación, rehabilitación y reinserción", "c. Abordaje, desintoxicación, reinserción y rehabilitación", "d. Deshabituación, estimulación, desintoxicación y reinserción"], correcta: 1 },
    { id: 20, pregunta: "¿Cuánto tiempo medio transcurre después de la última ingesta alcohólica hasta que aparece el síndrome del delirium tremens en una persona diagnosticada como alcohólica?", opciones: ["a. Entre 12 y 18 horas", "b. En las primeras 24 horas", "c. Entre 2 y 3 días", "d. A partir de una semana"], correcta: 2 },
    { id: 21, pregunta: "¿Qué se ajusta a las cualidades del glutaraldehído?", opciones: ["a. se utiliza en esterilización por inmersión durante 5 minutos", "b. se utiliza para destruir bacterias, esporas, hongos y virus", "c. se utiliza en solución al 20%", "d. se utiliza en desinfección por inmersión durante 2 minutos"], correcta: 1 },
    { id: 22, pregunta: "Señale los agentes causales de las úlceras por presión:", opciones: ["a. presión, fricción y deslizamiento", "b. humedad, edad avanzada y desnutrición", "c. presión, obesidad y encamamiento", "d. deshidratación, fricción y diabetes"], correcta: 0 },
    { id: 23, pregunta: "Se dice que un paciente tiene un úlcera grado I, cuando:", opciones: ["a. la epidermis está intacta, aparece un eritema en la zona sometida a presión que desaparece al aliviar la presión", "b. la dermis y la epidermis están afectadas, pueden aparecer ampollas o equimosis", "c. la epidermis está intacta, pero existe un eritema de más de 15 mm. de diámetro que no desaparece cuando se alivia la presión", "d. existe afectación del músculo"], correcta: 2 },
    { id: 24, pregunta: "La crioterapia está contraindicada:", opciones: ["a. para disminuir el dolor", "b. cuando existan lesiones cutáneas", "c. para bajar la temperatura corporal", "d. ante inflamaciones"], correcta: 1 },
    { id: 25, pregunta: "¿En qué situaciones se recomienda el tratamiento con aplicaciones de calor?", opciones: ["a. en heridas abiertas", "b. en appendicitis", "c. en pacientes que toman anticoagulantes", "d. en neuralgias"], correcta: 3 },
    { id: 26, pregunta: "Uno de los mecanismos de la termogénesis es:", opciones: ["a. la radiación", "b. la producción hormonal", "c. la transpiración de la piel", "d. el paso del calor de un cuerpo a otro"], correcta: 1 },
    { id: 27, pregunta: "El fármaco antihemético está indicado en un paciente con:", opciones: ["a. diarrea", "b. tos", "c. vómitos", "d. estreñimiento"], correcta: 2 },
    { id: 28, pregunta: "¿Podría señalar cuál es la complicación más frecuente de la nutrición enteral?", opciones: ["a. diarrea", "b. estreñimiento", "c. insomnio", "d. neumonía por aspiración"], correcta: 3 },
    { id: 29, pregunta: "¿Podría indicar cuál de las siguientes vitaminas es hidrosoluble?", opciones: ["a. vitamina a", "b. vitamina b", "c. vitamina d", "d. vitamina k"], correcta: 1 },
    { id: 30, pregunta: "Capacidad funcional residual es:", opciones: ["a. el volumen máximo que los pulmones pueden alcanzar tras un esfuerzo inspiratorio", "b. la cantidad máxima de aire que una persona puede inspirar tras una expiración normal", "c. la cantidad máxima de aire que una persona puede eliminar tras llenar los pulmones al máximo", "d. la cantidad de aire que permanece en los pulmones tras una expiración normal"], correcta: 3 },
    { id: 31, pregunta: "El antiséptico clorhesidina se utiliza como:", opciones: ["a. bacteriostático", "b. yodoforo", "c. ataque a las proteínas de las membranas celulares", "d. efectividad sólo frente a bacterias gram negativas"], correcta: 2 },
    { id: 32, pregunta: "¿Qué efecto terapéutico produce la aplicación del frío sobre el organismo?", opciones: ["a. actúa como anestésico local", "b. mejora la actividad metabólica", "c. actúa como relajante muscular", "d. actúa como vasodilatador"], correcta: 0 },
    { id: 33, pregunta: "¿Cuándo hay que rechazar el material esterilizado?", opciones: ["a. cuando se comprueba en los registros que se ha alcanzado la presión, temperatura y tiempos estipulados", "b. cuando los indicadores colorimétricos no han cambiado de color", "c. cuando en los controles biológicos no se ha producido crecimiento en los medios de cultivo", "d. cuando los envoltorios están perfectamente sellados e identificados"], correcta: 1 },
    { id: 34, pregunta: "¿Cómo se llaman las medidas de desinfección y de desparasitación que se llevan a cabo mientras dura la enfermedad?", opciones: ["a. finales", "b. concurrentes", "c. necesarias", "d. obligatorias"], correcta: 1 },
    { id: 35, pregunta: "Los glúcidos o hidratos de carbono según su estructura química se clasifican en:", opciones: ["a. monosacáridos, derivados de ácidos grasos y esteroides", "b. monosacáridos, polisacáridos y albúmina", "c. lípidos, proteínas y vitaminas", "d. monosacáridos, disacáridos y polisacáridos"], correcta: 3 },
    { id: 36, pregunta: "¿Qué método de esterilización se caracteriza por necesitar una temperatura más alta durante más tiempo?", opciones: ["a. vapor a presión", "b. calor seco", "c. vapor de baja temperatura", "d. óxido de etileno"], correcta: 1 },
    { id: 37, pregunta: "A la dificultad respiratoria por un déficit de aporte de oxígeno se le denomina:", opciones: ["a. apnea", "b. disnea", "c. taquipnea", "d. asmática"], correcta: 1 },
    { id: 38, pregunta: "En la dieta pobre en grasas se permite el consumo de:", opciones: ["a. embutidos", "b. nata", "c. chocolate", "d. huevos cocidos o en tortilla"], correcta: 3 },
    { id: 39, pregunta: "En el autoclave de vapor existe una prueba denominada test de bowie-dick, ¿para qué se realiza?", opciones: ["a. para la limpieza del autoclave", "b. para ver si el vapor cambia de color y está esterilizado", "c. para demostrar la ausencia de aire o cualquier otro tipo de gases", "d. para desinfectar el autoclave"], correcta: 2 },
    { id: 40, pregunta: "Al realizar la higiene a un paciente y con el fin de prevenir la aparición de úlceras por presión, ¿qué aspectos del procedimiento se tendrán en cuenta?", opciones: ["a. utilizar jabones neutros, evitar la humedad y mantener la hidratación", "b. dar masajes con colonia o alcohol de romero", "c. mantener la piel húmeda", "d. aplicar cremas mediante masajes en las prominencias óseas"], correcta: 0 },
    { id: 41, pregunta: "¿Qué se considera un inconveniente de los componentes yodados?", opciones: ["a. su corto periodo de caducidad", "b. su facilidad para evaporarse", "c. su inactividad frente a la materia orgánica", "d. su dificultad de conservación"], correcta: 2 },
    { id: 42, pregunta: "Los métodos de desinfección pueden ser:", opciones: ["a. físicos, molares y cáusticos", "b. de expansión, de situación y de composición", "c. térmicos, físicos y químicos", "d. lentos, rápidos y express"], correcta: 2 },
    { id: 43, pregunta: "Ante una política de prevención de las infecciones nosocomiales, ¿cuál de estas medidas es de eficacia probada?", opciones: ["a. aislamiento", "b. información sanitaria", "c. utilización de luz ultravioleta", "d. lavado de manos"], correcta: 3 },
    { id: 44, pregunta: "Indique el orden correcto de los elementos de la cadena epidemiológica:", opciones: ["a. huésped, mecanismo de transmisión, fuente de infección", "b. fuente de infección, huésped, mecanismo de transmisión", "c. fuente de infección, mecanismo de transmisión, huésped", "d. mecanismo de transmisión, fuente de infección, huésped"], correcta: 2 },
    { id: 45, pregunta: "Indique el número de respiraciones por minuto que se considera normal en el recién nacido:", opciones: ["a. de 30 a 40", "b. de 19 a 25", "c. de 12 a 18", "d. de 6 a 10"], correcta: 0 },
    { id: 46, pregunta: "A un paciente con disentería, ¿qué tipo de aislamiento se le debe aplicar?", opciones: ["a. estricto", "b. respiratorio", "c. protector", "d. entérico"], correcta: 3 },
    { id: 47, pregunta: "¿Podría señalar a qué se denomina infestación?", opciones: ["a. la entrada de varios tipos de microorganismos en el huésped", "b. una infección que abarca a gran cantidad de población", "c. una contaminación por gérmenes", "d. la entrada en el huésped de protozoos"], correcta: 3 },
    { id: 48, pregunta: "¿Qué dispositivo hay que utilizar para administrar concentraciones altas de oxígeno en una persona adulta con problemas respiratorios?", opciones: ["a. mascarilla", "b. gafas nasales", "c. sonda nasal", "d. tienda hiperbólica de O2"], correcta: 0 },
    { id: 49, pregunta: "Según la norma para el tratamiento de residuos sanitarios, los envases de color azul se utilizan para recoger:", opciones: ["a. jeringas con citotóxicos", "b. material de venopunción", "c. gasas y compresas de vih", "d. guantes tras cirugía general"], correcta: 0 },
    { id: 50, pregunta: "La saturación de oxígeno es un parámetro que se puede medir de manera sencilla y no traumática mediante:", opciones: ["a. pulsímetro", "b. dedil", "c. pulsioxímetro", "d. caudalímetro"], correcta: 2 },
    { id: 51, pregunta: "Cuando un medicamento viene etiquetado con el símbolo de termolábil, ¿qué indica?", opciones: ["a. que es sensible a la luz", "b. que es un medicamento para bajar la temperatura", "c. que hay que guardar en frigorífico y mantener la cadena del frío", "d. que es dispensado con receta médica"], correcta: 2 },
    { id: 52, pregunta: "La oxigenoterapia está indicada como terapia de elección en los casos en los que exista:", opciones: ["a. anemia", "b. talasemia", "c. hipoxemia", "d. bacteriemia"], correcta: 2 },
    { id: 53, pregunta: "¿Cómo se debe limpiar el cordón umbilical en un recién nacido?", opciones: ["a. con betadine", "b. con mercromina", "c. con agua y jabón", "d. con polvos de azol"], correcta: 2 },
    { id: 54, pregunta: "¿Qué efecto terapéutico produce el calor local?", opciones: ["a. disminuye los exudados de las heridas", "b. actúa como vasoconstrictor", "c. actúa como relajante muscular", "d. baja la temperatura de la zona de aplicación"], correcta: 2 },
    { id: 55, pregunta: "Indique qué alimento es el primero, complementario a la lactancia, que se introduce en el bebé sano:", opciones: ["a. cereales con gluten", "b. verdura", "c. fruta", "d. huevo"], correcta: 2 },
    { id: 56, pregunta: "¿Podría señalar cuándo se aplican las 'precauciones estándares' en la atención sanitaria?", opciones: ["a. depende del diagnóstico que tenga el paciente", "b. en función del tipo de cuidado que requiera el paciente", "c. en todos los pacientes sin importar el diagnóstico o nivel presumible de infección", "d. en función del tipo de infección"], correcta: 2 },
    { id: 57, pregunta: "¿Quién ostenta la presidencia del consejo interterritorial del sistema nacional de salud?", opciones: ["a. el ministro de sanidad y consumo", "b. el presidente del gobierno", "c. el consejero competente en materia de sanidad", "d. el presidente del congreso"], correcta: 0 },
    { id: 58, pregunta: "¿A cuántas gotas equivale un mililitro en un sistema de microgotero?", opciones: ["a. 20 gotas", "b. 30 gotas", "c. 50 gotas", "d. 60 gotas"], correcta: 3 },
    { id: 59, pregunta: "¿Qué factores fisiológicos modifican la acción de los fármacos?", opciones: ["a. interacciones de otros fármacos", "b. sexo, edad, peso, temperatura", "c. toxicidad de los fármacos", "d. depende de la vía de administración"], correcta: 1 },
    { id: 60, pregunta: "¿Qué instrucciones debe proporcionar el auxiliar de enfermería para enseñar a un paciente a deambular con la ayuda de un andador?", opciones: ["a. desplazará el lado derecho del andador y el pie izquierdo simultáneamente", "b. el andador es de uso exclusivo en la sala de fisioterapia", "c. desplazará el lado izquierdo del andador y el pie izquierdo simultáneamente", "d. nunca salir y caminar con el andador por la calle sin ayuda"], correcta: 2 },
    { id: 61, pregunta: "En la preparación del material para recoger muestra de hemocultivo, es necesario:", opciones: ["a. un único frasco", "b. dos frascos diferentes, uno para microorganismos aerobios y otro para microorganismos anaerobios", "c. tres frascos en condiciones de asepsia", "d. tres frascos con diferentes medios de cultivo"], correcta: 1 },
    { id: 62, pregunta: "¿Cuál de las siguientes muestras biológicas puede mantenerse a temperatura ambiente o a 37°c hasta su procesamiento por el laboratorio?", opciones: ["a. esputo", "b. líquido cefalorraquídeo", "c. heces", "d. exudado vaginal"], correcta: 1 },
    { id: 63, pregunta: "Las bolsas de recogida de orina, ¿en qué grupo de la clasificación de residuos están incluidas?", opciones: ["a. grupo i o tipo i", "b. grupo ii o tipo ii", "c. grupo iii o tipo iii", "d. grupo iv o tipo iv"], correcta: 1 },
    { id: 64, pregunta: "En una persona con sospecha de ser diabético, ¿cómo se denomina un volumen de orina eliminado superior a 2.500 ml./día?", opciones: ["a. oliuria", "b. polaquiuria", "c. poliuria", "d. retención urinaria"], correcta: 2 },
    { id: 65, pregunta: "La irrigación por colostomía puede estar contraindicada en:", opciones: ["a. ancianos", "b. pacientes con estreñimiento", "c. pacientes que reciben radioterapia", "d. pacientes con incontinencia fecal"], correcta: 2 },
    { id: 66, pregunta: "El prolapso es una complicación de un estoma y consiste en:", opciones: ["a. el humedecimiento del repliegue del intestino hacia la cavidad abdominal", "b. la estrechez de la luz del estoma", "c. la aparición de pequeñas masas carnosas en la mucosa del estoma", "d. la salida del repliegue del intestino hacia la superficie cutánea a través del orificio"], correcta: 3 },
    { id: 67, pregunta: "En una persona adulta se considera que tiene bradicardia cuando su frecuencia cardiaca se encuentra ¿en cuántos latidos por minuto?", opciones: ["a. 35-55", "b. 60-80", "c. 81-90", "d. 91-110"], correcta: 0 },
    { id: 68, pregunta: "¿Qué precauciones se deben tomar en el aseo a un paciente encamado?", opciones: ["a. respetar su intimidad", "b. desconectar sondas, sueros y drenajes", "c. la temperatura del agua será estable sin tener en cuenta la opinión del paciente", "d. se realizará siempre en la cama aunque el paciente sea independiente"], correcta: 0 },
    { id: 69, pregunta: "¿En qué posición colocaría a una mujer para realizarle una exploración del aparato genital?", opciones: ["a. litotomía", "b. decúbito supino", "c. decúbito prono", "d. genupectoral"], correcta: 0 },
    { id: 70, pregunta: "¿Cómo se denomina la leche materna a los 10-14 días después del parto?", opciones: ["a. calostro", "b. leche lactogénica", "c. leche madura", "d. leche oxitócica"], correcta: 2 },
    { id: 71, pregunta: "El enema de limpieza debe administrarse antes de:", opciones: ["a. un enema medicamentoso", "b. un enema opaco", "c. un enema de retención", "d. un enema oleoso"], correcta: 1 },
    { id: 72, pregunta: "¿Qué tipo de instrumental médico-quirúrgico se utiliza en la diéresis?", opciones: ["a. pinzas de cangrejo", "b. pinzas de doyen", "c. tijeras", "d. aguja de reverdin"], correcta: 2 },
    { id: 73, pregunta: "Las personas con dificultades respiratorias suelen sentarse e inclinarse hacia delante para mejorar su situación, ¿cómo se denomina la postura que adoptan?", opciones: ["a. ortopneica", "b. apneica", "c. aqua-k", "d. decúbito prono"], correcta: 0 },
    { id: 74, pregunta: "Según el artículo 148 de la constitución española, las comunidades autónomas podrán asumir competencias en las siguientes materias:", opciones: ["a. sanidad exterior", "b. legislación sobre productos farmacéuticos", "c. legislación básica y régimen económico de la seguridad social", "d. sanidad e higiene"], correcta: 3 },
    { id: 75, pregunta: "El sistema de drenaje con mecanismo cerrado y de vacío para evacuar líquidos, se denomina:", opciones: ["a. tubo", "b. penrose", "c. redón", "d. tejadillo"], correcta: 2 },
    { id: 76, pregunta: "¿Qué requisito es imprescindible en la preparación de un paciente que va a ser sometido a una intervención quirúrgica?", opciones: ["a. llevar dentadura postiza", "b. llevar uñas pintadas", "c. identificar al paciente", "d. colocarle siempre en posición lateral"], correcta: 2 },
    { id: 77, pregunta: "¿Qué se debe hacer ante un paciente inconsciente que presenta un vómito?", opciones: ["a. colocarle en decúbito lateral o girar la cabeza a un lado", "b. preparar el aspirador con una sonda yankauer", "c. poner un empapador", "d. darle a oler alcohol para que se le pasen las náuseas"], correcta: 0 },
    { id: 78, pregunta: "¿En qué posición colocaría a un paciente encamado para aplicar un enema rectal?", opciones: ["a. posición fowler con las rodillas flexionadas", "b. posición sims con la pierna superior ligeramente flexionada", "c. posición salem con las piernas flexionadas", "d. posición levin en decúbito prono"], correcta: 1 },
    { id: 79, pregunta: "El sistema sanitario de la comunidad de madrid se organiza funcional y territorialmente en:", opciones: ["a. equipos de atención primaria", "b. áreas sanitarias", "c. centros de salud", "d. zonas básicas de salud"], correcta: 1 },
    { id: 80, pregunta: "¿A qué se denomina marcha 'oscilante'?", opciones: ["a. la utilizada por personas con parálisis de piernas y caderas", "b. la marcha que alterna el movimiento de una y otra muleta", "c. la marcha que también es conocida por 'marcha de tres puntos'", "d. la marcha que adopta la posición de trípode"], correcta: 0 },
    { id: 81, pregunta: "¿En qué posición colocaría a un paciente para realizarle una punción lumbar?", opciones: ["a. decúbito supino con piernas flexionadas", "b. Posición de Sims", "c. decúbito lateral con las piernas flexionadas en posición fetal", "d. decúbito prono con las piernas flexionadas"], correcta: 2 },
    { id: 82, pregunta: "¿A qué se denomina un drenaje simple o pasivo?", opciones: ["a. redón", "b. pleur-evac", "c. buleau", "d. tejadillo"], correcta: 3 },
    { id: 83, pregunta: "Indique qué posición es la correcta para realizar la higiene bucal en un paciente inconsciente:", opciones: ["a. posición de fowler", "b. decúbito supino con la almohada puesta", "c. semisentado", "d. decúbito lateral sin almohada"], correcta: 3 },
    { id: 84, pregunta: "¿Qué puntos de presión de mejor piel mantiene un paciente que se encuentra en la posición de fowler?", opciones: ["a. parte posterior de la cabeza, escápula y sacro", "b. trocánter mayor, cadera y maléolo", "c. sacro, tuberosidad isquiática y talones", "d. apófisis acromial, rodilla y dedos de los pies"], correcta: 2 },
    { id: 85, pregunta: "El paciente encamado cuando permanece mucho tiempo en decúbito supino, tiene tendencia a desarrollar úlceras por presión. ¿Podría indicar el lugar de su anatomía sometido a ese riesgo?", opciones: ["a. cresta ilíaca", "b. mentón", "c. sacro", "d. rodillas o cóndilos"], correcta: 2 },
    { id: 86, pregunta: "La legislación vigente establece deberes y derechos de los pacientes. De estas alternativas, ¿podría señalar la que corresponde a un derecho?", opciones: ["a. respetar la integridad física de los profesionales sanitarios", "b. acudir a las visitas médicas", "c. cuidar las instalaciones sanitarias", "d. recibir información sobre su proceso"], correcta: 3 },
    { id: 87, pregunta: "Al confeccionar una dieta, ¿qué necesidades nutricionales tiene una joven adolescente sana entre los 13 y los 15 años de edad?", opciones: ["a. 1.200 calorías", "b. 1.500 calorías", "c. 2.500 calorías", "d. 3.200 calorías"], correcta: 2 },
    { id: 88, pregunta: "Para levantar a un paciente de 55 kg. tras un largo período de tiempo en la cama, y sentarlo en un sillón, ¿qué indican los procedimientos como actuación recomendable?", opciones: ["a. utilizar la grúa", "b. levantarlo en bandeja entre cuatro personas", "c. sentarle en el lateral de la cama e inmediatamente colocarlo en el sillón para que no se caiga", "d. sentarle en el borde de la cama con sus piernas entre las nuestras y asegurarse de que no se marea antes de moverlo"], correcta: 3 },
    { id: 89, pregunta: "¿Qué autora define el cuidado como un acto individual, dado por uno mismo, en el momento en el que la persona adquiere la autonomía precisa para ello?", opciones: ["a. MF. Colliére", "b. V. Henderson", "c. M. Durán", "d. C. Roy"], correcta: 0 },
    { id: 90, pregunta: "Señale las cinco fases ante la muerte, según la dra. E. Kübler-Ross:", opciones: ["a. diagnóstico, pronóstico incierto, tratamiento paliativo y fase mortem", "b. diagnóstico terminal, depresión, tratamiento definitivo y aceptación", "c. negación, enfado, negociación, depresión y aceptación", "d. negociación, pronóstico incierto, tratamiento paliativo y aceptación"], correcta: 2 },
    { id: 91, pregunta: "¿Cuál de estas actividades es propia de atención especializada?", opciones: ["a. realización de programas establecidos para la zona básica de salud", "b. atención a la salud buco-dental", "c. puesta en marcha de programas específicos para grupos de población", "d. hospitalización en régimen de internamiento"], correcta: 3 },
    { id: 92, pregunta: "Al realizar la higiene normal de la cara en un paciente inmovilizado, ¿podría señalar la técnica correcta de limpieza de los ojos?", opciones: ["a. se limpian desde la zona interna hacia la externa", "b. se limpian desde la zona externa hacia la interna", "c. se limpian de arriba abajo", "d. en general, no se deben limpiar en esas condiciones"], correcta: 0 },
    { id: 93, pregunta: "El estatuto marco, el personal estatutario que se encuentre en situación de incapacidad temporal, se hallará en situación de:", opciones: ["a. servicio activo", "b. servicios especiales", "c. suspensión de funciones", "d. excedencia forzosa"], correcta: 0 },
    { id: 94, pregunta: "Algunos hospitales han incorporado un método de cuidado del recién nacido prematuro centrado en la familia, donde los padres son el mayor proveedor de cuidados para sus bebés. ¿Podría señalar el nombre de este método?", opciones: ["a. canguro", "b. monitorización", "c. penfingo", "d. ritter"], correcta: 0 },
    { id: 95, pregunta: "Para prevenir la transmisión de las conjuntivitis infecciosas, ¿qué actuación se considera la mejor y más sencilla a realizar?", opciones: ["a. el aislamiento", "b. el lavado de manos", "c. la profilaxis antibiótica", "d. el uso de suero glucosado"], correcta: 1 },
    { id: 96, pregunta: "Entre las siguientes alternativas, señale el dato de filiación del paciente:", opciones: ["a. los antecedentes familiares", "b. las medicaciones crónicas", "c. la fecha de nacimiento", "d. los factores de riesgo"], correcta: 2 },
    { id: 97, pregunta: "Cuando un niño ingresa en el hospital, el equipo que le atiende debe asumir que existe un proceso de adaptación en el que se distinguen cuatro fases. ¿A qué fases se refieren?", opciones: ["a. fase de sumisión, de protesta, de afirmación y de adaptación", "b. fase de sumisión, de desesperación, de negación y de adaptación", "c. fase de protesta, de desesperación, de negación y de adaptación", "d. fase de protesta, de afirmación, de desesperación y de adaptación"], correcta: 2 },
    { id: 98, pregunta: "La ley reguladora de la autonomía del paciente establece que se otorgará el consentimiento por representación:", opciones: ["a. cuando el paciente no esté incapacitado legalmente", "b. cuando el paciente menor de edad no sea capaz intelectual ni emocionalmente de comprender el alcance de la intervención", "c. cuando se trate de pacientes mayores de 65 años", "d. cuando el paciente sea capaz de tomar decisiones"], correcta: 1 },
    { id: 99, pregunta: "'La prevención de peligros en la vida, funcionamiento y bienestar humano', es el enunciado de un concepto dentro del modelo de autocuidado e indique a qué concepto se refiere:", opciones: ["a. una necesidad humana", "b. una actitud relativa de cuidados", "c. un requisito universal", "d. un supuesto parcial de intervención"], correcta: 2 },
    { id: 100, pregunta: "Cuando se utiliza el término 'holístico' al aplicar cuidados en el marco de las profesiones de enfermería, ¿podría señalar a qué se refiere?", opciones: ["a. del griego 'honia' que significa al servicio", "b. los seres humanos como un todo unificado", "c. acciones terapéuticas activas", "d. lo relacionado con el aire y el agua"], correcta: 1 }




];

// --- MOTOR DE LÓGICA FIJO (No modificar) ---
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
