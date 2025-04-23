class Tramite {
    constructor(imageUrl, imagenAlt, title, subtitle, requirements, moreInfoUrl) {
        this.imageUrl = imageUrl;
        this.imagenAlt =imagenAlt;
        this.title = title;
        this.subtitle = subtitle
        this.requirements = requirements;
        this.moreInfoUrl = moreInfoUrl;
    }
}

let trasnferenciaVehiculos = new Tramite(
    
    '../img/cards/llaves-auto.jpeg',
    'llaves de auto',
        'Transferencias de Vehículos','',
        [
            'Cédula de identidad vigente.',
            'Certificado de Anotaciones vigente (al día).',
            'Certificado de Multas (al día).',
            'Permiso de Circulación vigente.',
            'Para que una persona distinta del dueño pueda vender un vehículo a nombre de este, es necesario el poder otorgado por el dueño ante notario.',
            'Si el vendedor o comprador, son personas jurídicas, deben además traer el Rut de la Empresa y la Escritura por la cual consta su personería para representarla, con vigencia.'
        ],
        'mailto:contacto@larrereravanal.cl'
);


let contratoArriendo = new Tramite(
    '../img/cards/llaves-casa.jpeg',
    'llaves de casa',
    'Contrato de Arrendamiento','',
    [
        'Comparecencia personal del arrendador con cédula de identidad vigente.',
        'Comparecencia personal del arrendatario con cédula de identidad vigente.',
        'Cédula de identidad vigente ambas parte y codeudor solidario en caso de concurrir.',
        'Certificado de Dominio Vigente (solicitar en Conservador de Bienes Raíces respectivo).'
    ],
    'mailto:contacto@larrereravanal.cl'
);

let compraventaInmuebles = new Tramite(
    '../img/cards/llaves-casa.jpeg',
    'llaves de casa',
    'Compraventa Inmuebles','',
    [
        'Es un contrato que debe otorgarse mediante escritura pública.',
        'Necesariamente requiere de la asesoría de un profesional abogado quien, a través de un estudio de los títulos de dominio, determinará que el inmueble se encuentra en condiciones de ser transferido pudiendo de esta forma el comprador adquirir el dominio.',
        'El trámite de compraventa en el oficio notarial termina cuando la propiedad es inscrita en el Conservador de Bienes Raíces.'
    ],
    'mailto:contacto@larrereravanal.cl'
);

let finiquitoTrabajo = new Tramite(
    '../img/cards/contrato.jpeg',
    'imagen contrato',
    'Finiquito de Trabajo','',
    [
        'Comparecencia personal del trabajador con cédula de identidad vigente.',
        'Acompañar tres (3) copias impresas del finiquito es requerida la firma del empleador aunque sea en digital/escaneada.',
        'Certificado de cotizaciones previsionales al día.',
        'El trabajador no debe estar inscrito en el registro de deudores de pensión de alimentos.',
        'Si el trabajador se encuentra obligado al pago de pensión de alientos y ésta se hace mediante retención por parte del empleador, debe exhibir las 3 últimas liquidaciones de sueldo que acrediten que se han efectuado las retenciones.'
    ],
    'mailto:contacto@larrereravanal.cl'
);

let redaccionTestamento = new Tramite(
    '../img/cards/testamento.jpeg',
    'imagen testamento',
    'Redacción de Testamento','',
    [
        'El testamento es un acto más o menos solemne, en que una persona dispone de todo o parte de sus bienes para que tenga efecto después de sus días, conservando la facultad de revocar las disposiciones contenidas en él mientras viva, según es descrito en el Código Orgánico de Tribunales.',
        'El testamento solemne abierto -que es el que más se utiliza debe constar por escrito y otorgarse ante competente escribano y tres o 5 testigos.',
        'El testamento solemne cerrado se otorga también ante Notario y tres testigos, para lo cual el testador debe concurrir al acto con su testamento previamente hecho, el que se guarda en un sobre lacrado y sellado que firman el testador, los testigos y el Notario. Este es un documento del cual tiene conocimiento solamente el testador.'
    ],
    'mailto:contacto@larrereravanal.cl'
);

