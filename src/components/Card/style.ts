import styled from 'styled-components'
import { grey300 } from 'src/style/colors'

export const ContainerCard = styled.article`
  width: 320px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: ${grey300};
  background-color: ${(props) => props.color};
  border-style: inset;
  padding-bottom: 10px;
  border-radius: 20px;
  p {
    padding: 20px 20px 0 20px;
    font-size: 1rem;
  }
`

export const HeaderCard = styled.header`
  border-radius: 20px 20px 0 0;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  background-color: ${(props) => props.color};
  border: none;
  h2 {
    color: white;
    font-style: bold;
    max-width: 260px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    width: 30px;
    height: 30px;
    fill: white;
  }
`
export const Subtitle = styled.h3`
  font-size: 1rem;
  text-align: right;
  padding: 8px 10px 0 0;
`

export const deleteItem = styled.button`
  margin-right: 10px;
  align-self: flex-end;
  width: 45px;
  height: 45px;
  display: grid;
  place-items: center;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 50%;
  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.color};
  }
`
