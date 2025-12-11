import { useState, useEffect } from "react";
import Item from "./Item";
import ClearItems from "./ClearItems";
import './miEstilosCSS/body.css'

export default function Body(){

    // 1. Inicializar el estado con los datos de localStorage
    const [productos, setProducto] = useState(() => {
        const storedProducts = localStorage.getItem("shoppingList");
        return storedProducts ? JSON.parse(storedProducts) : [];
    });

    const [contenidoInput, setContenido] = useState("");

    useEffect(() => {
        localStorage.setItem("shoppingList", JSON.stringify(productos));
    }, [productos]); // Este efecto se ejecuta cada vez que 'productos' cambia

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
        // Al actualizar, el useEffect se encargará de guardar
        setProducto(nuevoProducto);
    }

    const listaItems = productos.map((nombreProducto, index) => (
        <Item
            key={index}
            nombre={nombreProducto} 
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