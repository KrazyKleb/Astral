const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`invites`)
    .setDescription(`Gets the amount of invites a user has.`)
    .addUserOption(option => option.setName(`user`).setDescription(`The user whose invites will be checked.`).setRequired(true)),
    async execute (interaction, client, message) {
        
        const user = interaction.options.getUser(`user`)
        let invites = await interaction.guild.invites.fetch();
        let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id);

        let i = 0;
        userInv.forEach(inv => i += inv.uses)

        const embed = new EmbedBuilder()
        .setColor(`Blue`)
        .setDescription(`${user.tag} has **${i}** invites.`)

        await interaction.reply({ embeds: [embed] });
    }
}