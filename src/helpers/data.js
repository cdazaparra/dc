// IMAGENES
import imgPregado from "../assets/images/pregrado.png";
import imgPostgrado from "../assets/images/postgrado.png";
import imgMaestria from "../assets/images/maestria.png";
import imgWork1 from "../assets/images/work1.png";
import imgWork2 from "../assets/images/work2.png";
import imgWork3 from "../assets/images/work3.png";
import imgWork4 from "../assets/images/work4.png";
import imgWork5 from "../assets/images/work5.png";
import imgWork6 from "../assets/images/work6.png";
import NetGitHub from "../assets/images/github.png";
import NetPlatzi from "../assets/images/platzi.png";
import NetLinkedId from "../assets/images/LinkedIn.png";
import NetCvlac from "../assets/images/cvlac.png";
const api = "https://pokeapi.co/api/v2/";
let id = 0;
const number = () => {
  id = id + 1;
  return id;
};
export const dataStudy = [
  {
    id: number(),
    src: imgPregado,
    title: "Ingeniero de Sistemas",
    university: "Universidad Distrital Francisco José de Caldas",
    egreso: "2012",
    metodo: "Tesis de grado:",
    descripción:
      "Software de análisis empresarial hecho en PHP, CSS y HTML para medianas y pequeñas empresas que permite un análisis de los inventarios."
  },
  {
    id: number(),
    src: imgPostgrado,
    title: "Especialista en docencia y pedagogía",
    university: "Fundación universitaria del Área Andina",
    egreso: "2018",
    metodo: "Tesis de grado:",
    descripción:
      "Equivalencia de resultados en pruebas internas y externas en la lectura comunicativa y razonamiento matemático en la Institución Nuestra Señora del Carmen."
  },
  {
    id: number(),
    src: imgMaestria,
    title: "Magister en Sistemas Integrados de Gestión",
    university: "Universidad Internacional de la Rioja",
    egreso: "2015",
    metodo: "Tesis de grado:",
    descripción:
      "Sistema Integrado de Gestión de Calidad y Medio Ambiente en la especialidad de Ergonomía y Psicosociología Aplicada."
  }
];
export const dataCourses = [
  {
    id: number(),
    name: "Curso Profesional de Scrum",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Accesibilidad Web",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Historias de Usuario en Scrum",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Básico de Computadores e Informática",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Básico de JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Básico de Programación Orientada a Objetos con JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Básico de Tailwind 2 y 3",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Animaciones con CSS",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de API REST con Javascript: Ejemplos con APIs reales",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de API REST con Javascript: Fundamentos",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de API REST con Javascript: Performance y Usabilidad",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Asincronismo con JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Closures y Scope en JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Complejidad Algorítmica con JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Creación de Blogs con WordPress",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Creación de Tiendas en Línea con WooCommerce",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de CSS Grid Básico",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Debugging con Chrome DevTools",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Diseño para Developers",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Diseño Web con CSS Grid y Flexbox",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Diseño y Creación de Plantillas de Email Marketing",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de ECMAScript: Historia y Versiones de JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Estructuras de Datos con JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Definitivo de HTML y CSS",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Flujo de Desarrollo Moderno CodeStream",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Frameworks y Librerías de JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Frontend Developer",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Historia de la Innovación y el Emprendimiento con Diana Uribe",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Historia de la Programación: Lenguajes y Paradigmas",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Introducción a la Terminal y Línea de Comandos",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Introducción a la Web: Historia y Funcionamiento de Internet",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Introducción al Pensamiento Computacional con Python",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Introducción a React.js",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de JavaScript Engine (V8) y el Navegador",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Manipulación de Arrays en JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Manipulación del DOM",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Pensamiento Lógico: Lenguajes de Programación",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Preprocesadores CSS",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Prework: Configuración de Entorno de Desarrollo en Linux",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Prework: Configuración de Entorno de Desarrollo en macOS",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Prework: Configuración de Entorno de Desarrollo en Windows",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Programación Orientada a Objetos: POO",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de React.js: Manejo Profesional del Estado",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de React.js: Navegación con React Router",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de React.js: Patrones de Render y Composición",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Responsive Design: Maquetación Mobile First",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Sistemas de Diseño Efectivos",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de State Machines en React.js",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Tecnología para Gerentes y Directores",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Transformaciones y Transiciones en CSS",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso de Webpack",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Intermedio de Programación Orientada a Objetos en JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Práctico de Frontend Developer",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Práctico de HTML y CSS",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Práctico de JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Práctico de Maquetación en CSS",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Práctico de Maquetación y Animaciones con CSS",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Práctico de React.js",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Profesional de CSS Grid Layout",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Profesional de Git y GitHub",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Profesional de JavaScript",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Curso Profesional de React.js y Redux",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Fundamentos de Ingeniería de Software",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Laboratorio de JavaScript: Bugs en Proyecto de E-Commerce",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Taller Práctico de JavaScript: Matemáticas y Estadística Básica",
    place: "Platzi"
  },
  {
    id: number(),
    name: "Diseño Web Profesional El Curso Completo, Práctico y desde 0",
    place: "Udemy"
  },
  {
    id: number(),
    name: "Curso Práctico de Django: Desarrollo Web Backend con Python",
    place: "Udemy"
  },
  {
    id: number(),
    name: "Django y Flask - Desarrollo Web Profesional con Python",
    place: "Udemy"
  },
  {
    id: number(),
    name: "Aprender a programar con Java. De cero hasta hacer sistemas",
    place: "Udemy"
  },
  {
    id: number(),
    name: "Curso Django y Django rest framework de básico a profesional",
    place: "Udemy"
  },
  {
    id: number(),
    name: "Vue 3 JS: Iníciate en este Framework",
    place: "Udemy"
  },
  {
    id: number(),
    name: "Adobe XD: Aprende a crear prototipos profesionales desde 0",
    place: "Udemy"
  },
  {
    id: number(),
    name: "Complementaria virtual en desarrollo de aplicaciones con manejo de archivos de texto y el manejo de excepciones en java",
    place: "Sena"
  },
  {
    id: number(),
    name: "Complementaria virtual en desarrollo de aplicaciones con interfaz gráfica, manejo de eventos, clases y objetos: java",
    place: "Sena"
  },
  {
    id: number(),
    name: "Complementaria virtual en programación de dispositivos móviles",
    place: "Sena"
  },
  {
    id: number(),
    name: "Variables y estructuras de control en la programación orientada a objetos: java",
    place: "Sena"
  },
  {
    id: number(),
    name: "Programación de páginas web con HTML y JavaScript",
    place: "Sena"
  },
  {
    id: number(),
    name: "Calidad en el desarrollo de software",
    place: "Sena"
  },
  {
    id: number(),
    name: "Informática: diseño de bases de datos en Sql",
    place: "Sena"
  }
];
export const dataSliderEs = [
  {
    src: "https://picsum.photos/id/1011/1072",
    id: number(),
    alt: "Carlos Daza",
    title: "Carlos Andres Daza Parra",
    description:
      "Nací el 15 de noviembre de 1987 en la ciudad de Chiquinquirá (Boyacá), donde estuve hasta culminar mi bachillerato en el año 2004 en el Colegio Liceo Nacional José Joaquín Casas. En el año 2005 me fui a la ciudad de Bogotá a estudiar Ingeniería de Sistemas en La Universidad Francisco José de Caldas.",
    description2:
      "Mis primeros trabajos comenzaron como desarrollador de software y analista de datos, lo que me llevo por un tiempo a trabajar en el área administrativa en la parte de planeación estratégica, análisis de datos y manejo de servidores, lo que me permitía construir indicadores de calidad y dar soluciones a los requerimientos del medio en el que trabajaba.",
    description3:
      "He sido docente universitario de inglés, desarrollo de software, bases de datos, análisis de datos, bases de datos, administración de servidores, auditoria, metodologías de desarrollo, director de tesis, investigador y desarrollador de software frontend principalmente.",
    description4:
      "Soy bastante disciplinado, me gusta leer y mantenerme actualizado, escucho y aporto sugerencias para mejorar el ambiente laboral o el desarrollo de software que estemos haciendo."
  },
  {
    src: "https://picsum.photos/id/1011/1072",
    id: number(),
    alt: "image1",
    title: "Hobbies y otros",
    description4:
      "Me gusta caminar. Es una forma de despejar la mente, pensar en otras en cosas, sobre todo en esos momentos en los que uno se bloquea y no encuentra una solución a un error o algo que se está planeando.",
    description2:
      "La lectura gran amiga mía. Como propósito personal leo mínimo 4 libros al año, de forma diversa, no tengo un género favorito. Como cosa rara, la documentación de cada actualización de los frameworks o librerías que manejo, que suele ser extensa, pero te permite estar al día",
    description3:
      "Aprender y aprender. Creo que el día que no aprendo algo nuevo fue un día perdido. He realizado aparte de mis estudios profesionales más de 70 cursos certificados, algunos acorde a mi labor, otros, simplemente porque es algo que me gusta y motiva cada día a comprender que existe un mar de conocimientos pero solo tengo un centímetro de profundidad.",
    description:
      "No me gusta ver televisión, pero, por otro lado, si hablamos de películas la cosa cambia mucho. Me encantan las películas de terror, una que sale y fijo la veo. No importa si es mala o buena, es cuestión de gustos y la verdad es que ese tipo de películas me cautivan."
  },
  {
    src: "https://picsum.photos/id/1012/1072",
    id: number(),
    alt: "image2",
    title: "Un poco sobre mí",
    description:
      "Con respecto a los estudios profesionales soy Ingeniero de Sistemas, Especialista en Docencia y Pedagogía y Magister en sistemas integrados de gestión. Cada uno de estos estudios son aplicados a mi quehacer diario. Considero que cada uno me ha dado valor y crecimiento personal.",
    description2:
      "Ser docente no está lejos de ser desarrollador, las clases te permiten poner en práctica todo lo que has aprendido, te hacen afianzar la teoría y demostrarte que has comprendido algo para poderle dar una explicación a algo desde el punto de vista que se requiera.",
    description3:
      "Estado civil: Casado. El amor es algo que no es fácil de describir, pero es importante saber que cuentas con alguien y a su vez eres el apoyo de esa persona. Cada día trae algo nuevo y no todo es perfecto, pero aprendes y enseñas lo que es el trabajo en equipo cuando estas en casa.",
    description4:
      "Soy padre de un joven de 15 años. Él es alguien por quien vale la pena cada esfuerzo que se hace. Tengo dos macotas, un perro y una gata, cada uno un mundo y una personalidad totalmente diferentes."
  }
];
export const dataSliderEn = [
  {
    id: number(),
    id: number(),
    alt: "Carlos Daza",
    title: "Carlos Andres Daza Parra",
    description:
      "I was born on November 15, 1987, in Chiquinquirá (Boyacá), where I stayed until I finished high school in 2004 at the José Joaquín Casas National Lyceum School. In 2005 I went to Bogotá to study Systems Engineering at the Francisco José de Caldas University.",
    description2:
      "My first jobs began as a software developer and data analyst, which led me to work in the administrative area in strategic planning, data analysis, and server management, which allowed me to build quality indicators. Provide solutions to the requirements of the environment in which he worked.",
    description3:
      "I have been a university professor of English, software development, databases, data analysis, databases, server administration, auditing, development methodologies, thesis director, researcher, and frontend software developer especially.",
    description4:
      "I am pretty disciplined, like to read and keep up to date, and I listen and provide suggestions to improve the work environment or the software development we are doing."
  },
  {
    src: "https://picsum.photos/id/1011/1072",
    id: number(),
    alt: "image1",
    title: "Hobbies and others",
    description4:
      "I like to walk. The walk is a way to clear my mentality, and I think about other things, especially in those moments when I get stuck and can't find a solution to an error or something that were planning.",
    description2:
      "The read is my great friend. As a personal purpose, I read at least four books a year, diversely. I don't have a favorite genre. As a rare thing, the documentation of each update of the frameworks or libraries I know, which is usually the biggest, allows you to be up to date.",
    description3:
      "Learn and learn. I think the day I am not learn something new was a waste. Apart from my professional studies, I have completed more than 70 certified courses, some according to my work, others simply because it is something that I like and motivates me every day to understand that there is a sea of ​​knowledge whit I am only one centimeter deep.",
    description:
      "I don't like to watch television, but, on the other hand, if we talk about movies things change a lot. I love horror movies, one that comes out and I see it fixed. It doesn't matter if it's bad or good, it's a matter of taste and the truth is that these kinds of movies captivate me."
  },
  {
    src: "https://picsum.photos/id/1012/1072",
    id: number(),
    alt: "image2",
    title: "About me",
    description:
      "Regarding professional studies, I am a Systems Engineer, a Specialist in Teaching and Pedagogy, and a Master's in integrated management systems. Each of these studies applies to my daily work. I believe that each one has given me the courage and personal growth.",
    description2:
      "Being a teacher is not far from being a developer, classes allow you to put into practice everything you have learned, they make you consolidate the theory and show you that you have understood something to be able to explain something from the point of view that is required. ",
    description3:
      "Marital status Married. Love is not easy to describe. It is significant to know that you have someone that supports you. Every day brings something new, not everything is perfect, but you learn and teach what teamwork is when you are at home.",
    description4:
      "I am the father of a 15-year-old boy. He is someone worth every effort for. I have two pets, a dog and a cat, each with a different world and personality."
  }
];

