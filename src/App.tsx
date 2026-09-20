import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.js";
import { SpecialistModeProvider } from "./context/SpecialistModeContext.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

// Pages
import { HomePage } from "./pages/HomePage.js";
import { ReadersPage } from "./pages/ReadersPage.js";
import { ReaderDetailPage } from "./pages/ReaderDetailPage.js";
import { NarratorDetailPage } from "./pages/NarratorDetailPage.js";
import { ChaptersPage } from "./pages/ChaptersPage.js";
import { ChapterDetailPage } from "./pages/ChapterDetailPage.js";
import { SurahsPage } from "./pages/SurahsPage.js";
import { SurahDetailPage } from "./pages/SurahDetailPage.js";
import { IssueDetailPage } from "./pages/IssueDetailPage.js";
import { ComparePage } from "./pages/ComparePage.js";
import { DisputesPage } from "./pages/DisputesPage.js";
import { MemorizePage } from "./pages/MemorizePage.js";
import { QuizPage } from "./pages/QuizPage.js";
import { TahriratQuizPage } from "./pages/TahriratQuizPage.js";
import { QasidaPage } from "./pages/QasidaPage.js";
import { RisalaPage } from "./pages/RisalaPage.js";
import { SheikhPage } from "./pages/SheikhPage.js";
import { VerificationPage } from "./pages/VerificationPage.js";

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <SpecialistModeProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 font-sans">
            <Header />

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <Routes>
                <Route path="/" element={<HomePage />} />
                
                {/* Readers & Narrators */}
                <Route path="/readers" element={<ReadersPage />} />
                <Route path="/readers/:readerId" element={<ReaderDetailPage />} />
                <Route path="/readers/:readerId/:narratorId" element={<NarratorDetailPage />} />
                
                {/* Chapters & Usul */}
                <Route path="/chapters" element={<ChaptersPage />} />
                <Route path="/chapters/:chapterId" element={<ChapterDetailPage />} />
                
                {/* Surahs & Farsh */}
                <Route path="/surahs" element={<SurahsPage />} />
                <Route path="/surahs/:surahNumber" element={<SurahDetailPage />} />
                
                {/* Issues */}
                <Route path="/issues/:issueId" element={<IssueDetailPage />} />
                
                {/* Advanced Study Tools */}
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/disputes" element={<DisputesPage />} />
                <Route path="/memorize" element={<MemorizePage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/quiz/tahrirat" element={<TahriratQuizPage />} />
                
                {/* Primary Texts & Academic Verification */}
                <Route path="/qasida" element={<QasidaPage />} />
                <Route path="/risala" element={<RisalaPage />} />
                <Route path="/sheikh-an-nahhas" element={<SheikhPage />} />
                <Route path="/verification" element={<VerificationPage />} />
                
                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </SpecialistModeProvider>
    </LanguageProvider>
  );
};
