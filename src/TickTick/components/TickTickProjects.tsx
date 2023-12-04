import { useEffect, useState } from "react";
import { TickTickProject } from "./TickTickProject";
import { TickTickProjectData } from "../TickTick.types";
import { useTickTickApi } from "../hooks/useTickTickApi";

export const TickTickProjects = () => {
  const { authorizedTickTickRequest } = useTickTickApi();
  const [projects, setProjects] = useState<TickTickProjectData[]>([]);

  useEffect(() => {
    authorizedTickTickRequest("https://ticktick.com/open/v1/project", setProjects);
  }, [authorizedTickTickRequest]);

  return (
    <>
      {projects?.map((project) => (
        <TickTickProject key={project.id} project={project} />
      ))}
    </>
  );
};
