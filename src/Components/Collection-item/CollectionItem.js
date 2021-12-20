import './CollectionItem.css'

const CollectionItem = ({ title, items }) => {
    return (
        <div className='item-container'>
            <h1 className='collection-title'>{title.toUpperCase()}</h1>
            <div className='items'>
                {
                    items.filter(
                        (fourItem,index) => {
                            if (index < 4) {
                                return fourItem;
                            } 
                        }
                    ).map(
                        (item) => {
                            return (
                                <div key={item.id} className='item'>
                                    <div
                                        className='item-image'
                                        style={{
                                            backgroundImage: `url(${item.imageUrl})`
                                        }}></div>
                                    <div className='item-footer'>
                                        <p className='item-name'>{item.name}</p>
                                        <span className='item-price'>{item.price}$</span>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
}

export default CollectionItem;