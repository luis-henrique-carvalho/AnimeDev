import styled from "styled-components";

export const Card = styled.div` 
  background-image: url(${(props) => `${props.img}`});
  background-size: cover;
  border-radius: 12px;
  position: relative;
  display: block;
  width: 188px;
  height: 254px;
`;
