import { createTheme, ThemeProvider } from '@mui/material/styles';

type Props = {
  children: JSX.Element | JSX.Element[];
};

function Theme(props: Props) {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  );
}

export default Theme;
