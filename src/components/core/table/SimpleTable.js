import React from 'react';
import { 
    Table
 } from 'react-bootstrap';


class SimpleTable extends React.Component{

    render(){

        console.log('this.props.coins', this.props.coins);
        console.log('this.props.title', this.props.title);

        return(

            <Table>
                <thead>
                    <tr>
                        <th>{this.props.title}</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {this.props.coins.map((coin, index) => {
                            console.log('in map', coin)
                            return(
                                <tr key={index}>
                                    <th>
                                        {coin}
                                    </th>
                                </tr>
                            );
                        })}
                        {this.props.createNewLine}
                   
                </tbody>
            </Table> 
      
        )
    }
}

export default SimpleTable;