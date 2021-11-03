/* eslint-disable @next/next/no-page-custom-font */
import { Container, ContainerIndex } from 'src/components/design/container'
import * as S from 'src/style/page/tasks.style'
import Head from 'next/head'
import Header from 'src/components/Header'
import Menu from 'src/components/Menu'
import ModalTask from 'src/components/ModalTask'
import ToDoItem from 'src/components/ToDoItem'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const Tasks: React.FC = () => {
  const totalTasks = useSelector((state: RootState) => state.globalTasks)

  return (
    <Container>
      <Head>
        <title>Boost yourself</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rye&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContainerIndex>
        <Header />
        <S.ContainerTasks>
          <ModalTask />
          <aside>
            <span></span>
            <h2>Tarefas</h2>
            <S.GridTasks>
              {totalTasks.map((item) => (
                <ToDoItem key={item.text} text={item.text} />
              ))}
            </S.GridTasks>
          </aside>
        </S.ContainerTasks>
      </ContainerIndex>
      <Menu />
    </Container>
  )
}
export default Tasks
