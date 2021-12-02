import './App.css';
import Navbar from './config/screens/navbar';
import { Provider } from "react-redux";
import store from './config/index/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Navbar />
      </div>
    </Provider>
  );
}

export default App;
