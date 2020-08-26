import React from 'react';
import { 
    Row,
    Col,
 } from 'react-bootstrap';

import SimpleTable from './table/SimpleTable';
import MainTable from './table/SimpleTable';

class Wallets extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            table: {
                coins: {
                    title: 'Coin / token',
                    coins: [
                        'Bitcoin','Ethereum','Tezos'
                    ]
                },
                wallets: [
                    {
                        title: 'Binance',
                        values: [ 0, 0, 0 ] 
                    },
                    {
                        title: 'Coinhouse',
                        values: [ 0, 0, 0 ] 
                    },
                    {
                        title: 'Coinbase',
                        values: [ 0, 0, 0 ] 
                    },
                    {
                        title: 'Wirex',
                        values: [ 0, 0, 0 ] 
                    }
                ]
                    
            }
        }
    }


    render(){
        return(

            <Row>

                <Col xs={12}>
                    <h2>Portefeuilles crypto</h2>
                </Col>

 
                <Col
                    xs={12}
                    className="mb-3"
                />

                <Row>


                    <Col // Colonne immuable listant 
                        xs={6}
                        sm={5}
                        md={4}
                        lg={3}
                        xl={2}
                    >
                        <SimpleTable
                            contents = "coins"
                            table = {this.state.table.coins}

                        />blublu
                        
                    </Col>
                    <Col // Colonne immuable listant 
                        xs={6}
                        sm={7}
                        md={8}
                        lg={9}
                        xl={10}
                    >
                        <MainTable
                            contents = "wallet"
                            table = {this.state.table.wallets}

                        />blibli

                    </Col>
                </Row>
                
            </Row>

        )
    }
}

export default Wallets;