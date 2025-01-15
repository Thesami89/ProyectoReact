import './equipos.css'
import Colaboradores from '../colaboradores/colaboradores'
import hexToRgba from 'hex-to-rgba'
const Equipos = (props) =>{

    const{colaborador, eliminarColaborador,actualizarColor} = props

    const{colorPrimario,colorSecundario,titulo, id}= props.datos //Esta linea lo que hace es que destructura los datos y secionarlospara no escribir toda 
    //la linea en props.datos.titulo etc 

    const colorFondo = {
        backgroundColor : hexToRgba( colorPrimario , 0.5) //Aqui agrupamos el estilo que se mnadara  ademas usamos la biblioteca para hacer una opacidad dentro de react 
    }

   // console.log(colaborador.length > 0) //Lo que estamos hacinedo es preguntar si la longitud es mayor a 0 
    //oseaque si hya un elemnto mostrandose despues en la linea de abajo mencionamos que si es true entonces me mueestre la seccion de lo contrario la quitara 

    return <> { colaborador.length > 0 &&
        <section className='card' style={colorFondo}> {/* Usamos el ya conocido style parahacer 
    estilos dentro del codigo html pero cambia porque debemos rempazar los giones por la letra mayuscula que sigie, ejemplo abajo  */}
        <input
            type='color'
            className='input-color'
            value={colorPrimario}
            onChange={(evento)=>{ //con este evento le estamos quitando la responsabilidad al navegador de manejar el valor para tenerlo nosostros
                actualizarColor(evento.target.value,id) 
            }}  
        />
        <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
        <div className='colaboradores'>
            {colaborador.map( (datos,index) => <Colaboradores 
                datos = {datos} 
                key={index} 
                colorPrimario={colorPrimario} 
                eliminarColaborador={eliminarColaborador}
                />)}
        </div>
    </section>
    }</>
}

export default Equipos