import MenuListItem from "../MenuListItem/MenuListItem";
import s from './style.module.css'
import {difficulties} from "../Constants";
const MenuList = (props) =>{
    return(
        <div className={s.container}>
            {
                difficulties.map((difficulties,index)=>(<MenuListItem
                    key = {index}
                    isSelected={props.difficulty === difficulties}
                    onClick={props.onItemClick}
                    difficulty= {difficulties}
                />))
            }
        </div>
    )
}

export default MenuList;