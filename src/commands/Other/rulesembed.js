const { SlashCommandBuilder } = require(`@discordjs/builders`)
const { EmbedBuilder, PermissionsBitField } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`rulesembed`)
    .setDescription(`Sends the rules embed`),
    async execute (interaction, client) {

        const bronzeX = client.emojis.cache.find(emoji => emoji.name === "bronze_x")
        const bronzeCheck = client.emojis.cache.find(emoji => emoji.name === "bronze_check")
        
        const permEmbed = new EmbedBuilder()
        .setColor(`Blue`)
        .setDescription(`${bronzeX} You don't have permission to use this command`)
        
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ embeds: [permEmbed], ephemeral: true })
        
        const embed = new EmbedBuilder()
        .setTitle(`***Astral Discord Rules***`)
        .addFields(
            { name: `**1. Be respectful.**`, value: `In our Discord server, we ask everyone to respect each other. It does not matter if the person is a simple player or the owner. Respect goes a long way.` },
            { name: `**2. Keep the banter in-game.**`, value: `Please do not bring your drama into the Discord. If you have beef with someone, squash in game or in DMs.` },
            { name: `**3. Do not threaten to raid or spam.**`, value: `This is a 1 warning situation. Threats will not be tolerated. Do not threaten to Raid any of our Discord servers, do not threaten to spam, ddos, or do any sort of attack on the Discord or Minecraft servers attached to Astral, The Astral Project, or AstralHQ.` },
            { name: `**4. Keep it clean.**`, value: `We're not family friendly, but we do not need an excessive amount of swear words, or any other \"disrespectful\" language. Be careful with the words you use. We will not` },
            { name: `**5. Don't force anyone to play.**`, value: `If you're entering a war with another Nation, do not text your entire Nation forcing them to get on. If they can't access a computer, leave it be. Take the loss & move on. We don't need players being upset over this.` }
        )
        .setImage(`https://i.imgur.com/B5dlNVw.png`)
        .setColor(`Blue`)
        
        await interaction.channel.send({
            embeds: [embed]
        })

        await interaction.reply({ content: "The embed has been sent", ephemeral: true })
    }
}