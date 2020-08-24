import React from 'react';
import { 
    Button,
    Row,
    Col,
    Card
 } from 'react-bootstrap';
 import List from '../core/list/List'

class Convert extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            buttonState: true,
            coin: '',
            fiat: ''
        }
    }

    handleChange(event, type){

        console.log('components/core/Convert#handleChange BEFORE : coin -', this.state.fiat, '-- fiat -', this.state.coin)

        this.setState({
            type: event.target.value
        })

        console.log('components/core/Convert#handleChange AFTER : coin -', this.state.fiat, '-- fiat -', this.state.coin)
    }

    onClickBtn(){

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
                                value = {this.state.coin}
                                onChange = {this.handleChange}
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
                                value = {this.state.fiat}
                                onChange = {this.handleChange}
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
                        onClick={this.onClickBtn()}
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
                
                    <Card>
                        <Card.Body>
                            <Card.Text as="h5">1 truc = 5 machins</Card.Text>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>
        )
    }
}

export default Convert;