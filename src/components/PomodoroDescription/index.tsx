import * as S from './style'
import Image from 'next/image'
import checkBox from '../../static/images/checkbox_woman.png'
const PomodoroDescription: React.FC = () => {
  return (
    <S.Container>
      <section>
        <Image
          src={checkBox}
          width={400}
          height={300}
          alt="mulher clicando em um botão do tipo checklist"
        />

        <article>
          <h2>O que é a tática pomodoro?</h2>
          <p>
            A técnica pomodoro trata-se de uma ferramenta para melhorar sua
            produtividade, seja estudando ou trabalhando, trata-se de uma
            ferramenta para gerenciar melhor seu tempo.
          </p>
          <h3>Como funciona?</h3>
          <p>
            Antes de tudo precisamos definir uma coisa, cada um tem um tempo que
            consegue ficar focado, usar essa técnica deve ser adaptada para as
            suas necessidades
          </p>
          <h4>Pomodoro Tradicional</h4>
          <div>
            <S.Aside>
              <p>25:00</p>
              <span>minutos</span>
              <span>estudando / trabalhando</span>
            </S.Aside>
            <S.Aside>
              <p>5:00</p>
              <span>minutos de</span>
              <span>Descanso</span>
            </S.Aside>
          </div>
          <p>
            Esse tempo de 25/5 minutos possui uma alta preferência entre os
            praticantes, pois geralmente o cérebro consegue ficar focado por
            volta dos 30 primeiros minutos iniciais, caso esteja interessado,{' '}
            <a
              href="http://baomee.info/pdf/technique/1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              clique aqui para saber mais.
            </a>{' '}
          </p>
          <br />
          <h2>Como usar o aplicativo?</h2>
          <br />
          <p>
            Para usar, você precisará definir um tempo de produção e um tempo de
            descanso e a quantidade de ciclos, caso você defina 4 ciclos, ao
            acabar os 4 ciclos você terá completado 1 grande ciclo.
            <br />
            Para saber se está em momento de produzir ou descansar, basta ver a
            cor do cronômetro, vermelha singifica produção enquanto verde
            descanso. Após o final de cada ciclo tocará um toque por 6 segundos,
            para avisá-lo.
            <br />
            <br />
            Para começar um novo ciclo você deve reiniciar o contador, essa
            implementação foi feita para caso o usuário esqueça do aplicativo,
            ele não será rodado.
            <br />
            <br />O toque será feito após o fim do tempo de produção e após o
            fim do tempo de descanso, lembre-se disso.
          </p>
          <br />

          <h3>Acessar o código</h3>
          <p>
            Esse projeto foi desenvolvido em next.js junto com typescript, para
            ver o código fonte basta clicar no link abaixo, <br />
            <br />
            <a
              href="https://github.com/GuiCoelho-S/BoostYourself"
              target="_blank"
              rel="noreferrer"
            >
              Código fonte Github
            </a>
          </p>
        </article>
      </section>
    </S.Container>
  )
}

export default PomodoroDescription
