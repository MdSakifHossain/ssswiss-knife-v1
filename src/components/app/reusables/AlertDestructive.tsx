import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon } from "@hugeicons/core-free-icons";
export function AlertDestructive() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center">
      <Alert
        variant="destructive"
        className="w-full p-4 border-x-destructive border-2 rounded-2xl"
      >
        <HugeiconsIcon
          icon={AlertCircleIcon}
          strokeWidth={2}
          className="size-5"
        />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>Try again later.</AlertDescription>
      </Alert>
    </div>
  );
}
