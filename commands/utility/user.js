const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user."),

  async execute(interactions) {
    await interactions.reply(
      `This command was run by ${interactions.user.username}, who joined on ${interactions.member.joinedAt}.`
    );
  },
};
