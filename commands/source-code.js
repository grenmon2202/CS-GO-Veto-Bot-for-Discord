const Discord = require('discord.js')

module.exports = {
    commands: ['source-code', 'sc'],
    max_args: 0,
    description: 'Provides the link to the GitHub repository for the bot\'s source code',
    callback: (message, arguments, text) => {
        let sourceCodeEmbed = new Discord.MessageEmbed()
            .setColor('PINK')
            .setTitle('A Child\'s Source Code')
            .setDescription('There you go!\nhttps://github.com/grenmon2202/A-Child-Discord-Bot');
        message.channel.send(sourceCodeEmbed);
    }
}