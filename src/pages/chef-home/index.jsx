import React, { useState } from "react";
import { Main } from "./style/style";
import BoxInfo from "../../components/card-services-chef/box-info";
import Services from "../../components/card-services-chef/services-status";
import Pagination from "../../components/pagination";

const ChefHome = () => {
  const [page, setPage] = useState(1);
  const [option, setOption] = useState("waiting");
  const [listServices, setListServices] = useState([]); // setar na requisão a listagem de serviços solicitada
  const userLoged = localStorage.getItem("userData");
  const id = JSON.parse(userLoged).id;
  // Usar ternário com 'option' na requisição para filtrar status (EX: `${baseUrl}/services?_page=${page}&_limit=2&chefeId=${chefId}${option === undefined ? "finished" : option ? "accepted" : "waiting"}`)

  const services = [
    {
      clientName: "Filipe",
      street: "Rua Jacaré Nogueira",
      number: 21,
      district: "Crocodilo Mattos",
      date: "16/02/21",
      status: "waiting",
      mart: true,
      id: 1,
      details: "100g picanha, 100g maminha,100g linguiça, 20 pão de alho",
    },
    {
      clientName: "Gabriel",
      street: "Rua Turquia Holandesa",
      number: 22,
      district: "Santos Lemes",
      date: "17/02/21",
      status: "rejected",
      mart: false,
      id: 2,
    },
    {
      clientName: "Thiago",
      street: "Rua Maria Joaquina",
      number: 23,
      district: "Cirillo",
      date: "22/02/21",
      status: "accepted",
      mart: false,
      id: 3,
    },
    {
      clientName: "Davis",
      street: "Rua Java",
      number: 404,
      district: "Agate Eme Ele",
      date: "03/03/21",
      status: "finished",
      mart: false,
      id: 4,
    },
    {
      clientName: "Gabriel",
      street: "Rua Turquia Holandesa",
      number: 22,
      district: "Santos Lemes",
      date: "17/02/21",
      status: "waiting",
      mart: false,
      id: 2,
    },
    {
      clientName: "Thiago",
      street: "Rua Maria Joaquina",
      number: 23,
      district: "Cirillo",
      date: "22/02/21",
      status: "accepted",
      mart: false,
      id: 3,
    },
  ];

  console.log("UserLoged: ", JSON.parse(userLoged));
  console.log("Id: ", id);

  return (
    <>
      <Main>
        <p className="saldo">Saldo: R$100,00</p>
        <BoxInfo list={services} setOption={setOption} />
        <Services list={services} option={option} />
        <Pagination list={services} page={page} setPage={setPage} />
      </Main>
    </>
  );
};

export default ChefHome;
