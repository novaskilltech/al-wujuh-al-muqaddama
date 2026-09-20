import { issues } from "./issues/index.js";
import { readers } from "./readers.js";
import { narrators } from "./narrators.js";
import { paths } from "./paths.js";
import { chapters } from "./chapters.js";
import { poemVerses } from "./poem-verses.js";
import { sources } from "./sources.js";
import { getCertifiedStudyIssues, getSafeStudyIssues } from "./indexes.js";

console.log("==================================================");
console.log("🔍 AUDIT PRODUCTION COMPLET (SCIENTIFIQUE & DATA)");
console.log("==================================================");

let errors: string[] = [];
let warnings: string[] = [];

// 1. Audit scientifique global
const explicitIssues = issues.filter(i => i.evidenceLevel === "explicit_author_statement");
const derivedIssues = issues.filter(i => i.evidenceLevel === "derived_from_author_method");
const pendingIssues = issues.filter(i => i.evidenceLevel === "pending" || i.verificationStatus === "needs_primary_check");

console.log(`Primary explicit:        ${explicitIssues.length} (attendu: 129)`);
console.log(`Primary derived:         ${derivedIssues.length} (attendu: 9)`);
console.log(`Pending verification:    ${pendingIssues.length} (attendu: 2 - بارئكم وفرق)`);

if (explicitIssues.length !== 129) errors.push(`Explicit issues count is ${explicitIssues.length}, expected 129`);
if (derivedIssues.length !== 9) errors.push(`Derived issues count is ${derivedIssues.length}, expected 9`);
if (pendingIssues.length !== 2) errors.push(`Pending issues count is ${pendingIssues.length}, expected 2`);

// Check wording: no "خطأ" or "غير صحيح" in labels or explanations
issues.forEach(i => {
  i.validFaces.forEach(f => {
    if (f.labelAr && (f.labelAr.includes("خطأ") || f.labelAr.includes("غير صحيح"))) {
      errors.push(`Issue ${i.id} has invalid face label containing error wording: ${f.labelAr}`);
    }
  });
});

// 2 & 3. Audit Qasida
console.log(`Qasida verses in DB:     ${poemVerses.length}`);
poemVerses.forEach(v => {
  if (v.textStatus !== "pending_transcription" && v.textStatus !== "verified_primary") {
    errors.push(`Poem verse ${v.id} has invalid textStatus: ${v.textStatus}`);
  }
  v.issueIds?.forEach(id => {
    if (!issues.find(i => i.id === id)) {
      errors.push(`Poem verse ${v.id} references non-existent issue: ${id}`);
    }
  });
  v.chapterIds?.forEach(id => {
    if (!chapters.find(c => c.id === id)) {
      errors.push(`Poem verse ${v.id} references non-existent chapter: ${id}`);
    }
  });
});

// 4. Audit Risala pages
let risalaPagesChecked = 0;
issues.forEach(i => {
  if (i.risalaPages) {
    i.risalaPages.forEach(p => {
      risalaPagesChecked++;
      if (typeof p !== "number" || p <= 0 || p > 500) {
        errors.push(`Issue ${i.id} has invalid risalaPage: ${p}`);
      }
    });
    // Check duplicates
    const uniquePages = new Set(i.risalaPages);
    if (uniquePages.size !== i.risalaPages.length) {
      warnings.push(`Issue ${i.id} has duplicate risalaPages: ${i.risalaPages.join(", ")}`);
    }
  }
});
console.log(`Risala page links:       ${risalaPagesChecked} vérifiés`);

// 5. Audit des 9 éléments dérivés
console.log("Derived issues IDs:");
derivedIssues.forEach(i => {
  console.log(`  - [${i.id}] ${i.titleAr}`);
  if (i.evidenceLevel !== "derived_from_author_method") {
    errors.push(`Derived issue ${i.id} has incorrect evidenceLevel: ${i.evidenceLevel}`);
  }
});

// 6. Audit des dossiers en attente (بارئكم وفرق)
const certifiedIssues = getCertifiedStudyIssues();
const safeIssues = getSafeStudyIssues();

const barikumInCertified = certifiedIssues.find(i => i.id.includes("barikum") || i.titleAr.includes("بارئكم"));
const firaqInCertified = certifiedIssues.find(i => i.id.includes("firaq") || i.titleAr.includes("فرق"));
const barikumInSafe = safeIssues.find(i => i.id.includes("barikum") || i.titleAr.includes("بارئكم"));
const firaqInSafe = safeIssues.find(i => i.id.includes("firaq") || i.titleAr.includes("فرق"));

if (barikumInCertified || firaqInCertified) {
  errors.push("CRITICAL: بارئكم or فرق found in getCertifiedStudyIssues()!");
}
if (barikumInSafe || firaqInSafe) {
  errors.push("CRITICAL: بارئكم or فرق found in getSafeStudyIssues()!");
}

// 7. Audit des Turuq
paths.forEach(p => {
  const narrator = narrators.find(n => n.id === p.narratorId);
  if (!narrator) {
    errors.push(`Path ${p.id} has non-existent narrator: ${p.narratorId}`);
  }
});

// Specific checks
const duriAbuAmr = paths.filter(p => p.narratorId === "al-duri-abu-amr");
const duriKisai = paths.filter(p => p.narratorId === "al-duri-al-kisai");
const khalafHamzah = narrators.find(n => n.id === "khalaf-an-hamza");
const khalafAashir = readers.find(r => r.id === "khalaf10");

if (duriAbuAmr.some(p => p.narratorId === "al-duri-al-kisai")) errors.push("Duri paths cross-contaminated!");
if (khalafHamzah?.readerId !== "hamza") errors.push("Khalaf an Hamzah readerId mismatch!");
if (khalafAashir?.id !== "khalaf10") errors.push("Khalaf al Aashir readerId mismatch!");

// 8. Audit des dépendances et Tahrirat
issues.forEach(i => {
  i.dependsOn?.forEach(depId => {
    if (!issues.find(x => x.id === depId)) {
      errors.push(`Issue ${i.id} dependsOn non-existent issue: ${depId}`);
    }
  });
  i.linkedIssueIds?.forEach(linkId => {
    const target = issues.find(x => x.id === linkId);
    if (!target) {
      errors.push(`Issue ${i.id} linked to non-existent issue: ${linkId}`);
    }
  });
});

console.log("--------------------------------------------------");
console.log(`Erreurs détectées:       ${errors.length}`);
console.log(`Avertissements:          ${warnings.length}`);
if (errors.length > 0) {
  console.error("DÉTAIL DES ERREURS:");
  errors.forEach(e => console.error("  ❌", e));
}
if (warnings.length > 0) {
  console.warn("DÉTAIL DES AVERTISSEMENTS:");
  warnings.forEach(w => console.warn("  ⚠️", w));
}
console.log("==================================================");

if (errors.length > 0) {
  process.exit(1);
} else {
  console.log("✅ AUDIT DATA 100% RÉUSSI");
}
