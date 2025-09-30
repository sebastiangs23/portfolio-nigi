import { createContext, useContext, useState } from "react";

const sentences = {
  english: {
    navBar: [
      {
        name: "Start",
        href: "#home",
      },
      {
        name: "Background",
        href: "#background",
      },
      {
        name: "Pastries",
        href: "#pastries",
      },
      {
        name: "Certifications",
        href: "#certifications",
      },
    ],
    start: "Start",
    background_: "Background",
    pastries: "Pastries",
    position: "Demi Chef de Partie",
    description_position:
      "Detailed oriented pastry professional, highly passionate for patisserie art. My Creativity & interpersonal skills gives me an edge. Team player, proactive, adaptive, quality conscious. Positive, happy & open minded, Used to being busy,  Good at guest relations & service aptitude. ",
    curriculum: "Curriculum English",
    curriculum_link:
      "https://docs.google.com/document/d/1I0UgdRaRptBlzsb_EVH55I9azX-1m4Bo/edit?usp=sharing&ouid=115427612197801979579&rtpof=true&sd=true",
    certifications: "Certifications",
    certifications_link:
      "https://drive.google.com/file/d/155D_WDM7ZLKUH_8rlangKlkF0TFTl3un/view?usp=sharing",
    background: "Background",
    background_subtitle: "My development",
    work_experience: "Work Experience",
    education: "Education",
    skill: "Skills",
    works: [
      {
        position: "Demi Chef de Partie",
        company: "Miral Experiences",
        date: "September 2025 - Present",
        description:
          "Responsible for creating assorted desserts filled with unique flavor, presenting with creativity and ensuring consistency.",
        description_2: " Managing pastry kitchen cost, inventory & ordering.",
      },
      {
        position: "Pastry commie 1st",
        company: "Dusit Thani, sheik Zayed road, Dubai",
        date: "November 2024 - August 2025",
        description:
          "I specialized in creating chocolate sculptures, artistic showpieces, fondant art, assorted garnishes, customized 3D cakes, and cake pops, earning recognition as Kitchen Employee of the Month, Heart of the House, and a certificate of appreciation from the General Manager. Additionally, I was promoted from Commis 2nd to Commis 1st and completed certified cross-training in the Finance Department.",
      },
      {
        position: "Completed on job training in pastry kitchen",
        company: "IHG Crowne plaza, Dubai",
        date: "November 2021 - October 2022",
        description:
          "I was responsible for handling fine dining à la carte orders while ensuring strict adherence to daily hygiene, food safety practices, and accurate record-keeping.",
        description_2:
          "Additionally, I managed in-house production of cakes, plated desserts, and traditional Arabic sweets, including homemade baklava and oriental cookies.",
      },
      {
        position: "Industrial training at Fairmont",
        company: "Accor, Jaipur",
        date: "November 2020 - April 2021",
        description:
          "Received appreciation for delivering quality work and gained experience at àla Carte kitchen & Pastry.",
      },
    ],
    all_education: [
      {
        company: "Chitkara University",
        culminated: "Culminatede",
        career: "Culinary arts, Baking and Pastry arts.",
        date: "2019 - 2022",
      },
      {
        company: "Chitkara University",
        culminated: "Culminated",
        career: "Convented school",
        date: "2010 - 2017",
      },
    ],
    carrer_henry: "Full Stack Developer",
    carrer_place_henry: "Henry",
    carrer_status_henry: "Culminated",
    carrer_date_henry: "2022 June - 2022 December",
    carrer_zegel: "International Business",
    carrer_place_zegel: "Zegel Ipae",
    carrer_status_zegel: "(1/3) years completed",
    carrer_date_zegel: "2021 March - 2022 March",
    carrer_upc: "Administration & Int. Business",
    carrer_place_upc: "Universidad Privada de Ciencias Aplicadas (UPC)",
    carrer_status_upc: "(2/4) years completed.",
    carrer_date_upc: "2019 August - 2021 February",
    skills_personal: "Personal",
    skills_personal_1: "Self Motivation",
    skills_personal_2: "Self-taught",
    skills_personal_3: "Professional Ethics",
    skills_personal_4: "Empathy and Solidarity",
    skills_personal_5: "Responsible",
    skills_personal_6: "Resilience",
    skills_personal_7: "Problem Analysis",
    skills_personal_8: "Continuous learning",
    skills_team: "Team",
    skills_team_1: "Team Work Scrum",
    skills_team_2: "Agile Methodologies",
    skills_team_3: "Propose Ideas",
    skills_team_4: "Time Management",
    skills_team_5: "Effective Communication",
    skills_team_6: "Active Listening",
    skills_team_7: "Train",
    skills_team_8: "Adaptability and Flexibility",
    ibc_see_more_1: "Certified language platform with ",
    ibc_see_more_2:
      ", focused on basic (A1 - A2) and intermediate (B1 - B2) levels, with dynamic learning methods such as vocabulary practice, grammar, pronunciation, exam simulators, and interactive conversations that unlock as the student passes the lessons.",
    ibc_see_more_3:
      "Each level has multiple lessons, and within each lesson, the student acquires knowledge that allows them to keep advancing. Additionally, the system collects data from the assessments to generate graphs and metrics that identify the students' strengths and weaknesses.",
    ibc_see_more_4:
      "One of my roles was to redesign the database to make it more scalable and capable of supporting the teaching of more languages in the future. Additionally, I migrated the assessment system to use an API integrated with Azure Speech's AI speech recognizer, which is more accurate in evaluating the student on aspects such as pronunciation, prosody, fluency, and complete sentences, among others.",
    inte_see_more_1:
      "An educational platform focused on facilitating and enhancing student learning, simplifying teaching for educators, and monitoring the performance of all students, as well as that of teachers, coordinators, and institution directors.",
    inte_see_more_2:
      "The core of the product is to manage the entire operation of an educational institution at the platform level. The functionalities vary according to the profiles. Initially, the configuration of the school will be carried out by the 'Webmaster,' who represents the highest authority of the institution and can create profiles such as Director, Coordinator, Teachers, Students, etc. On the other hand, the Teacher can create assessments and monitor student performance. The Student, in turn, can review classes, complete assessments, and view their grade book, among other things.",
    inte_see_more_3:
      "After 1 year of developing the platform, it started being commercialized, which is a great satisfaction for me, as it is a product to which my colleagues and I put a lot of love and effort to contribute to the education of Peru in some way.",
    _projects: "Projects",
    database: "Database",
  },
  french: {
    navBar: [
      {
        name: "Page d'accueil",
        href: "#home",
      },
      {
        name: "Parcours",
        href: "#background",
      },
      {
        name: "Pâtisseries",
        href: "#pastries",
      },
      {
        name: "Certifications",
        href: "#certifications",
      },
    ],
    start: "Page d'accueil",
    background_: "Parcours",
    pastries: "Pâtisseries",
    certifications: "Certifications",
    position: "Demi Chef de Partie",
    description_position:
      "Professionnel de la pâtisserie orienté vers le détail, passionné par l’art de la pâtisserie. Ma créativité et mes compétences interpersonnelles me donnent un avantage. Esprit d’équipe, proactif, adaptable et soucieux de la qualité. Positif, jovial et ouvert d’esprit, habitué à un rythme soutenu. Excellente aptitude aux relations avec les clients et au service.",
    curriculum: "Curriculum vitæ français",
    curriculum_link:
      "https://docs.google.com/document/d/189xJH_zdEJyKH3OHbvBwqJMLCChYMZ_73_zD72AmdSU/edit?tab=t.0",
    certifications_link:
      "https://drive.google.com/file/d/155D_WDM7ZLKUH_8rlangKlkF0TFTl3un/view?usp=sharing",
    background: "Formation",
    background_subtitle: "Mon développement",
    work_experience: "Expérience professionnelle",
    education: "Mon éducation",
    skill: "Compétences",
    works: [
      {
        position: "Demi-chef de partie",
        company: "Miral Experiences",
        date: "Septembre 2025 - Présent",
        description:
          "Responsable de la création de desserts variés aux saveurs uniques, présentés avec créativité et en veillant à la constance.",
        description_2:
          "Gestion des coûts de la pâtisserie, de l’inventaire et des commandes.",
      },
      {
        position: "Commis pâtissier 1er",
        company: "Dusit Thani, Sheikh Zayed Road, Dubaï",
        date: "Novembre 2024 - Août 2025",
        description:
          "Spécialisé dans la réalisation de sculptures en chocolat, pièces artistiques, art en fondant, garnitures variées, gâteaux 3D personnalisés et cake pops, j’ai été reconnu comme Employé du Mois en cuisine, Heart of the House, et ai reçu un certificat d’appréciation du Directeur Général. De plus, j’ai été promu de Commis 2e à Commis 1er et j’ai suivi une formation transversale certifiée au sein du département Finance.",
      },
      {
        position: "Formation pratique en pâtisserie",
        company: "IHG Crowne Plaza, Dubaï",
        date: "Novembre 2021 - Octobre 2022",
        description:
          "Responsable de la gestion des commandes à la carte en restauration gastronomique, tout en garantissant le respect strict de l’hygiène quotidienne, des normes de sécurité alimentaire et d’une tenue rigoureuse des registres.",
        description_2:
          "De plus, j’ai assuré la production interne de gâteaux, desserts dressés et douceurs arabes traditionnelles, dont le baklava fait maison et les biscuits orientaux.",
      },
      {
        position: "Stage industriel au Fairmont",
        company: "Accor, Jaipur",
        date: "Novembre 2020 - Avril 2021",
        description:
          "Apprécié pour la qualité du travail fourni et acquisition d’expérience en cuisine à la carte et en pâtisserie.",
      },
    ],
    all_education: [
      {
        company: "Chitkara University",
        culminated: "Completed",
        career: "Culinary Arts, Baking and Pastry Arts",
        date: "2019 - 2022",
      },
      {
        company: "Chitkara University",
        culminated: "Completed",
        career: "Convent School",
        date: "2010 - 2017",
      },
    ],
    carrer_henry: "Desarrollador Full Stack",
    carrer_place_henry: "Henry",
    carrer_status_henry: "Culminado",
    carrer_date_henry: "2022 Junio - 2022 Diciembre",
    carrer_zegel: "Negocios Internacionales",
    carrer_place_zegel: "Zegel Ipae",
    carrer_status_zegel: "(1/3) años culminados.",
    carrer_date_zegel: "2021 Marzo - 2022 Marzo",
    carrer_upc: "Administración y Negocios Int.",
    carrer_place_upc: "Universidad Privada de Ciencias Aplicadas (UPC)",
    carrer_status_upc: "(2/4) años culminados.",
    carrer_date_upc: "2019 Agosto - 2021 Febrero",
    skills_personal: "Personal",
    skills_personal_all: [
      "Motivación personal",
      "Autodidacta",
      "Ética profesional",
      "Empatia y solidaridad",
      "Responsable",
      "Resiliencia",
      "Análisis de Problemas",
      "Aprendizaje continuo",
    ],
    skills_team: "Equipo",
    skills_team_all: [
      "Trabajo en equipo Scrum",
      "Metodologías ágiles",
      "Proponer ídeas",
      "Gestión de tiempo",
      "Comunicación efectiva",
      "Escucha Activa",
      "Capacitar",
      "Adaptabilidad y flexibilidad",
    ],
    ibc_see_more_1: "Plataforma de idiomas certificada con ",
    ibc_see_more_2:
      ", enfocada en los niveles básico (A1 - A2) e intermedio (B1 - B2), con métodos dinámicos de aprendizaje como prácticas de vocabulario, gramática, pronunciación, simuladores de exámenes y conversaciones interactivas que se desbloquean a medida que el estudiante aprueba las lecciones.",
    ibc_see_more_3:
      "Cada nivel cuenta con múltiples lecciones, y dentro de cada lección el estudiante adquiere conocimientos que le permiten seguir avanzando. Además, el sistema recopila datos de las evaluaciones para generar gráficos y métricas que identifican los puntos fuertes y débiles de los estudiantes.",
    ibc_see_more_4:
      "Uno de mis roles fue rediseñar la base de datos para hacerla más escalable y capaz de soportar la enseñanza de más idiomas en el futuro. Además, migré el sistema de evaluación para utilizar una API integrada con el reconocedor de voz de inteligencia artificial de Azure Speech, que es más preciso al evaluar al estudiante en aspectos como pronunciación, prosodia, fluidez y oraciones completas, entre otros.",
    inte_see_more_1:
      "Una plataforma educativa enfocada en facilitar y mejorar el aprendizaje de los estudiantes, simplificar la enseñanza para los docentes, y monitorear el desempeño de todos los estudiantes, así como el de los docentes, coordinadores y directores de la institución.",
    inte_see_more_2:
      "El core del producto es gestionar todo el funcionamiento de una institución educativa a nivel de plataforma. Las funcionalidades varían según los perfiles. Inicialmente, la configuración del colegio la realizará el 'Webmaster', quien representa la máxima autoridad de la institución y puede crear perfiles como Director, coordinador, docentes, estudiantes, etc. Por otro lado, el docente puede crear evaluaciones y monitorear el desempeño de los estudiantes. El estudiante, a su vez, puede revisar las clases, resolver evaluaciones y visualizar su libreta de notas, entre otras cosas.",
    inte_see_more_3:
      "Después de 1 año desarrollando la plataforma, se empezó a comercializar, lo cual para mi es una gran satisfacción , ya que es un producto al cual mis compañeros y yo le pusimos bastante cariño y esfuerzo para de cierta manera aportar con la educación del Perú.",
    _projects: "Proyectos",
    database: "Base de datos",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("english");

  function switchLanguage(lang) {
    setLanguage(lang);
  }

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, sentences: sentences[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
