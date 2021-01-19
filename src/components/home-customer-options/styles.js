import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 260px;
  padding: 15px 0;
  background-color: #f5e0cc;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 320px) {
    height: 300px;
  }

  @media (min-width: 760px) {
    height: 350px;
  }
`;

export const Ball = styled.div`
  text-align: center;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  background-color: #9e5642;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #ce8612;
    `};

  .links {
    font-weight: 500;
    display: block;
    color: #fff;
    text-decoration: none;
  }

  @media (min-width: 320px) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: 760px) {
    width: 250px;
    height: 250px;
  }
`;
