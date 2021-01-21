import styled from "styled-components";

export const Main = styled.div`
  background: rgba(251, 242, 234, 0.7);
  h1 {
    text-align: center;
    color: #9f5742;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  color: #9f5742;

  .mission {
    text-align: center;
    margin-bottom: 15px;
    min-height: 160px;

    p {
      margin: 10px;
      font-weight: 200;
    }

    .button {
      text-decoration: none;
      color: #9e5642;
      border: 1px solid #9e5642;
      padding: 5px;
    }
  }

  img {
    width: 100vw;
    height: 30vh;
  }

  @media (min-width: 768px) {
    img {
      width: 100vw;
      height: auto;
      margin-bottom: 10px;
    }

    .mission {
      margin: 20px 0 30px;

      p {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-flow: row;

    img {
      width: 50vw;
    }

    .mission {
      width: 40vw;

      p {
        margin: 20% 0;
        font-size: 25px;
      }

      .button {
        padding: 10px;
        font-size: 20px;
        border: 3px solid;
      }
    }
  }
`;
