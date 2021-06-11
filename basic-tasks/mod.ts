import { NaticoClient, NaticoTaskHandler, NaticoClientOptions } from "../deps.ts";
class BotClient extends NaticoClient {
  constructor(public options?: NaticoClientOptions) {
    super(options);
  }
  taskHandler: NaticoTaskHandler = new NaticoTaskHandler(this, {
    directory: "./tasks",
  });

  async start(token: string) {
    await this.taskHandler.loadALL();
    return this.login(token);
  }
}
const botClient = new BotClient({ intents: ["Guilds", "GuildMessages", "GuildVoiceStates"] });
botClient.start(token);
