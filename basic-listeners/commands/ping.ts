import { NaticoCommand } from "https://deno.land/x/natico@0.1.1/mod.ts";
export default class ping extends NaticoCommand {
  constructor() {
    super("ping", {
      name: "ping",
      aliases: ["ping"],
    });
  }
  exec(message) {
    message.reply("Pong");
  }
}
