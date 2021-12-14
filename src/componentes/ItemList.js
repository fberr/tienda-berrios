import Item from './Item';


const ItemList = (props) => {


    return (
        <>
            <div className="row">
                {props.data.map (item => (
                    <Item key={item.id} name={item.name} pictureUrl={item.pictureUrl} price={item.price} description={item.description}/>
                ))}
            </div>

        </>



    )


}

export default ItemList;