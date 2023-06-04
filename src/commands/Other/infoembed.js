const { SlashCommandBuilder } = require(`@discordjs/builders`)
const { EmbedBuilder, PermissionsBitField } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`infoembed`)
    .setDescription(`Sends the info embed`),
    async execute (interaction, client) {

        const permEmbed = new EmbedBuilder()
        .setColor(`Blue`)
        .setDescription(`You don't have permission to use this command`)
        
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ embeds: [permEmbed], ephemeral: true })
        
        const embed = new EmbedBuilder()
        .setTitle(`***Welcome to Astral MC!***`)
        .setDescription(`Astral MC is a 1.19.4 Minecraft Server running on Purpur. Our server strives to provide an all-new, unique experience for multiplayer Minecraft.`)
        .addFields(
            { name: `*What can I do in Astral MC?*`, value: `Astral MC is all about building a team. Take your gameplay to the next level by bringing in your team & starting the next biggest Nation on the server. As a Nation, you can do so much. From claiming massive amounts of land, to declaring war with other Nations, you can believe there's 1000s of opportunites on Astral MC.` },
            { name: `*What are some unique elements of Astral?*`, value: `Some of the unique elements of Astral all comes down to the plugins. We offer tons of custom creatures, bosses, items, armor, weapons & even cosmetics & emotes! We offer a modpack on Curseforge aswell that allows Proximity Chat, Friends Lists, more Cosmetics & our custom texture pack!` },
            { name: `*What is the goal of Astral MC?*`, value: `The goal of Astral MC is to come out on top. We reset our server every 14 days. You can keep track of the resets using our in-game timer on the Tablist. Once reset day comes, anyone who is banned, will be unbanned at this moment. The map will also undergo improvements, changes & inventories will be reset. At the end of the reset the Top 3 players on Baltop will receive large rewards, from free cosmetics, to reset immunity. Grind till you can't no more!` },
        )
        .setImage(`https://i.imgur.com/ZwsLcLG.png`)
        .setColor(`Blue`)

        await interaction.channel.send({ embeds: [embed] })

        await interaction.reply({ content: "The embed has been sent", ephemeral: true })
    }
}