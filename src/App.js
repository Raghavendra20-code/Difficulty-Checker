import DisplayDifficulty from "./Components/DisplayDifficulty/DisplayDifficulty";
import s from './style.module.css'
import MenuList from "./Components/MenuList/MenuList";
import {useState} from "react";

function App() {
  const [currentDifficulty,setCurrentDifficulty] = useState("");

  const onMenuListItemClick  = (difficulty) =>{
      console.log(difficulty)
    setCurrentDifficulty(difficulty);
  }
  return (
    <div >
      <h1 style={{ textAlign: "center" }}>Select your React difficulty</h1>
        <div className={s.workspace}>
            <MenuList onItemClick = {onMenuListItemClick} difficulty = {currentDifficulty}/>
            <DisplayDifficulty difficulty ={currentDifficulty}/>
        </div>
    </div>
  );
}

export default App;
