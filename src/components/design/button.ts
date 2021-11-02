import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(props) => props.color};
  padding: 5px 10px;
  height: 60px;
  width: 100%;
  max-width: 300px;
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
