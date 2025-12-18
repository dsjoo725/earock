import { CutPaperType, FontType, QRCodeEccLevel, QRCodeModel, TextAlign } from "../types";

export function textAlignToNumber(align: TextAlign): number {
  switch (align) {
    case "left":
      return 0;
    case "center":
      return 1;
    case "right":
      return 2;
  }
}

export const fontTypeToNumber = (font: FontType): number => {
  switch (font) {
    case "A":
      return 0;
    case "B":
      return 1;
    case "C":
      return 2;
  }
};

export const qrCodeModelToNumber = (model: QRCodeModel): 0 | 1 => {
  switch (model) {
    case "model1":
      return 0;
    case "model2":
      return 1;
  }
};

export const qrCodeEccLevelToNumber = (level: QRCodeEccLevel): 0 | 1 | 2 | 3 => {
  switch (level) {
    case "L":
      return 0;
    case "M":
      return 1;
    case "Q":
      return 2;
    case "H":
      return 3;
  }
};

export const cutPaperTypeToNumber = (type: CutPaperType): 0 | 1 => {
  switch (type) {
    case "partial":
      return 0;
    case "feed":
      return 1;
  }
};
