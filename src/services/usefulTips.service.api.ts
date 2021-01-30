import { UsefulTipsResponse } from "src/types/UsefulTips";

export abstract class UsefulTipsServiceApi {
  abstract getUsefulTips(): Promise<UsefulTipsResponse>;
}
