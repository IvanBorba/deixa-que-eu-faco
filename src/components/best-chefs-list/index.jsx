import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardChef from "../card-chef";
import { getUsersThunk } from "../../store/modules/users/thunk";

const BestChefs = ({ chefs, showTopFive }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersThunk);
  }, [dispatch]);

  const topThree = () => {
    let list = [];
    for (let i = 0; i < 3; i++) {
      let firsts = chefs[i];
      chefs.forEach((actual) => {
        const { rate } = actual;
        if (rate) {
          let reducedRate =
            rate.reduce((acc, number) => acc + number) / rate.length;
          if (
            reducedRate >
              firsts.rate.reduce((acc, number) => acc + number) / rate.length &&
            !list.includes(actual)
          ) {
            firsts = actual;
          }
        }
      });
      list.push(firsts);
    }
    return list;
  };

  const topFive = () => {
    let list = [];
    for (let i = 0; i < 5; i++) {
      let firsts = chefs[i];
      chefs.forEach((actual) => {
        const { rate } = actual;
        if (rate) {
          let reducedRate =
            rate.reduce((acc, number) => acc + number) / rate.length;
          if (
            reducedRate >
              firsts.rate.reduce((acc, number) => acc + number) / rate.length &&
            !list.includes(actual)
          ) {
            firsts = actual;
          }
        }
      });
      list.push(firsts);
    }
    return list;
  };

  return (
    <>
      {showTopFive
        ? topFive().map((actual, index) => {
            return <CardChef currentChef={actual} key={index} isCenter />;
          })
        : topThree().map((actual, index) => {
            return <CardChef currentChef={actual} key={index} isCenter />;
          })}
    </>
  );
};

export default BestChefs;
