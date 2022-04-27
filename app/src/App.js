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
import Registration from "./components/Registration/Registration";
import SignIn from "./components/SignIn/SignIn";

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
        <Route path = "/Registration" element={ <Registration /> }/>
        <Route path = "/SignIn" element={ <SignIn /> }/>
        </Routes>
      </div>
      
    </TodoListProvider>
      
        </BrowserRouter>
  );
}

export default App;
