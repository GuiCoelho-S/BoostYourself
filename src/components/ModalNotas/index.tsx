import * as S from './style'
import React, {
  useState,
  useRef,
  FormEvent,
  useEffect,
  MouseEvent
} from 'react'
import { lightBlue } from 'src/style/colors'

const ModalNota: React.FC = () => {
  const [title, setTitle] = useState<string>()
  const [subTitle, setSubTitle] = useState<string>()
  const [textArea, setTextArea] = useState<string>()
  const [colorPriority, setColorPriority] = useState<string>()

  const inputTitleRef = useRef<HTMLInputElement>(null)
  const inputSubtitleRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <S.Modal
      color={`${lightBlue}`}
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        setTitle(inputTitleRef.current?.value)
        setSubTitle(inputSubtitleRef.current?.value)
        setTextArea(textAreaRef.current?.value)
      }}
    >
      <label htmlFor="title_input">Insira um título</label>
      <S.Input type="text" id="title_input" ref={inputTitleRef} />
      <label htmlFor="subtitle_input">Insira um subtítulo</label>
      <S.Input type="text" id="subtitle_input" ref={inputSubtitleRef} />
      <p>Escolha um grau de importância</p>
      <aside>
        <S.Item color={'#EB2B2B'}>
          <S.RadioInput
            type="radio"
            id="urgente"
            name="options"
            onClick={(e: MouseEvent) => {
              setColorPriority('#EB2B2B')
            }}
          />
          <label htmlFor="urgente">Urgente</label>
        </S.Item>

        <S.Item color={'#FADE7C'}>
          <S.RadioInput
            type="radio"
            id="importante"
            name="options"
            onClick={(e: MouseEvent) => {
              setColorPriority('#FADE7C')
            }}
          />
          <label htmlFor="importante">Importante</label>
        </S.Item>

        <S.Item color={'#B6DC86'}>
          <S.RadioInput
            type="radio"
            id="moderado"
            name="options"
            onClick={(e: MouseEvent) => {
              setColorPriority('#B6DC86')
            }}
          />
          <label htmlFor="moderado">Moderado</label>
        </S.Item>
      </aside>
      <span>Digite sua nota</span>
      <textarea ref={textAreaRef} />
      <article>
        <S.ButtonSend color={'#EB2B2B'}>Cancelar</S.ButtonSend>
        <S.ButtonSend color={'#69CF7A'} type="submit">
          Criar
        </S.ButtonSend>
      </article>
    </S.Modal>
  )
}
export default ModalNota
