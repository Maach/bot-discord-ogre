const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Retorna informações do servidore'),
	async execute(interaction) {
		await interaction.reply(`Nome do servidor: ${interaction.guild.name}\nQuantidade de membros: ${interaction.guild.memberCount}`);
	},
};