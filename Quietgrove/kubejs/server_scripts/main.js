// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')
// Listen to item tag event
ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('#c:strings', 'ists_harder_early:plant_string')})