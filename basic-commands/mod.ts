import {
  NaticoClient,
  NaticoCommandHandler,
} from "https://deno.land/x/natico@0.1.1/mod.ts";
class BotClient extends NaticoClient {
  constructor() {
    super({});
  }
  commandHandler: NaticoCommandHandler = new NaticoCommandHandler(this, {
    directory: "./commands",
    prefix: () => ["!"],
    owners: ["336465356304678913"],
    guildonly: false,
  });
  async start(token: string) {
    await this.commandHandler.loadALL();
    return this.login(token);
  }
}
const botClient = new BotClient();
botClient.start(token);
