import { NaticoCommand, DiscordenoMessage } from "../../../deps.ts";
export default class say extends NaticoCommand {
  constructor() {
    super("say", {
      name: "say",
      aliases: ["say"],
      options: [
        //You dont have to add the options here but its recomended once natico is compatible with slash commands
        {
          type: 1,
          name: "channel",
          description: "says the stuff in the current channel",
        },

        {
          type: 1,
          name: "dm",
          description: "dms you the stuff instead",
        },
      ],
    });
  }
  exec(message: DiscordenoMessage) {
    //It will default to this without arguments
    message.reply("Please chooose between " + this.options!.map((option) => option.name).join(", "));
  }
  dm(messsage: DiscordenoMessage, { text }: { text: string }) {
    messsage.member!.sendDM(text);
  }
  channel(messsage: DiscordenoMessage, { text }: { text: string }) {
    messsage.channel!.send(text);
  }
}
