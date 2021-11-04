import { Button } from '../design/button'
import * as S from './style'
import useGlobalColor from 'src/hooks/globalColor'
import { useDispatch } from 'react-redux'
import { addTask } from 'src/store/getCard/getCard.actions'
import { MouseEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const ModalTask: React.FC = () => {
  const globalColor = useGlobalColor()
  const [textAreaValue, setTextAreaValue] = useState<string>('')

  const dispatch = useDispatch()
  let textInput = ''
  var id: string = uuidv4()
  return (
    <S.ModalTaskDiv color={globalColor}>
      <section>
        <label htmlFor="textarea-task">Digite a tarefa</label>
        <Button
          color={`#fff`}
          type="button"
          onClick={(e: MouseEvent) => {
            if (textAreaValue.length > 0) {
              textInput = textAreaValue
              dispatch(addTask(textInput, id))
            }
          }}
        >
          Criar
        </Button>
      </section>
      <textarea
        id="textarea-task"
        required
        onChange={(e) => setTextAreaValue(e.target.value)}
      />
    </S.ModalTaskDiv>
  )
}

export default ModalTask
