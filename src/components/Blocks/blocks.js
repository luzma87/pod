const blocks = {
  weeks: [
    {
      name: 'Crystal Ball', week: 1, size: { width: 10, height: 10 },
      tags: ['books', 'crystal ball'],
      variations: [
        { number: 0, name: 'original' },
        { number: 1, name: 'with optional extra book' },
        { number: 2, name: 'with alternative crystal ball base' },
      ],
    },
    {
      name: 'Books', week: 2, size: { width: 10, height: 10 },
      tags: ['books'],
      variations: [
        { number: 0, name: 'original' },
        { number: 1, name: 'with optional extra books' },
      ],
    },
    {
      name: 'Books', week: 3, size: { width: 10, height: 10 },
      tags: ['books'],
      variations: [
        { number: 0, name: 'original', tags: ['potion bottle'] },
        { number: 1, name: 'with optional extra books', tags: ['deathly hallows'] },
        { number: 2, name: 'with optional extra books', tags: ['dark mark'] },
      ],
    },
  ],
};

export { blocks as default };
