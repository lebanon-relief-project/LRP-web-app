import { PsychotherapistResponse } from "src/types/Psychotherapist";

export abstract class PsychotherapistServiceApi {
  abstract getPsychotherapists(): Promise<PsychotherapistResponse>;
  abstract getTherapistsLocations(): Promise<string[]>;
}
