import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;

  flex-wrap: wrap;

  @media screen and (max-width: 1240px) {
    .card {
      width: calc(50% - 20px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 768px) {
    .card {
      width: 50%;
    }
  }
  @media screen and (max-width: 489px) {
    .card {
      .ImgContainer {
        width: 150px;

        img {
          width: 100px;
        }
      }
    }
  }
`;
