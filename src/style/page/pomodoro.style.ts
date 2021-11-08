import styled from 'styled-components'
import { grey300 } from 'src/style/colors'
import { ContainerContent } from 'src/components/design/container'

export const ContainerPomodoro = styled(ContainerContent)`
  align-items: center;

  @media (max-width: 600px) {
  }
`

export const ButtonPlay = styled.button`
  background-color: white;
  width: 120px;
  height: 40px;
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  border-radius: 10px;
  gap: 5px;
  border: 2px solid transparent;
  transition: all 0.8s ease;
  cursor: pointer;
  svg {
    width: 35px;
    height: 35px;
  }
  :hover {
    scale: 1.05;
  }
`
export const SettingTimer = styled.section`
  position: relative;
  width: clamp(280px, 100%, 400px);
  height: 300px;
  border: 1px solid ${grey300};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;

  header {
    background-color: ${grey300};
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    align-items: center;
    h2 {
      font-weight: 200;
      color: white;
      letter-spacing: 0.3rem;
    }
    svg {
      height: 40px;
      width: 40px;
      fill: white;
    }
  }
  div {
    display: flex;
    width: 100%;
    align-items: end;
    label {
      padding-right: 10px;
      padding-left: 10px;
      font-size: 1.2rem;
    }
    span {
      padding-left: 5px;
    }
  }
  ${ButtonPlay} {
    align-self: flex-end;
    background-color: ${grey300};
    color: white;
    width: 90px;
    transform: translateX(-10px);
    &:hover,
    :focus {
      background-color: red;
      font-size: 1.6rem;
      outline: 1px solid transparent;
    }
  }
  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  @media (max-width: 380px) {
    label,
    input,
    span {
      font-size: 0.9rem !important;
    }
  }
`
export const Input = styled.input`
  width: 40px;
  height: 40px;
  border: 1px solid red;
  transform: translateY(5px);
  color: black;
  font-size: 1.1rem;
  text-align: center;
  border: none;
  border-bottom: 2px solid ${grey300};
  background-color: inherit;
  outline: transparent;
  transition: all 0.6s;
  &:focus {
    border-color: red;
  }
`

export const Modal = styled.div`
  position: absolute;
  width: clamp(300px, 100%, 400px);
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0 !important;
  border: none;
  border-bottom: 1px solid ${grey300};
  div {
    margin-left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 10px;
    svg {
      width: 80px;
      height: 80px;
      fill: #af1616;
    }
    p {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`
