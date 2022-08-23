const {getQuantityOfCards, getQuantityOfEachCategories} = require("./getQuantities");
const util = require("util")

let buildCategoriesAndCardsObject = (categoriesArray, cardsArray) => {

    const categoriesWithQuantity = getQuantityOfEachCategories(categoriesArray)
    const cardsWithQuantity = getQuantityOfCards(cardsArray)

    let categoriesAndCardsObject = {}
    for (const category of categoriesWithQuantity) {
        let cardsOfCategory = {}
        for (let cardIndex = category.quantity ; cardIndex > 0;) {
            let newCard = cardsWithQuantity.shift()
            cardIndex -= newCard.quantity
            cardsOfCategory[newCard.name.toString()] = newCard.quantity
        }
        categoriesAndCardsObject[category.name] = cardsOfCategory
    }
    return categoriesAndCardsObject
}

module.exports = {
    buildCategoriesAndCardsObject
}