import React from "react";
import { Main, Card } from "./styled";

const BoxInfo = ({ list, setOption, rate }) => {
  const servicesFinished = list.filter((item) => item.status === "finished");
  const handleFinished = () => {
    setOption("finished");
    console.log("SERVICES FINISHED: ", servicesFinished);
  };

  const myRate = () => {
    const finalRate = (
      rate.reduce((acc, value) => acc + value) /
      (rate.length * 2)
    ).toString();
    if (finalRate.length > 1) {
      return finalRate.slice(0, 3);
    } else {
      return `${finalRate}.0`;
    }
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
        <p>MINHA NOTA: {!rate ? "0.0" : myRate()} / 5.0</p>
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
