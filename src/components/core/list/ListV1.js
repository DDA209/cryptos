// Called by components/containers/Convert.js

import React from 'react';
import { 
    Form,
    InputGroup,
 } from 'react-bootstrap';


const label = {
    coins: 'Crypto-monnaie',
    fiats: 'Devise'
};

class List extends React.Component {

    renderList(){
        // console.log('this.props.listContent.length ',this.props.listContent.length );

        if ( this.props.listContent.length === 0 ){
            return (
                <Form.Control as="select" className="list">
                    <option>Chargement...</option>
                </Form.Control>
            )
        };

        return (
            <Form.Control
                as = "select"
                className = "list"
                type='text'
                value={this.props.value}
                onChange={this.props.handleChange}
            >
                <option>{""}</option>

                {this.props.listContent.map( (data, index) => {
                    return(
                        <option key={index}>{data}</option>
                    )
                })}
            </Form.Control>
        )
    }

    render(){

        return(

            <InputGroup  className="input-group mb-3">

                <InputGroup.Prepend>
                    <InputGroup.Text id="inputCoin">{label[this.props.listOf]}</InputGroup.Text>
                </InputGroup.Prepend>

                {this.renderList()}

            </InputGroup >
        )
    }
}

export default List;