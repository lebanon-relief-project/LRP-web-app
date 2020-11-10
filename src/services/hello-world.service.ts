import { HelloWorldApi } from "./hello-world.api";
import { LoggerApi } from "../logger";
import { Inject, Service } from "typedi";

@Service()
export class HelloWorldService implements HelloWorldApi {
  private logger: LoggerApi;

  constructor(
    @Inject("logger")
    logger: LoggerApi
  ) {
    this.logger = logger.child("HelloWorldService");
  }

  async greeting(name: string = "World"): Promise<string> {
    this.logger.info(`Generating greeting for ${name}`);
    return `Hello, ${name}!`;
  }
}
