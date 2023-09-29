import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './redux/appstore';

const App = () =>
    <Provider store={appStore}>
      <Body />
    </Provider>

export default App;
