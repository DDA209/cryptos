// Called by components/containers/Convert.js

import React from 'react';
import { 
    Form,
    InputGroup,
    FormControl
 } from 'react-bootstrap';

const label = {
    coins: 'Crypto',
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
                choice={this.props.choice}
                onChange={this.props.handleChange}
            >
                <option>{""}</option>

                {this.props.listContent.map( (data, index) => {
                    return(
                        <option key={index}>{data}</option>
                    );
                })}
            </Form.Control>
        );
    }
    /**
     * Insertion du montant à calculer
     */
    renderInputValue(){
        // console.log('this.props.listContent.length ',this.props.listContent.length );

        return (
            <FormControl
                as="input"
                type="number"
                value={this.props.value || ""}
                onChange={this.props.valueChange}
            />
        );
    }

    render(){

        return(

            <InputGroup  className="input-group mb-3">

                {this.renderInputValue()}
                {this.renderList()}

                <InputGroup.Prepend>
                    <InputGroup.Text id="inputCoin">{label[this.props.listOf]}</InputGroup.Text>
                </InputGroup.Prepend>

            </InputGroup >
        )
    }
}

export default List;