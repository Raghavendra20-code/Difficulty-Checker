import {useState} from "react";
import s from './style.module.css'
const MenuListItem = (props) =>{
    const [isHovered,setIsHovered] = useState(false)

    const activate = () =>{
        setIsHovered(true);
    }
    const deactivate = () =>{
        setIsHovered(false)
    }

    const getBackgroundColor = () =>{
        if(isHovered){
            return "#a5e9ff";
        } else{
            if(props.isSelected){
                return "#26baea";
            }else {
                return "#eff0ef";
            }

        }
    }

    const onItemClick = () => {
        props.onClick(props.difficulty);
    };
    return(
        <div data-testid="MenuListItem"
            onClick={onItemClick}
        onMouseEnter={activate}
        onMouseLeave={deactivate}
        style={{backgroundColor:getBackgroundColor()}}
        className={s.contianer}>
            Set to: {props.difficulty}
        </div>
    )
}

export default MenuListItem;