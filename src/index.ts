import "reflect-metadata";
import Container from "typedi";
import { ApiServer } from "./server";
import { scheduleJob } from "./util/scheduler";

const apiServer = Container.get(ApiServer);

apiServer.start();

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  scheduleJob();
}
