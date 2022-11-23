const { ActivityType } = require("discord.js");

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setPresence({
			status: `idle`,
			activities: [{
				name: `bingo`,
				type: ActivityType.Streaming,
				url: `https://www.twitch.tv/ogre_memefudi`
			}]
		})
		console.log(`Ready! Logged in as ${client.user.tag}`)
	},
};