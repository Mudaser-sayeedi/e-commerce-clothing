import { Component } from 'react';
import './Home.css'
import MenuItem from '../../Components/Menu-item/MenuItem';


class Home extends Component { 
    constructor() { 
        super();
        this.state = {
            sectionsData : [
                {
                    title: 'HATS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'JACKETS',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'SNEAKERS',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'WOMENS',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    classN: 'auto',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'MENS',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    classN: 'auto',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }
   
    
    render() { 
        return (
            <div className="menu">
                {
                    this.state.sectionsData.map(
                        ({ id, ...sectionData }) => {
                            return (
                                <MenuItem
                                    key={id}
                                    {...sectionData}>
                                </MenuItem>
                            )
                })}
            </div>
        );
    }
}

export default Home;