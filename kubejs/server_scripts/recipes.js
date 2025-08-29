//onEvent('recipes', event => {
ServerEvents.recipes(event => {
})
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('marbledsfirstaid:cloth', 1), // arg 1: output
        [
            'ists_harder_early:plant_string',
            'ists_harder_early:plant_string',            // arg 2: the array of inputs
        ])
        //Remove by recipe ID
        [
            'emi:/brewing/minecraft/potion/minecraft/popped_chorus_fruit/apothic_attributes/levitation/apothic_attributes/flying'
            
            

        ].forEach((recipeID) => event.remove({id: recipeID}));
    
        //Remove all recipes an item is related to. For example putting 'minecraft:bonemeal' here would remove the recipe for bone blocks as well.
        [
            'minecraft:potion[potion_contents={potion:"apothic_attributes:flying"}]'
    
        ].forEach((ingredientID) => event.remove({input: ingredientID}));
        
        //Remove by item ID
        [
            'advanced_ae:quantum_helmet',
            'advanced_ae:quantum_chestplate',
            'advanced_ae:quantum_leggings',
            'advanced_ae:quantum_boots',
            'minecraft:potion[potion_contents={potion:"apothic_attributes:flying"}]'
        ].forEach((itemID) => event.remove({output: itemID}));

    
    })
    