"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { buildStubTemplate, buildTicketTemplate } from "./build-template";
import { PaperInch } from "@/lib/web-print-sdk";

export const PrintTemplateCard = () => {
  const [copies, setCopies] = useState<number>(1);
  const [paperInch, setPaperInch] = useState<PaperInch>(2);

  const handleCopiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value);
    if (!Number.isFinite(next)) return;
    setCopies(next);
  };

  const handlePrintTicket = async () => {
    const payload = buildTicketTemplate({
      id: 1,
      raffleNo: 1,
      paperInch,
    });

    try {
      const response = await fetch("http://127.0.0.1:18080/WebPrintSDK/Printer1", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrintStub = async () => {
    const payload = buildStubTemplate({
      id: 1,
      raffleNo: 1,
      paperInch,
    });

    try {
      const response = await fetch("http://127.0.0.1:18080/WebPrintSDK/Printer1", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>EAROCK</CardTitle>
        <CardDescription>이어락 연말 공연 티켓 생성기</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="grid gap-2">
          <Label htmlFor="copies-input">출력 매수</Label>
          <Input
            id="copies-input"
            type="number"
            inputMode="numeric"
            min={1}
            required
            value={copies}
            onChange={handleCopiesChange}
          />
        </div>
        <Label>용지 폭</Label>
        <div className="flex gap-2">
          <Button
            type="button"
            className="border"
            variant={paperInch === 2 ? "secondary" : "outline"}
            onClick={() => setPaperInch(2)}
          >
            58mm
          </Button>
          <Button
            type="button"
            className="border"
            variant={paperInch === 3 ? "secondary" : "outline"}
            onClick={() => setPaperInch(3)}
          >
            80mm
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full" onClick={() => handlePrintTicket()}>
          티켓 인쇄
        </Button>
        <Button className="w-full" onClick={() => handlePrintStub()}>
          추첨권 인쇄
        </Button>
      </CardFooter>
    </Card>
  );
};
