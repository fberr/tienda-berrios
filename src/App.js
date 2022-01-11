import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from "./componentes/header/NavBar"
import ItemListContainer from "./componentes/itemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './componentes/Home';
import CartWidget from './componentes/header/CartWidget';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Carrito from './componentes/Carrito';
import {CustomProvider} from './componentes/CartContext';





const App = () => {
    return ( 
            <CustomProvider>
            <BrowserRouter>
                <NavBar/>
                <Container className="mt-5 text-center">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/todos" element={<ItemListContainer greeting="Hola amig@s, bienvenid@s a la Tienda Destroy !!"/>} />
                        <Route path="/carro" element={<Carrito/>} />
                        <Route path="/categoria/:cat" element={<ItemListContainer greeting="Hola amig@s, bienvenid@s a la Tienda Destroy !!"/>} />
                        <Route path="/producto/:id" element={<ItemDetailContainer/>} />
                        <Route path="*" />
                    </Routes>
                </Container>
            </BrowserRouter>
            </CustomProvider>
         
    ) 
    
}

export default App