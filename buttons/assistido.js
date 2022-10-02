const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

const CUSTOMID_ASSISTIDO = `assistido`
const CUSTOMID_NAO_ASSISTIDO = `nao-assistido`
const BUTTON_ASSISTIDO = new ActionRowBuilder()
    .addComponents(new ButtonBuilder()
        .setCustomId(CUSTOMID_ASSISTIDO)
        .setLabel(`Marcar como assistido`)
        .setStyle(ButtonStyle.Success))
const BUTTON_NAO_ASSISTIDO = new ActionRowBuilder()
    .addComponents(new ButtonBuilder()
        .setCustomId(CUSTOMID_NAO_ASSISTIDO)
        .setLabel(`Marcar como não assistido`)
        .setStyle(ButtonStyle.Danger))

module.exports = {
    data: BUTTON_ASSISTIDO,
    async execute(interaction) {
        let button = BUTTON_NAO_ASSISTIDO
        if (interaction.customId == CUSTOMID_NAO_ASSISTIDO)
            button = BUTTON_ASSISTIDO
        await interaction.message.edit({ content: interaction.message.content, components: [ button ] })
        await interaction.reply({ content: `Coisinha implicante`, ephemeral: true })
    }
}