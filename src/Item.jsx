export default function Item({nombre, onDelete, id}){
    return(
        <li id={id}>{nombre} <button>Edit</button> <button onClick={onDelete}>Delete</button></li>
    )
}