
import { Link } from 'react-router-dom'
const Item = (props) => {

    
    return ( 
        <> 
            <div className="col-lg-3 col-md-3">
                <h3>{props.name}</h3>
                <Link to={`/producto/${props.id}`}>
                    <img src={props.pictureUrl} className="img-fluid" style={{height: 210}} alt={props.name} />
                </Link>
                <p>Categoria: {props.categoria}</p>
                <span style={{fontFamily:'Arial', color: 'gray', fontSize: 14}}>stock: {props.stock}</span>
                <p>Precio: {props.price}</p>
                <Link to={`/producto/${props.id}`} className="btn btn-dark">VER DETALLE </Link>
            </div>
            
        </>
    )
}



export default Item;