ServerEvents.recipes(event => {
    event.replaceInput(
  { input: 'minecraft:egg' },
  'minecraft:egg',
  Ingredient.of('#c:eggs')
)
})