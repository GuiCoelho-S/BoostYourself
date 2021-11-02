import styled from 'styled-components'
import { ContainerContent } from 'src/components/design/container'
import { grey300 } from '../colors'

export const ContainerTasks = styled(ContainerContent)`
  padding: 30px 20px 100px 20px;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;

  @media (max-width: 420px) {
    padding: 30px 20px 100px 10px;
  }

  aside {
    width: 100%;
    border: 2px solid transparent;
    border-top: 2px solid ${grey300};
    padding-top: 20px;
    h2 {
      font-family: 'Rye', cursive;
      font-size: 1.8rem;
    }
  }
`

export const GridTasks = styled.div`
  padding-top: 20px;
  width: 94%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`
