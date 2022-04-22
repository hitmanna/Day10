import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import TodoListProvider from "./contexts/TodoListContext";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Something from "./components/Something/Something";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <TodoListProvider>
          <div className="container py-5">
      <Routes>
        <Route path = "/Form" element={ <Header /> }/>
        <Route path = "/" element={ < Main /> } />
        <Route path = "/Something" element={ <Something /> }/>
        </Routes>
      </div>
      
    </TodoListProvider>
      
        </BrowserRouter>
  );
}

export default App;
