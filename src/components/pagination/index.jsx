import React from "react";
import { Box } from "./styled";

const Pagination = ({ list, page, setPage }) => {
  const pages = () => {
    // No lugar de services.legnth viria o res da API com a lista de objetos de services
    const totalServices = list.length;
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

  pages();

  console.log("Total Pages: ", pages());
  console.log("Current Page: ", page);

  return (
    <Box>
      <div className="buttons">
        <button onClick={handlePrevious}>ANTERIOR</button>
        <span>{page}</span>
        <button onClick={handleNext}>PRÓXIMO</button>
      </div>
    </Box>
  );
};

export default Pagination;
