import { Get, InternalServerError, JsonController } from "routing-controllers";
import { LoggerApi } from "../logger";
import { PsychotherapistService } from "../services";
import { Inject } from "typedi";
import { PsychotherapistResponse } from "src/types/Psychotherapist";

@JsonController("/api/psychotherapists")
export class PsychotherapistController {
  @Inject()
  service: PsychotherapistService;

  @Inject("logger")
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child("PsychotherapistsController");
  }

  @Get()
  async getPsychotherapists(): Promise<PsychotherapistResponse> {
    try {
      return this.service.getPsychotherapists();
    } catch (exception) {
      throw new InternalServerError(`failed to get Psychotherapists`);
    }
  }
}
