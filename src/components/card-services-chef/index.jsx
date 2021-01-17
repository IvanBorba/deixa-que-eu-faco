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
                  <button>RECUSAR</button>
                  <button>ACEITAR</button>
                </div>
              ) : (
                card.status === "accepted" && (
                  <div>
                    <button>FECHAR</button>
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
                <button>RECUSAR</button>
                <button>ACEITAR</button>
              </div>
            ) : (
              card.status === "accepted" && (
                <div>
                  <button>FECHAR</button>
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
