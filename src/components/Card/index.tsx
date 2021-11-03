import React, { memo } from 'react'
import * as S from './style'
import { GoAlert } from 'react-icons/go'
import { AiOutlineDelete } from 'react-icons/ai'
import useGlobalColor from 'src/hooks/globalColor'

const Card: React.FC = () => {
  const globalColor = useGlobalColor()

  return (
    <S.ContainerCard color={globalColor}>
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
