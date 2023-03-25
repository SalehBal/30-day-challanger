import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, createContext } from 'react';
// import { themeContext } from '../context/themeContext';
type Props = {
  children: JSX.Element | JSX.Element[];
};
///////////////////////////////////////////////////////////////////////////////
const initialState = { currentTheme: 'dark' };

export const themeContext = createContext(initialState);
///////////////////////////////////////////////////////////////////////////////

function Theme(props: Props) {
  const { currentTheme } = useContext(themeContext);
  console.log('object', currentTheme);

  const theme = createTheme({ palette: { mode: currentTheme } });

  return (
    <>
      <themeContext.Provider value={initialState}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </themeContext.Provider>
    </>
  );
}

export default Theme;
