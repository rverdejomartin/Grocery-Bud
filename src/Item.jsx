import { useState } from "react"
import './miEstilosCSS/estilosItems.css';

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
            <li className="lista">{nombre} <button onClick={entraEdicion} className="editar"></button> <button onClick={onDelete} className="eliminar"></button></li>
        </>;
    } else{
        jsxResultado = <>
            <li className="lista"><input type="text" value={nombreEditado} onChange={(e)=> setNombre(e.target.value)}/> <button onClick={avisarGuardado} className="guardarCambios"></button>
            <button onClick={cancelar} className="cancelar"></button>
            </li>
        </>;
    }
    return jsxResultado;
}