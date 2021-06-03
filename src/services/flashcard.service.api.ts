export abstract class FlashCardServiceApi {
  abstract storeSelections(selections: string[]): Promise<boolean>;
}
