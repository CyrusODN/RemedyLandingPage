import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Brain, FileText, MessageCircle, ClipboardList, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollAnimationWrapper from '../../components/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next';

// Dane dla sekcji "Przygotowanie Dokumentacji"
const documentationPrepItems = [
  {
    id: 'doc1',
    titleKey: 'Medical documentation', // Prawdopodobnie istnieje
    descriptionKey: 'Test results, hospital discharge summaries, information about previous treatment.',
  },
  {
    id: 'doc2',
    titleKey: 'Opinions from school/kindergarten',
    descriptionKey: 'Opinions from teachers, educators, school psychologists.',
  },
  {
    id: 'doc3',
    titleKey: 'List of current medications', // Prawdopodobnie istnieje
    descriptionKey: 'Current medications with dosages.',
  },
];

// Dane dla sekcji "Rozmowa z Dzieckiem"
const talkWithChildItems = [
  { id: 'talk1', textKey: 'Explain the purpose of the visit in a way appropriate for the child’s age.' },
  { id: 'talk2', textKey: 'Assure them that the visit is to help and is not a form of punishment.' },
  { id: 'talk3', textKey: 'Allow the child to express their concerns and answer their questions.' },
];

// Dane dla sekcji "Przebieg Konsultacji"
const consultationProcessItems = [
  {
    id: 'proc1',
    titleKey: 'Conversation with parents',
    descriptionKey: 'Interview about the child’s development, current difficulties, and medical history.',
  },
  {
    id: 'proc2',
    titleKey: 'Conversation with the child',
    descriptionKey: 'Age-appropriate form of contact, may include play or conversation.',
  },
  {
    id: 'proc3',
    titleKey: 'Plan discussion', // Prawdopodobnie istnieje
    descriptionKey: 'Presentation of diagnosis and proposals for further action.',
  },
];

// Dane dla sekcji "Rola Rodzica"
const parentRoleItems = [
  { id: 'role1', textKey: 'Stay calm and maintain a positive attitude.' },
  { id: 'role2', textKey: 'Be supportive of your child.' },
  { id: 'role3', textKey: 'Note down important information and recommendations.' },
];

// Dane dla sekcji "Ważne Informacje"
const importantInfoItems = [
  { id: 'info1', textKey: 'Arrive 10-15 minutes before the visit.' }, // Prawdopodobnie istnieje (z firstVisitPage)
  { id: 'info2', textKey: 'Bring your child’s favorite toy.' },
  { id: 'info3', textKey: 'Plan for some rest time after the visit.' },
];


export default function ParentInfo() {
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
              {t('parentInfoPage.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('parentInfoPage.description')}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollAnimationWrapper animation="fade-up" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Sekcja Przed Wizytą */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('parentInfoPage.beforeVisit.title')}</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{t('parentInfoPage.beforeVisit.documentationPrep.title')}</h3>
                    <ul className="space-y-3">
                      {documentationPrepItems.map((item) => (
                        <li key={item.id} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#46B7C6] mt-1 flex-shrink-0" />
                          <p className="text-gray-600">
                            <strong>{t(item.titleKey)}</strong> - {t(item.descriptionKey)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{t('parentInfoPage.beforeVisit.talkWithChild.title')}</h3>
                    <p className="text-gray-600 mb-4">
                      {t('parentInfoPage.beforeVisit.talkWithChild.intro')}
                    </p>
                    <ul className="space-y-3">
                      {talkWithChildItems.map((item) => (
                        <li key={item.id} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#46B7C6] mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{t(item.textKey)}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sekcja Podczas Wizyty */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('parentInfoPage.duringVisit.title')}</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{t('parentInfoPage.duringVisit.consultationProcess.title')}</h3>
                    <ul className="space-y-3">
                      {consultationProcessItems.map((item) => (
                        <li key={item.id} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#46B7C6] rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-600">
                            <strong>{t(item.titleKey)}</strong> - {t(item.descriptionKey)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{t('parentInfoPage.duringVisit.parentRole.title')}</h3>
                    <ul className="space-y-3">
                      {parentRoleItems.map((item) => (
                        <li key={item.id} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#46B7C6] mt-1 flex-shrink-0" />
                          <p className="text-gray-600">{t(item.textKey)}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-8">
              {/* Sekcja Czas Trwania */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('Duration')}</h3> {/* Istniejący klucz */}
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('First visit')}</h4> {/* Istniejący klucz */}
                    <p className="text-gray-600 text-sm">{t('50 minutes')}</p> {/* Istniejący klucz */}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('parentInfoPage.duration.followUpVisits')}</h4>
                    <p className="text-gray-600 text-sm">{t('30 minutes')}</p> {/* Istniejący klucz */}
                  </div>
                </div>
              </div>

              {/* Sekcja Ważne Informacje */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('parentInfoPage.importantInfo.title')}</h3>
                </div>
                <ul className="space-y-3">
                  {importantInfoItems.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#46B7C6] rounded-full mt-1.5 flex-shrink-0" /> {/* Zmieniono mt-2 na mt-1.5 dla lepszego wyrównania */}
                      <p className="text-gray-600">{t(item.textKey)}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sekcja Umów Wizytę */}
              <div className="gradient-theme rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">{t('Book an Appointment')}</h3> {/* Istniejący klucz */}
                <p className="mb-6">
                  {t('parentInfoPage.cta.description')}
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
                      to="/patient-info/first-visit" // Upewnij się, że link jest poprawny
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
