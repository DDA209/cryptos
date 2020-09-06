// Called by Api.js

import React from 'react';
import Convert from '../core/Convert.js';
// import Convert from '../core/ConvertV1.js';
import Api from '../utils/Api';


class ConvertContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            coins: [],
            fiats: [],
            // change: ''
        }
    }

    componentDidMount(){

        console.log('components/containers/ConvertContainer #ComponentDidMount');
        
        if (this.state.coins.length === 0){

            Api.getList('fiats')
            .then((list) => {
                // console.log('components/containers/ConvertContainer #ComponentDidMount fiats', fiats);
                this.setState({
                    "fiats": list
                });
                // console.log('components/containers/ConvertContainer #ComponentDidMount this.state.fiats', this.state.fiats);
            });
            
        };

        if (this.state.coins.length === 0){

            Api.getList('coins')
            .then((list) => {
                // console.log('components/containers/ConvertContainer #ComponentDidMount coins.symbol', coins);
                this.setState({
                    "coins": list
                });
                // console.log('components/containers/ConvertContainer #ComponentDidMount this.state.coins', this.state.coins);
            });
            
        };            

    }

    

    render(){
        return(
            <Convert
            coins = {this.state.coins}
            fiats = {this.state.fiats}
            // change = {this.state.change}
            />
        )
    }
}

export default ConvertContainer;