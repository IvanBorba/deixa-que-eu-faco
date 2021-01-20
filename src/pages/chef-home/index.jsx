import React, { useState, useEffect } from "react";
import { Main } from "./style";
import BoxInfo from "../../components/card-services-chef/box-info";
import Services from "../../components/card-services-chef/services-status";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useSelector, useDispatch } from "react-redux";
import { getChefServicesThunk } from "../../store/modules/services/thunk";

const ChefHome = () => {
  const [option, setOption] = useState("waiting");
  const dispatch = useDispatch();
  const services = useSelector((state) => state.chefServices);

  useEffect(() => {
    dispatch(getChefServicesThunk());
  }, []);

  console.log("Services: ", services);

  return (
    <>
      <Header />
      <Main>
        <h2 className="saldo">
          Saldo: <span>R$100,00</span>
        </h2>
        <BoxInfo list={services} setOption={setOption} option={option} />
        <Services list={services} option={option} />
      </Main>
      <Footer />
    </>
  );
};

export default ChefHome;
