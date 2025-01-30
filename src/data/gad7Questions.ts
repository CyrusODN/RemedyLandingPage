export const questions = [
  {
    text: 'Uczucie zdenerwowania, niepokoju lub napięcia',
    answers: [
      { value: 0, label: 'Wcale nie dokuczało' },
      { value: 1, label: 'Kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Prawie codziennie' }
    ]
  },
  {
    text: 'Niemożność powstrzymania się od zamartwiania lub kontrolowania zamartwiania się',
    answers: [
      { value: 0, label: 'Wcale nie dokuczało' },
      { value: 1, label: 'Kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Prawie codziennie' }
    ]
  },
  {
    text: 'Nadmierne zamartwianie się różnymi sprawami',
    answers: [
      { value: 0, label: 'Wcale nie dokuczało' },
      { value: 1, label: 'Kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Prawie codziennie' }
    ]
  },
  {
    text: 'Trudności w zrelaksowaniu się',
    answers: [
      { value: 0, label: 'Wcale nie dokuczało' },
      { value: 1, label: 'Kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Prawie codziennie' }
    ]
  },
  {
    text: 'Niepokój tak silny, że trudno usiedzieć w miejscu',
    answers: [
      { value: 0, label: 'Wcale nie dokuczało' },
      { value: 1, label: 'Kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Prawie codziennie' }
    ]
  },
  {
    text: 'Łatwe wpadanie w rozdrażnienie lub zirytowanie',
    answers: [
      { value: 0, label: 'Wcale nie dokuczało' },
      { value: 1, label: 'Kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Prawie codziennie' }
    ]
  },
  {
    text: 'Odczuwanie lęku, jakby miało się zdarzyć coś strasznego',
    answers: [
      { value: 0, label: 'Wcale nie dokuczało' },
      { value: 1, label: 'Kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Prawie codziennie' }
    ]
  }
];

export const interpretResults = (score: number) => {
  if (score <= 4) return {
    severity: 'Minimalne',
    description: 'Minimalne nasilenie objawów lęku.',
    color: 'text-green-600'
  };
  if (score <= 9) return {
    severity: 'Łagodne',
    description: 'Łagodne nasilenie objawów lęku.',
    color: 'text-yellow-600'
  };
  if (score <= 14) return {
    severity: 'Umiarkowane',
    description: 'Umiarkowane nasilenie objawów lęku.',
    color: 'text-orange-600'
  };
  return {
    severity: 'Ciężkie',
    description: 'Ciężkie nasilenie objawów lęku.',
    color: 'text-red-700'
  };
};