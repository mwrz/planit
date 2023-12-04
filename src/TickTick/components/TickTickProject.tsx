import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { TickTickTask } from "./TickTickTask";
import { TickTickProjectData, TickTickProjectWithTasksData } from "../TickTick.types";
import { useTickTickApi } from "../hooks/useTickTickApi";

interface TickTickProjectProps {
  project: TickTickProjectData;
}

export const TickTickProject = ({ project }: TickTickProjectProps) => {
  const { authorizedTickTickRequest } = useTickTickApi();
  const [projectData, setProjectData] = useState<TickTickProjectWithTasksData>();

  useEffect(() => {
    authorizedTickTickRequest(`https://ticktick.com/open/v1/project/${project.id}/data`, setProjectData);
  }, [authorizedTickTickRequest, project.id]);

  return (
    <Accordion disableGutters>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>{project.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {projectData?.tasks?.map((task) => (
            <TickTickTask task={task} key={task.id} />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};
