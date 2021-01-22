import React from "react";
import { Card, Container } from "./style";
import Logo from "../../../images/logo/logo.png";
import { updateService, deleteService } from "../../../requests";

const CardServicesChef = ({ card }) => {
  const handleRemove = () => {
    deleteService(card.id);
  };

  const handleDate = () => {
    const accepted = { status: "accepted" };
    updateService(accepted, card.id);
  };

  const handleFinished = () => {
    const accepted = { status: "finished" };
    updateService(accepted, card.id);
  };

  return (
    <>
      <Card>
        <header>
          <img src={Logo} alt="Logo" />
          <p className="header">{card.clientName}</p>
          <p className="header">{card.date}</p>
        </header>
        {card.market ? (
          <Container>
            <p className="details">
              <b>Detalhes:</b> {card.marketProducts}
            </p>
            <p className="details">
              <b>Pessoas:</b> {card.guests}
            </p>
            <p className="details">
              <b>Preço:</b> {card.price}
            </p>
            <footer className="main">
              <p className="footer">{card.address}.</p>
              {card.status === "waiting" ? (
                <div className="buttons">
                  <button onClick={handleRemove}>RECUSAR</button>
                  <button onClick={handleDate}>ACEITAR</button>
                </div>
              ) : (
                card.status === "accepted" && (
                  <div className="buttons">
                    <button onClick={handleFinished}>FINALIZAR</button>
                  </div>
                )
              )}
            </footer>
          </Container>
        ) : (
          <Container>
            <p className="details">
              <b>Pessoas:</b> {card.guests}
            </p>
            <p className="details">
              <b>Preço:</b> {card.price}
            </p>
            <div className="main">
              <p className="footer">{card.address}.</p>
              {card.status === "waiting" ? (
                <div className="waiting">
                  <button onClick={handleRemove}>RECUSAR</button>
                  <button onClick={handleDate}>ACEITAR</button>
                </div>
              ) : (
                card.status === "accepted" && (
                  <div className="buttons">
                    <button onClick={handleFinished}>FINALIZAR</button>
                  </div>
                )
              )}
            </div>
          </Container>
        )}
      </Card>
    </>
  );
};

export default CardServicesChef;
