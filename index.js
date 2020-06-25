const { Client, Discord, MessageEmbed } = require(`discord.js`);
const bot = new Client();
const { token } = require(`./botconfig.json`);
const { prefix, brady, version } = require(`./config.json`);
// ----------------------------------------------------------------------------------------
bot.on(`ready`, () => {
    console.log(`${bot.user.username}#${bot.user.discriminator} is online!`)
})
// ----------------------------------------------------------------------------------------
bot.on(`message`, async message => {
    if(message.author.bot || message.channel.type === 'dm'){
        return
    }
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Ping Command
    if(command === "ping") {
        message.delete()
        await message.channel.send(`Pinging`).then(m => {
            m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms.`)
        })
    }

    // Information Command
    if(command === "info") {
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

    // Who Is Command
    if(command === "whois") {
        message.delete()
        let user; 
        let user2; 
        if(message.mentions.users.first()){
            user = message.mentions.users.first();
            user2 = message.mentions.members.first();
        } else {
            user = message.author; 
            user2 = message.member; 
        }

        let uavatar = user.displayAvatarURL();
        let ucreatedAt = user.createdAt.toLocaleDateString();
        let ujoinedAt = user2.joinedAt.toLocaleDateString();
        let uid = user.id; 
        let upresence = user.presence.status;
        if(upresence === "dnd"){
            upresence = `Do Not Disturb`
        }
        if(upresence === "idle"){
            upresence = `IDLE`
        }
        if(upresence === "online"){
            upresence = `Online`
        }
        if(upresence === "streaming"){
            upresence = `Live Streaming`
        }
        let upremium = user2.premiumSince;
        if(upremium === null){
            upremium = `User is not a server booster.`
        }
        let whoisembed = new MessageEmbed()
        .setAuthor(`Whois`, uavatar)
        .setColor(`RANDOM`)
        .setFooter(message.guild.name, uavatar)
        .setTimestamp()
        .setThumbnail(uavatar)
        .setDescription(`Whois ${user || user2} requested by ${message.author}`)
        .addField(`User Account Creation Date:`, ucreatedAt, true)
        .addField(`User Joined Discord Date:`, ujoinedAt, true)
        .addField(`User ID:`, uid, true)
        .addField(`User Status:`, upresence, true)
        .addField(`Server Booster Status:`, upremium, true)
        message.channel.send(whoisembed).then(m => (m.delete({timeout: 30000})));
    }

    // Clear Command
    if(command === "clear") {
        message.delete()
        if(!message.member.hasPermission(`KICK_MEMBERS`)) return message.reply(`You do not have permission to use this command.`).then(m => (m.delete({timeout: 10000})));
        let clearamount = args[0];
        if(isNaN(clearamount)) return message.reply(`Please do a number value to clear.`).then(m => (m.delete({timeout: 10000})));
        if(clearamount >= 100) clearamount = 99;
        if(clearamount <= 0) return message.reply(`Please choose a number greater than **0** and less than **1**`)
        message.channel.send(`⚠️Sanitizing ... Please Wait Before Typing! ⚠️`).then(msg => msg.delete({timeout: 2000}));
        setTimeout(async () => {
            await message.channel.bulkDelete(clearamount);
        }, 1000)
    }
})
// ----------------------------------------------------------------------------------------
bot.login(token);