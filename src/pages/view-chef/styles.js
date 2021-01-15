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
    text-align: end;
    width: 90vw;
    margin: 0 auto;
  }
`;

export const BioContainer = styled.div`
  height: 270px;
  width: 90vw;
  margin: 25px auto;

  .title-bio {
    margin: 25px 0;
  }
  .box-text {
    height: 180px;
    width: 80%;
    background-color: #f5e0cc88;
    border-radius: 7px;
    .text {
      padding: 25px;
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
