import MyRoutes from './routes';
import MyTheme from './theme';
import ThemeContextProvider from './context/themeContext';
function App() {
  return (
    <div style={{ height: '100vh' }} className='App'>
      <ThemeContextProvider>
        <MyTheme>
          <MyRoutes />
        </MyTheme>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
