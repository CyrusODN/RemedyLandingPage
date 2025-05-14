import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, ClipboardList, Clock, FileText, CheckCircle, Coins } from 'lucide-react';
import ScrollAnimationWrapper from '../../components/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next';

// Dane dla sekcji "Proces Diagnostyczny"
const diagnosticProcessStepsAutism = [
  {
    id: 'step1',
    title: '1. Developmental Interview', // Klucz do tłumaczenia
    description: 'Detailed conversation with parents/guardians regarding the child’s developmental history, first concerning symptoms, and current functioning.', // Klucz do tłumaczenia
  },
  {
    id: 'step2',
    title: '2. Clinical Observation', // Klucz do tłumaczenia
    description: 'Specialized observation of the child’s behavior and interactions in various situations, using standardized diagnostic tools.', // Klucz do tłumaczenia
  },
  {
    id: 'step3',
    title: '3. Functional Assessment', // Klucz do tłumaczenia
    description: 'Comprehensive assessment of social, communication, and adaptive skills using standardized tests.', // Klucz do tłumaczenia
  },
  {
    id: 'step4',
    title: '4. Diagnosis and Recommendations', // Klucz do tłumaczenia
    description: 'Discussion of diagnostic results, provision of diagnosis, and detailed recommendations for therapy and support.', // Klucz do tłumaczenia
  },
];

// Dane dla sekcji "Co Obejmuje Diagnostyka?"
const diagnosticsIncludesItemsAutism = [
  {
    id: 'item1',
    title: 'Developmental interview', // Klucz do tłumaczenia
    description: 'Detailed analysis of the child’s development from the prenatal period to the present.', // Klucz do tłumaczenia
  },
  {
    id: 'item2',
    title: 'Clinical observation', // Klucz do tłumaczenia
    description: 'Structured observation of behavior and social interactions.', // Klucz do tłumaczenia
  },
  {
    id: 'item3',
    title: 'Diagnostic tests', // Klucz do tłumaczenia
    description: 'Standardized tools for assessing functioning within the autism spectrum.', // Klucz do tłumaczenia
  },
  {
    id: 'item4',
    title: 'Detailed report', // Klucz do tłumaczenia (ten sam co w ADHD)
    description: 'Written preparation of diagnostic results along with recommendations.', // Klucz do tłumaczenia (ten sam co w ADHD)
  },
];

export default function AutismDiagnostics() {
  const { t } = useTranslation();

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-[#4A90B9]/5 to-[#68BFB3]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="mb-12">
            <Link
              to="/" // Ten link może wymagać dostosowania w zależności od routingu
              className="text-[#46B7C6] hover:underline flex items-center gap-2 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('Back to the main page')}
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('autismDiagnosticsPage.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('autismDiagnosticsPage.description')}
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
                  {diagnosticProcessStepsAutism.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative pl-8 ${index < diagnosticProcessStepsAutism.length - 1 ? 'pb-8 border-l-2 border-[#46B7C6]' : 'border-l-2 border-[#46B7C6]'}`}
                    >
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#46B7C6]" />
                      <h3 className="font-medium text-gray-900 mb-2">{t(step.title)}</h3>
                      <p className="text-gray-600">{t(step.description)}</p>
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
                  {diagnosticsIncludesItemsAutism.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#46B7C6] mt-1 flex-shrink-0" />
                      <p className="text-gray-600">
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
              {/* Sekcja Koszt */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('autismDiagnosticsPage.costTitle')}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('autismDiagnosticsPage.fullDiagnosticsLabel')}</h4>
                    <p className="text-gray-600 text-sm">1500 PLN</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      {t('autismDiagnosticsPage.costNote')}
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
                    <h4 className="font-medium text-gray-900 mb-2">{t('autismDiagnosticsPage.parentInterviewLabel')}</h4>
                    <p className="text-gray-600 text-sm">{t('autismDiagnosticsPage.parentInterviewDuration')} {t('minutes')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('autismDiagnosticsPage.observationAndDiagnosticsLabel')}</h4>
                    <p className="text-gray-600 text-sm">{t('autismDiagnosticsPage.observationAndDiagnosticsDuration')} {t('minutes')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('adhdPrepPage.resultsDiscussionTitle')}</h4>
                    <p className="text-gray-600 text-sm">{t('autismDiagnosticsPage.resultsDiscussionDuration')} {t('minutes')}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      {t('autismDiagnosticsPage.totalDurationNote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sekcja Rozpocznij Diagnostykę */}
              <div className="gradient-theme rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">{t('adhdDiagnosticsPage.startDiagnosisTitle')}</h3>
                <p className="mb-6">
                  {t('autismDiagnosticsPage.startDiagnosisDescription')}
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
                      to="/patient-info/first-visit" // Ten link może wymagać dostosowania
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {t('First visit')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/patient-info/parent-info" // Ten link może wymagać dostosowania
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {t('autismDiagnosticsPage.parentInfoLink')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/patient-info/faq" // Ten link może wymagać dostosowania
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
