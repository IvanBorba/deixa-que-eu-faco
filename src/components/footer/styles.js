import styled from "styled-components";

export const Div = styled.div`
  clear: both;
  display: flex;
  flex-direction: column;
  position: relative;
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
  justify-content: space-between;
  width: 100%;
`;

export const AboutPage = styled.a`
  align-self: center;
  color: #9e5642;
  position: absolute;
  right: 2em;
  text-decoration: none;
  top: 2em;
`;

export const SocialLogo = styled.img`
  width: 1.5em;
  margin-left: 2em;
`;

export const ContactInfo = styled.address`
  color: #f5e0cc;
  font-style: normal;
  text-align: right;
  padding-right: 2em;
`;
