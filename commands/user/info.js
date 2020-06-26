const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `info`,
        aliases: [`information`, `info`]
    },
    run: async (bot, message, args) => {
        message.delete()
        let info1 = `v1.0.0`
        let info2 = `Node v12`
        let info3 = `Discord.js v12`
        let info4 = `Brady#1234`

        let embed = new MessageEmbed()
            .setTitle(`Bot Information`)
            .setColor(`DARK_RED`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name)
            .setTimestamp()
            .addField(`Version:`, info1, true)
            .addField(`Node Version:`, info2, true)
            .addField(`Coded in:`, info3, true)
            .setDescription(`Bot Developed by: ${info4}`)
        message.channel.send(embed).then(m => (m.delete({timeout: 10000})));
    }
}