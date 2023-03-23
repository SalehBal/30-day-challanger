import MyRoutes from './routes';
import MyTheme from './theme';
function App() {
  return (
    <div className='App'>
      <MyTheme>
        <MyRoutes />
      </MyTheme>
    </div>
  );
}

export default App;
