# سجل القرارات الهندسية والعلمية (Decision Log)
## Projet : الأوجه المقدَّمة في الأداء عن القراء العشرة
**Éditeur** : novaskilltech © 2026  
**Recherche & Réalisation** : صلاح الدين أحمد أبو سليمان (Salah Eddine Ahmed Abousoulymane)  
**URL de production** : [https://al-wujuh-al-muqaddama.vercel.app/](https://al-wujuh-al-muqaddama.vercel.app/)  
**Dépôt GitHub** : [https://github.com/novaskilltech/al-wujuh-al-muqaddama.git](https://github.com/novaskilltech/al-wujuh-al-muqaddama.git)  
**Date de clôture** : 20 Septembre 2026  

---

### Format des décisions (Standard NOVA SQUAD)

Chaque décision consigne :
* **ID** : Identifiant unique
* **Objet / Décision** : Choix arrêté
* **Justification** : Fondement scientifique ou technique
* **Alternatives étudiées** : Options écartées et motif
* **Impacts** : Conséquences sur le code, la donnée ou l'UX
* **Statut & Version** : État de déploiement

---

### Registre chronologique des décisions

#### DEC-001 : Déduplication intégrale des 18 doublons Farsh / Usūl
* **Décision** : Fusionner les 18 questions redondantes déclarées en double dans `farsh.ts` dans leurs fiches Usūl respectives à l'aide d'une multi-indexation (`chapterIds: ["farsh-al-huruf"]` et `surahNumbers: [...]`).
* **Justification** : Respecter le principe scientifique « Une question = Une seule fiche ». Éviter la dispersion des données et les incohérences lors des mises à jour.
* **Alternatives** : Conserver 140 questions avec des fiches clonées (rejeté : fausse redondance artificielle).
* **Impacts** : Total des questions ramené à **122 questions réelles et uniques**. Indexation bi-directionnelle transparente.
* **Statut** : ✅ Déployé en production (commit `a100f9a`).

---

#### DEC-002 : Basmala de قالون (Règle unique / Single Face)
* **Décision** : Définir la Basmala pour Qālūn comme une règle de base à face unique (`إثبات البسملة بين السورتين قولاً واحداً`).
* **Justification** : Dans le cadre de la voie étudiée (Châtibiyya / Taysīr), Qālūn n'a que l'affirmation de la Basmala entre deux sourates (avec les 3 visages permis *avec* Basmala : coupure générale, liaison générale, arrêt sur la Basmala). Il n'a ni sakt ni wasl sans Basmala.
* **Alternatives** : Présenter 3 options (Basmala, Sakt, Wasl) et désigner la Basmala comme prioritaire (rejeté : scientifiquement faux pour Qālūn dans ce cadre).
* **Impacts** : Modification de `src/data/qiraat/issues/basmala.ts`.
* **Statut** : ✅ Déployé en production (commit `a100f9a`).

---

#### DEC-003 : Rigueur terminologique (الاختلاس وصلاً ≠ الروم وقفاً ≠ الإشمام)
* **Décision** : Éliminer toute confusion terminologique, notamment la formulation incorrecte `الاختلاس (روم الحركة)`.
* **Justification** : 
  * **الاختلاس** : Écourtement de la voyelle en liaison continue (*waṣlan*) avec rapidité sans silence.
  * **الروم** : Amorce vocalique affaiblie réservée à la pause (*waqfan*), perçue par le proche.
  * **الإشمام** : Arrondissement des lèvres sans son ou nuance vocalique.
* **Alternatives** : Tolérer l'assimilation pédagogique courante (rejeté : non conforme aux exigences académiques).
* **Impacts** : Révision de toutes les fiches concernées (`بارئكم`, `نعما`, `أرنا`, `تأمنا`, `يخصمون`).
* **Statut** : ✅ Déployé en production (commit `a100f9a`).

---

#### DEC-004 : Gestion des questions pluri-transmetteurs (`rawiPreferences`)
* **Décision** : Création du champ `rawiPreferences?: RawiPreference[]` pour détailler le visage préféré de chaque rapporteur sur les questions partagées.
* **Justification** : Des questions comme `يشاء إلى`, `اركب معنا`, `عندي أولم`, `لم يطمثهن` impliquent des règles divergentes selon le rapporteur. Un statut global uniforme était trompeur.
* **Alternatives** : Dupliquer la question pour chaque rapporteur (rejeté pour préserver l'unicité de la mas'ala).
* **Impacts** : Rendu dédié dans `IssueCard.tsx` et affichage précis sur la fiche détaillée.
* **Statut** : ✅ Déployé en production (commit `a100f9a`).

---

#### DEC-005 : Structure des sous-règles (`subRules`) pour les 6 mots de هشام
* **Décision** : Création du champ `subRules?: QiraatSubRule[]` et intégration d'un tableau pour les 6 mots de Hichām dans la sourate Al-Imran, An-Nisa, An-Nur, An-Naml (`يؤده، نؤته، نوله، نصله، فألقه، يتقه`).
* **Justification** : Chaque mot possède sa sourate, son verset et ses visages permis/préférés propres.
* **Alternatives** : Créer 6 fiches distinctes (rejeté : il s'agit d'un même ensemble unitaire de Farsh d'Hichām).
* **Impacts** : Visualisation sous forme de tableau clair dans `IssueCard.tsx`.
* **Statut** : ✅ Déployé en production (commit `a100f9a`).

---

#### DEC-006 : Attribution de `فِرْقٍ` et isolation des 2 cas sensibles (`بارئكم` / `فِرْقٍ`)
* **Décision** : 
  1. Rattacher expressément `فِرْقٍ` à Warsh de la voie d'Al-Azraq et non à « tous les lecteurs ».
  2. Maintenir `بارئكم` (Abū 'Amr) et `فِرْقٍ` sous le statut `needs_primary_check` avec mention explicite de réserve.
  3. Exclure ces 2 cas du mode d'apprentissage certifié et des quiz.
* **Justification** : Respect de l'intégrité de la transmission tant que la confrontation avec la copie originale manuscrite de la *Risāla* n'a pas été réalisée.
* **Impacts** : Mise à jour de `DisputesPage.tsx` et des filtres de quiz `indexes.ts`.
* **Statut** : ✅ Déployé en production (commit `a100f9a`).

---

#### DEC-007 : Sécurisation des vers non collationnés de la Qaṣīda
* **Décision** : Remplacer les 5 vers reconstruits de la Qaṣīda par la mention de réserve stricte : `البيت رقم X — النص قيد النسخ والمقابلة على الأصل المعتمد`.
* **Justification** : Interdiction de publier un texte poétique reconstitué sans collation directe sur la source primaire.
* **Impacts** : Nettoyage de `poem-verses.ts`.
* **Statut** : ✅ Déployé en production (commit `a100f9a`).

---

#### DEC-008 : Création de la page Glossaire (`/glossary`)
* **Décision** : Création d'une page de référence bilingue arabe/français pour les 22 termes scientifiques indispensables du Tajwīd et des Qirā'āt.
* **Justification** : Assurer une compréhension conceptuelle parfaite pour les étudiants et chercheurs.
* **Impacts** : Création de `GlossaryPage.tsx`, ajout de la route `/glossary`, intégration dans le Header et Footer.
* **Statut** : ✅ Déployé en production (commit `a100f9a`).

---

#### DEC-009 : Dynamisation SEO et suppression de tout quota artificiel
* **Décision** : 
  1. Calculer dynamiquement tous les compteurs via `issues.length` (122 questions).
  2. Supprimer toute mention en dur de 140 ou 138.
  3. Dynamiser `document.title` sur toutes les pages de détail (`IssueDetailPage`, `ReaderDetailPage`, `NarratorDetailPage`, `ChapterDetailPage`, `SurahDetailPage`).
* **Justification** : Honnêteté scientifique et cohérence totale des métriques.
* **Impacts** : Modifications dans `HomePage.tsx`, `audit.ts`, `validation.ts`, et l'ensemble des pages de détail.
* **Statut** : ✅ Déployé en production (commit `a100f9a`).

---

#### DEC-010 : Signature de paternité et Copyright éditorial
* **Décision** : Intégration dans le `Footer.tsx` de la signature scientifique :
  * **إعداد وتحقيق: صلاح الدين أحمد أبو سليمان (Salah Eddine Ahmed Abousoulymane)**
  * **© 2026 novaskilltech. جميع الحقوق محفوظة / Tous droits réservés**
* **Justification** : Traçabilité académique et protection de la propriété intellectuelle.
* **Impacts** : Mise à jour de `src/components/Footer.tsx`.
* **Statut** : ✅ Déployé en production (commit `ed95ecd`).

---

#### DEC-011 : Compteur global de visites privacy-first (CountAPI)
* **Décision** : Implémentation d'un compteur global anonyme basé sur CountAPI (`https://countapi.mileshilliard.com/api/v1`) avec session guard via `sessionStorage` et fallback local.
* **Justification** : 
  * Respect strict du RGPD (aucun cookie, aucune collecte d'IP).
  * Résilience face aux pannes ou dépréciations d'anciens services (remplacement de CounterAPI v1 dépréciée).
  * Protection contre le gonflement artificiel des visites lors des navigations intra-site.
* **Impacts** : Création de `GlobalVisitCounter.tsx`, intégration dans `Footer.tsx`.
* **Statut** : ✅ Déployé en production (commit `21dc726`).

---

#### DEC-012 : Création de la Landing Page dédiée (`/about`)
* **Décision** : Création de la page [`/about`](https://al-wujuh-al-muqaddama.vercel.app/about) intitulée « دليل المنصة والتعريف بالمشروع ».
* **Justification** : Offrir une présentation didactique complète du projet sans alourdir la page d'accueil principale pour les utilisateurs réguliers.
* **Contenu** : Genèse, définition du « الوجه المقدم », cartographie des 122 questions, piliers méthodologiques, guide des modules, crédits scientifiques.
* **Impacts** : Création de `AboutPage.tsx`, route `/about`, liens dans le Header, Hero et Footer.
* **Statut** : ✅ Déployé en production (commit `ed95ecd`).

---

#### DEC-013 : Clôture de session et arrêt des démons
* **Décision** : Arrêt complet de tous les processus d'arrière-plan (serveur Vite port 3003, tâches de test) et archivage du journal de décision.
* **Justification** : Clôture propre du cycle de livraison et libération des ressources système.
* **Statut** : ✅ Effectif.
