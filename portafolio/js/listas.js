/*-----------------------------------------------------------------------*/
/*Monedas*/

let tecnologias = [
    // Lenguajes de Programacion
    {
        id: 1,
        nombre: "C#",
        urlImagen: "imagenes/lenguajes_programacion/c_sharp.png",
        prioridad: true,
        categoria: "Lenguajes de Programacion",
    },
    {
        id: 2,
        nombre: "Python",
        urlImagen: "imagenes/lenguajes_programacion/python.png",
        prioridad: true,
        categoria: "Lenguajes de Programacion",
    },
    /*
    {
        id: 3,
        nombre: "HTML & CSS",
        urlImagen: "imagenes/lenguajes_programacion/html_&_css.png",
        prioridad: false,
        categoria: "Lenguajes de Programacion",
    },
    */
    {
        id: 4,
        nombre: "HTML",
        urlImagen: "imagenes/lenguajes_programacion/html.png",
        prioridad: false,
        categoria: "Lenguajes de Programacion",
    },
    {
        id: 5,
        nombre: "CSS",
        urlImagen: "imagenes/lenguajes_programacion/css.png",
        prioridad: false,
        categoria: "Lenguajes de Programacion",
    },
    {
        id: 6,
        nombre: "JS",
        urlImagen: "imagenes/lenguajes_programacion/js.png",
        prioridad: true,
        categoria: "Lenguajes de Programacion",
    },
    {
        id: 7,
        nombre: "SQL",
        urlImagen: "imagenes/lenguajes_programacion/sql.png",
        prioridad: true,
        categoria: "Lenguajes de Programacion"
    },
    {
        id: 8,
        nombre: "Transact SQL",
        urlImagen: "imagenes/lenguajes_programacion/t_sql.png",
        prioridad: false,
        categoria: "Lenguajes de Programacion",
    },
    {
        id: 9,
        nombre: "XAML",
        urlImagen: "imagenes/lenguajes_programacion/xaml.png",
        prioridad: false,
        categoria: "Lenguajes de Programacion",
    },
    /*
    {
        id: 10,
        nombre: "C++",
        urlImagen: "imagenes/lenguajes_programacion/c++.png",
        prioridad: false,
        categoria: "Lenguajes de Programacion",
    },
    */
    // Frameworks y Librerias
    {
        id: 11,
        nombre: ".Net",
        urlImagen: "imagenes/frameworks_librerias/net.png",
        prioridad: false,
        categoria: "Frameworks y Librerias",
    },
    {
        id: 12,
        nombre: ".Net MVC",
        urlImagen: "imagenes/frameworks_librerias/net_mvc.png",
        prioridad: false,
        categoria: "Frameworks y Librerias",
    },
    {
        id: 13,
        nombre: "Bootstrap",
        urlImagen: "imagenes/frameworks_librerias/bootstrap.png",
        prioridad: false,
        categoria: "Frameworks y Librerias",
    },
    {
        id: 14,
        nombre: ".Net MAUI",
        urlImagen: "imagenes/frameworks_librerias/net_maui.png",
        prioridad: false,
        categoria: "Frameworks y Librerias",
    },
    // Herramientas y IDEs
    {
        id: 15,
        nombre: "VS Code",
        urlImagen: "imagenes/herramientas_ides/vs_code.png",
        prioridad: true,
        categoria: "Herramientas y IDEs",
    },
    {
        id: 16,
        nombre: "VS 2022",
        urlImagen: "imagenes/herramientas_ides/vs_2022.png",
        prioridad: true,
        categoria: "Herramientas y IDEs",
    },
    {
        id: 17,
        nombre: "PyCharm",
        urlImagen: "imagenes/herramientas_ides/py_charm.png",
        prioridad: false,
        categoria: "Herramientas y IDEs",
    },
    {
        id: 18,
        nombre: "SQL Server",
        urlImagen: "imagenes/herramientas_ides/sql_server.png",
        prioridad: true,
        categoria: "Herramientas y IDEs",
    },
    {
        id: 19,
        nombre: "Git",
        urlImagen: "imagenes/herramientas_ides/git.png",
        prioridad: false,
        categoria: "Herramientas y IDEs",
    },
    {
        id: 20,
        nombre: "MySQL",
        urlImagen: "imagenes/herramientas_ides/my_sql.png",
        prioridad: true,
        categoria: "Herramientas y IDEs",
    },
    {
        id: 21,
        nombre: "Postman",
        urlImagen: "imagenes/herramientas_ides/postman.png",
        prioridad: true,
        categoria: "Herramientas y IDEs",
    },
    // DevOps e Infraestructura Cloud
    {
        id: 22,
        nombre: "GitHub",
        urlImagen: "imagenes/devops_infraestructura_cloud/github.png",
        prioridad: false,
        categoria: "DevOps e Infraestructura Cloud",
    },
    {
        id: 23,
        nombre: "Azure",
        urlImagen: "imagenes/devops_infraestructura_cloud/azure.png",
        prioridad: false,
        categoria: "DevOps e Infraestructura Cloud",
    },
    // Otras Habilidades Tecnicas
    {
        id: 24,
        nombre: "Cisco",
        urlImagen: "imagenes/otras_habilidades_extra/cisco.png",
        prioridad: false,
        categoria: "Otras Habilidades Tecnicas",
    },
    {
        id: 25,
        nombre: "UML",
        urlImagen: "imagenes/otras_habilidades_extra/uml.png",
        prioridad: false,
        categoria: "Otras Habilidades Tecnicas",
    },
    {
        id: 26,
        nombre: "Power BI",
        urlImagen: "imagenes/otras_habilidades_extra/power_bi.png",
        prioridad: false,
        categoria: "Otras Habilidades Tecnicas",
    },
]

