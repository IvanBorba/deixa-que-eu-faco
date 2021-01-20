import styled from "styled-components";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: center;
  min-height: 25vh;
  @media (min-width: 760px) {
    min-height: 50vh;
  }
`;

export const Expertise = styled.div`
  height: 35px;
  padding-left: 15px;
  color: #9e5642;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #9e5642;
`;

export const ArrowRight = styled(NavigateNextIcon)`
  color: #9e5642;
`;
