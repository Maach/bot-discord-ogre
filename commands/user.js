const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Retorna informações do usuário'),
	async execute(interaction) {
		await interaction.reply({ content: `Sua tag: ${interaction.user.tag}\nSeu ID: ${interaction.user.id}`, ephemeral: true });
	},
};