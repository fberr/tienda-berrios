const ItemDetail = ({producto}) => {

    
    return ( 

        <>
            <div className="row">
                <div className="col-lg-6">
                    <img src={producto.pictureUrl} className="img-fluid"/>
                    
                </div>
                <div className="col-lg-6 text-start">
                    <h2>{producto.name}</h2>
                    <p style={{fontFamily:'Arial'}}>{producto.description}</p>
                    <hr/>
                    <h5 className="mt-4">PRECIO: ${producto.price}</h5>
                    
                </div>
            </div>
        </>

    

        )
}
export default ItemDetail;