export const dataWorks = [
  {
    id: number(),
    src: imgWork2,
    cargo: "Administrador de Bases de Datos",
    empresa: "ESE Hospital Regional de Chiquinquirá",
    ingreso: "Marzo de 2011",
    egreso: "Agosto de 2011",
    descripción:
      "Administador de las bases de datos del hospital, generador de informes con SqlServer."
  },
  {
    id: number(),
    src: imgWork2,
    cargo: "Coordinador de estadistica",
    empresa: "ESE Hospital Regional de Chiquinquirá",
    ingreso: "Septiembre de 2011",
    egreso: "Octubre de 2012",
    descripción:
      "Analisis de datos del hospital por medio de consultas al servidos, generador de indicadores y análisis de riesgos."
  },
  {
    id: number(),
    src: imgWork1,
    cargo: "Docente",
    empresa: "Institución Educativa Albert Einstein",
    ingreso: "Marzo de 2013",
    egreso: "Octubre de 2013",
    descripción:
      "Analisis de datos del hospital por medio de consultas al servidos, generador de indicadores y análisis de riesgos."
  },
  {
    id: number(),
    src: imgWork3,
    cargo: "Auditor",
    empresa: "Audifin SAS",
    ingreso: "Febrero de 2014",
    egreso: "Junio de 2014",
    descripción:
      "Desarrollador del sistema de planeación estratégica, generador y auditor de indicadores de calidad. Análisis de estudios económicos. Mantenimiento del sistema de Calidad."
  },
  {
    id: number(),
    src: imgWork4,
    cargo: "Docente investigador",
    empresa: "Fundación Universitaria de San Gil Unisangil",
    ingreso: "Febrero de 2015",
    egreso: "Julio de 2018",
    descripción:
      "Docente de Administración de servidores, Aministrador de bases de datos, Análisis de algoritmos, Paradigmas de programación, Bases de datos, Desarrollo Web, Ingeniería de software, Formulación de proyectos, Estadística, Ingles, entre otros"
  },
  {
    id: number(),
    src: imgWork5,
    cargo: "Director de proyecto",
    empresa: "International Data Information And Consulting SAS",
    ingreso: "Junio de 2020",
    egreso: "Octubre de 2022",
    descripción:
      "Project Manager, Frontend Leader, React Developer, Desing Developer."
  },
  {
    id: number(),
    src: imgWork6,
    cargo: "Docente",
    empresa: "Secretaría de Educación de Boyacá",
    ingreso: "Julio de 2018",
    egreso: "Marzo de 2023",
    descripción:
      "Resolución de problemas, Desarrollo front end, Habilidades sociales, Desarrollo de software, Trabajo en equipo, JavaScript."
  }
];

export const initialPosts = [
  {
    id: number(),
    title: "Post 1",
    content: "Contenido del post 1",
    change: ""
  }
];

export const spanish = {
  menuHome: "Inicio",
  menuWorks: "Trabajos",
  menuStudies: "Estudios",
  menuProjects: "Proyectos"
};
export const english = {
  menuHome: "Home",
  menuWorks: "Works",
  menuStudies: "Studies",
  menuProjects: "Projects"
};
export const dataNetWork = [
  {
    src: NetGitHub,
    href: "https://github.com/cdazaparra",
    id: 0,
    alt: "GitHub Carlos Daza",
    title: "GitHub"
  },
  {
    src: NetPlatzi,
    href: "https://platzi.com/p/ingandresdaza/",
    id: 1,
    alt: "Platzi Carlos Daza",
    title: "Platzi"
  },
  {
    src: NetLinkedId,
    href: "https://www.linkedin.com/in/cdazaparra/",
    id: 2,
    alt: "LinkedIn Carlos Daza",
    title: "LinkedIn"
  },
  {
    src: NetCvlac,
    href: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001614128",
    id: 3,
    alt: "Cvlac Carlos Daza",
    title: "Colciencias"
  }
];
