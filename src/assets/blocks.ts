import {Block} from '../util/types';

const blocks: Array<Block> = [
  {
    week: null, number: null,
    name: 'Brown Shelf', size: {width: 2.5, height: 2.5},
    tags: ['border', 'shelf'],
    type: 'original',
    file: 'wood',
    difficulty: 1,
  },
  {
    week: null, number: null,
    name: 'Gray Shelf', size: {width: 2.5, height: 2.5},
    tags: ['border', 'shelf'],
    type: 'original',
    file: 'stone',
    difficulty: 1,
  },
  {
    week: 1, number: 1,
    name: 'Crystal Ball', size: {width: 10, height: 10},
    tags: ['books', 'crystal', 'ball'],
    type: 'original',
    difficulty: 2,
  },
  {
    week: 1, number: 2,
    name: 'Crystal Ball with optional extra book', size: {width: 10, height: 10},
    tags: ['books', 'crystal', 'ball'],
    type: 'variation',
    difficulty: 2,
  },
  {
    week: 1, number: 3,
    name: 'Crystal Ball with alternative base', size: {width: 10, height: 10},
    tags: ['books', 'crystal', 'ball'],
    type: 'variation',
    difficulty: 2,
  },
  {
    week: 2, number: 1,
    name: 'Books', size: {width: 10, height: 10},
    tags: ['books'],
    type: 'original',
    difficulty: 1,
  },
  {
    week: 2, number: 2,
    name: 'Books with optional extra books', size: {width: 10, height: 10},
    tags: ['books'],
    type: 'variation',
    difficulty: 1,
  },
  {
    week: 3, number: 1,
    name: 'Books with potion bottle', size: {width: 10, height: 10},
    tags: ['books', 'potion', 'bottle'],
    type: 'original',
    difficulty: 2,
  },
  {
    week: 3, number: 2,
    name: 'Books with Deathly Hallows', size: {width: 10, height: 10},
    tags: ['books', 'deathly', 'hallows'],
    type: 'variation',
    difficulty: 2,
  },
  {
    week: 3, number: 3,
    name: 'Books with Dark Mark', size: {width: 10, height: 10},
    tags: ['books', 'dark', 'mark'],
    type: 'variation',
    difficulty: 2,
  },
  {
    week: 4, number: 1,
    name: 'Harry\'s Glasses', size: {width: 10, height: 10},
    tags: ['books', 'glasses'],
    type: 'original',
    difficulty: 3,
  },
  {
    week: 4, number: 2,
    name: 'Harry\'s Glasses', size: {width: 10, height: 10},
    tags: ['books'],
    type: 'variation',
    difficulty: 3,
  },
  {
    week: 4, number: 3,
    name: 'Hand of Glory', size: {width: 10, height: 10},
    tags: ['hand', 'glory'],
    type: 'variation',
    difficulty: 3,
  },
  {
    week: 5, number: 1,
    name: 'Books', size: {width: 10, height: 10},
    tags: ['books'],
    type: 'original',
    difficulty: 1,
  },
  {
    week: 6, number: 1,
    name: 'Stoppered Vial', size: {width: 10, height: 10},
    tags: ['books', 'stoppered', 'vial'],
    type: 'original',
    difficulty: 2,
  },
  {
    week: 6, number: 2,
    name: 'Picture frame', size: {width: 10, height: 10},
    tags: ['picture', 'frame'],
    type: 'variation',
    difficulty: 2,
  },
  {
    week: 6, number: 3,
    name: 'Slytherin\'s Locket', size: {width: 10, height: 10},
    tags: ['hand', 'slytherin', 'locket'],
    type: 'variation',
    difficulty: 2,
  },
  {
    week: 7, number: 1,
    name: 'Time Turner', size: {width: 10, height: 10},
    tags: ['books', 'time', 'turner'],
    type: 'original',
    difficulty: 3,
  },
  {
    week: 7, number: 2,
    name: 'Venomous Tentacula', size: {width: 10, height: 10},
    tags: ['picture', 'venomous', 'tentacula'],
    type: 'variation',
    difficulty: 3,
  },
  {
    week: 8, number: 1,
    name: 'Books', size: {width: 10, height: 10},
    tags: ['books',],
    type: 'original',
    difficulty: 1,
  },
  {
    week: 9, number: 1,
    name: 'Golden Snitch', size: {width: 10, height: 10},
    tags: ['books',],
    type: 'original',
    difficulty: 3,
  },
  {
    week: 9, number: 2,
    name: 'House tie Hufflepuff', size: {width: 10, height: 10},
    tags: ['books', 'tie', 'hufflepuff'],
    type: 'variation',
    difficulty: 3,
  },
  {
    week: 9, number: 3,
    name: 'House tie Ravenclaw', size: {width: 10, height: 10},
    tags: ['books', 'tie', 'ravenclaw'],
    type: 'variation',
    difficulty: 3,
  },
  {
    week: 9, number: 4,
    name: 'House tie Griffindor', size: {width: 10, height: 10},
    tags: ['books', 'tie', 'griffindor'],
    type: 'variation',
    difficulty: 3,
  },
  {
    week: 9, number: 5,
    name: 'House tie Slytherin', size: {width: 10, height: 10},
    tags: ['books', 'tie', 'slytherin'],
    type: 'variation',
    difficulty: 3,
  },
  {
    week: 10, number: 1,
    name: 'Standard Book of Spells (6)', size: {width: 10, height: 10},
    tags: ['books', 'standard', 'spells'],
    type: 'original',
    difficulty: 2,
  },
  {
    week: 10, number: 2,
    name: 'Standard Book of Spells (7)', size: {width: 10, height: 10},
    tags: ['books', 'standard', 'spells'],
    type: 'variation',
    difficulty: 2,
  },
  {
    week: 11, number: 1,
    name: 'Hedwig', size: {width: 10, height: 10},
    tags: ['book', 'owl', 'hedwig'],
    type: 'original',
    difficulty: 4,
  },
  {
    week: 11, number: 2,
    name: 'Eagle owl', size: {width: 10, height: 10},
    tags: ['book', 'eagle', 'owl'],
    type: 'variation',
    difficulty: 4,
  },
  {
    week: 11, number: 3,
    name: 'Errol', size: {width: 10, height: 10},
    tags: ['book', 'errol', 'owl'],
    type: 'variation',
    difficulty: 4,
  },
  {
    week: 11, number: 4,
    name: 'Pigwidgeon', size: {width: 10, height: 10},
    tags: ['books', 'owl', 'pigwidgeon', 'owl'],
    type: 'variation',
    difficulty: 4,
  },
];

export {blocks as default};
