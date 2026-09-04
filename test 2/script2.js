// BANCO DE PREGUNTAS DEL TEST 2
const questions = [
    { id: 1, pregunta: "Las habitaciones de un centro hospitalario deben tener:", opciones: ["a. La iluminación general en el techo", "b. La iluminación individual en la cabecera", "c. Iluminación de emergencia", "d. Todas son correctas"], correcta: 3 },
    { id: 2, pregunta: "Los baños cuya función es curativa se llaman:", opciones: ["a. Baños higiénicos", "b. Baños terapéuticos", "c. Baños parciales", "d. Ninguna es correcta"], correcta: 1 },
    { id: 3, pregunta: "El baño emoliente consiste en:", opciones: ["a. Inmersión de la parte comprendida entre la zona media del muslo y la cresta iliaca", "b. Inmersión del cuerpo en agua a 35-38°C, a la que se le añaden substancias sedantes", "c. Inmersión del cuerpo en agua a 35-38°C, a la que se le añaden substancias suavizantes de acción local", "d. B y c son correctas"], correcta: 2 },
    { id: 4, pregunta: "El baño de asiento consiste en:", opciones: ["a. La inmersión de la parte comprendida entre la zona media del muslo y la cresta ilíaca en agua a una temperatura de 43-46°C", "b. Inmersión del cuerpo en agua a 35-38°C, a la que se le añaden sustancias sedantes", "c. Inmersión del cuerpo en agua a 35-38°C, a la que se le añaden sustancias suavizantes de acción local", "d. B y c son correctas"], correcta: 0 },
    { id: 5, pregunta: "Para aliviar unas hemorroides ¿qué le indicaría a un paciente?", opciones: ["a. Baños de asiento", "b. Baños emolientes", "c. Baños higiénicos", "d. Baños completos"], correcta: 0 },
    { id: 6, pregunta: "Dentro de los recursos materiales necesarios para el baño completo del paciente ¿qué no es preciso?", opciones: ["a. Guantes desechables", "b. Dos palanganas", "c. Toallas para secar", "d. Todo es preciso"], correcta: 3 },
    { id: 7, pregunta: "Con el baño, el profesional de enfermería busca conseguir unos objetivos. ¿Cuál de los siguientes no es uno de ellos?", opciones: ["a. Eliminar los restos urinarios y fecales", "b. Favorecer el relax", "c. Promover el ejercicio físico", "d. Todas son correctas"], correcta: 3 },
    { id: 8, pregunta: "¿En qué orden se debe realizar el baño completo del paciente?", opciones: ["a. Primero el cuello y orejas, luego la cara y, al final, el cuerpo", "b. Cara, cuerpo, cuello y orejas", "c. Cuerpo, cuello y cara", "d. Cara, cuello y cuerpo"], correcta: 3 },
    { id: 9, pregunta: "¿Cuál de los siguientes procesos considera que es el de mayor riesgo para la producción de úlceras por presión?", opciones: ["a. Estados de hipovitaminosis e hipoproteinemia", "b. Obesidad", "c. Pacientes con cirugía traumatológica", "d. Pacientes con cirugía ortopédica"], correcta: 0 },
    { id: 10, pregunta: "¿Cuál de las medidas siguientes no es recomendable para prevenir las úlceras por presión?", opciones: ["a. Uso de cremas", "b. Uso de aceites", "c. Uso de masajes", "d. Uso de alcohol"], correcta: 3 },
    { id: 11, pregunta: "Si el paciente adopta frecuentemente la posición de decúbito supino, las zonas propensas a ulcerarse son:", opciones: ["a. Los talones", "b. Las rodillas", "c. Las mejillas", "d. Ninguna de ellas"], correcta: 0 },
    { id: 12, pregunta: "Si el paciente adopta frecuentemente la posición de decúbito prono, las zonas propensas a ulcerarse son:", opciones: ["a. La zona sacra", "b. Los codos", "c. La nuca", "d. Ninguna de las anteriores"], correcta: 3 },
    { id: 13, pregunta: "Si el paciente adopta frecuentemente la posición de decúbito prono, las zonas propensas a ulcerarse son:", opciones: ["a. Los tobillos", "b. Los dedos del pie", "c. La región sacra", "d. La columna vertebral"], correcta: 1 },
    { id: 14, pregunta: "Si el enfermo adopta la posición en decúbito lateral, las zonas más propensas a ulcerarse son:", opciones: ["a. Los senos en las hembras", "b. La zona sacra", "c. Los omóplatos", "d. Las mejillas"], correcta: 3 },
    { id: 15, pregunta: "¿Cuáles de las siguientes medidas emplearía para prevenir la aparición de una úlcera por presión en la zona sacra?", opciones: ["a. Uso de espumas adhesivas tipo restón", "b. Colchones de agua", "c. Masaje en la zona", "d. Todas"], correcta: 3 },
    { id: 16, pregunta: "¿Cuáles de las siguientes medidas no emplearía para prevenir la aparición de una úlcera por presión en la zona sacra?", opciones: ["a. Control de la dieta del paciente encamado", "b. Aporte de dieta rica en Vitamina C", "c. Férulas de arco", "d. B y c"], correcta: 2 },
    { id: 17, pregunta: "La cura húmeda consiste en:", opciones: ["a. Cubrir la herida con sustancias que favorecen la limpieza natural de la herida de las sustancias exudativas", "b. Limpieza de arrastre exhaustiva con suero fisiológico", "c. Evitar allergies, humedad y maceración de la piel", "d. No existe dicho tipo de cura"], correcta: 0 },
    { id: 18, pregunta: "La cura húmeda se utiliza en caso de:", opciones: ["a. Úlcera de aspecto limpio", "b. Úlcera de aspecto sucio", "c. En cualquier tipo de úlcera", "d. A y c son correctas"], correcta: 1 },
    { id: 19, pregunta: "La fiebre alta comprende temperaturas entre:", opciones: ["a. 37,5-38°C", "b. 38,5-39,5°C", "c. 39,5-40,5°C", "d. Más de 40,5°C"], correcta: 2 },
    { id: 20, pregunta: "¿Cuál de las siguientes afirmaciones no es correcta respecto a la forma de temperatura corporal?", opciones: ["a. En la boca, se coloca el bulbo del termómetro debajo de la lengua del paciente", "b. En caso de que el paciente esté agitado, se tomará la temperatura en la boca", "c. Secar la axila del paciente con una gasa, pues la humedad falsea el registro", "d. Colocar el bulbo del termómetro en la axila del paciente, cruzar su antebrazo sobre el tórax y esperar seis-siete minutos"], correcta: 1 },
          { id: 21, pregunta: "¿Cuál de las siguientes afirmaciones no es correcta respecto a la toma de temperatura corporal?", opciones: ["a. La humedad de la axila no falsea el registro", "b. Colocar el bulbo del termómetro en la axila del paciente, cruzar su antebrazo sobre el tórax y esperar seis-siete minutos", "c. Hay que explicar previamente al paciente lo que se le va a hacer", "d. Descender la columna de mercurio por debajo de 36°C"], correcta: 0 },
    { id: 22, pregunta: "¿Cuál de las siguientes localizaciones nos da una medición más exacta de la temperatura corporal?", opciones: ["a. La axila", "b. La boca", "c. La vagina", "d. El recto"], correcta: 3 },
    { id: 23, pregunta: "¿Cuál es la localización obligada en niños, lactantes para la toma de la temperatura corporal?", opciones: ["a. La axila", "b. El recto", "c. La boca", "d. No hay ninguna que sea localización específica"], correcta: 1 },
    { id: 24, pregunta: "¿Cuánto tiempo hay que esperar para realizar la lectura de la temperatura rectal?", opciones: ["a. 1 minuto", "b. 2 minutos", "c. 3 minutos", "d. 4 minutos"], correcta: 1 },
    { id: 25, pregunta: "¿Cuál de las siguientes afirmaciones no es correcta?", opciones: ["a. Hay que esperar tres minutos para realizar la lectura de la temperatura rectal", "b. La temperatura rectal disminuye 0,5°C del valor tomado en la axila", "c. Hay que esperar seis-siete minutos para tomar la temperatura axilar", "d. En la toma de temperatura rectal, hay que descender el mercurio por debajo de 36°C"], correcta: 1 },
    { id: 26, pregunta: "La frecuencia respiratoria:", opciones: ["a. En un recién nacido es de 30-40 r.p.m", "b. En el primer año de vida es de 26-30 r.p.m", "c. En un adulto oscilan entre 12-18 r.p.m", "d. Todas son correctas"], correcta: 3 },
    { id: 27, pregunta: "¿Cuál de los siguientes factores no afecta a la frecuencia respiratoria?", opciones: ["a. La edad", "b. La alimentación", "c. El ejercicio físico", "d. La altitud geográfica"], correcta: 1 },
    { id: 28, pregunta: "La apnea es:", opciones: ["a. El aumento de la frecuencia respiratoria", "b. El cese de respiración", "c. La dificultad respiratoria por déficit de oxígeno", "d. El aumento de la profundidad de las respiraciones"], correcta: 1 },
    { id: 29, pregunta: "¿Cuál de las siguientes afirmaciones es correcta?", opciones: ["a. La temperatura del recién nacido desciende después del nacimiento", "b. La respiración del recién nacido si en reposo es de 45 resp/min. o más es normal", "c. El centro regulador de la temperatura en el recién nacido es inmaduro", "d. A y c son correctas"], correcta: 3 },
    { id: 30, pregunta: "Una elevación de la temperatura del recién nacido puede deberse a:", opciones: ["a. Demasiada ropa", "b. Infecciones", "c. Llanto", "d. A y b son correctas"], correcta: 3 },
    { id: 31, pregunta: "El promedio de tensión arterial del recién nacido es de:", opciones: ["a. 120/80 mmHg", "b. 70/40 mmHg", "c. 100/60 mmHg", "d. 90/60 mmHg"], correcta: 1 },
    { id: 32, pregunta: "¿Cuándo se puede hacer el baño de inmersión al recién nacido?", opciones: ["a. En el momento del parto para eliminar bien los restos de grasa de la piel", "b. A los dos días del nacimiento para esperar a que se seque el cordón", "c. Cuando se desprenda el cordón umbilical", "d. Al mes del nacimiento para evitar infecciones"], correcta: 2 },
    { id: 33, pregunta: "¿Cuál de las siguientes afirmaciones no es la correcta?", opciones: ["a. El peso es el mejor indicador global de nutrición y crecimiento", "b. Se produce una pérdida inicial en la primera semana de 800 grs", "c. El peso normal en el momento del nacimiento es de 2,72 a 4,09 Kgs", "d. A los seis meses el niño dobla el peso y, al año, lo triplica"], correcta: 1 },
    { id: 34, pregunta: "¿Sobre qué edad desaparece la lactasa intestinal en el niño?", opciones: ["a. A los 2 meses", "b. A los 6 meses", "c. Al año", "d. A los 11 meses"], correcta: 1 },
    { id: 35, pregunta: "Para acortar el proceso de supuración y mejorar la circulación de la sangre, se emplearían:", opciones: ["a. Compresas húmedas frías", "b. Compresas húmedas calientes", "c. Compresas secas frías", "d. Compresas secas calientes"], correcta: 1 },
    { id: 36, pregunta: "Para inhibir la formación y absorción de tóxicos bacterianos, usaría:", opciones: ["a. Compresas frías", "b. Compresas calientes", "c. Compresas heladas", "d. A y c son correctas"], correcta: 3 },
    { id: 37, pregunta: "Ante un caso de esguince reciente, emplearía:", opciones: ["a. Compresas frías", "b. Compresas calientes", "c. Fomentos", "d. B y c son correctas"], correcta: 0 },
    { id: 38, pregunta: "Un pedazo de franela o toalla caliente y húmeda que se aplica a la piel del paciente para crear calor superficial se denomina:", opciones: ["a. Compresas calientes", "b. Fomentos", "c. Freezbag", "d. Almohadilla Aquamatic"], correcta: 1 },
    { id: 39, pregunta: "Para reducir la temperatura corporal por evaporación, utilizaría:", opciones: ["a. Fomentos", "b. Envoltura fresca y húmeda", "c. Compresas calientes", "d. B y c son correctas"], correcta: 1 },
    { id: 40, pregunta: "Para disminuir la temperatura corporal o de alguna extremidad antes de cirugía, utilizaría:", opciones: ["a. Envoltura fresca y húmeda", "b. Fomentos", "c. Envolturas heladas", "d. Alcohol rebajado con agua"], correcta: 2 },
    { id: 41, pregunta: "Se ordenan aplicaciones calientes para lograr:", opciones: ["a. Disminuir el metabolismo celular", "b. Causar anestesia local", "c. Aumentar la supuración", "d. Reducir la temperatura"], correcta: 2 },
    { id: 42, pregunta: "Se utilizan aplicaciones frescas para:", opciones: ["a. Relajar el tejido", "b. Aumentar la temperatura", "c. Producir vasoconstricción", "d. Mejorar el metabolismo"], correcta: 2 },
    { id: 43, pregunta: "El estado en el que no existen sensaciones se denomina:", opciones: ["a. Congestión", "b. Anestesia", "c. Eritema", "d. Asepsia"], correcta: 1 },
    { id: 44, pregunta: "El enrojecimiento de la piel por congestión de capilares se denomina:", opciones: ["a. Eritema", "b. Congestión", "c. Supuración", "d. Anestesia"], correcta: 0 },
    { id: 45, pregunta: "El proceso por el cual el agua se desprende de la superficie corporal, lo que reduce el calor, se denomina:", opciones: ["a. Congestión", "b. Evaporación", "c. Exudado", "d. Inflamación"], correcta: 1 },
    { id: 46, pregunta: "El sondaje vesical se utiliza para:", opciones: ["a. Para que el paciente pueda orinar", "b. Para comprobar la cantidad de orina residual en la vejiga después que el paciente ha orinado", "c. Para eludir una obstrucción que bloquea el flujo de orina", "d. Todas son correctas"], correcta: 3 },
    { id: 47, pregunta: "Para realizar un sondaje vesical, preferentemente situaremos al paciente:", opciones: ["a. En la posición de Sims", "b. En la posición de Fowler", "c. En decúbito supino", "d. En decúbito lateral derecho"], correcta: 2 },
    { id: 48, pregunta: "La sonda de Foley se utiliza para:", opciones: ["a. Sondaje nasogástrico", "b. Sondaje vesical", "c. Sondaje gastroesofágico", "d. Varices esofágicas"], correcta: 1 },
    { id: 49, pregunta: "Hay que pinzar la sonda vesical, si la cantidad de orina emitida de una vez es superior a:", opciones: ["a. 300 ml", "b. 500 ml", "c. 700 ml", "d. 900 ml"], correcta: 0 },
    { id: 50, pregunta: "La revisión de la permanencia de la sonda vesical se hará:", opciones: ["a. Diariamente durante su permanencia", "b. Cada dos días", "c. Una vez a la semana", "d. Dos veces por semana"], correcta: 0 },
    { id: 51, pregunta: "La sonda de Foley:", opciones: ["a. Es acanalada", "b. Va provista de un balón hinchable", "c. Se utiliza para el control de las varices esofágicas", "d. B y c son correctas"], correcta: 1 },
    { id: 52, pregunta: "La sonda de Foley hay que cambiarla cada:", opciones: ["a. 30 días", "b. 15 o 20 días", "c. 8-10 días", "d. Diariamente"], correcta: 1 },
    { id: 53, pregunta: "La sonda de silicona se cambiará:", opciones: ["a. Cada 30 días", "b. Cada 15 días", "c. Cada 8-10 días", "d. Puede permanecer puesta hasta finalizar la convalecencia"], correcta: 0 },
    { id: 54, pregunta: "La sonda de Foley:", opciones: ["a. Tiene 2 vías", "b. Tiene 3 vías", "c. Es semirrígida", "d. A y b son correctas"], correcta: 3 },
    { id: 55, pregunta: "La sonda de silastix:", opciones: ["a. Es una sonda de Foley de larga duración (silicona)", "b. Es una sonda acodada", "c. Se fija mediante un hilo a la pierna", "d. A y b son correctas"], correcta: 0 },
    { id: 56, pregunta: "Para realizar un sondaje rectal, preferentemente colocaremos al paciente:", opciones: ["a. En la posición de Fowler", "b. En la posición de Litotomía", "c. En la posición de Sims", "d. Ninguna es correcta"], correcta: 2 },
    { id: 57, pregunta: "El proceso de división del núcleo se denomina:", opciones: ["a. Mitosis", "b. Meiosis", "c. Simbiosis", "d. B y c son correctas"], correcta: 0 },
    { id: 58, pregunta: "El tejido que reviste las cavidades del organismo, como es el tubo digestivo, se denomina:", opciones: ["a. Tejido epitelial de revestimiento", "b. Tejido epitelial glandular", "c. Tejido muscular", "d. Tejido conjuntivo"], correcta: 0 },
    { id: 59, pregunta: "¿Cuántos tipos de glándulas existen?", opciones: ["a. 2", "b. 3", "c. 4", "d. 5"], correcta: 1 },
    { id: 60, pregunta: "Las glándulas que vierten su contenido directamente a los capilares sanguíneos se denominan:", opciones: ["a. Exocrinas", "b. Endocrinas", "c. Pancreáticas", "d. B y c"], correcta: 1 },

    { id: 61, pregunta: "Las glándulas que vierten su contenido al exterior a través de un conducto se denominan:", opciones: ["a. Endocrinas", "b. Exocrinas", "c. Merocrinas", "d. Externas"], correcta: 1 },
    { id: 62, pregunta: "Las glándulas sudoríparas son del tipo:", opciones: ["a. Endocrino", "b. Exocrino", "c. Mixtas", "d. Sebáceas"], correcta: 1 },
    { id: 63, pregunta: "Las células del tiroides que segregan la tirosina son glándulas del tipo:", opciones: ["a. Exocrino", "b. Mixtas", "c. Endocrinas", "d. Funcionales"], correcta: 2 },
    { id: 64, pregunta: "El páncreas es una glándula:", opciones: ["a. Endocrina", "b. Exocrina", "c. Mixta", "d. Lisosomial"], correcta: 2 },
    { id: 65, pregunta: "La sujeción de los vasos sanguíneos es función del:", opciones: ["a. Tejido muscular", "b. Tejido conjuntivo", "c. Tejido epitelial", "d. Tejido nervioso"], correcta: 1 },
    { id: 66, pregunta: "El tejido que hace a modo de 'embalaje' de los órganos se denomina:", opciones: ["a. Tejido óseo", "b. Tejido conjuntivo", "c. Tejido muscular", "d. Tejido linfoide"], correcta: 1 },
    { id: 67, pregunta: "La función hematopoyética la tienen las células del tejido:", opciones: ["a. Muscular", "b. Óseo", "c. Nervioso", "d. Conjuntivo"], correcta: 1 },
    { id: 68, pregunta: "El mantenimiento de los niveles de calcio y fósforo es gracias a:", opciones: ["a. Tejido conjuntivo", "b. Tejido óseo", "c. Tejido muscular", "d. La regulación del páncreas"], correcta: 1 },
    { id: 69, pregunta: "¿Cuántos lóbulos tiene el hígado?", opciones: ["a. 2", "b. 3", "c. 4", "d. 1"], correcta: 2 },
    { id: 70, pregunta: "El lugar por el que entra la arteria hepática para irrigar el hígado y la vena porta se llama:", opciones: ["a. Placa motora", "b. Mediastino", "c. Hilio", "d. Fundus"], correcta: 2 },
    { id: 71, pregunta: "En el hígado:", opciones: ["a. Entra la vena porta", "b. Sale la arteria hepática", "c. Entra la arteria hepática", "d. Sale la vena hepática"], correcta: 2 },
    { id: 72, pregunta: "¿Cuál de las siguientes no es una función del hígado?", opciones: ["a. Segregar la bilis", "b. Efectúa una serie de etapas importantes en el metabolismo de proteínas, grasas y carbohidratos", "c. Almacena glucógeno, lípidos, hierro, vitamina A, B12 y D", "d. Todas son correctas"], correcta: 3 },
    { id: 73, pregunta: "El conducto a través del cual la vesícula expulsa la bilis al duodeno se llama:", opciones: ["a. Esfínter de Oddi", "b. Cístico", "c. Conducto vesicular", "d. Conducto pancreático"], correcta: 2 },
    { id: 74, pregunta: "La inflamación de la pared interna de la vesícula se llama:", opciones: ["a. Colicititis", "b. Colelitiasis", "c. Colédoco", "d. Ictericia"], correcta: 0 },
    { id: 75, pregunta: "Los islotes de Langerhans se encuentran en:", opciones: ["a. El hígado", "b. La vesícula biliar", "c. El duodeno", "d. El páncreas"], correcta: 3 },
    { id: 76, pregunta: "La insulina es segregada por:", opciones: ["a. Las células α del páncreas", "b. Las células β del páncreas", "c. Las células γ y δ del páncreas", "d. Ninguna es correcta"], correcta: 1 },
    { id: 77, pregunta: "¿Cuál de las siguientes afirmaciones es correcta?", opciones: ["a. La insulina aumenta la concentración de glucosa en sangre", "b. El glucagón disminuye la concentración de glucosa en sangre", "c. El glucagón aumenta la concentración de glucosa en sangre", "d. A y b son correctas"], correcta: 2 },
    { id: 78, pregunta: "En el estómago se segrega:", opciones: ["a. Ácido clorhídrico", "b. Pepsinógeno", "c. Glucagón", "d. A y b son correctas"], correcta: 3 },
    { id: 79, pregunta: "El páncreas segrega:", opciones: ["a. Insulina y glucagón", "b. Amilasa y lipasa", "c. Tripsina-quimiotripsina", "d. Todas son correctas"], correcta: 3 },
    { id: 80, pregunta: "El conducto que conecta con el duodeno para llevar la bilis se llama:", opciones: ["a. Cístico", "b. Colédoco", "c. Conducto pancreático", "d. Conducto duodenal"], correcta: 1 },
    { id: 81, pregunta: "La lactasa y la sacarasa son segregadas por:", opciones: ["a. El hígado", "b. El páncreas", "c. El estómago", "d. Las células de la mucosa intestinal"], correcta: 3 },
    { id: 82, pregunta: "Los nervios que conducen el impulso nervioso desde los receptores nerviosos hasta los centros se llaman:", opciones: ["a. Motores", "b. Aferentes", "c. Eferentes", "d. A y b"], correcta: 1 },
    { id: 83, pregunta: "El sistema nervioso central se divide en:", opciones: ["a. Encéfalo y médula", "b. Simpático y parasimpático", "c. Periférico y autónomo", "d. Ninguna es correcta"], correcta: 0 },
    { id: 84, pregunta: "Tanto el encéfalo como la médula espinal están recubiertos por capas protectoras:", opciones: ["a. Capa ósea y capa meníngea", "b. Duramadre, aracnoides y piamadre", "c. Cerebelo y bulbo", "d. Cerebelo y circunvoluciones"], correcta: 1 },
    { id: 85, pregunta: "El líquido cefalorraquídeo circula por:", opciones: ["a. El espacio subaracnoideo", "b. Por debajo de la piamadre", "c. El espacio subdural", "d. El espacio epidural"], correcta: 0 },
    { id: 86, pregunta: "El espacio subaracnoideo se encuentra:", opciones: ["a. Entre la piamadre y la aracnoides", "b. Entre la duramadre y la aracnoides", "c. Entre la piamadre y la duramadre", "d. Por debajo de la piamadre"], correcta: 0 },
    { id: 87, pregunta: "Pegada al cerebro se encuentra:", opciones: ["a. La duramadre", "b. La aracnoides", "c. La piamadre", "d. El espacio subaracnoideo"], correcta: 2 },
    { id: 88, pregunta: "¿Cuántos tipos de fibras presenta el cerebro?", opciones: ["a. Ascendentes y sensitivas", "b. Descendentes y motoras", "c. Motoras y ascendentes", "d. A y b"], correcta: 3 },
    { id: 89, pregunta: "Los centros de los reflejos vitales se encuentran en:", opciones: ["a. El cerebro", "b. El cerebelo", "c. El bulbo raquídeo", "d. La médula"], correcta: 2 },
    { id: 90, pregunta: "La coordinación de los movimientos musculares uniformes y precisos principalmente está a cargo de:", opciones: ["a. El cerebro", "b. El cerebelo", "c. El bulbo raquídeo", "d. La médula"], correcta: 1 },
    { id: 91, pregunta: "La regulación del equilibrio a nivel central se encuentra localizada en:", opciones: ["a. El cerebro", "b. El cerebelo", "c. El bulbo raquídeo", "d. La médula"], correcta: 1 },
    { id: 92, pregunta: "El extremo de la médula suele coincidir con:", opciones: ["a. La primera vértebra lumbar", "b. La segunda vértebra lumbar", "c. La cuarta vértebra lumbar", "d. El sacro"], correcta: 1 },
    { id: 93, pregunta: "El par craneal IV es el nervio:", opciones: ["a. Óptico", "b. Facial", "c. Auditivo", "d. Oculomotor patético"], correcta: 3 },
    { id: 94, pregunta: "El par craneal II es el nervio:", opciones: ["a. Óptico", "b. Facial", "c. Auditivo", "d. Glosofaríngeo"], correcta: 0 },
    { id: 95, pregunta: "La fecundación se suele producir habitualmente en:", opciones: ["a. La vagina", "b. El cuerpo del útero", "c. El ovario", "d. Las trompas"], correcta: 3 },
    { id: 96, pregunta: "La parte superior del útero se llama:", opciones: ["a. Cuello", "b. Hocico de tenca", "c. Fondo", "d. Fondo de saco de Douglas"], correcta: 2 },
    { id: 97, pregunta: "La primera fase del ciclo menstrual se denomina:", opciones: ["a. Fase luteínica", "b. Fase foliculínica", "c. Ovulación", "d. Corion"], correcta: 1 },
    { id: 98, pregunta: "El ciclo menstrual comienza:", opciones: ["a. Con la ovulación", "b. Con la menstruación", "c. Con la fase luteínica", "d. B y c"], correcta: 1 },
    { id: 99, pregunta: "¿A partir de qué momento el embrión se convierte en feto?", opciones: ["a. A partir del 2º mes", "b. A partir del 3er mes", "c. A partir de que comienza a moverse", "d. A partir de 8º mes"], correcta: 1 },
    { id: 100, pregunta: "La dilatación consiste en:", opciones: ["a. Contracciones rítmicas cada tres minutos", "b. El borramiento del cuello uterino", "c. La administración de oxitocina a la mujer", "d. Ninguna es correcta"], correcta: 1 }




  
    
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
