module.exports = {
    name: "ping",
    run: async(client, message, args) => {
        message.reply('🏓 | Pong! `' + client.ws.ping + "ms`")
    }
}