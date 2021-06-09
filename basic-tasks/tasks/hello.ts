import { NaticoTask } from "../../deps.ts";
export default class invite extends NaticoTask {
  constructor() {
    super("sweep", {
      delay: 600000, //10 minutes this function runs every 10 minutes
      runOnStart: true, //run it when the client is ready
    });
  }

  exec() {
    console.log("Hello");
  }
}
