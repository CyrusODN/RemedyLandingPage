export const navigationItems = [
  {
    type: 'link',
    name: 'O nas',
    path: '/#about'
  },
  {
    type: 'dropdown',
    title: 'Oferta',
    items: [
      { name: 'Konsultacja Psychiatryczna', path: '/services/konsultacja' },
      { name: 'Konsultacja Psychiatryczna Dzieci i Młodzieży', path: '/services/konsultacja-dzieci' },
      { name: 'Psychoterapia', path: '/services/psychoterapia' },
      { name: 'Terapia Grupowa', path: '/services/terapia-grupowa' },
      { name: 'Diagnostyka Osobowości', path: '/services/diagnostyka' },
      { name: 'Badania Kliniczne - Kwalifikacja Wstępna', path: '/services/kwalifikacja-do-badan' }
    ]
  },
  {
    type: 'dropdown',
    title: 'Zakres Leczenia',
    items: [
      { name: 'Depresja', path: '/treatment/depresja' },
      { name: 'Zaburzenia lękowe', path: '/treatment/zaburzenia-lekowe' },
      { name: 'Schizofrenia', path: '/treatment/schizofrenia' },
      { name: 'ChAD', path: '/treatment/chad' },
      { name: 'ADHD', path: '/treatment/adhd' },
      { name: 'PTSD', path: '/treatment/ptsd' },
      { name: 'Zaburzenia osobowości', path: '/treatment/zaburzenia-osobowosci' },
      { name: 'Zaburzenia snu', path: '/treatment/zaburzenia-snu' }
    ]
  },
  {
    type: 'link',
    name: 'Cennik',
    path: '/#pricing'
  },
  {
    type: 'link',
    name: 'Lokalizacje',
    path: '/#locations'
  },
  {
    type: 'link',
    name: 'Kariera',
    path: '/#join-us'
  },
  {
    type: 'link',
    name: 'Kontakt',
    path: '/#contact'
  }
];