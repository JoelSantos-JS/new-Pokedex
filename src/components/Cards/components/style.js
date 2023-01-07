import styled from "styled-components";

export const CardContainer = styled.div`
  width: calc(25% - 20px);
  background: #3d3d3d;
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  margin: 1rem;
  border: none;
`;

export const TitleContainer = styled.div`
  padding: 0;
  margin: 0;
  h2 {
    text-transform: capitalize;
    font-size: 2.375rem;
  }
  small {
    font-size: 1.55rem;
  }
`;

export const ImgContainer = styled.div`
  max-width: 220px;
  margin: 4rem 0rem 4rem -1.357rem;
  width: 220px;
  z-index: 0;

  background-color: #9dd465;
  border-radius: 50%;
  opacity: 0.8;
  background-position: 0, 0;

  img {
    margin: 0 auto;
    z-index: 2;
    margin-top: -2rem;
    width: 20rem;
  }
`;

export const TypeContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #1e1e1e;
  border-radius: 1rem;
  font-size: 1.175rem;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #9dd465;
  letter-spacing: 4px;

  p {
    margin: 0;
  }
`;

export const FavoriteButton = styled.button``;
