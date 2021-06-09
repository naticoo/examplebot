import {
  NaticoClient,
  NaticoCommandHandler,
  NaticoListenerHandler,
} from "../deps.ts";
//TODO: add listener and task example
class BotClient extends NaticoClient {
  constructor() {
    super({});
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

    console.log(this.listenerHandler.emitters);
    return this.login(token);
  }
}
const botClient = new BotClient();
botClient.start(token);
