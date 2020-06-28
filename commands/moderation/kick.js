const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `kick`,
        aliases: [`kick`]
    },
    run: async (bot, message, args) => {
        message.delete()
        let kuser = message.mentions.members.first()
        if(!kuser) return console.log(`no user stated to be kicked.`)
        let kreason = args.slice(1).join(" ");
        if(!kreason) kreason = `No reason specified.`;
        kuser.kick(`Staff: ${message.author.tag} || Reason: ${kreason}`)
        message.reply(`${kuser} has been kicked by ${message.author.tag} for ${kreason}.`)
    }
}