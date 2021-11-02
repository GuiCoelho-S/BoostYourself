import { Button } from '../design/button'
import * as S from './style'

const ModalTask: React.FC = () => {
  return (
    <S.ModalTaskDiv color={`#B1EAF6`}>
      <section>
        <label htmlFor="textarea-task">Digite a tarefa</label>
        <Button color={`#69CF7A`}>Criar</Button>
      </section>
      <textarea id="textarea-task" />
    </S.ModalTaskDiv>
  )
}

export default ModalTask
