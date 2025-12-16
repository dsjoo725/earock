"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { receiptTemplate } from "./utils";
import { usePrintNumber } from "./use-print-number";

interface Props {
  id?: string;
}
export const PrintForm = ({ id }: Props) => {
  const { number, setNumber } = usePrintNumber();

  const handlePrint = async () => {
    const payload = receiptTemplate({
      id: number,
      raffleNo: number,
      paperInch: 3,
    });

    try {
      const response = await fetch("http://127.0.0.1:18080/WebPrintSDK/Printer1", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setNumber((prev) => prev + 1);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      id={id}
      onSubmit={(e) => {
        e.preventDefault();
        handlePrint();
      }}
    >
      <div className="grid gap-2">
        <Label htmlFor="print-number">추첨 번호</Label>
        <Input
          id="print-number"
          name="printNumber"
          type="number"
          required
          value={number}
          onChange={(e) => {
            const parsed = Number(e.target.value);
            if (isNaN(parsed)) return;
            setNumber(parsed);
          }}
        />
      </div>
    </form>
  );
};
