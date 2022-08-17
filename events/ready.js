module.exports = (client) => {
    client.user.setPresence({
        activities: [
            {
                name: "try / or .",
                type: "PLAYING"
            }
        ]
    })
    console.log("\nBot is ready!\n")
}