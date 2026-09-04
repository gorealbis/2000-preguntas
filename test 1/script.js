// BANCO DE PREGUNTAS DEL TEST 1 (Preguntas 1 a 20)
const questions = [
    { id: 1, pregunta: "En el proceso de formación de úlceras de decúbito, la isquemia se produce después de ocurrir:", opciones: ["a. La presión prolongada de la zona", "b. El dolor", "c. El enrojecimiento de la piel", "d. La ruptura de la piel"], correcta: 0 },
    { id: 2, pregunta: "Los movimientos que se deben realizar al practicar un masaje pueden ser:", opciones: ["a. Lineales", "b. Circulares", "c. En forma de pellizco", "d. A, B y C"], correcta: 3 },
    { id: 3, pregunta: "La parte del estómago denominada píloro comunica:", opciones: ["a. El duodeno con el fundus", "b. El cardias con el estómago", "c. El estómago con el duodeno", "d. El fundus con el antro"], correcta: 2 },
    { id: 4, pregunta: "La higiene de los ojos deberá realizarse de la siguiente forma:", opciones: ["a. Desde la mejilla hacia la nariz", "b. Desde el exterior al lagrimal", "c. Desde el lagrimal hacia el exterior", "d. Indistintamente"], correcta: 2 },
    { id: 5, pregunta: "Las zonas de mayor incidence de úlceras en los pacientes que habitualmente se encuentran en posición de decúbito prono son:", opciones: ["a. Tobillos, rodillas, costilla y hombros", "b. Glúteos, codos, talones y nuca", "c. Dedos del pie, codos, costillas y nuca", "d. Dedos del pie, rodillas, hombros y mejillas"], correcta: 3 },
    { id: 6, pregunta: "La temperatura ambiente idónea para realizar la higiene del paciente encamado es aproximadamente:", opciones: ["a. De 25° C", "b. De 20° C", "c. De 28° C", "d. Todas ellas"], correcta: 0 },
    { id: 7, pregunta: "Un banco de pequeño tamaño que se utiliza para apoyo se denomina:", opciones: ["a. Escan", "b. Prono", "c. Escabel", "d. Corva"], correcta: 2 },
    { id: 8, pregunta: "La fructosa es un glúcido:", opciones: ["a. Polisacárido", "b. Disacárido", "c. Monosacárido", "d. Multisacárido"], correcta: 2 },
    { id: 9, pregunta: "En el hígado de los animales, leche y huevos, se encuentran cantidades importantes de vitaminas:", opciones: ["a. B2", "b. B1", "c. B6", "d. B12"], correcta: 3 },
    { id: 10, pregunta: "Las bacterias que tiene forma de bastón se llaman:", opciones: ["a. Cocos", "b. Bacilos", "c. Cocobacilos", "d. Vibrios"], correcta: 1 },
    { id: 11, pregunta: "A la unidad funcional del riñón se la denomina:", opciones: ["a. Cáliz", "b. Nefrona", "c. Túbulo", "d. Glomérulo"], correcta: 1 },
    { id: 12, pregunta: "Para ayudar a un paciente que está sentado en un sillón a ponerse de pie deberemos (señale la respuesta falsa):", opciones: ["a. Proteger el cuerpo del paciente con el nuestro", "b. Introducir la bolsa recolectora de orina en el bolsillo de su albornoz", "c. Pedirle que ponga uno de los brazos alrededor de nuestra cintura", "d. Coger al paciente por debajo de los brazos"], correcta: 1 },
    { id: 13, pregunta: "Si se va a realizar el movimiento de un paciente entre varias personas, será imprescindible que:", opciones: ["a. Todos ellos realicen el movimiento a una misma altura", "b. Lo hayan realizado varias veces antes", "c. Una de las personas dirija la maniobra", "d. Debe efectuar el movimiento rápidamente"], correcta: 0 },
    { id: 14, pregunta: "De las actividades siguientes ¿cuáles deberá realizar de forma previa a la movilización de un enfermo para un traslado interno?", opciones: ["a. Explicar lo que se le va a hacer y proteger cualquier sistema de tubos", "b. Lavarse las manos y explicar al enfermo lo que se le va a hacer", "c. Cerciorarse que la movilización no está contraindicada y lavarse las manos", "d. Todas ellas"], correcta: 3 },
    { id: 15, pregunta: "En condiciones normales la cantidad aproximada de diuresis en 24 h es:", opciones: ["a. De 1,0 l", "b. De 2,2 l", "c. De 1,5 l", "d. De 2,5 l"], correcta: 2 },
    { id: 16, pregunta: "Una parte importante del trabajo de la auxiliar de enfermería es:", opciones: ["a. Acompañar enfermos incapacitados", "b. Levantar, mover y transportar enfermos incapacitados", "c. Levantar y acompañar enfermos incapacitados", "d. Lavar y acompañar enfermos incapacitados"], correcta: 1 },
    { id: 17, pregunta: "El somier y funda del colchón normalmente se limpian con:", opciones: ["a. Solución de Glutaraldehido 2%", "b. Agua y povidona", "c. Agua y lejía", "d. Todas ellas están igual de indicadas"], correcta: 2 },
    { id: 18, pregunta: "Cuando la eliminación de orina en 24 h. Es de hasta 500 cc., diremos que nos encontramos ante un paciente con:", opciones: ["a. Anuria", "b. Poliuria", "c. Oliguria", "d. Retención urinaria"], correcta: 2 },
    { id: 19, pregunta: "Al conducto terminal de las vías urinarias, se le denomina:", opciones: ["a. Uretra", "b. Uréter", "c. Ureteros", "d. Glomérulo"], correcta: 0 },
    { id: 20, pregunta: "Una cama abierta en abanico lateral nos hará pensar que se espera efectuar una recepción de un paciente:", opciones: ["a. Quirúrgico", "b. Sin información específica previa", "c. Ambulatorio", "d. Todas ellas"], correcta: 0 },
    { id: 21, pregunta: "Para hacer la cama con la mayor comodidad posible, la sábana bajera se doblará:", opciones: ["a. Con el revés hacia dentro y a lo ancho", "b. Con el revés hacia fuera y a lo ancho", "c. A lo largo y con el derecho hacia dentro", "d. A lo largo y con el revés hacia dentro"], correcta: 2 },
    { id: 22, pregunta: "El pulmón derecho se encuentra dividido en:", opciones: ["a. Lóbulo medio inferior", "b. Lóbulo superior, medio e inferior", "c. Lóbulo superior e inferior", "d. Lóbulo derecho, medio e izquierdo"], correcta: 1 },
    { id: 23, pregunta: "Esguince es:", opciones: ["a. Traumatismo cerrado que se manifiesta con rotura o distensión del aparato cápsulo-ligamentoso", "b. Desplazamiento de un hueso de su posición normal", "c. La lesión que no produce ni rotura del aparato cápsulo-ligamentoso ni fractura de los extremos óseos", "d. Abolición de movimientos por causa articular"], correcta: 2 },
    { id: 24, pregunta: "Una pieza de lencería de cama es el hule impermeable y sus dimensiones aproximadas son:", opciones: ["a. De 0,5 por 1m", "b. De 0,9 por 1,15 m", "c. De 1,3 por 2 m", "d. De 1,9 por 2,5 m"], correcta: 1 },
    { id: 25, pregunta: "No es cierto que la esterilización con calor seco se realice a:", opciones: ["a. 140° C durante 1 hora", "b. 160° C durante 135 minutos", "c. 180° C durante 50 minutos", "d. 120° C durante 10 minutos."], correcta: 3 },
    { id: 26, pregunta: "Se llaman centinelas de cama:", opciones: ["a. Timbre o interruptor de la luz", "b. Respaldo regulable que permite colocar al paciente en la posición de Fowler", "c. Soporte que se coloca para aliviar el peso de la ropa de cama", "d. Almohadillas de polietileno hinchadas con aire"], correcta: 3 },
    { id: 27, pregunta: "Básicamente, la cama de judet tiene las siguientes características específicas:", opciones: ["a. Marco por encima de la cama, que sujeta varias anillas", "b. Marco por debajo de la cama para accesorios", "c. Marco alrededor de la cama (barras de contención)", "d. Marco o armazón para volteo"], correcta: 0 },
    { id: 28, pregunta: "¿Cuál de los siguientes procedimientos no se utiliza para esterilizar?", opciones: ["a. Formol", "b. Rayos Ultravioleta", "c. Flameado", "d. Fenol"], correcta: 1 },
    { id: 29, pregunta: "Angina de pecho es un cuadro clínico que:", opciones: ["a. Aparece en reposo y dura horas cediendo con el esfuerzo", "b. Presenta una severa y mantenida isquemia coronaria", "c. Aparece con el esfuerzo y desaparece en segundos o minutos con el reposo y vasodilatadores coronarios", "d. Se acompaña siempre de manifestaciones vegetativas o shock"], correcta: 2 },
    { id: 30, pregunta: "Los isótopos son:", opciones: ["a. Cátodos capaces de emitir calor y electricidad", "b. Átomos capaces de emitir radicaciones, campos magnéticos y eléctricos", "c. Átomos capaces de emitir radiaciones", "d. Cátodos eléctricos"], correcta: 1 },
    { id: 31, pregunta: "Si usted acompaña a un paciente al servicio de radiología y observa en un cartel el símbolo de radiación de color amarillo, interpretará que está en zona de:", opciones: ["a. Radiación menor", "b. Mayor riesgo de radiación", "c. Alta radiación", "d. Menor radiación"], correcta: 1 },
    { id: 32, pregunta: "El control individualizado de las radiaciones que recibe un trabajador sanitario en un servicio de rayos x, se realiza a través de un dosímetro que deberá estar:", opciones: ["a. En los pasillos centrales del servicio", "b. En el interior de la sala", "c. En la parte superior de cada aparato", "d. En el bolsillo del uniforme"], correcta: 3 },
    { id: 33, pregunta: "La unidad que nos indicará el grado de vibraciones en una unidad hospitalaria será:", opciones: ["a. Vrad", "b. Lux", "c. Pal", "d. Decibelio"], correcta: 3 },
    { id: 34, pregunta: "Señale la respuesta falsa. Son causa que eximen del secreto profesional:", opciones: ["a. El perjuicio de un tercero", "b. El perjuicio al propio médico o sanitario", "c. La exigencia legal", "d. El estado de gravedad del paciente"], correcta: 3 },
    { id: 35, pregunta: "Cuando en las condiciones ambientales de una unidad de hospitalización el aire tiene una humedad relativa del 50% será previsible que:", opciones: ["a. Se favorezcan la transmisión de enfermedades bucolaringeas", "b. Se agraven las enfermedades cardíacas", "c. Se agraven las enfermedades reumáticas", "d. Todas ellas"], correcta: 3 },
    { id: 36, pregunta: "¿Cuál de las siguientes enfermedades infecciosas no corresponde al grupo de declaración universal?", opciones: ["a. El cólera", "b. La fiebre amarilla", "c. El tifus exantemático", "d. La sepsis"], correcta: 3 },
    { id: 37, pregunta: "Señale la respuesta falsa. Los huesos anatómicamente se dividen en:", opciones: ["a. Cortos", "b. Largos", "c. Irregulares", "d. Regulares"], correcta: 3 },
    { id: 41, pregunta: "Una de las características del frío sobre el organismo es:", opciones: ["a. Su efecto anestésico", "b. Su efecto antihemorrágico", "c. Su efecto astringente", "d. Todas son características del frío"], correcta: 3 },
    { id: 42, pregunta: "La dieta hiperproteica está recomendada para:", opciones: ["a. Pacientes con diabetes Mellitus", "b. Pacientes con insuficiencia hepática", "c. Pacientes con falta de proteínas en los tejidos y sangre", "d. Personas muy delgadas"], correcta: 2 },
    { id: 43, pregunta: "Los alimentos catalizadores o reguladores son los formados por:", opciones: ["a. Leche", "b. Vitaminas", "c. Minerales", "d. La b y c son correctas"], correcta: 3 },
    { id: 44, pregunta: "En el baño de un paciente la temperatura del agua debe estar a:", opciones: ["a. 40° C", "b. 43,3°-46,1° C", "c. 36°,5-37° C", "d. 41,2° -43,5° C"], correcta: 0 },
    { id: 45, pregunta: "Una de las causas de la angina de pecho es:", opciones: ["a. El tabaco", "b. El espasmo coronario", "c. El infarto de miocardio", "d. Todas son correctas"], correcta: 1 },
    { id: 46, pregunta: "Una enfermedad del sistema eritrocitario es:", opciones: ["a. Anemias", "b. Leucemias", "c. Trombopatias", "d. Hemofilia"], correcta: 0 },
    { id: 47, pregunta: "A la diabetes glucosúrica se la denomina también:", opciones: ["a. Diabetes Mellitus", "b. Diabetes sacarina", "c. Diabetes juvenil", "d. La a y b son correctas"], correcta: 3 },
    { id: 48, pregunta: "Una de las acciones del sistema nervioso simpático es:", opciones: ["a. Aumento de los movimientos y secreciones intestinales", "b. Disminución de la presión arterial", "c. Dilatación de los bronquios", "d. Todas son correctas"], correcta: 2 },
    { id: 49, pregunta: "Se considera que una persona está en una segunda fase de la intoxicación etílica cuando el grado de alcoholemia oscila entre:", opciones: ["a. 0,5-0,8 g./litro", "b. 1,5-5 g./litro", "c. 0,8-1,5 g./litro", "d. 0,3-1,6 g./litro"], correcta: 2 },
    { id: 50, pregunta: "La cama de Judet es:", opciones: ["a. La cama ortopédica", "b. La cama articulada", "c. La cama metálica de somier rígido", "d. Todas son válidas"], correcta: 0 },
    { id: 51, pregunta: "¿Cuántos ATS son necesarios en un equipo de enfermería?", opciones: ["a. 10", "b. 11", "c. 15", "d. 6"], correcta: 0 },
    { id: 52, pregunta: "Se considera zona de tránsito a:", opciones: ["a. Pasillos", "b. Ascensores", "c. La a y b son correctas", "d. Ninguna es correcta"], correcta: 2 },
    { id: 53, pregunta: "En la organización del hospital hay una división en departamentos. ¿Cuántos son estos?", opciones: ["a. 4", "b. 3", "c. 6", "d. 2"], correcta: 1 },
    { id: 54, pregunta: "Los servicios médico hospitalarios se dividen en:", opciones: ["a. Especialidades", "b. Servicios médico-quirúrgicos", "c. Servicios centrales", "d. Todas son correctas"], correcta: 2 },
    { id: 55, pregunta: "Cuando el electrocardiograma es plano se ha producido un cese de:", opciones: ["a. De la función cardíaca", "b. De la función respiratoria", "c. De la función cerebral", "d. Todas son correctas"], correcta: 0 },
    { id: 56, pregunta: "Las manchas extensas de color rojo-violáceo que aparecen en los cadáveres se denominan:", opciones: ["a. Livideces", "b. Livideces cadavéricas", "c. Livor mortis", "d. La b y c son correctas"], correcta: 3 },
    { id: 57, pregunta: "La agonía puede ser:", opciones: ["a. Lúcida", "b. Con pulso débil", "c. Comatosa", "d. La a y c son correctas"], correcta: 3 },
    { id: 58, pregunta: "¿Cuándo se le empiezan a dar al lactante aporte calórico en forma de hidratos de carbono?", opciones: ["a. Del 4º ó 8º mes", "b. Del 5º ó 6º mes", "c. Del 4º o 5º mes", "d. Ninguna es correcta"], correcta: 1 },
    { id: 59, pregunta: "El porcentaje de proteínas de la leche materna es de:", opciones: ["a. 1,2 gramos por 100 ml", "b. 1,3 gramos por 100 ml", "c. 1,4 gramos por 100 ml", "d. 1,5 gramos por 100 ml"], correcta: 0 },
    { id: 60, pregunta: "El perímetro torácico de un recién nacido es de:", opciones: ["a. 32-34 cm", "b. 34-36 cm", "c. 35-36 cm", "d. 33-35 cm"], correcta: 0 },
    { id: 61, pregunta: "Se considera a un recién nacido de bajo peso o prematuro cuando:", opciones: ["a. Con peso por de bajo de 2.500 gramos", "b. Edad de gestación inferior a 259 días", "c. La a y b con correctas", "d. Ninguna es correcta"], correcta: 2 },
    { id: 62, pregunta: "La sonda de Couvelaire se utiliza con:", opciones: ["a. Mujeres", "b. Varones", "c. Niños", "d. Todas son correctas"], correcta: 1 },
    { id: 63, pregunta: "La sonda que posee doble luz o incluso triple es la de:", opciones: ["a. Mallecot", "b. Pezzer", "c. Foley", "d. Nelaton"], correcta: 2 },
    { id: 64, pregunta: "La respuesta del enfermo ante su nueva situación como paciente es:", opciones: ["a. De ansiedad", "b. De angustia", "c. Emotiva", "d. La a y b son correctas"], correcta: 3 },
    { id: 65, pregunta: "El método de Silvester no se debe emplear:", opciones: ["a. En una persona con fractura de columna", "b. En una persona con fractura de las vértebras", "c. En una persona con fractura de los miembros superiores", "d. Todas son correctas"], correcta: 3 },
    { id: 66, pregunta: "Cuando se produce una lesión articular en la que hay pérdida de contacto con las superficies articulares y lesión en los ligamentos, se dice que se ha producido:", opciones: ["a. Un esguince", "b. Una luxación", "c. Un traumatismo físico", "d. Una rotura"], correcta: 1 },
    { id: 67, pregunta: "El hombre ¿puede ser fuente de infección?", opciones: ["a. Si", "b. No", "c. Sí, como enfermo o sin presentar la patología de la infección", "d. Sólo como portador"], correcta: 2 },
    { id: 68, pregunta: "Según su composición, la vacunación puede ser:", opciones: ["a. Polivalente", "b. Monovalente", "c. Combinada", "d. Todas son correctas"], correcta: 3 },
    { id: 69, pregunta: "El saturnismo es:", opciones: ["a. Una intoxicación", "b. Una intoxicación por arsénico", "c. Una intoxicación por plomo", "d. Una crisis neurótica"], correcta: 2 },
    { id: 70, pregunta: "Otra forma de denominar al cannabis es:", opciones: ["a. Griffa", "b. Kifi", "c. Hachis", "d. Todas son correctas"], correcta: 3 },
    { id: 71, pregunta: "Cuando hay un excess de pigmento melánico en la piel se denomina:", opciones: ["a. Telangiectasia", "b. Hiperpigmentación", "c. Hipertelangiectasia", "d. Hemocromatosis"], correcta: 1 },
    { id: 72, pregunta: "La neurosis puede ser:", opciones: ["a. Psicótica", "b. Esquizofrénica", "c. Neurótica", "d. Ninguna es correcta"], correcta: 3 },
    { id: 73, pregunta: "La blefaritis es:", opciones: ["a. Inflamación de la uvea", "b. Inflamación de la capa externa del ojo", "c. Inflamación de los párpados", "d. Todas son correctas"], correcta: 2 },
    { id: 74, pregunta: "¿Qué parte del cerebro controla la sensación visual?", opciones: ["a. Lóbulo temporal", "b. Lóbulo parietal", "c. Lóbulo frontal", "d. Lóbulo occipital"], correcta: 3 },
    { id: 75, pregunta: "Las fibras de los nervios pueden ser:", opciones: ["a. Sensitivas", "b. Motoras", "c. Motoras vegetativas", "d. Todas son correctas"], correcta: 3 },
    { id: 76, pregunta: "La progesterona es:", opciones: ["a. Una proteina", "b. Una hormona femenina", "c. Una hormona", "d. Una hormona masculina"], correcta: 1 },
    { id: 77, pregunta: "Los tumores benignos del útero se denominan:", opciones: ["a. Miomas", "b. Sarcomas", "c. Ciomas", "d. Todas son correctas"], correcta: 0 },
    { id: 78, pregunta: "El conducto que recoge toda la linfa de las extremidades inferiores, abdomen, brazo izquierdo y parte izquierda del torax, cuello y cabeza se llama:", opciones: ["a. Conducto linfático derecho", "b. Conducto linfático izquierdo", "c. Conducto torácico", "d. No existe tal conducto"], correcta: 2 },
    { id: 79, pregunta: "Los monocitos se incluyen dentro de:", opciones: ["a. Basófilos", "b. Granulocitos", "c. Polinucleares", "d. Agranulocitos"], correcta: 3 },
    { id: 80, pregunta: "La capa de la pared del corazón que está constituida por tejido muscular estriado se llama:", opciones: ["a. Endocardio", "b. Riocardio", "c. Pericardio", "d. Miocardio"], correcta: 3 },
    { id: 81, pregunta: "La unidad estructural y funcional del riñón se denomina:", opciones: ["a. Nefrona", "b. Nefrina", "c. Médula renal", "d. Ninguna es correcta"], correcta: 0 },
    { id: 82, pregunta: "El peritoneo es:", opciones: ["a. La capa externa del estómago", "b. La capa interna del esófago", "c. La capa intermedia del estómago", "d. La cavidad gástrica"], correcta: 0 },
    { id: 83, pregunta: "A la eliminación de sangre por la boca se la denomina:", opciones: ["a. Hemoptisis", "b. Hemoptiasis", "c. Hemólisis", "d. Cianosis"], correcta: 0 },
    { id: 84, pregunta: "El tejido que tiene como función proteger es:", opciones: ["a. El muscular", "b. El epitelial", "c. El conectivo", "d. Ninguna es correcta"], correcta: 1 },
    { id: 85, pregunta: "Los osteoblastos:", opciones: ["a. Son células", "b. Son células jóvenes con función de formar el tejido óseo", "c. Son células óseas maduras", "d. Tienen como función destruir el tejido óseo"], correcta: 1 },
    { id: 86, pregunta: "La paroditis es una enfermedad que se da en:", opciones: ["a. En los adultos", "b. En la edad escolar", "c. En la vejez", "d. No existe tal enfermedad"], correcta: 1 },
    { id: 87, pregunta: "El desinfectante que se utiliza para desinfectar aparatos de endoscopia o respiradores es el:", opciones: ["a. Aldehído glutárico", "b. Tensoactivo", "c. Yodoforos", "d. Aldehidos"], correcta: 0 },
    { id: 88, pregunta: "Cuando se produce una elevación de la cantidad de dióxido de carbono en la sangre por encima de los valores normales se le denomina:", opciones: ["a. Hipocapnia", "b. Hipoxia", "c. Hipercapnia", "d. Fiperoxia"], correcta: 2 },
    { id: 89, pregunta: "La aplicación de remojos calientes o inmersiones en un paciente, se utiliza para:", opciones: ["a. Alivio del dolor", "b. Limpieza de heridas y quemaduras", "c. Aceleración del proceso de supuración", "d. La b y c son correctas"], correcta: 3 },
    { id: 90, pregunta: "Cuando un paciente ha estado mucho tiempo en decúbito prono puede aparecerle una úlcera en:", opciones: ["a. La rodilla", "b. Dedos de los pies", "c. Mejilla", "d. La b y c son correctas"], correcta: 3 },
    { id: 91, pregunta: "El enema estimulante está dentro del grupo de los enemas:", opciones: ["a. De aceite", "b. Medicamentosos", "c. Comerciales desechables", "d. Salinos"], correcta: 1 },
    { id: 92, pregunta: "El componente nutricional que tiene una función plástica es:", opciones: ["a. Los hidratos de carbono", "b. Los glúcidos", "c. Las proteínas", "d. Todas son correctas"], correcta: 2 },
    { id: 93, pregunta: "La posición en la que el paciente está en decúbito supino, levantado de la cama 50 cm. y la espalda apoyada en la cama formando un ángulo de 45° es:", opciones: ["a. La posición de Fowler", "b. La posición de Trendelenburg", "c. Posición de Trendelenbrug inversa", "d. Posición de Rose"], correcta: 0 },
    { id: 94, pregunta: "Cuando hay que levantar a un paciente que está inmovilizado ¿qué debe hacer el auxiliar de enfermería?", opciones: ["a. Quitar la almohada y cada auxiliar colocado a un lado de la cama gira al paciente", "b. Levantar al paciente con cuidado y colocarlo en la posición deseada", "c. Poner al paciente girado a la izquierda y sentarlo en la cama", "d. Ninguna es correcta"], correcta: 1 },
    { id: 95, pregunta: "El porcentaje de agua en la orina es de:", opciones: ["a. 90%", "b. 90-95%", "c. 95%", "d. 80-85%"], correcta: 1 },
    { id: 96, pregunta: "Dentro de la higiene y aseos, la conservación en buen estado de los tejidos cutáneos es:", opciones: ["a. Un fin del auxiliar de enfermería", "b. Una labor del auxiliar de enfermería", "c. Una meta del auxiliar de enfermería", "d. No es una labor del auxiliar de enfermería"], correcta: 2 },
    { id: 97, pregunta: "Cuando la coloración de la piel es azulada indica que hay:", opciones: ["a. Cianosis", "b. Enfermedad de Addison", "c. Dificultades respiratorias en cardiacos", "d. La a y c son correctas"], correcta: 2 },
    { id: 98, pregunta: "Una de las funciones del auxiliar de enfermería para el enfermo es:", opciones: ["a. Preparar al enfermo para su traslado", "b. Distribuir y administrar comidas", "c. Ayudar al enfermo a vestirse", "d. Todas son correctas"], correcta: 0 },
    { id: 99, pregunta: "Si debemos proceder a atender a un paciente que se encuentra con emesis, sabremos que se trata de:", opciones: ["a. Un vómito", "b. Una hemorragia quirúrgica", "c. Unas deposiciones sanguinolentas", "d. Una cura quirúrgica"], correcta: 0 },
    { id: 100, pregunta: "Para tomar la temperatura bucal, se debe mantener el termómetro sublingualmente los minutos siguientes:", opciones: ["a. Inferior a 3", "b. Superior a 6", "c. De 2 a 3", "d. De 4 a 6"], correcta: 3 }




];

// --- LÓGICA DEL SIMULADOR (No modificar) ---
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
