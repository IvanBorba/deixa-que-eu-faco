import React from "react";
import { Box, BoxContent, BoxAlert } from "./styled";
import CardServicesChef from "../card";

const Services = ({ list, option }) => {
  const servicesFinished = list.filter((item) => item.status === "finished");
  const servicesWaiting = list.filter((item) => item.status === "waiting");
  const servicesAccepted = list.filter((item) => item.status === "accepted");

  const nothingInfoFinished = (service) => {
    if (option === "finished" && service.length === 0) {
      return true;
    }

    return false;
  };

  const nothingInfoAccepted = (service) => {
    if (option === "accepted" && service.length === 0) {
      return true;
    }

    return false;
  };

  const nothingInfoWaiting = (service) => {
    if (option === "waiting" && service.length === 0) {
      return true;
    }

    return false;
  };

  return (
    <Box>
      <h1>
        Serviços{" "}
        {option === "finished"
          ? "Realizados"
          : option === "accepted"
          ? "Agendados"
          : option === "waiting" && "Pendentes"}
      </h1>

      <BoxContent>
        {option === "finished"
          ? servicesFinished.map((item, index) => {
              return <CardServicesChef key={index} card={item} />;
            })
          : option === "accepted"
          ? servicesAccepted.map((item, index) => {
              return <CardServicesChef key={index} card={item} />;
            })
          : option === "waiting" &&
            servicesWaiting.map((item, index) => {
              return <CardServicesChef key={index} card={item} />;
            })}
        {nothingInfoWaiting(servicesWaiting) ? (
          <BoxAlert>Nenhum serviço pendente</BoxAlert>
        ) : nothingInfoAccepted(servicesAccepted) ? (
          <BoxAlert>Nenhum serviço agendado</BoxAlert>
        ) : (
          nothingInfoFinished(servicesFinished) && (
            <BoxAlert>Nenhum serviço finalizado</BoxAlert>
          )
        )}
      </BoxContent>
    </Box>
  );
};

export default Services;
