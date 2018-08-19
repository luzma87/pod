import { Block } from '../util/types';

const customBlocks: Array<Block> = [
  {
    name: 'Herbology', size: { width: 10, height: 10 },
    tags: ['mimbulus', 'mimbletonia', 'mandrake', 'pot', 'potted', 'plant', 'plants', 'book', 'books'],
    type: 'custom',
    difficulty: 4,
    designer: 'Schenley Pilgram / Cat Magraith (modified)',
    file: '001-herbology'
  },
  {
    name: 'Molly’s Knitting with yarn ball', size: { width: 10, height: 10 },
    tags: ['molly', 'weasley', 'knitting', 'knit', 'yarn', 'ball'],
    type: 'custom',
    difficulty: 2,
    designer: 'Michelle Thompson (modified)',
    file: '002-molly'
  }
];

export { customBlocks as default };
