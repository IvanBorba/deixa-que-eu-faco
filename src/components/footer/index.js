import Logo from "../logo";
import { Div, UpperFooter, LowerFooter, AboutPage } from "./styles";

const Footer = () => {
  return (
    <Div>
      <UpperFooter>
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          style={{
            position: "absolute",
            top: "1em",
            left: "calc(50% - 1.5em)",
            width: "3em"
          }}
        />
        <AboutPage href="#">SOBRE NÓS</AboutPage>
      </UpperFooter>
      <LowerFooter />
    </Div>
  );
};

export default Footer;
