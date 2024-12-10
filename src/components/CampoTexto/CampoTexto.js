import './CampoTexto.css'

//Una propo es una propiedad que se pasa es casi igual que los parametros en una funcion y perite pasar inforacion mediangte ellos
const CampoTexto = (props) => {
    console.log(props)
    const modificarPlaceholder = `${props.placeholder}...`
    return <div className="campo-texto">
        <label> {props.titulo}</label> {/* Para llamar la prop simpre hayq uea brir las llaves inddicando que se ins
        insertara cdigo js ademas poenos la indicacion prpos seguida del nombre que le dimos donde esta guardad el valor (
        recuerda es como una rpidad que se pasa de una funcion para no repetir codigo) */}
        <input placeholder={modificarPlaceholder} ></input> {/* Aqui lo que hacemos es llamar una variable ara de esa modificar el plceholder cuado sea y la prop
        ademas siempre cuando se inserta codigo js utilzar llaves */}
    </div>
}

export default CampoTexto 