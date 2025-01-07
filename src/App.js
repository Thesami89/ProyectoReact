import Equipos from './components/Equipos/equipos';
import Header from './components/header/header';
import Formulario from './components/Formluario/formulario';
import MiOrg from './components/Miorg/Miorg';
import { useState } from 'react';

function App() {
  
  const [mostrarFormlulario, actualizarMostrar] = useState(false);

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormlulario) //Lo que hacemos es que la funcion actuializar actualiza el valor de la cajita y nosotros le  mnadamos el nuevo rsultuado
  }

  //Recordatorio: operador ternario = Ternario = condicion ? Mostrar : NoMostrar
  //Tambien se puede representar de la forma de condicion && mostrar

  //equipos para las secciones 

  const equipos = [
    //esto es un arreglo que dentro de el tiene unos objetos 
    {
      titulo:'programacion',
      colorPrimario:'#57C278 ',
      colorSecundario:'#D9F7E9'
    },
    {
      titulo:'Front-End',
      colorPrimario:'#82CFFA',
      colorSecundario:'#E8F8FF'
    },
    {
      titulo:'Data Science',
      colorPrimario:'#A6D157',
      colorSecundario:'#F0F8E2'
    },
    {
      titulo:'Devops',
      colorPrimario:'#E06B69',
      colorSecundario:'#FDE7E8'
    },
    {
      titulo:'UX y Diseño',
      colorPrimario:'#DB6EBF',
      colorSecundario:'#FAE9F5'
    },
    {
      titulo:'Movil',
      colorPrimario:'#FFBA05',
      colorSecundario:'#FFF5D9'
    },
    {
      titulo:'Inovacion y Gestion',
      colorPrimario:'#FF8A29',
      colorSecundario:'#FFEEDF'
    }

    

  ]

  return (
    <div>
      
      <Header />
      {/* {mostrarFormlulario == true ? <Formulario/> : <div></div>} */}
      {mostrarFormlulario && <Formulario equipo={equipos.map((datos)=> datos.titulo)}/> } {/* lo que estamos haciendo es mandar los datos del titulo hcaia el componente formulario
      mediante un mapeo para poder tomar solo la informacion del titulo */}
      <MiOrg cambiarMostrar = {cambiarMostrar}/> {/* Las funciones se pueden mandar por medio de props con la siguiente sintaxis que se muestra ennpanatalla  */}

      {
        equipos.map((equipo) => { //dentro del parentesis va a recibir todos los datos de cada uno de los objetos dentro de un arreglo
          return <Equipos datos={equipo} key={equipo.titulo}/> /* Usams el punto map ara recorrer el arreglo  */
        })
      }
      
    </div>
  );
}

export default App;
