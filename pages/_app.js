import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLayout from 'components/Layout/AdminLayout'
import MainLayout from 'components/Layout/MainLayout'
import { wrapper } from 'redux/store'
import 'styles/admin.scss'
import 'styles/banner.scss'
import 'styles/footer.scss'
import 'styles/globals.scss'
import 'styles/nav.scss'

function MyApp({ Component, pageProps }) {
  const Layout = Component.AdminLayout ? AdminLayout : MainLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
