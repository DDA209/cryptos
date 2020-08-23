import React from 'react';
import { 
    Button,
    Form,
    InputGroup,
    Row,
    Col
 } from 'react-bootstrap';

class Convert extends React.Component {

    render(){
        return(

            <Row>
                <Col xs={{ span: 12, order: 'first'}} className="mb-3">
                </Col>

                <Col xs={{ span: 12, order: 2 }} md={10} lg={6}>

                    <Row>

                    <Col xs={{ span: 12, order: 'first' }} sm={6} lg={12} xl={6}>
                    {/* <Col xs={{ span: 12, order: 'first' }} sm={12} lg={12}> */}

                            <InputGroup  className="input-group mb-3">

                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputCoin">Crypto-monnaie</InputGroup.Text>
                                </InputGroup.Prepend>

                                {/* <FormControl /> */}

                                <Form.Control as="select" className="selectZone">
                                    <option>Coin ou token ...</option>
                                    <option>Bitcoin</option>
                                    <option>Ethereum</option>
                                    <option>Litecoin</option>
                                </Form.Control>
                                
                            </InputGroup >

                        </Col>

                        <Col xs={{ span: 12, order: 'last' }} sm={6} lg={12} xl={6}>

                            <InputGroup  className="input-group mb-3">

                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputCoin">Devise</InputGroup.Text>
                                </InputGroup.Prepend>

                                {/* <FormControl /> */}

                                <Form.Control as="select" className="selectZone">
                                    <option>Devise...</option>
                                    <option>EUR</option>
                                    <option>BTC</option>
                                    <option>ETH</option>
                                    <option>USD</option>
                                </Form.Control>



                            </InputGroup >

                        </Col>

                    </Row>

                </Col>

                <Col xs={{ span: 3, order: 3 }} md={{ span: 2, order: 3 }}  xl={1}>

                    <Button variant="secondary">
                        convertir
                    </Button>

                </Col>

                <Col xs={{ span: 6, order: 'last' }} md={{ span: 4, offset: 4 }} lg={{ span: 3, offset: 0, order: 1 }} xl={{ span: 3, offset: 0, order: 1 }}>
                
                    <div className="card">
                        <div className="card-body">
                            <h5>2606 Gluglu</h5>
                        </div>
                    </div>

                </Col>

            </Row>
        )
    }
}

export default Convert;