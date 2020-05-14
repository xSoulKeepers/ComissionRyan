const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
let warns = JSON.parse(fs.readFileSync("./infractions.json", "utf8"));
const prefix = ',';
var suggestPPL = [];
const PingRoles = ["Video Ping","Poll Ping","AnnouncmentPing","News Ping","Game Pings","Giveaway Ping","Server Ping"]
const pollppl = new Set();
const test = new Set;
const Announce1 = new Set;
const Announce2 = new Set;
const Announce3 = new Set;
const Announce4 = new Set;
const Announce5 = new Set;
const Announceppl = new Set();
var GameUpdate = 'game is still under development! '
var funfact = ['Super effective.', 'Kinda weak','Eh? Not Really..']
const togglelist = new Discord.RichEmbed()
    .setColor(`#44bcfd`)
    .setTitle('A list of pings u can toggle')
    .addField(`General: `,'**Video\nPoll\nAnnouncment\nNews\nGame\nGiveaway\nServer**')
const CmdsEmbed = new Discord.RichEmbed()

	.setColor('#fdce46')
	.setTitle('ThinkBot Commands')
	.setDescription('``A list of commands ThinkBot holds.``')
    .setThumbnail('https://cdn.discordapp.com/attachments/679770704882827273/679824265293594740/TW_LOGO_TEST.png')
    .addField('⚒️ Moderation ⚒️', 'Moderator commands.')
    .addField(',poll', 'creates and sends a poll.')
    .addField(',msg', 'creates a message which the bot will playback')
    .addField(',slowmode', 'sets the slowmode of the given channel.')
	.addField(',warn', 'warn members')
    .addField(',ban', 'ban members')
    .addField(',purge', 'purges the chat howerver much messages')
    .addField('funfactadd', 'coming soon!')
    .addField('🎲 Fun 🎲', 'Commands for fun!')
    .addField(',uptime', 'check the uptime of the bot.')
    .addField(',ping', 'Pong! Check your ping!')
    .addField(',funfact', 'random fact')
    .addField(',creators', 'the creators of the game')
    .addField(',poll (Coming soon)', 'Make a poll!')
	.setTimestamp()
	.setFooter('This bot was created by IB1J');
const VoteEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Vote')
    .setFooter('This bot was created by IB1J');
const usedCommandRecently = new Set();
client.on('ready', ()=>{
    console.log('Bot is online')
    client.user.setStatus('online')
    let statuses = [
        `${prefix}cmds | Watching chat.`,
        `${prefix}cmds | Thinking hard.`,
        `${prefix}cmds | Improving.`,
        `${prefix}cmds | Try not to get in trouble.`,
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, {type: "WATCHING"})
    }, 10000)
})
/*function CustomEmbed(Text,Channel){
    var CustomE = new Discord.RichEmbed()
    .setDescription(Text)
}*/
client.on('guildMemberAdd', guildMemberAdd => {
    let WantedRole = guildMemberAdd.guild.roles.find("name", "👾 ThinkCommunity")
    guildMemberAdd.addRole(WantedRole)
    //client.channels.get('698293952104890468').send(`${guildMemberAdd.username + " - ("+guildMemberAdd.id+")"}`` has joined the server. `)
    console.log("Guild Member joined");
  });
  var heading = null 
