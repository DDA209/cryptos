import React from 'react';
import { 
    Table
 } from 'react-bootstrap';

class SimpleTable extends React.Component{

    render(){
        return(
            <Table>
                <tr>
                    <th>{this.props.title}</th>
                    {this.props.contents}
                    {this.props.table}
                    {this.props.createNewLine}

                </tr>
            </Table>            
        )
    }
}

export default SimpleTable;