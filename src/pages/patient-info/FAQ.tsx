import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Search, Plus, Minus } from 'lucide-react';
import ScrollAnimationWrapper from '../../components/ScrollAnimationWrapper';
import { useTranslation } from 'react-i18next';

// Definicja danych FAQ z angielskimi kluczami do tłumaczenia
const faqData = [
  {
    // Klucz do tłumaczenia tytułu kategorii
    categoryTitleKey: 'faqPage.category.firstVisit',
    questions: [
      {
        // Klucz do tłumaczenia pytania
        qKey: 'Do I need a referral to a psychiatrist?',
        // Klucz do tłumaczenia odpowiedzi
        aKey: 'No, a visit to a psychiatrist does not require a referral from a primary care physician. You can make an appointment directly at our center.'
      },
      {
        qKey: 'How long does the first visit last?',
        aKey: 'The first psychiatric consultation lasts about 50 minutes. This is the time needed for a thorough interview, health assessment, and treatment plan establishment.'
      },
      {
        qKey: 'What should I bring to the first visit?',
        aKey: 'It is worth bringing: medical documentation from previous treatment, a list of currently taken medications, test results (if available), and an ID card.'
      }
    ]
  },
  {
    categoryTitleKey: 'faqPage.category.treatmentAndTherapy',
    questions: [
      {
        qKey: 'How often are follow-up visits scheduled?',
        aKey: 'The frequency of follow-up visits is determined individually, depending on the patient\'s condition and type of therapy. Usually, at the beginning of treatment, visits are scheduled every 2-4 weeks.'
      },
      {
        qKey: 'Can I combine pharmacotherapy with psychotherapy?',
        aKey: 'Yes, combining pharmacotherapy with psychotherapy often yields the best treatment results. The decision on the type of therapy is made individually for each patient.'
      },
      {
        qKey: 'How long does standard therapy last?',
        aKey: 'The length of therapy depends on the type of problem and the patient\'s individual needs. It can last from a few months to a year or longer. Progress is regularly assessed during follow-up visits.'
      },
      {
        qKey: 'What is the difference between psychotherapy and psychological support?',
        aKey: 'Psychotherapy is a systematic, long-term process leading to deeper changes in human functioning, while psychological support focuses on immediate help and advice. Psychotherapy requires regular meetings and commitment to the therapeutic process.'
      },
      {
        qKey: 'What are the main psychotherapeutic approaches?',
        aKey: 'The main approaches are: cognitive-behavioral therapy (CBT) - effective in treating depression and anxiety, psychodynamic therapy - focused on the influence of the past, systemic therapy - concentrating on family relationships, and humanistic therapy - oriented towards personal development.'
      }
    ]
  },
  {
    categoryTitleKey: 'faqPage.category.organizationalMatters',
    questions: [
      {
        qKey: 'How can I book an appointment?',
        aKey: 'Appointments can be booked by phone at +48724733713, through the ZnanyLekarz service, on our website, or in person at the reception. We also offer online consultations.'
      },
      {
        qKey: 'Can I bring someone with me?',
        aKey: 'Yes, you can bring someone with you if you feel the need. For underage patients, the presence of a guardian is required.'
      },
      {
        qKey: 'What if I am late for my appointment?',
        aKey: 'In case of lateness, please contact the reception.'
      },
      {
        qKey: 'What does the therapist selection process look like?',
        aKey: 'We offer a consultation with an experienced coordinating therapist who will help in choosing the appropriate therapeutic approach and a suitable therapist. The process includes analyzing the patient\'s needs, choosing a therapeutic approach, and matching with an appropriate specialist.'
      }
    ]
  },
  {
    categoryTitleKey: 'faqPage.category.paymentsAndDocumentation',
    questions: [
      {
        qKey: 'What forms of payment are accepted?',
        aKey: 'We accept cash, card payments, and bank transfers (for some services). Payment is required before the visit.'
      },
      {
        qKey: 'Will I receive an invoice for the visit?',
        aKey: 'Yes, upon request, we issue an invoice for each visit. Please inform the reception of this need before the visit.'
      },
      {
        qKey: 'Can I get a medical certificate?',
        aKey: 'Yes, during the visit, you can request a medical certificate. The doctor will issue it according to your current health status and medical indications. The cost of issuing a certificate is PLN 50.'
      }
    ]
  }
];

export default function FAQ() {
  const { t } = useTranslation();
  // Inicjalizacja openCategory kluczem pierwszej kategorii
  const [openCategory, setOpenCategory] = React.useState<string | null>(faqData.length > 0 ? faqData[0].categoryTitleKey : null);
  const [searchQuery, setSearchQuery] = React.useState('');

  const translatedAndFilteredCategories = faqData.map(category => ({
    // Tłumaczenie tytułu kategorii
    title: t(category.categoryTitleKey),
    // Zachowanie oryginalnego klucza do identyfikacji
    originalTitleKey: category.categoryTitleKey,
    questions: category.questions.map(q => ({
      // Tłumaczenie pytania
      q: t(q.qKey),
      // Tłumaczenie odpowiedzi
      a: t(q.aKey)
    })).filter(
      qa => qa.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            qa.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
              {/* Klucz już powinien istnieć */}
              {t('Back to the main page')}
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="h-8 w-8 text-[#46B7C6]" />
              <h1 className="text-4xl font-bold text-gray-900">
                {t('faqPage.title')}
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              {t('faqPage.description')}
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={t('faqPage.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-100 rounded-xl
                         focus:ring-2 focus:ring-[#46B7C6] focus:border-transparent transition-all
                         hover:border-gray-200"
            />
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ScrollAnimationWrapper animation="fade-up">
              <div className="space-y-6">
                {translatedAndFilteredCategories.map((category) => (
                  <div key={category.originalTitleKey} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                      onClick={() => setOpenCategory(
                        // Używamy oryginalnego klucza do przełączania
                        openCategory === category.originalTitleKey ? null : category.originalTitleKey
                      )}
                      className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      {/* Wyświetlamy przetłumaczony tytuł */}
                      <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                      {openCategory === category.originalTitleKey ? (
                        <Minus className="h-5 w-5 text-[#46B7C6]" />
                      ) : (
                        <Plus className="h-5 w-5 text-[#46B7C6]" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {openCategory === category.originalTitleKey && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 space-y-6">
                            {category.questions.map((qa, index) => (
                              <div key={index} className="space-y-2">
                                {/* Wyświetlamy przetłumaczone pytanie i odpowiedź */}
                                <h3 className="font-medium text-gray-900">{qa.q}</h3>
                                <p className="text-gray-600">{qa.a}</p>
                                {index < category.questions.length - 1 && (
                                  <div className="pt-6 border-b border-gray-100" />
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="h-5 w-5 text-[#46B7C6]" />
                  <h3 className="text-lg font-semibold">{t('faqPage.notFoundTitle')}</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('faqPage.notFoundDescription')}
                </p>
                <Link
                  to="/booking" // Upewnij się, że ten link jest poprawny
                  className="block w-full gradient-theme text-white text-center px-6 py-3 rounded-xl
                             hover:shadow-lg transition-all duration-300 font-medium"
                >
                  {/* Rozważam, czy to nowy klucz, czy można użyć "Book an Appointment" */}
                  {t('Book a Consultation')} 
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}
