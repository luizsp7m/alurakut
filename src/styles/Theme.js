import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../context/ThemeStore";

import GlobalStyle from './GlobalStyle';

const themes = {
  light: {
    backgroundColor: '#D9E6F6',
    menuColor: '#308BC5',
    inputMenuColor: '#5579A1',
    logoMenuColor: '#fafafa',
    boxBackgroundColor: '#FFFFFF',
    boxTitleColor: '#161B22',
    boxLiColor: '#5A5A5A',
    boxInputColor: '#F4F4F4',
    boxInputTextColor: '#222',
    boxSmallTitle: '#333',
  },

  dark: {
    backgroundColor: '#090C10',
    menuColor: '#161B22',
    inputMenuColor: '#0D1117',
    logoMenuColor: '#fafafa',
    boxBackgroundColor: '#161B22',
    boxTitleColor: '#fafafa',
    boxLiColor: '#ccc',
    boxInputColor: '#0D1117',
    boxInputTextColor: '#ccc',
    boxSmallTitle: '#fafafa',
  },
}

function Theme({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[theme]}>
      { children}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default Theme;