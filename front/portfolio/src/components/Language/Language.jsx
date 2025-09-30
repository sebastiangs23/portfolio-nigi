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
    background: "— Background —",
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
    skills_personal: "Personal",
    skills_personal_all: [
      "Stress resistance",
      "Speed and efficiency",
      "Organizational skills",
      "Knowledge of culinary techniques",
      "Curiosity and willingness to learn",
      "Patience and perseverance",
      "Ability to work independently",
      "Critical thinking and quality awareness",
    ],
    skills_team: "Team",
    skills_team_all: [
      "Team player",
      "Proactive",
      "Adaptive",
      "Detail oriented",
      "Service aptitude",
      "Creative",
      "Good at guest relations",
    ],
    _gallery: "— Gallery —",
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
    background_: "— Parcours —",
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
    background: "— Formation —",
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
    skills_personal: "Personal",
    skills_personal_all: [
      "Résistance au stress",
      "Rapidité et efficacité",
      "Sens de l'organisation",
      "Connaissance des techniques culinaires",
      "Curiosité et envie d'apprendre",
      "Patience et persévérance",
      "Capacité à travailler de manière autonome",
      "Esprit critique et souci de la qualité",
    ],
    skills_team: "Equipo",
    skills_team_all: [
      "Esprit d'équipe",
      "Proactif",
      "Adaptable",
      "Souci du détail",
      "Aptitude au service",
      "Créatif",
      "Bonnes relations avec les clients",
    ],
    _gallery: "— Galerie —",
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
