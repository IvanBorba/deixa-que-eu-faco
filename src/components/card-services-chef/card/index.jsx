import React from "react";
import { Card } from "./style";
import Logo from "../../../images/logo/logo.png";

const CardServicesChef = ({ card }) => {
  const handleRemove = () => {
    // fazer requisição DELETE para deletar serviço da API
    console.log("Serviço removido");
    console.log("Card: ", card);
  };

  const handleDate = () => {
    // alterar status da API para accepted
    console.log("Serviço agendado");
  };

  const handleFinished = () => {
    // alterar status da API para finished
    console.log("Serviço finalizado");
  };
  return (
    <>
      <Card>
        <header>
          <img src={Logo} alt="Logo" />
          <p>{card.clientName}</p>
          <p>{card.date}</p>
          <p>{card.status}</p>
        </header>
        {card.mart ? (
          <div>
            <p className="details">
              <b>Detalhes:</b> {card.details}
            </p>
            <footer className="main">
              <p>
                {card.street}, {card.number}, {card.district}.
              </p>
              {card.status === "waiting" ? (
                <div className="waiting">
                  <button onClick={handleRemove}>RECUSAR</button>
                  <button onClick={handleDate}>ACEITAR</button>
                </div>
              ) : (
                card.status === "accepted" && (
                  <div>
                    <button onClick={handleFinished}>FINALIZAR</button>
                  </div>
                )
              )}
            </footer>
          </div>
        ) : (
          <div className="main">
            <p>
              {card.street}, {card.number}, {card.district}.
            </p>
            {card.status === "waiting" ? (
              <div className="waiting">
                <button onClick={handleRemove}>RECUSAR</button>
                <button onClick={handleDate}>ACEITAR</button>
              </div>
            ) : (
              card.status === "accepted" && (
                <div>
                  <button onClick={handleFinished}>FINALIZAR</button>
                </div>
              )
            )}
          </div>
        )}
      </Card>
    </>
  );
};

export default CardServicesChef;
