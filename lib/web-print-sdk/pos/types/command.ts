import { WebPrintSDKFunc } from "./func";

export interface WebPrintSDKCommand {
  toFunc(): WebPrintSDKFunc;
}
