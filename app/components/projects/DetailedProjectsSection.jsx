import SectionTitle from "@/app/components/elements/SectionTitle";
import DetailedProjectCard from "@/app/components/projects/DetailedProjectCard";
import projectsData from "@/public/data/projects-detailed.json";

const DetailedProjectsSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container">
        <SectionTitle
          title="Featured Projects"
          subTitle="Explore my recent work and personal projects showcasing various technologies and solutions"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <DetailedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedProjectsSection;
