import { Provider } from 'react-redux';
import Body from './components/Body';
import logo from './logo.svg';
import appStore from './utils/appStore';

function App() {
  return (
    <>
    <Provider store={appStore}>
      <Body/>
    </Provider>
    </>
  );
}

export default App;
