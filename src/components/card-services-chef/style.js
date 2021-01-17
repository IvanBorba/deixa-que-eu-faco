import styled from "styled-components";

export const Card = styled.div`
  padding: 10px;
  background: rgba(251, 242, 234, 0.7);
  width: 250px;
  margin: 10px;

  header {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 30px;
    height: 30px;
  }

  footer {
    font-size: 12px;
  }
`;
