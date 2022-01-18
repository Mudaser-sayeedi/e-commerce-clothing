import './Shop.css';
import shopData from './shopData';
import CollectionItem from '../../Components/Collection-item/CollectionItem';

const Shop = ({ addToCard}) => { 
    return (
        <div className='shop-page'>
            <div className='collection-container'>
                {
                    shopData.map(
                        ({ id, ...otherData }) => {
                            return (
                                <CollectionItem
                                    key={id}
                                    {...otherData} addToCard={addToCard}>
                                </CollectionItem>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
}


export default Shop;