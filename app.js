// VARIABLES GLOBALES DEL SISTEMA
let latitudActual = ""; 
let longitudActual = ""; 
let nombreServidorDeducido = "";

// BASE DE DATOS DE EJEMPLO (Asegúrate de tener tus CURPs reales aquí)
const BASE_SERVIDORES = {
            "AACG640516MCLLRD01": "ALVARADO CORDERO MARIA GUADALUPE",
        "NAST690922MDGVXM09": "NAVARRETE SIAÑEZ TOMASA",
        "MEAI750720MDGDRS09": "MEDINA ARELLANO MARIA ISABEL",
        "PIDR730501MDGLRS00": "PILLADO DURAN ROSA MARIA",
"PUTJ701119MDGGRN04": "PUGA TORRES JUANA MARIA",
"AAGS650227MDGNLN04": "ANDRADE GALLEGOS SANDRA GABRIELA",
"AECH920906MDGRSL08": "ARELLANES CASTRO HILDA ARELY",
"AUME921203MDGRND04": "ARGUIJO MONTAÑEZ MARIA EDITH",
"AEOP700407MDGRXT08": "ARMENDARIZ DE LA O PETRA ",
"AEBT950202MDGRNN01": "ARREDONDO BUENO TANIA",
"AEGC860822MDGRNR01": "ARREDONDO GONZALEZ CARMEN ESPERANZA",
"AEHS770422MCLRRN07": "ARREOLA HERNANDEZ SANDRA LETICIA",
"AOGS731028MCLRNN06": "ARZOLA GONZALEZ SONIA",
"AAMR590803HDGVCB02": "AVALOS MACHADO ROBERTO",
"AAZS921017MDGYVL03": "AYALA ZAVALA SELMA MARGARITA",
"BAGH020602HDGRRCA0": "BARBOZA GARCIA HECTOR JAIR",
"BAML941107HDGRRS09": "BARCENAS MARCHAND LUIS ERNESTO",
"BAAA830419HDGRNN02": "BARRAZA ANDRADE ANTONIO",
"BARF730707HDGLRL03": "BARRAZA REYES FERMIN",
"BAPA670424MDGRZL01": "BARRETERO PIZAÑA ALMA ELIA",
        "BUMT890307MDGNDM02": "BUENO MEDINA MA TOMASA",
"BERY830909MDGCDS08": "BECERRA RODRIGUEZ YESICA",
"BUBL821105HDGSSS07": "BUSTAMANTE BUSTAMANTE LUIS CARLOS",
"BUCA990525MDGSRN01": "BUSTAMANTE CORDOVA ANA JHOSSEMIN",
"BUCM650916MDGSRR07": "BUSTAMANTES CORDOVA MARTHA IMELDA",
"CXCA660709MDGBSN01": "CABRALES CASTAÑEDA MARIA DE LOS ANGELES",
"CACG830625MDGRLL00": "CARRERA CALDERON GUILLERMA GUADALUPE",
"CAPI691204MDGRSR04": "CARRETE POSADA IRMA ROCIO",
"CARC790822MDGRDT00": "CARRETE RODRIGUEZ CATALINA",
"CAHR830816MDGSLS00": "CASTOR HOLGUIN ROSA IRENE",
"CAAE910530MDGSLR04": "CASTRO ALVAREZ ERIKA GUADALUPE",
        "CXGA680320HDGSRL06": "CASTRO GARCIA JOSE ALFREDO",
"CASV020905HCHSLCA3": "CASTRO SALCEDO VICTOR MANUEL",
"CAOJ791217MCLHCS01": "CHACON OCHOA MARIA DE JESUS",
"CORJ630506HCLMMS03": "COMPEAN RAMIREZ JESUS",
"CXLA921207MCHRYN00": "CORCHADO LEYVA ANA KAREN",
"COAM950819HDGRLR08": "CORDOVA ALCAZAR MARCO ANTONIO",
"COCC980119MDGRRR06": "CORTEZ CERVANTES CAROLINA",
"CURB700325MCHVSR06": "CUEVAS RIOS BERTHA ALICIA",
"DATB950421MCHVVR03": "DAVILA TOVAR BERENICE",
"SASL920713MDGNCY02": "DE SANTIAGO SAUCEDO LAEYDY KARINA",
"DINE820731MDGZVS00": "DIAZ NAVARRETE ESPERANZA",
"DITR851118HOCZRM07": "DIAZ TRUJILLO RAMON DE JESUS",
"DOCS600411HDGMRR08": "DOMINGUEZ CORCHADO SERGIO ALBERTO",
"EIRI840701MCLLYV07": "ELIZALDE REYES IVETTE SARAI",
"EUMN780514MDGSSN08": "ESQUIVEL MASCORRO NANCY ACELA",
"EAMM831221HDGSLG02": "ESTRADA MOLINA MIGUEL DE JESUS",
"EUXM610213MCHZXY08": "EZQUEDA MARIA MAYELA",
"FASR950828MDGVRQ09": "FAVELA SERRANO RAQUEL",
"FIGE871118MDGRRL02": "FIERRO GARCIA MARIA ELIZABETH",
"FILL850820MDGGPR07": "FIGUEROA LOPEZ LAURA YANIRA",
"FOAM730906MCLLDR08": "FLORES ADAME MARGARITA",
"FOTL920107MDGLRS07": "FLORES TORRES LESLY YAMILETH",
"FUHC951110MCHNRT08": "FUENTES HERNANDEZ CITLALI SARAHI",
"GARL790916MDGNMC09": "GANDARILLA RAMIREZ LUCILA",
"GAEJ770121HDGRNN00": "GARCIA ENCERRADO JUAN JOSE",
"GAEG960627MDGRSD07": "GARCIA ESPINO GUADALUPE DEL SOCORRO",
"GUVG951127MDGRLB06": "GUERECA VILLAGRANA GABRIELA",
"GUPF940515HDGLRL03": "GUILLEN PEREZ FELIPE",
"HECB870318MDGRMR06": "HERNANDEZ CAMPOS BERA TOMASA",
"HEMR651102HDGRXM09": "HERNANDEZ MUÑOZ JOSE RAMON",
"HEOM840503MDGRRR01": "HERNANDEZ ORTIZ MARY CRUZ",
"HEPL950226HZSRNS07": "HERNANDEZ PUENTES LUIS AGUSTIN",
"HETD950530HCHRRG03": "HERNANDEZ TORRES DIEGO ALFONSO",
"HESR870605MDGRNC07": "HERNANDEZ SANTOYO ROCIO",
"JALL891212HDGCPS02": "JACQUEZ LOPEZ LUIS RENE",
"LEBM670913MDGLCR07": "LEAL BECERRA MARGARITA",
"LIHJ930427HCLRRS02": "LIRA HERNANDEZ JESUS ANTONIO",
"LADG790906MDGLZD05": "LLAMAS DIAZ MARIA GUADALUPE",
"LXCA780211HCLPZN00": "LOPEZ CAZARES JOSE ANGEL",
"LOGR621117HDGPRD01": "LOPEZ GARCIA RODOLFO",
"LOME820531MDGZRR04": "LOZANO MARQUEZ ERIKA LILIANA",
"MACA960216MDGCHN02": "MACIEL CHAVEZ ANDREA IDALY",
"MAVC910823MDGGRL00": "MAGALLANES VERA CLAUDIA JAQUELINE",
"MAAJ900810HCHRRS04": "MARQUEZ ARREOLA JESUS HERNAN",
"MACA720621MCLRML06": "MARTINEZ CAMPOS ALEJANDRA",
"MAHG760119MCLRRR02": "MARTINEZ HERRADA GRISELDA YADIRA",
"MARD981230MCHRSM03": "MARTINEZ RIOS DIAMAR",
"MAVE671026MDGRLV08": "MARTINEZ VALLES EVARISTA MARIA LORENA",
"MACC890225MCHYRC01": "MAYA CARRIZALES CECILIA LIZBETH",

"MEVZ960910MDGDLR05": "MEDRANO VALENZUELA ZAIRA YAMILETH",
"METO890919MDGNVL11": "MENDEZ TOVAR OLGA LETICIA",
"MOCG781028MDGJSR03": "MOJICA CASTAÑEDA GRISELDA",
"MOCY871212MCHLSZ06": "MOLINA CASTILLO YAZMIN",
"MODV821010MDGNZR05": "MONARREZ DIAZ MARIA VERONICA",
"MOAM711217MDGRNR10": "MORENO ANDRADE MARTHA PATRICIA",
"MOMM650530MDGRXR00": "MORILLON MUÑOZ MARTHA LETICIA",
"MUQA511002HOCXRN08": "MUÑOZ QUIROZ ANGEL",
"MUSS970205HDGXSN06": "MUÑOZ SOSA JOSE SANTIAGO",
"NAGY980110HCLJRM05": "NAJERA GARCIA YAMIL",
"NAHK921126MDGJRR01": "NAJERA HERNANDEZ KARLA JANETH",
"NAST690922MDGVXM09": "NAVARRETE SIAÑEZ TOMASA",
        "NAHM930114MDGVRG09": "NAVARRETE HERRERA MAGALI",
"NIEE680116MCLXSL08": "NIÑO ESTRELLA MARIA ELENA",
"OISE800627HCLLFN09": "OLIVO SIFUENTES ENRIQUE",
"OIUM780129HDGRZN08": "ORTIZ UZQUIANO JOSE MANUEL",
"PARJ560313HJCCBS09": "PACHECO ROBLES JUSTINO ENRIQUE",
"PAGG700212MDGDRD09": "PADILLA GARCIA MARIA GUADALUPE",
"PAGG941107MDGLTD05": "PALMA GUTIERREZ MA GUADALUPE",
"PACA730706HDGLRR08": "PALOMO CORONADO ARISTEO",
"PECL820309MDGXNC04": "PEÑA CANO MARIA LUCINA",
"PEAJ950611HDGRLN07": "PEREZ ALANIS JONATHAN",
"PETM810125HDGRVR08": "PEREZ TOVAR MARIO ALBERTO",

"PUTJ701119MDGGRN04": "PUGA TORRES JUANA MARIA",
"RAAS951215MGTMRN02": "RAMIREZ ARZOLA SONIA INGRID",
"RAHM870423HCLMNS05": "RAMIREZ HINOJOSA MISAEL",
"RAGK980320MDGMTR00": "RAMOS GUTIERREZ KARINA",
"REOA501020HDGTLR05": "RETANA OLIVAS ARTEMIO",
"RECJ920809MCLYNL04": "REYES CONTRERAS JULIANA IVETTE",
"REMC000415MDGZRNA3": "REZA MERAZ CINDY PAMELA",
"RIMY870520HDGVRS03": "RIVAS MERAZ YOSIMAR",
"RIPM820502MMNVRR09": "RIVERA PEREZ MIRIAM",
"ROEB840509MDGCNL04": "ROCHA ENRIQUEZ BLANCA ESTELA",
"ROCF950113MDGDRL02": "RODRIGUEZ DE LA CRUZ FLOR IVET ",
"ROEC820112MDGDSL03": "RODRIGUEZ ESQUIVEL CELIA",
        "BARF730707HDGRYR05": "BARRAZA REYES FERMIN",
"ROFG661114MCLDRB04": "RODRIGUEZ FERRER GABRIELA DEL PILAR",
"RONA881008MDGDXL06": "RODRIGUEZ NUÑEZ ALMA ANGELICA",
"RONF800311MDGDXL07": "RODRIGUEZ NUÑEZ FLOR AIDE",
"RORL740912HDGDYS06": "RODRIGUEZ REYES LUIS",
"ROSN991026MDGDLD02": "RODRIGUEZ SALAZAR NADIA",
"ROSJ940130HCLDNS03": "RODRIGUEZ SANCHEZ JESUS GUADALUPE",
"ROSL761013MCLDNR18": "RODRIGUEZ SANCHEZ LAURA CECILIA",
"ROMB941121MCHJZR09": "ROJAS MAZUCA BRENDA PATRICIA",
"SARA010403MCHLCZA3": "SALAZAR ROCHA AZUL MICHELLE",
"SASA960229MDGLMN02": "SALAS SAMANIEGO ANA BEATRIZ",
"SAAD830130MDGLRL08": "SALAZAR AROÑA DULCE LILIANA",
"SASA730417MDGNRN01": "SANTOYO SERRATO ANA LILIA",
"SAMA010201MCLCRLA1": "SAUCEDO MARTINEZ ALEJANDRA VIRIDIANA",
"SEVF730130MDGRGR04": "SERRANO VEGA FRANCISCA",
"TOMD540814HCLRRN05": "TORRES MARTINEZ DANIEL",
"SOHF941220MDGSRB01": "SOSA HERNANDEZ FABIOLA LIZETTE",
"VACB810404MTSLHR05": "VALDEZ CHAVEZ BRENDA LILIANA",
"VALV590521HDGLZL02": "VALENCIA LAZOS VALENTE",
"VACS651102MDGZRL09": "VAZQUEZ CARDOZA SILVIA PATRICIA",
"VAMA870830MDGZLL01": "VAZQUEZ MELENDEZ ALMA ROSA ",
"VIML790425MDGLRZ09": "VILLA MORENO MA DE LA LUZ",
        
"VIAN821214MDGLCR05": "VILLELA ACOSTA NORMA",
"ZAVK981206MDGMLR01": "KARENTH ARELY ZAMARRIPA VELAZQUEZ",
"RACK980731MDGMBR07": "RAMIREZ CABRERA KAREN VIANEY",
"CESS910708MDGRLC06": "CERVANTES SALGADO MARIA DEL SOCORRO",
};

