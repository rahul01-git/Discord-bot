const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides information about the server."),

  async execute(interactions) {
    await interactions.reply(
      `This server is ${interactions.guild.name} and has ${interactions.guild.memberCount} members.`
    );
  },
};
