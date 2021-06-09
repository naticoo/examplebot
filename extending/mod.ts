import {
	NaticoClient,
	NaticoCommandHandler,
	NaticoListenerHandler,
} from '../deps.ts';
export class BotClient extends NaticoClient {
	constructor() {
		super({});
	}
	commandHandler: NaticoCommandHandler = new NaticoCommandHandler(this, {
		directory: './commands',
		prefix: ['!'],
	});
	listenerHandler: NaticoListenerHandler = new NaticoListenerHandler(this, {
		directory: './listeners',
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
const botClient = new BotClient();
botClient.start('ODM3NjgxMzk1MTk0Nzg5OTY5.YIwFlw.tII3V4AlijnIpHV0cxxy1IdKueU');
