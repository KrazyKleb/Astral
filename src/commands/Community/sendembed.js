const { SlashCommandBuilder } = require(`@discordjs/builders`)
const { EmbedBuilder, PermissionsBitField } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`sendembed`)
    .setDescription(`Sends an embed in the specified channel`)
    .addChannelOption(option => option.setName(`channel`).setDescription(`The channel you want to send the embed in`).setRequired(true))
    .addStringOption(option => option.setName(`description`).setDescription(`The description of the embed`).setRequired(true))
    .addStringOption(option => option.setName(`color`).setDescription(`The color of the embed (Hex code)`).setRequired(false))
    .addStringOption(option => option.setName(`title`).setDescription(`The title of the embed`).setRequired(false))
    .addStringOption(option => option.setName(`url`).setDescription(`The URL of the embed`).setRequired(false))
    .addStringOption(option => option.setName(`author`).setDescription(`The author of the embed`).setRequired(false))
    .addStringOption(option => option.setName(`authoricon`).setDescription(`The author icon of the embed`).setRequired(false))
    .addStringOption(option => option.setName(`authorurl`).setDescription(`The author URL of the embed`).setRequired(false))
    .addStringOption(option => option.setName(`thumbnail`).setDescription(`The thumbnail of the embed`).setRequired(false))
    .addStringOption(option => option.setName(`image`).setDescription(`The image of the embed`).setRequired(false))
    .addStringOption(option => option.setName(`footer`).setDescription(`The footer text of the embed`).setRequired(false))
    .addStringOption(option => option.setName(`footericon`).setDescription(`The footer icon of the embed`).setRequired(false)),
    async execute (interaction, client) {

        const bronzeX = client.emojis.cache.find(emoji => emoji.name === "bronze_x")
        const bronzeCheck = client.emojis.cache.find(emoji => emoji.name === "bronze_check")
        
        const permEmbed = new EmbedBuilder()
        .setColor(`Blue`)
        .setDescription(`${bronzeX} You don't have permission to use this command`)

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ embeds: [permEmbed], ephemeral: true })

        const channel = interaction.options.getChannel(`channel`)
        const color = interaction.options.getString(`color`)
        const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(color)
        const title = interaction.options.getString(`title`)
        const url = interaction.options.getString(`url`)
        const author = interaction.options.getString(`author`)
        const authoricon = interaction.options.getString(`authoricon`)
        const authorurl = interaction.options.getString(`authorurl`)
        const description = interaction.options.getString(`description`)
        const thumbnail = interaction.options.getString(`thumbnail`)
        const image = interaction.options.getString(`image`)
        const footer = interaction.options.getString(`footer`)
        const footericon = interaction.options.getString(`footericon`)
        
        const embed = new EmbedBuilder()
        .setDescription(description || null)
        .setColor(color || 'Blue')
        .setTitle(title || null)
        .setURL(url || null)
        .setAuthor(author ? { name: author, iconURL: authoricon, url: authorurl } : null)
        .setThumbnail(thumbnail || null)
        .setImage(image || null)
        .setFooter(footer || footericon ? { text: footer || null, iconURL: footericon || null } : null)       
        .setTimestamp()

        if (isValidHex) {
            embed.setColor(color);
        }

        interaction.reply({ content: `Embed Sent`, ephemeral: true })
        
        channel.send({ embeds: [embed] })
    }
}