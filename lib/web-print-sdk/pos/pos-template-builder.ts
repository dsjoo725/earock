import {
  CutPaperCommand,
  CutPaperCommandOptions,
  QRCodeCommand,
  QRCodeCommandOptions,
  TextCommand,
  TextCommandOptions,
} from "./command";
import { MAX_COLS_BY_INCH } from "./config";
import { PaperInch, WebPrintSDKCommand, WebPrintSDKFunc } from "./types";

type WebPrintSDKPayload = {
  id: number;
  functions: Record<string, WebPrintSDKFunc>;
};

export class PosTemplateBuilder {
  private readonly commands: WebPrintSDKCommand[] = [];

  private readonly id: number;
  private readonly paperInch: PaperInch;

  constructor(meta: { id: number; paperInch: PaperInch }) {
    this.id = meta.id;
    this.paperInch = meta.paperInch;
  }

  private add(cmd: WebPrintSDKCommand) {
    this.commands.push(cmd);
    return this;
  }

  text(option: TextCommandOptions) {
    return this.add(new TextCommand(option));
  }

  qr(option: QRCodeCommandOptions) {
    return this.add(new QRCodeCommand(option));
  }

  cut(option?: CutPaperCommandOptions) {
    return this.add(new CutPaperCommand(option));
  }

  line(option: { char: string } = { char: "=" }) {
    const { char } = option;
    const text = char.repeat(MAX_COLS_BY_INCH[this.paperInch]) + "\n";
    return this.add(new TextCommand({ text }));
  }

  build(): WebPrintSDKPayload {
    const functions = this.commands.reduce<Record<string, WebPrintSDKFunc>>((acc, cmd, index) => {
      acc[`func${index + 1}`] = cmd.toFunc();
      return acc;
    }, {});

    return { id: this.id, functions };
  }
}
