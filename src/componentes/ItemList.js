import Item from './Item';


const ItemList = (props) => {

    return (
        <>
            <div className="row">
                {props.data.map (item => (
                    <Item key={item.id} id={item.id} name={item.name} price={item.price} stock={item.stock} categoria={item.categoria} pictureUrl={item.pictureUrl} />
                ))}
            </div>
        </>
    )
}

export default ItemList;