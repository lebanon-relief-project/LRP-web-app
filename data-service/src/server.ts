import * as express from "express";
import { AddressInfo } from "net";
import * as npmPackage from "../package.json";
import { LoggerApi } from "./logger";

import http = require("http");

import Container, { Inject } from "typedi";
import controllers from "./controllers";
import { useExpressServer, useContainer } from "routing-controllers";

const config = npmPackage.config || {
  protocol: "http",
  host: "localhost",
  port: 3001,
  "context-root": "/",
};
const configApiContext = config["context-root"];

export class ApiServer {
  private readonly app: express.Application;
  private server: http.Server = null;
  public PORT: number = +process.env.PORT || npmPackage.config.port;

  constructor(
    @Inject("logger")
    private logger: LoggerApi
  ) {
    if (!logger) throw new Error("Server: logger injection failed");

    useContainer(Container);

    this.app = express();
    this.logger.apply(this.app);

    useExpressServer(this.app, {
      cors: true,
      controllers: controllers,
    });
  }

  /**
   * Start the server
   * @returns {Promise<any>}
   */
  public async start(): Promise<ApiServer> {
    return new Promise<ApiServer>((resolve, reject) => {
      this.server = this.app.listen(this.PORT, (err: any) => {
        if (err) {
          return reject(err);
        }

        const addressInfo = this.server.address() as AddressInfo;

        const address =
          addressInfo.address === "::" ? "localhost" : addressInfo.address;

        // tslint:disable-next-line:no-console
        console.log(`Listening to http://${address}:${addressInfo.port}`);

        return resolve(this);
      });
    });
  }

  /**
   * Stop the server (if running).
   * @returns {Promise<boolean>}
   */
  public async stop(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.server) {
        this.server.close(() => {
          return resolve(true);
        });
      } else {
        return resolve(false);
      }
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}
