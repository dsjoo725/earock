/**
 * 문자열을 출력합니다.
 *
 * @param text 출력할 문자열
 * @param horizontal 문자 가로 배율
 * @param vertical 문자 세로 배율
 * @param bold 굵게
 * @param invert 역상
 * @param underline 밑줄
 * @param fontType 폰트 종류(0: Font A, 1: Font B, 2: Font C)
 * @param alignment 정렬 방식(0: 좌측 정렬, 1: 중앙 정렬, 2: 우측 정렬)
 */
type PrintTextArgs = [
  text: string,
  horizontal: number,
  vertical: number,
  bold: boolean,
  invert: boolean,
  underline: boolean,
  fontType: number,
  alignment: number
];

/**
 * QR 코드를 출력합니다.
 *
 * @param data 바코드 데이터
 * @param model QR코드 타입
 * @param alignment 정렬 방식(0: 좌측 정렬, 1: 중앙 정렬, 2: 우측 정렬)
 * @param moduleSize 모듈 크기(1~7)
 * @param eccLevel 에러 보정율(0: Level L 7%, 1: Level M 15%, 2: Level Q 25%, 3: Level H 30%)
 */
type PrintQRCodeArgs = [
  data: string,
  model: number,
  alignment: number,
  moduleSize: number,
  eccLevel: number
];

/**
 * 용지를 커팅합니다.
 *
 * @param type 커팅 타입(0: 제자리컷, 1: 피드컷)
 */
type CutPaperArgs = [type: number];

export type WebPrintSDKFunc =
  | { printText: PrintTextArgs }
  | { printQRCode: PrintQRCodeArgs }
  | { cutPaper: CutPaperArgs };
