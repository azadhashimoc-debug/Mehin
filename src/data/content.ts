import { SiteContent } from "@/types";

export const siteContent: SiteContent = {
  meta: {
    title: "Mehin İsmayılova — Diksiya və Nitq Müəlliməsi",
    description: "Mehin İsmayılova ilə fərdi diksiya, aydın nitq, düzgün nəfəs texnikaları və inamlı ictimai çıxış dərsləri.",
  },
  navigation: [
    { label: "Ana səhifə", href: "/" },
    { label: "Haqqımda", href: "/haqqimda" },
    { label: "Əlaqə", href: "/elaqe" },
  ],
  hero: {
    eyebrow: "DİKSİYA • NİTQ • TƏLƏFFÜZ",
    titleLines: {
      line1: "Sözünüzü",
      line2: "daha inamlı",
      line2Italic: true,
      line3: "ifadə edin.",
    },
    subtitle: "Nitqiniz sizin özünüzü necə ifadə etdiyinizdir.\nDüzgün tələffüz, səs və intonasiya üzərində fərdi yanaşma ilə işləyirik.",
    primaryCta: "Dərsə müraciət et",
    secondaryLink: "Haqqımda",
    imageCaption: {
      name: "Mehin İsmayılova",
      role: "Diksiya & Nitq Müəlliməsi",
    },
    stats: [
      {
        number: "01",
        value: "5+ il",
        label: "təcrübə",
      },
      {
        number: "02",
        value: "200+",
        label: "tələbə",
      },
      {
        number: "03",
        value: "1000+",
        label: "dərs saatı",
      },
    ],
  },
  statement: {
    eyebrow: "FƏLSƏFƏ",
    quoteLines: {
      line1: "Düzgün nitq yalnız sözləri",
      line2: "aydın demək deyil.",
      line2Italic: true,
      line3: "Özünü necə ifadə etdiyini",
      line4: "də dəyişməkdir.",
      line4Italic: true,
    },
    author: "Mehin İsmayılova",
  },
  services: {
    eyebrow: "XİDMƏTLƏR",
    heading: "Danışığınız üzərində\nbirlikdə işləyək.",
    subtitle: "Fərdi ehtiyaclarınıza və məqsədlərinizə uyğun tədris modulları.",
    items: [
      {
        id: "diksiya-ve-teleffuz",
        number: "01",
        title: "Diksiya və tələffüz",
        description: "Dəqiq artikulyasiya, düzgün tələffüz və aydın danışıq üzərində iş.",
        href: "/elaqe",
      },
      {
        id: "nitq-ve-ses",
        number: "02",
        title: "Nitq və səs",
        description: "Səsin istifadəsi, nəfəs, temp və intonasiya üzərində fərdi çalışma.",
        href: "/elaqe",
      },
      {
        id: "ictimai-cixis",
        number: "03",
        title: "İctimai çıxış və özünəinam",
        description: "Auditoriya qarşısında daha rahat, inamlı və təsirli danışmağa hazırlıq.",
        href: "/elaqe",
      },
    ],
  },
  aboutPreview: {
    eyebrow: "HAQQIMDA",
    headingLines: {
      line1: "İnsan öz səsini",
      line2: "tapanda, nitqi də",
      line2Italic: true,
      line3: "dəyişir.",
    },
    bio: "Diksiya və nitq üzərində işləmək mənim üçün yalnız düzgün tələffüz deyil. Məqsəd insanın öz fikrini daha aydın, rahat və inamlı ifadə edə bilməsidir.",
    pillars: [
      "Fərdi yanaşma",
      "Praktiki məşqlər",
      "Davamlı inkişaf",
    ],
    ctaText: "Haqqımda daha çox",
    imageAlt: "Mehin İsmayılova — Diksiya və Nitq Müəlliməsi",
  },
  aboutPage: {
    hero: {
      eyebrow: "MÜƏLLİMƏ HAQQINDA",
      heading: "Haqqımda",
      subtitle: "Daha aydın danışmaq, daha inamlı ifadə olunmaq.",
    },
    introParagraphs: [
      "Mən Mehin İsmayılova, diksiya və nitq təlimçisiyəm. İllərdir ki, tələbələrimə və müxtəlif peşə sahiblərinə öz səslərini kəşf etməkdə və fikirlərini təbii inamla çatdırmaqda bələdçilik edirəm.",
      "Diksiya və nitq təlimi mənim üçün sadəcə texniki qaydalar toplusu deyil — insanın daxili potensialını, fikirlərinin aydınlığını və cəmiyyətdəki duruşunu formalaşdıran bir sənətdir.",
    ],
    philosophyQuote: "Hər bir səs fərdi bir kimlikdir. Doğru tənzimlənmiş səs insanın ən güclü vizit kartıdır.",
    principles: [
      {
        number: "01",
        title: "Fərdi Yanaşma",
        description: "Hər kəsin danışıq aparatı və səs tembri unikal olduğu üçün standart şablonlar əvəzinə fərdi inkişaf xəritəsi tətbiq olunur.",
      },
      {
        number: "02",
        title: "Təbii İnam və Rahatlıq",
        description: "Süni və gərgin tələffüz deyil, səsin və bədənin tam sərbəstliyi ilə təbii və axıcı danışıq qabiliyyətinin formalaşdırılması.",
      },
      {
        number: "03",
        title: "Praktiki və Davamlı Vərdişlər",
        description: "Yalnız nəzəriyyə deyil, gündəlik ünsiyyətdə və iş həyatında dərhal tətbiq olunan effektiv artikulyasiya və tənəffüs vərdişləri.",
      },
    ],
    focusAreas: [
      {
        number: "01",
        title: "Artikulyasiya Aparatı",
        description: "Dil, dodaq və çənə əzələlərinin sərbəstləşdirilməsi, səslərin dəqiq və aydın tələffüzü.",
      },
      {
        number: "02",
        title: "Diafraqma və Nəfəs İdarəsi",
        description: "Səsin yorulmadan, titrəmədən və uzun cümlələrdə tükənmədən dərin nəfəslə sabit axışı.",
      },
      {
        number: "03",
        title: "Tembr və İntonasiya",
        description: "Monotonluğun aradan qaldırılması, məntiqi vurğular və canlı danışıq melodiyası.",
      },
      {
        number: "04",
        title: "İctimai Çıxış və Auditoriya",
        description: "Həyəcanın idarə edilməsi, göz təması və kamera qarşısında rahatlıq.",
      },
    ],
  },
  contactPage: {
    hero: {
      eyebrow: "ƏLAQƏ",
      headingLines: {
        line1: "Daha yaxşı nitq üçün",
        line2: "ilk addımı atın.",
        line2Italic: true,
      },
      subtitle: "Dərslər və fərdi nitq proqramı haqqında məlumat almaq üçün mənimlə əlaqə saxlayın.",
    },
    sidebar: {
      heading: "Birlikdə danışığınız üzərində işləyək.",
      description: "Fərdi dərslər, dərs cədvəli və tədris formatı ilə bağlı suallarınızı aşağıdakı kanallar vasitəsilə birbaşa ünvanlaya bilərsiniz.",
    },
    form: {
      title: "Dərsə müraciət formu",
      subtitle: "Məlumatlarınızı daxil edin, müraciətiniz qeydə alınsın.",
      fields: {
        nameLabel: "Ad və soyad *",
        namePlaceholder: "Məs: Aysel Məmmədova",
        phoneLabel: "Telefon *",
        phonePlaceholder: "+994 50 000 00 00",
        emailLabel: "E-poçt",
        emailPlaceholder: "example@mail.com",
        directionLabel: "Dərs istiqaməti *",
        formatLabel: "Dərs formatı",
        messageLabel: "Qısa mesaj",
        messagePlaceholder: "Dərslərdən əsas gözləntiniz və ya fokuslanmaq istədiyiniz mövzu...",
      },
      directions: [
        "01 — Diksiya və tələffüz",
        "02 — Nitq və səs",
        "03 — İctimai çıxış və özünəinam",
        "Kompleks fərdi proqram",
      ],
      formats: [
        "Fərdi (Əyani)",
        "Onlayn (Zoom / Google Meet)",
      ],
      submitButton: "Müraciət göndər",
      successTitle: "Təşəkkür edirik!",
      successMessage: "Müraciətiniz qeydə alındı. Ən qısa zamanda sizinlə əlaqə saxlanılacaqdır.",
    },
    whatsappAlternative: {
      question: "Form doldurmaq istəmirsiniz?",
      linkText: "WhatsApp ilə birbaşa yazın",
    },
    faq: {
      eyebrow: "SUAL-CAVAB",
      heading: "Tez-tez verilən suallar",
      subtitle: "Dərslərin gedişatı və tədris prosesi ilə bağlı əsas məlumatlar.",
      items: [
        {
          id: "faq-1",
          question: "Dərslər necə keçirilir?",
          answer: "Dərslər həm əyani, həm də onlayn formatda praktiki məşqlər, artikulyasiya gimnastikası, tənəffüs texnikaları və nitq materiallarının səsləndirilməsi üzərində interaktiv şəkildə keçirilir.",
        },
        {
          id: "faq-2",
          question: "Dərslər fərdi keçirilir?",
          answer: "Bəli, hər bir tələbənin danışıq aparatı, vərdişləri və məqsədləri fərqli olduğu üçün dərslər əsasən fərdi yanaşma ilə təşkil olunur.",
        },
        {
          id: "faq-3",
          question: "İlk görüşdə nə müəyyənləşdirilir?",
          answer: "İlk sınaq/diaqnostika görüşündə danışıq aparatı təhlil olunur, mövcud tələffüz və tənəffüs xüsusiyyətləri müəyyən edilir və fərdi inkişaf planı tərtib olunur.",
        },
        {
          id: "faq-4",
          question: "Dərslər kimlər üçün uyğundur?",
          answer: "Danışığında aydınlıq, səlislik və təbii inam qazanmaq istəyən hər kəs — rəhbərlər, aparıcılar, müəllimlər, mütəxəssislər və ictimai çıxış edən şəxslər üçün uyğundur.",
        },
      ],
    },
  },
  methodology: {
    eyebrow: "METODOLOGİYA",
    heading: "Dərslərdə nəyə fokuslanırıq?",
    description: "Kompleks və fərdi inkişaf üçün 4 təməl sütun üzərində qurulmuş xüsusi tədris proqramı.",
    pillars: [
      {
        title: "Artikulyasiya",
        subtitle: "01 / Dəqiqlik",
        description: "Danışıq aparatının (çənə, dil, dodaqlar) sərbəst və elastik işləməsi ilə hər bir səsin kristal aydınlıqda səslənməsi.",
      },
      {
        title: "Nəfəs",
        subtitle: "02 / Təməl",
        description: "Doğru diafraqma tənəffüsü ilə səsin yorulmadan, titrəmədən və uzun cümlələrdə tükənmədən sabit axışı.",
      },
      {
        title: "İntonasiya",
        subtitle: "03 / Duyğu",
        description: "Monotonluğu qıraraq məntiqi vurğular, ritm və melodiya ilə dinləyicinin diqqətini canlı saxlamaq bacarığı.",
      },
      {
        title: "Özünəinam",
        subtitle: "04 / Təsir",
        description: "Daxili həyəcan və gərginliyi aradan qaldıraraq həm fərdi, həm də ictimai mühitdə rahat, səmimi və inamlı duruş.",
      },
    ],
  },
  finalCta: {
    heading: "Danışığınızda fərqi\nhiss etməyə başlayın.",
    description: "Səsinizin potensialını üzə çıxarmaq və fərdi tədris proqramına yazılmaq üçün müraciət edin.",
    primaryButton: "Dərsə müraciət et",
    whatsappButton: "WhatsApp ilə yazın",
  },
  social: {
    instagram: "https://instagram.com/mehinismayilova",
    instagramHandle: "@mehinismayilova",
    whatsapp: "https://wa.me/994500000000",
    whatsappNumber: "+994 50 000 00 00",
    email: "info@mehinismayilova.az",
    phone: "+994 50 000 00 00",
  },
};
