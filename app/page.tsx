import { PrintForm } from "@/components/print-form/print-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>EAROCK</CardTitle>
          <CardDescription>번호를 입력해 주세요</CardDescription>
        </CardHeader>
        <CardContent>
          <PrintForm id="print-form" />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" form="print-form">
            인쇄
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
