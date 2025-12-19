import { PaperInch, PosTemplateBuilder } from "@/lib/web-print-sdk";

export function buildTicketTemplate(params: {
  id: number;
  raffleNo: number;
  paperInch: PaperInch;
}) {
  const { id, paperInch, raffleNo } = params;
  const raffleNoStr = String(raffleNo).padStart(4, "0");

  const builder = new PosTemplateBuilder({ id, paperInch })
    .line()
    .text({ text: "이어락 연말 공연\n", horizontal: 1, vertical: 1, bold: true, align: "center" })
    .text({ text: "2025.12.20 6PM / 팡타개라지\n", align: "center" })
    .line({ char: "-" })
    .text({ text: "\n" })
    .text({ text: "추 첨 번 호\n", bold: true, align: "center" })
    .text({ text: raffleNoStr + "\n", horizontal: 2, vertical: 2, bold: true, align: "center" })
    .text({ text: "\n" })
    .line({ char: "-" })
    .text({ text: "※ 추첨은 공연 중 진행됩니다\n" })
    .text({ text: "※ 분실 시 재발행되지 않습니다\n\n" })
    .text({ text: "[셋리스트]\n", align: "center" })
    .qr({
      data: "https://www.instagram.com/p/DSJKomYEq05/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      model: "model2",
      align: "center",
      eccLevel: "Q",
      moduleSize: 4,
    })
    .line()
    .text({ text: "EAROCK :)\n\n" })
    .cut({ type: "feed" });

  return builder.build();
}

export function buildStubTemplate(params: { id: number; raffleNo: number; paperInch: PaperInch }) {
  const { id, paperInch, raffleNo } = params;
  const raffleNoStr = String(raffleNo).padStart(4, "0");

  const builder = new PosTemplateBuilder({ id, paperInch })
    .text({ text: "[추첨권]\n" })
    .line()
    .text({ text: "\n" })
    .text({ text: "추 첨 번 호\n", bold: true, align: "center" })
    .text({ text: raffleNoStr + "\n", horizontal: 2, vertical: 2, bold: true, align: "center" })
    .text({ text: "\n" })
    .line()
    .text({ text: "EAROCK :)\n\n" })
    .cut({ type: "feed" });

  return builder.build();
}
