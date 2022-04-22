import { Link } from "react-router-dom";


const Navbar = () => {

    return (
<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Form">Добавить пост</Link>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
        <li className="nav-item">
          <Link className="navbar-brand" to="/Something" aria-current="page">Что-то еще</Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to="/">Посмотреть посты</Link>
        </li>
        
    </div>
  </div>
</nav>

<h1 align="center">Инстаграмм ваших котиков </h1>
</>
    )
}

export default Navbar