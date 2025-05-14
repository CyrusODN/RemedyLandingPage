import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TreatmentPage from "./pages/TreatmentPage";
import ServicePage from "./pages/ServicePage";
import ProfessionalPortal from "./pages/ProfessionalPortal";
import PatientPortal from "./pages/PatientPortal";
import RemedyAI from "./pages/RemedyAI";
import ClinicalTrials from "./pages/ClinicalTrials";
import BookingPage from "./pages/BookingPage";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import LoadingScreen from "./components/LoadingScreen";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importy stron "Informacje dla Pacjenta"
import PsychiatricExamPrep from './pages/patient-info/PsychiatricExamPrep';
import FirstVisit from './pages/patient-info/FirstVisit';
import FAQ from './pages/patient-info/FAQ';
import ADHDDiagnostics from './pages/patient-info/ADHDDiagnostics';
import ADHDPrep from './pages/patient-info/ADHDPrep';
import MMPI2Diagnostics from './pages/patient-info/MMPI2Diagnostics';
import CognitiveAssessment from './pages/patient-info/CognitiveAssessment';
import AutismDiagnostics from './pages/patient-info/AutismDiagnostics';
import Psychotherapy from './pages/patient-info/Psychotherapy';
import ParentInfo from './pages/patient-info/ParentInfo';

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Bounce}
            />
            <ScrollToTop />
            <Navbar />
            <PageTransition>
              <Routes>
                {/* Główne trasy */}
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/treatment/:condition"
                  element={<TreatmentPage />}
                />
                <Route path="/services/:service" element={<ServicePage />} />
                <Route path="/professional" element={<ProfessionalPortal />} />
                <Route path="/platform" element={<PatientPortal />} />
                <Route path="/remedy-ai" element={<RemedyAI />} />
                <Route path="/clinical-trials" element={<ClinicalTrials />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />

                {/* Trasy dla "Informacje dla Pacjenta" */}
                <Route path="/patient-info/psychiatric-exam-prep" element={<PsychiatricExamPrep />} />
                <Route path="/patient-info/first-visit" element={<FirstVisit />} />
                <Route path="/patient-info/faq" element={<FAQ />} />
                <Route path="/patient-info/adhd-diagnostics" element={<ADHDDiagnostics />} />
                <Route path="/patient-info/adhd-prep" element={<ADHDPrep />} />
                <Route path="/patient-info/mmpi2-diagnostics" element={<MMPI2Diagnostics />} />
                <Route path="/patient-info/cognitive-assessment" element={<CognitiveAssessment />} />
                <Route path="/patient-info/autism-diagnostics" element={<AutismDiagnostics />} />
                <Route path="/patient-info/psychotherapy" element={<Psychotherapy />} />
                <Route path="/patient-info/parent-info" element={<ParentInfo />} />
                
                {/* Możesz tu dodać więcej tras w przyszłości */}
              </Routes>
            </PageTransition>
          </>
        )}
      </Router>
    </QueryClientProvider>
  );
}

export default App;
