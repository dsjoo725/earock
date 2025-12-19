import { WebPrintSDKPayload } from "@/lib/web-print-sdk";

export async function requestPrint(payload: WebPrintSDKPayload) {
  const res = await fetch("http://127.0.0.1:18080/WebPrintSDK/Printer1", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Print failed (${res.status})`);
  }

  return res;
}
