import styled from 'styled-components'
import { Button } from '../design/button'

export const Modal = styled.form`
  width: clamp(300px, 100%, 600px);
  height: clamp(300px, 100%, 500px);
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span,
  label {
    font-size: 1.2rem;
    padding-left: 20px;
  }
  aside {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
  }

  label {
    padding-left: 10px;
  }

  article {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
  }

  textarea {
    align-self: center;
    width: 94%;
    resize: none;
    height: 100px;
    outline: 1px solid red;
    border: 1px solid transparent;
  }
`

export const Item = styled.div`
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  padding: 8px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;

  label {
    font-size: 1.4rem;
    padding-left: 10px;
  }
  input[type='radio'] {
    border-radius: 0px;
  }
`

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  border: 3px solid black;
`
export const ButtonSend = styled(Button)`
  width: 100px;
  color: white;
  font-size: 1.6rem;
  transform: none !important;
`

export const Input = styled.input`
  align-self: center;
  width: 90%;
  border: 3px solid transparent;
  background-color: transparent;
  border-bottom: 2px solid black;
  outline: 1px solid transparent;
  font-size: 1.2rem;
  transition: all 0.8s;
  :hover {
    border-bottom: 2px solid orange;
  }
  :focus {
    border-bottom: 2px solid red;
  }
`
