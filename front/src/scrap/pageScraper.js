const {buildCategoriesAndCardsObject} = require("./utils/buildObjects")
const {getQuantityOfCards} = require("./utils/getQuantities")
const {createDeck} = require("./utils/createDeck")


const scraperObject = {
    url: "https://www.moxfield.com/decks/4u0dPSikbUeu5naP1Dp9lg",
    async scraper (browser, deckHeader) {
        let page = await browser.newPage()
        console.log(`Navigating to ${this.url} ...`)
        await page.goto(this.url)

        await page.waitForSelector('.deckview-columns')
        console.log("Page chargée !")

        let categories = await page.$$eval('.deckview-columns .deckview-dropzone .table-sm > thead > tr > th > a', (categories) => {
            return categories.map((el) => el.textContent)
        })

        let cards = await page.$$eval('.deckview-columns .deckview-dropzone .table-sm > tbody > .table-deck-row', (cards) => {
            return cards.map((el) => el.textContent)
        })

         return createDeck(getQuantityOfCards(cards), deckHeader)
    }
}


module.exports = scraperObject