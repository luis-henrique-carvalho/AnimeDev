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

export const CardDetails = styled.div`
  .view__container {
    /* border: red 1px solid; */
    width: 100%;
    height: 555px;
    display: flex;
    flex-direction: row;
  }

  .view__media {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 920px;
    height: 555px;
    gap: 42px;
    z-index: 2;
  }

  .view__media h1 {
    position: relative;
    top: 17px;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
  }

  .view__media > div {
    background-image: url(${(props) => `${props.imgView}`});
    background-size: cover;
    background-position: 50% 30%;
    width: 920px;
    height: 475px;
  }

  .view__media > div > div {
    width: 920px;
    height: 475px;
    background: linear-gradient(
      0deg,
      rgba(21, 27, 38, 0.4),
      rgba(21, 27, 38, 0.4)
    );
  }

  .view__aside {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 20px;
    text-align: start;
  }

  .asside__titulo {
    display: flex;
    align-items: center;
    height: 80px;
  }

  .asside__titulo h2 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: var(--color-gray);
  }

  .aside_card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 475px;
    text-decoration:none;
  }

  .aside_card > a {
    display: flex;
    flex-direction: row;
    height: 110px;
    background-color: var(--color-dark-200);
    text-decoration:none;
    color: var(--color-white)
  }

  .aside_card img {
    width: 100px;
    height: 100%;
  }
  .aside__title {
    width: 190px;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  .aside__title h2 {
    padding: 0 20px;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }

  .aside__title p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.07em;
    text-align:start;
    padding: 0 20px;
    color: var(--color-gray)
  }
`;
