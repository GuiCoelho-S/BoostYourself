import styled from 'styled-components'
import { grey300 } from 'src/style/colors'

export const ContainerCard = styled.article`
  width: clamp(240px, 100%, 320px);
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: ${grey300};
  background-color: whitesmoke;
  border-style: inset;
  padding-bottom: 10px;
  border-radius: 20px;
  p {
    padding: 20px 20px 0 20px;
    font-size: 1.2rem;
    color: ${(props) => props.color};
    font-weight: bold;
  }
`

export const HeaderCard = styled.header`
  border-radius: 20px 20px 0 0;
  width: 100%;
  display: flex;
  justify-content: space - between;
  align-items: center;

  background-color: ${(props) => props.color};
  border: none;
  h2 {
    color: white;
    font-style: bold;
    max-width: 260px;
    width: 100%;
    padding: 5px 14px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    width: 30px;
    height: 30px;
    fill: white;
    padding-right: 10px;
  }
`
export const Subtitle = styled.h3`
  font-size: 1.3rem;
  text-align: right;
  padding: 8px 10px 0 0;
`

export const deleteItem = styled.button`
  margin-top: 5px;
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
