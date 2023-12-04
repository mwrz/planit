import { Checkbox, FormControlLabel } from "@mui/material";
import { TickTickTaskData } from "../TickTick.types";

interface TickTickTaskProps {
  task: TickTickTaskData;
}

export const TickTickTask = ({ task }: TickTickTaskProps) => {
  return <FormControlLabel control={<Checkbox />} label={task.title} />;
};
