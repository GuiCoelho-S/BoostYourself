import styled from 'styled-components'
import { deleteItem } from '../Card/style'

export const ContainerToDo = styled.article`
  align-self: center;
  width: clamp(280px, 80%, 300px);
  padding: 5px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  input {
    width: 20px;
    height: 20px;
  }
  p {
    color: white;
    font-weight: bold;
    max-width: 180px;
    word-break: break-all;
  }
  @media (max-width: 540px) {
    gap: 10px;
  }
`

export const deleteToDo = styled(deleteItem)`
  translate: none;
  align-self: center;
  width: 40px;
  height: 40px;
  border: 1px solid inherit;
  cursor: pointer;
  transition: all 0.4s ease;
  svg {
    width: 20px;
    height: 20px;
  }

  :hover {
    filter: brightness(0.7);
  }
`
