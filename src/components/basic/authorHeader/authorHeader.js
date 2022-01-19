import React , { Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import './authorHeader.css';

class AuthorHeader extends Component {
    render() {
        return(
            <div className="authorHeader-contanier">
                <div className="authorHeader-overlay"></div>
                <div className="authorHeader-layout">
                    <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Row>
                            <h2 className="authorHeader-title">Author</h2>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
export default AuthorHeader;