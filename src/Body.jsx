import { useState } from "react";
import Item from "./Item";
import ClearItems from "./ClearItems";
import './miEstilosCSS/body.css'

export default function Body(){

    const [productos, setProducto] = useState([]);
    const [contenidoInput, setContenido] = useState("");

    function change(e){
        setContenido(e.target.value);
    }
    
    function pulseButton(){
        if(contenidoInput.trim() !== ''){
            
            setProducto(
                [...productos, contenidoInput] 
            );
            setContenido("");
        }
    }

    function deleteItem(index){
        setProducto(
            productos.filter((producto, indice) => indice !== index)
        );
    }

    function deleteAll(){
        setProducto([]);
    }

    function update(nuevoTexto, id){
        const nuevoProducto = [...productos];
        nuevoProducto[id] = nuevoTexto;
        setProducto(nuevoProducto);
    }

    const listaItems = productos.map((nombreProducto, index) => (
        <Item
            key={index}
            nombre={nombreProducto} // Ahora es solo el string
            onDelete={()=>deleteItem(index)}
            onCambioTexto={(nuevoNombre) => update(nuevoNombre, index)}
        />
    ));
    return(
        <>
            <div className="body">
                <input type="text" placeholder="e.g. eggs"
                value={contenidoInput} onChange={change} className="addItemInput"/>
                <button onClick={pulseButton} className="add">Submit</button>
                <ul>
                    {listaItems}
                </ul>
                <ClearItems onDelete={deleteAll}></ClearItems>
            </div>
        </>
    )
}