const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("Black Diamond Bot Davet")
.setDescription("Şuan bot bu sunucuya özel olarak çalışmakta")
.setColor("GREEN")

return message.channel.send(kinda)
}
//black diamond
exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};