"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { printAt, receiptTemplate } from "./utils";

interface Props {
  id?: string;
}
export const PrintForm = ({ id }: Props) => {
  const [number, setNumber] = useState(1);

  const handlePrint = async () => {
    const issuedAt = printAt();

    const payload = receiptTemplate({
      id: number,
      raffleNo: number,
      issuedAt,
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
    <form
      id={id}
      onSubmit={(e) => {
        e.preventDefault();
        handlePrint();
      }}
    >
      <div className="grid gap-2">
        <Label htmlFor="print-number">번호</Label>
        <Input
          id="print-number"
          name="printNumber"
          type="number"
          required
          value={number}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (isNaN(value)) return;
            setNumber(value);
          }}
        />
      </div>
    </form>
  );
};
