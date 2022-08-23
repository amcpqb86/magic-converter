const browserObject = require('./scrap/browser')
const scraperController = require('./scrap/pageController')
const {getCardsFromScryfallAPI} = require("../api/api");

let browserInstance = browserObject.startBrowser()

scraperController(browserInstance)