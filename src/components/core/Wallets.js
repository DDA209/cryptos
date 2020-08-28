import React from 'react';
import { 
    Row,
    Col,
 } from 'react-bootstrap';

import SimpleTable from './table/SimpleTable';
import MainTable from './table/MainTable';

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
                        values: [ 0.4, 8, 40 ] 
                    },
                    {
                        title: 'Coinhouse',
                        values: [ 0.1, 2, 10 ] 
                    },
                    {
                        title: 'Wirex',
                        values: [ 0.3, 6, 30 ] 
                    },
                    {
                        title: 'Coinbase',
                        values: [ 0.2, 4, 20 ] 
                    }
                ]
                    
            }
        }

        this.createNewLine = this.createNewLine.bind(this)
    }


    createNewLine(){
        return
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


                <Col // Colonne immuable listant les cryptos
                    xs={6}
                    sm={5}
                    md={4}
                    lg={3}
                >
                    <SimpleTable
                        title = {this.state.table.coins.title}
                        coins = {this.state.table.coins.coins}
                        // createNewLine = {this.state.createNewLine}

                    />
                     
                </Col>
                <Col
                    xs={6}
                    sm={7}
                    md={8}
                    lg={9}
                >
                    <MainTable
                            table = {this.state.table.wallets}
                            // createNewLine = {this.state.createNewLine}

                    />
                </Col>
                
            </Row>

        )
    }
}

export default Wallets;