import styled from 'styled-components'
import { ContainerContent } from 'src/components/design/container'
import { Button } from 'src/components/design/button'

export const ContainerAnotacoes = styled(ContainerContent)`
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  padding-bottom: 200px;
  section {
    padding-top: 60px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }

  button {
    transform: translate(20px, 20px);
  }
`

export const ModalDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(196, 196, 196, 0.9);
  z-index: 1;
  display: grid;
  place-items: center;
`
