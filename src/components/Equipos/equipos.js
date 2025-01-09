import './equipos.css'
import Colaboradores from '../colaboradores/colaboradores'
const Equipos = (props) =>{

    const{colaborador, eliminarColaborador} = props

    const{colorPrimario,colorSecundario,titulo}= props.datos //Esta linea lo que hace es que destructura los datos y secionarlospara no escribir toda 
    //la linea en props.datos.titulo etc 

    const colorFondo = {
        backgroundColor : colorSecundario //Aqui agrupamos el estilo que se mnadara 
    }

    console.log(colaborador.length > 0) //Lo que estamos hacinedo es preguntar si la longitud es mayor a 0 
    //oseaque si hya un elemnto mostrandose despues en la linea de abajo mencionamos que si es true entonces me mueestre la seccion de lo contrario la quitara 

    return <> { colaborador.length > 0 &&
        <section className='card' style={colorFondo}> {/* Usamos el ya conocido style parahacer 
    estilos dentro del codigo html pero cambia porque debemos rempazar los giones por la letra mayuscula que sigie, ejemplo abajo  */}
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