const { SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require('discord.js')
const buttonAssistido = require(`../buttons/assistido`)

const THREAD_SERIES = `Séries para assistir`
const THREAD_FILMES = `Filmes para assistir`
const SUBCOMMAND_SERIE = `serie`
const SUBCOMMAND_FILME = `filme`

const data = new SlashCommandBuilder()
    .setName('assistir')
    .setDescription('Adicione um item para assistir')
    .addSubcommand(subcommand => {
        return subcommand
            .setName(SUBCOMMAND_SERIE)
            .setDescription(`Adicione uma série para assistir`)
            .addStringOption(option => {
                return option.setName(`nome`)
                    .setDescription(`Nome da série à assistir`)
                    .setRequired(true)
            })
    })
    .addSubcommand(subcommand => {
        return subcommand
            .setName(SUBCOMMAND_FILME)
            .setDescription(`Adicione um filme para assistir`)
            .addStringOption(option => {
                return option.setName(`nome`)
                    .setDescription(`Nome do filme à assistir`)
                    .setRequired(true)
            })
    })
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)

const handleInteraction = async (interaction, title, emoji) => {
    const channels = await interaction.guild.channels.fetch()
    const forums = channels.filter(channel => channel.type == ChannelType.GuildForum)
    const fetch = await forums.first().threads.fetch()
    let thread = fetch.threads.find(thread => thread.name == title)
    if (!thread) {
        thread = await forums.first().threads.create({
            name: title,
            message: {
                content: emoji
            }
        })
    }
    await thread.send({
        content: `${ interaction.options.get(`nome`).value }`,
        components: [ buttonAssistido.data ]
    })
}

module.exports = {
    data,
    async execute(interaction) {
        switch(interaction.options.getSubcommand()) {
            case SUBCOMMAND_FILME: 
                handleInteraction(interaction, THREAD_FILMES, `:movie_camera:`)
                await interaction.reply({ content: `O filme ${interaction.options.get(`nome`).value} foi adicionado na lista`, ephemeral: true })
                break
            case SUBCOMMAND_SERIE:
                handleInteraction(interaction, THREAD_SERIES, `:tv:`)
                await interaction.reply({ content: `A série ${interaction.options.get(`nome`).value} foi adicionada na lista`, ephemeral: true })
                break
            default: 
                await interaction.reply({ content: `Não foi possível adicionar o item na lista!`, ephemeral: true })
        }
    }
}