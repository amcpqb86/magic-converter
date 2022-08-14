import {Card} from "./Card.js";


export class Machine {

    constructor(page) {
        this.page = page
    }

    async getFromMoxfield () {
        const cards = []
        /*const dropZone = await this.page.$$('.deckview-columns > .deckview-dropzone.deckview-dropzone-avoidbreak')
        for(let group of dropZone) {
            console.log(await group.$$('table '))
        }*/

    }

}