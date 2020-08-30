// Called by components/containers/Wallets.js

import React from 'react';
import { 
    Table,
    Col,
    Row
 } from 'react-bootstrap';

class MainTable extends React.Component{


    /**
     * Rendu de la ligne titre de la table des wallets
     */
    renderTableTitles(){
        // console.log('render head main table')
        this.props.table.map((wallet, index) => {
            // console.log('render head main table: in map', wallet.title)
            return (
                <th key={index}>{wallet.title}</th>
            );
        });
    }

    /**
     * Rendu des lignes comptables de la table des wallets (solde pour chaque valeur et totaux)
     */
    renderTableBody(){
        console.log('components/core/table/MainTable#renderTableBody this.props.coins.length',this.props.coins.length);

        let result = [];

        for ( let i = 0; i <= this.props.coins.length; i++ ) {
            console.log('components/core/table/MainTable#renderTableBody in for i', i);
            if ( i < this.props.coins.length) {
                    
                result.push(

                    <tr key={i}>
                        {this.props.table.map((value, index) => {
                            console.log('components/core/table/MainTable#renderTableBody in map of for :value.values[i]', value.values[i]);
                            return (

                                <td key={index}>
                                    {Number.parseFloat(value.values[i]).toFixed(8)}
                                </td>

                            );
                        })}
                    </tr>

                )

                } else if ( i === this.props.coins.length ) {
                    result.push(

                        <tr key={i}>
                            {this.props.table.map((value, index) => {
                                console.log('components/core/table/MainTable#renderTableBody in map of for : Total');
                                return (
        
                                    <th key={index}>
                                        {`${Number.parseFloat(23.15454).toFixed(2)}€`}
                                    </th>
        
                                );
                            })}
                        </tr>
                    )
        
                }

            


        };
        console.log('components/core/table/MainTable#renderTableBody result', result);     
        return result
    }

    render(){
            
        // console.log('this.props.coins', this.props.coins);
        // console.log('this.props.title', this.props.title);

        return(

        //    this.renderTable()

        <Row>
            <Col>
                <Table responsive striped bordered variant="secondary">
                    <thead>
                        <tr>
                            {this.props.table.map((wallet, index) => {
                                // console.log('render head main table : in map', wallet.title)
                                return (
                                    <th key={index}>{wallet.title}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                            {this.renderTableBody()}
                    </tbody>
                </Table>
            </Col>
        </Row>
        )
    }
}

export default MainTable;