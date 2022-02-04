
import ItemListContainer from "./itemListContainer";
import logoBlack from "../img/logo-destroy.png";
const Home = (props) => {
    return (
            <>
                <div style={{ backgroundImage: 'url(https://www.delmalclothing.cl/wp-content/uploads/2021/10/tetsuo.jpeg)', minHeight: '300px', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundPosition: 'center center' }}>
                    <img src={logoBlack} style={{ maxWidth: '400px', width: '100%'}}/>
                </div>
                <ItemListContainer greeting="Bienvenid@s a la Tienda Destroy !!"/>
            
            

            
                

            </>
        )
}

export default Home;