import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Test from "@pages/Test";
import CardListAddButton from "./components/test/CardListAddButton";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="test" Component={Test}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
