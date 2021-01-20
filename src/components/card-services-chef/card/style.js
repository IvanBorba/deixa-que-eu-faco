import styled from "styled-components";

export const Card = styled.div`
  max-width: 240px;
  min-height: 150px;
  margin: 10px;
  border: 1px solid #9e5642;
  background: #f5e0cc;

  button {
    background: #9e5642;
    color: #eeb963;
    padding: 5px;
    font-size: 12px;
    border: none;
    margin: 0 10px;
  }

  .footer {
    font-size: 13px;
  }

  header {
    background: rgba(158, 86, 66, 0.5);
    padding: 10px;
    display: flex;
    justify-content: space-between;

    img {
      width: 30px;
      height: 30px;
      margin: 3px 0 0 3px;
    }

    p {
      font-size: 13px;
    }
  }

  .details {
    font-size: 13px;
  }

  .main {
    height: 7vh;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    min-width: 600px;

    header {
      img {
        width: 50px;
        height: 50px;
        margin: 6px 0 0 6px;
      }
    }

    button {
      padding: 10px;
    }

    .details {
      font-size: 17px;
    }

    .footer {
      font-size: 15px;
    }

    .header {
      font-size: 19px;
    }

    .main {
      flex-flow: row;
      align-items: flex-end;
      justify-content: space-evenly;
    }
    .buttons {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1024px) {
    min-width: 685px;

    .details {
      font-size: 20px;
    }

    .footer {
      font-size: 18px;
    }

    .header {
      font-size: 22px;
    }
  }

  @media (min-width: 1440px) {
    header {
      img {
        width: 60px;
        height: 60px;
      }
    }

    button {
      padding: 13px;
      font-size: 13px;
    }
    min-width: 820px;
  }
`;

export const Container = styled.div`
  padding: 10px;
  color: #9e5642;

  b {
    color: #323232;
  }

  @media (min-width: 1440px) {
    padding: 15px;
  }
`;
