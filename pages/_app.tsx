import type { AppProps } from "next/app";
import '../styles/globals.css';  // Bring in Tailwind styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}