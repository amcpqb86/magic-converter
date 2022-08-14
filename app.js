import {Machine} from "./src/get.js";
import puppeteer from "puppeteer/lib/cjs/puppeteer/puppeteer.js";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.moxfield.com/decks/4u0dPSikbUeu5naP1Dp9lg")

    const machine = new Machine(page)
    machine.getFromMoxfield().then()

    await browser.close()
})();