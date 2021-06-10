import {
	NaticoClient,
	NaticoCommandHandler,
	NaticoInhibitorHandler,
} from '../deps.ts';
class BotClient extends NaticoClient {
	constructor() {
		super({});
	}
	commandHandler: NaticoCommandHandler = new NaticoCommandHandler(this, {
		directory: './commands',
		prefix: '!',
		owners: ['336465356304678913'],
		guildonly: false,
	});
	inhibitorHandler: NaticoInhibitorHandler = new NaticoInhibitorHandler(this, {
		directory: './inhibitors',
	});
	async start(token: string) {
		//Set the inhibitor handler to be used
		this.commandHandler.setInhibitorHandler(this.inhibitorHandler);
		await this.commandHandler.loadALL();
		await this.inhibitorHandler.loadALL();
		return this.login(token);
	}
}
const botClient = new BotClient();
botClient.start(token);
