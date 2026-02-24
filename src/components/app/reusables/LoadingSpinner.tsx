import { Spinner } from "@/components/ui/spinner";

const LoadingSpinner = () => {
  return (
    <div className="flex-1 w-full flex items-center justify-center">
      <Spinner className="size-6" />
    </div>
  );
};

export default LoadingSpinner;
