import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Brain, FileText, MessageCircle, ClipboardList, Clock, CheckCircle } from 'lucide-react';
import ScrollAnimationWrapper from '../../components/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next';

// Dane dla sekcji "Przebieg Wizyty"
const visitProcessSteps = [
  {
    id: 'step1',
    titleKey: '1. Welcome and Formalities',
    descriptionKey: 'Registration at the reception, filling out basic forms and questionnaires.',
  },
  {
    id: 'step2',
    titleKey: '2. Initial Interview',
    descriptionKey: 'Conversation about current difficulties, medical history, and therapy expectations.',
  },
  {
    id: 'step3',
    titleKey: '3. Psychiatric Examination',
    descriptionKey: 'Assessment of mental state, diagnosis, and discussion of therapeutic options.',
  },
  {
    id: 'step4',
    titleKey: '4. Treatment Plan',
    descriptionKey: 'Determining next steps, possible pharmacological recommendations, and scheduling follow-up visits.',
  },
];

// Dane dla sekcji "O Czym Porozmawiamy?"
const discussionTopics = [
  {
    id: 'topic1',
    titleKey: 'Current symptoms',
    descriptionKey: 'their nature, severity, and impact on daily functioning',
  },
  {
    id: 'topic2',
    titleKey: 'Health history',
    descriptionKey: 'previous treatment, co-existing conditions',
  },
  {
    id: 'topic3',
    titleKey: 'Life situation',
    descriptionKey: 'stressors, social support, work/study',
  },
  {
    id: 'topic4',
    titleKey: 'Expectations',
    descriptionKey: 'therapeutic goals and preferred forms of help',
  },
];

// Dane dla sekcji "Lista Kontrolna"
const checklistItems = [
  { id: 'check1', itemKey: 'Medical documentation' }, // Klucz prawdopodobnie istnieje
  { id: 'check2', itemKey: 'List of current medications' },
  { id: 'check3', itemKey: 'ID card' },
  { id: 'check4', itemKey: 'List of questions for the doctor' },
];

// Dane dla sekcji "Harmonogram"
const scheduleItems = [
  { id: 'sched1', titleKey: 'Registration', detailsKey: '10-15 minutes before the visit' },
  { id: 'sched2', titleKey: 'Consultation', detailsKey: '40 minutes' }, // Klucz "Consultation" prawdopodobnie istnieje
  { id: 'sched3', titleKey: 'Plan discussion', detailsKey: '10-15 minutes' },
];


export default function FirstVisit() {
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
              {t('firstVisitPage.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('firstVisitPage.description')}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollAnimationWrapper animation="fade-up" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Sekcja Pierwsze Spotkanie */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('firstVisitPage.firstMeeting.title')}</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    {t('firstVisitPage.firstMeeting.introText')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">{t('Duration')}</h3> {/* Klucz prawdopodobnie istnieje */}
                      <p className="text-gray-600">50 {t('minutes')}</p> {/* Klucz "minutes" prawdopodobnie istnieje */}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">{t('Cost')}</h3> {/* Klucz prawdopodobnie istnieje */}
                      <p className="text-gray-600">320 PLN</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sekcja Przebieg Wizyty */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('firstVisitPage.visitProcess.title')}</h2>
                </div>
                <div className="space-y-6">
                  {visitProcessSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`relative pl-8 ${index < visitProcessSteps.length - 1 ? 'pb-8 border-l-2 border-[#46B7C6]' : 'border-l-2 border-[#46B7C6]'}`}
                    >
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#46B7C6]" />
                      <h3 className="font-medium text-gray-900 mb-2">{t(step.titleKey)}</h3>
                      <p className="text-gray-600">{t(step.descriptionKey)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sekcja O Czym Porozmawiamy? */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('firstVisitPage.discussionTopics.title')}</h2>
                </div>
                <ul className="space-y-4">
                  {discussionTopics.map((topic) => (
                    <li key={topic.id} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#46B7C6] mt-1 flex-shrink-0" />
                      <p className="text-gray-600">
                        <strong>{t(topic.titleKey)}</strong> - {t(topic.descriptionKey)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-8">
              {/* Sekcja Lista Kontrolna */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardList className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('firstVisitPage.checklist.title')}</h3>
                </div>
                <ul className="space-y-3">
                  {checklistItems.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-[#46B7C6] rounded flex-shrink-0" />
                      <span className="text-gray-600">{t(item.itemKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sekcja Harmonogram */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('firstVisitPage.schedule.title')}</h3>
                </div>
                <div className="space-y-4">
                  {scheduleItems.map((item) => (
                    <div key={item.id}>
                      <h4 className="font-medium text-gray-900 mb-2">{t(item.titleKey)}</h4>
                      <p className="text-gray-600 text-sm">{t(item.detailsKey)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sekcja Gotowy na Pierwszą Wizytę? */}
              <div className="gradient-theme rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">{t('firstVisitPage.readyCta.title')}</h3>
                <p className="mb-6">
                  {t('firstVisitPage.readyCta.description')}
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
                  {/* Klucz prawdopodobnie istnieje (adhdDiagnosticsPage.usefulMaterialsTitle) */}
                  <h3 className="text-lg font-semibold">{t('adhdDiagnosticsPage.usefulMaterialsTitle')}</h3>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/patient-info/psychiatric-exam-prep" // Dostosuj link
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {t('firstVisitPage.usefulLink.examPrep')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/patient-info/faq"
                      className="text-[#46B7C6] hover:underline block"
                    >
                      {/* Klucz prawdopodobnie istnieje (adhdDiagnosticsPage.faqLinkText) */}
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
