const browserObject = require('./scrap/browser')
const scraperController = require('./scrap/pageController')

let runAll = async (url) => {
    let browserInstance = browserObject.startBrowser()
    return await scraperController(browserInstance, false)
}

runAll().then((r) => {
    console.log(r)
})

module.exports = {
    runAll
}