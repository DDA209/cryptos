// Called by components/containers/WalletsContainer.js

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
                        'Bitcoin', 'Ethereum', 'Tezos', 'Ripple', 'ZCash', 'Ethereum Classic'
                    ]
                },
                wallets: [
                    {
                        title: 'Binance', //https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md#account-information-user_data
                        values: [ 0.4, 8, 40 ] 
                    },
                    {
                        title: 'Coinhouse',
                        values: [ 0.1, 2, 0 ] 
                    },
                    {
                        title: 'Wirex',
                        values: [ 0.3, 0, 0 ] 
                    },
                    {
                        title: 'Coinbase',
                        values: [ 0.2, 4, 0 ] 
                    },
                    {
                        title: 'Uphold',
                        values: [ 0.2, 8, 0 ] 
                    },
                    {
                        title: 'Keplerk',
                        values: [ 1.2, 0.4, 5 ] 
                    },
                    {
                        title: 'Cryptonator',
                        values: [ 0.25, 4, 11 ] 
                    },
                    {
                        title: 'Coinomi',
                        values: [ 0.32, 4, 10 ] 
                    },
                    {
                        title: 'Shapeshift',
                        values: [ 0.2, 11, 0 ] 
                    },
                    {
                        title: 'Bitpay',
                        values: [ 0.2, 0, 0 ] 
                    },
                    {
                        title: 'Bittrex',
                        values: [ 0.9, 0, 0 ] 
                    },
                    {
                        title: 'Mycellium',
                        values: [ 0.2, 4, 20 ] 
                    },
                    {
                        title: 'Liquid',
                        values: [ 0.7, 4, 15 ] 
                    },
                    {
                        title: 'NiceHash',
                        values: [ 0.05, 4, 19 ] 
                    },
                    {
                        title: 'Kraken',
                        values: [ 20.1, 463, 0 ] 
                    },
                    {
                        title: 'Etoro',
                        values: [] 
                    }
                ]
                    
            },
            fiat: 'eur'
        }
    }




    render(){
        return(

            <Row noGutters={true}>

                <Col xs={12}>
                    <h2>Portefeuilles crypto</h2>
                </Col>

 
                <Col
                    xs={12}
                    className="mb-3"
                />


                <Col // Colonne immuable listant les cryptos
                    // xs="auto"
                    xs={6}
                    sm={5}
                    md={4}
                    lg={3}
                >
                    <SimpleTable
                        title = {this.state.table.coins.title}
                        coins = {this.state.table.coins.coins}
                        fiat = {this.state.fiat}

                    />
                     
                </Col>
                <Col
                    // xs="auto"
                    xs={6}
                    sm={7}
                    md={8}
                    lg={9}
                >
                    <MainTable
                            table = {this.state.table.wallets}
                            coins = {this.state.table.coins.coins}

                    />
                </Col>
                
            </Row>

        )
    }
}

export default Wallets;