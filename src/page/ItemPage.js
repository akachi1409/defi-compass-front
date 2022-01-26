import React, { Component} from "react";

import ItemHeader from "../components/basic/itemHeader/itemHeader";
import Item from "../components/item/item"
import Seller from "../components/item/seller"
import Collection from "../components/item/collection"
import Footer from "../components/basic/Footer/footer.js"
class ItemPage extends Component {
    render() {
        return (
            <>
                <ItemHeader/>
                <Item/>
                <Seller/>
                <Collection/>
                <Footer/>
            </>
        )
    }
}
export default ItemPage ;