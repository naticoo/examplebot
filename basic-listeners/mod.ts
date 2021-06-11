import { NaticoClient, NaticoCommandHandler, NaticoListenerHandler, NaticoClientOptions } from "../deps.ts";
class BotClient extends NaticoClient {
  constructor(public options?: NaticoClientOptions) {
    super(options);
  }
  commandHandler: NaticoCommandHandler = new NaticoCommandHandler(this, {
    directory: "./commands",
    prefix: "!",
  });
  listenerHandler: NaticoListenerHandler = new NaticoListenerHandler(this, {
    directory: "./listeners",
  });
  async start(token: string) {
    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
    });
    await this.listenerHandler.loadALL();
    await this.commandHandler.loadALL();
    return this.login(token);
  }
}
const botClient = new BotClient({ intents: ["Guilds", "GuildMessages", "GuildVoiceStates"] });
botClient.start(token);
