const url = 'https://api.coingecko.com/api/v3';

class Api {

    getList(input){

        const urlNext = {
            coins: `${url}/coins/list`,
            fiats: `${url}/simple/supported_vs_currencies`
        };
        const getUrl = urlNext[input];
        console.log('components/utils/Api#getList getUrl : ', getUrl);
        
        return fetch(getUrl)
        .then( res => res.json() )
        .then( json => {
            
            let result = json;

            if (input === 'coins') {
                result = json.map( (coin) => {
                    return coin.id
                });
            }
            // console.log(`components/utils/Api#getList${input} json : `, json);
            // console.log(`components/utils/Api#getList${input} result : `, result);
            result.sort();
            return result;
        });
    }
    

    getPrice(coin, fiat) {

        const getUrl = `/simple/price${url}?ids=${coin}&vs_currencies=${fiat}`;
        console.log('components/utils/Api#getPrice getUrl : ', getUrl);
        
        return fetch(getUrl)
        .then( res => res.json() )
        .then( json => {
            
            let result = json[coin][fiat];

            // console.log(`components/utils/Api#getPrice${input} json : `, json);
            // console.log(`components/utils/Api#getPrice${input} result : `, result);
            result.sort();
            return result;
        });

    }
//input === 'coins' ? json.map((coin) => {return } ) :


    // simpleConvert(coin, fiat){

    //     coin = 'bitcoin';
    //     fiat = 'eur';
    //     const urlSimpleConvert = `${url}/simple/price?ids=${coin}&vs_currencies=${fiat}`;
    //     console.log('components/utils/Api#simpleConvert urlSimpleCoinConv : ', urlSimpleConvert);
      
    //     fetch(urlSimpleConvert)
    //     .then ( res => res.json())
    //     .then( json => {
    //       let result = `${1} ${coin} = ${json[coin][fiat]} ${fiat}`;
    //       console.log('components/utils/Api#simpleConvert result :', result);
    //       return result
    //     });
 
    // }
}

export default new Api();