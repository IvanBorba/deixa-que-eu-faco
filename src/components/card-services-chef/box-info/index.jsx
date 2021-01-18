import React from "react";
import { Card } from "./styled";

const BoxInfo = ({ list, setOption }) => {
  const servicesFinished = list.filter((item) => item.status === "finished");
  const handleFinished = () => {
    setOption("finished");
    console.log(servicesFinished);
  };

  const servicesWaiting = list.filter((item) => item.status === "waiting");
  const handleWaiting = () => {
    setOption("waiting");
    console.log(servicesWaiting);
  };

  const servicesAccepted = list.filter((item) => item.status === "accepted");
  const handleAccepted = () => {
    setOption("accepted");
    console.log(servicesAccepted);
  };
  return (
    <>
      <Card>
        <p>AVALIAÇÕES: 4.5 / 5.0</p>
        <p>SERVIÇOS REALIZADOS: 6</p>
        <button onClick={handleFinished}>visualizar</button>
      </Card>
      <Card>
        <p>SERVIÇOS PENDENTES: 2</p>
        <button onClick={handleWaiting}>visualizar</button>
        <p>SERVIÇOS AGENDADOS: {list.length}</p>
        <button onClick={handleAccepted}>visualizar</button>
      </Card>
    </>
  );
};

export default BoxInfo;