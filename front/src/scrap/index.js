const browserObject = require('./browser')
const scraperController = require('./pageController')

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