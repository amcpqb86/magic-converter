let getQuantityOfCards = (cardsArray) => {
    let cardsWithQuantity = []

    for (const rowName of cardsArray) {
        if (Number.isInteger(parseInt(rowName[1], 10))) {
            cardsWithQuantity.push({
                "name": rowName.slice(2, rowName.length).toString(),
                "quantity": parseInt(rowName.slice(0, 2), 10)
            })
        }
        // quantité <= 9
        else {
            cardsWithQuantity.push({
                "name": rowName.slice(1, rowName.length).toString(),
                "quantity": parseInt(rowName.slice(0, 1), 10)
            })
        }
    }
    return cardsWithQuantity
}

let getQuantityOfEachCategories = (categoriesArray) => {
    let categoriesWithQuantity = []
    let regExp = /\(([^)]+)\)/

    for (let category of categoriesArray) {
        let categoryName = category.split(" ")[1]
        let quantity = parseInt(regExp.exec(category)[1])
        categoriesWithQuantity.push({
            "name": categoryName,
            "quantity": quantity
        })
    }
    return categoriesWithQuantity
}



module.exports = {
    getQuantityOfEachCategories,
    getQuantityOfCards
}