let permisoSalirPaisAcompañados = new Tramite(
    '../img/cards/salida.jpeg',
    'persona en aeropuerto',
    'Permiso para salir del país',  'Menores que viajen acompañados por uno de los padres',
    [
        'Pasaporte o Cédula de identidad vigente según sea el país de destino.',
        'Certificado de Nacimiento o Libreta de Familia, más tres fotocopias simples del documento.',
        'Autorización Notarial del padre que no viaja, entregando su consentimiento para la salida del menor o la autorización del Tribunal de Familia que corresponda, en original más tres fotocopias simples.'
    ],
    'mailto:contacto@larrereravanal.cl'
);

let permisoSalirPaisNoAcompañados = new Tramite(
    '../img/cards/salida.jpeg',
    'persona en aeropuerto',
    'Permiso para salir del país', 'Menores No viajen acompañados por sus padres',
    [
        'Pasaporte o cédula de identidad vigente según sea el país de destino.',
        'Certificado de Nacimiento o Libreta de Familia más tres fotocopias simples.',
        'Certificado de Defunción en caso de estar fallecidos ambos padres, más tres fotocopias simples.',
        'Autorización Notarial de ambos padres, entregando su consentimiento para la salida del menor, en original más tres fotocopias simples.'
    ],
    'mailto:contacto@larrereravanal.cl'
);

let constitucionSociedad = new Tramite(
    '../img/cards/contrato.jpeg',
    'persona en aeropuerto',
    'Constitución de Sociedad','',
    [
        'Minuta firmada por Abogado.',
        'Suscripción del contrato de sociedad a través de escritura pública en una Notaría.',
        'Inscripción en el Registro de Comercio del Conservador de Bienes Raíces que corresponda.',
        'Publicación en el Diario Oficial.',
        'Lo anterior, sin perjuicio de las disposiciones contenidas en la Ley N°20.659, que establece un procedimiento simplificado de constitución, modificación o disolución de sociedades comerciales.'
    ],
    'mailto:contacto@larrereravanal.cl'
);

let salvoconductoPropietario = new Tramite (
    '../img/cards/llaves-casa.jpeg',
    'llaves de casa',
    'Salvoconducto','Si el salvoconducto lo solicita el propietario:',
    [
        'Se solicitan en Valparaíso si el interesado sale desde esta ciudad, de no ser así, debe concurrir a la notaria de la ciudad desde donde sale.',
        'Debe exhibir en original el comprobante de pago de contribuciones o certificado de avalúo o cuentas de servicios básicos, cualquiera de ellos a nombre del propietario.',
        'Nombre completo del chofer del vehículo que hará la mudanza y patente del mismo.'
    ],
    'mailto:contacto@larrereravanal.cl'
)

let salvoconductoArrendatario = new Tramite (
    '../img/cards/llaves-casa.jpeg',
    'llaves de casa',
    'Salvoconducto','Si el salvoconducto lo solicita el arrendatario:',
    [
        'Se solicitan en Valparaíso si el interesado sale desde esta ciudad, de no ser así, debe concurrir a la notaria de la ciudad desde donde sale.',
        'Debe exhibir autorización escrita en original del dueño de la propiedad más la fotocopia de su cédula de identidad.',
        'Se deben exhibir los comprobantes de pago de luz, agua al día.',
        'Comprobante del pago de la ultima renta de arrendamiento en original.',
        'Nombre completo del chofer del vehículo que hará la mudanza y patente del mismo.'
    ],
    'mailto:contacto@larrereravanal.cl'
)




let legalizaFotocopia = new Tramite(
    '../img/cards/contrato.jpeg',
    'imagen contrato',
    'Legalización de Fotocopias','',
    [
        'Se requiere exhibir a la notaria el documento original cuya fotocopia se va a legalizar. '
    ],
    'mailto:contacto@larrereravanal.cl'
);


const TRAMITES = [trasnferenciaVehiculos, contratoArriendo, compraventaInmuebles, salvoconductoPropietario, salvoconductoArrendatario, finiquitoTrabajo, redaccionTestamento, permisoSalirPaisAcompañados, permisoSalirPaisNoAcompañados, constitucionSociedad,  legalizaFotocopia];


