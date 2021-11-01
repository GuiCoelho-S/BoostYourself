import React, { memo } from 'react'
import * as S from './style'
import { GoAlert } from 'react-icons/go'
import { AiOutlineDelete } from 'react-icons/ai'

const Card: React.FC = () => {
  return (
    <S.ContainerCard color={'#94E7FA'}>
      <S.HeaderCard color={'#EB2B2B'}>
        <h2>Título da página</h2>
        <GoAlert />
      </S.HeaderCard>

      <S.Subtitle>Aqui será o subtítulo</S.Subtitle>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <S.deleteItem>
        <AiOutlineDelete color={'#94E7FA'} />
      </S.deleteItem>
    </S.ContainerCard>
  )
}

export default memo(Card)
