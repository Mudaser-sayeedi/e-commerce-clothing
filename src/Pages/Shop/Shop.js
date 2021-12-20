import { Component } from 'react';
import './Shop.css';
import shopData from './shopData';
import CollectionItem from '../../Components/Collection-item/CollectionItem';

class Shop extends Component { 
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='shop-page'>
                <div className='collection-container'>
                    {
                        shopData.map(
                            ({ id, ...otherData }) => {
                                return (
                                    <CollectionItem
                                        key={id}
                                        {...otherData}>
                                    </CollectionItem>
                                )
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Shop;