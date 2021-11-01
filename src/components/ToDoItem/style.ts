import styled from 'styled-components'
import { deleteItem } from '../Card/style'

export const ContainerToDo = styled.article`
  align-self: center;
  max-width: 340px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  input {
    width: 20px;
    height: 20px;
  }
  p {
    max-width: 200px;
    word-break: break-all;
  }
  @media (max-width: 540px) {
    gap: 10px;
  }
`

export const deleteToDo = styled(deleteItem)`
  align-self: center;
  width: 40px;
  height: 40px;
  border: 1px solid pink;
  svg {
    width: 20px;
    height: 20px;
  }
`
