import { useState } from "react"

export default function Item({nombre, onDelete, onCambioTexto}){
    const [editar, setModoEdicion] = useState(false);
    const [nombreEditado, setNombre] = useState(nombre);
    let jsxResultado;

    function entraEdicion(){
        setModoEdicion(true);
    }
    function avisarGuardado(){
        setModoEdicion(false);
        onCambioTexto(nombreEditado);
    }

    function cancelar(){
        setModoEdicion(false);
        setNombre(nombre);
    }
    if(!editar){
        jsxResultado = <>
            <li>{nombre} <button onClick={entraEdicion}>Editar</button> <button onClick={onDelete}>Eliminar</button></li>
        </>;
    } else{
        jsxResultado = <>
            <li><input type="text" value={nombreEditado} onChange={(e)=> setNombre(e.target.value)}/> <button onClick={avisarGuardado}>Guardar cambios</button>
            <button onClick={cancelar}>Cancelar</button>
            </li>
        </>;
    }
    return jsxResultado;
}