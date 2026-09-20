import { Narrator } from "./types.js";

export const narrators: Narrator[] = [
  // 1. نافع
  {
    id: "qalun",
    readerId: "nafi",
    order: 1,
    nameAr: "قالون",
    nameFr: "Qalun",
    fullNameAr: "عيسى بن مينا المدني (قالون)",
    deathYearHijri: 220,
    biographyVerificationStatus: "traditional_unverified"
  },
  {
    id: "warsh",
    readerId: "nafi",
    order: 2,
    nameAr: "ورش",
    nameFr: "Warsh",
    fullNameAr: "عثمان بن سعيد المصري (ورش)",
    deathYearHijri: 197,
    biographyVerificationStatus: "traditional_unverified"
  },

  // 2. ابن كثير
  {
    id: "al-bazzi",
    readerId: "ibn-kathir",
    order: 1,
    nameAr: "البزي",
    nameFr: "Al-Bazzi",
    fullNameAr: "أحمد بن محمد بن عبد الله بن القاسم بن نافع بن أبي بزة",
    deathYearHijri: 250,
    biographyVerificationStatus: "traditional_unverified"
  },
  {
    id: "qunbul",
    readerId: "ibn-kathir",
    order: 2,
    nameAr: "قنبل",
    nameFr: "Qunbul",
    fullNameAr: "محمد بن عبد الرحمن بن خالد المخزومي المكي",
    deathYearHijri: 291,
    biographyVerificationStatus: "traditional_unverified"
  },

  // 3. أبو عمرو
  {
    id: "al-duri-abu-amr",
    readerId: "abu-amr",
    order: 1,
    nameAr: "الدوري عن أبي عمرو",
    nameFr: "Al-Duri ('an Abi 'Amr)",
    fullNameAr: "حفص بن عمر بن عبد العزيز الدوري الأزدي البغدادي",
    deathYearHijri: 246,
    biographyVerificationStatus: "traditional_unverified"
  },
  {
    id: "al-susi",
    readerId: "abu-amr",
    order: 2,
    nameAr: "السوسي",
    nameFr: "Al-Susi",
    fullNameAr: "صالح بن زياد بن عبد الله السوسي الرقي",
    deathYearHijri: 261,
    biographyVerificationStatus: "traditional_unverified"
  },

  // 4. ابن عامر
  {
    id: "hisham",
    readerId: "ibn-amir",
    order: 1,
    nameAr: "هشام",
    nameFr: "Hisham",
    fullNameAr: "هشام بن عمار بن نصير السلمي الدمشقي",
    deathYearHijri: 245,
    biographyVerificationStatus: "traditional_unverified"
  },
  {
    id: "ibn-dhakwan",
    readerId: "ibn-amir",
    order: 2,
    nameAr: "ابن ذكوان",
    nameFr: "Ibn Dhakwan",
    fullNameAr: "عبد الله بن أحمد بن بشير بن ذكوان القرشي الدمشقي",
    deathYearHijri: 242,
    biographyVerificationStatus: "traditional_unverified"
  },

  // 5. عاصم
  {
    id: "shubah",
    readerId: "asim",
    order: 1,
    nameAr: "شعبة",
    nameFr: "Shu'bah",
    fullNameAr: "شعبة بن عياش بن سالم الأسدي الكوفي",
    deathYearHijri: 193,
    biographyVerificationStatus: "traditional_unverified"
  },
  {
    id: "hafs",
    readerId: "asim",
    order: 2,
    nameAr: "حفص",
    nameFr: "Hafs",
    fullNameAr: "حفص بن سليمان بن المغيرة الأسدي الكوفي",
    deathYearHijri: 180,
    biographyVerificationStatus: "traditional_unverified"
  },

  // 6. حمزة
  {
    id: "khalaf-an-hamza",
    readerId: "hamza",
    order: 1,
    nameAr: "خلف عن حمزة",
    nameFr: "Khalaf ('an Hamzah)",
    fullNameAr: "خلف بن هشام البزار البغدادي (راوي حمزة)",
    deathYearHijri: 229,
    biographyVerificationStatus: "traditional_unverified"
  },
  {
    id: "khallad",
    readerId: "hamza",
    order: 2,
    nameAr: "خلاد",
    nameFr: "Khallad",
    fullNameAr: "خلاد بن خالد الشيباني الكوفي",
    deathYearHijri: 220,
    biographyVerificationStatus: "traditional_unverified"
  },

  // 7. الكسائي
  {
    id: "abul-harith",
    readerId: "al-kisai",
    order: 1,
    nameAr: "أبو الحارث",
    nameFr: "Abul-Harith",
    fullNameAr: "الليث بن خالد البغدادي (أبو الحارث)",
    deathYearHijri: 240,
    biographyVerificationStatus: "traditional_unverified"
  },
  {
    id: "al-duri-al-kisai",
    readerId: "al-kisai",
    order: 2,
    nameAr: "الدوري عن الكسائي",
    nameFr: "Al-Duri ('an Al-Kisa'i)",
    fullNameAr: "حفص بن عمر بن عبد العزيز الدوري (راوي الكسائي أيضاً)",
    deathYearHijri: 246,
    biographyVerificationStatus: "traditional_unverified"
  },

  // 8. أبو جعفر
  {
    id: "ibn-wardan",
    readerId: "abu-jafar",
    order: 1,
    nameAr: "ابن وردان",
    nameFr: "Ibn Wardan",
    fullNameAr: "عيسى بن وردان المدني (الحذاء)",
    deathYearHijri: 160,
    biographyVerificationStatus: "traditional_unverified"
  },
  {
    id: "ibn-jammaz",
    readerId: "abu-jafar",
    order: 2,
    nameAr: "ابن جماز",
    nameFr: "Ibn Jammaz",
    fullNameAr: "سليمان بن محمد بن مسلم بن جماز الزهري المدني",
    deathYearHijri: 170,
    biographyVerificationStatus: "traditional_unverified"
  },

  // 9. يعقوب
  {
    id: "ruways",
    readerId: "yaqub",
    order: 1,
    nameAr: "رويس",
    nameFr: "Ruways",
    fullNameAr: "محمد بن المتوكل اللؤلؤي البصري (رويس)",
    deathYearHijri: 238,
    biographyVerificationStatus: "traditional_unverified"
  },
  {
    id: "rawh",
    readerId: "yaqub",
    order: 2,
    nameAr: "روح",
    nameFr: "Rawh",
    fullNameAr: "روح بن عبد المؤمن الهذلي البصري",
    deathYearHijri: 234,
    biographyVerificationStatus: "traditional_unverified"
  },

  // 10. خلف العاشر
  {
    id: "ishaq",
    readerId: "khalaf10",
    order: 1,
    nameAr: "إسحاق",
    nameFr: "Ishaq",
    fullNameAr: "إسحاق بن إبراهيم بن عثمان الوراق المروزي ثم البغدادي",
    deathYearHijri: 286,
    biographyVerificationStatus: "traditional_unverified"
  },
  {
    id: "idris",
    readerId: "khalaf10",
    order: 2,
    nameAr: "إدريس",
    nameFr: "Idris",
    fullNameAr: "إدريس بن عبد الكريم الحداد البغدادي",
    deathYearHijri: 292,
    biographyVerificationStatus: "traditional_unverified"
  }
];
