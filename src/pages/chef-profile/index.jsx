import React, { useState } from "react";
import { Main, Card, Services } from "./style/style";

const ChefProfile = () => {
  const servicos = [
    {
      nome: "Filipe",
      endereço: "Rua 77",
      agenda: "16/02/21",
      mercado: true,
      observação: "100g picanha, 100g maminha,100g linguiça, 20 pão de alho",
    },
    {
      nome: "Gabriel",
      endereço: "Rua 87",
      agenda: "17/02/21",
      mercado: false,
    },
    {
      nome: "Thiago",
      endereço: "Rua 94",
      agenda: "22/02/21",
      mercado: false,
    },
    {
      nome: "Davis",
      endereço: "Rua 46",
      agenda: "03/03/21",
      mercado: false,
    },
  ];

  return (
    <>
      <Main>
        <Card>
          <p>AVALIAÇÕES: 4.5 / 5.0</p>
          <p>SERVIÇOS REALIZADOS: 6</p>
        </Card>
        <Card>
          <p>SERVIÇOS AGENDADOS: {servicos.length}</p>
        </Card>
      </Main>
    </>
  );
};

export default ChefProfile;
