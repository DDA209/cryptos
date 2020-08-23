import React from 'react';
import Convert from '../core/Convert.js';
// import Api from '../utils/Api';


class ConvertContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            coins: [],
            fiats: [],
            convertion: ''
        }
    }

    componentDidMount(){

        console.log('components/containers/ConvertContainer #ComponentDidMount');
     
        fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
        .this( res => res.json() )
        .this( json => {
            const fiats = json;
            console.log('components/containers/ConvertContainer #ComponentDidMount json : ', fiats);
            // this.setState({
            //     fiats
            // });

        })

        // const coin = Api.getList('coins');
        // console.log('components/containers/ConvertContainer #ComponentDidMount coins', coin);        
        // const fiat = Api.getList('fiats');
        // console.log('components/containers/ConvertContainer #ComponentDidMount fiats', fiat);
        
    }

    render(){
        return(
            <Convert
            coins = {this.state.coins}
            fiats = {this.state.fiats}
            convertion = {this.state.conversion}
            />
        )
    }
}

export default ConvertContainer;