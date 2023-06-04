const { SlashCommandBuilder } = require(`@discordjs/builders`)
const { EmbedBuilder, PermissionsBitField } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`faqembed`)
    .setDescription(`Sends the FAQ Embed`),
    async execute (interaction) {

        const permEmbed = new EmbedBuilder()
        .setColor(`Blue`)
        .setDescription(`You don't have permission to use this command`)
        
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ embeds: [permEmbed], ephemeral: true })
        
        const embed = new EmbedBuilder()
        .setTitle(`***Astral MC FAQ***`)
        .setDescription(`These are answers to questions that are asked a lot.`)
        .setImage(`https://i.imgur.com/Fm4ZjTJ.png`)
        .addFields(
            { name: `*How can I apply for staff?*`, value: `We will release a Google form soon, You will be able to apply for staff through the Google form.`},
        )
        
        await interaction.channel.send({ embeds: [embed] })
        
        await interaction.reply({ content: `Embed Sent!`, ephemeral: true })
    }
}