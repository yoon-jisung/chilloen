import Footer from 'components/Footer'
import styles from 'styles/Home.module.css'
import Navigator from 'components/Navigator'

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Navigator />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
