import {Block} from '../util/types';

const blocks: Array<Block> = [
  {
    week: null, number: null,
    name: 'Brown Shelf', size: {width: 2.5, height: 2.5},
    tags: ['border', 'shelf'],
    type: 'original',
    file: 'wood',
  },
  {
    week: null, number: null,
    name: 'Gray Shelf', size: {width: 2.5, height: 2.5},
    tags: ['border', 'shelf'],
    type: 'original',
    file: 'stone',
  },
  {
    week: 1, number: 1,
    name: 'Crystal Ball', size: {width: 10, height: 10},
    tags: ['books', 'crystal', 'ball'],
    type: 'original'
  },
  {
    week: 1, number: 2,
    name: 'Crystal Ball with optional extra book', size: {width: 10, height: 10},
    tags: ['books', 'crystal', 'ball'],
    type: 'variation'
  },
  {
    week: 1, number: 3,
    name: 'Crystal Ball with alternative base', size: {width: 10, height: 10},
    tags: ['books', 'crystal', 'ball'],
    type: 'variation'
  },
  {
    week: 2, number: 1,
    name: 'Books', size: {width: 10, height: 10},
    tags: ['books'],
    type: 'original'
  },
  {
    week: 2, number: 2,
    name: 'Books with optional extra books', size: {width: 10, height: 10},
    tags: ['books'],
    type: 'variation'
  },
  {
    week: 3, number: 1,
    name: 'Books with potion bottle', size: {width: 10, height: 10},
    tags: ['books', 'potion', 'bottle'],
    type: 'original'
  },
  {
    week: 3, number: 2,
    name: 'Books with Deathly Hallows', size: {width: 10, height: 10},
    tags: ['books', 'deathly', 'hallows'],
    type: 'variation'
  },
  {
    week: 3, number: 3,
    name: 'Books with Dark Mark', size: {width: 10, height: 10},
    tags: ['books', 'dark', 'mark'],
    type: 'variation'
  },
  {
    week: 4, number: 1,
    name: 'Harry\'s Glasses', size: {width: 10, height: 10},
    tags: ['books', 'glasses'],
    type: 'original'
  },
  {
    week: 4, number: 2,
    name: 'Harry\'s Glasses', size: {width: 10, height: 10},
    tags: ['books'],
    type: 'variation'
  },
  {
    week: 4, number: 3,
    name: 'Hand of Glory', size: {width: 10, height: 10},
    tags: ['hand', 'glory'],
    type: 'variation'
  },
  {
    week: 5, number: 1,
    name: 'Books', size: {width: 10, height: 10},
    tags: ['books'],
    type: 'original'
  },
];

export {blocks as default};
