import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, ClipboardList, FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import ScrollAnimationWrapper from '../../components/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next';

// Dane dla sekcji "Dokumenty do Przygotowania"
const documentsToPrepareItems = [
  {
    id: 'doc1',
    title: 'School certificates', // Klucz do tłumaczenia
    description: 'Teacher opinions and behavioral notes are particularly important, especially from early school years.', // Klucz do tłumaczenia
  },
  {
    id: 'doc2',
    title: 'Psychological opinions', // Klucz do tłumaczenia
    description: 'Any previous opinions from psychological-pedagogical counseling centers or other specialists.', // Klucz do tłumaczenia
  },
  {
    id: 'doc3',
    title: 'Medical documentation', // Klucz do tłumaczenia
    description: 'Treatment history, test results, information about medications taken.', // Klucz do tłumaczenia
  },
  {
    id: 'doc4',
    title: 'Observation diary', // Klucz do tłumaczenia
    description: 'Notes regarding occurring symptoms, their frequency, and impact on daily functioning.', // Klucz do tłumaczenia
  },
];

// Dane dla sekcji "Przygotowanie do Badania"
const testPreparationSteps = [
  {
    id: 'prep1',
    title: '1. Self-observation', // Klucz do tłumaczenia
    description: 'For a minimum of 2 weeks before the examination, keep an observation diary, noting:', // Klucz do tłumaczenia
    // Podpunkty będą tłumaczone indywidualnie za pomocą kluczy z prefiksem 'adhdPrepPage.selfObservationItem'
  },
  {
    id: 'prep2',
    title: '2. Gathering Information', // Klucz do tłumaczenia
    description: 'Talk to family and close ones about symptoms they might have observed in your childhood and currently. Their perspective can be very valuable in the diagnostic process.', // Klucz do tłumaczenia
  },
  {
    id: 'prep3',
    title: '3. List of Questions', // Klucz do tłumaczenia
    description: 'Prepare a list of questions regarding diagnosis, treatment, and therapeutic possibilities. Write down all doubts you want to discuss with the specialist.', // Klucz do tłumaczenia
  },
];

// Dane dla sekcji "Ważne Wskazówki"
const importantTipsItems = [
  { id: 'tip1', text: 'Get a good night’s sleep before the examination.' }, // Klucz do tłumaczenia
  { id: 'tip2', text: 'Eat a light meal before the visit.' }, // Klucz do tłumaczenia
  { id: 'tip3', text: 'Arrive 15 minutes early.' }, // Klucz do tłumaczenia
  { id: 'tip4', text: 'Bring your glasses if you use them.' }, // Klucz do tłumaczenia
];

export default function ADHDPrep() {
  const { t } = useTranslation();

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-[#4A90B9]/5 to-[#68BFB3]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="mb-12">
            <Link
              to="/patient-info/adhd-diagnostics" // Ten link może wymagać dostosowania w zależności od routingu
              className="text-[#46B7C6] hover:underline flex items-center gap-2 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('adhdPrepPage.backToDiagnosticsLink')}
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('adhdPrepPage.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('adhdPrepPage.description')}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollAnimationWrapper animation="fade-up" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Sekcja Dokumenty do Przygotowania */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardList className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('adhdPrepPage.documentsToPrepareTitle')}</h2>
                </div>
                <ul className="space-y-4">
                  {documentsToPrepareItems.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#46B7C6] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{t(item.title)}</p>
                        <p className="text-gray-600">{t(item.description)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sekcja Przygotowanie do Badania */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('adhdPrepPage.testPreparationTitle')}</h2>
                </div>
                <div className="space-y-6">
                  {testPreparationSteps.map((step) => (
                    <div key={step.id}>
                      <h3 className="font-medium text-gray-900 mb-2">{t(step.title)}</h3>
                      <p className="text-gray-600">{t(step.description)}</p>
                      {step.id === 'prep1' && ( // Specjalne renderowanie dla podpunktów samoobserwacji
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#46B7C6] rounded-full flex-shrink-0" />
                            <span className="text-gray-600">{t('adhdPrepPage.selfObservationItem1')}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#46B7C6] rounded-full flex-shrink-0" />
                            <span className="text-gray-600">{t('adhdPrepPage.selfObservationItem2')}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#46B7C6] rounded-full flex-shrink-0" />
                            <span className="text-gray-600">{t('adhdPrepPage.selfObservationItem3')}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#46B7C6] rounded-full flex-shrink-0" />
                            <span className="text-gray-600">{t('adhdPrepPage.selfObservationItem4')}</span>
                          </li>
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-8">
              {/* Sekcja Harmonogram Diagnostyki */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('adhdPrepPage.diagnosticsScheduleTitle')}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('Psychiatric Consultation')}</h4>
                    <p className="text-gray-600 text-sm">
                      {t('adhdPrepPage.psychiatricConsultationDetails')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('adhdDiagnosticsPage.psychologicalDiagnosticsLabel')}</h4>
                    <p className="text-gray-600 text-sm">
                      {t('adhdPrepPage.psychologicalDiagnosticsDetails')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('adhdPrepPage.resultsDiscussionTitle')}</h4>
                    <p className="text-gray-600 text-sm">
                      {t('adhdPrepPage.resultsDiscussionDetails')} {t('minutes')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sekcja Ważne Wskazówki */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('adhdPrepPage.importantTipsTitle')}</h3>
                </div>
                <ul className="space-y-3">
                  {importantTipsItems.map((tip) => (
                    <li key={tip.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#46B7C6] rounded-full mt-1.5 flex-shrink-0" />
                      <p className="text-gray-600">{t(tip.text)}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sekcja Gotowy na Diagnostykę? */}
              <div className="gradient-theme rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">{t('adhdPrepPage.readyForDiagnosisTitle')}</h3>
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
                      to="/patient-info/adhd-diagnostics" // Ten link może wymagać dostosowania
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {t('adhdPrepPage.adhdDiagnosticsProcessLink')}
                    </Link>
                  </li>
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
