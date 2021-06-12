import { DiscordenoMessage, NaticoSubCommand } from "../../../../deps.ts";
export default class dm extends NaticoSubCommand {
  constructor() {
    super("dm", {
      name: "dm",
      subOf: "say",
      options: [
        {
          type: 3,
          name: "text",
          description: "text to dm",
          required: false,
        },
      ],
    });
  }
  exec(message: DiscordenoMessage, a: { text: string }) {
    message.member!.sendDM(a.text || "nothing");
  }
}
