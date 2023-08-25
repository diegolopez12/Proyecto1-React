import "./CampoTexto.css"

const CampoTexto = (props) =>{

const placeholderModificado = `${props.placeholder}...`

    return <div className="campo-texto">

<label> {props.titulo} </label>
<input type="text"  placeholder = {placeholderModificado}/>


    </div>
}


export default CampoTexto