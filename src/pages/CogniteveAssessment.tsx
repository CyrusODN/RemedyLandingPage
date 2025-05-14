import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, ClipboardList, Clock, FileText, CheckCircle, Coins } from 'lucide-react'; // Usunięto AlertCircle, bo nie był używany
import ScrollAnimationWrapper from '../../components/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next';

// Dane dla sekcji "Zakres Badania"
const assessmentScopeSteps = [
  {
    id: 'scope1',
    title: '1. Intellectual Level Assessment', // Klucz do tłumaczenia
    description: 'Comprehensive assessment of intellectual functioning using standardized psychological tests.', // Klucz do tłumaczenia
  },
  {
    id: 'scope2',
    title: '2. Cognitive Functions Assessment', // Klucz do tłumaczenia
    description: 'Detailed examination of concentration, attention, recent visual and verbal-auditory memory.', // Klucz do tłumaczenia
  },
  {
    id: 'scope3',
    title: '3. Neuropsychological Assessment', // Klucz do tłumaczenia
    description: 'Examination of executive functions, planning, and organization of action.', // Klucz do tłumaczenia
  },
  {
    id: 'scope4',
    title: '4. Discussion of Results', // Klucz do tłumaczenia (ten sam co w ADHDPrep)
    description: 'Detailed discussion of examination results and provision of recommendations.', // Klucz do tłumaczenia
  },
];

// Dane dla sekcji "Co Obejmuje Diagnostyka?"
const diagnosticsIncludesItemsCognitive = [
  {
    id: 'item1',
    title: 'Psychological interview', // Klucz do tłumaczenia (ten sam co w ADHD)
    description: 'Detailed conversation about developmental history and current functioning.', // Klucz do tłumaczenia
  },
  {
    id: 'item2',
    title: 'Performing tests', // Klucz do tłumaczenia
    description: 'A set of standardized psychological tests assessing various aspects of cognitive functioning.', // Klucz do tłumaczenia
  },
  {
    id: 'item3',
    title: 'Preparing an opinion', // Klucz do tłumaczenia
    description: 'Detailed report with results and interpretation.', // Klucz do tłumaczenia
  },
  {
    id: 'item4',
    title: 'Consultation of results', // Klucz do tłumaczenia
    description: 'Discussion of results and provision of recommendations.', // Klucz do tłumaczenia (podobny do "4. Discussion of Results", ale może wymagać osobnego klucza dla precyzji)
  },
];

export default function CognitiveAssessment() {
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
              {t('Back to the main page')}
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('cognitiveAssessmentPage.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('cognitiveAssessmentPage.description')}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollAnimationWrapper animation="fade-up" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Sekcja Zakres Badania */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('cognitiveAssessmentPage.scopeTitle')}</h2>
                </div>
                <div className="space-y-6">
                  {assessmentScopeSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative pl-8 ${index < assessmentScopeSteps.length - 1 ? 'pb-8 border-l-2 border-[#46B7C6]' : 'border-l-2 border-[#46B7C6]'}`}
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
                  {diagnosticsIncludesItemsCognitive.map((item) => (
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
              {/* Sekcja Koszt Badania */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('cognitiveAssessmentPage.costTitle')}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('autismDiagnosticsPage.fullDiagnosticsLabel')}</h4>
                    <p className="text-gray-600 text-sm">1200 PLN</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      {t('cognitiveAssessmentPage.costNote')}
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
                    <h4 className="font-medium text-gray-900 mb-2">{t('cognitiveAssessmentPage.interviewLabel')}</h4>
                    <p className="text-gray-600 text-sm">{t('cognitiveAssessmentPage.interviewDuration')} {t('minutes')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('cognitiveAssessmentPage.testsExecutionLabel')}</h4>
                    <p className="text-gray-600 text-sm">{t('cognitiveAssessmentPage.testsExecutionDuration')} {t('minutes')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('adhdPrepPage.resultsDiscussionTitle')}</h4>
                    <p className="text-gray-600 text-sm">{t('adhdPrepPage.resultsDiscussionDetails')} {t('minutes')}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      {t('cognitiveAssessmentPage.totalDurationNote')}
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
