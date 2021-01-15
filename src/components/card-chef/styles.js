import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const CardContainer = styled.div`
  margin: 15px auto;
  height: 80px;
  width: 95vw;
  background-color: #fcf5ee;
  display: flex;
  color: #333;

  #image-box {
    text-align: center;
    font-size: 40px;
    line-height: 80px;
    width: 60px;
    background-color: #9e5642;
    color: #fcf5ee;
    .image-chef {
      width: 60px;
      height: 80px;
      object-fit: cover;
    }
  }
  #infos-box {
    width: 100%;
    .infos-chef {
      margin: 5px 5px;
      padding: 0;
    }
    .name-chef {
      font-size: 18px;
    }
    .specialty-chef {
      font-size: 14px;
    }
    #infos-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .rate-chef {
        height: 24px;
      }
    }
  }

  @media (min-width: 320px) {
    width: 300px;
    #image-box {
      width: 80px;
      .image-chef {
        width: 80px;
      }
    }
    #infos-box {
      width: 210px;
    }
  }

  @media (min-width: 760px) {
    height: 150px;
    width: 440px;
    #image-box {
      font-size: 60px;
      line-height: 150px;
      width: 150px;
      .image-chef {
        width: 150px;
        height: 150px;
      }
    }
    #infos-box {
      width: 300px;
      .infos-chef {
        height: 45px;
        margin: 5px 10px 0 15px;
      }
      .name-chef {
        font-size: 30px;
      }
      .specialty-chef {
        font-size: 18px;
      }
      #infos-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .rate-chef {
          height: 30px;
        }
      }
    }
  }
`;

export const ButtonProfile = styled(Button)`
  height: 24px;
  border-color: #9e5642;
  color: #9e5642;
  :hover {
    border-color: #426c9e;
    color: #426c9e;
  }
  @media (min-width: 760px) {
    height: 30px;
    width: 90px;
  }
`;