// Función para generar las tarjetas de tramites y agregarlas al contenedor en el HTML
function renderTramites2(tramites) {
    const cardContainer = document.getElementById('tramites-card-container');

    tramites.forEach(tramite => {
        const card = document.createElement('div');
        card.classList.add('col miCard');

        const cardContent = `
            <div class="card h-100">
                <img src="${tramite.imageUrl}" class="img-fluid rounded-start" alt="${tramite.imagenAlt}">
                <div class="card-body">
                    <h2 class="card-title">${tramite.title}</h2>
                    <p class="card-text">
                        <h3 class="card-title">Requisitos</h3>
                        <ul>
                            ${tramite.requirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                    </p>
                </div>
                <a href="${tramite.moreInfoUrl}" class="card-footer">Más información</a>
            </div>
        `;

        card.innerHTML = cardContent;
        cardContainer.appendChild(card);
    });
}

function renderTramites(tramites) {
    const cardContainer = document.getElementById('tramites-card-container');

    tramites.forEach(tramite => {
        const card = document.createElement('div');
        card.classList.add('col');
        card.classList.add('tramite-card-item');

        const cardContent = `
            <div class="card h-100">
                <img src="${tramite.imageUrl}" class="img-fluid rounded-start" alt="${tramite.imagenAlt}">
                <div class="card-body">
                    <h2 class="card-title">${tramite.title}</h2>
                    <div class="card-text">
                        <h4 class="card-subtitle text-muted">${tramite.subtitle}</h4>
                        <h3 class="card-title">Requisitos</h3>
                        <ul>
                            ${tramite.requirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <a href="${tramite.moreInfoUrl}" class="card-footer">Más información</a>
            </div>
        `;

        card.innerHTML = cardContent;
        cardContainer.appendChild(card);
    });
}

// Llamar a la función para renderizar las tarjetas de tramites en el contenedor
renderTramites(TRAMITES);



// Función para manejar el evento de búsqueda
function buscarTramite() {
    const textoBuscado = document.getElementById('buscaTramite').value.toLowerCase(); // Obtener el texto ingresado y convertirlo a minúsculas para comparación

    const tarjetas = document.querySelectorAll('.tramite-card-item'); // Obtener todas las tarjetas
    let primeraTarjetaEncontrada = null; // Almacenar la primera tarjeta encontrada

    tarjetas.forEach(tarjeta => {
        const tituloTarjeta = tarjeta.querySelector('.card-title').textContent.toLowerCase(); // Obtener el título de la tarjeta y convertirlo a minúsculas para comparación
        tarjeta.classList.remove('resaltado');

        // Si el texto buscado está presente en el título de la tarjeta, resaltarla
        if (tituloTarjeta.includes(textoBuscado) && textoBuscado.length > 1) {
            tarjeta.classList.add('resaltado');
            if (!primeraTarjetaEncontrada) {
                primeraTarjetaEncontrada = tarjeta;
            }
        } else {
            tarjeta.classList.remove('resaltado');
        }
    });

        // Si se encontró alguna tarjeta, llevar al usuario a la primera tarjeta encontrada
        if (primeraTarjetaEncontrada) {
            primeraTarjetaEncontrada.scrollIntoView({ behavior: 'smooth' });
        }
}

// Agregar un evento input al input de búsqueda
document.getElementById('buscaTramite').addEventListener('input', buscarTramite);


// Obtener referencia al botón de volver arriba
const botonVolverArriba = document.getElementById('botonVolverArriba');

// Función para mostrar u ocultar el botón según la posición del scroll
function mostrarBotonVolverArriba() {
    if (window.scrollY > 200) { // Muestra el botón cuando el scroll haya bajado cierta cantidad
        botonVolverArriba.style.display = 'block';
    } else {
        botonVolverArriba.style.display = 'none';
    }
}

// Agregar un evento de scroll para mostrar u ocultar el botón
window.addEventListener('scroll', mostrarBotonVolverArriba);

// Función para llevar la página hacia arriba al hacer clic en el botón
function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}

// Agregar evento al botón para volver arriba al hacer clic
botonVolverArriba.addEventListener('click', volverArriba);
