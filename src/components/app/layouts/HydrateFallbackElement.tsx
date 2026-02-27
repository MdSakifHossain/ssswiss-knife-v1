import LoadingSpinner from "../reusables/LoadingSpinner";

const HydrateFallbackElement = () => {
  return (
    <div className="h-svh flex items-center justify-between">
      <LoadingSpinner />
    </div>
  );
};

export default HydrateFallbackElement;
