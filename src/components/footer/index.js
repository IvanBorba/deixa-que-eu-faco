import { Div, UpperFooter, LowerFooter, ContactPage } from "./styles";

const Footer = () => {
  return (
    <Div>
      <UpperFooter>
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          style={{
            width: "3em",
            position: "absolute",
            top: "1em",
            left: "calc(50% - 1.5em)"
          }}
        />
        <ContactPage href="#">CONTATO</ContactPage>
      </UpperFooter>
      <LowerFooter />
    </Div>
  );
};

export default Footer;
