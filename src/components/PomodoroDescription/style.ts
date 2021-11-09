import { grey300 } from 'src/style/colors'
import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  padding-top: 60px;

  p {
    color: ${grey300};
    font-size: 1.2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.3rem;
    padding-top: 10px;
  }

  h2,
  h3,
  h4 {
    color: #f56154;
    font-weight: bold;
    padding-bottom: 8px;
  }
  section {
    width: 100%;
    display: flex;
    padding-bottom: 40px;
    img {
      object-fit: contain !important;
      transform: translateY(-100px);

      @media (max-width: 900px) {
        transform: none;
      }
    }

    article {
      display: flex;
      width: clamp(300px, 100%, 600px);
      flex-direction: column;
      gap: 10px;
      @media (max-width: 900px) {
        padding-left: 10px;
        padding-right: 10px;
      }
    }

    div {
      padding-top: 20px;
      display: flex;
      gap: 20px;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }

    @media (max-width: 900px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 80px;
  }
`

export const Aside = styled.aside`
  display: grid;
  place-items: center;
  padding: 6px 20px;
  border-radius: 12px;
  padding-bottom: 20px;

  p {
    font-size: 3rem;
    font-weight: bold;
    color: #f56154;
    font-family: 'Chango', cursive;
  }
  span {
    font-size: 1.2rem;
  }
`
