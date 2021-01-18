import React from "react";
import { Box } from "./styled";
import CardServicesChef from "../card";

const Services = ({ list, option }) => {
  const servicesFinished = list.filter((item) => item.status === "finished");
  const servicesWaiting = list.filter((item) => item.status === "waiting");
  const servicesAccepted = list.filter((item) => item.status === "accepted");

  return (
    <Box>
      {/* {option === "finished"
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
          })} */}
      {list.map((item, index) => {
        return <CardServicesChef key={index} card={item} />;
      })}
    </Box>
  );
};

export default Services;
