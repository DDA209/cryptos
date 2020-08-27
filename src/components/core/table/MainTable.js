import React from 'react';
import { 
    Table
 } from 'react-bootstrap';

class MainTable extends React.Component{

    // renderTable(){
    //     this.props.table.wallets.map( (element, index) => {

    //         return(
    //             <tr key={index}>
    //                 <th>{element.title}</th>
    //                 {/* {element.values.map( (value, index) => {

    //                     return (
    //                         <td key={index}>{value}</td>
    //                     );
                        
    //                 })} */}
    //             </tr>
    //         );
    //     })
    // }

    render(){
        return(
            <Table
            />
        )
    }
}

export default MainTable;