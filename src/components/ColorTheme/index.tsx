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
        color={'#94E7FA'}
        onClick={(e: MouseEvent) => changeColor('#94E7FA')}
      />
      <S.btnColor
        color={'#FFD3FB'}
        onClick={(e: MouseEvent) => changeColor('#FFD3FB')}
      />
      <S.btnColor
        color={'#E48585'}
        onClick={(e: MouseEvent) => changeColor('#E48585')}
      />
      <S.btnColor
        color={'#B6DC86'}
        onClick={(e: MouseEvent) => changeColor('#B6DC86')}
      />
    </S.Container>
  )
}

export default ColorTheme
