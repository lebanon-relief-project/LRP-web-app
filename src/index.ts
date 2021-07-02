import "reflect-metadata";
import Container from "typedi";
import { ApiServer } from "./server";
import { scheduleJob } from "./util/scheduler";

const apiServer = Container.get(ApiServer);

apiServer.start();

scheduleJob();
