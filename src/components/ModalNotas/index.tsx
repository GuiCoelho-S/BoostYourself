import * as S from './style'
import React, { useState, useRef, FormEvent } from 'react'
import useGlobalColor from 'src/hooks/globalColor'
import { addNote } from 'src/store/getNote/getNote.actions'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
interface Props {
  modal: (e: boolean) => void
}
const ModalNota: React.FC<Props> = ({ modal }) => {
  const [colorPriority, setColorPriority] = useState<string>()
  const [textAreaNote, setTextAreaNote] = useState<string>()
  const globalColor = useGlobalColor()
  const inputTitleRef = useRef<HTMLInputElement>(null)
  const inputSubtitleRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  var data: object = {
    title: inputTitleRef.current?.value,
    subtitle: inputSubtitleRef.current?.value,
    textarea: textAreaNote,
    color: colorPriority,
    id: uuidv4()
  }

  return (
    <S.Modal
      color={globalColor}
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        dispatch(addNote(data))
        modal(false)
      }}
    >
      <label htmlFor="title_input">Insira um título</label>
      <S.Input type="text" id="title_input" required ref={inputTitleRef} />
      <label htmlFor="subtitle_input">Insira um subtítulo</label>
      <S.Input type="text" id="subtitle_input" ref={inputSubtitleRef} />
      <p>Escolha um grau de importância</p>
      <aside>
        <S.Item color={'#EB2B2B'}>
          <S.RadioInput
            type="radio"
            id="urgente"
            name="options"
            onClick={() => {
              setColorPriority('#EB2B2B')
              console.log(data)
            }}
          />
          <label htmlFor="urgente">Urgente</label>
        </S.Item>

        <S.Item color={'#FADE7C'}>
          <S.RadioInput
            type="radio"
            id="importante"
            name="options"
            onClick={() => {
              setColorPriority('#FADE7C')
              console.log(data)
            }}
          />
          <label htmlFor="importante">Importante</label>
        </S.Item>

        <S.Item color={'#B6DC86'}>
          <S.RadioInput
            type="radio"
            id="moderado"
            name="options"
            onClick={() => {
              setColorPriority('#B6DC86')
              console.log(data)
            }}
          />
          <label htmlFor="moderado">Moderado</label>
        </S.Item>
      </aside>
      <span>Digite sua nota</span>
      <textarea
        id="textarea-note"
        onChange={(e) => setTextAreaNote(e.target.value)}
      />
      <article>
        <S.SendButton
          type="button"
          color={'#EB2B2B'}
          onClick={() => modal(false)}
        >
          Cancelar
        </S.SendButton>
        <S.SendButton color={'#69CF7A'} type="submit">
          Criar
        </S.SendButton>
      </article>
    </S.Modal>
  )
}
export default ModalNota
