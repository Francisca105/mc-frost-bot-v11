exports.run = async (client, message, args, err) => {
    const discord = require('discord.js')
    let embed = new discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avtarURL, 'https://discord.gg/Jj9suNy')
    .setDescription('<:partner2:703406002837651557> Todos os meus comandos:')
    .addField('addcargo', 'Adiciona um cargo a um user.')
    .addField('ajuda', 'Envia esta mensagem :3')
    .addField('botinfo', 'Manda as minhas informações pessoais.')
    .addField('ip', 'Informa-te o ip do servidor!')
    .addField('limpar', 'Limpa as mensagens de um chat.')
    .setColor('#fa00c0')
        message.channel.send(embed)
    }
module.exports.help = {
    name: "help",
    aliases: ["?", "commands", "cmds", "ajuda"]
}    