import React, { memo } from 'react'
import { useState, useEffect, useRef } from 'react'
import * as S from './style'
import { AiOutlineDelete } from 'react-icons/ai'
import useGlobalColor from 'src/hooks/globalColor'
import { removeTask } from 'src/store/getCard/getCard.actions'
import { useDispatch } from 'react-redux'

interface Props {
  text: string
  id: string
}
const ToDoItem: React.FC<Props> = ({ text, id }) => {
  const [select, setSelect] = useState(false)
  const textStyle = useRef<HTMLDivElement>(null)
  const globalColor = useGlobalColor()
  const dispatch = useDispatch()

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
      <S.deleteToDo onClick={() => dispatch(removeTask(id))}>
        <AiOutlineDelete />
      </S.deleteToDo>
    </S.ContainerToDo>
  )
}

export default memo(ToDoItem)
