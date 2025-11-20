import { useState } from "react";
import Item from "./Item";
import ClearItems from "./ClearItems";

export default function Body(){
    const [productos, setProducto] = useState([]);
    const [contenidoInput, setContenido] = useState("");
    //guardar el contenido del input
    function change(e){
        setContenido(e.target.value);
    }
    //pulsa el boton, guarda el contenido en el array, y reinicia el input
    function pulseButton(){
        setProducto(
            [
                ...productos, contenidoInput
            ]
        );
        setContenido("");
    }

    function deleteItem(index){
        setProducto(
            productos.filter((producto, indice) => indice !== index)
        );
    }

    function deleteAll(){
        setProducto([]);
    }

    //mostrar la lista mapeada
    var lista = productos.map((producto, index) =>(
        <Item key={index} id={index} nombre={producto} onDelete = {(()=>deleteItem(index))}></Item>
    ))
    return(
        <>
            <div className="body">
                <input type="text" placeholder="e.g. eggs"
                value={contenidoInput} onChange={change}/>
                <button onClick={pulseButton} className="add">Submit</button>
                <ul>
                    {lista}
                </ul>
                <ClearItems onDelete={deleteAll}></ClearItems>
            </div>
        </>
    )
}