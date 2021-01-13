import styled from "styled-components";

export const Div = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100vw;
`;

export const UpperFooter = styled.footer`
  background-color: #f5e0cc;
  height: 5em;
  width: 100%;
`;

export const LowerFooter = styled.footer`
  align-items: center;
  background-color: #9e5642;
  display: flex;
  flex-direction: row;
  height: 6em;
  justify-content: center;
  width: 100%;
`;

export const ContactPage = styled.a`
  align-self: center;
  color: #9e5642;
  position: absolute;
  right: 2em;
  text-decoration: none;
  top: 2em;
`;
