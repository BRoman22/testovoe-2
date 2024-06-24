import { store } from './store';
import { Provider } from 'react-redux';
import { Providers } from './layouts';

function App() {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
}

export default App;
