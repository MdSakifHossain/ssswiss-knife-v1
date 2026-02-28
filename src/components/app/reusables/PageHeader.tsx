const PageHeader = ({ heading = "", description = "" }) => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-black">{heading}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default PageHeader;
