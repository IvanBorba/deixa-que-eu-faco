import React, { useState } from "react";
import { Main, Card } from "./style/style";
import CardServicesChef from "../../components/card-services-chef";

const ChefProfile = () => {
  const [page, setPage] = useState(1);
  const [option, setOption] = useState(false);
  const [listServices, setListServices] = useState([]);
  const id = localStorage.getItem("userData");
  console.log("ID: ", JSON.parse(id));
  // Usar ternário com 'option' na requisição para filtrar status (EX: `${baseUrl}/services?_page=${page}&_limit=2&chefeId=${chefId}${option === undefined ? "finished" : option ? "accepted" : "waiting"}`)
  const services = [
    {
      name: "Filipe",
      street: "Rua Jacaré Nogueira",
      number: 21,
      district: "Crocodilo Mattos",
      date: "16/02/21",
      status: "waiting",
      mart: true,
      details: "100g picanha, 100g maminha,100g linguiça, 20 pão de alho",
    },
    {
      name: "Gabriel",
      street: "Rua Turquia Holandesa",
      number: 22,
      district: "Santos Lemes",
      date: "17/02/21",
      status: "rejected",
      mart: false,
    },
    {
      name: "Thiago",
      street: "Rua Maria Joaquina",
      number: 23,
      district: "Cirillo",
      date: "22/02/21",
      status: "accepted",
      mart: false,
    },
    {
      name: "Davis",
      street: "Rua Java",
      number: 404,
      district: "Agate Eme Ele",
      date: "03/03/21",
      status: "finished",
      mart: false,
    },
    {
      name: "Gabriel",
      street: "Rua Turquia Holandesa",
      number: 22,
      district: "Santos Lemes",
      date: "17/02/21",
      status: "waiting",
      mart: false,
    },
    {
      name: "Thiago",
      street: "Rua Maria Joaquina",
      number: 23,
      district: "Cirillo",
      date: "22/02/21",
      status: "accepted",
      mart: false,
    },
  ];

  const pages = () => {
    // No lugar de services.legnth viria o res da API com a lista de objetos de services
    const totalServices = services.length;
    console.log("Total services: ", totalServices);

    const totalPages = totalServices / 2;

    if (totalServices % 2 === 1) {
      return totalPages + 0.5;
    }

    return totalPages;
  };

  const handlePrevious = () => {
    // teria um state com o valor da página em que está com o padrão 1
    if (page === 1) {
      setPage(pages());
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page === pages()) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  const servicesFinished = services.filter(
    (item) => item.status === "finished"
  );
  const handleFinished = () => {
    setOption(undefined);
    console.log(servicesFinished);
  };

  const servicesWaiting = services.filter((item) => item.status === "waiting");
  const handleWaiting = () => {
    setOption(false);
    console.log(servicesWaiting);
  };

  const servicesAccepted = services.filter(
    (item) => item.status === "accepted"
  );
  const handleAccepted = () => {
    setOption(true);
    console.log(servicesAccepted);
  };

  console.log("Total Pages: ", pages());
  console.log("Current Page: ", page);

  return (
    <>
      <Main>
        <p className="saldo">Saldo: R$100,00</p>
        <Card>
          <p>AVALIAÇÕES: 4.5 / 5.0</p>
          <p>SERVIÇOS REALIZADOS: 6</p>
          <button onClick={handleFinished}>visualizar</button>
        </Card>
        <Card>
          <p>SERVIÇOS PENDENTES: 2</p>
          <button onClick={handleWaiting}>visualizar</button>
          <p>SERVIÇOS AGENDADOS: {services.length}</p>
          <button onClick={handleAccepted}>visualizar</button>
        </Card>
        <div className="services">
          {option === undefined
            ? servicesFinished.map((item, index) => {
                return <CardServicesChef key={index} card={item} />;
              })
            : option
            ? servicesAccepted.map((item, index) => {
                return <CardServicesChef key={index} card={item} />;
              })
            : servicesWaiting.map((item, index) => {
                return <CardServicesChef key={index} card={item} />;
              })}

          {services.length > 2 && (
            <div className="buttons">
              <button onClick={handlePrevious}>ANTERIOR</button>
              <span>{page}</span>
              <button onClick={handleNext}>PRÓXIMO</button>
            </div>
          )}
        </div>
      </Main>
    </>
  );
};

export default ChefProfile;
