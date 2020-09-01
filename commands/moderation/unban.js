const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `unban`,
        aliases: [`unban`],
    },
    run: async (bot, message, args) => {
        // Deleting the command message
        message.delete()
        // Checking if they are staff
        if(!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`You do not have permission to use this command.`)
        let serverm = message.guild.members;
        // Finding the ID mentioned in the arugument
        if(isNaN(args[0])) return message.reply(`Please state a valid USER id.`)
        let bannedMember = bot.users.fetch(args[0]);
        if(!bannedMember) return message.reply(`There was no user to Unban.`)
        // Unbanning the person via ID
        serverm.unban(bannedMember);
        // Wrapping it up with a bow
        await message.reply(`**${bannedMember.id}** has been unbanned from the discord by ${message.author.tag}.`)
    }
}