import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, ClipboardList, Clock, FileText, CheckCircle, Coins } from 'lucide-react'; // Usunięto AlertCircle
import ScrollAnimationWrapper from '../../components/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next';

// Dane dla sekcji "Proces Diagnostyczny"
const mmpi2DiagnosticProcessSteps = [
  {
    id: 'step1',
    titleKey: '1. Psychological Interview', // Nowy klucz lub można rozważyć generyczny "1. Wywiad ..."
    descriptionKey: 'Detailed conversation with a psychologist about life history, current difficulties, and expectations for diagnostics.',
  },
  {
    id: 'step2',
    titleKey: '2. MMPI-2 Test Administration',
    descriptionKey: 'Completion of the MMPI-2 questionnaire, consisting of 567 questions.',
  },
  {
    id: 'step3',
    titleKey: '3. Results Analysis and Report Preparation',
    descriptionKey: 'Detailed analysis of results by a psychologist and preparation of a written psychological report.',
  },
  {
    id: 'step4',
    titleKey: '4. Discussion of Results', // Istniejący klucz z cognitiveAssessmentPage
    descriptionKey: 'Meeting with a psychologist for a detailed discussion of the test results and provision of recommendations.',
  },
];

// Dane dla sekcji "Co Obejmuje Badanie?"
const mmpi2DiagnosticsIncludesItems = [
  {
    id: 'item1',
    titleKey: 'Psychological interview', // Istniejący klucz
    descriptionKey: 'detailed conversation about life history and current functioning', // Nowy opis dla tego kontekstu
  },
  {
    id: 'item2',
    titleKey: 'MMPI-2 Test',
    descriptionKey: 'comprehensive tool for assessing personality and psychological functioning',
  },
  {
    id: 'item3',
    titleKey: 'Written psychological report', // Nowy klucz (lub można dostosować "Detailed report")
    descriptionKey: 'detailed report with results and interpretation', // Istniejący klucz z cognitiveAssessmentPage
  },
  {
    id: 'item4',
    titleKey: 'Consultation of results', // Istniejący klucz z cognitiveAssessmentPage
    descriptionKey: 'discussion of results and recommendations with a psychologist', // Nowy opis dla tego kontekstu
  },
];

// Dane dla sekcji "Czas Trwania"
const mmpi2DurationItems = [
    { id: 'dur1', titleKey: 'Psychological interview', durationKey: '50 minutes' }, // Istniejący klucz dla tytułu, nowy dla czasu
    { id: 'dur2', titleKey: 'MMPI-2 Test', durationKey: '120-150 minutes' },
    { id: 'dur3', titleKey: '4. Discussion of Results', durationKey: '30 minutes' }, // Istniejący klucz dla tytułu, nowy dla czasu
];

export default function MMPI2Diagnostics() {
  const { t } = useTranslation();

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-[#4A90B9]/5 to-[#68BFB3]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="mb-12">
            <Link
              to="/"
              className="text-[#46B7C6] hover:underline flex items-center gap-2 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('Back to the main page')} {/* Istniejący klucz */}
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('mmpi2DiagnosticsPage.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('mmpi2DiagnosticsPage.description')}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollAnimationWrapper animation="fade-up" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Sekcja Proces Diagnostyczny */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-6 w-6 text-[#46B7C6]" />
                  {/* Istniejący klucz z adhdDiagnosticsPage */}
                  <h2 className="text-2xl font-semibold">{t('adhdDiagnosticsPage.diagnosticProcessTitle')}</h2>
                </div>
                <div className="space-y-6">
                  {mmpi2DiagnosticProcessSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative pl-8 ${index < mmpi2DiagnosticProcessSteps.length - 1 ? 'pb-8 border-l-2 border-[#46B7C6]' : 'border-l-2 border-[#46B7C6]'}`}
                    >
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#46B7C6]" />
                      <h3 className="font-medium text-gray-900 mb-2">{t(step.titleKey)}</h3>
                      <p className="text-gray-600">{t(step.descriptionKey)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sekcja Co Obejmuje Badanie? */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardList className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('mmpi2DiagnosticsPage.whatIncludesTestTitle')}</h2>
                </div>
                <ul className="space-y-4">
                  {mmpi2DiagnosticsIncludesItems.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#46B7C6] mt-1 flex-shrink-0" />
                      <p className="text-gray-600">
                        <strong>{t(item.titleKey)}</strong> - {t(item.descriptionKey)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-8">
              {/* Sekcja Koszt Badania */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="h-5 w-5 text-[#46B7C6]" />
                  {/* Istniejący klucz z cognitiveAssessmentPage */}
                  <h3 className="text-lg font-semibold">{t('cognitiveAssessmentPage.costTitle')}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('mmpi2DiagnosticsPage.fullMMPI2DiagnosticsLabel')}</h4>
                    <p className="text-gray-600 text-sm">1500 PLN</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      {t('mmpi2DiagnosticsPage.costNote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sekcja Czas Trwania */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-[#46B7C6]" />
                  {/* Istniejący klucz z adhdDiagnosticsPage */}
                  <h3 className="text-lg font-semibold">{t('adhdDiagnosticsPage.durationTitle')}</h3>
                </div>
                <div className="space-y-4">
                  {mmpi2DurationItems.map((item) => (
                     <div key={item.id}>
                       <h4 className="font-medium text-gray-900 mb-2">{t(item.titleKey)}</h4>
                       <p className="text-gray-600 text-sm">{t(item.durationKey)}</p>
                     </div>
                  ))}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      {t('mmpi2DiagnosticsPage.totalDurationNote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sekcja Rozpocznij Diagnostykę */}
              <div className="gradient-theme rounded-xl p-6 text-white">
                {/* Istniejący klucz z adhdDiagnosticsPage */}
                <h3 className="text-xl font-semibold mb-4">{t('adhdDiagnosticsPage.startDiagnosisTitle')}</h3>
                {/* Istniejący klucz z autismDiagnosticsPage */}
                <p className="mb-6">
                  {t('autismDiagnosticsPage.startDiagnosisDescription')}
                </p>
                <Link
                  to="/booking"
                  className="block w-full bg-white text-[#46B7C6] text-center px-6 py-3 rounded-xl
                    hover:shadow-lg transition-all duration-300 font-medium"
                >
                  {t('Book an Appointment')} {/* Istniejący klucz */}
                </Link>
              </div>

              {/* Sekcja Przydatne Materiały */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-5 w-5 text-[#46B7C6]" />
                  {/* Istniejący klucz z adhdDiagnosticsPage */}
                  <h3 className="text-lg font-semibold">{t('adhdDiagnosticsPage.usefulMaterialsTitle')}</h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/patient-info/first-visit"
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {t('First visit')} {/* Istniejący klucz */}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/patient-info/faq"
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {/* Istniejący klucz z adhdDiagnosticsPage */}
                      {t('adhdDiagnosticsPage.faqLinkText')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}
