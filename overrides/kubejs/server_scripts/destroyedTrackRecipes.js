ServerEvents.recipes(event => {
  const input = 'create:track';

  // Track 1: Mechanical Press
  event.custom({
    type: 'create:pressing',
    ingredients: [{ item: input }],
    results: [{ id: 'create_easy_structures:destroyedtrack_1', count: 1 }]
  }).id('create_customised:destroyedtrack_1_from_pressing');

  // Track 2: Crushing Wheel
  event.custom({
    type: 'create:crushing',
    ingredients: [{ item: input }],
    results: [{ id: 'create_easy_structures:destroyedtrack_3', count: 1 }]
  }).id('create_customised:destroyedtrack_2_from_crushing');

  // Track 3: Enchantment Industry Mechanical Grinder
  event.custom({
    type: 'create_enchantment_industry:grinding',
    ingredients: [{ item: input }],
    results: [{ id: 'create_easy_structures:destroyedtrack_2', count: 1 }]
  }).id('create_customised:destroyedtrack_3_from_grinding');
});
