import './ListaOpciones.css'
const ListaOpciones = (props) =>{

   /*  const equipos = [
        'programacion',
        'Front-End',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Movil',
        'Inovacion y Gestion',

    ] */

    /* La sintaxis del .map es a siguinete:
    
    Arreglo.map((nombre que recibe los datos, index) => {
        return ponemos l que quermos que nos retorne e puede utiliar codig html y js 1
        })*/

    const actualizarEquipos = (e) =>{
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={actualizarEquipos}>
            <option value={''} disabled defaultValue={''} hidden>Selecciona el equipo</option>
            {props.equipo.map((equipo, index) => { // (estamos recibiendo la informacion de formulario y epsues hacemos el meapeo de la inforamion y de esa manera se muestre)Aqui estamos ussando el .map para de sa manera hacer un mapeo de del arreglo
            //el .map solo se puede utilizar con arreglos n con objetos ni nada parecido
            //la plabra equipo recibe los valores del arreglo y los almacen ahi recurda que es un callback 
                return <option key={index}>{equipo}</option> 
                //El key es una lave para identificar cada elemto del arreglo y debe ser unica por eso se debe usar el key y el index 
            })}
        </select>
    </div>
}

export default ListaOpciones