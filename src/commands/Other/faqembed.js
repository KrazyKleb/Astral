const { SlashCommandBuilder } = require(`@discordjs/builders`)
const { EmbedBuilder, PermissionsBitField } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`faqembed`)
    .setDescription(`Sends the FAQ Embed`),
    async execute (interaction, client) {

        const bronzeX = client.emojis.cache.find(emoji => emoji.name === "bronze_x")
        const bronzeCheck = client.emojis.cache.find(emoji => emoji.name === "bronze_check")
        
        const permEmbed = new EmbedBuilder()
        .setColor(`Blue`)
        .setDescription(`${bronzeX}  You don't have permission to use this command`)
        
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ embeds: [permEmbed], ephemeral: true })
        
        const embed = new EmbedBuilder()
        .setColor(`Blue`)
        .setTitle(`***Astral MC FAQ***`)
        .setDescription(`These are answers to questions that are asked a lot.`)
        .setImage(`https://i.imgur.com/Fm4ZjTJ.png`)
        .addFields(
            { name: `*How can I apply for staff?*`, value: `Use the ***/apply staff*** command to apply for staff`},
            { name: `*How can I apply for Youtube/Twitch rank?*`, value: `Use the ***/apply media*** command to apply for Youtube/Twitch rank`},
        )
        
        await interaction.channel.send({ embeds: [embed] })
        
        await interaction.reply({ content: `Embed Sent!`, ephemeral: true })
    }
}