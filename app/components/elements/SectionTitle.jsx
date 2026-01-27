const SectionTitle = (props) => {
  const { title, subTitle } = props;
  return (
    <div className="text-center mb-10 sm:mb-15 md:px-15">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-3 text-primary font-semibold">
        {title}
      </h2>
      <h3 className="text-xl font-normal text-primary">{subTitle}</h3>
    </div>
  );
};

export default SectionTitle;
