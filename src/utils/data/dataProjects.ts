import {
    ingeniaProject,
    timbringProject,
    countriesProject,
    cardQRProject,
    pokedexProject,
    centralMediaProject,
    radiobrowserProject,
    reactandnextpart1,
    reactandnextpart2,
    } from './imagesDeployPreview';
// import { ITechnologies, techAuth0, techJavascript, techMaterialui, techNextjs, techTailwind, techTypescript, techVite } from '../technologies/dataTechnologies';
import { TechnologyName } from "../technologies/dataTechnologies";

export interface Project {
    name: string;
    imageProject: string;
    description: string;
    technologies: TechnologyName[];
    type: "project" | "small project";
    url: string;
    repository: string;
    video?: string;
}

export const dataProjects: Project[] = [
    {
        name: "Ingenia",
        imageProject: ingeniaProject,
        description: `Proyecto grupal realizado para la academia Henry. Ingenia es una plataforma completa de venta de cursos en línea. Permite el registro de usuarios como Compradores, Vendedores y Administradores, cada uno con su propio panel de control. Utiliza una base de datos PostgreSQL y ofrece integración con PayPal para procesar pagos de manera segura.

        Destaca por su funcionalidad de publicación de artículos literarios por parte de los vendedores, lo que enriquece la experiencia del usuario. Además, cuenta con secciones clave como el Top de Ventas de publicaciones y una lista de cursos favoritos, facilitando así a los usuarios la compra de los cursos que más les interesan.

        Una característica destacada es su sección de descuentos, que promueve ofertas especiales y promociones para los usuarios. Este proyecto demuestra nuestro compromiso con la creación de soluciones completas y atractivas en el ámbito de la educación en línea.

        Nota: cuando se ingresa por primer vez al sitio, hay una demora de unos 40 segundos en la carga del sitio debido a las características del servidor. Luego no presenta ésta demora mientras se navega.`,
        technologies: [ "JavaScript", "React", "MaterialUI", "PostgreSQL", "Node.JS", "Figma", "Redux", "Trello"],
        type: "project",
        url: "https://ingenia-v2-frontend.vercel.app",
        repository: "https://github.com/MauricioMTejada/ingenia_v2_frontend",
        video: "https://www.youtube.com/watch?v=jUNfrFeO4CY",
    },
    {
        name: "Timbring",
        imageProject: timbringProject,
        description: `Timbring es un servicio de entrega de productos diseñado específicamente para MercadoLibre. La aplicación ofrece una amplia gama de funciones, que incluyen un sistema de registro de usuarios, un intuitivo panel administrativo y un práctico panel de seguimiento de pedidos. Además, cuenta con formularios muy prácticos que facilitan la carga de datos.

        Los usuarios pueden registrarse fácilmente en la plataforma y gestionar los detalles de sus pedidos realizados en MercadoLibre. También tienen la opción de agregar los números de teléfono de personas de confianza que residan cerca de su domicilio. En caso de que un pedido de MercadoLibre llegue a su hogar y el usuario no esté disponible para recibirlo, el servicio de alertas de Timbring les permite notificar tanto al contacto de confianza como al servicio de entrega. Estas alertas se envían de manera conveniente a través de WhatsApp.

        Participé como parte del programa para egresados Henry Projects. Me sumé como desarrollador Fullstack voluntario para éste proyecto privado, por lo tanto no está disponible el código.`,
        technologies: ["JavaScript", "React", "Next.JS", "PostgreSQL", "Auth0", "Tailwind", "Node.JS", "Trello", "ReduxToolkit", "Express"],
        type: "project",
        url: "https://www.timbring.com",
        repository: "",
    },
    {
        name: "Countries",
        imageProject: countriesProject,
        description: `Countries es un proyecto cuya función se basa en visualizar información de países. Realiza consultas a una API, obtiene la información, la renderiza y permite a los usuarios visualizar las banderas de los países junto con su información correspondiente. Además, ofrece la posibilidad de ordenar los países por continente, población o nombre para una mejor organización.

        Una de las características destacadas es la función para cargar actividades turísticas de un país a través de un formulario. Esta información se guarda en una base de datos para su posterior consulta.

        Al hacer clic en una tarjeta de país, los usuarios son redirigidos a otra vista con información detallada del país seleccionado, lo que facilita una exploración más profunda y completa.
        `,
        technologies: [ "JavaScript", "React", "Node.JS", "Express", "PostgreSQL" ],
        type: "project",
        url: "https://pi-countries-frontend-seven.vercel.app",
        repository: "https://github.com/MauricioMTejada/PI-Countries-Frontend",
    },
    {
        name: "Card.QR",
        imageProject: cardQRProject,
        description: `Generador de Tarjeta con Código QR.

        Éste es básicamente un ejercicio de Formulario, de librerías de fechas y de librería QR.

        Por un lado el usuario tiene un formulario donde cargar sus datos: nombre, apellido, fecha de nacimiento, país de origen.

        También dispone de un calendario donde se completa la fecha de validez pero con la particularidad que se completa por rango, de manera que el usuario debe seleccionar dos fechas, una de inicio y otra de final, éstas fechas indican la fecha de validez de la tarjeta.`,
        technologies: [ "JavaScript", "React", "Vite", "react-datepicker", "react-hook-form", "react-qr-code" ],
        type: "small project",
        url: "https://tarjeta-reactform-reactqr.vercel.app",
        repository: "https://github.com/MauricioMTejada/CardQR",
    },
    {
        name: "Pokedex",
        imageProject: pokedexProject,
        description: `Éste es un trabajo que realicé como práctica de Next.JS.

        Pokedesk es una aplicación para la visualización de pokemóns que se basa en la API de Pokemon.

        Luego de la solicitud a la API, se obtienen los datos de los pokemóns, los cuales se renderizan en pantalla.

        Las opciones de las que disponen son la excibición de detalles de 'sprites' cuando se selecciona un pokemón, y la posibilidad de seleccionar el personaje como favorito. Luego, en la pantalla de 'Favoritos', se pueden visualizar los pokemóns seleccionados.

        Los datos de 'Favoritos' se guardan en el 'localStorage', por lo tanto existe persistencia si se recarga la página. `,
        technologies: [ "JavaScript", "React","Next.JS", "NextUI", "TypeScript", "Tailwind",  ],
        type: "small project",
        url: "https://next-pokedesk-static.vercel.app",
        repository: "https://github.com/MauricioMTejada/Pokedesk",
    },
    {
        name: "RadioBrowser",
        imageProject: radiobrowserProject,
        description: `RadioBrowser es una plataforma en línea que sirve como un repositorio de estaciones de radio disponibles en Internet. Su funcionalidad central se basa en interactuar con la API de Radio-Browser, que actúa como un almacén centralizado de información sobre una amplia variedad de estaciones de radio.

        Cuando el usuario accede a la página, ésta realiza una solicitud a la API de Radio-Browser, la API luego devuelve una lista de resultados.

        Una vez que se obtiene esta información, la página web de RadioBrowser la presenta de manera organizada y fácil de navegar. Las estaciones de radio se muestran agrupadas por género musical, lo que permite a los usuarios explorar rápidamente diferentes tipos de contenido. Cada estación se presenta con su nombre distintivo y su logotipo, lo que ayuda a los usuarios a identificarlas visualmente.

        Además, RadioBrowser ofrece controles individuales para cada estación, lo que permite a los usuarios reproducir, pausar y ajustar el volumen de manera conveniente sin tener que cambiar de página o aplicación. Esto crea una experiencia de usuario fluida y agradable para los amantes de la radio en línea. `,
        technologies: [ "JavaScript", "TypeScript", "React", "radio-browser-api", "react-h5-audio-player"  ],
        type: "small project",
        url: "https://react-radio-browser.vercel.app",
        repository: "https://github.com/MauricioMTejada/RadioBrowser",
    },
    {
        name: "CentralMedia",
        imageProject: centralMediaProject,
        description: `Luego de finalizar la página 'RadioBrowser', sentí la necesidad de realizar una serie de modificaciones significativas en el código. Dado el alcance extenso de estas modificaciones, decidí llevar a cabo un proyecto separado.

        CentralMedia ha sido desarrollado utilizando Next.js, Tailwind y TypeScript. En su esencia, este proyecto tiene como objetivo principal presentar una lista de estaciones de radio de mi ciudad. Sin embargo, a diferencia de RadioBrowser, la funcionalidad principal se basa en un control de reproducción centralizado.

        Para lograr esto, aproveché la utilidad de la biblioteca "react-h5-audio-player", para la visualización y control de la reproducción de audio de cada estación de radio; biblioteca que utilicé en el proyecto anterior.
        `,
        technologies: [ "JavaScript", "TypeScript", "React", "Next.JS", "radio-browser-api", "react-h5-audio-player", "Tailwind" ],
        type: "small project",
        url: "https://media-recopilation.vercel.app",
        repository: "https://github.com/MauricioMTejada/CentralMedia",
    },
    {
        name: "React vs. NextJS - Part1: NextJS",
        imageProject: reactandnextpart1,
        description: `Los proyectos "React vs. NextJS" exploran las diferencias entre React y Next.js. El proyecto "NextJS" incluye rutas dinámicas y optimización SEO, útil para servidores y generación de contenido estático. El de "React" usa Vite, lo que mejora la velocidad de desarrollo y recarga en caliente. Ambos comparan capacidades de frontend.`,
        technologies: [ "JavaScript", "Next.JS" ],
        type: "small project",
        url: "https://react-vs-next-part1-next.vercel.app",
        repository: "https://github.com/MauricioMTejada/react.vs.next-part1.next",
    },
    {
        name: "React vs. NextJS - Part2: React",
        imageProject: reactandnextpart2,
        description: `Los proyectos "React vs. NextJS" exploran las diferencias entre React y Next.js. El proyecto "NextJS" incluye rutas dinámicas y optimización SEO, útil para servidores y generación de contenido estático. El de "React" usa Vite, lo que mejora la velocidad de desarrollo y recarga en caliente. Ambos comparan capacidades de frontend.`,
        technologies: [ "JavaScript", "React", "Vite" ],
        type: "small project",
        url: "https://react-vs-next-part2-react.vercel.app",
        repository: "https://github.com/MauricioMTejada/react.vs.next-part2.react",
    },
];
