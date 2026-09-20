import { Path } from "./types.js";

export const paths: Path[] = [
  // طرق قالون
  {
    id: "abi-nashit-an-qalun",
    nameAr: "أبو نشيط عن قالون",
    nameFr: "Abi Nashit ('an Qalun)",
    narratorId: "qalun",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah", "al-taysir"],
    descriptionAr: "طريق الشاطبية والتيسير عن قالون"
  },
  {
    id: "al-hulwani-an-qalun",
    nameAr: "الحلواني عن قالون",
    nameFr: "Al-Hulwani ('an Qalun)",
    narratorId: "qalun",
    sourceIds: ["an-nahhas-risala", "al-nashr"],
    descriptionAr: "طريق الحلواني عن قالون من طريق طيبة النشر"
  },

  // طرق ورش
  {
    id: "al-azraq",
    nameAr: "الأزرق عن ورش",
    nameFr: "Al-Azraq ('an Warsh)",
    narratorId: "warsh",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah", "al-taysir"],
    descriptionAr: "طريق أبي يعقوب يوسف بن عمرو بن يسار المدني ثم المصري (الأزرق)، وهو أصل رواية ورش من طريق الشاطبية"
  },
  {
    id: "al-asbahani",
    nameAr: "الأصبهاني عن ورش",
    nameFr: "Al-Asbahani ('an Warsh)",
    narratorId: "warsh",
    sourceIds: ["an-nahhas-risala", "al-nashr"],
    descriptionAr: "طريق أبي بكر محمد بن عبد الرحيم الأصبهاني عن ورش من طريق طيبة النشر"
  },

  // طرق ابن كثير
  {
    id: "al-bazzi-shatibiyyah",
    nameAr: "طريق الشاطبية عن البزي",
    nameFr: "Al-Bazzi (Shatibiyyah Path)",
    narratorId: "al-bazzi",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah"],
    descriptionAr: "طريق أبي ربيعة عن البزي من طريق الشاطبية والتيسير"
  },
  {
    id: "qunbul-shatibiyyah",
    nameAr: "طريق الشاطبية عن قنبل",
    nameFr: "Qunbul (Shatibiyyah Path)",
    narratorId: "qunbul",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah"],
    descriptionAr: "طريق ابن مجاهد عن قنبل من طريق الشاطبية والتيسير"
  },

  // طرق أبي عمرو
  {
    id: "al-duri-abu-amr-shatibiyyah",
    nameAr: "طريق الشاطبية عن الدوري عن أبي عمرو",
    nameFr: "Al-Duri 'an Abi 'Amr (Shatibiyyah Path)",
    narratorId: "al-duri-abu-amr",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah"],
    descriptionAr: "طريق أبي الزعراء عن الدوري عن أبي عمرو"
  },
  {
    id: "al-susi-shatibiyyah",
    nameAr: "طريق الشاطبية عن السوسي",
    nameFr: "Al-Susi (Shatibiyyah Path)",
    narratorId: "al-susi",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah"],
    descriptionAr: "طريق موسى بن جرير عن السوسي"
  },

  // طرق ابن عامر
  {
    id: "hisham-al-hulwani",
    nameAr: "الحلواني عن هشام",
    nameFr: "Al-Hulwani ('an Hisham)",
    narratorId: "hisham",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah"],
    descriptionAr: "طريق أحمد بن يزيد الحلواني عن هشام"
  },
  {
    id: "ibn-dhakwan-al-akhfash",
    nameAr: "الأخفش عن ابن ذكوان",
    nameFr: "Al-Akhfash ('an Ibn Dhakwan)",
    narratorId: "ibn-dhakwan",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah"],
    descriptionAr: "طريق هارون بن موسى الأخفش عن ابن ذكوان"
  },

  // طرق عاصم
  {
    id: "hafs-shatibiyyah",
    nameAr: "طريق عبيد بن الصباح عن حفص (الشاطبية)",
    nameFr: "Hafs (Shatibiyyah Path)",
    narratorId: "hafs",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah"],
    descriptionAr: "طريق أبي طاهر عبد الواحد بن أبي هاشم عن عبيد بن الصباح عن حفص"
  },

  // طرق حمزة
  {
    id: "khalaf-an-hamza-shatibiyyah",
    nameAr: "طريق إدريس عن خلف عن حمزة",
    nameFr: "Khalaf 'an Hamzah (Shatibiyyah Path)",
    narratorId: "khalaf-an-hamza",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah"],
    descriptionAr: "طريق إدريس بن عبد الكريم الحداد عن خلف عن حمزة"
  },
  {
    id: "khallad-shatibiyyah",
    nameAr: "طريق ابن الهيثم عن خلاد",
    nameFr: "Khallad (Shatibiyyah Path)",
    narratorId: "khallad",
    sourceIds: ["an-nahhas-risala", "al-shatibiyyah"],
    descriptionAr: "طريق محمد بن شاذان عن ابن الهيثم عن خلاد"
  },

  // طرق خلف العاشر
  {
    id: "idris-khalaf10-durrah",
    nameAr: "طريق إدريس عن خلف العاشر (الدرة)",
    nameFr: "Idris 'an Khalaf 10 (Durrah Path)",
    narratorId: "idris",
    sourceIds: ["an-nahhas-risala", "al-durrah"],
    descriptionAr: "طريق إدريس الحداد عن خلف العاشر في اختياره من طريق الدرة"
  }
];
