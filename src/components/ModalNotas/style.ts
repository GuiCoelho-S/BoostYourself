import styled, { keyframes } from 'styled-components'
import { Button } from '../design/button'

const fadeModal = keyframes`

from {
  opacity:0;
  scale:0.6;
}
to {
  opacity:1;
  scale:1;
}
`

export const Modal = styled.form`
  width: clamp(260px, 90%, 400px);
  height: clamp(300px, 100%, 500px);
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 0 20px 0;
  animation: ${fadeModal} 1s ease;
  span,
  label {
    font-size: 1.2rem;
  }

  p {
    padding: 6px 0 10px 14px;
    font-size: 1.1rem;
  }
  span {
    padding-left: 10px;
  }
  aside {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    gap: 10px;
  }

  label {
    padding-left: 10px;
  }

  article {
    display: flex;
    justify-content: space-between;
    padding: 10px 40px 0 40px;
  }

  textarea {
    align-self: center;
    width: 94%;
    resize: none;
    height: 100px;
    outline: 1px solid red;
    border: 1px solid transparent;
  }

  /*
  @media (max-width: 900px) {
    padding: 20px 0 40px 0;
    p {
      padding: 10px 20px 10px 5px;
    }
  }

  article {
    padding-top: 20px;
  }

  span {
    padding: 10px 0 20px 10px;
  }
  input {
    margin-top: 5px;
  }
  */
`

export const Item = styled.div`
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  padding: 8px 16px;
  width: 120px;
  border-radius: 12px;
  display: flex;
  align-items: center;

  label {
    font-size: 1.2rem;
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
export const SendButton = styled(Button)`
  width: 100px;
  height: 40px;
  color: white;
  font-size: 1.3rem;
  transform: none !important;
  font-weight: bold;
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
