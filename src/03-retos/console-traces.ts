const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
    await delay(time);
    console.log(message);
};

const triggers = [
    async () => await showMessage([200, "third"]),
    async () => await showMessage([100, "second"]),
];

const run = async (triggers: Function[]) => {
    triggers.forEach(async (t, i) => {
        await delay(i === 0 ? 0 : 150);
        t();
    })
    await delay(500);
    console.log("first");
};

run(triggers);