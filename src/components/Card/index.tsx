import React, { memo, useEffect, useRef } from 'react'
import * as S from './style'
import { GoAlert } from 'react-icons/go'
import { AiOutlineDelete } from 'react-icons/ai'
import useGlobalColor from 'src/hooks/globalColor'
import { useDispatch } from 'react-redux'
import { removeNote } from 'src/store/getNote/getNote.actions'
interface Props {
  title: string
  subtitle?: string
  textarea: string
  color: string
  id: string
}
const Card: React.FC<Props> = ({ title, subtitle, textarea, color, id }) => {
  const globalColor = useGlobalColor()
  const containerRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  return (
    <S.ContainerCard color={globalColor} ref={containerRef}>
      <S.HeaderCard color={color}>
        <h2>{title}</h2>
        <GoAlert />
      </S.HeaderCard>

      <S.Subtitle>{subtitle}</S.Subtitle>

      <p>{textarea}</p>

      <S.deleteItem
        onClick={() => {
          dispatch(removeNote(id))
        }}
      >
        <AiOutlineDelete color={'#94E7FA'} />
      </S.deleteItem>
    </S.ContainerCard>
  )
}

export default memo(Card)
