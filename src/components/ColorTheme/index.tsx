import * as S from './style'
import { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { changeGlobalColor } from 'src/store/changeGlobalColor/globalColor.actions'

const ColorTheme: React.FC = () => {
  const dispatch = useDispatch()

  const changeColor = (color: string) => {
    return dispatch(changeGlobalColor(color))
  }
  return (
    <S.Container>
      <S.btnColor
        color={'#16d6c8'}
        onClick={(e: MouseEvent) => changeColor('#16d6c8')}
      />
      <S.btnColor
        color={'#ee9554'}
        onClick={(e: MouseEvent) => changeColor('#ee9554')}
      />
      <S.btnColor
        color={'#1a7175'}
        onClick={(e: MouseEvent) => changeColor('#1a7175')}
      />
      <S.btnColor
        color={'#453485'}
        onClick={(e: MouseEvent) => changeColor('#453485')}
      />
      <S.btnColor
        color={'#545454'}
        onClick={(e: MouseEvent) => changeColor('#545454')}
      />
    </S.Container>
  )
}

export default ColorTheme
