import MyRoutes from './routes';
import MyTheme from './theme';
function App() {
  return (
    <div style={{ height: '100vh' }} className='App'>
      <MyTheme>
        <MyRoutes />
      </MyTheme>
    </div>
  );
}

export default App;