/*-----------------------------------------------------------------------*/
/*Proyectos*/

let proyectos = [
    /*Proyecto 1: Sistema de Gestion de Empleados*/
    {
        id: 1,
        urlImagen: "imagenes/proyectos/sistema_gestion_empleados.png",
        nombre: "Sistema de Gestion de Empleados",
        descripcion: "Programacion Orientada a Objetos <br>Proyecto Universitario",
        lenguajesProgrmacion: [1],
        frameworkLibreria: [11],
        herramientas: [16],
        devopsInfraestructuraCloud: [],
        github: {
            estado: true,
            texto: "Codigo",
            url: "https://github.com/SQuirosDev/Sistema-de-Gestion-de-Empleados"
        },
        demoYT1: {
            estado: false,
            texto: "Demo 1",
            url: ""
        },
        demoYT12: {
            estado: false,
            texto: "Demo 2",
            url: ""
        },
        despliegues: {
            estado: false,
            texto: "Ver proyecto",
            url: ""
        },
        prioridad: false
    },
    /*Proyecto 2: Sistema para Restaurantes*/
    {
        id: 2,
        urlImagen: "imagenes/proyectos/sistema_restaurantes.png",
        nombre: "Sistema para Restaurantes",
        descripcion: `Proyecto Universitario de Programacion Web 
        <br>Pagina web para un sistema de restaurante que cuenta con tales funciones`,
        lenguajesProgrmacion: [7,8,1,4,5,6],
        frameworkLibreria: [11, 13],
        herramientas: [18,16,15],
        devopsInfraestructuraCloud: [],
        github: {
            estado: true,
            texto: "Codigo",
            url: "https://github.com/SQuirosDev/Sistema-para-Restaurantes"
        },
        demoYT1: {
            estado: false,
            texto: "Demo 1",
            url: ""
        },
        demoYT12: {
            estado: false,
            texto: "Demo 2",
            url: ""
        },
        despliegues: {
            estado: false,
            texto: "Ver proyecto",
            url: ""
        },
        prioridad: true
    },
    /*Proyecto 3: Portafolio*/
    {
        id: 3,
        urlImagen: "imagenes/proyectos/portafolio.png",
        nombre: "Portafolio",
        descripcion: "Portafolio <br>Proyecto Personal",
        lenguajesProgrmacion: [4, 5, 6],
        frameworkLibreria: [13],
        herramientas: [15],
        devopsInfraestructuraCloud: [22],
        github: {
            estado: true,
            texto: "Codigo",
            url: "https://github.com/SQuirosDev/SQuirosDev.github.io/tree/main/Portafolio"
        },
        demoYT1: {
            estado: false,
            texto: "Demo 1",
            url: ""
        },
        demoYT12: {
            estado: false,
            texto: "Demo 2",
            url: ""
        },
        despliegues: {
            estado: false,
            texto: "Ver proyecto",
            url: ""
        },
        prioridad: false
    },
    /*Proyecto 4: Tree*/
    {
        id: 4,
        urlImagen: "imagenes/proyectos/tree.png",
        nombre: "Tree",
        descripcion: "Tree <br>Proyecto Personal",
        lenguajesProgrmacion: [4, 5],
        frameworkLibreria: [13],
        herramientas: [15],
        devopsInfraestructuraCloud: [22],
        github: {
            estado: true,
            texto: "Codigo",
            url: "https://github.com/SQuirosDev/SQuirosDev.github.io/tree/main/Tree"
        },
        demoYT1: {
            estado: false,
            texto: "Demo 1",
            url: ""
        },
        demoYT12: {
            estado: false,
            texto: "Demo 2",
            url: ""
        },
        despliegues: {
            estado: false,
            texto: "Ver proyecto",
            url: ""
        },
        prioridad: false
    },    
    /*Proyecto 5: Ecomerce*/
    {
        id: 5,
        urlImagen: "imagenes/proyectos/ecommerce.png",
        nombre: "Ecommerce ",
        descripcion: "Programacion Movil <br>Proyecto Universitario",
        lenguajesProgrmacion: [7,8,1,9],
        frameworkLibreria: [11,14],
        herramientas: [18,16],
        devopsInfraestructuraCloud: [23],
        github: {
            estado: false,
            texto: "Codigo",
            url: ""
        },
        demoYT1: {
            estado: false,
            texto: "Demo 1",
            url: ""
        },
        demoYT12: {
            estado: false,
            texto: "Demo 2",
            url: ""
        },
        despliegues: {
            estado: false,
            texto: "Ver proyecto",
            url: ""
        },
        prioridad: true
    },
    /*Proyecto 6: Portafolio V2*/
    {
        id: 6,
        urlImagen: "imagenes/proyectos/portafolio_v2.png",
        nombre: "Portafolio V2 ",
        descripcion: "Portafolio V2 <br>Proyecto Personal",
        lenguajesProgrmacion: [4, 5, 6],
        frameworkLibreria: [13],
        herramientas: [15],
        devopsInfraestructuraCloud: [22],
        github: {
            estado: true,
            texto: "Codigo",
            url: "https://github.com/SQuirosDev/SQuirosDev.github.io/tree/main/portafolio"
        },
        demoYT1: {
            estado: false,
            texto: "Demo 1",
            url: ""
        },
        demoYT12: {
            estado: false,
            texto: "Demo 2",
            url: ""
        },
        despliegues: {
            estado: false,
            texto: "Ver proyecto",
            url: ""
        },
        prioridad: true
    },
    /*Proyecto 7: App Inscripciones Curso Robotica*/
    {
        id: 7,
        urlImagen: "imagenes/proyectos/app_inscripciones_curso_robotica.png",
        nombre: "App Inscripciones Curso Robotica",
        descripcion: "Aplicacion para la informacion e inscripcion a mi curso de robotica <br> Proyecto Para TCU",
        lenguajesProgrmacion: [7,8,1,4,5,6],
        frameworkLibreria: [11, 12, 13],
        herramientas: [18,16,15],
        devopsInfraestructuraCloud: [],
        github: {
            estado: false,
            texto: "Codigo",
            url: ""
        },
        demoYT1: {
            estado: false,
            texto: "Demo 1",
            url: ""
        },
        demoYT12: {
            estado: false,
            texto: "Demo 2",
            url: ""
        },
        despliegues: {
            estado: false,
            texto: "Ver proyecto",
            url: ""
        },
        prioridad: false
    }
];

