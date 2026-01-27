"use client";

import { useState } from "react";

import SectionTitle from "@/app/components/elements/SectionTitle";
import FilterButton from "@/app/components/projects/FilterButton";
import ProjectCard from "@/app/components/projects/ProjectCard";
import projects from "@/public/data/projects.json";

const ProjectFilterComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("react");

  const categories = ["all", "react", "vue", "html"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems =
    selectedCategory === "all"
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-15">
      <div className="container">
        <SectionTitle
          title="ThemeForest Projects"
          subTitle="Browse through some of my latest works in ThemeForest"
        />
        <div className="flex justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              selectedCategory={selectedCategory}
              handleCategoryClick={handleCategoryClick}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilterComponent;
