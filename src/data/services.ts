export const childServices = {
  diagnostics: {
    title: 'Diagnoza i badania psychologiczne',
    services: [
      {
        name: 'Badanie poziomu inteligencji (DSZ)',
        description: 'Ocena funkcjonowania intelektualnego',
        duration: '2-3 godziny',
        price: '800 PLN',
        details: [
          'Testy inteligencji',
          'Ocena funkcji poznawczych',
          'Analiza wyników',
          'Konsultacja z rodzicami',
          'Pisemna opinia'
        ]
      },
      {
        name: 'Diagnoza dysleksji',
        description: 'Diagnostyka specyficznych trudności w uczeniu się',
        duration: '2-3 godziny',
        price: '800 PLN',
        details: [
          'Ocena umiejętności czytania i pisania',
          'Badanie funkcji poznawczych',
          'Analiza prac szkolnych',
          'Konsultacja z rodzicami',
          'Szczegółowe zalecenia'
        ]
      },
      {
        name: 'Ocena trudności emocjonalnych i rozwojowych',
        description: 'Kompleksowa ocena funkcjonowania emocjonalnego i rozwojowego',
        duration: '2-3 godziny',
        price: '800 PLN',
        details: [
          'Wywiad z rodzicami',
          'Obserwacja zachowania',
          'Testy psychologiczne',
          'Plan wsparcia',
          'Zalecenia dla rodziców i szkoły'
        ]
      }
    ]
  },
  therapy: {
    title: 'Wsparcie dla dzieci z trudnościami w zachowaniu i emocjach',
    services: [
      {
        name: 'Terapia zaburzeń emocjonalnych i zachowania',
        description: 'Indywidualna terapia dostosowana do potrzeb dziecka',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Regularne sesje terapeutyczne',
          'Techniki radzenia sobie z emocjami',
          'Modyfikacja zachowań',
          'Współpraca z rodzicami',
          'Monitoring postępów'
        ]
      },
      {
        name: 'Wsparcie w przypadku mutyzmu wybiórczego',
        description: 'Specjalistyczna terapia dla dzieci z mutyzmem wybiórczym',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Terapia behawioralna',
          'Techniki ekspozycji',
          'Współpraca ze szkołą',
          'Wsparcie dla rodziców',
          'Plan interwencji'
        ]
      },
      {
        name: 'Praca z zachowaniami opozycyjno-buntowniczymi',
        description: 'Terapia ukierunkowana na trudności w zachowaniu',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Analiza zachowań',
          'Strategie behawioralne',
          'Trening umiejętności społecznych',
          'Wsparcie rodzicielskie',
          'Plan modyfikacji zachowań'
        ]
      },
      {
        name: 'Wsparcie dzieci z lękiem i niską samooceną',
        description: 'Terapia wspierająca rozwój emocjonalny i budowanie pewności siebie',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Techniki relaksacyjne',
          'Budowanie pewności siebie',
          'Praca z przekonaniami',
          'Strategie radzenia sobie',
          'Wsparcie rodziców'
        ]
      },
      {
        name: 'Praca z dziećmi z objawami depresyjnymi',
        description: 'Terapia dostosowana do potrzeb dzieci z objawami depresji',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Terapia poznawczo-behawioralna',
          'Aktywizacja behawioralna',
          'Techniki mindfulness',
          'Wsparcie rodzinne',
          'Monitoring nastroju'
        ]
      }
    ]
  },
  communication: {
    title: 'Komunikacja i funkcjonowanie społeczne',
    services: [
      {
        name: 'Alternatywne metody komunikacji (AAC)',
        description: 'Wsparcie w rozwijaniu umiejętności komunikacyjnych',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Dobór metod AAC',
          'Trening komunikacji',
          'Wsparcie technologiczne',
          'Edukacja rodziców',
          'Współpraca z otoczeniem'
        ]
      },
      {
        name: 'Terapia wspomagająca dzieci z trudnościami w relacjach społecznych',
        description: 'Rozwijanie umiejętności społecznych i budowanie relacji',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Trening umiejętności społecznych',
          'Rozumienie emocji',
          'Budowanie relacji',
          'Scenariusze społeczne',
          'Praktyczne ćwiczenia'
        ]
      },
      {
        name: 'Praca z dziećmi z autyzmem i spektrum autyzmu',
        description: 'Specjalistyczna terapia dla dzieci ze spektrum autyzmu',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Terapia behawioralna',
          'Rozwijanie komunikacji',
          'Trening społeczny',
          'Integracja sensoryczna',
          'Wsparcie rodziny'
        ]
      }
    ]
  },
  psychoeducation: {
    title: 'Psychoedukacja i higiena funkcjonowania',
    services: [
      {
        name: 'Nauka higieny snu',
        description: 'Wsparcie w rozwijaniu prawidłowych nawyków snu',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Analiza wzorców snu',
          'Techniki relaksacyjne',
          'Higiena snu',
          'Plan interwencji',
          'Monitoring postępów'
        ]
      },
      {
        name: 'Warsztaty wspierające rozwój emocjonalny',
        description: 'Grupowe zajęcia rozwijające kompetencje emocjonalne',
        duration: '90 minut',
        price: '150 PLN',
        details: [
          'Rozpoznawanie emocji',
          'Techniki regulacji',
          'Praca w grupie',
          'Ćwiczenia praktyczne',
          'Materiały edukacyjne'
        ]
      },
      {
        name: 'Wsparcie dzieci z trudnościami w adaptacji',
        description: 'Pomoc w przystosowaniu się do nowych sytuacji',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Strategie adaptacyjne',
          'Budowanie odporności',
          'Techniki radzenia sobie',
          'Wsparcie w zmianach',
          'Plan działania'
        ]
      }
    ]
  },
  drugResistant: {
    title: 'Dla dzieci opornych na leczenie farmakologiczne',
    services: [
      {
        name: 'Wsparcie w funkcjonowaniu dzieci lekoopornych',
        description: 'Kompleksowa pomoc dla dzieci z opornością na leczenie',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Analiza dotychczasowego leczenia',
          'Alternatywne metody terapii',
          'Wsparcie psychologiczne',
          'Współpraca z psychiatrą',
          'Plan kompleksowej pomocy'
        ]
      },
      {
        name: 'Pomoc w codziennym funkcjonowaniu bez udziału farmakoterapii',
        description: 'Alternatywne metody wsparcia i terapii',
        duration: '50 minut',
        price: '250 PLN',
        details: [
          'Techniki behawioralne',
          'Metody naturalne',
          'Wsparcie środowiskowe',
          'Modyfikacje stylu życia',
          'Plan wsparcia'
        ]
      }
    ]
  }
};