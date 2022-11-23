const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const JOGOS = require(`../data/jogos-copa-2022`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('se-qatar')
		.setDescription('Define eventos para os jogos da Copa do Mundo do Catar')
        .addStringOption(option => {
            return option.setName(`data`)
                .setDescription(`Data das partidas a serem inseridas`)
                .addChoices(
                    { name: `20/11/2022`, value: `20/11/2022` }, { name: `21/11/2022`, value: `21/11/2022` }, 
                    { name: `22/11/2022`, value: `22/11/2022` }, { name: `23/11/2022`, value: `23/11/2022` }, 
                    { name: `24/11/2022`, value: `24/11/2022` }, { name: `25/11/2022`, value: `25/11/2022` }, 
                    { name: `26/11/2022`, value: `26/11/2022` }, { name: `27/11/2022`, value: `27/11/2022` }, 
                    { name: `28/11/2022`, value: `28/11/2022` }, { name: `29/11/2022`, value: `29/11/2022` }, 
                    { name: `30/11/2022`, value: `30/11/2022` }, { name: `01/12/2022`, value: `01/12/2022` }, 
                    { name: `02/12/2022`, value: `02/12/2022` }, { name: `03/12/2022`, value: `03/12/2022` },
                    { name: `04/12/2022`, value: `04/12/2022` }, { name: `05/12/2022`, value: `05/12/2022` },
                    { name: `06/12/2022`, value: `06/12/2022` }, { name: `09/12/2022`, value: `09/12/2022` },
                    { name: `10/12/2022`, value: `10/12/2022` }, { name: `13/12/2022`, value: `13/12/2022` },
                    { name: `17/12/2022`, value: `17/12/2022` }, { name: `18/12/2022`, value: `18/12/2022` },
                )
                .setRequired(true)
        })
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator, PermissionFlagsBits.ManageEvents),
	async execute(interaction) {
        const eventos = await interaction.guild.scheduledEvents.fetch()
        const partidas = JOGOS[interaction.options.getString("data")]
        await Promise.all(partidas.map(async partida => {
            try {
                const evento = eventos.find(item => item.name == partida.name && item.scheduledStartAt.getTime() == partida.scheduledStartTime.getTime())
                if (evento)
                    return await interaction.guild.scheduledEvents.edit(evento.id, partida)
                return await interaction.guild.scheduledEvents.create(partida)
            } catch (e) {
                console.error(e.message)
            }
        }))
		await interaction.reply({ content: `As partidas foram atualizadas.`, ephemeral: true })
	},
};