import React from 'react';
import { 
    Button,
    Row,
    Col,
    Card
 } from 'react-bootstrap';
 import List from '../core/list/List';
 import Input from './Input';

class Convert extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            buttonState: true,
            coin: '',
            fiat: '',
            value: '',
            input: '',
            form: {
                name: 'Nobody'
            }
        };

        console.log('components/core/Convert#constructor coin -', this.state.fiat, '-- fiat -', this.state.coin)
        console.log('components/core/Convert#constructor input -', this.state.input)
        // this.handleChange = this.handleChange.bind(this.handleChange);
        this.handleChange = this.handleChange.bind(this, 'name');
    }

    // handleChange(event){

    //     console.log('components/core/Convert#handleChange BEFORE input -', this.state.input, '-- coin -', this.state.fiat, '-- fiat -', this.state.coin)

    //     this.setState({
    //         input: event.target.value,
    //     });

    //     console.log('components/core/Convert#handleChange AFTER input -', this.state.input, '-- coin -', this.state.fiat, '-- fiat -', this.state.coin)

    // }

    onClickBtn(){
        return null;
    }




    onChangeInput(evt) { // valeur de l'input
        this.setState({
            input: evt.target.value
        });

    }

    handleChange(change, event) {
        console.log('handleChange event', event);
        console.log('handleChange event.target.value', event.target.value);
        console.log('handleChange change', change);

        // let toChange = this.state.name;
        // toChange[change] = event.target.value;
        this.setState({
            name: this.state[change]
        });
        
        console.log('this.state.name', event.target.value)
    
    }












    render(){
    
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
                    xl={5}
                >

                    <Row>

                        <Col
                            xs={{ span: 12, order: "'first" }}
                            sm={8}
                            lg={12}
                            xl={8}
                        >{/* <Col xs={{ span: 12, order: 'first' }} sm={12} lg={12}> */}
                            <List
                                default = "bitcoin"
                                listOf = "coins"
                                listContent = {this.props.coins}
                                // value = {this.state.value}
                                handleChange = {this.handleChange}
                                
                            />
                        </Col>

                        <Col
                            xs={{ span: 12, order: 'last' }}
                            sm={4}
                            lg={12}
                            xl={4}
                        >
                            <List
                                default = "eur"
                                listOf = "fiats"
                                listContent = {this.props.fiats}
                                // value = {this.state.value}
                                handleChange = {this.handleChange}
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
                        disabled={this.state.buttonState}
                        onClick={this.onClickBtn}
                    >
                        convertir
                    </Button>

                </Col>

                <Col
                    xs={{ span: 6, order: "last" }}
                    md={{ span: 4, offset: 4 }}
                    lg={{ span: 3, offset: 0, order: 1 }}
                    xl={{ span: 3, offset: 0, order: 1 }}
                >
                
                    <Card

                    >
                        <Card.Body>
                            <Card.Text as="h5">1 truc = 5 machins</Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
                <Col xs={12}>
                    <Input
                        handleChange={this.handleChange}
                        form={this.state.form}
                    >
                    </Input>
                </Col>

            </Row>
            
        )
    }
}

export default Convert;