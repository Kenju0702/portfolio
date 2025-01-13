import "./App.css";
import { AppProvider } from "./appcontext/AppContext";
import {Layout} from "./compoment/layout";

function App() {
  return (
    <>
      <AppProvider>
        <div className=" w-screen h-screen">
          <Layout />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
