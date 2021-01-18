import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Churrasco",
    imgPath:
      "https://www.milium.com.br/wp-content/uploads/2019/11/Banner-Blog-Post-Milium-Nov-03.jpg",
  },
  {
    label: "Japonesa",
    imgPath:
      "https://www.agoda.com/wp-content/uploads/2018/07/Experience-Tokyo_food-and-drink_Sushi_Japan.jpg",
  },
  {
    label: "Chinesa",
    imgPath:
      "https://www.thespruceeats.com/thmb/8s5f39NMWBrpbvGLPr2dzMpFWG8=/2733x2733/smart/filters:no_upscale()/chinese-take-out-473784604-57d31f7f3df78c5833464853.jpg",
  },
  {
    label: "Vegetariana",
    imgPath:
      "https://www.brewinghappiness.com/wp-content/uploads/2019/03/featured-image-1.jpg",
  },
  {
    label: "Árabe",
    imgPath:
      "https://babelpaulistana.blogfolha.uol.com.br/files/2019/12/razancomidaarabe.jpg",
  },
  {
    label: "Vegana",
    imgPath:
      "https://mfacdn.cachefly.net/chooseveg/sites/2/2018/11/Healthy-Foods-1440x570.jpg",
  },
  {
    label: "Doces",
    imgPath:
      "https://www.dlojavirtual.com/wp-content/uploads/2016/04/doces-para-vender.jpg",
  },
];

const Carousel = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <AutoPlaySwipeableViews
      axis="x"
      index={activeStep}
      onChangeIndex={handleStepChange}
    >
      {tutorialSteps.map((step, index) => (
        <div key={step.label}>
          {Math.abs(activeStep - index) <= 2 ? (
            <img
              src={step.imgPath}
              alt={step.label}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );
};

export default Carousel;
