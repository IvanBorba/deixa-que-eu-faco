import React from "react";
import { Card } from "./style";
import Logo from "../../images/logo/logo.png";

const CardServicesChef = ({ card }) => {
  return (
    <>
      <Card>
        <header>
          <img src={Logo} alt="Logo" />
          <p>{card.name}</p>
          <p>{card.date}</p>
        </header>
        {card.mart ? (
          <div>
            <p>Details: {card.details}</p>
            <footer>
              {card.street}, {card.number}, {card.district}
            </footer>
          </div>
        ) : (
          <p>
            {card.street}, {card.number}, {card.district}
          </p>
        )}
      </Card>
    </>
  );
};

export default CardServicesChef;
