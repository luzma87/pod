import { Block } from '../util/types';

const weeklyBlocks: Array<Block> = [
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
    tags: ['books', 'book', 'crystal', 'ball'],
    type: 'original',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 1, number: 2,
    name: 'Crystal Ball with optional extra book', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crystal', 'ball'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 1, number: 3,
    name: 'Crystal Ball with alternative base', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crystal', 'ball'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 2, number: 1,
    name: 'Books', size: { width: 10, height: 10 },
    tags: ['books', 'book'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 2, number: 2,
    name: 'Books with optional extra books', size: { width: 10, height: 10 },
    tags: ['books', 'book'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 3, number: 1,
    name: 'Books with potion bottle', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'potion', 'bottle'],
    type: 'original',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 3, number: 2,
    name: 'Books with potion bottle', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'potion', 'bottle'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 3, number: 3,
    name: 'Books with Deathly Hallows', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'deathly', 'hallows'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 3, number: 4,
    name: 'Books with Dark Mark', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'dark', 'mark'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 4, number: 1,
    name: 'Harry’s Glasses', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'glasses'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 4, number: 2,
    name: 'Harry’s Glasses', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'glasses'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 4, number: 3,
    name: 'Harry’s Glasses', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'glasses'],
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
    tags: ['books', 'book'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 6, number: 1,
    name: 'Stoppered Vial', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'stoppered', 'vial'],
    type: 'original',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 6, number: 2,
    name: 'Stoppered Vial', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'stoppered', 'vial'],
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
    tags: ['books', 'book', 'time', 'turner'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 7, number: 2,
    name: 'Time Turner', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'time', 'turner'],
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
    tags: ['books', 'book'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 9, number: 1,
    name: 'Golden Snitch', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'golden', 'snitch'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 9, number: 2,
    name: 'House tie Hufflepuff', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'tie', 'hufflepuff'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 9, number: 3,
    name: 'House tie Ravenclaw', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'tie', 'ravenclaw'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 9, number: 4,
    name: 'House tie Gryffindor', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'tie', 'gryffindor'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 9, number: 5,
    name: 'House tie Slytherin', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'tie', 'slytherin'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 10, number: 1,
    name: 'Standard Book of Spells (6)', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'standard', 'spells'],
    type: 'original',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 10, number: 2,
    name: 'Standard Book of Spells (7)', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'standard', 'spells'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 11, number: 1,
    name: 'Hedwig', size: { width: 10, height: 10 },
    tags: ['book', 'books', 'owl', 'hedwig'],
    type: 'original',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 11, number: 2,
    name: 'Eagle owl', size: { width: 10, height: 10 },
    tags: ['book', 'books', 'eagle', 'owl'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 11, number: 3,
    name: 'Errol', size: { width: 10, height: 10 },
    tags: ['book', 'books', 'errol', 'owl'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 11, number: 4,
    name: 'Pigwidgeon', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'owl', 'pigwidgeon', 'owl'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 12, number: 1,
    name: 'Basilisk Fang', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'basilisk', 'fang'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 12, number: 2,
    name: 'Butterbeer', size: { width: 10, height: 10 },
    tags: ['book', 'books', 'butterbeer'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 12, number: 3,
    name: 'Cooking Sherry', size: { width: 10, height: 10 },
    tags: ['book', 'books', 'cooking', 'sherry'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 13, number: 1,
    name: 'Monster Book of Monsters', size: { width: 10, height: 10 },
    tags: ['monster', 'book', 'books', 'fang'],
    type: 'original',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 13, number: 2,
    name: 'Quirrell’s Turban', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'quirrell', 'turban'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 14, number: 1,
    name: 'Magic Wand', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'magic', 'wand'],
    type: 'original',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 14, number: 2,
    name: 'Harry’s Wand', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'harry', 'wand'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 14, number: 3,
    name: 'Elder Wand', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'elder', 'wand'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 14, number: 4,
    name: 'Voldemort’s Wand', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'voldemort', 'wand'],
    type: 'variation',
    difficulty: 2,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 15, number: 1,
    name: 'Tom Riddle’s Destroyed Diary', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'tom', 'riddle', 'diary'],
    type: 'original',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 15, number: 2,
    name: 'Tom Riddle’s Intact Diary', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'tom', 'riddle', 'diary'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 15, number: 3,
    name: 'Books & Potion', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'potion'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 15, number: 4,
    name: 'Lockhart’s Peacock Feather Quill & Ink', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'lockhart', 'peacock', 'feather', 'quill', 'ink'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 16, number: 1,
    name: 'Book with Broomstick', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'broomstick'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 16, number: 2,
    name: 'Books & Pigmy Puff ', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'pigmy', 'puff'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 16, number: 3,
    name: 'Simple Book (no broomstick)', size: { width: 10, height: 10 },
    tags: ['books', 'book'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 17, number: 1,
    name: 'Weasley’s Wizard Wheezes Bag', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'weasley', 'wizard', 'wheezes', 'bag'],
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
    tags: ['books', 'book'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 18, number: 2,
    name: 'Books with extra books', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'extra'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 18, number: 3,
    name: 'Potion book', size: { width: 10, height: 10 },
    tags: ['potion', 'book', 'books'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 18, number: 4,
    name: 'Potion book with extra books', size: { width: 10, height: 10 },
    tags: ['potion', 'books', 'book', 'extra'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },

  {
    week: 19, number: 1,
    name: 'Hogwarts crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'hogwarts'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 2,
    name: 'Hogwarts crest (simple)', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'hogwarts'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 3,
    name: 'Slytherin crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'slytherin'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 4,
    name: 'Slytherin crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'slytherin'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 5,
    name: 'Slytherin crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'slytherin'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 6,
    name: 'Ravenclaw crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'ravenclaw'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 7,
    name: 'Ravenclaw crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'ravenclaw'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 8,
    name: 'Ravenclaw crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'ravenclaw'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 9,
    name: 'Hufflepuff crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'hufflepuff'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 10,
    name: 'Hufflepuff crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'hufflepuff'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 11,
    name: 'Hufflepuff crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'hufflepuff'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 12,
    name: 'Gryffindor crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'gryffindor'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 13,
    name: 'Gryffindor crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'gryffindor'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 14,
    name: 'Gryffindor crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'gryffindor'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 15,
    name: 'Beauxbatons crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'beauxbatons'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 16,
    name: 'Beauxbatons crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'beauxbatons'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 17,
    name: 'Beauxbatons crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'beauxbatons'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 18,
    name: 'Durmstrang crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'durmstrang'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 19,
    name: 'Durmstrang crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'durmstrang'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 19, number: 20,
    name: 'Durmstrang crest', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'crest', 'durmstrang'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 20, number: 1,
    name: 'Candle', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'candle'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 20, number: 2,
    name: 'Bluebell Flame in a Jam Jar', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'bluebell', 'flame', 'jam', 'jar'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 21, number: 1,
    name: 'Sorting Hat', size: { width: 20, height: 10 },
    tags: ['books', 'book', 'sorting', 'hat'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 21, number: 2,
    name: 'Sorting Hat with Crookshanks', size: { width: 20, height: 10 },
    tags: ['books', 'book', 'sorting', 'hat', 'cat', 'crookshanks'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 21, number: 3,
    name: 'Nagini', size: { width: 20, height: 10 },
    tags: ['books', 'book', 'nagini'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 23, number: 1,
    name: 'Quill', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'quill'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 23, number: 2,
    name: 'Umbridge’s Quill', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'umbridge', 'quill'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 23, number: 3,
    name: 'Quick Quotes Quill', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'quick', 'quotes', 'quill'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 24, number: 1,
    name: 'Books', size: { width: 10, height: 10 },
    tags: ['books', 'book'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 25, number: 1,
    name: 'Open book', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'open'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 25, number: 2,
    name: 'Quaffle', size: { width: 10, height: 10 },
    tags: ['book', 'books', 'quaffle', 'quidditch'],
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
    tags: ['books', 'book'],
    type: 'original',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 26, number: 2,
    name: 'Acromantula', size: { width: 10, height: 10 },
    tags: ['book', 'books', 'acromantula'],
    type: 'variation',
    difficulty: 1,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 27, number: 1,
    name: 'Teacup', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'teacup'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 27, number: 2,
    name: 'Teacup', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'teacup'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 27, number: 3,
    name: 'Half-Moon Spectacles', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'half-moon', 'spectacles', 'glasses'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 27, number: 4,
    name: 'Chocolate Frog Box', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'chocolate', 'frog', 'box'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 1,
    name: 'Trevor', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'trevor', 'toad', 'neville'],
    type: 'original',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 2,
    name: 'Trevor', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'trevor', 'toad', 'neville'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 3,
    name: 'Unrolled Parchment Scroll', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'parchment', 'scroll'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 4,
    name: 'Unicorn Head Book End', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'unicorn', 'head'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 5,
    name: 'Baby Norbert', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'norbert', 'dragon'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 6,
    name: 'Bats', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'bats'],
    type: 'variation',
    difficulty: 4,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 28, number: 7,
    name: 'Aberforth’s Eye in Sirius’ Mirror', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'aberforth', 'eye', 'mirror'],
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
    tags: ['books', 'book', 'bertie', 'bott', 'every', 'flavor', 'beans'],
    type: 'original',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  },
  {
    week: 30, number: 2,
    name: 'Potion Bottles', size: { width: 10, height: 10 },
    tags: ['books', 'book', 'potion', 'bottles', 'bottle'],
    type: 'variation',
    difficulty: 3,
    designer: 'Jennifer Ofenstein'
  }
];

export { weeklyBlocks as default };
