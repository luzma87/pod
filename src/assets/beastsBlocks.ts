import { Block } from '../util/types';

const beastsBlocks: Array<Block> = [
  {
    name: 'Cornish Pixie', size: { width: 7, height: 8.5 },
    tags: ['cornish', 'pixie'],
    type: 'beasts',
    difficulty: 4,
    designer: 'Michelle Thompson',
    file: '01-pixie'
  }
];

export { beastsBlocks as default };
