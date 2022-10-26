import Footer from 'components/Footer'
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import Navigator from 'components/Navigator'

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>chilloen</title>
        <meta name="description" content="chilloen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="naver-site-verification" content="fe14618c575d76620332f7b393dadeab47aa4ffd" />
        <meta name="google-site-verification" content="13832HiZZ56rPWHrhg3ZCFg55Rpm8TuEYG_bnNXLDOo" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.chilloen.com" />
        <meta property="og:title" content="칠로엔" />
        <meta property="og:image" content="http://drive.google.com/uc?export=view&id=1AIlbZAJpy4T3VnaMQB-iszbAeq9xpHfH" />
        <meta property="og:description" content="모든 창작이 울려퍼질 수 있는 세상을 만듭니다." />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link
          rel="shortcut icon"
          href="https://storage.googleapis.com/cdn.appres.org/premium/526275b161effcdce43ecf71a8f0abf0f826ba46/icons/chillorn_logo.ico"
          type="image/x-icon"
        />

        <link
          rel="icon"
          href="https://storage.googleapis.com/cdn.appres.org/premium/526275b161effcdce43ecf71a8f0abf0f826ba46/icons/chillorn_logo.ico"
          type="image/x-icon"
        />
      </Head>
      <Navigator />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
