import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  #back {
    height: 45px;
    line-height: 45px;
    .links {
      text-decoration: none;
      color: #9e5642;
      margin: 0 10px;
      padding: 0 10px;
    }
  }
  #hire {
    width: 95vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3vh;
  }
  @media (min-width: 760px) {
    #hire {
      width: 90vw;
    }
  }

  @media (min-width: 1440px) {
    min-height: 710px;
  }
`;

export const BioContainer = styled.div`
  min-height: 45vh;
  width: 95vw;
  margin: 15px auto;

  .title-bio {
    margin: 15px 0;
    font-size: 18px;
  }
  .box-text {
    height: 180px;
    background-color: #f5e0cc88;
    border-radius: 7px;
    .text {
      padding: 10px;
      font-size: 14px;
    }
  }

  @media (min-width: 760px) {
    height: 270px;
    margin: 25px auto;
    width: 90vw;

    .title-bio {
      margin: 25px 0;
      font-size: 30px;
    }
    .box-text {
      height: 200px;
      .text {
        padding: 25px;
        font-size: 18px;
      }
    }
  }
`;

export const ButtonProfile = styled(Button)`
  border-color: #049d13 !important;
  color: #049d13 !important;
  font-weight: bold !important;
  :hover {
    background-color: #049d13 !important;
    color: #ffffff !important;
  }
`;
