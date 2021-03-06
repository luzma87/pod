import { Block } from '../util/types';

const supplementalBlocks: Array<Block> = [
  {
    name: 'Colin’s Camera', size: { width: 10, height: 10 },
    tags: ['colin', 'camera', 'book', 'books'],
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
    tags: ['voldemort', 'books', 'book', 'king', 'cross'],
    type: 'supplemental',
    difficulty: 4,
    designer: 'Vanda Chittenden',
    file: '005-voldemort'
  },
  {
    name: 'Honeydukes Jar & Books', size: { width: 10, height: 10 },
    tags: ['honeydukes', 'books', 'book', 'jar'],
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
    name: 'House Scarf - Gryffindor', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'gryffindor', 'scarf'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '009-scarf-gryffindor'
  },
  {
    name: 'House Scarf - Hufflepuff', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'hufflepuff', 'scarf'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '009-scarf-hufflepuff'
  },
  {
    name: 'House Scarf - Ravenclaw', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'ravenclaw', 'scarf'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '009-scarf-ravenclaw'
  },
  {
    name: 'House Scarf - Slytherin', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'slytherin', 'scarf'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Wendi Riggens-Miller',
    file: '009-scarf-slytherin'
  },
  {
    name: 'Lantern', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'lantern'],
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
    tags: ['luna', 'lovegood', 'spectrespecs', 'books', 'book'],
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
    tags: ['quidditch', 'goggles', 'books', 'book'],
    type: 'supplemental',
    difficulty: 3,
    hasEmbroidery: true,
    designer: 'Michelle Thompson',
    file: '017-quidditch'
  },
  {
    name: 'Rememberall', size: { width: 10, height: 10 },
    tags: ['rememberall', 'books', 'book'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Michelle Thompson',
    file: '018-rememberall'
  },
  {
    name: 'Ripped Book', size: { width: 10, height: 10 },
    tags: ['ripped', 'book', 'books'],
    type: 'supplemental',
    difficulty: 1,
    designer: 'Tereza Kulovaná',
    file: '019-ripped'
  },
  {
    name: 'Rita Skeeter', size: { width: 10, height: 10 },
    tags: ['rita', 'skeeter', 'book', 'books'],
    type: 'supplemental',
    difficulty: 2,
    hasEmbroidery: true,
    designer: 'Daphne Seymour',
    file: '020-rita'
  },
  {
    name: 'Student Hat', size: { width: 10, height: 10 },
    tags: ['student', 'hat', 'book', 'books'],
    type: 'supplemental',
    difficulty: 1,
    designer: 'Wendi Riggens-Miller',
    file: '021-hat'
  },
  {
    name: 'Skelegro', size: { width: 10, height: 10 },
    tags: ['skelegro', 'potion', 'books', 'book'],
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
  },
  {
    name: 'Bottle with Mortar & Pestle', size: { width: 10, height: 10 },
    tags: ['bottle', 'potion', 'mortar', 'pestle', 'book', 'books'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Tereza Kulovaná',
    file: '026-mortar'
  },
  {
    name: 'Deluminator', size: { width: 10, height: 10 },
    tags: ['deluminator', 'books', 'book'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Tereza Kulovaná',
    file: '027-deluminator',
    hasEmbroidery: true
  },
  {
    name: 'Stained Glass Mermaid', size: { width: 3, height: 10 },
    tags: ['mermaid', 'stained', 'glass'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Gretchen Kohlhaas',
    file: '028-mermaid',
    hasEmbroidery: true
  },
  {
    name: 'Ravenclaw Diadem with Box', size: { width: 10, height: 10 },
    tags: ['diadem', 'box', 'books', 'book'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Jessica Lee Blacknall',
    file: '030-diadem'
  },
  {
    name: 'Fleur’s Hat', size: { width: 10, height: 10 },
    tags: ['fleur', 'hat', 'books', 'book', 'butterfly'],
    type: 'supplemental',
    difficulty: 1,
    designer: 'Daphne Seymour',
    file: '031-fleur'
  },
  {
    name: 'Ron’s Broken Wand', size: { width: 10, height: 10 },
    tags: ['ron', 'wand', 'broken', 'books', 'book'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Patty Fresonke',
    file: '032-ron'
  },
  {
    name: 'Round Eyed Monster Book of Monsters', size: { width: 10, height: 10 },
    tags: ['eye', 'monster', 'book', 'books'],
    type: 'supplemental',
    difficulty: 5,
    designer: 'Esther Wheat',
    file: '033-monster-book'
  },
  {
    name: 'Advanced Potion Making', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'cauldron'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Daphne Seymour',
    file: '034-advanced'
  },
  {
    name: 'Dolores Umbridge’s Cat Plate', size: { width: 10, height: 10 },
    tags: ['umbridge', 'cat', 'picture'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Loretta Nardi',
    file: '035-umbridge'
  },
  {
    name: 'Draco as a Ferret & Mad Eye’s Wand', size: { width: 20, height: 10 },
    tags: ['draco', 'mad', 'eye', 'ferret', 'wand'],
    type: 'supplemental',
    difficulty: 5,
    designer: 'Daphne Seymour',
    file: '036-ferret'
  },
  {
    name: 'Bella’s Wand & Books', size: { width: 10, height: 10 },
    tags: ['bellatrix', 'wand', 'books', 'book'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Daphne Seymour',
    file: '037-bella'
  },
  {
    name: 'Raven', size: { width: 10, height: 10 },
    tags: ['raven', 'book', 'books'],
    type: 'supplemental',
    difficulty: 3,
    designer: 'Heidi Hansen',
    file: '038-raven'
  },
  {
    name: 'House Points', size: { width: 10, height: 10 },
    tags: ['house', 'points', 'gryffindor', 'ravenclaw', 'slytherin', 'hufflepuff'],
    type: 'supplemental',
    difficulty: 2,
    designer: 'Tanya Searle',
    file: '039-house-points'
  },
  {
    name: 'Lucius Malfoy’s Death Eater Mask', size: { width: 10, height: 10 },
    tags: ['lucius', 'malfoy', 'mask', 'death', 'eater', 'wand', 'book', 'books'],
    type: 'supplemental',
    difficulty: 5,
    designer: 'Daphne Seymour',
    file: '040-lucius'
  }
];

export { supplementalBlocks as default };
