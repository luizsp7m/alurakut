import { ThemeStore } from '../src/context/ThemeStore';
import Theme from '../src/styles/Theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeStore>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ThemeStore>
    </>
  )
}