import Equipos from './components/Equipos/equipos';
import Header from './components/header/header';
import Formulario from './components/Formluario/formulario';
import MiOrg from './components/Miorg/Miorg';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  
  const [mostrarFormlulario, actualizarMostrar] = useState(true);
  const [resgistroColaboradores, actualizarRegistroColaborador] = useState([
    {equipo: "Devops",
     foto:"https://github.com/Thesami89.png",
     nombre: "samuel",
     puesto:"instructor"
    }
  ]) //Este es un useState normal ero en el valor inicla se inicaliza con un nuevo arreglo vacion donde con 
  //la funcion actualizar registro se va a ir añadiendo nuevos datos al arrelo 

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormlulario) //Lo que hacemos es que la funcion actuializar actualiza el valor de la cajita y nosotros le  mnadamos el nuevo rsultuado
  }

  //Recordatorio: operador ternario = Ternario = condicion ? Mostrar : NoMostrar
  //Tambien se puede representar de la forma de condicion && mostrar

  //eliminaro colaborador 
  const eliminarColaborador = () =>{
    console.log('eliminar colaborador')
  }
  
  //Registro de colaboradores 

  const registrarColaborador = (colaborador) =>{ //esta funcion nos permite obtener lo datos que estan en el componente formulario donde se guardan en en lo que se llama colaborador
    console.log('Datos del colaborador', colaborador)
    actualizarRegistroColaborador([...resgistroColaboradores, colaborador]) //Eta es la fcion que actualiza el useState y se inicializa con un areglo donde los 
    // tres puntos antes del dato regitrocolaborador representa que hara una copia de los valores y despues añadira los nuevos valores al arreglo 
  }

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
      {mostrarFormlulario && <Formulario 
        equipo={equipos.map((datos) => datos.titulo)}
        colaborador = {registrarColaborador} /* estamos enviando la fucion por medio de props */
        /> 
        
      } {/* lo que estamos haciendo es mandar los datos del titulo hcaia el componente formulario
      mediante un mapeo para poder tomar solo la informacion del titulo */}
      <MiOrg cambiarMostrar = {cambiarMostrar}/> {/* Las funciones se pueden mandar por medio de props con la siguiente sintaxis que se muestra ennpanatalla  */}

      {
        equipos.map((equipo) => { //dentro del parentesis va a recibir todos los datos de cada uno de los objetos dentro de un arreglo
          return <Equipos 
            datos={equipo} 
            key={equipo.titulo} 
            colaborador={resgistroColaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador ={eliminarColaborador}
            /> //En esta lnea usamos el punto filter
            //para filtarar los datos y que solo se muestren lo que nosotros queremos.
            //el colaboraborador consu titulo tiene que coincidir con el equipo.tiutlo 
            /* Usams el punto map ara recorrer el arreglo  */
        })
      }

      <Footer/>
      
    </div>
  );
}

export default App;
