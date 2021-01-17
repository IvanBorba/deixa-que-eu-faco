import styled from "styled-components";

export const Main = styled.main`
  .saldo {
    text-align: center;
  }

  .services {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .buttons {
    width: 100vw;
    display: flex;
    justify-content: space-between;

    button {
      margin: 0 14vw 10px;
      padding: 2px;
      background: none;
      border: none;
    }
  }
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
