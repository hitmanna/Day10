import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Hat from './components/Hat/Hat';
import Header from './components/Header/Header';
import Insta from './components/Insta/Insta';
import { Main } from './components/Main/Main';



function App() {

const [posts, setPosts] = useState([])

const addNewPost = () => {
  setPosts(prev => [ ...prev, {
    id: Date.now(),
    title:'',
    text:'',
    picture:'',
    teg:''

  }])
  }

  return (
    <div className="container">
      < Header/>
      < Hat />
      < Form />
      < Main addNewPost = {addNewPost} />
    </div>
  );
}

export default App;
