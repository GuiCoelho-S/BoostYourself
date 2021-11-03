import React, { memo } from 'react'
import { useState, useEffect, useRef } from 'react'
import * as S from './style'
import { AiOutlineDelete } from 'react-icons/ai'
import useGlobalColor from 'src/hooks/globalColor'

interface Props {
  text: string
}
const ToDoItem: React.FC<Props> = ({ text }) => {
  const [select, setSelect] = useState(false)
  const textStyle = useRef<HTMLDivElement>(null)
  const globalColor = useGlobalColor()

  useEffect(() => {
    if (select === true) {
      textStyle.current!.style.textDecorationLine = 'line-through'
    } else {
      textStyle.current!.style.textDecorationLine = 'none'
    }
  }, [select])

  return (
    <S.ContainerToDo color={globalColor}>
      <input type="checkbox" onClick={() => setSelect(!select)} />
      <p ref={textStyle}>{text}</p>
      <S.deleteToDo>
        <AiOutlineDelete />
      </S.deleteToDo>
    </S.ContainerToDo>
  )
}

export default memo(ToDoItem)
