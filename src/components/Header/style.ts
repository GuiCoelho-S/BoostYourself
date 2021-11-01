import styled from 'styled-components'

export const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  article {
    justify-self: flex-start;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    svg {
      width: 50px;
      height: 50px;
    }
    @media (max-width: 880px) {
    }
  }
`

export const Title = styled.h1`
  font-size: 2.4rem;
  font-family: 'Rye', cursive;
  padding: 0 20px;
`
