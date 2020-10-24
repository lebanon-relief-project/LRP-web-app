import { Get, JsonController, Param } from "routing-controllers";
import { LoggerApi } from "../logger";
import { HelloWorldService } from "../services";
import { Inject } from "typedi";

@JsonController("/hello")
export class HelloWorldController {
  @Inject()
  service: HelloWorldService;

  @Inject("logger")
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child("HelloWorldController");
  }

  @Get()
  async sayHelloToUnknownUser(): Promise<string> {
    this.logger.info("Saying hello to someone");
    return this.service.greeting();
  }

  @Get()
  async sayHello(@Param("name") name: string): Promise<string> {
    this.logger.info(`Saying hello to ${name}`);
    return this.service.greeting(name);
  }
}
