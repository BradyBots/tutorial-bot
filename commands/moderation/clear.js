const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `clear`,
        aliases: [`purge`, `clear`]
    },
    run: async (bot, message, args) => {
        message.delete()
        if(!message.member.hasPermission(`KICK_MEMBERS`)) return message.reply(`You do not have permission to use this command.`).then(m => (m.delete({timeout: 10000})));
        let clearamount = args[0];
        if(isNaN(clearamount)) return message.reply(`Please do a number value to clear.`).then(m => (m.delete({timeout: 10000})));
        if(clearamount >= 100) clearamount = 99;
        if(clearamount <= 0) return message.reply(`Please choose a number greater than **0** and less than **1**`)
        message.channel.send(`⚠ Clearing Messages.. Please Wait! ⚠️`).then(msg => msg.delete({timeout: 2000}));
        setTimeout(async () => {
            await message.channel.bulkDelete(clearamount);
        }, 1000)
    }
}