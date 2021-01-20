import { CardContainer, ButtonProfile } from "./styles";
import { useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";

const CardChef = ({ currentChef, isCenter = false }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/view-chef/${currentChef.id}`);
  };
  return (
    <CardContainer center={isCenter}>
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
          Especialidade: {currentChef.expertise}
        </p>
        <div id="infos-footer" className="infos-chef">
          <div className="rate-chef">
            <div>
              <Rating
                defaultValue={
                  currentChef.rate?.reduce((acc, number) => acc + number) /
                  (currentChef.rate?.length * 2)
                }
                precision={0.5}
                readOnly
              />
            </div>
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
