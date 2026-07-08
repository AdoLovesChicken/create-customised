ServerEvents.recipes(event => {
    /* Removing Recipes */
    event.remove({  id: 'vanillabackport:cake'  }),
    event.remove({  id: 'vanillabackport:pumpkin_pie'  }),
    event.remove({  id: 'farmersdelight:cake_from_milk_bottle'  })

    /* Modifying Recipes */
    event.replaceInput(
        { input: 'minecraft:milk_bucket' }, // Arg 1: the filter
        'minecraft:milk_bucket',            // Arg 2: the item to replace
        '#c:foods/milk'         // Arg 3: the item to replace it with
    )
    
    /* Adding Recipes */
    event.add('#c:foods/milk', 'minecraft:milk_bucket')
    event.add('#c:foods/milk', 'farmersdelight_milk_bottle')
})