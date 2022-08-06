import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Chat from "./components/Chat";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Chat />
      <ToastContainer />
    </div>
  );
}

export default App;
