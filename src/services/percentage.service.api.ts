import { PercentageResponse } from "src/types/ExperiencePercentage";

export abstract class PercentageServiceApi {
  abstract getPercentage(): Promise<PercentageResponse>;
}