// 1. INICIALIZADOR AL CARGAR LA PÁGINA
window.addEventListener('DOMContentLoaded', () => {
    const ultimaCurpGuardada = localStorage.getItem('ultima_curp_vcxc');
    if (ultimaCurpGuardada && document.getElementById('input-curp')) {
        document.getElementById('input-curp').value = ultimaCurpGuardada;
    }
    
    // === AGREGA ESTA SECCIÓN PARA ACTIVAR LOS BOTONES ===
    // Activa el botón de ingresar con CURP
    const botonIngresar = document.querySelector('#screen-1 button');
    if (botonIngresar) {
        botonIngresar.addEventListener('click', validarAccesoCURP);
    }
    
    // Activa la tecla "Enter" en el teclado del celular para ingresar
    const inputCurp = document.getElementById('input-curp');
    if (inputCurp) {
        inputCurp.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') validarAccesoCURP();
        });
    }
    // ====================================================

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./js/sw.js')
            .then(() => console.log('Service Worker registrado con éxito.'))
            .catch(err => console.log('Error de Service Worker:', err));
    }
    actualizarContador();
});


// 2. NAVEGACIÓN ENTRE PANTALLAS CON EFECTO DE DESVANECIMIENTO
function irAPantalla(screenNumber) {
    const activeScreen = document.querySelector('.app-screen.active');
    if (activeScreen) {
        activeScreen.classList.remove('active');
    }
    
    // Retraso milimétrico para ocultar y revelar con suavidad
    setTimeout(() => {
        document.querySelectorAll('.app-screen').forEach(screen => screen.style.display = 'none');
        const targetScreen = document.getElementById('screen-' + screenNumber);
        if (targetScreen) {
            targetScreen.style.display = 'block';
            setTimeout(() => {
                targetScreen.classList.add('active');
            }, 20);
        }
    }, 150);

    actualizarContador();
}

