import React, {Component} from "react";

import GeneratorHeader from "../components/basic/generatorHeader/generatorHeader";
import NFT from "../components/nft/nft"
import Footer from "../components/basic/Footer/footer.js"
class NFTGenerator extends Component {
    render() {
        return (
            <>
                <GeneratorHeader/>
                <NFT/>
                <Footer/>
            </>
        )
    }
}
export default NFTGenerator;