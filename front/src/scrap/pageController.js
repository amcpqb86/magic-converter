const pageScraper = require('./pageScraper')

async function scrapeAll(browserInstance, deckHeader) {
    let browser;
    try {
        browser = await browserInstance
        return await pageScraper.scraper(browser, deckHeader)
    }
    catch(err) {
        console.log("Could not resolve the browser instance => ", err)
    }
}

module.exports = (browserInstance, deckHeader) => scrapeAll(browserInstance, deckHeader)