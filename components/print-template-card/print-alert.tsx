import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export const PrintSuccessAlert = () => {
  return (
    <Alert>
      <CheckCircle2Icon />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
    </Alert>
  );
};
