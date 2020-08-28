import React from 'react';
import { 
    Table,
    Col,
    Row
 } from 'react-bootstrap';

class MainTable extends React.Component{

    renderTable(){
        return(
            <Row>
                {this.props.table.map((wallet, index) => {
                    return(
                        <Col xs="auto">
                            <Table key={index}>
                        

                                <thead>
                                    <tr>
                                        <th>{wallet.title}</th>
                                    </tr>
                                </thead>
                            

                        
                                <tbody>
                                    
                                    {wallet.values.map((value, index) => {
                                        console.log('in map', value)
                                        return(
                                            <tr key={index}>
                                                <th>
                                                    {value}
                                                </th>
                                            </tr>
                                        );
                                    })}
                                
                                </tbody>
                            </Table>
                        </Col>
                    );
                })}
            </Row>
        );

    }

    render(){

        // console.log('this.props.coins', this.props.coins);
        // console.log('this.props.title', this.props.title);

        return(

           this.renderTable()
      
        )
    }
}

export default MainTable;