import React from 'react';
import { 
    Row,
    Col,
 } from 'react-bootstrap';

class Wallets extends React.Component {

    render(){
        return(

            <Row>

                <Col xs={12}>
                    <h2>Portefeuilles crypto</h2>
                </Col>
                <Col
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    xl={2}



                >
                    <Table
                        contents = "coins"
                        table = {this.state.table}

                    />
                </Col>
            </Row>

        )
    }
}

export default Wallets;