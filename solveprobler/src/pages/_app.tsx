import type { AppProps } from 'next/app';
import { SentienceProvider } from '../context/SentienceContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SentienceProvider>
            <Component {...pageProps} />
        </SentienceProvider>
    );
}

export default MyApp;