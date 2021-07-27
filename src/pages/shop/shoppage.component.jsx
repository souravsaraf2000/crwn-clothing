import React from 'react';

import './shoppage.style.scss';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/CollectionPreview/collectionpreview.component';

class ShopPage extends React.Component{
    state = {
        collections : SHOP_DATA
    }
    render()
    {
        const {collections} = this.state;
        return(
            <div className="shop-page">
            {
                collections.map(({id,...otherParameters}) =>
                    <CollectionPreview key={id} {...otherParameters}/>
                    )
            }
            </div>
        );
    }
}

export default ShopPage;