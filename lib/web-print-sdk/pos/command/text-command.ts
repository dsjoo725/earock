import { FontType, TextAlign, WebPrintSDKCommand, WebPrintSDKFunc } from "../types";
import { fontTypeToNumber, textAlignToNumber } from "../utils";

export type TextCommandOptions = {
  text: string;
  horizontal?: number;
  vertical?: number;
  bold?: boolean;
  invert?: boolean;
  underline?: boolean;
  fontType?: FontType;
  align?: TextAlign;
};

export class TextCommand implements WebPrintSDKCommand {
  private readonly options: Required<TextCommandOptions>;

  constructor(options: TextCommandOptions) {
    this.options = {
      text: options.text,
      horizontal: options.horizontal ?? 0,
      vertical: options.vertical ?? 0,
      bold: options.bold ?? false,
      invert: options.invert ?? false,
      underline: options.underline ?? false,
      fontType: options.fontType ?? "A",
      align: options.align ?? "left",
    };
  }

  toFunc(): WebPrintSDKFunc {
    const { text, horizontal, vertical, bold, invert, underline, fontType, align } = this.options;

    return {
      printText: [
        text,
        horizontal,
        vertical,
        bold,
        invert,
        underline,
        fontTypeToNumber(fontType),
        textAlignToNumber(align),
      ],
    };
  }
}
