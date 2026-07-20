ServerEvents.recipes(event => {
    // Crushing: ORE -> POWDER
    event.recipes.create.crushing(['tungsten_mod:tungsten_powder', CreateItem.of('tungsten_mod:tungsten_powder', 0.5)], 'tungsten_mod:tungsten_ore').processingTime(200)

    // Milling: ORE -> POWDER
    event.recipes.create.milling(['tungsten_mod:tungsten_powder', CreateItem.of('tungsten_mod:tungsten_powder', 0.5)], 'tungsten_mod:tungsten_ore')

    // Cooking: SLOP
    event.recipes.farmersdelight.cooking(
        'meals',
        ['tungsten_mod:tungsten_powder', Item.of('brown_mushroom')],
        'tungsten_mod:tungsten_slop',
        10,
        20,
        'minecraft:bowl'
    )


})
