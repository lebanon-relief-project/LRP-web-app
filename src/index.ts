import "reflect-metadata";
import Container from "typedi";
import { ApiServer } from "./server";

const apiServer = Container.get(ApiServer);

apiServer.start();
