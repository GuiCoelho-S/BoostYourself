/* eslint-disable @next/next/link-passhref */

import React from 'react'
import Link from 'next/link'
import * as S from './style'

import { MdSpaceDashboard } from 'react-icons/md'
import { BsFillStopwatchFill, BsJournalBookmarkFill } from 'react-icons/bs'
import { FaTasks } from 'react-icons/fa'
import useGlobalColor from 'src/hooks/globalColor'

const Menu: React.FC = () => {
  const globalColorA = useGlobalColor()

  return (
    <S.Container color={'#000'}>
      <S.ContainerMenu color={globalColorA}>
        <Link href="/">
          <S.Item>
            <MdSpaceDashboard />
            <p>Dashboard</p>
          </S.Item>
        </Link>

        <Link href="/pomodoro">
          <S.Item>
            <BsFillStopwatchFill />
            <p>Pomodoro</p>
          </S.Item>
        </Link>

        <Link href="/anotacoes">
          <S.Item>
            <BsJournalBookmarkFill />
            <p>Anotações</p>
          </S.Item>
        </Link>

        <Link href="/tasks">
          <S.Item>
            <FaTasks />
            <p>To do list</p>
          </S.Item>
        </Link>
      </S.ContainerMenu>
    </S.Container>
  )
}

export default Menu
