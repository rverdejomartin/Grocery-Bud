export default function Header({title}){
    let estilo = {color: "lightblue"};
    return(
        <>
            <h1 style={estilo}>{title}</h1>
        </>
    )
}