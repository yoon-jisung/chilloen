import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

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

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Layout