/*-----------------------------------------------------------------------*/
/*Certificados*/

let certificaciones = [
    {
        id: 1,
        urlImagen: "imagenes/certificados/python.png"
    },
    {
        id: 2,
        urlImagen: "imagenes/certificados/html.png"
    },
    {
        id: 3,
        urlImagen: "imagenes/certificados/js.png"
    },
    {
        id: 4,
        urlImagen: "imagenes/certificados/git.png"
    },
    {
        id: 5,
        urlImagen: "imagenes/certificados/sql.png"
    },
    {
        id: 6,
        urlImagen: "imagenes/certificados/ccna_1.png"
    },
    {
        id: 6,
        urlImagen: "imagenes/certificados/mvc.png"
    },
    {
        id: 7,
        urlImagen: "imagenes/certificados/ccna_2.png"
    },
    {
        id: 8,
        urlImagen: "imagenes/certificados/power_bi.png"
    },
]

/*-----------------------------------------------------------------------*/
/*Textos*/

let textos = [
    {
        id: 1,
        info: `Soy Sebastián Quirós, estudiante universitario avanzado de Ingeniería en Sistemas, con más del 80% de la carrera ya completada. Durante este tiempo, he adquirido conocimientos en varias tecnologias 
                como C#, Python, JS, SQL y entre otros. La mayoría de estos conocimientos están complementados con certificados 
                que respaldan mi aprendizaje y mi compromiso por seguir creciendo en el ámbito tecnológico. Mi experiencia como estudiante me ha permitido aplicar estos conocimientos en proyectos, 
                siempre buscando mejorar y crecer como profesional.`,
    },
    {
        id: 2,
        info: `Cuento con una amplia gama de conocimientos, incluyendo varias tecnologas como C#, Python, JS, SQL y entre otros.`,
    },
    {
        id: 3,
        info: `A lo largo de mi formación, mi experiencia se ha construido a través de la creación de proyectos personales y universitarios. He diseñado y desarrollado sistemas completos integrando frontend, 
                backend y BD. Estas experiencias han sido clave para fortalecer mis habilidades de análisis, desarrollo y colaboración.`,
    },
    {
        id: 4,
        info: `Actualmente, soy estudiante avanzado de Ingeniería en Sistemas en la Universidad Latina, donde he adquirido conocimientos avanzados en diferentes areas y tecnologias. Complemento mi formación con certificados en lenguajes 
                de programación (C#, Python y SQL), desarrollo web (HTML, CSS y JavaScript) y otras tecnologias.`
    },
]