import Register from './Components/Register/Register';
import {Provider} from "react-redux";
import Store from './Components/Store/Store';

function App() {
  return (
    <>
      <Provider store={Store}>
        <Register />
      </Provider>
    </>
  );
}

export default App;