// 3. VALIDACIÓN DE ACCESO CON CURP
function validarAccesoCURP() {
    const curpIngresada = document.getElementById('input-curp').value.trim().toUpperCase();
    const loginError = document.getElementById('login-error');

    if (!curpIngresada) {
        if (loginError) {
            loginError.innerText = "Por favor, introduzca una CURP."; 
            loginError.style.display = "block"; 
        }
        return;
    }

    if (BASE_SERVIDORES[curpIngresada]) {
        nombreServidorDeducido = BASE_SERVIDORES[curpIngresada];
        if (document.getElementById('servidor-activo')) {
            document.getElementById('servidor-activo').innerText = nombreServidorDeducido;
        }
        if (loginError) loginError.style.display = "none";
        localStorage.setItem('ultima_curp_vcxc', curpIngresada);
        irAPantalla(2);
    } else {
        if (loginError) {
            loginError.innerText = "Acceso denegado: Esta CURP no se encuentra en la lista autorizada de Bienestar.";
            loginError.style.display = "block";
        }
    }
}

// 4. CAPTURA Y FIJACIÓN DE COORDENADAS GPS
function buscarGPS() {
    const status = document.getElementById('status');
    const boxLat = document.getElementById('box-lat');
    const boxLon = document.getElementById('box-lon');
    
    if (!navigator.geolocation) { 
        if (status) status.innerText = "El dispositivo no soporta localización GPS."; 
        return; 
    }
    
    if (status) status.innerText = "Conectando con hardware GPS...";
    if (boxLat) boxLat.classList.add('geo-loading');
    if (boxLon) boxLon.classList.add('geo-loading');
    
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            latitudActual = pos.coords.latitude; 
            longitudActual = pos.coords.longitude;
            if (document.getElementById('lat-txt')) document.getElementById('lat-txt').innerText = latitudActual; 
            if (document.getElementById('lon-txt')) document.getElementById('lon-txt').innerText = longitudActual;
            if (status) status.innerText = "Coordenadas fijadas con éxito.";
            
            if (boxLat) boxLat.classList.remove('geo-loading');
            if (boxLon) boxLon.classList.remove('geo-loading');
            if (document.getElementById('btn-next-to-capture')) document.getElementById('btn-next-to-capture').disabled = false;
        },
        (err) => { 
            if (status) status.innerText = "Error: Active la ubicación de su equipo móvil."; 
            if (boxLat) boxLat.classList.remove('geo-loading');
            if (boxLon) boxLon.classList.remove('geo-loading');
        }, 
        { enableHighAccuracy: true, timeout: 30000, maximumAge: 60000 }
    );
}

