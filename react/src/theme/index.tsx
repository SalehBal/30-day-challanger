import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, createContext } from 'react';
import { Theme as MuiTheme } from '@mui/material/styles';

type Props = {
  children: JSX.Element | JSX.Element[];
};

///////////////////////////////////////////////////////////////////////////////
type PaletteMode = 'light' | 'dark';
///////////////////////////////////////////////////////////////////////////////
const initialState = { currentTheme: 'dark' };

export const themeContext = createContext(initialState);
///////////////////////////////////////////////////////////////////////////////

function Theme(props: Props) {
  const { currentTheme } = useContext(themeContext);

  const theme = createTheme({ palette: { mode: currentTheme as PaletteMode } });

  return (
    <>
      <themeContext.Provider value={initialState}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </themeContext.Provider>
    </>
  );
}

export default Theme;
