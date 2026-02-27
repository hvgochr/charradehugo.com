export type Locale = "en" | "fr";

const translations = {
  en: {
    nav: {
      about: "About",
      blog: "Blog",
      projects: "Projects",
      contact: "Contact",
      close: "Close",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    footer: {
      about: "About",
      blog: "Blog",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      metaTitle: "Hugo Charrade, Full-Stack Developer - Portfolio",
      subtitle:
        "Full-Stack Developer specializing in building fast and scalable web applications with Symfony, Laravel, and modern JavaScript frameworks.",
      cta: "Get in Touch",
    },
    about: {
      metaTitle: "About Me - Hugo Charrade, Full-Stack Developer",
      metaDescription:
        "Learn more about Hugo Charrade, a Full-Stack Developer specializing in building fast and scalable web applications.",
      h1: "Get to know me",
      whoAmI: "Who am I?",
      bio1: "Hi, I'm <strong>Hugo</strong>, a <strong>full-stack developer</strong> based in <strong>France</strong>. I build fast, reliable web applications and APIs using <strong>Symfony</strong>, <strong>Laravel</strong> and modern <strong>JavaScript</strong> frameworks.",
      bio2: "I currently work at <strong>BM Services</strong>, where I develop and maintain production e-commerce platforms using <strong>Symfony</strong>. I started there as an intern during my studies, continued through an apprenticeship, and stayed full-time after graduating. This gave me a strong real-world experience shipping and maintaining software, not just building demos.",
      bio3: "Outside of work, I enjoy building side projects, self-hosting services, experimenting with automation, and learning new tools. I like understanding how things work under the hood and shipping clean, practical solutions.",
      bio4: "I'm currently open to <strong>new opportunities</strong> and exciting projects. If you'd like to work together, feel free to",
      bio4Link: "reach out!",
      downloadResume: "Download Resume",
      journey: "My journey",
      professional: "Professional",
      education: "Education",
      jobs: [
        "<strong>BM Services</strong> - Full-Stack Developer (September 2024 - Present)",
        "<strong>BM Services</strong> - Intern & Apprentice (April 2023 - September 2024)",
      ],
      degrees: [
        "<strong>Bachelor's Degree in Computer Science</strong> - UIT Montpellier / Sète (2021 - 2024)",
      ],
      breadcrumbHome: "Home",
      breadcrumbAbout: "About",
    },
    contact: {
      metaTitle: "Contact - Hugo Charrade, Full-Stack Developer",
      metaDescription:
        "Get in touch with Hugo Charrade, Full-Stack Developer. Find out how to contact him for potential collaborations or job opportunities.",
      h1: "Let's get in touch",
      paragraph:
        "I'm always open to discussing new projects, or opportunities to be part of your visions. Feel free to reach out to me through any of the platforms below, or send me an email. I'll do my best to get back to you as soon as possible!",
    },
    notFound: {
      metaTitle: "Page Not Found - Hugo Charrade, Full-Stack Developer",
      code: "404",
      title: "Page Not Found",
      message:
        "Sorry, the page you're looking for doesn't exist or has been moved.",
      backHome: "Back to Home",
      readBlog: "Read Blog",
      viewProjects: "View Projects",
    },
    blog: {
      metaTitle: "Blog - Hugo Charrade, Full-Stack Developer",
      metaDescription:
        "Read the latest articles and insights from Hugo Charrade, a Full-Stack Developer specializing in building fast and scalable web applications.",
      h1: "Blog",
      recentArticles: "Recent Articles",
      backToBlog: "Back to Blog",
      categoryPrefix: "Blog",
    },
    projects: {
      metaTitle: "Projects - Hugo Charrade, Full-Stack Developer",
      metaDescription:
        "Explore projects by Hugo Charrade, a Full-Stack Developer specializing in building fast and scalable web applications.",
      h1: "Projects",
      recentProjects: "Recent Projects",
      backToProjects: "Back to Projects",
      categoryPrefix: "Projects",
    },
    langSwitcher: {
      label: "Switch language",
    },
    currentStatus: {
      available: "Available for opportunities",
    },
    tableOfContents: {
      onThisPage: "On this page",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      blog: "Blog",
      projects: "Projets",
      contact: "Contact",
      close: "Fermer",
      openMenu: "Ouvrir le menu de navigation",
      closeMenu: "Fermer le menu de navigation",
    },
    footer: {
      about: "À propos",
      blog: "Blog",
      projects: "Projets",
      contact: "Contact",
    },
    home: {
      metaTitle: "Hugo Charrade, Développeur Full-Stack - Portfolio",
      subtitle:
        "Développeur Full-Stack spécialisé dans la création d'applications web rapides et évolutives avec Symfony, Laravel et les frameworks JavaScript modernes.",
      cta: "Me contacter",
    },
    about: {
      metaTitle: "À propos - Hugo Charrade, Développeur Full-Stack",
      metaDescription:
        "En savoir plus sur Hugo Charrade, un développeur Full-Stack spécialisé dans la création d'applications web rapides et évolutives.",
      h1: "Apprenez à me connaître",
      whoAmI: "Qui suis-je ?",
      bio1: "Bonjour, je suis <strong>Hugo</strong>, un <strong>développeur full-stack</strong> basé en <strong>France</strong>. Je crée des applications web et des API fiables et performantes avec <strong>Symfony</strong>, <strong>Laravel</strong> et les frameworks <strong>JavaScript</strong> modernes.",
      bio2: "Je travaille actuellement chez <strong>BM Services</strong>, où je développe et maintiens des plateformes e-commerce en production avec <strong>Symfony</strong>. J'ai commencé en tant que stagiaire pendant mes études, puis en alternance, avant de rejoindre l'équipe à temps plein après mon diplôme. Cette expérience m'a forgé une solide pratique du développement en conditions réelles.",
      bio3: "En dehors du travail, j'aime créer des projets personnels, héberger mes propres services, expérimenter l'automatisation et apprendre de nouveaux outils. J'aime comprendre comment les choses fonctionnent en profondeur et livrer des solutions claires et pratiques.",
      bio4: "Je suis actuellement ouvert à de <strong>nouvelles opportunités</strong> et des projets stimulants. Si vous souhaitez collaborer, n'hésitez pas à",
      bio4Link: "me contacter !",
      downloadResume: "Télécharger le CV",
      journey: "Mon parcours",
      professional: "Expérience professionnelle",
      education: "Formation",
      jobs: [
        "<strong>BM Services</strong> - Développeur Full-Stack (Septembre 2024 - Présent)",
        "<strong>BM Services</strong> - Stagiaire & Alternant (Avril 2023 - Septembre 2024)",
      ],
      degrees: [
        "<strong>BUT Informatique</strong> - IUT Montpellier / Sète (2021 - 2024)",
      ],
      breadcrumbHome: "Accueil",
      breadcrumbAbout: "À propos",
    },
    contact: {
      metaTitle: "Contact - Hugo Charrade, Développeur Full-Stack",
      metaDescription:
        "Contactez Hugo Charrade, développeur Full-Stack. Découvrez comment le joindre pour des collaborations ou des opportunités de travail.",
      h1: "Prenons contact",
      paragraph:
        "Je suis toujours disponible pour discuter de nouveaux projets ou d'opportunités de collaboration. N'hésitez pas à me contacter via l'une des plateformes ci-dessous ou par e-mail. Je ferai de mon mieux pour vous répondre rapidement !",
    },
    notFound: {
      metaTitle: "Page introuvable - Hugo Charrade, Développeur Full-Stack",
      code: "404",
      title: "Page introuvable",
      message:
        "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
      backHome: "Retour à l'accueil",
      readBlog: "Lire le blog",
      viewProjects: "Voir les projets",
    },
    blog: {
      metaTitle: "Blog - Hugo Charrade, Développeur Full-Stack",
      metaDescription:
        "Lisez les derniers articles et réflexions de Hugo Charrade, développeur Full-Stack spécialisé dans la création d'applications web rapides et évolutives.",
      h1: "Blog",
      recentArticles: "Articles récents",
      backToBlog: "Retour au blog",
      categoryPrefix: "Blog",
    },
    projects: {
      metaTitle: "Projets - Hugo Charrade, Développeur Full-Stack",
      metaDescription:
        "Explorez les projets de Hugo Charrade, développeur Full-Stack spécialisé dans la création d'applications web rapides et évolutives.",
      h1: "Projets",
      recentProjects: "Projets récents",
      backToProjects: "Retour aux projets",
      categoryPrefix: "Projets",
    },
    langSwitcher: {
      label: "Changer de langue",
    },
    currentStatus: {
      available: "Disponible pour de nouvelles opportunités",
    },
    tableOfContents: {
      onThisPage: "Sur cette page",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

/**
 * Get translations for a given locale
 *
 * @param locale The locale to get translations for
 * @returns The translations for the given locale
 */
export function useTranslations(locale: Locale): Translations {
  return translations[locale] as unknown as Translations;
}

/**
 * Get the locale from a URL
 *
 * @param url The URL to get the locale from
 * @returns The locale extracted from the URL, defaults to "en" if not found
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, firstSegment] = url.pathname.split("/");
  if (firstSegment === "fr") return "fr";
  return "en";
}

/**
 * Get the other locale (for language switching)
 *
 * @param locale The current locale
 * @returns The other locale
 */
export function getOtherLocale(locale: Locale): Locale {
  return locale === "en" ? "fr" : "en";
}

/**
 * Get the path for a given locale
 *
 * @param locale The locale to get the path for
 * @param path The original path (without locale prefix)
 * @returns The path with the locale prefix if needed
 */
export function getLocalePath(locale: Locale, path: string = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return normalizedPath;
  return `/fr${normalizedPath === "/" ? "" : normalizedPath}`;
}

/**
 * Get the slug (path without locale prefix) from a URL
 *
 * @param id The URL path to get the slug from
 * @returns The slug without the locale prefix
 */
export function getSlug(id: string): string {
  return id.replace(/^(en|fr)\//, "");
}
