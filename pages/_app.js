import Layout from 'components/Layout/Layout'
import 'styles/globals.scss'
import 'styles/nav.scss'
import 'styles/footer.scss'
import 'styles/banner.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