// 5. VALIDACIÓN Y GUARDADO LOCAL DE LA ENCUESTA (MODO LOCALSTORAGE)
function guardarFormularioValidado() {
    const status = document.getElementById('status'); 
    const errorBox = document.getElementById('error-box');
    const nombre = document.getElementById('nombre').value.trim(); 
    const appat = document.getElementById('apellido_paterno').value.trim();
    const localidad = document.getElementById('localidad').value.trim(); 
    const zona = document.getElementById('zona').value.trim();
    const seccion = document.getElementById('seccion').value.trim(); 
    const recepcion = document.getElementById('recepcion').value;
    const radioSexo = document.querySelector('input[name="sexo"]:checked'); 
    const radioEdad = document.querySelector('input[name="grupo_edad"]:checked');
    let errores = [];

    // Validar Campos Críticos obligatorios
    if (!nombre) errores.push("• 3. Nombre(s)"); 
    if (!appat) errores.push("• 4. Apellido paterno");
    if (!radioSexo) errores.push("• 7. Sexo"); 
    if (!radioEdad) errores.push("• 8. Grupo de edad");
    if (!localidad) errores.push("• 10. Localidad"); 
    if (!zona) errores.push("• 11. Zona");
    if (!seccion) errores.push("• 12. Sección"); 
    if (!recepcion) errores.push("• 14. Recepción del mensaje");

    if (errores.length > 0) {
        if (status) status.innerText = ""; 
        let boxText = "<strong>Falta llenar o corregir los siguientes campos obligatorios:</strong><br>";
        if (errorBox) {
            errorBox.innerHTML = boxText + errores.join("<br>"); 
            errorBox.style.display = "block"; 
            errorBox.scrollIntoView({ behavior: 'smooth' }); 
        }
        return;
    }

    if (errorBox) errorBox.style.display = "none"; 
    const ahora = new Date();
    
    // Objeto estructurado de la visita
    const nuevoRegistro = {
        id: 'id_' + ahora.getTime() + '_' + Math.floor(Math.random() * 1000), 
        fecha: ahora.toLocaleDateString('es-MX'), 
        hora: ahora.toLocaleTimeString('es-MX'), 
        lat: latitudActual, 
        lon: longitudActual,
        servidor: nombreServidorDeducido, 
        nombre: nombre, 
        appat: appat, 
        apmat: document.getElementById('apellido_materno').value.trim(),
        tel: document.getElementById('telefono').value.trim(), 
        sexo: radioSexo.value, 
        edad: radioEdad.value,
        domicilio: document.getElementById('domicilio').value.trim(), 
        localidad: localidad, 
        zona: zona, 
        seccion: seccion,
        programa: document.getElementById('programa').value, 
        recepcion: recepcion, 
        problematica: document.getElementById('problematica').value,
        observacion: document.getElementById('observacion').value.trim(), 
        sincronizado: false 
    };

    // Insertar en la memoria local del celular
    let datosLocales = JSON.parse(localStorage.getItem('visitas_vcxc')) || [];
    datosLocales.push(nuevoRegistro); 
    localStorage.setItem('visitas_vcxc', JSON.stringify(datosLocales));
    
    // Limpieza completa del Formulario para la siguiente visita
    document.getElementById('nombre').value = ""; 
    document.getElementById('apellido_paterno').value = ""; 
    document.getElementById('apellido_materno').value = "";
    document.getElementById('telefono').value = ""; 
    document.getElementById('domicilio').value = ""; 
    document.getElementById('localidad').value = "";
    document.getElementById('zona').value = ""; 
    document.getElementById('seccion').value = ""; 
    document.getElementById('programa').value = "";
    document.getElementById('recepcion').value = ""; 
    document.getElementById('problematica').value = ""; 
    document.getElementById('observacion').value = "";
    if(radioSexo) radioSexo.checked = false; 
    if(radioEdad) radioEdad.checked = false;
    
    // Resetear coordenadas fijadas
    latitudActual = ""; 
    longitudActual = ""; 
    if (document.getElementById('lat-txt')) document.getElementById('lat-txt').innerText = "-"; 
    if (document.getElementById('lon-txt')) document.getElementById('lon-txt').innerText = "-";
    if (document.getElementById('btn-next-to-capture')) document.getElementById('btn-next-to-capture').disabled = true;
    
    alert("¡Visita guardada en el teléfono con éxito!");
    irAPantalla(2);
}

// 6. ACTUALIZACIÓN DE INDICADORES DE VISITAS GUARDADAS Y PENDIENTES
function actualizarContador() {
    let datosLocales = JSON.parse(localStorage.getItem('visitas_vcxc')) || [];
    let pendientes = datosLocales.filter(item => !item.sincronizado).length;
    
    // Actualización de los recuadros de métricas institucionales
    if (document.getElementById('metric-total')) document.getElementById('metric-total').innerText = datosLocales.length;
    if (document.getElementById('metric-pendientes')) document.getElementById('metric-pendientes').innerText = pendientes;
}
