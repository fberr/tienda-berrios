
import { Link } from 'react-router-dom'
const Item = (props) => {

    
 return ( 
    <> 
        <div className="col-lg-3 col-md-3">
            <h3>{props.name}</h3>
            <img src={props.pictureUrl} className="img-fluid" style={{height: 210}} />
            
            <p>Categoria: {props.categoria}</p>
            <span style={{fontFamily:'Arial', color: 'gray', fontSize: 14}}>stock: {props.stock}</span>
            <p>Precio: {props.price}</p>
            
            <Link to={`/producto/${props.id}`} className="btn btn-dark">ver detalle </Link>
            

        </div>
        
    </>
)}



export default Item;