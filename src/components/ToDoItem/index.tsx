import React, { memo } from 'react'
import { useState, useEffect, useRef } from 'react'
import * as S from './style'
import { AiOutlineDelete } from 'react-icons/ai'
import useGlobalColor from 'src/hooks/globalColor'

const ToDoItem: React.FC = () => {
  const [select, setSelect] = useState(false)
  const text = useRef<HTMLDivElement>(null)
  const globalColor = useGlobalColor()

  useEffect(() => {
    if (select === true) {
      text.current!.style.textDecorationLine = 'line-through'
    } else {
      text.current!.style.textDecorationLine = 'none'
    }
  }, [select])

  return (
    <S.ContainerToDo color={globalColor}>
      <input type="checkbox" onClick={() => setSelect(!select)} />
      <p ref={text}>Fazer as tarefas dia</p>
      <S.deleteToDo>
        <AiOutlineDelete />
      </S.deleteToDo>
    </S.ContainerToDo>
  )
}

export default memo(ToDoItem)
