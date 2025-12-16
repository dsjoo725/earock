export type PaperInch = 2 | 3;

const LINE_LENGTH_BY_INCH: Record<PaperInch, number> = {
  2: 32,
  3: 42,
};

export const LINE_BY_INCH: Record<PaperInch, string> = {
  2: "=".repeat(LINE_LENGTH_BY_INCH[2]),
  3: "=".repeat(LINE_LENGTH_BY_INCH[3]),
};

export const DASH_BY_INCH: Record<PaperInch, string> = {
  2: "-".repeat(LINE_LENGTH_BY_INCH[2]),
  3: "-".repeat(LINE_LENGTH_BY_INCH[3]),
};

export function receiptTemplate(params: { id: number; raffleNo: number; paperInch: PaperInch }) {
  const raffleNoStr = String(params.raffleNo).padStart(4, "0");

  const line = LINE_BY_INCH[params.paperInch] + "\n";
  const dash = DASH_BY_INCH[params.paperInch] + "\n";

  return {
    id: params.id,
    functions: {
      fun1: { printText: [line, 0, 0, false, false, false, 0, 0] },
      fun2: { printText: ["EAROCK LIVE\n", 1, 1, true, false, false, 0, 1] },
      fun3: { printText: ["2025.12.20 / 팡타개라지\n", 0, 0, false, false, false, 0, 1] },
      fun4: { printText: [dash, 0, 0, false, false, false, 0, 0] },
      fun5: { printText: ["\n", 0, 0, false, false, false, 0, 0] },
      fun6: { printText: ["추 첨 번 호\n", 0, 0, true, false, false, 0, 1] },
      fun7: { printText: [raffleNoStr + "\n", 2, 2, true, false, false, 0, 1] },
      fun8: { printText: ["\n", 0, 0, false, false, false, 0, 0] },
      fun9: { printText: [dash, 0, 0, false, false, false, 0, 0] },
      fun10: {
        printText: ["※ 추첨은 공연 중 진행됩니다\n", 0, 0, false, false, false, 0, 0],
      },
      fun11: {
        printText: ["※ 분실 시 재발행되지 않습니다\n\n", 0, 0, false, false, false, 0, 0],
      },
      fun12: {
        printText: ["[셋리스트 QR코드]\n", 0, 0, false, false, false, 0, 1],
      },
      fun13: {
        printQRCode: [
          "https://www.instagram.com/p/DSJKomYEq05/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          1,
          1,
          4,
          2,
        ],
      },
      fun14: { printText: [line, 0, 0, false, false, false, 0, 0] },
      fun15: { printText: ["GOOD LUCK :)\n\n\n", 0, 0, false, false, false, 0, 0] },
      fun16: {
        cutPaper: [1],
      },
    },
  };
}
