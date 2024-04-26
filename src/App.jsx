import "./App.css";
import { Toaster } from "react-hot-toast";
import TransactionsContainer from "./components/TransactionsContainer";

function App() {
  return (
    <div>
      <Toaster />
      <TransactionsContainer />
    </div>
  );
}

export default App;
