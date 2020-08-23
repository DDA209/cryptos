import React from 'react';
import Convert from '../core/Convert.js';
import Api from '../utils/Api';


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
     
        // fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
        // .then( res => res.json() )
        // .then( json => {
        //     const fiats = json;
        //     console.log('components/containers/ConvertContainer #ComponentDidMount json : ', fiats);
        //     // this.setState({
        //     //     fiats
        //     // });

        // })

        Api.getList('fiats')
        .then((fiats) => {
            console.log('components/containers/ConvertContainer #ComponentDidMount fiats', fiats);
            this.setState({
                fiats
            });
            console.log('components/containers/ConvertContainer #ComponentDidMount this.state.fiats', this.state.fiats);
        })
        
        // Api.getList('coins')
        // .then((coins) => {
        //     console.log('components/containers/ConvertContainer #ComponentDidMount coins.id', coins.id);
        //     this.setState({
        //         coins = coins.id
        //     });
        //     console.log('components/containers/ConvertContainer #ComponentDidMount this.state.coins', this.state.coins);
        // })

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