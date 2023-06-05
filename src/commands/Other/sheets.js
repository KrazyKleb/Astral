const { SlashCommandBuilder } = require(`@discordjs/builders`)
const { EmbedBuilder, PermissionsBitField } = require(`discord.js`)
const axios = require(`axios`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`sheets`)
    .setDescription(`Connect to Google Sheets API`),
    async execute (interaction, client) {

        const bronzeX = client.emojis.cache.find(emoji => emoji.name === "bronze_x")
        const bronzeCheck = client.emojis.cache.find(emoji => emoji.name === "bronze_check")

        const permEmbed = new EmbedBuilder()
        .setColor(`Blue`)
        .setDescription(`${bronzeX}  You don't have permission to use this command`)
        
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ embeds: [permEmbed], ephemeral: true })
        
        axios.post(`https://sheetdb.io/api/v1/kqmxpzgwtqz6g`, {
            data: {
                timestamp: `Timestamp`,
                age: `Age`,
                ign: `IGN`,
                discord: `Discord Username`,
                position: `Position`,
                why: `Why they want to be staff`,
                prior: `Prior experience`,
                playtime: `How long they've played`,
                punished: `Whether they've been punished`,
                separate: `What separates them`
            }
        })
        
        const successEmbed = new EmbedBuilder()
        .setColor(`Blue`)
        .setDescription(`${bronzeCheck}  Successfully connected to Google Sheets API`)
        
        await interaction.reply({ embeds: [successEmbed], ephemeral: true })
    }
}