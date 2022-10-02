const path = require('node:path');
const dicionarioBotoes = require('../buttons/dicionario.json')

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
	    if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);
    
            if(!command) return;
    
            try {
                await command.execute(interaction);
            } catch(error){
                console.error(error);
                await interaction.reply({content:'Houve um erro ao executar o comando!', ephemeral: true});
            }
        } else if (interaction.isButton()) {
            const buttonId = interaction.customId
            const buttonFile = path.join(__dirname, `..`, `buttons`, dicionarioBotoes[buttonId])
            const button = require(buttonFile)
            button.execute(interaction)
        }
	},
};