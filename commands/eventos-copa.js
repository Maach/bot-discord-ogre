const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const PARTIDAS = require(`../data/jogos-copa-2022`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('se-qatar')
		.setDescription('Define eventos para os jogos da Copa do Mundo do Catar')
        .addStringOption(option => {
            return option.setName(`data`)
                .setDescription(`Data das partidas a serem inseridas`)
                .addChoices( ...Object.keys(PARTIDAS).map(item => ({ name: item, value: item })) )
                .setRequired(true)
        })
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageEvents),
	async execute(interaction) {
        const eventos = await interaction.guild.scheduledEvents.fetch()
        const partida = PARTIDAS[interaction.options.getString("data")]
        try {
            const evento = eventos.find(item => item.name == partida.name && item.scheduledStartAt.getTime() == partida.scheduledStartTime.getTime())
            if (evento)
                await interaction.guild.scheduledEvents.edit(evento.id, partida)
            else
                await interaction.guild.scheduledEvents.create(partida)
        } catch (e) {
            console.error(e.message)
        }
		await interaction.reply({ content: `As partidas foram atualizadas.`, ephemeral: true })
	},
};