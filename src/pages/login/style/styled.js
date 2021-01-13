import styled from "styled-components";

export const Main = styled.main`
  display: flex;
`;

export const Pelicula = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.6);

  @media (min-width: 1024px) {
    height: 100vh;
    width: 60vw;
  }
`;

export const Box = styled.div`
  height: 90vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const BoxContent = styled.div`
  height: 406px;
  width: 280px;
  background: rgba(245, 224, 204, 0.8);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: #9e5642;
    font-weight: 400;
  }

  .input {
    margin: 8px 25px;
  }

  .switch {
    color: #9e5642;
    margin: 0 17px;
  }

  button {
    background: #9e5642;
    color: #f7f7f7;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-weight: bold;
    margin: 10px 25px;
  }

  @media (min-width: 1024px) {
    height: 456px;
    width: 330px;

    .input {
      margin: 8px 50px;
    }

    .switch {
      margin: 0 42px;
    }

    button {
      margin: 10px 50px;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  .links {
    text-decoration: none;
    color: #9e5642;
    padding: 10px;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  color: #9e5642;
  font-weight: 700;

  p {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-weight: 300;
    font-size: 15px;
    margin: 5px 0;
  }
`;
