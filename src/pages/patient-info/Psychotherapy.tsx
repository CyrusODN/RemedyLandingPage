import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Heart, Users, Clock, FileText, CheckCircle, Coins } from 'lucide-react'; // Usunięto AlertCircle
import ScrollAnimationWrapper from '../../components/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next';

// Dane dla sekcji "Główne Nurty Terapeutyczne"
const therapyApproachesData = [
  {
    nameKey: 'Cognitive-Behavioral Therapy (CBT)',
    descriptionKey: 'Focuses on identifying and changing negative patterns of thinking and behavior. Effective in treating depression, anxiety disorders, and other mental health problems.',
    benefitsKeys: [
      'Specific coping strategies',
      'Goal-oriented',
      'Measurable effects',
      'Relatively short duration'
    ]
  },
  {
    nameKey: 'Psychodynamic Therapy',
    descriptionKey: 'Focuses on understanding the impact of past experiences on current behaviors and relationships. Helps in deeper self-understanding and recognizing one\'s patterns.',
    benefitsKeys: [
      'Deep self-understanding',
      'Working on relationships',
      'Long-lasting changes',
      'Personal development' // Klucz prawdopodobnie istnieje
    ]
  },
  {
    nameKey: 'Systemic Therapy',
    descriptionKey: 'Analyzes problems in the context of family and social relationships. Particularly effective in couples and family therapy, and relational problems.',
    benefitsKeys: [
      'Improved communication',
      'Strengthening bonds',
      'Conflict resolution',
      'Changing family patterns'
    ]
  },
  {
    nameKey: 'Humanistic Therapy',
    descriptionKey: 'Focuses on personal development and self-actualization. Helps in discovering one\'s own potential and building authentic relationships.',
    benefitsKeys: [
      'Development of self-awareness',
      'Self-acceptance',
      'Authenticity',
      'Better relationships with others'
    ]
  }
];

// Dane dla sekcji "Dobór Terapeuty"
const therapistSelectionProcessItems = [
    { id: 'ts1', textKey: 'Initial consultation with a coordinating therapist' },
    { id: 'ts2', textKey: 'Analysis of the patient’s needs and expectations' },
    { id: 'ts3', textKey: 'Selection of the appropriate therapeutic approach' },
    { id: 'ts4', textKey: 'Matching with a therapist specializing in the given approach' },
];

// Dane dla sekcji "Czas Trwania" (terapii)
const therapyDurationItems = [
    { id: 'td1', titleKey: 'psychotherapyPage.duration.therapySession', detailsKey: '50 minutes' }, // "50 minutes" prawdopodobnie istnieje
    { id: 'td2', titleKey: 'psychotherapyPage.duration.frequency', detailsKey: 'Usually once a week' },
    { id: 'td3', titleKey: 'psychotherapyPage.duration.therapyPeriod', detailsKey: 'From a few months to a year or longer, depending on needs' },
];

// Dane dla sekcji "Koszty" (terapii)
const therapyCostItems = [
    { id: 'tc1', titleKey: 'psychotherapyPage.costs.coordinatingTherapistConsultation', price: '250 PLN' },
    { id: 'tc2', titleKey: 'psychotherapyPage.duration.therapySession', price: '250 PLN' }, // Użycie tego samego klucza dla tytułu
];


export default function Psychotherapy() {
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
              {t('Psychotherapy')} {/* Istniejący klucz z nav */}
            </h1>
            <p className="text-xl text-gray-600">
              {t('psychotherapyPage.description')}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollAnimationWrapper animation="fade-up" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Sekcja Czym Jest Psychoterapia? */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('psychotherapyPage.whatIsPsychotherapy.title')}</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    {t('psychotherapyPage.whatIsPsychotherapy.p1')}
                  </p>
                  <p className="text-gray-600">
                    {t('psychotherapyPage.whatIsPsychotherapy.p2')}
                  </p>
                </div>
              </div>

              {/* Sekcja Główne Nurty Terapeutyczne */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('psychotherapyPage.mainApproaches.title')}</h2>
                </div>
                <div className="space-y-8">
                  {therapyApproachesData.map((approach, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-900">{t(approach.nameKey)}</h3>
                      <p className="text-gray-600">{t(approach.descriptionKey)}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {approach.benefitsKeys.map((benefitKey, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#46B7C6] rounded-full flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{t(benefitKey)}</span>
                          </div>
                        ))}
                      </div>
                      {index < therapyApproachesData.length - 1 && (
                        <div className="pt-4 border-b border-gray-100" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sekcja Dobór Terapeuty */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-[#46B7C6]" />
                  <h2 className="text-2xl font-semibold">{t('psychotherapyPage.therapistSelection.title')}</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600">
                    {t('psychotherapyPage.therapistSelection.intro')}
                  </p>
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">{t('psychotherapyPage.therapistSelection.processTitle')}</h3>
                    <ul className="space-y-3">
                      {therapistSelectionProcessItems.map((item) => (
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
                  {therapyDurationItems.map((item) => (
                    <div key={item.id}>
                      <h4 className="font-medium text-gray-900 mb-2">{t(item.titleKey)}</h4>
                      <p className="text-gray-600 text-sm">{t(item.detailsKey)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sekcja Koszty */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('Cost')}</h3> {/* Istniejący klucz */}
                </div>
                <div className="space-y-4">
                  {therapyCostItems.map((item) => (
                     <div key={item.id}>
                       <h4 className="font-medium text-gray-900 mb-2">{t(item.titleKey)}</h4>
                       <p className="text-gray-600 text-sm">{item.price}</p> {/* Cena pozostaje bez zmian */}
                     </div>
                  ))}
                </div>
              </div>

              {/* Sekcja Rozpocznij Terapię */}
              <div className="gradient-theme rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">{t('psychotherapyPage.startTherapy.title')}</h3>
                <p className="mb-6">
                  {t('psychotherapyPage.startTherapy.description')}
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
