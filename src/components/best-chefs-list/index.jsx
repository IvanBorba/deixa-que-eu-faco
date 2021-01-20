import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardChef from "../card-chef";
import { getUsersThunk } from "../../store/modules/users/thunk";

const BestChefs = ({ chefs, showTopFive }) => {
  console.log(chefs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersThunk);
  }, [dispatch]);

  const topThree = () => {
    let list = [];
    for (let i = 0; i < 3; i++) {
      let firsts = chefs[i];
      chefs.forEach((actual) => {
        console.log(actual);
        if (actual.rate) {
          let reducedRate = actual.rate.reduce((acc, number) => acc + number);
          if (
            reducedRate > firsts.rate.reduce((acc, number) => acc + number) &&
            !list.includes(actual)
          ) {
            firsts = actual;
          }
        }
      });
      console.log(firsts);
      list.push(firsts);
    }
    return list;
  };

  const topFive = () => {
    let list = [];
    for (let i = 0; i < 5; i++) {
      let firsts = chefs[i];
      chefs.forEach((actual) => {
        console.log(actual);
        if (actual.rate) {
          let reducedRate = actual.rate.reduce((acc, number) => acc + number);
          if (
            reducedRate > firsts.rate.reduce((acc, number) => acc + number) &&
            !list.includes(actual)
          ) {
            firsts = actual;
          }
        }
      });
      console.log(firsts);
      list.push(firsts);
    }
    return list;
  };

  return (
    <>
      {showTopFive
        ? topFive().map((actual, index) => {
            return <CardChef currentChef={actual} key={index} />;
          })
        : topThree().map((actual, index) => {
            return <CardChef currentChef={actual} key={index} />;
          })}
    </>
  );
};

export default BestChefs;
