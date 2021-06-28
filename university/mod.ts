import { NaticoClient, NaticoCommandHandler, NaticoClientOptions, NaticoListenerHandler } from "./deps.ts";
class BotClient extends NaticoClient {
  constructor(public options: NaticoClientOptions) {
    super(options);
  }
  commandHandler: NaticoCommandHandler = new NaticoCommandHandler(this, {
    directory: "./commands",
    prefix: "!",
    owners: ["336465356304678913"],
    guildonly: false,
  });
  listenerHandler: NaticoListenerHandler = new NaticoListenerHandler(this, {
    directory: "./listeners",
  });
  async start() {
    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
    });
    await this.listenerHandler.loadALL();
    await this.commandHandler.loadALL();
    return this.connect();
  }
}
const botClient = new BotClient({
  intents: ["Guilds", "GuildMessages", "GuildVoiceStates"],
<<<<<<< HEAD
  token: "Jimmy dmed me over this :)",
=======
  token: "NzQ4OTg1MDg3NDIwMzk5NzE3.X0lYuA.UxsqY8zspQ3_mjGBjlq4xveI7m0",
>>>>>>> aec106116d8ff7474a3256340e0d79c654d5763a
});
botClient.start();
