let createDeck = (cards) => {
    let textedDeck = "Deck"
    for (let card of cards) {
        textedDeck += `\n${card.quantity} ${card.name}`
    }

    return textedDeck
}

module.exports = {
    createDeck
}