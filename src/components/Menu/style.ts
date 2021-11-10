import styled from 'styled-components'

export const Container = styled.div`
  z-index: 2;
  height: auto;
  background-color: ${(props) => props.color};
  width: 200px;
  @media (max-width: 600px) {
    top: calc(100vh - 80px);

    position: absolute;
    height: 80px;
    width: 100%;
  }
`

export const ContainerMenu = styled.section`
  background-color: ${(props) => props.color};
  width: 180px;
  height: 100vh;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  @media (max-width: 600px) {
    height: 80px;
    width: 100%;
    flex-direction: row;
  }
`

export const Item = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  svg {
    width: 55px;
    height: 55px;
    fill: #ffffff;
  }
  p {
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
  @media (max-width: 600px) {
    padding: 0;
    svg {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 400px) {
    padding: 0;
    svg {
      width: 30px;
      height: 30px;
    }
    p {
      font-size: 0.8rem;
    }
  }
`
