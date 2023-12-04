import { TickTickAuth } from "./TickTickAuth";
import { TickTickProjects } from "./TickTickProjects";
import { TickTickWrapper } from "../TickTick.styles";
import { useTickTickToken } from "../context/TickTickTokenContext";

export const TickTick = () => {
  const { tickTickToken } = useTickTickToken();

  return <TickTickWrapper>
    {!!tickTickToken ? (
      <TickTickProjects />
    ) : (
      <TickTickAuth />
    )}
  </TickTickWrapper>;
};
