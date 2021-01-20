import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const BoxAlert = styled.div`
  padding: 200px 0;
  margin: 10px;
  color: #aa4658;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 25px;
  }

  @media (min-width: 1440px) {
    padding: 300px;
    font-size: 30px;
  }
`;
