export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceRowItem {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface MethodologyPillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface StatItem {
  number: string;
  value: string;
  label: string;
}

export interface SocialLinks {
  instagram: string;
  instagramHandle: string;
  whatsapp: string;
  whatsappNumber: string;
  email: string;
  phone?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactPageData {
  hero: {
    eyebrow: string;
    headingLines: {
      line1: string;
      line2: string;
      line2Italic?: boolean;
    };
    subtitle: string;
  };
  sidebar: {
    heading: string;
    description: string;
  };
  form: {
    title: string;
    subtitle: string;
    fields: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      directionLabel: string;
      formatLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
    };
    directions: string[];
    formats: string[];
    submitButton: string;
    successTitle: string;
    successMessage: string;
  };
  whatsappAlternative: {
    question: string;
    linkText: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: FaqItem[];
  };
}

export interface AboutPageData {
  hero: {
    eyebrow: string;
    heading: string;
    subtitle: string;
  };
  introParagraphs: string[];
  philosophyQuote: string;
  principles: {
    number: string;
    title: string;
    description: string;
  }[];
  focusAreas: {
    number: string;
    title: string;
    description: string;
  }[];
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    titleLines: {
      line1: string;
      line2: string;
      line2Italic?: boolean;
      line3: string;
    };
    subtitle: string;
    primaryCta: string;
    secondaryLink: string;
    imageCaption: {
      name: string;
      role: string;
    };
    stats: StatItem[];
  };
  statement: {
    eyebrow: string;
    quoteLines: {
      line1: string;
      line2: string;
      line2Italic?: boolean;
      line3: string;
      line4: string;
      line4Italic?: boolean;
    };
    author: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceRowItem[];
  };
  aboutPreview: {
    eyebrow: string;
    headingLines: {
      line1: string;
      line2: string;
      line2Italic?: boolean;
      line3: string;
    };
    bio: string;
    pillars: string[];
    ctaText: string;
    imageAlt: string;
  };
  aboutPage: AboutPageData;
  contactPage: ContactPageData;
  methodology: {
    eyebrow: string;
    heading: string;
    description: string;
    pillars: MethodologyPillar[];
  };
  finalCta: {
    heading: string;
    description: string;
    primaryButton: string;
    whatsappButton: string;
  };
  social: SocialLinks;
}
