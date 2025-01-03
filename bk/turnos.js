const notarias = [
    // {
    //     mes: "Enero",
    //     nombre: "Enzo Repetto Lues (Interino)",
    //     direccion: "Cochrane Nº 836-838, Valparaíso",
    //     email: "enzorepettol@gmail.com",
    //     telefono: "32-2234463"
    // },
    // {
    //     mes: "Febrero",
    //     nombre: "Pablo Contreras Guerrero (Interino)",
    //     direccion: "Esmeralda 953, Valparaíso",
    //     web: "notariacontrerasguerrero.cl",
    //     telefono: "32-2232598"
    // },
    // {
    //     mes: "Marzo",
    //     nombre: "Gloria Isabel Ordoñez Cortes (Interino)",
    //     direccion: "Blanco Nº 854, Valparaíso",
    //     email: "7notariavalparaiso@gmail.com",
    //     telefono: "32-2252968, 32-2252654"
    // },
    // {
    //     mes: "Abril",
    //     nombre: "Luis Felipe Sepúlveda Ponce",
    //     direccion: "Prat Nº 829, Valparaíso",
    //     email: "contacto@notariasepulvedaponce.c",
    //     telefono: "32-2358604, 32-2358600, 32-2358601, 32-2358602"
    // },
    // {
    //     mes: "Mayo",
    //     nombre: "Claudia Olguin Vargas",
    //     direccion: "Prat Nº 612, Valparaíso",
    //     telefono: "32-2210183"
    // },
    // {
    //     mes: "Junio",
    //     nombre: "Carlos Wendt (Interino)",
    //     direccion: "Prat 856, Valparaíso",
    //     web: "notariamartinez.cl",
    //     telefono: "32-2213733"
    // },
    {
        mes: "Julio",
        nombre: "Marcela Tavolari Oliveros",
        direccion: "Blanco Nº 648",
        email: "notaria@marcelatavolari.cl",
        telefono: "32-2255094, 32-2757289"
    },
    {
        mes: "Agosto",
        nombre: "Paola Deborah Stack Lara",
        direccion: "Prat Nº 725 oficina 101, Valparaíso",
        email: "notario.notariastack@gmail.com",
        telefono: "32-3466859"
    },
    {
        mes: "Septiembre",
        nombre: "Carlos Wendt (Interino)",
        direccion: "Prat 856, Valparaíso",
        web: "www.notariamartinez.cl",
        telefono: "32-2213733"
    },
    {
        mes: "Octubre",
        nombre: "Marcela Tavolari Oliveros",
        direccion: "Blanco Nº 648",
        email: "notaria@marcelatavolari.cl",
        telefono: "32-2255094, 32-2757289"
    },
    {
        mes: "Noviembre",
        nombre: "Paola Deborah Stack Lara",
        direccion: "Prat Nº 725 oficina 101, Valparaíso",
        email: "notario.notariastack@gmail.com",
        telefono: "32-3466859"
    },
    {
        mes: "Diciembre",
        nombre: "Henriette Larrère Ravanal (Interina)",
        direccion: "Chacabuco Nº 2845, Valparaíso",
        email: "contacto@larrereravanal.cl",
        telefono: "32-2256652, 32-222049",
        web: "www.larrereravanal.cl"
    }
];

const vignas = [
    {
        mes: "Febrero",
        nombre: "4ª Notaría Evaldo Rehbein Utreras",
        direccion: "Av. Libertad Nº 901, Viña del Mar",
        email: "info@rehbein.cl, notaria@rehbein.cl",
        telefono: "32-3321650"
    },
    {
        mes: "Marzo",
        nombre: "3ª Notaría Eliana Gervasio Zamudio",
        direccion: "Arlegui Nº 537, Viña del Mar",
        web: "notariagervasio.cl",
        telefono: "32-2382440, 32-2382439"
    },
    {
        mes: "Abril",
        nombre: "5ª Notaría: Cecilia Gálvez Pino",
        direccion: "Libertad 1155-A, Viña del Mar",
        email: "info@notariaceciliagalvez.cl, notariaceciliagalvez@gmail.com",
        telefono: "32-2460710"
    },
    {
        mes: "Mayo",
        nombre: "2ª Notaría Francisco Javier Fuenzalida Rodríguez",
        direccion: "Arlegui Nº 333 Local 111, Viña del Mar",
        email: "cvon@notariafuenzalida.cl",
        telefono: "32-2713945, 32-2714203"
    },
    {
        mes: "Junio",
        nombre: "Raúl Farren Paredes",
        direccion: "Villanelo Nº 66, Viña del Mar",
        web: "notariafarren.cl",
        email: "info@notariafarren.cl",
        telefono: "32-2711060, 32-2711124"
    },
    {
        mes: "Julio",
        nombre: "Luis Fischer Yavar",
        direccion: "Avda. 12 Norte 785 piso 3, Viña del Mar",
        email: "info@notariafischer.cl",
        telefono: "32-2468000"
    },
    {
        mes: "Agosto",
        nombre: "4ª Notaría Evaldo Rehbein Utreras",
        direccion: "Av. Libertad Nº 901, Viña del Mar",
        email: "info@rehbein.cl, notaria@rehbein.cl",
        telefono: "32-3321650"
    },
    {
        mes: "Septiembre",
        nombre: "3ª Notaría Eliana Gervasio Zamudio",
        direccion: "Arlegui Nº 537, Viña del Mar",
        web: "notariagervasio.cl",
        telefono: "32-2382440, 32-2382439"
    },
    {
        mes: "Octubre",
        nombre: "5ª Notaría: Cecilia Gálvez Pino",
        direccion: "Libertad 1155-A, Viña del Mar",
        email: "info@notariaceciliagalvez.cl, notariaceciliagalvez@gmail.com",
        telefono: "32-2460710"
    },
    {
        mes: "Diciembre",
        nombre: "2ª Notaría Francisco Javier Fuenzalida Rodríguez",
        direccion: "Arlegui Nº 333 Local 111, Viña del Mar",
        email: "cvon@notariafuenzalida.cl",
        telefono: "32-2713945, 32-2714203"
    },
    // {
    //     mes: "6ª Notaría",
    //     nombre: "Rodrigo Vila Cervera",
    //     direccion: "Avda. Concón Reñaca Nº 4000 local 19, Concón",
    //     email: "notariadeconcon@gmail.com, notariadeconconep@gmail.com",
    //     telefono: "32-3173932"
    // },
    // {
    //     mes: "8ª Notaría Asto Reñaca",
    //     nombre: "Marcos Díaz León",
    //     direccion: "AVDA. BORGOÑO Nº 14.439 LOCAL 105, REÑACA",
    //     email: "info@notariamarcosdiaz.cl",
    //     telefono: "32-2210183"
    // },

];

