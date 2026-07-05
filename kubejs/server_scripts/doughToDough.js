/*
// Replace inputs
ServerEvents.tags('item', e => {
    e.removeAll('c:foods/dough')
    e.add('c:foods/dough', 'create:dough')
    console.log('Replaced farmersdelight:wheat_dough recipe inputs with create:dough')
});

// Remove recipes with farmersdelight:wheat_dough
ServerEvents.recipes(event => {
    event.remove({ output: 'farmersdelight:wheat_dough' })
    event.remove({ input: 'farmersdelight:wheat_dough' })
    console.log('Removed recipes with farmersdelight:wheat_dough')

});
*/