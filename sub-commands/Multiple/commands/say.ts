import { NaticoCommand, DiscordenoMessage } from "../../../deps.ts";
export default class say extends NaticoCommand {
  constructor() {
    super("say", {
      name: "say",
      aliases: ["say"],
      options: [
        {
          type: 1,
          name: "channel",
          description: "says the stuff in the current channel",
          options: [
            {
              type: 3,
              name: "text",
              description: "stuff you want to say in the channel",
              required: false,
            },
          ],
        },
        {
          type: 1,
          name: "dm",
          description: "dms you the stuff instead",
          options: [
            {
              type: 3,
              name: "text",
              description: "text to dm",
              required: false,
            },
          ],
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
