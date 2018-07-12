import { Block } from '../util/types';

const supplementalBlocks: Array<Block> = [
  {
    name: 'Colin’s Camera', size: { width: 10, height: 10 },
    tags: ['colin', 'camera', 'book'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '001-colin'
  },
  {
    name: 'Dre Shrunken Head', size: { width: 10, height: 10 },
    tags: ['dre', 'shrunken', 'head'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Daphne Seymour',
    file: '002-dre'
  },
  {
    name: 'Ear Muffs', size: { width: 10, height: 10 },
    tags: ['ear', 'muffs'],
    type: 'supplemental',
    difficulty: 1,
    designer: 'Michelle Thompson',
    file: '003-ear-muffs'
  },
  {
    name: 'Grim Block', size: { width: 10, height: 10 },
    tags: ['ear', 'muffs'],
    type: 'supplemental',
    difficulty: 1,
    designer: 'Tianna Homer',
    file: '004-grim'
  },
  {
    name: 'He Who Must Not Be Named @ King’s Cross', size: { width: 10, height: 10 },
    tags: ['voldemort', 'books', 'king', 'cross'],
    type: 'supplemental',
    difficulty: 4,
    designer: 'Vanda Chittenden',
    file: '005-voldemort'
  },
  {
    name: 'Honeydukes Jar & Books', size: { width: 10, height: 10 },
    tags: ['honeydukes', 'books', 'jar'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '006-honeydukes-books'
  },
  {
    name: 'Honeydukes Jar & Boxes', size: { width: 10, height: 10 },
    tags: ['honeydukes', 'box', 'boxes', 'jar'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '007-honeydukes-boxes'
  },
  {
    name: 'Honeydukes Sherbet Lemons', size: { width: 10, height: 10 },
    tags: ['honeydukes', 'jar', 'sherbet', 'lemon'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Wendi Riggens-Miller',
    file: '008-honeydukes'
  },
  {
    name: 'House Scarf - Griffindor', size: { width: 10, height: 10 },
    tags: ['books', 'griffindor', 'scarf'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '009-scarf-griffindor'
  },
  {
    name: 'House Scarf - Hufflepuff', size: { width: 10, height: 10 },
    tags: ['books', 'hufflepuff', 'scarf'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '009-scarf-hufflepuff'
  },
  {
    name: 'House Scarf - Ravenclaw', size: { width: 10, height: 10 },
    tags: ['books', 'ravenclaw', 'scarf'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '009-scarf-ravenclaw'
  },
  {
    name: 'House Scarf - Slytherin', size: { width: 10, height: 10 },
    tags: ['books', 'slytherin', 'scarf'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '009-scarf-slytherin'
  },
  {
    name: 'Lantern', size: { width: 10, height: 10 },
    tags: ['books', 'lantern'],
    type: 'supplemental',
    difficulty: 4,
    designer: 'Wendi Riggens-Miller',
    file: '010-lantern'
  },
  {
    name: 'Lovegood ', size: { width: 10, height: 10 },
    tags: ['magazine', 'lovegood', 'spectrespecs'],
    type: 'supplemental',
    difficulty: 4,
    designer: 'Megan Ruth Stay',
    file: '011-lovegood'
  },
  {
    name: 'Luna’s Lion Hat', size: { width: 10, height: 10 },
    tags: ['luna', 'lovegood', 'lion', 'hat'],
    type: 'supplemental',
    difficulty: 4,
    designer: 'Michelle Thompson',
    file: '012-luna-hat'
  },
  {
    name: 'Luna’s Lion Hat [embroidered]', size: { width: 10, height: 10 },
    tags: ['luna', 'lovegood', 'lion', 'hat'],
    type: 'supplemental',
    difficulty: 4,
    designer: 'Michelle Thompson',
    hasEmbroidery: true,
    file: '012-luna-hat2'
  },
  {
    name: 'Luna’s Spectrespecs', size: { width: 10, height: 10 },
    tags: ['luna', 'lovegood', 'spectrespecs', 'books'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Michelle Thompson',
    file: '013-luna-spectrespecs'
  },
  {
    name: 'Mafalda’s Letter', size: { width: 10, height: 10 },
    tags: ['mafalda', 'letter'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Michelle Thompson',
    hasEmbroidery: true,
    file: '014-mafalda'
  },
  {
    name: 'Omnioculars', size: { width: 10, height: 10 },
    tags: ['omnioculars'],
    type: 'supplemental',
    difficulty: 4,
    designer: 'Michelle Thompson',
    hasEmbroidery: true,
    file: '015-omnioculars'
  },
  {
    name: 'Pygmy Puff', size: { width: 10, height: 10 },
    tags: ['pygmy', 'puff', 'cage'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '016-pygmy'
  },
  {
    name: 'Quidditch Goggles', size: { width: 10, height: 10 },
    tags: ['quidditch', 'goggles', 'books'],
    type: 'supplemental',
    difficulty: 3,
    hasEmbroidery: true,
    designer: 'Michelle Thompson',
    file: '017-quidditch'
  },
  {
    name: 'Rememberall', size: { width: 10, height: 10 },
    tags: ['rememberall', 'books'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Michelle Thompson',
    file: '018-rememberall'
  },
  {
    name: 'Ripped Book', size: { width: 10, height: 10 },
    tags: ['ripped', 'book'],
    type: 'supplemental',
    difficulty: 1,
    designer: 'Tereza Kulovaná',
    file: '019-ripped'
  },
  {
    name: 'Rita Skeeter', size: { width: 10, height: 10 },
    tags: ['rita', 'skeeter', 'book'],
    type: 'supplemental',
    difficulty: 2,
    hasEmbroidery: true,
    designer: 'Daphne Seymour',
    file: '020-rita'
  },
  {
    name: 'Student Hat', size: { width: 10, height: 10 },
    tags: ['student', 'hat', 'book'],
    type: 'supplemental',
    difficulty: 1,
    designer: 'Wendi Riggens-Miller',
    file: '021-hat'
  },
  {
    name: 'Skelegro', size: { width: 10, height: 10 },
    tags: ['skelegro', 'potion', 'books'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Michelle Thompson',
    file: '022-skelegro',
    hasEmbroidery: true
  },
  {
    name: 'Wizard Chess Bookends – The Bishop - dark', size: { width: 10, height: 10 },
    tags: ['wizard', 'chess', 'bookend', 'bishop'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Michelle Thompson',
    file: '023-bishop-dark',
    hasEmbroidery: true
  },
  {
    name: 'Wizard Chess Bookends – The Bishop - light', size: { width: 10, height: 10 },
    tags: ['wizard', 'chess', 'bookend', 'bishop'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Michelle Thompson',
    file: '023-bishop-light',
    hasEmbroidery: true
  },
  {
    name: 'Wizard Chess Bookends – King and Queen - dark', size: { width: 10, height: 10 },
    tags: ['wizard', 'chess', 'bookend', 'king', 'queen'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Michelle Thompson',
    file: '024-king-queen-dark',
    hasEmbroidery: true
  },
  {
    name: 'Wizard Chess Bookends – King and Queen - light', size: { width: 10, height: 10 },
    tags: ['wizard', 'chess', 'bookend', 'king', 'queen'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Michelle Thompson',
    file: '024-king-queen-light',
    hasEmbroidery: true
  },
  {
    name: 'Wizard Chess Bookends – The Knight - dark', size: { width: 10, height: 10 },
    tags: ['wizard', 'chess', 'bookend', 'knight'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Michelle Thompson',
    file: '025-knight-dark',
    hasEmbroidery: true
  },
  {
    name: 'Wizard Chess Bookends – The Knight - light', size: { width: 10, height: 10 },
    tags: ['wizard', 'chess', 'bookend', 'knight'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Michelle Thompson',
    file: '025-knight-light',
    hasEmbroidery: true
  }
];

export { supplementalBlocks as default };
