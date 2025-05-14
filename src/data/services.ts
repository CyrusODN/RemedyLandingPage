export const childServices = {
  diagnostics: {
    title: 'Diagnosis and psychological testing', // Klucz i18n
    services: [
      {
        name: 'Intelligence level assessment (DSZ)', // Klucz i18n
        description: 'Assessment of intellectual functioning', // Klucz i18n
        duration: '2-3 hours', // Użyje istniejącego klucza i18n "2-3 hours"
        price: '800 PLN',
        details: [
          'Intelligence tests', // Klucz i18n
          'Cognitive functions assessment', // Klucz i18n
          'Results analysis', // Klucz i18n
          'Consultation with parents', // Klucz i18n
          'Written opinion', // Klucz i18n
        ]
      },
      {
        name: 'Dyslexia diagnosis', // Klucz i18n
        description: 'Diagnostics of specific learning difficulties', // Klucz i18n
        duration: '2-3 hours',
        price: '800 PLN',
        details: [
          'Assessment of reading and writing skills', // Klucz i18n
          'Cognitive functions assessment', // Użycie istniejącego klucza
          'Analysis of schoolwork', // Klucz i18n
          'Consultation with parents', // Użycie istniejącego klucza
          'Detailed recommendations', // Klucz i18n
        ]
      },
      {
        name: 'Assessment of emotional and developmental difficulties', // Klucz i18n
        description: 'Comprehensive assessment of emotional and developmental functioning', // Klucz i18n
        duration: '2-3 hours',
        price: '800 PLN',
        details: [
          'Interview with parents', // Klucz i18n
          'Behavioral observation', // Klucz i18n
          'Psychological tests', // Istnieje
          'Support plan', // Klucz i18n
          'Recommendations for parents and school', // Klucz i18n
        ]
      }
    ]
  },
  therapy: {
    title: 'Support for children with behavioral and emotional difficulties', // Klucz i18n
    services: [
      {
        name: 'Therapy for emotional and behavioral disorders', // Klucz i18n
        description: 'Individual therapy tailored to the child\'s needs', // Klucz i18n
        duration: '50 minutes', // Istnieje
        price: '250 PLN',
        details: [
          'Regular therapeutic sessions', // Istnieje
          'Coping techniques for emotions', // Klucz i18n
          'Behavior modification', // Klucz i18n
          'Cooperation with parents', // Klucz i18n
          'Progress monitoring', // Istnieje
        ]
      },
      {
        name: 'Support for selective mutism', // Klucz i18n
        description: 'Specialized therapy for children with selective mutism', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Behavioral therapy', // Istnieje
          'Exposure techniques', // Klucz i18n
          'Cooperation with school', // Klucz i18n
          'Support for parents', // Istnieje
          'Intervention plan', // Klucz i18n
        ]
      },
      {
        name: 'Work with oppositional defiant behaviors', // Klucz i18n
        description: 'Therapy focused on behavioral difficulties', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Behavior analysis', // Klucz i18n
          'Behavioral strategies', // Klucz i18n
          'Social skills training', // Istnieje
          'Parental support', // Klucz i18n
          'Behavior modification plan', // Klucz i18n
        ]
      },
      {
        name: 'Support for children with anxiety and low self-esteem', // Klucz i18n
        description: 'Therapy supporting emotional development and building self-confidence', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Relaxation techniques', // Istnieje
          'Building self-confidence', // Klucz i18n
          'Working with beliefs', // Klucz i18n
          'Coping strategies', // Istnieje
          'Support for parents', // Istnieje
        ]
      },
      {
        name: 'Work with children with depressive symptoms', // Klucz i18n
        description: 'Therapy tailored to the needs of children with depressive symptoms', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Cognitive-Behavioral Therapy (CBT)', // Istnieje
          'Behavioral activation', // Klucz i18n
          'Mindfulness techniques', // Klucz i18n
          'Family support', // Istnieje
          'Mood monitoring', // Istnieje
        ]
      }
    ]
  },
  communication: {
    title: 'Communication and social functioning', // Klucz i18n
    services: [
      {
        name: 'Alternative and Augmentative Communication (AAC)', // Klucz i18n
        description: 'Support in developing communication skills', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Selection of AAC methods', // Klucz i18n
          'Communication training', // Klucz i18n
          'Technological support', // Klucz i18n
          'Parent education', // Klucz i18n
          'Collaboration with the environment', // Klucz i18n
        ]
      },
      {
        name: 'Therapy supporting children with social difficulties', // Klucz i18n
        description: 'Developing social skills and building relationships', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Social skills training', // Istnieje
          'Understanding emotions', // Klucz i18n
          'Building relationships', // Istnieje
          'Social scenarios', // Klucz i18n
          'Practical exercises', // Klucz i18n
        ]
      },
      {
        name: 'Work with children with autism and autism spectrum', // Klucz i18n
        description: 'Specialized therapy for children with autism spectrum', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Behavioral therapy', // Istnieje
          'Developing communication', // Klucz i18n
          'Social training', // Klucz i18n
          'Sensory integration', // Klucz i18n
          'Family support', // Istnieje
        ]
      }
    ]
  },
  psychoeducation: {
    title: 'Psychoeducation and functional hygiene', // Klucz i18n
    services: [
      {
        name: 'Sleep hygiene education', // Klucz i18n
        description: 'Support in developing healthy sleep habits', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Analysis of sleep patterns', // Klucz i18n
          'Relaxation techniques', // Istnieje
          'Sleep hygiene', // Istnieje
          'Intervention plan', // Użycie istniejącego klucza
          'Progress monitoring', // Istnieje
        ]
      },
      {
        name: 'Workshops supporting emotional development', // Klucz i18n
        description: 'Group activities developing emotional competencies', // Klucz i18n
        duration: '90 minutes', // Nowy klucz dla "90 minutes"
        price: '150 PLN',
        details: [
          'Recognizing emotions', // Klucz i18n
          'Regulation techniques', // Klucz i18n
          'Group work', // Klucz i18n
          'Practical exercises', // Użycie istniejącego klucza
          'Educational materials', // Klucz i18n
        ]
      },
      {
        name: 'Support for children with adaptation difficulties', // Klucz i18n
        description: 'Help in adapting to new situations', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Adaptive strategies', // Klucz i18n
          'Building resilience', // Klucz i18n
          'Coping techniques', // Klucz i18n (może być inny niż ogólny "Coping strategies")
          'Support in changes', // Klucz i18n
          'Action plan', // Klucz i18n
        ]
      }
    ]
  },
  drugResistant: {
    title: 'For children resistant to pharmacological treatment', // Klucz i18n
    services: [
      {
        name: 'Support for treatment-resistant children', // Klucz i18n
        description: 'Comprehensive help for children with treatment resistance', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Analysis of previous treatment', // Klucz i18n
          'Alternative therapy methods', // Klucz i18n
          'Psychological support', // Istnieje
          'Cooperation with a psychiatrist', // Klucz i18n
          'Comprehensive help plan', // Klucz i18n
        ]
      },
      {
        name: 'Help in daily functioning without pharmacotherapy', // Klucz i18n
        description: 'Alternative methods of support and therapy', // Klucz i18n
        duration: '50 minutes',
        price: '250 PLN',
        details: [
          'Behavioral techniques', // Istnieje
          'Natural methods', // Klucz i18n
          'Environmental support', // Klucz i18n
          'Lifestyle modifications', // Klucz i18n
          'Support plan', // Użycie istniejącego klucza
        ]
      }
    ]
  }
};
