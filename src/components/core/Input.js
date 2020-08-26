import React from 'react';
import { 
    Form,
    // InputGroup,

 } from 'react-bootstrap';


class Input extends React.Component{

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         form: {
    //             name: 'Nobody'
    //         }
    //     }
        
        // this.handleChange = this.handleChange.bind(this, 'name');
    // }


    // handleChange(event){

    //     console.log('handleChange event', 'event')

    // }

    // handleChange(change, event) {
    //     console.log('handleChange event', event);
    //     console.log('handleChange event.target.value', event.target.value);
    //     console.log('handleChange change', change);

    //     // let toChange = this.state.name;
    //     // toChange[change] = event.target.value;
    //     this.setState({
    //         name: this.state[change]
    //     });
        
    //     console.log('this.state.name', event.target.value)
    
    // }


    render(){
        return(


            // <InputGroup  className="input-group mb-3">

            //     <InputGroup.Prepend>
            //         <InputGroup.Text id="inputCoin">Utilisateur.rice</InputGroup.Text>
            //     </InputGroup.Prepend>

            //     <Form.Control
            //         // as = "select"
            //         className = "list"
            //         type="text" 
            //         value={this.props.input}
            //         onChange={this.props.onChangeInput}
            //     >
                    
            //         <option></option>
            //         <option>{"Didier"}</option>
            //         <option>{"Sarah"}</option>
            //         <option>{"Tempêt"}</option>
            //         <option>{"Cacahuète"}</option>

            //     </Form.Control>
                
            // </InputGroup >
            //     // <input 
            //     //     type="text" 
            //     //     className="form-control" 
            //     //     placeholder="Item" 
            //     //     aria-label="add" 
            //     //     value={this.props.input}
            //     //     onChange={this.props.onChangeInput}
            //     // />
            <Form.Group>
                <Form.Control 
                    type='text' 
                    placeholder='enter' 
                    defaultValue={this.props.form.name}
                    onChange={this.props.handleChange}
                >
                </Form.Control>
            </Form.Group>

        )
    }
}

export default Input;