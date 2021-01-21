import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #f5e0cc;
  display: flex;
  align-items: center;
  justify-content: center;

  #about-page {
    text-align: center;
    .info {
      text-transform: uppercase;
      font-size: 25px;
      font-weight: bold;
      margin: 5px 0;
      color: #9e5642;
    }
    .link {
      margin: 5px 0;
      text-transform: uppercase;
      color: #0036fb;
      font-size: 30px;
      font-weight: bold;
      :hover {
        color: #fff;
      }
      @media (min-width: 760px) {
        font-size: 20px;
      }
    }
  }
`;
