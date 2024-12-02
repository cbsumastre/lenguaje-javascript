/**
 El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
 Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. 
El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!";
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".
 */

class SlotMachine {

    #coinCounter;
    #roulettes;

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

