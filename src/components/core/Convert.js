// Called by components/containers/ConvertContainer.js

import React from 'react';
import { 
    Button,
    Row,
    Col,
    Card
} from 'react-bootstrap';
import List from '../core/list/List';
import Api from '../utils/Api';


let inputCoinValue = undefined;
let inputFiatValue = undefined;

class Convert extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            isDisabled: 'disabled',
            coin: '',
            fiat: '',
            // value: '',
            convertionResult: '...',
            convertionFiatToCoin: '...',
            convertionCoinToFiat: '...',
        };

        // console.log('components/core/Convert#constructor coin -', this.state.fiat, '-- fiat -', this.state.coin)
        this.handleChangeCoin = this.handleChangeCoin.bind(this);
        this.handleChangeFiat = this.handleChangeFiat.bind(this);
        this.onClickBtn = this.onClickBtn.bind(this);


    }



    onClickBtn(){
        // this.convert();

        let convertionCoinToFiat = '';
        let convertionFiatToCoin = '';

        if ( this.state.coin !== '' && this.state.fiat !== '' ){
            this.setState({
                convertionResult: 'Vérification du prix en cours'
            });


            Api.getPrice(this.state.coin, this.state.fiat)
            .then((change) =>{
                // console.log('components/core/Convert#onClickBtn this.state.coin',this.state.coin);
                // console.log('components/core/Convert#onClickBtn this.state.fiat',this.state.fiat);
                // console.log('components/core/Convert#onClickBtn change',change);
                // console.log('components/core/Convert#onClickBtn ',);
                // console.log('components/core/Convert#onClickBtn this.state.coin',inputCoinValue);
                // console.log('components/core/Convert#onClickBtn inputFiatValue',inputFiatValue);
                !inputCoinValue || inputCoinValue === 0?convertionCoinToFiat = '...':convertionCoinToFiat = `${inputCoinValue}  ${this.state.coin} = ${ inputCoinValue * change } ${this.state.fiat}`;
                !inputFiatValue || inputFiatValue === 0?convertionFiatToCoin = '...':convertionFiatToCoin = `${inputFiatValue}  ${this.state.fiat} = ${ inputFiatValue / change } ${this.state.coin}`;
                
                this.setState({
                    convertionResult: `1 ${this.state.coin} = ${change} ${this.state.fiat}`,
                    convertionCoinToFiat,
                    convertionFiatToCoin
                });

            });
        } else {
            console.log('pas de conversion')
            return
        }

        // this.setState({
        //     convertionResult: `1 ${this.state.coin} = ${this.state.change} ${this.state.fiat}`
        // });
    }

    handleChangeCoin(event) {

        // console.log('components/core/Convert#handleChangeCoin() coin',inputCoinValue);

        let coin =  event.target.value;

        this.setState({
            coin
        });
        
        let isDisabled = true;
        coin && this.state.fiat ? isDisabled = false : isDisabled = true;

        this.setState({
            isDisabled
        })

    }

    handleChangeFiat(event) {
        // console.log('components/core/Convert#handleChange event', event);
        // console.log('components/core/Convert#handleChange event.target.value', event.target.value);

        // console.log('components/core/Convert#handleChangeCoin() fiat',inputFiatValue);

        let fiat = event.target.value;

        this.setState({
            fiat
        });
        
        let isDisabled = true;
        this.state.coin && fiat ? isDisabled = false : isDisabled = true;

        this.setState({
            isDisabled
        })

        // console.log('components/core/Convert#handleChangeFiat event.target.value', event.target.value)
        // console.log('components/core/Convert#handleChangeFiat this.state.fiat', this.state.fiat)
    }

    changeCoinValue(event){
        // console.log('components/core/Convert#changeCoinValue event:', event.target.value);
        // let newCoinValue = event.target.value;
        inputCoinValue = event.target.value;
        console.log('components/core/Convert#changeCoinValue inputCoinValue:', inputCoinValue);
    }

    changeFiatValue(event){
        // console.log('components/core/Convert#changeFiatValue event:', event.target.value);
        // let newFiatValue = event.target.value;
        inputFiatValue = event.target.value;
        console.log('components/core/Convert#changeFiatValue inputFiatValue:', inputFiatValue);
        
    }

    render(){
    
        // console.log('components/core/Convert#Render this.state.value', this.state.value)


        return(

            <Row>

                <Col
                    xs={{ span: 12, order: "first"}}
                    className="mb-3"
                >
                </Col>

                <Col 
                    xs={{ span: 12, order: 1}}
                    className="mb-5"
                >

                    <Row>
                        <Col
                            xs={{ span: 12, order: 1 }}
                            sm={{ span: 8, offset: 2, order: 1 }}
                            md={{ span: 6, offset: 3, order: 1 }}
                            xl={{ span: 4, offset: 4, order: 1 }}
                        >
                        
                            <Card>
                                <Card.Body>
                                    <Card.Text as="h5">{this.state.convertionResult}</Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>  
                    
                </Col>

                <Col // Conteneur des input lists
                    xs={{ span: 12, order: 2 }}
                >

                    <Row> 

                        <Col // liste des coins
                            xs={{ span: 12, order: "first" }}
                            sm={{ span: 10, offset: 1 }}
                            lg={{ span: 6, offset: 0 }}
                            xl={{ span: 4, offset: 2 }}
                        >
                            <List
                                default = "bitcoin" // not used yet
                                listOf = "coins"
                                listContent = {this.props.coins}
                                choice={this.state.coin}
                                // value={inputCoinValue}
                                value = {this.state.value}
                                handleChange = {this.handleChangeCoin}
                                valueChange = {this.changeCoinValue}
                                
                            />
                        </Col>

                        <Col // liste des devises
                            xs={{ span: 12, order: 'last' }}
                            sm={{ span: 10, offset: 1 }}
                            lg={{ span: 6, offset: 0 }}
                            xl={4}
                        >
                            <List
                                default = "eur" // not used yet
                                listOf = "fiats"
                                listContent = {this.props.fiats}
                                choice={this.state.fiat}
                                // value = {inputFiatValue}
                                value = {this.state.value}
                                // ref = {this.state.ref}
                                handleChange = {this.handleChangeFiat}
                                valueChange = {this.changeFiatValue}
                            />

                        </Col>

                    </Row> 

                </Col>{/*Conteneur des input lists */}

                <Col // Boutton convertir
                    xs={{ span: 4, offset: 4, order: 3 }}
                    md={{ span: 2, offset: 5 }}
                    xl={{ span: 2, offset: 5 }}
                    className="mb-5"
                >

                    <Button
                        variant="secondary"
                        block
                        disabled={this.state.isDisabled}
                        onClick={this.onClickBtn}
                    >
                        convertir
                    </Button>

                </Col>
                <Col
                    xs={{ span: 12, order: 4 }}
                >

                    <Row>
                        <Col // conversion Coin vers Fiat
                            xs={{ span: 12, order: "first" }}
                            sm={{ span: 8, offset: 2 }}
                            md={{ span: 6, offset: 0 }}
                            lg={{ span: 5, offset: 1 }}
                            xl={{ span: 4, offset: 2 }}
                            className="mb-3"
                        >
                        
                            <Card>
                                <Card.Body>
                                    <Card.Text as="h5">{this.state.convertionCoinToFiat}</Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col // conversion Fiat vers Coin
                            xs={{ span: 12, order: "last" }}
                            sm={{ span: 8, offset: 2 }}
                            md={{ span: 6, offset: 0 }}
                            lg={5}
                            xl={4}
                            className="mb-3"
                        >
                        
                            <Card>
                                <Card.Body>
                                    <Card.Text as="h5">{this.state.convertionFiatToCoin}</Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>  

                </Col>

            </Row>
            
        )
    }
}

export default Convert;