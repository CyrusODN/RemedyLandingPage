// Przykładowa lokalizacja: src/data/navigation.ts

// Definicje typów (jeśli nie masz ich globalnie, możesz je tu powtórzyć lub zaimportować)
interface NavLinkItem {
  name: string; // Bezpośrednia angielska fraza (klucz i18n)
  path: string;
  type?: 'link';
}

interface NavCategory {
  category: string; // Bezpośrednia angielska fraza (klucz i18n)
  items: NavLinkItem[];
}

interface NavDropdownConfig {
  type: 'dropdown';
  title: string; // Bezpośrednia angielska fraza (klucz i18n)
  items: (NavLinkItem | NavCategory)[];
}

interface NavDirectLinkConfig {
  type: 'link';
  name: string; // Bezpośrednia angielska fraza (klucz i18n)
  path: string;
}

type NavigationItem = NavDropdownConfig | NavDirectLinkConfig;

// STRUKTURA DANYCH NAWIGACJI - zgodna z ostatnią wersją Navbar.tsx
export const navigationItems: NavigationItem[] = [
  {
    type: 'link',
    name: 'About Us',
    path: '/#about'
  },
  {
    type: 'dropdown',
    title: 'Offer',
    items: [
      {
        category: 'Psychiatric Consultations',
        items: [
          { name: 'Psychiatric Consultation', path: '/services/konsultacja' },
          { name: 'Psychiatric Consultation for Children and Adolescents', path: '/services/konsultacja-dzieci' }
        ]
      },
      {
        category: 'Psychotherapy',
        items: [
          { name: 'Individual Psychotherapy', path: '/patient-info/psychotherapy' }
        ]
      },
      {
        category: 'Neurodevelopmental Diagnostics',
        items: [
          { name: 'adhdDiagnosticsPage.title', path: '/patient-info/adhd-diagnostics' },
          { name: 'autismDiagnosticsPage.title', path: '/patient-info/autism-diagnostics' }
        ]
      },
      {
        category: 'Personality Diagnostics',
        items: [
          { name: 'mmpi2DiagnosticsPage.title', path: '/patient-info/mmpi2-diagnostics' }
        ]
      },
      {
        category: 'Psychological Diagnostics and Support',
        items: [
          { name: 'cognitiveAssessmentPage.title', path: '/patient-info/cognitive-assessment' },
          { name: 'childServices.diagnostics.services.intelligenceTest.name', path: '/services/terapia-dzieci-mlodziez#diagnostics' },
          { name: 'childServices.diagnostics.services.dyslexiaDiagnosis.name', path: '/services/terapia-dzieci-mlodziez#diagnostics' },
          { name: 'childServices.diagnostics.services.emotionalDevelopmentAssessment.name', path: '/services/terapia-dzieci-mlodziez#diagnostics' },
          { name: 'childServices.therapy.services.emotionalBehavioralTherapy.name', path: '/services/terapia-dzieci-mlodziez#therapy' },
          { name: 'childServices.therapy.services.selectiveMutismSupport.name', path: '/services/terapia-dzieci-mlodziez#therapy' },
          { name: 'childServices.therapy.services.oppositionalDefiantDisorder.name', path: '/services/terapia-dzieci-mlodziez#therapy' },
          { name: 'childServices.therapy.services.anxietyLowSelfEsteemSupport.name', path: '/services/terapia-dzieci-mlodziez#therapy' },
          { name: 'childServices.therapy.services.depressiveSymptomsWork.name', path: '/services/terapia-dzieci-mlodziez#therapy' },
          { name: 'childServices.communication.services.aac.name', path: '/services/terapia-dzieci-mlodziez#communication' },
          { name: 'childServices.communication.services.socialDifficultiesTherapy.name', path: '/services/terapia-dzieci-mlodziez#communication' },
          { name: 'childServices.communication.services.autismSpectrumWork.name', path: '/services/terapia-dzieci-mlodziez#communication' },
          { name: 'childServices.psychoeducation.services.sleepHygieneEducation.name', path: '/services/terapia-dzieci-mlodziez#psychoeducation' },
          { name: 'childServices.psychoeducation.services.emotionalDevelopmentWorkshops.name', path: '/services/terapia-dzieci-mlodziez#psychoeducation' },
          { name: 'childServices.psychoeducation.services.adaptationDifficultiesSupport.name', path: '/services/terapia-dzieci-mlodziez#psychoeducation' },
          { name: 'childServices.drugResistant.services.treatmentResistantSupport.name', path: '/services/terapia-dzieci-mlodziez#drugResistant' },
          { name: 'childServices.drugResistant.services.nonPharmacologicalSupport.name', path: '/services/terapia-dzieci-mlodziez#drugResistant' }
        ]
      },
      // Usunięte pozycje: "Group Therapy" i "Clinical Trials - Preliminary Qualification"
    ]
  },
  {
    type: 'dropdown',
    title: 'Scope of Treatment',
    items: [
      { name: 'Depression', path: '/treatment/depresja' },
      { name: 'Anxiety Disorders', path: '/treatment/zaburzenia-lekowe' },
      { name: 'Schizophrenia', path: '/treatment/schizofrenia' },
      { name: 'Bipolar Disorder (BPD)', path: '/treatment/chad' },
      { name: 'ADHD', path: '/treatment/adhd' },
      { name: 'PTSD', path: '/treatment/ptsd' },
      { name: 'Personality Disorders', path: '/treatment/zaburzenia-osobowosci' },
      { name: 'Sleep Disorders', path: '/treatment/zaburzenia-snu' },
      { name: 'treatmentPage.emotionalBehavioralDisorders.title', path: '/treatment/zaburzenia-emocjonalne-zachowania' }
    ]
  },
  {
    type: 'dropdown',
    title: 'Patient Information',
    items: [
      { name: 'psychiatricExamPrepPage.title', path: '/patient-info/psychiatric-exam-prep' },
      { name: 'firstVisitPage.title', path: '/patient-info/first-visit' },
      { name: 'parentInfoPage.title', path: '/patient-info/parent-info' },
      { name: 'faqPage.title', path: '/patient-info/faq' },
    ]
  },
  { type: 'link', name: 'Pricing', path: '/#pricing' },
  { type: 'link', name: 'Locations', path: '/#locations' },
  { type: 'link', name: 'Career', path: '/#join-us' },
  { type: 'link', name: 'Contact', path: '/#contact' }
];
