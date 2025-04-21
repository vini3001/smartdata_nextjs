import { LinearProgress } from "@mui/material";
import { useState } from "react";
import { Container, ContainerTime } from "./styles";

interface TimerProps {
  initTimerSeccond: number;
}

export default function Timer(props: TimerProps): React.ReactNode {
  const { initTimerSeccond } = props;

  const [timer] = useState(initTimerSeccond);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (timer === 0) return;
  //     setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  console.log("timer", timer);

  return (
    <Container>
      <ContainerTime>
        <span>Tempo restante: </span>
        <span>00:00</span>
      </ContainerTime>
      <LinearProgress variant="determinate" value={100} />
    </Container>
  );
}
