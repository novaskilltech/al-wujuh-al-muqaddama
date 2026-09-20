import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Search, Sparkles, ChevronRight, HelpCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.js";

interface GlossaryTerm {
  id: string;
  termAr: string;
  termFr: string;
  definitionAr: string;
  definitionFr: string;
  category: "roots" | "phonetics" | "articulation" | "modes";
}

const terms: GlossaryTerm[] = [
  {
    id: "al-wajh",
    termAr: "الوجه",
    termFr: "Al-Wajh (Face / Variante)",
    definitionAr: "ما يُخيّر فيه القارئ ويجوز له الإتيان به، كأوجه العارض للسكون أو أوجه البسملة، ولا يُلزم القارئ بجميعها في التلاوة بل يجزئه وجه منها.",
    definitionFr: "Variante de lecture optionnelle permise pour le lecteur (comme les durées du 'ārid li-ssukūn ou les options de basmala). Le lecteur n'est pas tenu de toutes les exécuter lors d'une même récitation.",
    category: "roots"
  },
  {
    id: "al-wajh-al-muqaddam",
    termAr: "الوجه المقدَّم",
    termFr: "Al-Wajh Al-Muqaddam (Face prioritaire)",
    definitionAr: "المراد بالوجه المقدم في هذا المشروع هو الوجه الذي اختاره الشيخ علي النحاس اعتماداً على الطريق الذي قرأ به الإمام الداني أو ابن الجزري على شيخه في الرواية المسندة في المصدر الذي بنى عليه اختياره، لا مجرد الوجه الأشهر في كتب التعليم. وقد يكون الوجه الآخر صحيحاً ثابتاً في الرواية، لكنه ليس هو الوجه المقدم في الطريق المعتمد هنا.",
    definitionFr: "Dans ce projet, le visage prioritaire est celui retenu par Cheikh Ali An-Nahhas d'après la voie (ṭarīq) transmise par l'imam Ad-Dānī ou Ibn Al-Jazarī de son maître dans la chaîne documentée de la source de référence, et non pas simplement le visage le plus populaire dans les manuels scolaires.",
    category: "roots"
  },
  {
    id: "at-tariq",
    termAr: "الطريق",
    termFr: "Aṭ-Ṭarīq (La Voie)",
    definitionAr: "كل ما نُسب للآخذ عن الراوي وإن سفل؛ مثل طريق الأزرق عن ورش، أو طريق الأصبهاني عن ورش، أو طريق الشاطبية وطريق طيبة النشر.",
    definitionFr: "Toute chaîne issue d'un transmetteur (rāwī) et en aval, comme la voie d'Al-Azraq d'après Warch, ou la voie d'Al-Aṣbahānī d'après Warch, ou la voie de la Shāṭibiyyah.",
    category: "roots"
  },
  {
    id: "ar-riwayah",
    termAr: "الرواية",
    termFr: "Ar-Riwāyah (La Transmission / Version)",
    definitionAr: "كل ما نُسب للآخذ عن الإمام القارئ مباشرة؛ مثل رواية قالون عن نافع، ورواية ورش عن نافع، ورواية حفص عن عاصم.",
    definitionFr: "Toute variante attribuée directement au disciple transmetteur d'un des dix imams lecteurs (ex: transmission de Qālūn ou de Warch d'après Nāfi').",
    category: "roots"
  },
  {
    id: "al-qiraah",
    termAr: "القراءة",
    termFr: "Al-Qirā'ah (La Lecture)",
    definitionAr: "كل خلاف نُسب إلى إمام من أئمة القراء العشرة مما أجمع عليه الرواة والطرق عنه؛ كقراءة نافع المدني أو قراءة عاصم الكوفي أو قراءة ابن كثير المكي.",
    definitionFr: "L'ensemble des règles et variantes attribuées de manière unanime à l'un des dix imams canoniques par ses transmetteurs et voies.",
    category: "roots"
  },
  {
    id: "at-tahqiq",
    termAr: "التحقيق",
    termFr: "At-Taḥqīq (L'articulation soignée / Vérification)",
    definitionAr: "إعطاء كل حرف حقه ومستحقه من المخرج والصفة مع تمكين الحركات وإشباع المدود وتحقيق الهمزات من غير إفراط ولا تمطيط؛ وهو الأصل في مقام التعليم.",
    definitionFr: "Récitation posée et rigoureuse donnant à chaque lettre ses pleins attributs phonétiques et temporels, notamment la pleine articulation des hamzahs sans exagération.",
    category: "phonetics"
  },
  {
    id: "at-tashil",
    termAr: "التسهيل",
    termFr: "At-Tashīl (L'adoucissement de la hamza)",
    definitionAr: "النطق بالهمزة بينها وبين حرف المد المجانس لحركتها؛ فتُسهل المفتوحة بين الهمزة والألف، والمكسورة بين الهمزة والياء، والمضمومة بين الهمزة والواو.",
    definitionFr: "Adoucissement de la hamzah prononcée à mi-chemin entre la consonne d'occlusion glottale et la voyelle longue correspondant à sa voyelle brève.",
    category: "phonetics"
  },
  {
    id: "al-ibdal",
    termAr: "الإبدال",
    termFr: "Al-Ibdāl (La Substitution)",
    definitionAr: "جعل حرف مكان حرف آخر؛ كإبدال الهمزة الساكنة حرف مد مجانساً لحركة ما قبلها (نحو: يومنون -> يُومِنُون، وبئس -> بِيْس).",
    definitionFr: "Remplacement d'une lettre par une autre, typiquement la transformation d'une hamzah muette en lettre de prolongation correspondant à la voyelle précédente.",
    category: "phonetics"
  },
  {
    id: "al-idkhal",
    termAr: "الإدخال",
    termFr: "Al-Idkhāl (L'insertion d'un alif de séparation)",
    definitionAr: "الفصل بين همزتي القطع المتلاصقتين بألف مدية بمقدار حركتين تخفيفاً لثقل توالي الهمزتين؛ ويُسمى أيضاً: مدّ الفصل.",
    definitionFr: "Insertion d'un alif de prolongation (2 temps) entre deux hamzahs consécutives pour éviter la lourdeur articulatoire de deux occlusions successives.",
    category: "phonetics"
  },
  {
    id: "al-iskan",
    termAr: "الإسكان",
    termFr: "Al-Iskān (L'inanimation / Mise au repos)",
    definitionAr: "حذف حركة الحرف وجعله ساكناً سكوناً تاماً مفرغاً من سائر الحركات؛ كما في إسكان هاء الكناية أو إسكان الحرف الأول في الإدغام الكبير.",
    definitionFr: "Suppression complète de la voyelle brève d'une consonne pour la rendre entièrement muette/sukūn.",
    category: "articulation"
  },
  {
    id: "al-qasr",
    termAr: "القصر",
    termFr: "Al-Qaṣr (La brièveté / Raccourcissement)",
    definitionAr: "لغة: الحبس والمنع. واصطلاحاً: إثبات حرف المد من غير زيادة عليه عن المقدار الطبيعي (بمقدار حركتين)، أو ترك المد الزائد في المنفصل أو البدل.",
    definitionFr: "Maintien de la durée naturelle d'une lettre de prolongation (2 temps) sans allongement supplémentaire.",
    category: "articulation"
  },
  {
    id: "al-ikhtilas",
    termAr: "الاختلاس",
    termFr: "Al-Ikhtilās (L'écourtement de la voyelle en liaison)",
    definitionAr: "الإتيان ببعض الحركة وصلاً مع تقليل زمنها دون سكون تام؛ ويقدّر بثلثي الحركة تقريباً مع إسراع اللفظ بها وصلاً، وهو مغاير للروم الذي يختص بالوقف بصوت خفي.",
    definitionFr: "Affaiblissement temporel de la voyelle en liaison continue (waṣlan) en prononçant environ les 2/3 de sa durée avec rapidité, distinct du rawm qui est réservé à la pause.",
    category: "articulation"
  },
  {
    id: "ar-rawm",
    termAr: "الروم",
    termFr: "Ar-Rawm (L'amorce vocalique à l'arrêt)",
    definitionAr: "الإتيان ببعض الحركة وقفاً بصوت خفي يسمعه القريب المصغي دون البعيد، ويكون في المجرور والمرفوع (والكسر والضم)، ولا يدخل المفتوح والمنصوب لخفته.",
    definitionFr: "Prononciation partielle et affaiblie d'une fraction de voyelle lors de l'arrêt (waqfan), perceptible par l'auditeur proche mais pas de loin, possible sur les voyelles damma et kasra.",
    category: "articulation"
  },
  {
    id: "al-ishmam",
    termAr: "الإشمام",
    termFr: "Al-Ishmām (L'arrondissement des lèvres)",
    definitionAr: "ضم الشفتين بُعيد إسكان الحرف الموقوف عليه من غير صوت ولا إشارة في اللفظ، أو خلط حركة بحركة وصلاً كخلط الكسرة بشيء من الضمة كما في (قِيلَ) و(غِيضَ) و(تَأْمَنَّا).",
    definitionFr: "Arrondissement muet des lèvres immédiatement après l'extinction consonantique à la pause, ou mélange phonétique d'une voyelle par une nuance de damma en liaison (comme dans qīla ou ta'mannā).",
    category: "articulation"
  },
  {
    id: "as-silah",
    termAr: "الصلة",
    termFr: "Aṣ-Ṣilah (La Liaison prolongée)",
    definitionAr: "مد هاء الضمير (أو ميم الجمع) بعد حركتها بحرف مد مجانس لها وصلاً؛ فتُوصل بالواو إن كانت مضمومة، وبالياء إن كانت مكسورة، إذا توفرت شروطها.",
    definitionFr: "Prolongation vocalique du pronom 'hā' de la 3e personne ou du 'mīm' du pluriel par une semi-voyelle correspondante lors de la liaison.",
    category: "articulation"
  },
  {
    id: "as-sakt",
    termAr: "السكت",
    termFr: "As-Sakt (La micro-pause sans souffle)",
    definitionAr: "قطع الصوت على الحرف القرآني زمناً يسيراً دون تنفس بنية مواصلة القراءة في الحال؛ وهو دون الوقف في الزمن ودون التنفس.",
    definitionFr: "Interruption brève de la voix sur une lettre sans reprise d'inspiration respiratoire, avec l'intention immédiate de poursuivre la lecture.",
    category: "modes"
  },
  {
    id: "an-naql",
    termAr: "النقل",
    termFr: "An-Naql (Le transfert vocalique)",
    definitionAr: "تحريك الساكن الصحيح المنفصل الواقع قبل الهمزة بحركتها وحذف الهمزة لفظاً تخفيفاً (كنقل ورش في «مَنْ آمَنَ» لتصير «مَنَامَنَ»).",
    definitionFr: "Transfert de la voyelle d'une hamzah sur la consonne muette qui la précède immédiatement, suivi de l'omission articulatoire de ladite hamzah.",
    category: "phonetics"
  },
  {
    id: "at-taqlil",
    termAr: "التقليل",
    termFr: "At-Taqlīl (L'inflexion moyenne / Imāla mineure)",
    definitionAr: "النطق بالألف بين الفتح المتوسط والإمالة الكبرى، ويُسمّى أيضاً: الإمالة الصغرى أو بين اللفظين؛ وهو سمة بارزة في رواية ورش عن نافع وأبي عمرو البصري.",
    definitionFr: "Inflexion phonétique intermédiaire de la voyelle 'alif' entre l'ouverture franche (fatḥa) et l'inflexion forte (imāla kubrā), propre notamment à Warch et Abū 'Amr.",
    category: "phonetics"
  },
  {
    id: "al-imalah",
    termAr: "الإمالة",
    termFr: "Al-Imālah (L'inflexion forte / Imāla majeure)",
    definitionAr: "أن تنحو بالفتحة نحو الكسرة، وبالألف نحو الياء كثيراً من غير قلب خالص ولا إشباع؛ وتُسمّى الإمالة الكبرى أو البطح أو الإضجاع، وتشتهر عند حمزة والكسائي وخلف العاشر.",
    definitionFr: "Inflexion prononcée de la fatḥa vers la kasra et du alif vers le yā', propre à Hamza, Al-Kisā'ī et Khalaf.",
    category: "phonetics"
  },
  {
    id: "al-idgham",
    termAr: "الإدغام",
    termFr: "Al-Idghām (L'assimilation)",
    definitionAr: "إدخال حرف ساكن في حرف متحرك بحيث يصيران حرفاً واحداً مشدداً كالثاني يرتفع المخرج عنهما ارتفاعة واحدة؛ وينقسم إلى صغير وكبير، وكامل وناقص.",
    definitionFr: "Assimilation articulatoire d'une consonne muette dans une consonne vocalisée suivante de sorte qu'elles ne forment qu'une seule lettre géminée/redoublée.",
    category: "articulation"
  },
  {
    id: "al-idh-har",
    termAr: "الإظهار",
    termFr: "Al-Iẓ-hār (L'explicitation / Articulation distincte)",
    definitionAr: "إخراج كل حرف من مخرجه الأصلي بغير غنة زائدة ولا سكت ولا إدغام في الحرف المظهر؛ وهو الأصل في الحروف والكلمات.",
    definitionFr: "Prononciation distincte et séparée de chaque phonème depuis son point d'articulation naturel, sans nasalisation ajoutée ni pause.",
    category: "articulation"
  },
  {
    id: "at-tahrir",
    termAr: "التحرير",
    termFr: "At-Taḥrīr (L'épuration critique des voies)",
    definitionAr: "تنقية القراءة من الخلط والتركيب، وتمييز كل طريق ورواية بخصائصها ومسائلها المروية دون تداخل غير صحيح بين الطرق المتشعبة عند أئمة الفن.",
    definitionFr: "Régulation critique rigoureuse des voies de transmission (turuq) interdisant le mélange non authentifié des variantes entre différentes branches d'une même lecture.",
    category: "modes"
  }
];

