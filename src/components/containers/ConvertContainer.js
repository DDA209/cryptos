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
     
        Api.getList('fiats')
        .then((list) => {
            // console.log('components/containers/ConvertContainer #ComponentDidMount fiats', fiats);
            this.setState({
                "fiats": list
            });
            // console.log('components/containers/ConvertContainer #ComponentDidMount this.state.fiats', this.state.fiats);
        })
        
        Api.getList('coins')
        .then((list) => {
            // console.log('components/containers/ConvertContainer #ComponentDidMount coins.symbol', coins);
            this.setState({
                "coins": list
            });
            // console.log('components/containers/ConvertContainer #ComponentDidMount this.state.coins', this.state.coins);
        })

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