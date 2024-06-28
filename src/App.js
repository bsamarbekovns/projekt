import './App.css';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import List from "./components/List/List";
import Search from "./components/Search/search";
import Button from "./components/Button/Button";

const tasks = [
  {
    id:1 ,
    task: 'coding'
  },
  {
    id:2,
    task: 'eat'
  },
  {
    id:3,
    task: 'sleep'
  }
]
function App() {
  const [show, setShow] = useState(false)
  const handleOpen = () => {
    setShow(!show)
  }

    const handleClick = () => {
      console.log(123)
    }




  return (
    <div className="App">
      <button onClick={handleOpen}>Открыть</button>
      {show && <Modal handleOpen={handleOpen}>
        </Modal>
      }
      <List tasks={tasks}/>
      <Button onclick={handleClick} label="Кликни меня"/>
      <Search/>
    </div>
  );
}


export default App;
