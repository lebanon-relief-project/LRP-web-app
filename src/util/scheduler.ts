import Container from "typedi";
import { CloudantService, FlashCardService } from "../services";

var CronJob = require("cron").CronJob;

var flashCardService: FlashCardService = Container.get("FlashCardService");

export function scheduleJob(): void {
  var job = new CronJob(
    "00 00 * * *",
    async function () {
      console.log("You will see this message every second!!!");
      try {
        let result = await flashCardService.countSelections();
        if (result) {
          console.log("counting executed successfully");
        }
      } catch (error) {
        console.error(error);
      }
    },
    null,
    false,
    "Europe/London"
  );
  job.start();
}
