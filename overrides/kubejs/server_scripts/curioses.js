ServerEvents.tags('item', event => {
  event.add('curios:atlas', 'aa4-atlas:antique_atlas');
  event.add('curios:goggles', 'create:goggles');
  event.add('curios:spyglass', 'minecraft:spyglass');
  event.add('curios:lantern', 'minecraft:lantern');
  event.add('curios:lantern', 'minecraft:soul_lantern');
  event.remove('curios:head', 'create:goggles');
  event.remove('curios:belt', 'minecraft:spyglass');
});