"use client";

import { useState } from "react";
import { toast } from "sonner";

import type { PaperInch } from "@/lib/web-print-sdk";

import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

import { buildStubTemplate, buildTicketTemplate } from "./build-template";
import { requestPrint } from "./request-print";

export const PrintTemplateCard = () => {
  const [paperInch, setPaperInch] = useState<PaperInch>(2);
  const [raffleNo, setRaffleNo] = useState<number>(1);

  const handlePrintTicket = async () => {
    const payload = buildTicketTemplate({
      id: Date.now(),
      raffleNo,
      paperInch,
    });

    toast.promise(requestPrint(payload), {
      loading: "티켓 출력 중입니다...",
      success: "출력이 완료되었습니다",
      error: "출력 중 오류가 발생했습니다",
    });
  };

  const handlePrintStub = async () => {
    const payload = buildStubTemplate({
      id: Date.now(),
      raffleNo,
      paperInch,
    });

    toast.promise(requestPrint(payload), {
      loading: "추첨권 출력 중입니다...",
      success: "출력이 완료되었습니다",
      error: "출력 중 오류가 발생했습니다",
    });
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>EAROCK</CardTitle>
        <CardDescription>이어락 연말 공연 티켓 발행기</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="grid gap-2">
          <Label>용지 크기</Label>
          <RadioGroup
            value={String(paperInch)}
            onValueChange={(v) => setPaperInch(Number(v) as PaperInch)}
            className="flex gap-4"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="2" id="inch-2" />
              <Label htmlFor="inch-2">2인치</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="3" id="inch-3" />
              <Label htmlFor="inch-3">3인치</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="raffleNo">응모 번호</Label>
          <Input
            id="raffleNo"
            type="number"
            min={1}
            value={raffleNo}
            onChange={(e) => setRaffleNo(Number(e.target.value))}
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-1">
        <Button className="w-full" onClick={handlePrintTicket}>
          티켓 인쇄
        </Button>
        <Button className="w-full" onClick={handlePrintStub}>
          추첨권 인쇄
        </Button>
      </CardFooter>
    </Card>
  );
};
