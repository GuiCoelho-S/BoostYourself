import { ButtonPlay } from 'src/style/page/pomodoro.style'
import styled from 'styled-components'
import { Button } from '../design/button'

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

    p {
      color: white;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }

  button {
    p {
      font-size: 1.2rem;
    }
  }
`

export const RestartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h3 {
    font-size: 1.6rem;
    color: white;
  }

  svg {
    width: 80px;
    height: 80px;
    fill: white;
  }

  p {
    color: white;
    font-size: 1.4rem;
  }
`

export const restartButton = styled(ButtonPlay)`
  width: auto;
  background-color: white;
  border-bottom: 3px solid white;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: space-envenly;
  border-radius: 12px;
  padding: 12px 15px;

  p {
    color: ${(props) => props.color} !important;
    font-weight: bold;
    font-size: 1rem;
  }
  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.color};
  }
`
export const Time = styled.p`
  font-size: 5rem !important;
  text-align: center;
  color: white;
  font-weight: 900;
`
