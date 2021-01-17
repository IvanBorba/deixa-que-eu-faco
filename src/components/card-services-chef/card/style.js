import styled from "styled-components";

export const Card = styled.div`
  padding: 10px;
  background: rgba(251, 242, 234, 0.7);
  width: 250px;
  min-height: 20vh;
  margin: 10px;

  button {
    background: #9e5642;
    color: #eeb963;
    padding: 5px;
    font-size: 12px;
    border: none;
    margin: 0 10px;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 30px;
    height: 30px;
  }

  .details {
    font-size: 13px;
  }

  .main {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;

    p {
      font-size: 14px;
    }

    .waiting {
      margin: 10px;
    }
  }

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;
