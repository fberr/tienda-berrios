

const Item = (props) => {

    
 return ( 
    <> 
        <div className="col-lg-4">
            <h3>{props.name}</h3>
            <img src={props.pictureUrl} className="img-fluid" />
            <span style={{fontFamily:'Arial', color: 'gray', fontSize: 14}}>{props.description}</span>
            <p>Precio: {props.price}</p>
            <a href="" className="btn btn-dark">VER DETALLE</a> 

        </div>
        
    </>
)}



export default Item;