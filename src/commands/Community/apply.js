const { SlashCommandBuilder } = require(`@discordjs/builders`)
const { EmbedBuilder } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`apply`)
    .setDescription(`Apply for staff and Youtube/Twitch Rank`)
    .addSubcommand(command =>
        command
        .setName(`staff`)
        .setDescription(`Apply for staff`))
    .addSubcommand(command =>
        command
        .setName(`media`)
        .setDescription(`Apply for Youtube/Twitch rank`)),
    async execute (interaction) {

        const command = interaction.options.getSubcommand();
        const staffEmbed = new EmbedBuilder()
        .setColor(`Blue`)
        .setDescription(`You can apply for staff here:\nWe don't have a google forms link yet because the server is not up.`)
        const mediaEmbed = new EmbedBuilder()
        .setColor(`Blue`)
        .setDescription(`You can apply for Youtube/Twitch rank here:\nexample link`)

        switch (command) {

            case `staff`:
            await interaction.reply ({ embeds: [staffEmbed] })

        }

        switch (command) {

            case `media`:
            await interaction.reply ({ embeds: [staffEmbed] })

        }
    }
}