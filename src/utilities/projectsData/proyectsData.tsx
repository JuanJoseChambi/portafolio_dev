import MMarket from "../../../public/Projects/MMarket.svg"
import Versa from "../../../public/Projects/VersaShop.png"
import ProductsAPI from "../../../public/Projects/ProductApi.png"
export interface Proyects {
    tecnologias: string[];
    status:string;
    titulo: string;
    fecha: string;
    githubFront?: null | string;
    githubBack?: null | string;
    web?: null | string;
    image: string;
    gridArea: string;
    descripcion: string;
    shortDescription:string;
    short?: boolean;
    infoTec?: null | arrayTecnologias[]
  }
  
export interface arrayTecnologias {
    nombre:string;
    img:JSX.Element;
  }


export const projectsData : Proyects[] = [
    {
        tecnologias: [
            "html",
            "react",
            "typescript",
            "redux",
            "tailwind",
            "node",
            "express",
            "postgresql",
            "javascript",
            "github",
            "git"
        ],
        status:"Activo",
        titulo: "Versa",
        fecha: "28 Feb - 1 Ago - 2024",
        githubFront: "https://github.com/JuanJoseChambi/versa-shop",
        githubBack: "https://github.com/JuanJoseChambi/e-commerce-backend",
        web: "https://versa-shop-five.vercel.app/shop",
        image: Versa.src,
        gridArea: "bigTopLeft",
        descripcion: "Versa es un sitio web e-commerce especializada en moda, diseñada para ofrecer una experiencia de compra en línea intuitiva y atractiva. Este proyecto combina diseño moderno, funcionalidad robusta y una experiencia de usuario fluida",
        shortDescription:"E-commerce de moda con diseño moderno e intuitivo"
    },
    {
        tecnologias: [
            "html",
            "react",
            "javascript",
            "typescript",
            "tailwind",
            "node",
            "express",
            "mongodb",
            "github",
        ],
        status:"Activo",
        titulo: "Products ApI",
        fecha: "1 Nov - 14 Feb 2023/2024",
        githubFront: "https://github.com/JuanJoseChambi/product-api",
        web: "https://product-api-mu-seven.vercel.app/",
        image: ProductsAPI.src,
        gridArea: "bigTopRight",
        short: true,
        descripcion: "Products API es una plataforma de desarrollo web que ofrece una API gratuita especialmente diseñada para proyectos E-commerce. Además de proporcionar datos esenciales para tu proyecto, se destaca como una herramienta de documentación integral para desarrolladores. Este servicio va más allá de simplemente suministrar información; brinda oportunidades valiosas para practicar y perfeccionar habilidades en áreas cruciales como autenticación, billeteras virtuales y seguridad. <br><br> En resumen, Products API se presenta como una solución integral y versátil para aquellos que buscan no solo acceder a una API de productos, sino también potenciar sus habilidades de desarrollo web.",
        shortDescription:"API gratuita para E-commerce y práctica desarrolladores."
    },
    // {
    //   tecnologias: [
    //     "html",
    //     "react",
    //     "javascript",
    //     "tailwind",
    //     "github",
    //   ],
    //   status:"Desactivo",
    //   titulo: "JCDV",
    //   fecha: "26 - Oct - 13 Nov - 2023",
    //   github: "https://github.com/JuanJoseChambi/IJCDV",
    //   web: null,
    //   image: JCDV,
    //   gridArea: "bigTopLeft",
    //   descripcion: "JCDV (Jesús Camino De Vida) es un proyecto que se centró en la aplicación práctica de nuevas tecnologías. Aunque, por el momento, solo se cuenta con la sección de inicio, esta etapa ha sido fundamental para consolidar y adquirir conocimientos y destrezas en el uso de la tecnología tailwind, la cual he venido empleando desde ese momento.",
    // },
    // {
    //     tecnologias: [
    //         "html",
    //         "CSS",
    //         "react",
    //         "javascript",
    //         "typescript",
    //         "SASS",
    //         "redux",
    //         "github",
    //     ],
    //     status:"Activo",
    //     titulo: "TN",
    //     fecha: "09 Oct - 24 Oct - 2023",
    //     githubFront: "https://github.com/JuanJoseChambi/T-N",
    //     web: "https://t-n-chi.vercel.app/",
    //     image: Tn,
    //     gridArea: "bigBotCenter",
    //     short: true,
    //     descripcion: "TN es un proyecto que se materializa como un sitio web diseñado para gestionar tareas y notas. Este utiliza almacenamiento local, específicamente localstorage.<br> <br> El sitio proporciona funcionalidades clave, tales como la capacidad de crear, editar y eliminar tareas y notas. También cuenta con opciones para filtrar y buscar entre tus notas y tareas, asignar fechas y horarios, así como marcar y señalar las tareas y notas completadas. Además, destaca por su diseño responsive para adaptarse eficazmente a diferentes dispositivos.",
    // },
    // {
    //   tecnologias: [
    //     "html",
    //     "CSS",
    //     "react",
    //     "javascript",
    //     "redux",
    //     "node",
    //     "express",
    //     "postgresql",
    //     "github",
    //   ],
    //   status:"Desactivo",
    //   titulo: "Recipe Food",
    //   fecha: "03 Jul - 20 Jul - 2023",
    //   github: "https://github.com/JuanJoseChambi/Recipe-Food",
    //   web: null,
    //   image: RecipeFood,
    //   gridArea: "minTopCenter",
    //   short: true,
    //   descripcion: "Recipe Food fue un proyecto académico centrado en la creación de una plataforma web que ofrece información detallada sobre recetas, ingredientes y datos nutricionales.<br> <br> Este proyecto Fullstack fue desarrollado de manera individual, utilizando tecnologías clave como react, node.js, express y postgresql. Además, incorporó un sistema API RESTful para mejorar la interacción y accesibilidad de los datos.",
    // },
    {
        tecnologias: [
            "html",
            "CSS",
            "react",
            "javascript",
            "redux",
            "node",
            "express",
            "postgresql",
            "git",
            "github",
        ],
        status:"Desactivo",
        titulo: "MMarket",
        fecha: "20 Jul - 30 Ago - 2023",
        githubFront: "https://github.com/JuanJoseChambi/M-Market",
        web: "https://m-market-iota.vercel.app/home",
        image: MMarket.src,
        gridArea: "minBotRight",
        descripcion:`MMarket fue el resultado final de un proyecto académico grupal, una plataforma web diseñada para tiendas locales de barrios con un enfoque en E-commerce. La metodología SCRUM guió el desarrollo del proyecto, utilizando tecnologías clave como react, node, express y postgresql. <br></br>Entre las características destacadas de MMarket se encuentran servicios integrales como Mercado Pago, nodemailer para el envío de correos electrónicos, autenticación de terceros a través de Firebase y almacenamiento en la nube mediante Cloudinary. La plataforma también incorporó persistencia de usuarios y tablas relacionales entre usuarios, productos, carritos de compra, comentarios, entre otras funcionalidades esenciales. <br></br> Además, el panel de administración del sistema contaba con un dashboard que permitía un control total sobre todos los productos, posibilitando la implementación de un sistema API RESTful.`,
        shortDescription:"Plataforma e-commerce local con funcionalidades avanzadas."
    },
]