client.on('message', (message)=>{
    if(message.channel.id == '699392105029697667'){
        message.react('👎');
        message.react('👍');
    }
    if(message.content.toLowerCase() == "thinkbot is such a cool bot"){
        message.react('👀')
        message.reactions.get(":tada:").users.array()
    }
    const args = message.content.split(" ").slice(1);
    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
  if (message.content.startsWith(prefix + "eval")) {
    if(message.author.id !== '435191724734939140') return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
    if(Announceppl.has(message.author.id)){
        if(message.content.toLowerCase() == "cancel"){
            message.channel.send('Announcement cancelled.')
            Announceppl.delete(message.author.id)
        }else{
            if(message.content.length >= 256){
                message.channel.send('Exceeds character limit. 256 characters.')
                Announceppl.delete(message.author.id)
            }else{
               Announceppl.delete(message.author.id)
            let AnnounceEmbed = new Discord.RichEmbed()
            .setTitle(message.content)
            .setColor(`#44bcfd`)
            Announce4.delete(message.author.id)
            Announce5.add(message.author.id)
            message.channel.send(AnnounceEmbed)
            message.channel.send('Send?') 
            }
            
            
        }

    }
    if(message.content.toLowerCase().startsWith(prefix + 'test')){
        message.channel.send('what to test')
        if(test.has(message.author.id)){
            test.delete(message.author.id)
            message.channel.send('works lol ok bye')
        }
        test.add(message.author.id)
    }
 /*   function Announcment(number,heading,content,color,channel){
        var heading2 ;
        var content2 ;
        var color2 ;
        var channel2;
        const EmbedAn = new Discord.RichEmbed()
                .setTitle('nil')
                .setDescription('nil')
                .setColor(`${color2}`)
        if(number === '1'){
            heading2 = message.content
            console.log(message.content)
        }else if(number === '2'){
            content2 = message.content
            console.log(message.content)
        }else if(number === '3'){
            if(message.content.toLowerCase() === 'blue'){
                color2 = '#44bcfd'
            }else if(message.content.toLowerCase() === 'green'){
                color2 = '#00ee81'
            }
            console.log(message.content)
            console.log(heading2 + content2 + color2 + channel2)
        }else if(number === '4'){
            channel2 = message.content
            EmbedAn
            .setColor(color2)
            .setTitle(content2)
            .setDescription(content2)
            
            message.channel.send('Do you wish to send the announcment? (yes/no)')
            message.channel.send(EmbedAn)
        }if(number === '5'){
            channel = message.content
            client.channels.get(channel).send(Embed).catch(err =>{
                message.channel.send('Unexpected error.')
            })
            message.channel.send(Embed)
        }
    }
    if(Announce4.has(message.author.id)){//Announcment
        if(message.content.toLowerCase() !== 'cancel'){
            let WantedChannel = message.mentions.channels.first()
            if(!WantedChannel)return message.channel.send('No channel mentioned.')
                Announcment('4')
                Announce4.delete(message.author.id)
                Announce5.add(message.author.id)
        }else{
            Announce4.delete(message.author.id)
            message.channel.send('Announcment Ended.')
    }}
    if(Announce3.has(message.author.id)){//Announcment
        if(message.content.toLowerCase() !== 'cancel'){
            if(message.content.toLowerCase() === 'blue' || message.content.toLowerCase() === 'green'){
                Announcment('3')
                Announce3.delete(message.author.id)
                Announce4.add(message.author.id)
                message.channel.send('Where do u want to send the announcment?')
            }else{
                message.channel.send('Invalid color. i.e BLUE')
            }
        }else{
            Announce3.delete(message.author.id)
            message.channel.send('Announcment Ended.')
        }
    }
    if(Announce2.has(message.author.id)){//Announcment
        if(message.content !== 'cancel'){
            Announcment('2')
            Announce2.delete(message.author.id)
            Announce3.add(message.author.id)
            message.channel.send('Whats the color?')
        }else{
            Announce2.delete(message.author.id)
            message.channel.send('Announcment Ended.')
        }
    }
    if(Announce5.has(message.author.id)){//Announcment
        if(message.content.toLowerCase() == 'no'){
            Announce5.delete(message.author.id)
            message.channel.send('Ended Announcment.')
    }else if(message.content.toLowerCase() == 'yes'){
            Announcment('5')
    }
}
    if(Announce1.has(message.author.id)){//heading
        if(message.content.toLowerCase() !== 'cancel'){
            Announce1.delete(message.author.id)
            Announce2.add(message.author.id)
            Announcment('1')
            message.channel.send('Whats the announcment?')
        }else{
            message.channel.send('Announcment Ended.')
            Announce1.delete(message.author.id)
        }
        
    
    }
    
    if(message.content.toLowerCase() == prefix + "tts"){
        if(message.member.hasPermission('ADMINISTRATOR')&&message.member.id !== '679372780382191656') {
            message.channel.send("Whats the heading?")
            Announce1.add(message.author.id)
        }else{
            message.channel.send("You do not have the required permission(s).").then(msg => msg.delete(5000))
        }
    }*/
    if(message.content.toLowerCase().startsWith(prefix + "toggle list")){
        message.channel.send(togglelist)
    }

    function giverole(user, RoleWanted){
        if(!user.roles.has(RoleWanted.id)){
            message.delete()
            user.addRole(RoleWanted)
            message.reply(`Gave you ${RoleWanted.name}.`).then(msg => msg.delete(5000))
        }else{
            message.delete()
            user.removeRole(RoleWanted)
            message.reply(`Removed ${RoleWanted.name}.`).then(msg => msg.delete(5000))
        }
    }

    if(message.content.toLowerCase().startsWith(prefix + "toggle video")){
        let allowedRole = message.guild.roles.find("name", "Video Ping");
        giverole(message.member,allowedRole)   
    }else if(message.content.toLowerCase().startsWith(prefix + "toggle poll")){
        let allowedRole = message.guild.roles.find("name", "Poll Ping");
        giverole(message.member,allowedRole) 
    }else if(message.content.toLowerCase().startsWith(prefix + "toggle announcment")){
        let allowedRole = message.guild.roles.find("name", "AnnouncmentPing");
        giverole(message.member,allowedRole) 
    }else if(message.content.toLowerCase().startsWith(prefix + "toggle news")){
        let allowedRole = message.guild.roles.find("name", "News Ping");
        giverole(message.member,allowedRole) 
    }else if(message.content.toLowerCase().startsWith(prefix + "toggle game")){
        let allowedRole = message.guild.roles.find("name", "Game Pings");
        giverole(message.member,allowedRole) 
    }else if(message.content.toLowerCase().startsWith(prefix + "toggle giveaway")){
        let allowedRole = message.guild.roles.find("name", "Giveaway Ping");
        giverole(message.member,allowedRole) 
    }else if(message.content.toLowerCase().startsWith(prefix + "toggle server")){
        let allowedRole = message.guild.roles.find("name", "Server Ping");
        giverole(message.member,allowedRole) 
    }
    
    if(pollppl.has(message.author.username)){
        if(message.content.toLowerCase()== "cancel"){
            pollppl.delete(message.author.id)
            message.channel.send("Canceled poll.").then(msg => msg.delete(5000))
            message.delete()
            pollppl.delete(message.author.username)
        }else{
            let pollembed = new Discord.RichEmbed()
        .setColor('#ffd100')
        .setTitle(heading)
        .setDescription(message.content)
        .setTimestamp()
        client.channels.get('699458615442145331').send(pollembed).then(msg => {
            msg.react('👍')
            msg.react('👎')
        })
        message.channel.send("Sent poll.")
        pollppl.delete(message.author.username)
        }
        
    }
    if(pollppl.has(message.author.id)){
        if(message.content.toLowerCase()== "cancel"){
            pollppl.delete(message.author.id)
            message.channel.send("Canceled poll.").then(msg => msg.delete(5000))
            message.delete()
        }else{
            heading = message.content
            message.channel.send("Now, what is the poll for?")
            pollppl.delete(message.author.id)
            pollppl.add(message.author.username)
        }
            
        }
    if(message.content.toLowerCase().startsWith(prefix + "poll")){
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            let args = message.content.slice(5);
        let pollembed = new Discord.RichEmbed()
        .setColor('#00ff99')
        .setTitle(args)
        .setTimestamp()
        message.channel.send("Alright! Whats the heading?")
        
        pollppl.add(message.author.id);
        }else{
            message.channel.send('You do not have the requirments to do a poll.').then(msg => msg.delete(5000))
        }
        
    }
    if(message.content.toLowerCase().startsWith("https://"||"www.")){
        if(!message.member.hasPermission('MANAGE_MESSAGES')){
            message.delete()
        message.reply(" No links allowed.")
        }
    }
    if(message.content.toLowerCase().startsWith(prefix + 'suggest')){
        suggestPPL.push(message.member.id)
        message.channel.send("``Game Suggestion`` or ``Server Suggestion``?")
    }
   /* if(message.content.toLowerCase().startsWith(prefix + "toggle pollping")){
        let allowedRole = message.guild.roles.find("name", "rolename");
        if (message.member.roles.has(allowedRole.id) {
    }*/
    if(message.author.id == suggestPPL && message.content.toLowerCase() == "game suggestion"){
        message.channel.send("Please leave a suggestion below.")
    }
    if(message.author.id == suggestPPL){
        client.channels.get('699336878486454282').send(`Suggestion from: ${message.author.username +" " + message.author.id }`+" "+ message.content)
    }
    if(!message.content.startsWith(prefix)) return;
    if(message.content.toLowerCase().startsWith(prefix + 'uptime')) { 
        message.delete();
        if (usedCommandRecently.has(message.author.id)){
            message.reply('Sorry, Please Wait 10 Seconds to Use the `uptime` Command.').then(msg => msg.delete(10000))
        } else {

            function duration(ms) {
                const sec = Math.floor((ms / 1000) % 60).toString()
                const min = Math.floor((ms / (1000 * 60)) % 60).toString()
                const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
                const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
                return `${days.padStart(1, '0')} Days, ${hrs.padStart(2, '0')} Hours, ${min.padStart(2, '0')} Minutes, ${sec.padStart(1, '0')} Seconds.`
            }

            message.reply(`Thanks for Checking On Me, I've Been Up For: ${duration(client.uptime)}`).then(msg => msg.delete(5000))
            usedCommandRecently.add(message.author.id);
            setTimeout(() => {
            usedCommandRecently.delete(message.author.id)
            }, 10000)
        }
    }
    if(message.content.toLowerCase().startsWith(prefix + "ticket")){
        message.reply("continue in PM.")
        message.author.send("Please provide your help needs.")
    }
    if(message.content.toLowerCase().startsWith(prefix + "kick")) {
        message.delete();
        if (usedCommandRecently.has(message.author.id)){
            message.reply("Sorry, Please Wait 10 Seconds to Use the `Kick` Command.").then(msg => msg.delete(10000))
        } else {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have the Kick_Members Permission to Use the `Kick` Command!")
        const user = message.mentions.users.first();

        if(user){
            const member = message.guild.member(user);

            if(member){
                member.send(`You have been kicked by: ${message.author.username + " ("+ message.author.id + ")"}`)
                //message.guild.users.find('435191724734939140').send(`${message.author.username + " ("+ message.author.id + ")"} kicked: ${member.username}`)
                member.kick(`Kicked By: ${message.author.username}`).then(() =>{
                    message.channel.send(`${user.tag} Has Been Kicked By: ${message.author.username}`);
                }).catch(err =>{
                    message.reply(`I'm Unavailable to Kick ${user.username}`)
                    console.log(err);
                });
            } else{
                message.reply("That Member You `Specified` Isn't in this Guild!")
            }
        } else {
                message.reply("Please `Specify` a Member In this Guild!")
        }
        usedCommandRecently.add(message.author.id);
        setTimeout(() => {
        usedCommandRecently.delete(message.author.id)
        }, 10000)
    }
}
    if(message.content.toLowerCase().startsWith(prefix + "ban")) {
        message.delete();
    if (usedCommandRecently.has(message.author.id)){
        message.reply("Sorry, Please Wait 10 Seconds to Use the `Ban` Command.").then(msg => msg.delete(10000))
    } else {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You Don't Have the ``Ban_Members`` Permission to Use the `Ban` Command!")
    const users = message.mentions.users.first();

    if(users){
        const member = message.guild.member(users);

        if(member){
            member.ban(`Banned By: ${message.author.username}`).then(() =>{
                message.channel.send(`${users.tag} Has Been Banned By: ${message.author.username}`);
            }).catch(err =>{
                message.reply(`I'm Unavailable to Ban ${users.username}`)
                console.log(err);
            });
        } else{
            message.reply("That Member You `Specified` Isn't in this Guild!")
        }
    } else {
            message.reply("Please `Specify` a Member In this Guild!")
    }
    usedCommandRecently.add(message.author.id);
    setTimeout(() => {
    usedCommandRecently.delete(message.author.id)
    }, 10000)
  }
}
    if(message.content.toLowerCase().startsWith(prefix + 'msg')){
        let args = message.content.slice(4);
        message.delete()
        if(!args[0]){
            message.author.send("Invalid message, please try again")
            message.delete()
            return;
        }
        client.channels.get(message.channel.id).send(args)  
    }
    if(message.content.toLowerCase().startsWith(prefix + 'funfactadd')){
        let args = message.content.split(' ').slice(1);
             if(!args[0]){
            message.delete();
            message.author.send('No ``arguments`` given.')
            return;
        }else{
            message.channel.send('added ``'+ args + '``' + 'ID: '+ funfact.length++)
            funfact.push(args)
        }
    }
    if(message.content.toLowerCase().startsWith(prefix + 'ban')){
        if (usedCommandRecently.has(message.author.id)){
            message.reply('Sorry, Please Wait 10 Seconds to Use The ``Ban`` Command.').then(msg => msg.delete(5000))
        } else {
        message.channel.send('Why u trying to ban?')
        message.reply('What are you doing..')
    }
    }
/*  if(message.content.toLowerCase().startsWith(prefix + 'msg')){
        let args = message.content.split(' ').slice(3,5);
        let channelname = args[3];
        let messageinfo = args[5]
                 client.channels.get(toString(channelname)).send(toString(messageinfo))
             
    }*/
    if(message.content.toLowerCase().startsWith(prefix + 'warn')){
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            const users = message.mentions.users.first();
            if(!users) return message.reply("Please mention a User.").then(msg => msg.delete(5000))
            let reason = args.join(" ").slice(22);
            if(!reason) reason = " No reason given.";
    
            if(!warns[users.id]) warns[users.id] = {
                warns: 0
            };
    
            warns[users.id].warns++;
    
            fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
                if (err) console.log(err);
        });
        
        let WarnedEmbed = new Discord.RichEmbed()
        .setColor('#44bcfd')
        .setTitle('Warning Info')
        .setTimestamp()
        .setDescription(`Moderator: ${message.author.username + " - ("+ message.author.id+')'}\nReason: ${reason}`)
        client.channels.get('701637379709993011').send(WarnedEmbed)
        message.channel.send(`${users.username} was Warned.`).then(msg => msg.delete(5000))
        users.send('You have been warned.')
        users.send(WarnedEmbed)
    }else{
        message.channel.send('You do not have permission to use this command.').then(msg => msg.delete(5000))
    }
}
/*function giverole(user, RoleWanted){
        if(!user.roles.has(RoleWanted.id)){
            message.delete()
            user.addRole(RoleWanted)
            message.reply(`Gave you ${RoleWanted.name}.`).then(msg => msg.delete(5000))
        }else{
            message.delete()
            user.removeRole(RoleWanted)
            message.reply(`Removed ${RoleWanted.name}.`).then(msg => msg.delete(5000))
        }
    }

    if(message.content.toLowerCase().startsWith(prefix + "toggle video")){
        let allowedRole = message.guild.roles.find("name", "Video Ping");
        giverole(message.member,allowedRole)*/
    if(message.content.toLowerCase().startsWith(prefix + "mute")){
        const MuteRole = message.guild.roles.find("name", "Muted")
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            const users = message.mentions.users.first();
            let rmember = message.guild.member(users)
            if(!users) return message.reply("Please mention a User.").then(msg => msg.delete(5000))
            if(rmember.roles.has(MuteRole.id))return message.reply('User is already muted.').then(msg => msg.delete(5000))
            let reason = args.join(" ").slice(22);
            if(!reason) reason = " No reason given.";
            
        
        let WarnedEmbed = new Discord.RichEmbed()
        .setColor('#44bcfd')
        .setTitle('Mute Info')
        .setTimestamp()
        .setDescription(`Moderator: ${message.author.username + " - ("+ message.author.id+')'}\nReason: ${reason}`)
        message.channel.send(`${users.username} was Muted.`).then(msg => msg.delete(5000))
        users.send('You have been muted')
        client.channels.get('701637379709993011').send(WarnedEmbed).catch(err => {
            message.channel.send('Unexpected error.')
            console.log(err)
        })
        users.send(WarnedEmbed)
        rmember.addRole(MuteRole)
    }}
    if(message.content.toLowerCase().startsWith(prefix + 'unmute')){
        const MuteRole = message.guild.roles.find("name", "Muted")
        
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            const users = message.mentions.users.first();
            let rmember = message.guild.member(users)
            if(!rmember.roles.has(MuteRole.id))return message.reply('User is not muted.').then(msg => msg.delete(5000))
            if(!users) return message.reply("Please mention a User.").then(msg => msg.delete(5000))
            rmember.removeRole(MuteRole)
            message.channel.send(users.username + ' has been unmuted.')
        }    
    }
    if(message.content.toLowerCase().startsWith(prefix + "slowmode")){
        let args = message.content.slice(10)
        message.channel.setRateLimitPerUser(args)
        if(!args[0]){
            message.channel.send("Invalid ``arguments``")
            return;
        }else{
         message.channel.send("Set rate limit to ``"+args+"`` seconds.")   
        }
    }
   /* if(message.content.toLowerCase().startsWith(prefix + "togglePing")){
        if(message.member.find.roles())
    }*/
    if(message.content.toLowerCase().startsWith(prefix + 'purge') || message.content.toLowerCase().startsWith(prefix + 'prune')){
        if (usedCommandRecently.has(message.author.id)){
            message.reply('Sorry, Please Wait 10 Seconds to Use the ``Prune`` Command.').then(msg => msg.delete(5000))
        } else {
        let author = message.member;
        if(message.member.hasPermission('MANAGE_MESSAGES')){
           let args = message.content.split(' ').slice(1);
             if(!args[0]){
            message.delete();
            message.channel.send('No arguments given.').then(msg => msg.delete(5000))
            return;
        }
        if(args[0] > 100){
            message.delete();
            message.channel.send('Maximum ``100`` arguments').then(msg => msg.delete(5000))
            return;
            }
        message.delete();
        message.channel.bulkDelete(args[0]);
        let PurgeEmbed = new Discord.RichEmbed()
        .setColor('#44bcfd')
        .setTitle('Purge Command')
        .setTimestamp()
        .setDescription(`Moderator: ${message.author.username + " - ("+message.author.id+")"}\nMessages Deleted: ${args[0]}\nChannel: <#${message.channel.id}>`)
        client.channels.get('701637379709993011').send(PurgeEmbed).catch(err => {
            message.channel.send('Unexpected error.')
            console.log(err)
        })
        message.channel.send('Deleted ``'+ args[0]+'``'+ ' messages.').then(msg => msg.delete(5000))
        return;
        }else{
            message.reply('You do not have the permissions.').then(msg => msg.delete(5000))
        } 
        }
    }
            
    if(message.content.toLowerCase().startsWith(prefix + 'funfact')){
        if(message.content.toLowerCase().startsWith(prefix + 'funfactadd')){
            return;
        }else{
            if(message.content.toLowerCase().startsWith(prefix + 'funfactdelete')){
                return;
            }
           if (usedCommandRecently.has(message.author.id)){
            message.reply('Sorry, Please Wait 10 Seconds to Use the ``funfact`` Command.').then(msg => msg.delete(5000))
        } else {
            if(message.member.hasPermission('MANAGE_MESSAGES' || 'ADMINISTRATOR')){
            let choice = funfact[Math.floor(Math.random()* funfact.length)]
            message.channel.send(choice)
        }else{
            message.reply(' you do not have the permission to add a funfact.')
        }
    }
  } 
}
    if(message.content.toLowerCase().startsWith(prefix + 'funfactdelete')){
        message.react('\:Smile:')
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            if(message.content.toLowerCase().startsWith(prefix + 'funfact')){
                return;
            }else{
               if(message.content.toLowerCase().startsWith(prefix + 'funfactadd')){ 
                return; 
            }else{
                message.reply('a')
            }
                
        }

    }
}       
    if(message.content.toLowerCase().startsWith(prefix + 'ping')){
        if (usedCommandRecently.has(message.author.id)){
            message.reply('Sorry, Please Wait 10 Seconds to Use the ``Ping`` Command.').then(msg => msg.delete(5000))
        } else {
        message.channel.send('Pinging...').then(m => {
                let ping = m.createdTimestamp = message.createdTimestamp
                let choices = ['Are you Sure this Is My Ping? ', 'Please Be Good, Is It? ', 'Is It Good? ']
                let response = choices[Math.floor(Math.random() * choices.length)]

                m.edit(`${response}: Bot Latency: ${ping}, API Latency: ${Math.round(client.ping)}`)
                message.reply('Pong! 🏓')

            })
    }}
    if(message.content.toLowerCase().startsWith(prefix + 'cmds')){
        if (usedCommandRecently.has(message.author.id)){
            message.reply('Sorry, Please Wait 10 Seconds to Use the ``cmds`` Command.').then(msg => msg.delete(5000))
        } else {
        message.channel.send('Check PM, ' + message.author)
        message.author.sendMessage(CmdsEmbed)
    }}
    if(message.content.toLowerCase().startsWith(prefix + 'creators')){
        if (usedCommandRecently.has(message.author.id)){
            message.reply('Sorry, Please Wait 10 Seconds to Use the ``creators`` Command.').then(msg => msg.delete(5000))
        } else {
        message.channel.send('``JustCRyan`` is the **builder** (RyannEristic#4693) while ``IB1J`` is the **programmer** and the **bot developer** (IB1J#0001)')
    }
    if(message.content.toLowerCase().startsWith(prefix + 'say')){
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            let args = message.content.split(' ').slice(1);
              if(!args[0]){
             message.delete();
             message.author.send('No arguments given.')
             return;
         }
         if(args[0] < 1){
             message.delete();
             message.channel.send('Small message')
             return;
             }
         message.delete();
         message.channel.send(args);
         return;
    }
}
if(!message.member.hasPermission('MANAGE_MESSAGES' || 'ADMINISTRATOR')){
    usedCommandRecently.add(message.author.id)
    setTimeout(() => {
    usedCommandRecently.delete(message.author.id)
}, 10000)
}

}})



client.login('Njc5MzcyNzgwMzgyMTkxNjU2.XkwaFg.L1TKtPGwiKFjgIERsKXHreclbTA');
