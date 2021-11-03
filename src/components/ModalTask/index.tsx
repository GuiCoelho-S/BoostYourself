import { Button } from '../design/button'
import * as S from './style'
import useGlobalColor from 'src/hooks/globalColor'
import { useDispatch } from 'react-redux'
import { addTask } from 'src/store/getCard/getCard.actions'
import { MouseEvent, useRef } from 'react'

const ModalTask: React.FC = () => {
  const globalColor = useGlobalColor()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const dispatch = useDispatch()

  return (
    <S.ModalTaskDiv color={globalColor}>
      <section>
        <label htmlFor="textarea-task">Digite a tarefa</label>
        <Button
          color={`#fff`}
          type="button"
          onClick={(e: MouseEvent) => {
            dispatch(addTask(textAreaRef.current!.value))
          }}
        >
          Criar
        </Button>
      </section>
      <textarea id="textarea-task" ref={textAreaRef} />
    </S.ModalTaskDiv>
  )
}

export default ModalTask
