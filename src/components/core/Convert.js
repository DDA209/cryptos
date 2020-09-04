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




class Convert extends React.Component {




    constructor(props){
        super(props)

        this.state = {
            isDisabled: 'disabled',
            coin: '',
            fiat: '',
            value: '',
            convertionResult: '...',
            
        };



        // console.log('components/core/Convert#constructor coin -', this.state.fiat, '-- fiat -', this.state.coin)
        this.handleChangeCoin = this.handleChangeCoin.bind(this);
        this.handleChangeFiat = this.handleChangeFiat.bind(this);
        this.onClickBtn = this.onClickBtn.bind(this);
    }

    onClickBtn(){
        // this.convert();

        if ( this.state.coin !== '' && this.state.fiat !== '' ){
            this.setState({
                convertionResult: 'Vérification du prix en cours'
            });
            Api.getPrice(this.state.coin, this.state.fiat)
            .then((change) =>{
                this.setState({
                    convertionResult: `1 ${this.state.coin} = ${change} ${this.state.fiat}`
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

        console.log('components/core/Convert#handleChangeCoin() coin');

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

        console.log('components/core/Convert#handleChangeCoin() fiat');

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

    render(){
    
        // console.log('components/core/Convert#Render this.state.value', this.state.value)
        let inputCoinValue = 1234;
        let inputFiatValue = 5678;

        return(

            <Row>

                <Col
                    xs={{ span: 12, order: "first"}}
                    className="mb-3"
                >
                </Col>

                <Col
                    xs={{ span: 12, order: 2 }}
                    md={10}
                    lg={6}
                    xl={7}
                >

                    <Row>

                        <Col
                            xs={{ span: 12, order: "'first" }}
                            sm={6}
                            lg={12}
                            xl={6}
                        >{/* <Col xs={{ span: 12, order: 'first' }} sm={12} lg={12}> */}
                            <List
                                default = "bitcoin" // not used yet
                                listOf = "coins"
                                listContent = {this.props.coins}
                                choice={this.state.coin}
                                value={inputCoinValue}
                                // value = {this.state.value}
                                handleChange = {this.handleChangeCoin}
                                
                            />
                        </Col>

                        <Col
                            xs={{ span: 12, order: 'last' }}
                            sm={6}
                            lg={12}
                            xl={6}
                        >
                            <List
                                default = "eur" // not used yet
                                listOf = "fiats"
                                listContent = {this.props.fiats}
                                choice={this.state.fiat}
                                value={inputFiatValue}
                                // value = {this.state.value}
                                handleChange = {this.handleChangeFiat}
                            />

                        </Col>

                    </Row>

                </Col>

                <Col
                    xs={{ span: 3, order: 3 }}
                    md={{ span: 2, order: 3 }}
                    xl={2}
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
                    xs={{ span: 9, order: "last" }}
                    sm={{ span: 7, order: "last" }}
                    md={{ span: 6, offset: 3 }}
                    lg={{ span: 4, offset: 0, order: 1 }}
                    xl={{ span: 3, offset: 0, order: 1 }}
                >
                
                    <Card

                    >
                        <Card.Body>
                            <Card.Text as="h5">{this.state.convertionResult}</Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
                {/* <Col xs={12}>
                    <Input
                        handleChange={this.handleChange}
                        // form={this.state.form}
                    >
                    </Input>
                </Col> */}

            </Row>
            
        )
    }
}

export default Convert;