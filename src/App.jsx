import "./App.css";
import { AppProvider } from "./appcontext/AppContext";
import {Layout} from "./compoment/layout";

function App() {
  return (
    <>
      <AppProvider>

          <Layout />

      </AppProvider>
    </>
  );
}

export default App;
