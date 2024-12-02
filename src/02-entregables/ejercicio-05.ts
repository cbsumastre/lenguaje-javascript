console.log("************** DELIVERABLE 05 *********************");
class SlotMachine {

    #coinCounter: number;
    #roulettes: boolean[];

    constructor() {
        this.#init();
    }

    #init() {
        this.#coinCounter = 0;
        this.#roulettes = [false, false, false];
    }

    #randomBoolean() {
        return Math.random() >= 0.5;
    }

    play() {
        this.#coinCounter++;

        for (let i = 0; i < this.#roulettes.length; i++) {
            this.#roulettes[i] = this.#randomBoolean();
        }

        const won = !this.#roulettes.includes(false);
        if (won) {
            console.log(`Congratulations!!!. You won ${this.#coinCounter} coins!!`);
            this.#init();
        }
        else {
            console.log("Good luck next time!!");
        }
    }
}

const machine1 = new SlotMachine();
for (let i = 0; i < 50; i++) {
    machine1.play();
}
