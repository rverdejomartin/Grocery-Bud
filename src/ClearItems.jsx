import './miEstilosCSS/estilosClear.css';

export default function ClearItems({onDelete}){
    return(
        <button onClick={onDelete} className="clear">Clear Items</button>
    )
}