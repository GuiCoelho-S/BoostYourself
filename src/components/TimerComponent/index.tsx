/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, MouseEvent } from 'react'
import { ButtonPlay } from 'src/style/page/pomodoro.style'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import * as S from './style'
import useGlobalColor from 'src/hooks/globalColor'
import { BsCheck2Circle } from 'react-icons/bs'
import { VscDebugRestart } from 'react-icons/vsc'

interface Props {
  timer: number
  modal: (arg0: boolean) => void
  cycle: number
  rest: number
}
const TimerComponent: React.FC<Props> = ({ timer, modal, cycle, rest }) => {
  const globalColor = useGlobalColor()

  const [workMode, setWorkMode] = useState(true)
  const [workTime, setWorkTime] = useState(0)

  const [restMode, setRestMode] = useState(false)
  const [restTime, setRestTime] = useState(0)

  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)

  const [run, setRun] = useState(false)
  const [restart, setRestart] = useState(false)
  const [counter, setCounter] = useState(1)
  const [pomodoro, setPomodoro] = useState(0)
  const [showPauseButton, setPauseShowButton] = useState(true)

  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [audio, setAudio] = useState(false)

  useEffect(() => {
    setWorkTime(timer)
    setRestTime(rest)
    if (timer != 0) setRun(true)
  }, [timer, rest])

  function handleWorkTime() {
    console.log(workMode, restMode, workTime)

    setMin(Math.trunc(workTime / 60))
    setSec(Math.trunc(workTime % 60))
    modal(true)
    containerRef.current!.style.backgroundColor = '#f7625f'
    if (workTime > 0) {
      setTimeout(() => {
        setWorkTime(workTime - 1)
      }, 1000)
    }
    if (workTime === 0) {
      setWorkMode(false)
      setRestMode(true)
      setAudio(true)
    }
  }

  function handleRestTime() {
    if (workMode === false && restMode === true) {
      containerRef.current!.style.backgroundColor = '#9ad666'
      setMin(Math.trunc(restTime / 60))
      setSec(Math.trunc(restTime % 60))
      if (restTime > 0) {
        setTimeout(() => {
          setRestTime(restTime - 1)
        }, 1000)
      }
      if (restTime === 0) {
        setRestart(true)
        setRun(false)
        setWorkMode(true)
        setRestMode(false)
        setWorkTime(timer)
        setRestTime(rest)
        setAudio(true)
      }
    }
  }

  useEffect(() => {
    if (run === true) {
      if (workMode === true && restMode === false) {
        handleWorkTime()
      }
      handleRestTime()
    }
  }, [run, workTime, restTime, workMode, restMode])

  useEffect(() => {
    if (counter === cycle) {
      setPomodoro(pomodoro + 1)
      setCounter(1)
    }
  }, [counter])

  useEffect(() => {
    const PlayAudio = () => {
      if (audio === true) {
        audioRef.current?.play().then(() =>
          setTimeout(() => {
            setAudio(false)
          }, 7000)
        )
      } else {
        audioRef.current?.load()
      }
    }
    PlayAudio()
  }, [audio])
  return (
    <S.Timer color={globalColor} ref={containerRef}>
      {restart === true ? (
        <S.RestartContainer>
          <h3>{`${counter}° ciclo concluído!`}</h3>
          <BsCheck2Circle />
          <p>Deseja reiniciar?</p>
          <S.restartButton
            color={globalColor}
            onClick={(e: MouseEvent) => {
              setRestart(false)
              setRun(true)
              setCounter(counter + 1)
            }}
          >
            <p>Recomeçar</p>
            <VscDebugRestart />
          </S.restartButton>
        </S.RestartContainer>
      ) : (
        <>
          <S.Time>{`${min}:${sec}`}</S.Time>

          <div>
            <p>{`atual ${counter}/${cycle}`}</p>
            <p>{`ciclo: ${pomodoro}`}</p>
          </div>
          {showPauseButton === true ? (
            <ButtonPlay
              onClick={(e: MouseEvent) => {
                if (workTime > 0 || restTime > 0) {
                  modal(false)
                  setRun(false)
                  setPauseShowButton(false)
                }
              }}
            >
              <p>Pause</p>
              <BsPauseFill />
            </ButtonPlay>
          ) : (
            <ButtonPlay
              onClick={(e: MouseEvent) => {
                if (workTime > 0 || restTime > 0) {
                  modal(true)
                  setRun(true)
                  setPauseShowButton(true)
                }
              }}
            >
              <p>Play</p>
              <BsFillPlayFill />
            </ButtonPlay>
          )}
        </>
      )}

      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
      ></audio>
    </S.Timer>
  )
}
export default TimerComponent
