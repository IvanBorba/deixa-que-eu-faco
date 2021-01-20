import { Container, Film, ChefAvatar } from "./styles";
import Rating from "@material-ui/lab/Rating";

const ViewProfile = ({ currentChef }) => {
  return (
    <Container>
      <Film>
        {!currentChef.image ? (
          <ChefAvatar>{currentChef.name[0]}</ChefAvatar>
        ) : (
          <ChefAvatar src={currentChef.image} alt={currentChef.name} />
        )}
        <div id="infos-chef">
          <h1 className="name-chef">{currentChef.name}</h1>
          <p className="about-chef">{currentChef.experience} de experiência</p>
          <p className="about-chef">Especialidade: {currentChef.expertise}</p>
          <div>
            <Rating
              defaultValue={
                currentChef.rate.reduce((acc, current) => acc + current) / 4
              }
              precision={0.5}
              readOnly
            />
          </div>
        </div>
      </Film>
    </Container>
  );
};

export default ViewProfile;
