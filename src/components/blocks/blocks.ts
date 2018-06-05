import {WeekBlock} from '../../util/types';

const weeksBlocks: Array<WeekBlock> = [
  {
    name: 'Crystal Ball', week: 1, size: {width: 10, height: 10},
    tags: ['books', 'crystal ball'],
    variations: [
      {number: 0, name: 'original'},
      {number: 1, name: 'with optional extra book'},
      {number: 2, name: 'with alternative crystal ball base'},
    ],
  },
  {
    name: 'Books', week: 2, size: {width: 10, height: 10},
    tags: ['books'],
    variations: [
      {number: 0, name: 'original'},
      {number: 1, name: 'with optional extra books'},
    ],
  },
  {
    name: 'Books', week: 3, size: {width: 10, height: 10},
    tags: ['books'],
    variations: [
      {number: 0, name: 'original', tags: ['potion bottle']},
      {number: 1, name: 'with Deathly Hallows', tags: ['deathly hallows']},
      {number: 2, name: 'with Dark Mark cover', tags: ['dark mark']},
    ],
  },
  {
    name: 'Harry\'s Glasses', week: 4, size: {width: 10, height: 10},
    tags: ['books'],
    variations: [
      {number: 0, name: 'original', tags: ['glasses']},
      {number: 1, name: 'variation', tags: ['glasses']},
      {number: 2, name: 'Hand of Glory', tags: ['hand of glory']},
    ],
  },
  {
    name: 'Books', week: 5, size: {width: 10, height: 10},
    tags: ['books'],
    variations: [
      {number: 0, name: 'original', tags: ['glasses']},
    ],
  },
];

const blocks = {
  weeks: weeksBlocks,
};

export {blocks as default};
