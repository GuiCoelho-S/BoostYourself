import styled from 'styled-components'

export const Container = styled.section`
  width: 300px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: white;
  padding: 8px 20px 8px 30px;
  border-bottom-left-radius: 40px 40px;
  z-index: 1;
`

export const btnColor = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: ${(props) => props.color};
  transition: all 0.8s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
    border-color: black;
  }
`
