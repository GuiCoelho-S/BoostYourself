import styled from 'styled-components'

export const ContainerContent = styled.main`
  display: flex;
  @media (max-width: 780px) {
    flex-direction: column-reverse;
  }
`

export const GridCards = styled.section`
  display: flex;
  width: 100%;
  max-width: 740px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  @media (max-width: 780px) {
    padding-top: 40px;
  }
`

export const GridToDo = styled.aside`
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 780px) {
    width: 100%;
    overflow-x: scroll;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
    height: 90px;
    flex-direction: row;
    padding-bottom: 20px;
  }
  @media (max-width: 440px) {
    height: 150px;
  }
`
