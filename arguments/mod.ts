import { NaticoClient, NaticoCommandHandler, NaticoClientOptions } from "../deps.ts";
class BotClient extends NaticoClient {
  constructor(public options?: NaticoClientOptions) {
    super(options);
  }
  commandHandler: NaticoCommandHandler = new NaticoCommandHandler(this, {
    directory: "./commands",
    prefix: "!",
    owners: ["336465356304678913"],
    guildonly: false,
  });
  async start(token: string) {
    await this.commandHandler.loadALL();
    return this.login(token);
  }
}
const botClient = new BotClient({ intents: ["Guilds", "GuildMessages", "GuildVoiceStates"] });
botClient.start(token);
