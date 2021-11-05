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
      font-size: 1.4rem;
      color: white;
      font-weight: bold;
    }
    ${Button} {
      width: 80px;
      height: 40px;
      font-weight: bold;
      color: black;
      border: 1px solid black;

      :hover,
      :focus {
        border: 1px solid red;
        color: #ff0000;
      }
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
