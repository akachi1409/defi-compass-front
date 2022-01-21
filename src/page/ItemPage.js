import React, { Component} from "react";

import ItemHeader from "../components/basic/itemHeader/itemHeader";
import Item from "../components/item/item"
import Seller from "../components/item/seller"
import Collection from "../components/item/collection"
class ItemPage extends Component {
    render() {
        return (
            <>
                <ItemHeader/>
                <Item/>
                <Seller/>
                <Collection/>
            </>
        )
    }
}
export default ItemPage ;