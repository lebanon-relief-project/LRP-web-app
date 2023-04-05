import {
  Get,
  InternalServerError,
  JsonController,
  QueryParam,
} from "routing-controllers";
import { LoggerApi } from "../logger";
import { PsychotherapistService } from "../services";
import { Inject } from "typedi";
import { PsychotherapistResponse } from "src/types/Psychotherapist";
import { FilterQueryParam, FilterType } from "src/types/Filter";
import { sanitizeFilter } from "../util/filter-util";

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
  async getPsychotherapists(
    @QueryParam("filter") filter?: FilterQueryParam
  ): Promise<PsychotherapistResponse> {
    try {
      if (filter)
        return this.service.getPsychotherapists(sanitizeFilter(filter));
      else return this.service.getPsychotherapists();
    } catch (exception) {
      throw new InternalServerError(`failed to get Psychotherapists`);
    }
  }
}
