import '../styles/global.css'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout";

function MyApp({Component, pageProps}: AppProps) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default MyApp
