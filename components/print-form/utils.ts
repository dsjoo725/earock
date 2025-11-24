export function receiptTemplate(params: { id: number; raffleNo: number; issuedAt: string }) {
  const raffleNoStr = String(params.raffleNo).padStart(6, "0");

  return {
    id: params.id,
    functions: {
      func1: {
        printText: ["********************************\n", 0, 0, false, false, false, 0, 0],
      },
      func2: {
        printText: ["EAROCK EVENT\n", 1, 1, true, false, false, 0, 1],
      },
      func3: {
        printText: ["********************************\n\n", 0, 0, false, false, false, 0, 0],
      },
      func4: {
        printText: ["[ 경품번호 / RAFFLE NO. ]\n\n", 0, 0, true, false, false, 0, 1],
      },
      func5: {
        printText: [`${raffleNoStr}\n\n`, 2, 2, true, false, false, 0, 1],
      },
      func6: {
        printText: [`발행일시 : ${params.issuedAt}\n`, 0, 0, false, false, false, 0, 0],
      },
      func7: {
        printText: [
          "안내사항\n" +
            "- 본 영수증은 경품 추첨용입니다.\n" +
            "- 행사 종료 전까지 꼭 보관해 주세요.\n" +
            "- 재발급이 어렵습니다.\n\n",
          0,
          0,
          false,
          false,
          false,
          0,
          0,
        ],
      },
      func8: {
        printText: [
          "GOOD LUCK :)\n********************************\n\n",
          0,
          0,
          true,
          false,
          false,
          0,
          0,
        ],
      },
      func9: {
        cutPaper: [1],
      },
    },
  };
}

export function printAt(date: Date = new Date()): string {
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const HH = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");

  return `${yyyy}-${MM}-${dd} ${HH}:${mm}`;
}
