// containers padrões para as páginas
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  display: flex;
`

export const ContainerIndex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ContainerContent = styled.main`
  display: flex;
  height: 100%;
  justify-content: center;
  gap: 20px;
  border: 1px solid red;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 480px) {
    padding: 40px 20px 100px 20px;
  }
`
