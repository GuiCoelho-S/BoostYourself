import type { AppProps } from 'next/app'
import GlobalStyle from 'src/style/GlobalStyle'
import { Provider } from 'react-redux'
import store from 'src/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
