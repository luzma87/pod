import { Block } from '../util/types';

const disneyBlocks: Array<Block> = [
  {
    name: 'Ursula’s Tentacles (from Disney bookcase)', size: { width: 10, height: 10 },
    tags: ['tentacle', 'tentacles', 'book', 'books'],
    type: 'disney',
    difficulty: 2,
    designer: 'Kathy Borrelli',
    file: '001-tentacles'
  }
];

export { disneyBlocks as default };
