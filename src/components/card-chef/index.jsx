import { CardContainer, StarRate, ButtonProfile } from "./styles";
// import { useHistory } from "react-router-dom";

const CardChef = ({ currentChef }) => {
  const handleClick = () => {
    console.log(currentChef.id);
  };
  return (
    <CardContainer>
      <div id="image-box">
        {!currentChef.image ? (
          currentChef.name[0]
        ) : (
          <img
            className="image-chef"
            src={currentChef.image}
            alt="Foto do Chef"
          />
        )}
      </div>
      <div id="infos-box">
        <h1 className="infos-chef name-chef">{currentChef.name}</h1>
        <p className="infos-chef specialty-chef">
          Chef {currentChef.expertise}
        </p>
        <div id="infos-footer" className="infos-chef">
          <div className="rate-chef">
            <StarRate />
            <StarRate />
            <StarRate />
            <StarRate />
            <StarRate />
          </div>
          <ButtonProfile onClick={handleClick} variant="outlined">
            ver
          </ButtonProfile>
        </div>
      </div>
    </CardContainer>
  );
};

export default CardChef;
