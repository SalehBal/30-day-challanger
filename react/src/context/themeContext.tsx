import { createContext } from 'react';

const initialState = { currentTheme: 'dark' };

export const themeContext = createContext(initialState);

type Props = {
  children: JSX.Element | JSX.Element[];
};

function ThemeContextProvider({ children }: Props) {
  return <themeContext.Provider value={initialState}>{children}</themeContext.Provider>;
}

export default ThemeContextProvider;
