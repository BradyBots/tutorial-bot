const { readdirSync } = require('fs');

module.exports = (bot) => {
    const load = dirs => {
        const events = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith(`.js`));
        for (let file of events) {
            const evt = require(`../events/${dirs}/${file}`);
            let eName = file.split(`.`)[0];
            bot.on(eName, evt.bind(null, bot));
            console.log(`Event | ${eName} has loaded.`)
        }
    };
    ["client", "guild"].forEach(x => load(x));
}