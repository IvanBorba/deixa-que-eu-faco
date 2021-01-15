import { Container, Film, ChefAvatar } from "./styles";
import Rating from "@material-ui/lab/Rating";

const ViewProfile = ({ currentChef }) => {
  console.log(currentChef);
  return (
    <Container>
      <Film>
        {!currentChef.image ? (
          <ChefAvatar>{currentChef.name[0]}</ChefAvatar>
        ) : (
          <ChefAvatar src={currentChef.image} alt={currentChef.name} />
        )}
        <div id="infos-chef">
          <h1>{currentChef.name}</h1>
          <p>{currentChef.experience} de experiência</p>
          <p>Especialidade: {currentChef.expertise}</p>
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
