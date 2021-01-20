import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-flow: row;
    justify-content: space-evenly;
  }
`;

export const Card = styled.div`
  background: #f5e0cc;
  padding: 10px;
  width: 250px;
  height: 150px;
  margin: 10px 0;
  text-align: center;

  p {
    font-weight: 200;
    font-size: 20px;
    margin: 11px;
  }

  button {
    background: none;
    border: none;
    color: #9e5642;
  }
`;
