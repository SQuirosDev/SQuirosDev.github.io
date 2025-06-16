/*-----------------------------------------------------------------------*/
/*Monedas*/

let lenguajesProgramacion = [
    {
        id: 1,
        nombre: "C#",
        urlImagen: "imagenes/lenguajes_programacion/c_sharp.png",
        prioridad: true
    },
    {
        id: 2,
        nombre: "Python",
        urlImagen: "imagenes/lenguajes_programacion/python.png",
        prioridad: true
    },
    {
        id: 3,
        nombre: "HTML & CSS",
        urlImagen: "imagenes/lenguajes_programacion/html_&_css.png",
        prioridad: true
    },
    {
        id: 4,
        nombre: "HTML",
        urlImagen: "imagenes/lenguajes_programacion/html.png",
        prioridad: false
    },
    {
        id: 5,
        nombre: "CSS",
        urlImagen: "imagenes/lenguajes_programacion/css.png",
        prioridad: false
    },
    {
        id: 6,
        nombre: "JS",
        urlImagen: "imagenes/lenguajes_programacion/js.png",
        prioridad: true
    },
    {
        id: 7,
        nombre: "SQL",
        urlImagen: "imagenes/lenguajes_programacion/sql.png",
        prioridad: true
    },
]

let herramientas = [
    {
        id: 1,
        nombre: "VS Code",
        urlImagen: "imagenes/herramientas/vs_code.png",
        prioridad: true
    },
    {
        id: 2,
        nombre: "VS 2022",
        urlImagen: "imagenes/herramientas/vs_2022.png",
        prioridad: true
    },
    {
        id: 3,
        nombre: "PyCharm",
        urlImagen: "imagenes/herramientas/py_charm.png",
        prioridad: true
    },
    {
        id: 4,
        nombre: "SQL Server",
        urlImagen: "imagenes/herramientas/sql_server.png",
        prioridad: true
    },
    {
        id: 5,
        nombre: "Git",
        urlImagen: "imagenes/herramientas/git.png",
        prioridad: true
    },
    {
        id: 5,
        nombre: "MySQL",
        urlImagen: "imagenes/herramientas/my_sql.png",
        prioridad: true
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
        herramientas: [2],
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
        lenguajesProgrmacion: [4, 5, 6, 1, 7],
        herramientas: [1, 2, 4],
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
        herramientas: [1],
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
        prioridad: true
    },
    /*Proyecto 4: Tree*/
    {
        id: 4,
        urlImagen: "imagenes/proyectos/tree.png",
        nombre: "Tree",
        descripcion: "Tree <br>Proyecto Personal",
        lenguajesProgrmacion: [4, 5],
        herramientas: [1],
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
        lenguajesProgrmacion: ["MAUI", 1, 7],
        herramientas: [2, 4],
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
]

/*-----------------------------------------------------------------------*/
/*Textos*/

let textos = [
    {
        id: 1,
        info: `Soy Sebastián Quirós, estudiante universitario de Ingeniería en Sistemas, con la mitad de la carrera ya completada. Durante este tiempo, he adquirido conocimientos en lenguajes 
                de programación como C#, Python y SQL, así como en tecnologías para el desarrollo web (HTML, CSS y JavaScript). La mayoría de estos conocimientos están complementados con certificados 
                que respaldan mi aprendizaje y mi compromiso por seguir creciendo en el ámbito tecnológico. Mi experiencia como estudiante me ha permitido aplicar estos conocimientos en proyectos, 
                siempre buscando mejorar y crecer como profesional.`,
    },
    {
        id: 2,
        info: `Cuento con una amplia gama de conocimientos, incluyendo lenguajes de programación como C#, Python y SQL, así como herramientas para desarrollo web (HTML, CSS y JavaScript). También manejo 
                varias tecnologías y frameworks de los lenguajes de programación mencionados anteriormente.`,
    },
    {
        id: 3,
        info: `A lo largo de mi formación, mi experiencia se ha construido a través de la creación de proyectos personales y universitarios. He diseñado y desarrollado sistemas completos integrando frontend 
                y backend. Estas experiencias han sido clave para fortalecer mis habilidades de análisis, desarrollo y colaboración.`,
    },
    {
        id: 4,
        info: `Actualmente, soy estudiante de Ingeniería en Sistemas en la Universidad Latina, donde he adquirido conocimientos avanzados en diferentes areas. Complemento mi formación con certificados en lenguajes 
                de programación (C#, Python y SQL) y desarrollo web (HTML, CSS y JavaScript).`
    },
]