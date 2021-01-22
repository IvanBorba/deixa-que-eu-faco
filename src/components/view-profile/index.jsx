import { Container, Film, ChefAvatar } from "./styles";
import Rating from "@material-ui/lab/Rating";

const ViewProfile = ({ currentChef }) => {
  const currentChefRate =
    currentChef.rate?.reduce((acc, current) => acc + current) /
      currentChef.rate?.length /
      2 || [];

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
          <div id="chef-rate">
            <Rating defaultValue={currentChefRate} precision={0.5} readOnly />
            <p>({!currentChef.rate ? "0" : currentChef.rate.length})</p>
          </div>
          {!currentChef.rate && (
            <p className="no-avaliable">* Ainda não avaliado</p>
          )}
        </div>
      </Film>
    </Container>
  );
};

export default ViewProfile;
