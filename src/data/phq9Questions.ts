export const questions = [
  {
    text: 'Niewielkie zainteresowanie lub odczuwanie przyjemności z wykonywania czynności',
    answers: [
      { value: 0, label: 'Wcale nie występowało' },
      { value: 1, label: 'Przez kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Niemal codziennie' }
    ]
  },
  {
    text: 'Uczucie smutku, przygnębienia lub beznadziejności',
    answers: [
      { value: 0, label: 'Wcale nie występowało' },
      { value: 1, label: 'Przez kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Niemal codziennie' }
    ]
  },
  {
    text: 'Kłopoty z zaśnięciem lub przerywany sen, albo zbyt długi sen',
    answers: [
      { value: 0, label: 'Wcale nie występowało' },
      { value: 1, label: 'Przez kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Niemal codziennie' }
    ]
  },
  {
    text: 'Uczucie zmęczenia lub brak energii',
    answers: [
      { value: 0, label: 'Wcale nie występowało' },
      { value: 1, label: 'Przez kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Niemal codziennie' }
    ]
  },
  {
    text: 'Brak apetytu lub przejadanie się',
    answers: [
      { value: 0, label: 'Wcale nie występowało' },
      { value: 1, label: 'Przez kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Niemal codziennie' }
    ]
  },
  {
    text: 'Poczucie niezadowolenia z siebie lub uczucie, że jest się do niczego, albo że zawiodło się siebie lub rodzinę',
    answers: [
      { value: 0, label: 'Wcale nie występowało' },
      { value: 1, label: 'Przez kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Niemal codziennie' }
    ]
  },
  {
    text: 'Trudności ze skupieniem się na przykład przy czytaniu gazety lub oglądaniu telewizji',
    answers: [
      { value: 0, label: 'Wcale nie występowało' },
      { value: 1, label: 'Przez kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Niemal codziennie' }
    ]
  },
  {
    text: 'Poruszanie się lub mówienie tak wolno, że inni mogliby to zauważyć lub wręcz przeciwnie – niemożność usiedzenia w miejscu lub podenerwowanie powodujące ruchliwość znacznie większą niż zwykle',
    answers: [
      { value: 0, label: 'Wcale nie występowało' },
      { value: 1, label: 'Przez kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Niemal codziennie' }
    ]
  },
  {
    text: 'Myśli, że lepiej byłoby umrzeć, albo chęć zrobienia sobie jakiejś krzywdy',
    answers: [
      { value: 0, label: 'Wcale nie występowało' },
      { value: 1, label: 'Przez kilka dni' },
      { value: 2, label: 'Więcej niż połowę dni' },
      { value: 3, label: 'Niemal codziennie' }
    ]
  }
];

export const interpretResults = (score: number) => {
  if (score <= 4) return {
    severity: 'Minimalne',
    description: 'Objawy depresji minimalne lub brak objawów.',
    color: 'text-green-600'
  };
  if (score <= 9) return {
    severity: 'Łagodne',
    description: 'Objawy depresji o łagodnym nasileniu.',
    color: 'text-yellow-600'
  };
  if (score <= 14) return {
    severity: 'Umiarkowane',
    description: 'Objawy depresji o umiarkowanym nasileniu.',
    color: 'text-orange-600'
  };
  if (score <= 19) return {
    severity: 'Umiarkowanie ciężkie',
    description: 'Objawy depresji o umiarkowanie ciężkim nasileniu.',
    color: 'text-red-600'
  };
  return {
    severity: 'Ciężkie',
    description: 'Objawy depresji o ciężkim nasileniu.',
    color: 'text-red-700'
  };
};