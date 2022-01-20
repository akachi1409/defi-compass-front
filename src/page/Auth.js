import React, {Component} from 'react';

import AuthorHeader from '../components/basic/authorHeader/authorHeader';
import Author from "../components/author/author.js"
import Footer from "../components/basic/Footer/footer.js"
class Auth extends Component {
    render() {
        return (
            <div>
                <AuthorHeader/>
                <Author/>
                <Footer/>
            </div>
        )
    }
}
export default Auth;