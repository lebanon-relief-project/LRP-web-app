import "reflect-metadata";
import Container from "typedi";
import { ApiServer } from "./server";
import { scheduleJob } from "./util/scheduler";

const apiServer = Container.get(ApiServer);

apiServer.start();

if (process.env.NODE_ENV === "production") {
  scheduleJob();
}
