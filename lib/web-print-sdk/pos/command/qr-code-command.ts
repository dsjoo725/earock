import {
  QRCodeEccLevel,
  QRCodeModel,
  QRCodeModuleSize,
  TextAlign,
  WebPrintSDKCommand,
  WebPrintSDKFunc,
} from "../types";
import { qrCodeEccLevelToNumber, qrCodeModelToNumber, textAlignToNumber } from "../utils";

export type QRCodeCommandOptions = {
  data: string;
  model?: QRCodeModel;
  align?: TextAlign;
  moduleSize?: QRCodeModuleSize;
  eccLevel?: QRCodeEccLevel;
};

export class QRCodeCommand implements WebPrintSDKCommand {
  private readonly options: Required<QRCodeCommandOptions>;

  constructor(options: QRCodeCommandOptions) {
    this.options = {
      data: options.data,
      model: options.model ?? "model2",
      align: options.align ?? "left",
      moduleSize: options.moduleSize ?? 3,
      eccLevel: options.eccLevel ?? "M",
    };
  }

  toFunc(): WebPrintSDKFunc {
    const { data, model, align, moduleSize, eccLevel } = this.options;
    return {
      printQRCode: [
        data,
        qrCodeModelToNumber(model),
        textAlignToNumber(align),
        moduleSize,
        qrCodeEccLevelToNumber(eccLevel),
      ],
    };
  }
}
