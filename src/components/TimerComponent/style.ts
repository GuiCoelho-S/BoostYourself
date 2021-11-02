import styled from 'styled-components'

export const Timer = styled.div`
  width: clamp(240px, 90%, 300px);
  height: 300px;
  background-color: ${(props) => props.color};
  border-radius: 37px;
  padding: 30px;
  align-items: center;
  display: grid;
  div {
    display: flex;
    justify-content: space-between;
  }
  p {
    font-size: 1.2rem;
  }
`

export const Time = styled.p`
  font-size: 5rem !important;
  text-align: center;
  color: white;
  font-weight: 900;
`
