import { Block } from '../util/types';

const otherBlocks: Array<Block> = [
  {
    name: 'Mimbulus Mimbletonia', size: { width: 5, height: 5 },
    tags: ['mimbulus', 'mimbletonia', 'pot', 'potted', 'plant'],
    type: 'others',
    difficulty: 4,
    designer: 'Schenley Pilgram',
    file: '001-mimbulus'
  },
  {
    name: 'Mandrake', size: { width: 5, height: 5 },
    tags: ['mandrake', 'pot', 'potted', 'plant'],
    type: 'others',
    difficulty: 2,
    designer: 'Cat Magraith',
    file: '002-mandrake'
  },
  {
    name: 'Molly’s Knitting', size: { width: 5, height: 5 },
    tags: ['molly', 'weasley', 'knitting', 'knit', 'yarn'],
    type: 'others',
    difficulty: 1,
    designer: 'Michelle Thompson',
    file: '003-molly'
  }
];

export { otherBlocks as default };
