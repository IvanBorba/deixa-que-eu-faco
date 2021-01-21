import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import variascomidas from "../../images/variascomidas.jpg";

export const Container = styled.div`
  height: 150px;
  background-image: url(${variascomidas});
  background-position: center;

  @media (min-width: 760px) {
    height: 280px;
  }
`;

export const Film = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  background-color: #f5e0ccae;

  #infos-chef {
    .name-chef {
      font-size: 18px;
      margin: 5px 0;
    }
    .about-chef {
      margin: 5px 0;
      font-size: 14px;
    }
    #chef-rate {
      display: flex;
      align-items: center;
      color: #333;
    }
  }

  @media (min-width: 320px) {
    #infos-chef {
      .name-chef {
        font-size: 20px;
      }
      .about-chef {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 760px) {
    height: 280px;
    #infos-chef {
      .name-chef {
        font-size: 35px;
      }
      .about-chef {
        font-size: 20px;
      }
    }
  }
`;

export const ChefAvatar = styled(Avatar)`
  background-color: #9e5642 !important;
  color: #f5e0cc !important;
  width: 80px !important;
  height: 80px !important;
  font-size: 55px !important;
  margin: 0 10px;

  @media (min-width: 320px) {
    width: 100px !important;
    height: 100px !important;
    font-size: 75px !important;
  }

  @media (min-width: 760px) {
    width: 200px !important;
    height: 200px !important;
    font-size: 150px !important;
    margin: 0 25px;
  }
`;
