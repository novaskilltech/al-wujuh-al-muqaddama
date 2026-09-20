export type VerificationStatus =
  | "verified_primary"
  | "verified_secondary"
  | "needs_primary_check";

export type PreferenceStatus =
  | "single"
  | "preferred"
  | "equal"
  | "disputed"
  | "needs_primary_verification";

export type RuleType =
  | "base_rule"
  | "preferred_face"
  | "equal_faces"
  | "exception"
  | "advanced_tahrir";

export type PerformanceType =
  | "fath"
  | "taqlil"
  | "imala"
  | "sukun"
  | "short_vowel"
  | "sila"
  | "tashil"
  | "ibdal"
  | "idgham"
  | "izhar"
  | "naql"
  | "sakt"
  | "wasl"
  | "basmala"
  | "qasr"
  | "tawassut"
  | "ishba"
  | "ishmam"
  | "rawm"
  | "tahqiq"
  | "hadhf"
  | "ithbat"
  | "other";

export type IssueScope =
  | "reader"
  | "narrator"
  | "path"
  | "word"
  | "ayah"
  | "group";

export type EvidenceLevel =
  | "explicit_author_statement"
  | "derived_from_author_method"
  | "secondary_summary"
  | "pending";

export interface Face {
  id: string;
  labelAr: string;
  labelFr?: string;
  performanceType: PerformanceType;
  affectedLetters?: string[];
  notesAr?: string;
}

export interface QiraatIssue {
  id: string;

  titleAr: string;
  titleFr?: string;

  chapterId: string;
  chapterIds?: string[];

  readerId?: string;
  narratorId?: string;
  pathId?: string;

  scope: IssueScope;
  evidenceLevel: EvidenceLevel;

  surahNumber?: number;
  surahNumbers?: number[];
  surahNameAr?: string;
  ayahNumbers?: number[];

  quranText?: string;

  ruleType: RuleType;

  validFaces: Face[];
  preferredFaceId?: string;

  preferenceStatus: PreferenceStatus;

  simpleExplanationAr: string;
  detailedExplanationAr?: string;

  preferenceReasonAr?: string;
  disagreementAr?: string;
  memoryRuleAr?: string;

  subRules?: {
    wordAr: string;
    validFaces: Face[];
    preferredFaceId?: string;
    notesAr?: string;
  }[];

  rawiPreferences?: {
    narratorId: string;
    preferredFaceId: string;
    notesAr?: string;
  }[];

  poemVerseIds?: string[];
  risalaPages?: number[];

  sourceIds: string[];

  linkedIssueIds?: string[];
  dependsOn?: string[];
  forbiddenCombinations?: string[];
  derivationNoteAr?: string;
  primaryEvidence?: {
    sourceId: string;
    pages?: number[];
    excerptAr?: string;
  };

  difficulty: 1 | 2 | 3;

  verificationStatus: VerificationStatus;
}

export interface Reader {
  id: string;
  order: number;
  nameAr: string;
  nameFr?: string;
  fullNameAr?: string;
  deathYearHijri?: number;
  cityAr?: string;
  biographyVerificationStatus?: "verified" | "traditional_unverified";
}

export interface Narrator {
  id: string;
  readerId: string;
  order: number;
  nameAr: string;
  nameFr?: string;
  fullNameAr?: string;
  deathYearHijri?: number;
  biographyVerificationStatus?: "verified" | "traditional_unverified";
}

export interface Path {
  id: string;
  nameAr: string;
  nameFr?: string;
  narratorId: string;
  sourceIds: string[];
  descriptionAr?: string;
}

export interface Chapter {
  id: string;
  order: number;
  titleAr: string;
  titleFr?: string;
  category: "usul" | "farsh";
  descriptionAr?: string;
  whatYouWillLearnAr?: string;
}

export interface PoemVerse {
  id: string;
  order: number;
  fullText: string;
  firstHemistichAr?: string;
  secondHemistichAr?: string;
  textStatus: "verified" | "pending_transcription";
  issueIds?: string[];
  chapterIds?: string[];
  risalaPages?: number[];
}

export interface Source {
  id: string;
  titleAr: string;
  authorAr: string;
  role: "primary" | "secondary";
  descriptionAr?: string;
}
