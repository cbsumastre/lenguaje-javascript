const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
    await delay(time);
    console.log(message);
};

const triggers = [
    async () => await showMessage([200, "third"]),
    async () => await showMessage([100, "second"]),
];

const run = async (triggers: Function[]) => {
    // triggers.forEach(async (trigger)=>await trigger()) <--No garantia que se ejecute en el orden esperado
    for (const trigger of triggers) {
        await trigger();
    }
    console.log("first");
};

run(triggers);