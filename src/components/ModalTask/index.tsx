import { Button } from '../design/button'
import * as S from './style'
import useGlobalColor from 'src/hooks/globalColor'

const ModalTask: React.FC = () => {
  const globalColor = useGlobalColor()
  return (
    <S.ModalTaskDiv color={globalColor}>
      <section>
        <label htmlFor="textarea-task">Digite a tarefa</label>
        <Button color={`#69CF7A`}>Criar</Button>
      </section>
      <textarea id="textarea-task" />
    </S.ModalTaskDiv>
  )
}

export default ModalTask
