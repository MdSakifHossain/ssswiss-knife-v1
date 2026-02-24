const PageHeader = ({
  heading = "Provide Heading",
  description = "Provide Description",
}) => {
  return (
    <div className="mx-auto w-full max-w-xs">
      <h1 className="text-2xl font-black">{heading}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default PageHeader;
