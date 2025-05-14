import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Clock, FileText, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import ScrollAnimationWrapper from '../../components/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next';

// Dane dla sekcji "Co przygotować?"
const whatToPrepareItems = [
  {
    id: 'prep1',
    titleKey: 'Medical documentation', // Prawdopodobnie istnieje
    descriptionKey: 'Test results, hospital discharge summaries, information about previous psychiatric or psychological treatment.',
  },
  {
    id: 'prep2',
    titleKey: 'List of current medications', // Prawdopodobnie istnieje
    descriptionKey: 'Both psychiatric and other medications, along with dosages.',
  },
  {
    id: 'prep3',
    titleKey: 'Notes about symptoms',
    descriptionKey: 'When they appeared, how often they occur, what aggravates or alleviates them.',
  },
  {
    id: 'prep4',
    titleKey: 'List of questions for the doctor', // Prawdopodobnie istnieje
    descriptionKey: 'Write down all questions and concerns you want to discuss with the doctor.',
  },
];

// Dane dla sekcji "Przebieg Wizyty"
const visitProcessItems = [
  {
    id: 'proc1',
    titleKey: 'Psychiatric interview', // Prawdopodobnie istnieje
    descriptionKey: 'The doctor will ask about current symptoms, medical history, and past treatment.',
  },
  {
    id: 'proc2',
    titleKey: 'Mental state assessment',
    descriptionKey: 'Examination of cognitive functions, mood, thinking.',
  },
  {
    id: 'proc3',
    titleKey: 'Treatment plan establishment',
    descriptionKey: 'Discussion of therapeutic and pharmacological options.',
  },
];

// Dane dla sekcji "Ważne Wskazówki"
const importantTipsPsychiatricExam = [
  { id: 'tip1', textKey: 'Be honest and open - the more information you provide, the better help you will receive.' },
  { id: 'tip2', textKey: 'Arrive 10-15 minutes before the visit to calmly fill out necessary forms.' }, // Bardziej szczegółowy niż ogólny "Arrive 10-15 minutes early."
  { id: 'tip3', textKey: 'Do not hesitate to ask questions - you have the right to full information about your health status.' },
  { id: 'tip4', textKey: 'Consider bringing a close person with you if you feel you need support.' },
];

// Dane dla mini FAQ w tej sekcji
const miniFaqItems = [
    {
        qKey: "Do I need a referral?", // Klucz prawdopodobnie istnieje
        aKey: "No, a visit to a psychiatrist does not require a referral from a primary care physician." // Klucz prawdopodobnie istnieje
    },
    {
        qKey: "How long does the first visit last?", // Klucz prawdopodobnie istnieje
        aKey: "The first consultation lasts about 50 minutes." // Klucz prawdopodobnie istnieje (lub bardzo podobny)
    },
    {
        qKey: "Can I bring someone with me?", // Klucz prawdopodobnie istnieje
        aKey: "Yes, you can come with a support person if you feel the need." // Klucz prawdopodobnie istnieje (lub bardzo podobny)
    }
];

export default function PsychiatricExamPrep() {
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
              {t('psychiatricExamPrepPage.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('psychiatricExamPrepPage.description')}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollAnimationWrapper animation="fade-up" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Sekcja Co przygotować? */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('psychiatricExamPrepPage.whatToPrepare.title')}</h2>
                </div>
                <ul className="space-y-4">
                  {whatToPrepareItems.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#46B7C6] rounded-full mt-1.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        <strong>{t(item.titleKey)}</strong> - {t(item.descriptionKey)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sekcja Przebieg Wizyty */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('firstVisitPage.visitProcess.title')}</h2> {/* Istniejący klucz */}
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    {t('psychiatricExamPrepPage.visitProcess.intro')}
                  </p>
                  <ul className="space-y-4">
                    {visitProcessItems.map((item) => (
                      <li key={item.id} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#46B7C6] rounded-full mt-1.5 flex-shrink-0" />
                        <p className="text-gray-600">
                          <strong>{t(item.titleKey)}</strong> - {t(item.descriptionKey)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sekcja Ważne Wskazówki */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="h-6 w-6 text-[#46B7C6]" />
                  {/* Klucz prawdopodobnie istnieje (parentInfoPage.importantInfo.title) lub adhdPrepPage.importantTipsTitle */}
                  <h2 className="text-2xl font-semibold">{t('parentInfoPage.importantInfo.title')}</h2>
                </div>
                <ul className="space-y-4">
                  {importantTipsPsychiatricExam.map((tip) => (
                    <li key={tip.id} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#46B7C6] mt-1 flex-shrink-0" />
                      <p className="text-gray-600">{t(tip.textKey)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-8">
              {/* Sekcja Często Zadawane Pytania */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('adhdDiagnosticsPage.faqLinkText')}</h3> {/* Istniejący klucz */}
                </div>
                <div className="space-y-4">
                  {miniFaqItems.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {t(item.qKey)}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t(item.aKey)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sekcja Potrzebujesz Pomocy? */}
              <div className="gradient-theme rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">{t('psychiatricExamPrepPage.needHelp.title')}</h3>
                <p className="mb-6">
                  {t('psychiatricExamPrepPage.needHelp.description')}
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
                  <h3 className="text-lg font-semibold">{t('adhdDiagnosticsPage.usefulMaterialsTitle')}</h3> {/* Istniejący klucz */}
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/patient-info/first-visit"
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {t('firstVisitPage.title')} {/* Istniejący klucz */}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/patient-info/faq"
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {t('adhdDiagnosticsPage.faqLinkText')} {/* Istniejący klucz */}
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
