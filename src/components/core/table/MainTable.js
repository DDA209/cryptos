import React from 'react';
import { 
    Table
 } from 'react-bootstrap';

class MainTable extends React.Component{

    render(){
        return(
            <Table>
                <tr>
                    <th>{this.props.title}</th>
                    
                    {this.props.createNewLine()}

                </tr>
            </Table>            
        )
    }
}

export default MainTable;