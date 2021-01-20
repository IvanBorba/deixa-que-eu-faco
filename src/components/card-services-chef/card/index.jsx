import React from "react";
import { Card, Container } from "./style";
import Logo from "../../../images/logo/logo.png";
import { updateService, deleteService } from "../../../requests";

const CardServicesChef = ({ card }) => {
  const handleRemove = () => {
    // fazer requisição DELETE para deletar serviço da API
    console.log("Serviço removido");
    console.log("Card: ", card);
    deleteService(card.id);
  };

  const handleDate = () => {
    // alterar status da API para accepted
    console.log("Serviço agendado");
    console.log("Card: ", card);
    const accepted = { status: "accepted" };
    updateService(accepted, card.id);
  };

  const handleFinished = () => {
    // alterar status da API para finished
    console.log("Serviço finalizado");
    console.log("Card: ", card);
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
          <Container className="main">
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
          </Container>
        )}
      </Card>
    </>
  );
};

export default CardServicesChef;
