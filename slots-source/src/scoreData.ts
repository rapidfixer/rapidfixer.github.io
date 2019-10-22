import { ScoreData } from './types';

export default [
  {
    id: 1,
    line: 'top',
    score: 2000,
    combinations: [
      ['cherry', 'cherry', 'cherry']
    ]
  },
  {
    id: 2,
    line: 'center',
    score: 1000,
    combinations: [
      ['cherry', 'cherry', 'cherry']
    ]
  },
  {
    id: 3,
    line: 'bottom',
    score: 4000,
    combinations: [
      ['cherry', 'cherry', 'cherry']
    ]
  },
  {
    id: 4,
    line: 'any',
    score: 150,
    combinations: [
      ['seven', 'seven', 'seven']
    ]
  },
  {
    id: 5,
    line: 'any',
    score: 75,
    combinations: [
      ['seven', 'cherry']
    ]
  },
  {
    id: 6,
    line: 'any',
    score: 50,
    combinations: [
      ['tripleBar', 'tripleBar', 'tripleBar']
  ]
  },
  {
    id: 7,
    line: 'any',
    score: 20,
    combinations: [
      ['doubleBar', 'doubleBar', 'doubleBar']
    ]
  },
  {
    id: 8,
    line: 'any',
    score: 10,
    combinations: [
      ['singleBar', 'singleBar', 'singleBar']
    ]
  },
  {
    id: 9,
    line: 'any',
    score: 5,
    combinations: [
      ['singleBar', 'singleBar'],
      ['singleBar', 'doubleBar'],
      ['doubleBar', 'doubleBar'],
      ['singleBar', 'tripleBar'],
      ['doubleBar', 'tripleBar'],
      ['tripleBar', 'tripleBar']
    ]
  },
] as ScoreData