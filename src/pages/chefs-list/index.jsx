import CardChef from "../../components/card-chef";
import axios from "axios";
import { useState, useEffect } from "react";

const ChefList = () => {
  const [allChefs, setAllChefs] = useState([]);
  useEffect(() => {
    axios
      .get("https://api-deixa-que-eu-faco.herokuapp.com/users")
      .then((res) => setAllChefs(res.data));
  }, []);
  return (
    <div>
      {allChefs
        .filter(({ isChef }) => isChef)
        .map((currentChef, index) => (
          <CardChef key={index} currentChef={currentChef} />
        ))}
    </div>
  );
};

export default ChefList;
