export class Card {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity
    }
    display() {
        console.log(`Carte : ${this.name} (${this.quantity})`)
    }
}