export const GlossaryPage: React.FC = () => {
  const { dir, lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    document.title = "المصطلحات العلمية في القراءات والأداء | الأوجه المقدمة";
  }, []);

  const filteredTerms = terms.filter(t => {
    const matchesSearch = 
      t.termAr.includes(searchTerm) || 
      t.termFr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.definitionAr.includes(searchTerm) ||
      t.definitionFr.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
        <Link to="/" className="hover:text-amber-700">الرئيسية</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-stone-800">معجم المصطلحات العلمية في القراءات</span>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#fbf8f2] via-white to-[#f5efe6] rounded-3xl border border-amber-200/80 p-6 sm:p-10 shadow-xs space-y-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center mx-auto text-amber-800 shadow-inner">
          <BookOpen className="w-8 h-8 text-amber-700" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>22 مصطلحاً دقيقاً في فن القراءات والتحرير</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-quran leading-tight">
            معجم مصطلحات القراءات والأداء
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-naskh">
            تعريفات علمية محررة للمصطلحات الأساسية المستخدمة في هذا المشروع، مع التمييز الدقيق بين الأوجه والطرق والفرق الجوهري بين الاختلاس والروم والإشمام.
          </p>
        </div>
      </div>

      {/* Search & Category Filter */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute right-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="ابحث في المصطلحات والتعريفات (عربي / فرنسي)..."
              className="w-full pr-10 pl-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm outline-hidden focus:border-amber-500 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-colors ${
                selectedCategory === "all" ? "bg-amber-800 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              الكل ({terms.length})
            </button>
            <button
              onClick={() => setSelectedCategory("roots")}
              className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-colors ${
                selectedCategory === "roots" ? "bg-amber-800 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              الأصول والمصادر (5)
            </button>
            <button
              onClick={() => setSelectedCategory("phonetics")}
              className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-colors ${
                selectedCategory === "phonetics" ? "bg-amber-800 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              الصوتيات والهمز (7)
            </button>
            <button
              onClick={() => setSelectedCategory("articulation")}
              className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-colors ${
                selectedCategory === "articulation" ? "bg-amber-800 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              الحركات والأداء (8)
            </button>
            <button
              onClick={() => setSelectedCategory("modes")}
              className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-colors ${
                selectedCategory === "modes" ? "bg-amber-800 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              السكت والتحرير (2)
            </button>
          </div>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map(term => (
          <div
            key={term.id}
            id={term.id}
            className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs hover:border-amber-300 hover:shadow-sm transition-all space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
                <h3 className="text-xl font-extrabold text-stone-900 font-quran">
                  {term.termAr}
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/60">
                  {term.termFr}
                </span>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed font-naskh">
                {term.definitionAr}
              </p>
            </div>

            <div className="pt-2 border-t border-stone-100/80">
              <p className="text-stone-500 text-xs leading-relaxed italic">
                {term.definitionFr}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 text-stone-500 space-y-2">
          <HelpCircle className="w-8 h-8 mx-auto text-stone-400" />
          <p>لا توجد مصطلحات مطابقة لبحثك.</p>
        </div>
      )}
    </div>
  );
};
