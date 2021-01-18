import React, { useState, useEffect } from "react";
import { Main } from "./style/style";
import BoxInfo from "../../components/card-services-chef/box-info";
import Services from "../../components/card-services-chef/services-status";
import Pagination from "../../components/pagination";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useSelector, useDispatch } from "react-redux";
import { getChefServicesThunk } from "../../store/modules/services/thunk";

const ChefHome = () => {
  const [page, setPage] = useState(1);
  const [option, setOption] = useState("waiting");

  const dispatch = useDispatch();
  const services = useSelector((state) => state.chefServices);

  useEffect(() => {
    dispatch(getChefServicesThunk(page, option));
  }, [option, page]);

  console.log("Services: ", services);

  return (
    <>
      <Header />
      <Main>
        <p className="saldo">Saldo: R$100,00</p>
        <BoxInfo list={services} setOption={setOption} option={option} />
        <Services list={services} option={option} />
        <Pagination list={services} page={page} setPage={setPage} />
      </Main>
      <Footer />
    </>
  );
};

export default ChefHome;
