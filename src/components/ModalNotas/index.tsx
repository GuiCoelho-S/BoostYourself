import * as S from './style'
import React, {
  useState,
  useRef,
  FormEvent,
  useEffect,
  MouseEvent
} from 'react'
import useGlobalColor from 'src/hooks/globalColor'

interface Props {
  modal: (e: boolean) => void
}
const ModalNota: React.FC<Props> = ({ modal }) => {
  const [colorPriority, setColorPriority] = useState<string>()
  const [data, setData] = useState<object>({
    title: '',
    subTitle: '',
    textArea: '',
    color: ''
  })

  const globalColor = useGlobalColor()
  const inputTitleRef = useRef<HTMLInputElement>(null)
  const inputSubtitleRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <S.Modal
      color={globalColor}
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        setData({
          title: inputTitleRef.current?.value,
          subTitle: inputSubtitleRef.current?.value,
          textArea: textAreaRef.current?.value,
          color: colorPriority
        })
        modal(false)
      }}
    >
      <label htmlFor="title_input">Insira um título</label>
      <S.Input type="text" id="title_input" required ref={inputTitleRef} />
      <label htmlFor="subtitle_input">Insira um subtítulo</label>
      <S.Input
        type="text"
        id="subtitle_input"
        required
        ref={inputSubtitleRef}
      />
      <p>Escolha um grau de importância</p>
      <aside>
        <S.Item color={'#EB2B2B'}>
          <S.RadioInput
            type="radio"
            id="urgente"
            name="options"
            checked
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
      <textarea required ref={textAreaRef} />
      <article>
        <S.SendButton
          type="button"
          color={'#EB2B2B'}
          onClick={(e: MouseEvent) => modal(false)}
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
