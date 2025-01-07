import { useState } from 'react'
import './CampoTexto.css'

//Una propo es una propiedad que se pasa es casi igual que los parametros en una funcion y perite pasar inforacion mediangte ellos
const CampoTexto = (props) => {
    console.log(props)

   /* const [cambio, actualizarCambio] = useState('') //Recuerda que el useSatate sirve parahacer estados de los componentes */

    const modificarPlaceholder = `${props.placeholder}...`

    const mostrarCambio = (e) =>{ //Esta funcion nos ayuda para poder modificar el valor del imput dnde usamos 
        //el evento ynnavegamos ocn el para que de esa manera lleguemos al alor del traget que es cada ve que hay un cambio

        props.actualizarValor(e.target.value) //Esta linea actualiza el valor del imput mediante el target y esta vinculado con la funcion
    }

    return <div className="campo-texto">
        <label> {props.titulo}</label> {/* Para llamar la prop simpre hayq uea brir las llaves inddicando que se ins
        insertara cdigo js ademas poenos la indicacion prpos seguida del nombre que le dimos donde esta guardad el valor (
        recuerda es como una rpidad que se pasa de una funcion para no repetir codigo) */}
        <input  
            placeholder={modificarPlaceholder} 
            required ={props.required} 
            value={props.valor} //Lo que hacemos con esto es mencionar que el vaor del imput sera el vaor de la caja del useSatate y de esa manera nosotroa 
            //manipularlo mendiante el paramertro onchange
            onChange={mostrarCambio} //El onchange sirve cuand el imput recibe una actualizacion de la cual esta esta recibiendo como valor la funcion 
        >
            
        </input> {/* Aqui lo que hacemos es llamar una variable ara de esa modificar el plceholder cuado sea y la prop
        ademas siempre cuando se inserta codigo js utilzar llaves */}
    </div>
}

export default CampoTexto 