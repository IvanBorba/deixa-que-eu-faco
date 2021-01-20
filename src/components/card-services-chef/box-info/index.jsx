import React from "react";
import { Main, Card } from "./styled";

const BoxInfo = ({ list, setOption }) => {
  const servicesFinished = list.filter((item) => item.status === "finished");
  const handleFinished = () => {
    setOption("finished");
    console.log("SERVICES FINISHED: ", servicesFinished);
  };

  const servicesWaiting = list.filter((item) => item.status === "waiting");
  const handleWaiting = () => {
    setOption("waiting");
    console.log("SERVICES WAITING: ", servicesWaiting);
  };

  const servicesAccepted = list.filter((item) => item.status === "accepted");
  const handleAccepted = () => {
    setOption("accepted");
    console.log("SERVICES ACCEPTED: ", servicesAccepted);
  };
  return (
    <Main>
      <Card>
        <p>AVALIAÇÕES: 4.5 / 5.0</p>
        <p>SERVIÇOS REALIZADOS: {servicesFinished.length}</p>
        <button onClick={handleFinished}>visualizar</button>
      </Card>
      <Card>
        <p>SERVIÇOS PENDENTES: {servicesWaiting.length}</p>
        <button onClick={handleWaiting}>visualizar</button>
        <p>SERVIÇOS AGENDADOS: {servicesAccepted.length}</p>
        <button onClick={handleAccepted}>visualizar</button>
      </Card>
    </Main>
  );
};

export default BoxInfo;
