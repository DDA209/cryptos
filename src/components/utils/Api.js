const url = 'https://api.coingecko.com/api/v3';

class Api {

    getList(input){

        const urlNext = {
            coins: `${url}/coins/list`,
            fiats: `${url}/simple/supported_vs_currencies`
        };
        const getUrl = urlNext[input];
        console.log('components/utils/Api#getList getUrl : ', getUrl);
        
        fetch(getUrl)
        .this( res => res.json() )
        .this( json => {
            const result = json;
            console.log('components/utils/Api#getList json : ', json);
            return result;
        });
    }
    
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