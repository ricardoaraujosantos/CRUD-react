import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Router from "./Router";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
