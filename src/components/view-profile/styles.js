import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import churrasco from "./churrasco.jpg";

export const Container = styled.div`
  height: 280px;
  background-image: url(${churrasco});
  background-position: center;
  border-top: solid 1px #9e5642;
  border-bottom: solid 1px #9e5642;
`;

export const Film = styled.div`
  height: 280px;
  display: flex;
  align-items: center;
  background-color: #f5e0ccae;
`;

export const ChefAvatar = styled(Avatar)`
  background-color: #9e5642 !important;
  color: #f5e0cc !important;
  width: 200px !important;
  height: 200px !important;
  font-size: 150px !important;
  margin: 0 25px;
`;
