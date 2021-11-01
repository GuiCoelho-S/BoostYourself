import React from 'react'
import ColorTheme from '../ColorTheme'
import * as S from './style'
import { SiReactos } from 'react-icons/si'

const Header: React.FC = () => {
  return (
    <S.HeaderStyle>
      <ColorTheme />

      <article>
        <S.Title>Boost Yourself</S.Title>
        <SiReactos />
      </article>
    </S.HeaderStyle>
  )
}
export default Header
