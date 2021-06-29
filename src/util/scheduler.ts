import Container from "typedi";
import { CloudantService, FlashCardService } from "../services";
import { CronJob } from "cron";

var flashCardService: FlashCardService = Container.get("FlashCardService");

export function scheduleJob(): void {
  var job = new CronJob(
    "* 22 2 * * *",
    async function () {
      console.log("counting started");
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
  console.log("job was scheduled successfully");
}
