import styled from "styled-components";

export const Container = styled.div`
  #box-welcome {
    width: 90vw;
    margin: 15px auto;
    .welcome-message {
      margin: 5px 0;
      color: #9e5642;
      text-align: center;
    }
    .message-two {
      text-align: end;
    }
  }
  .title-best-chefs {
    text-align: center;
    margin: 10px 0;
    font-size: 16px;
  }

  @media (min-width: 320px) {
    #box-welcome {
      width: 75vw;
      .message-one {
        font-size: 35px;
      }
      .message-two {
        font-size: 24px;
      }
    }
    .title-best-chefs {
      font-size: 22px;
    }
  }

  @media (min-width: 760px) {
    #box-welcome {
      margin: 20px auto;
      .message-one {
        font-size: 64px;
      }
      .message-two {
        font-size: 44px;
        text-align: end;
      }
    }
    .title-best-chefs {
      text-align: start;
      margin: 15px 30px;
      font-size: 30px;
    }
    #best-chefs {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
  }
`;
