import Cards from "@/components/utils/Cards";
import StaggerGroup from "@/components/animations/StaggerGroup";
import { projects } from "@/data/projects";

type ProjectsListProps = {
  limit?: number;
};

const ProjectsList = ({ limit }: ProjectsListProps) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <StaggerGroup className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {displayedProjects.map((project) => (
        <Cards
          key={project.title}
          image={project.image}
          alt={project.alt}
          category={project.category}
          title={project.title}
          description={project.description}
          tech={project.tech}
          href={project.href}
        />
      ))}
    </StaggerGroup>
  );
};

export default ProjectsList;
