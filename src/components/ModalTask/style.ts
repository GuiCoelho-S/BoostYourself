import styled from 'styled-components'
import { Button } from '../design/button'

export const ModalTaskDiv = styled.article`
  background-color: ${(props) => props.color};
  width: clamp(240px, 90%, 440px);
  padding: 10px 20px 20px 20px;
  border-radius: 20px;
  justify-content: space-between;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      font-size: 1.2rem;
    }
    ${Button} {
      width: 80px;
      height: 40px;
      font-weight: bold;
      color: white;
    }
  }

  textarea {
    margin-top: 20px;
    resize: none;
    width: 100%;
    height: 60px;

    :hover,
    :focus {
      outline: 1px solid orange;
    }
  }
`
