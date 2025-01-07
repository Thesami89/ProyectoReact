import './equipos.css'
const Equipos = (props) =>{

    const{colorPrimario,colorSecundario,titulo}= props.datos //Esta linea lo que hace es que destructura los datos y secionarlospara no escribir toda 
    //la linea en props.datos.titulo etc 

    const colorFondo = {
        backgroundColor : colorSecundario //Aqui agrupamos el estilo que se mnadara 
    }

    return <section className='card' style={colorFondo}> {/* Usamos el ya conocido style parahacer 
    estilos dentro del codigo html pero cambia porque debemos rempazar los giones por la letra mayuscula que sigie, ejemplo abajo  */}
        <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
        <div>

        </div>
    </section>
}

export default Equipos