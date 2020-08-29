import React from 'react';
import { 
    Table
 } from 'react-bootstrap';


class SimpleTable extends React.Component{

    render(){

        // console.log('this.props.coins', this.props.coins);
        // console.log('this.props.title', this.props.title);

        return(

            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>{this.props.title}</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {this.props.coins.map((coin, index) => {
                        // console.log('in map', coin)
                        return(
                            <tr key={index}>
                                <td>
                                    {coin}
                                </td>
                            </tr>
                        );
                    })}

                    <tr>
                        <th>
                            Total en {this.props.fiat}
                        </th>
                    </tr>
                        
                </tbody>
            </Table> 
      
        )
    }
}

export default SimpleTable;