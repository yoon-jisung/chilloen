import Footer from 'components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Navigator from 'components/Navigator'

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>chilloen</title>
        <meta name="description" content="chilloen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
