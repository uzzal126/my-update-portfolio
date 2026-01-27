"use client";

const FilterButton = ({ category, selectedCategory, handleCategoryClick }) => {
  return (
    <button
      type="button"
      onClick={() => handleCategoryClick(category)}
      className={`block py-2  px-4 sm:px-10 text-sm lg:text-base uppercase font-semibold text-secondary rounded-md transition bg-slate-100 cursor-pointer ${
        selectedCategory === category ? "text-white! bg-primary!" : ""
      }`}
    >
      {category}
    </button>
  );
};

export default FilterButton;
