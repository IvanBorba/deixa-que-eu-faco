import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  h1 {
    margin: 15px;
  }
`;

export const BoxContent = styled.div`
  margin: 25px;

  @media (min-width: 1024px) {
    min-height: 500px;
  }
`;

export const BoxAlert = styled.div`
  color: #aa4658;
  text-align: center;
  margin: 50px;

  @media (min-width: 768px) {
    font-size: 25px;
  }

  @media (min-width: 1440px) {
    padding: 300px;
    font-size: 30px;
    margin: auto;
  }
`;
