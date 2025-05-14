import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, ClipboardList, Clock, FileText, CheckCircle, Coins } from 'lucide-react';
import ScrollAnimationWrapper from '../../components/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next'; // Import hooka i18next

// Dane dla sekcji "Proces Diagnostyczny" - analogicznie do przykładu ClinicalTrials
const diagnosticProcessSteps = [
  {
    id: 'step1',
    // Tytuł kroku (używany jako klucz do tłumaczenia)
    title: '1. Psychiatric Consultation',
    // Opis kroku (używany jako klucz do tłumaczenia)
    description: 'First visit to a psychiatrist, during which a detailed interview and initial assessment of symptoms are carried out. If the doctor suspects ADHD, the patient is referred for specialized psychological diagnostics.',
  },
  {
    id: 'step2',
    title: '2. Psychological Diagnostics',
    description: 'Comprehensive examination conducted by a clinical psychologist using certified diagnostic tools. It includes a psychological interview, tests, and questionnaires.',
  },
  {
    id: 'step3',
    title: '3. Interdisciplinary Consultation',
    description: 'Discussion of diagnostic results between the psychologist and psychiatrist to establish a final diagnosis and plan the best therapeutic approach.',
  },
  {
    id: 'step4',
    title: '4. Discussion of Results and Treatment Plan',
    description: 'Meeting with the patient to present diagnostic results, discuss the diagnosis, and establish a therapeutic plan.',
  },
];

// Dane dla sekcji "Co Obejmuje Diagnostyka?" - analogicznie do przykładu ClinicalTrials
const diagnosticsIncludesItems = [
  {
    id: 'item1',
    // Tytuł elementu (używany jako klucz do tłumaczenia)
    title: 'Psychological interview',
    // Opis elementu (używany jako klucz do tłumaczenia)
    description: 'Detailed conversation about the history of symptoms, development, and functioning in various areas of life.',
  },
  {
    id: 'item2',
    title: 'Examination with certified tools',
    description: 'Use of specialized tests to assess cognitive functions and ADHD symptoms.',
  },
  {
    id: 'item3',
    title: 'Interdisciplinary consultation',
    description: 'Discussion of results among specialists to make an accurate diagnosis.',
  },
  {
    id: 'item4',
    title: 'Detailed report',
    description: 'Written preparation of diagnostic results along with recommendations.',
  },
];

export default function ADHDDiagnostics() {
  const { t } = useTranslation(); // Inicjalizacja hooka i18next

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
              {t('Back to the main page')}
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('adhdDiagnosticsPage.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('adhdDiagnosticsPage.description')}
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
                  <h2 className="text-2xl font-semibold">{t('adhdDiagnosticsPage.diagnosticProcessTitle')}</h2>
                </div>
                <div className="space-y-6">
                  {diagnosticProcessSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative pl-8 ${index < diagnosticProcessSteps.length - 1 ? 'pb-8 border-l-2 border-[#46B7C6]' : 'border-l-2 border-[#46B7C6]'}`}
                    >
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#46B7C6]" />
                      {/* Tłumaczenie tytułu kroku */}
                      <h3 className="font-medium text-gray-900 mb-2">{t(step.title)}</h3>
                      {/* Tłumaczenie opisu kroku */}
                      <p className="text-gray-600">
                        {t(step.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sekcja Co Obejmuje Diagnostyka? */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardList className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('adhdDiagnosticsPage.whatItIncludesTitle')}</h2>
                </div>
                <ul className="space-y-4">
                  {diagnosticsIncludesItems.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#46B7C6] mt-1 flex-shrink-0" />
                      <p className="text-gray-600">
                        {/* Tłumaczenie tytułu elementu */}
                        <strong>{t(item.title)}</strong> - {t(item.description)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-8">
              {/* Sekcja Koszty */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('adhdDiagnosticsPage.costsTitle')}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('Psychiatric Consultation')}</h4>
                    <p className="text-gray-600 text-sm">320 PLN</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('adhdDiagnosticsPage.psychologicalDiagnosticsLabel')}</h4>
                    <p className="text-gray-600 text-sm">1500 PLN</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      {t('adhdDiagnosticsPage.costsNote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sekcja Czas Trwania */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('adhdDiagnosticsPage.durationTitle')}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('Psychiatric Consultation')}</h4>
                    <p className="text-gray-600 text-sm">50 {t('minutes')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('adhdDiagnosticsPage.psychologicalDiagnosticsLabel')}</h4>
                    <p className="text-gray-600 text-sm">3-4 {t('adhdDiagnosticsPage.hours')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('adhdDiagnosticsPage.resultsDiscussionAndPharmacotherapyTitle')}</h4>
                    <p className="text-gray-600 text-sm">30 {t('minutes')}</p>
                  </div>
                </div>
              </div>

              {/* Sekcja Rozpocznij Diagnostykę */}
              <div className="gradient-theme rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">{t('adhdDiagnosticsPage.startDiagnosisTitle')}</h3>
                <p className="mb-6">
                  {t('adhdDiagnosticsPage.startDiagnosisDescription')}
                </p>
                <Link
                  to="/booking"
                  className="block w-full bg-white text-[#46B7C6] text-center px-6 py-3 rounded-xl
                    hover:shadow-lg transition-all duration-300 font-medium"
                >
                  {t('Book an Appointment')}
                </Link>
              </div>

              {/* Sekcja Przydatne Materiały */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('adhdDiagnosticsPage.usefulMaterialsTitle')}</h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/patient-info/adhd-prep"
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {t('adhdDiagnosticsPage.usefulMaterialsLink1Text')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/patient-info/first-visit"
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {t('First visit')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/patient-info/faq"
                      className="text-[#46B7C6] hover:underline block"
                    >
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
