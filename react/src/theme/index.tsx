import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { themeContext } from '../context/themeContext';
type Props = {
  children: JSX.Element | JSX.Element[];
};

function Theme(props: Props) {
  const currentMode = useContext(themeContext);
  console.log(currentMode);
  const theme = createTheme({ palette: { mode: 'dark' } });
  return (
    <>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  );
}

export default Theme;
