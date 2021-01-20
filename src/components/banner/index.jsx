import React from "react";
import { Main } from "./styled";

const Banner = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const expertise = user.expertise;
  console.log("USER LOGED: ", expertise);
  return (
    <Main>
      {expertise === "Árabe" ? (
        <img src="https://babelpaulistana.blogfolha.uol.com.br/files/2019/12/razancomidaarabe.jpg" />
      ) : expertise === "Japonesa" ? (
        <img src="https://www.agoda.com/wp-content/uploads/2018/07/Experience-Tokyo_food-and-drink_Sushi_Japan.jpg" />
      ) : expertise === "Churrasco" ? (
        <img src="https://www.milium.com.br/wp-content/uploads/2019/11/Banner-Blog-Post-Milium-Nov-03.jpg" />
      ) : expertise === "Doces" ? (
        <img src="https://www.dlojavirtual.com/wp-content/uploads/2016/04/doces-para-vender.jpg" />
      ) : expertise === "Vegana" ? (
        <img src="https://mfacdn.cachefly.net/chooseveg/sites/2/2018/11/Healthy-Foods-1440x570.jpg" />
      ) : expertise === "Vegetariana" ? (
        <img src="https://www.brewinghappiness.com/wp-content/uploads/2019/03/featured-image-1.jpg" />
      ) : (
        expertise === "Chinesa" && (
          <img src="https://www.thespruceeats.com/thmb/8s5f39NMWBrpbvGLPr2dzMpFWG8=/2733x2733/smart/filters:no_upscale()/chinese-take-out-473784604-57d31f7f3df78c5833464853.jpg" />
        )
      )}
    </Main>
  );
};

export default Banner;