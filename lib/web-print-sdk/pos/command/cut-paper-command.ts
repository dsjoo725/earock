import { CutPaperType, WebPrintSDKCommand, WebPrintSDKFunc } from "../types";
import { cutPaperTypeToNumber } from "../utils";

export type CutPaperCommandOptions = {
  type?: CutPaperType;
};

export class CutPaperCommand implements WebPrintSDKCommand {
  private readonly options: Required<CutPaperCommandOptions>;

  constructor(options: CutPaperCommandOptions = {}) {
    this.options = {
      type: options.type ?? "partial",
    };
  }

  toFunc(): WebPrintSDKFunc {
    const { type } = this.options;
    return {
      cutPaper: [cutPaperTypeToNumber(type)],
    };
  }
}
