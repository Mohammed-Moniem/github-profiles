import "./App.css";
import store from "./redux/root/store";
import { Provider } from "react-redux";
import Profiles from "./pages/Profiles";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Profiles />
      </div>
    </Provider>
  );
}

export default App;
