const { ActivityType } = require(`discord.js`)

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

        client.user.setStatus('online');
        client.user.setActivity('You donate', { type: ActivityType.Watching });

    }
}