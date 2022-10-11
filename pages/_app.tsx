import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Layout from 'components/Layout'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global-style'
import theme from 'styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
