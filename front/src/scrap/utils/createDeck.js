let createDeck = (cards, deckHeader) => {
    let textedDeck = deckHeader ? "Deck" : ""
    for (let card of cards) {
        textedDeck += `\n${card.quantity} ${card.name}`
    }

    return textedDeck
}

module.exports = {
    createDeck
}