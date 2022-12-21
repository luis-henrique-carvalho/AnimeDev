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
  .view__media > div {
    width: 920px;
    height: 475px;
    background: linear-gradient(
      0deg,
      rgba(21, 27, 38, 0.4),
      rgba(21, 27, 38, 0.4)
    );
  }

  .view__media div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 30%;
    z-index: 1;
    position: relative;
    opacity: 0.5;
    top: 0px;
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
    background-size: cover;
    background-position: 50% 30%;
    width: 920px;
    height: 475px;
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
    text-decoration: none;
  }

  .aside_card > a {
    display: flex;
    flex-direction: row;
    height: 110px;
    background-color: var(--color-dark-200);
    text-decoration: none;
    color: var(--color-white);
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
    text-align: start;
    padding: 0 20px;
    color: var(--color-gray);
  }

  .details__container {
    display: flex;
    flex-direction: row;
    height: 400px;
    margin-top: 60px;
    width: 100%;
    justify-content: space-between;
  }

  .details__img {
    height: 100%;
    width: 275px;
  }

  .details__img img {
    height: 100%;
    border-radius: 12px;
    width: 100%;
  }
  .details__text {
    display: flex;
    flex-direction: column;
    gap: 10%;
    width: 950px;
    padding-left: 35px;
    text-align: start;
  }

  .details__text h3 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
  }

  .details__text span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #bfbfbf;
  }

  .details__text p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #bfbfbf;
  }
  .details__text-title {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .details__text-title div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .details__text-sinopse {
    height: 50%;
    display: flex;
    flex-direction: column;
  }

  .details__text-sinopse p {
    overflow-y: scroll;
  }

  .details__text-sinopse p::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.4rem;
  }

  .details__text-sinopse p::-webkit-scrollbar-track {
    background: #06090f;
  }

  .details__text-sinopse p::-webkit-scrollbar-thumb {
    background: #00a3ff;
  }
`;
