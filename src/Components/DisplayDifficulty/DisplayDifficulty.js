import s from './style.module.css'
const DisplayDifficulty = (props) =>{
    return(
        <div className={s.container} data-testid="Display">
            {
                props.difficulty?`Difficulty set to ${props.difficulty}`:'No difficulty set'
            }
        </div>
    )
}

export default DisplayDifficulty;