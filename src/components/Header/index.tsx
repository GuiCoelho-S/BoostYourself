import React from 'react'
import ColorTheme from '../ColorTheme'
import * as S from './style'
import { SiReactos } from 'react-icons/si'
import useGlobalColor from 'src/hooks/globalColor'

const Header: React.FC = () => {
  const globalColor = useGlobalColor()
  return (
    <S.HeaderStyle color={globalColor}>
      <ColorTheme />

      <article>
        <S.Title color={globalColor}>Boost Yourself</S.Title>
        <SiReactos />
      </article>
    </S.HeaderStyle>
  )
}
export default Header
