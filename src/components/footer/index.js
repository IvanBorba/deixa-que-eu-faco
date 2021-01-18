import {
  Div,
  UpperFooter,
  LowerFooter,
  AboutPage,
  SocialLogo,
  ContactInfo,
} from "./styles";

const Footer = () => {
  return (
    <Div>
      <UpperFooter>
        <img
          alt="logo"
          src={process.env.PUBLIC_URL + "/logo.png"}
          style={{
            position: "absolute",
            top: "1em",
            left: "calc(50% - 1.5em)",
            width: "3em",
          }}
        />
        <AboutPage href="#">SOBRE NÓS</AboutPage>
      </UpperFooter>
      <LowerFooter>
        <div>
          <SocialLogo src={process.env.PUBLIC_URL + "/instagram.svg"} />
          <SocialLogo src={process.env.PUBLIC_URL + "/linkedin.svg"} />
          <SocialLogo src={process.env.PUBLIC_URL + "/spotify.svg"} />
        </div>
        <ContactInfo>
          <p>(00) 0000-0000</p>
          <p>contato@deixaqueeufaco.com</p>
        </ContactInfo>
      </LowerFooter>
    </Div>
  );
};

export default Footer;
