import {
	DiscordenoMessage,
	NaticoCommand,
	NaticoInhibitor,
} from '../../deps.ts';
export default class notTricked extends NaticoInhibitor {
	constructor() {
		super('notTricked', {
			//Higher priotiry = earlier fire
			priority: 1,
		});
	}

	exec(message: DiscordenoMessage, command: NaticoCommand): boolean {
		if (command.name == 'say') {
			if (message.authorId !== 336465356304678913n) return true;
		}
		message.reply('You are not allowed to run this command');
		return false;
	}
}
