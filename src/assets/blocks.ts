import { Block } from '../util/types';

const blocks: Array<Block> = [
  {
    week: 0, number: 1,
    name: 'Castle corner', size: { width: 10, height: 10 },
    tags: ['castle', 'corner'],
    type: 'castle',
    difficulty: 1
  },
  {
    week: 0, number: 2,
    name: 'Castle crenelation', size: { width: 10, height: 10 },
    tags: ['castle', 'crenelation'],
    type: 'castle',
    difficulty: 1
  },
  {
    week: 0, number: 3,
    name: 'Castle block', size: { width: 10, height: 10 },
    tags: ['castle'],
    type: 'castle',
    difficulty: 1
  },
  {
    week: 1, number: 1,
    name: 'Crystal Ball', size: { width: 10, height: 10 },
    tags: ['books', 'crystal', 'ball'],
    type: 'original',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 1, number: 2,
    name: 'Crystal Ball with optional extra book', size: { width: 10, height: 10 },
    tags: ['books', 'crystal', 'ball'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 1, number: 3,
    name: 'Crystal Ball with alternative base', size: { width: 10, height: 10 },
    tags: ['books', 'crystal', 'ball'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 2, number: 1,
    name: 'Books', size: { width: 10, height: 10 },
    tags: ['books'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 2, number: 2,
    name: 'Books with optional extra books', size: { width: 10, height: 10 },
    tags: ['books'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 3, number: 1,
    name: 'Books with potion bottle', size: { width: 10, height: 10 },
    tags: ['books', 'potion', 'bottle'],
    type: 'original',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 3, number: 2,
    name: 'Books with potion bottle', size: { width: 10, height: 10 },
    tags: ['books', 'potion', 'bottle'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 3, number: 3,
    name: 'Books with Deathly Hallows', size: { width: 10, height: 10 },
    tags: ['books', 'deathly', 'hallows'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 3, number: 4,
    name: 'Books with Dark Mark', size: { width: 10, height: 10 },
    tags: ['books', 'dark', 'mark'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 4, number: 1,
    name: 'Harry’s Glasses', size: { width: 10, height: 10 },
    tags: ['books', 'glasses'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 4, number: 2,
    name: 'Harry’s Glasses', size: { width: 10, height: 10 },
    tags: ['books', 'glasses'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 4, number: 3,
    name: 'Harry’s Glasses', size: { width: 10, height: 10 },
    tags: ['books'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 4, number: 4,
    name: 'Hand of Glory', size: { width: 10, height: 10 },
    tags: ['hand', 'glory'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 5, number: 1,
    name: 'Books', size: { width: 10, height: 10 },
    tags: ['books'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 6, number: 1,
    name: 'Stoppered Vial', size: { width: 10, height: 10 },
    tags: ['books', 'stoppered', 'vial'],
    type: 'original',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 6, number: 2,
    name: 'Stoppered Vial', size: { width: 10, height: 10 },
    tags: ['books', 'stoppered', 'vial'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 6, number: 3,
    name: 'Picture frame', size: { width: 10, height: 10 },
    tags: ['picture', 'frame'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 6, number: 4,
    name: 'Slytherin’s Locket', size: { width: 10, height: 10 },
    tags: ['hand', 'slytherin', 'locket'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 7, number: 1,
    name: 'Time Turner', size: { width: 10, height: 10 },
    tags: ['books', 'time', 'turner'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 7, number: 2,
    name: 'Time Turner', size: { width: 10, height: 10 },
    tags: ['books', 'time', 'turner'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 7, number: 3,
    name: 'Venomous Tentacula', size: { width: 10, height: 10 },
    tags: ['picture', 'venomous', 'tentacula'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 8, number: 1,
    name: 'Books', size: { width: 10, height: 10 },
    tags: ['books'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 9, number: 1,
    name: 'Golden Snitch', size: { width: 10, height: 10 },
    tags: ['books'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 9, number: 2,
    name: 'House tie Hufflepuff', size: { width: 10, height: 10 },
    tags: ['books', 'tie', 'hufflepuff'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 9, number: 3,
    name: 'House tie Ravenclaw', size: { width: 10, height: 10 },
    tags: ['books', 'tie', 'ravenclaw'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 9, number: 4,
    name: 'House tie Griffindor', size: { width: 10, height: 10 },
    tags: ['books', 'tie', 'griffindor'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 9, number: 5,
    name: 'House tie Slytherin', size: { width: 10, height: 10 },
    tags: ['books', 'tie', 'slytherin'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 10, number: 1,
    name: 'Standard Book of Spells (6)', size: { width: 10, height: 10 },
    tags: ['books', 'standard', 'spells'],
    type: 'original',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 10, number: 2,
    name: 'Standard Book of Spells (7)', size: { width: 10, height: 10 },
    tags: ['books', 'standard', 'spells'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 11, number: 1,
    name: 'Hedwig', size: { width: 10, height: 10 },
    tags: ['book', 'owl', 'hedwig'],
    type: 'original',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 11, number: 2,
    name: 'Eagle owl', size: { width: 10, height: 10 },
    tags: ['book', 'eagle', 'owl'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 11, number: 3,
    name: 'Errol', size: { width: 10, height: 10 },
    tags: ['book', 'errol', 'owl'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 11, number: 4,
    name: 'Pigwidgeon', size: { width: 10, height: 10 },
    tags: ['books', 'owl', 'pigwidgeon', 'owl'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 12, number: 1,
    name: 'Basilisk Fang', size: { width: 10, height: 10 },
    tags: ['books', 'basilisk', 'fang'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 12, number: 2,
    name: 'Butterbeer', size: { width: 10, height: 10 },
    tags: ['book', 'butterbeer'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 12, number: 3,
    name: 'Cooking Sherry', size: { width: 10, height: 10 },
    tags: ['book', 'cooking', 'sherry'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 13, number: 1,
    name: 'Monster Book of Monsters', size: { width: 10, height: 10 },
    tags: ['monster', 'book', 'fang'],
    type: 'original',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 13, number: 2,
    name: 'Quirrell’s Turban', size: { width: 10, height: 10 },
    tags: ['books', 'quirrell', 'turban'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 14, number: 1,
    name: 'Magic Wand', size: { width: 10, height: 10 },
    tags: ['books', 'magic', 'wand'],
    type: 'original',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 14, number: 2,
    name: 'Harry’s Wand', size: { width: 10, height: 10 },
    tags: ['books', 'harry', 'wand'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 14, number: 3,
    name: 'Elder Wand', size: { width: 10, height: 10 },
    tags: ['books', 'elder', 'wand'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 14, number: 4,
    name: 'Voldemort’s Wand', size: { width: 10, height: 10 },
    tags: ['books', 'voldemort', 'wand'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 15, number: 1,
    name: 'Tom Riddle’s Destroyed Diary', size: { width: 10, height: 10 },
    tags: ['books', 'tom', 'riddle', 'diary'],
    type: 'original',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 15, number: 2,
    name: 'Tom Riddle’s Intact Diary', size: { width: 10, height: 10 },
    tags: ['books', 'tom', 'riddle', 'diary'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 15, number: 3,
    name: 'Books & Potion', size: { width: 10, height: 10 },
    tags: ['books', 'potion'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 15, number: 4,
    name: 'Lockhart’s Peacock Feather Quill & Ink', size: { width: 10, height: 10 },
    tags: ['books', 'lockhart', 'peacock', 'feather', 'quill', 'ink'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 16, number: 1,
    name: 'Book with Broomstick', size: { width: 10, height: 10 },
    tags: ['books', 'broomstick'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 16, number: 2,
    name: 'Books & Pigmy Puff ', size: { width: 10, height: 10 },
    tags: ['books', 'pigmy', 'puff'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 16, number: 3,
    name: 'Simple Book (no broomstick)', size: { width: 10, height: 10 },
    tags: ['books'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 17, number: 1,
    name: 'Weasley’s Wizard Wheezes Bag', size: { width: 10, height: 10 },
    tags: ['books', 'weasley', 'wizard', 'wheezes', 'bag'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 17, number: 2,
    name: 'Death Eater Mask', size: { width: 10, height: 10 },
    tags: ['death', 'eater', 'mask'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 18, number: 1,
    name: 'Books', size: { width: 10, height: 10 },
    tags: ['books'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 18, number: 2,
    name: 'Books with extra books', size: { width: 10, height: 10 },
    tags: ['books', 'extra'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 18, number: 3,
    name: 'Potion book', size: { width: 10, height: 10 },
    tags: ['potion', 'book'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 18, number: 4,
    name: 'Potion book with extra books', size: { width: 10, height: 10 },
    tags: ['potion', 'books', 'extra'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },

  {
    week: 19, number: 1,
    name: 'Hogwarts crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'hogwarts'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 2,
    name: 'Hogwarts crest (simple)', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'hogwarts'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 3,
    name: 'Slytherin crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'slytherin'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 4,
    name: 'Slytherin crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'slytherin'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 5,
    name: 'Slytherin crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'slytherin'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 6,
    name: 'Ravenclaw crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'ravenclaw'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 7,
    name: 'Ravenclaw crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'ravenclaw'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 8,
    name: 'Ravenclaw crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'ravenclaw'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 9,
    name: 'Hufflepuff crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'hufflepuff'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 10,
    name: 'Hufflepuff crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'hufflepuff'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 11,
    name: 'Hufflepuff crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'hufflepuff'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 12,
    name: 'Gryffindor crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'griffindor'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 13,
    name: 'Gryffindor crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'griffindor'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 14,
    name: 'Gryffindor crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'griffindor'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 15,
    name: 'Beauxbatons crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'beauxbatons'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 16,
    name: 'Beauxbatons crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'beauxbatons'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 17,
    name: 'Beauxbatons crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'beauxbatons'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 18,
    name: 'Durmstrang crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'durmstrang'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 19,
    name: 'Durmstrang crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'durmstrang'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 20,
    name: 'Durmstrang crest', size: { width: 10, height: 10 },
    tags: ['books', 'crest', 'durmstrang'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 20, number: 1,
    name: 'Candle', size: { width: 10, height: 10 },
    tags: ['books', 'candle'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 20, number: 2,
    name: 'Bluebell Flame in a Jam Jar', size: { width: 10, height: 10 },
    tags: ['books', 'bluebell', 'flame', 'jam', 'jar'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 21, number: 1,
    name: 'Sorting Hat', size: { width: 20, height: 10 },
    tags: ['books', 'sorting', 'hat'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 21, number: 2,
    name: 'Sorting Hat with Crookshanks', size: { width: 20, height: 10 },
    tags: ['books', 'sorting', 'hat', 'cat', 'crookshanks'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 21, number: 3,
    name: 'Nagini', size: { width: 20, height: 10 },
    tags: ['books', 'nagini'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 23, number: 1,
    name: 'Quill', size: { width: 10, height: 10 },
    tags: ['books', 'quill'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 23, number: 2,
    name: 'Umbridge’s Quill', size: { width: 10, height: 10 },
    tags: ['books', 'umbridge', 'quill'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 23, number: 3,
    name: 'Quick Quotes Quill', size: { width: 10, height: 10 },
    tags: ['books', 'quick', 'quotes', 'quill'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 24, number: 1,
    name: 'Books', size: { width: 10, height: 10 },
    tags: ['books'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 25, number: 1,
    name: 'Open book', size: { width: 10, height: 10 },
    tags: ['books', 'open'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 25, number: 2,
    name: 'Quaffle', size: { width: 10, height: 10 },
    tags: ['book', 'quaffle', 'quidditch'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 25, number: 3,
    name: 'Dragon eggs', size: { width: 10, height: 10 },
    tags: ['dragon', 'egg'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 26, number: 1,
    name: 'Books', size: { width: 10, height: 10 },
    tags: ['books'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 26, number: 2,
    name: 'Acromantula', size: { width: 10, height: 10 },
    tags: ['book', 'acromantula'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 27, number: 1,
    name: 'Teacup', size: { width: 10, height: 10 },
    tags: ['books', 'teacup'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 27, number: 2,
    name: 'Teacup', size: { width: 10, height: 10 },
    tags: ['books', 'teacup'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 27, number: 3,
    name: 'Half-Moon Spectacles', size: { width: 10, height: 10 },
    tags: ['books', 'half', 'moon', 'spectacles', 'glasses'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 27, number: 4,
    name: 'Chocolate Frog Box', size: { width: 10, height: 10 },
    tags: ['books', 'chocolate', 'frog', 'box'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 1,
    name: 'Trevor', size: { width: 10, height: 10 },
    tags: ['books', 'trevor', 'toad'],
    type: 'original',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 2,
    name: 'Trevor', size: { width: 10, height: 10 },
    tags: ['books', 'trevor', 'toad'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 3,
    name: 'Unrolled Parchment Scroll', size: { width: 10, height: 10 },
    tags: ['books', 'parchment', 'scroll'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 4,
    name: 'Unicorn Head Book End', size: { width: 10, height: 10 },
    tags: ['books', 'unicorn', 'head'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 5,
    name: 'Baby Norbert', size: { width: 10, height: 10 },
    tags: ['books', 'norbert', 'dragon'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 6,
    name: 'Bats', size: { width: 10, height: 10 },
    tags: ['books', 'bats'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 7,
    name: 'Aberforth’s Eye in Sirius’ Mirror', size: { width: 10, height: 10 },
    tags: ['books', 'aberforth', 'eye', 'mirror'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 29, number: 1,
    name: 'Cauldron', size: { width: 10, height: 10 },
    tags: ['cauldron'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 29, number: 2,
    name: 'Pumpkin', size: { width: 10, height: 10 },
    tags: ['pumpkin'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 30, number: 1,
    name: 'Bertie Bott’s Every Flavour Beans', size: { width: 10, height: 10 },
    tags: ['books', 'bertie', 'bott', 'every', 'flavor', 'beans'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 30, number: 2,
    name: 'Potion Bottles', size: { width: 10, height: 10 },
    tags: ['books', 'potion', 'bottles'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
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
  }
];

export { blocks as default };
