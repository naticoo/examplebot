import { NaticoClient, NaticoTaskHandler } from "../deps.ts";
class BotClient extends NaticoClient {
  constructor() {
    super({});
  }
  taskHandler: NaticoTaskHandler = new NaticoTaskHandler(this, {
    directory: "./tasks",
  });

  async start(token: string) {
    await this.taskHandler.loadALL();
    return this.login(token);
  }
}
const botClient = new BotClient();
botClient.start(token);
