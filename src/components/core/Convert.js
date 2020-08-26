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
            input: '',
            convertionResult: '...',
            
        };

        console.log('components/core/Convert#constructor coin -', this.state.fiat, '-- fiat -', this.state.coin)
        console.log('components/core/Convert#constructor input -', this.state.input)
        this.handleChangeCoin = this.handleChangeCoin.bind(this);
        this.handleChangeFiat = this.handleChangeFiat.bind(this);
        this.onClickBtn = this.onClickBtn.bind(this);
    }

    onClickBtn(){
        
        this.setState({
            convertionResult: `1 ${this.state.coin} = ${this.state.change} ${this.state.fiat}`
        });
    }


    handleChangeCoin(event) {
        this.setState({
            coin: event.target.value
        });
        
        let isDisabled = true;
        
        this.state.coin && this.state.fiat ? isDisabled = false : isDisabled = true;

        this.setState({
            isDisabled
        })


        console.log('components/core/Convert# this.state.coin', this.state.coin)

    }

    handleChangeFiat(event) {
        console.log('components/core/Convert#handleChange event', event);
        console.log('components/core/Convert#handleChange event.target.value', event.target.value);

        this.setState({
            fiat: event.target.value
        });
        
        let isDisabled = true;
        
        this.state.coin && this.state.fiat ? isDisabled = false : isDisabled = true;

        this.setState({
            isDisabled
        })

        console.log('components/core/Convert#handleChangeFiat event.target.value', event.target.value)
        console.log('components/core/Convert#handleChangeFiat this.state.fiat', this.state.fiat)

    
    }

    componentDidMount(){
        if ( this.props.coin && this.state.fiat ){
            Api.getPrice(this.state.coin, this.state.fiat)
            .then((change) =>{
                console.log('components/core/Convert#componentWillMount change',change)
                this.setState({
                    change
                });
            });
        } else {
            console.log('pas de conversion')
            return
        }
    }


    render(){
    
        console.log('components/core/Convert#Render this.state.value', this.state.value)

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
                                default = "bitcoin" // not used yet
                                listOf = "coins"
                                listContent = {this.props.coins}
                                value={this.state.coin}
                                // value = {this.state.value}
                                handleChange = {this.handleChangeCoin}
                                
                            />
                        </Col>

                        <Col
                            xs={{ span: 12, order: 'last' }}
                            sm={4}
                            lg={12}
                            xl={4}
                        >
                            <List
                                default = "eur" // not used yet
                                listOf = "fiats"
                                listContent = {this.props.fiats}
                                value={this.state.fiat}
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
                    xs={{ span: 6, order: "last" }}
                    md={{ span: 4, offset: 4 }}
                    lg={{ span: 3, offset: 0, order: 1 }}
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