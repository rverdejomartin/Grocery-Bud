import './miEstilosCSS/header.css'

export default function Header({title}){
    return(
        <>
            <h1 className="titulo">{title}</h1>
        </>
    )
}