const conservadores = [
    {
        mes: "Conservador de Bienes Raíces y Comercio",
        nombre: "Ricardo Valderrama Lathrop",
        direccion: "Prat Nº 804, Valparaíso",
        web: "cbrvalpo.cl",
        email: "conservador@cbrvalpo.cl",
        telefono: "32-2214705"
    },
    {
        mes: "Conservador y Archivero de Viña del Mar",
        nombre: "Luis Fischer Yávar",
        direccion: "9 Norte N° 623, Viña del Mar",
        web: "cbrvina.cl",
        telefono: "32-2973444",
        email: "conservador@cbrvina.cl"
    },
    {
        mes: "Conservador de Bienes Raíces De Concón",
        nombre: "Carlos Alejandro Swett Muñoz",
        direccion: "Tierra del Fuego N° 903, Concón",
        web: "conservadorconcon.cl",
        telefono: "32-2488326"
    }

]

document.addEventListener('DOMContentLoaded', function() {
    const notariasContainer = document.getElementById('notarias');
    const vignaContainer = document.getElementById('vigna');
    const conservadorContainer = document.getElementById('conservador');

    notarias.forEach(notaria => {
        const notariaArticle = document.createElement('article');
        notariaArticle.classList.add('noticia-cards-item');
        notariaArticle.style.width = '350px'
        notariaArticle.style.display = 'flex';
        // notariaArticle.style.justifyContent = 'space-evenly'

        let contactInfo = `
            <strong>Nombre:</strong> ${notaria.nombre}
            <br>
            <strong>Dirección:</strong> ${notaria.direccion}
        `;

        if (notaria.email) {
            contactInfo += `<br><strong>Email:</strong> ${notaria.email}`;
        }
        if (notaria.web) {
            // contactInfo += `<br><strong>Web:</strong> ${notaria.web}`;
            contactInfo += `<br><strong>Web:</strong> <a target="_blank" href= http://${notaria.web} style="background-color: #ddddddbe; border-radius: 5px; color
            : #132a5a;">${notaria.web}</a>`;
        

        }
        contactInfo += `<br><strong>Teléfono:</strong> ${notaria.telefono}`;

        notariaArticle.innerHTML = `
            <h3 class="card-title">${notaria.mes}</h3>
            <p class="card-text mb-4">${contactInfo}</p>
        `;

        notariasContainer.appendChild(notariaArticle);
    });

    vignas.forEach(vigna => {
        const vignaArticle = document.createElement('article');
        vignaArticle.classList.add('noticia-cards-item');
        vignaArticle.style.width = '350px'
        vignaArticle.style.display = 'flex';
        vignaArticle.style.justifyContent = 'space-evenly'

        let contactInfo = `
            <strong>Nombre:</strong> ${vigna.nombre}
            <br>
            <strong>Dirección:</strong> ${vigna.direccion}
        `;

        if (vigna.email) {
            contactInfo += `<br><strong>Email:</strong> ${vigna.email}`;
        }
        if (vigna.web) {
            contactInfo += `<br><strong>Web:</strong> ${vigna.web}`;
        }
        contactInfo += `<br><strong>Teléfono:</strong> ${vigna.telefono}`;

        vignaArticle.innerHTML = `
            <h3 class="card-title">${vigna.mes}</h3>
            <p class="card-text mb-4">${contactInfo}</p>
        `;

        vignaContainer.appendChild(vignaArticle);
    });

    conservadores.forEach(conservador => {
        const conservadorArticle = document.createElement('article');
        conservadorArticle.classList.add('noticia-cards-item');
        conservadorArticle.style.width = '350px'
        conservadorArticle.style.display = 'flex';
        conservadorArticle.style.justifyContent = 'space-evenly'

        let contactInfo = `
            <strong>Nombre:</strong> ${conservador.nombre}
            <br>
            <strong>Dirección:</strong> ${conservador.direccion}
        `;

        if (conservador.email) {
            contactInfo += `<br><strong>Email:</strong> ${conservador.email}`;
        }
        if (conservador.web) {
            contactInfo += `<br><strong>Web:</strong> ${conservador.web}`;
        }
        contactInfo += `<br><strong>Teléfono:</strong> ${conservador.telefono}`;

        conservadorArticle.innerHTML = `
            <h3 class="card-title">${conservador.mes}</h3>
            <p class="card-text mb-4">${contactInfo}</p>
        `;

        conservadorContainer.appendChild(conservadorArticle);
    });
});
