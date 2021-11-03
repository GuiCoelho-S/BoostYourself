import React, { useState, useEffect, useRef } from 'react'
import { ButtonPlay } from 'src/style/page/pomodoro.style'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import * as S from './style'
import useGlobalColor from 'src/hooks/globalColor'

interface Props {
  timer: number
  modal: any
  cycle: number
  rest: number
}
const TimerComponent: React.FC<Props> = ({ timer, modal, cycle, rest }) => {
  const globalColor = useGlobalColor()
  const timerRef = useRef<HTMLDivElement>(null)
  const [currentCycle, setCurrentCycle] = useState(1)
  const [number, setNumber] = useState(0)
  const [workTime, setWorkTime] = useState(0)
  const [restTime, setRestTime] = useState(0)
  const [screen, setScreen] = useState(true)
  const [initial, setInitial] = useState(false)

  useEffect(() => {
    setWorkTime(timer)
    setRestTime(rest)
  }, [timer, rest])

  const min = Math.trunc(workTime / 60)
  const sec = Math.trunc(workTime % 60)
  const minRest = Math.trunc(restTime / 60)
  const secRest = Math.trunc(restTime % 60)

  useEffect(() => {
    function timeWork() {
      if (initial === true && screen == true) {
        timerRef.current!.style.backgroundColor = globalColor

        if (workTime > 0) setTimeout(() => setWorkTime(workTime - 1), 20)
        if (workTime === 0) {
          setRestTime(rest)
          setScreen(false)
          if (currentCycle !== cycle && currentCycle < cycle) {
            setCurrentCycle(currentCycle + 1)
          }
          if (currentCycle === cycle) {
            setNumber(number + 1)
            setInitial(false)
            setCurrentCycle(0)
          }
        }
      }
    }

    if (initial == true && screen == false) {
      timerRef.current!.style.backgroundColor = '#4afd91'
      if (screen === false) {
        if (restTime > 0) setTimeout(() => setRestTime(restTime - 1), 20)
        if (restTime == 0) {
          setScreen(true)
          setWorkTime(timer)
        }
      }
    }
    timeWork()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    workTime,
    restTime,
    initial,
    screen,
    rest,
    currentCycle,
    cycle,
    number,
    timer
  ])

  return (
    <S.Timer ref={timerRef} color={globalColor}>
      {screen ? (
        <S.Time>{`${min}:${sec}`}</S.Time>
      ) : (
        <S.Time>{`${minRest}:${secRest}`}</S.Time>
      )}
      <div>
        <p>{`round ${currentCycle}/ ${cycle}`}</p>
        <p>{`ciclo: ${number}`}</p>
      </div>
      {initial ? (
        <ButtonPlay
          onClick={() => {
            setInitial(!initial)
            modal(false)
          }}
        >
          <p>Pause</p>
          <BsPauseFill />
        </ButtonPlay>
      ) : (
        <ButtonPlay
          onClick={() => {
            setInitial(!initial)
            modal(true)
          }}
        >
          <p>Play</p>
          <BsFillPlayFill />
        </ButtonPlay>
      )}
    </S.Timer>
  )
}
export default TimerComponent
