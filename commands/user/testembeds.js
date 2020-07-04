const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `testembeds`,
        aliases: [`testembeds`, `testembeds`],
    },
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
            .setColor(`RED`)
            .setTitle(`Testing out Embed Mesasges`)
            .setURL(`https://google.com`)
            .setAuthor(`Testing out Embed Messages`, bot.user.displayAvatarURL())
            .setDescription(`This a Brady Bots Development Tutorial on how to make and use embeded messages using discord.js v12 and node v12.`)
            .addFields(
                { name: `Test 1`, value: `Brady#1234` },
                { name: `Test 2`, value: `\u200B` },
                { name: `Test 3`, value: `Brady Bots Development`, inline: true},
                { name: `Test 4`, value: `Oblivion Bot Is Awesome!`, inline: true},
            )
            .addField(`This is a test for a single add Field`, `Testing 1 2 3`, false)
            .setImage(bot.user.displayAvatarURL())
            .setTimestamp()
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(`Brady Bots Development 2020`, bot.user.displayAvatarURL())

        message.channel.send(embed);
    }
}