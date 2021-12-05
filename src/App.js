import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from "./componentes/header/NavBar"
import ItemListContainer from "./componentes/itemListContainer"


const App = () => {
    return ( 
        <>
            <NavBar/>
            <Container className="mt-5 text-center">
                <ItemListContainer greeting="Hola amig@s, bienvenid@s a la Tienda Destroy !!"/>
            </Container>
        
       </>
    ) 
    
}

export default App