import styled from "styled-components";

export const Main = styled.main`
  .saldo {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 100px auto;
    height: 200px;
    width: 250px;
    background: rgba(245, 224, 204, 0.3);
  }
`;

export const HeaderTemp = styled.div`
  height: 12vh;
  width: 100vw;
  margin-bottom: 70px;
  background: #d6b8b0;
`;

export const Card = styled.div`
  background: #f5e0cc;
  padding: 10px;
  width: 250px;
  margin: 20px auto;
  text-align: center;

  p {
    font-weight: 200;
    font-size: 20px;
  }

  button {
    background: none;
    border: none;
    color: #9e5642;
  }
`;

export const Services = styled.div`
  padding: 10px;
  width: 250px;
  margin: 20px auto;
  background: #404832;
`;

export const FooterTemp = styled.div`
  height: 12vh;
  width: 100vw;
  background: #9e5642;
`;
