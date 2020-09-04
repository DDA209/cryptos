// Called by components/containers/HomeContainer.js
import React from 'react';
import { 
    Row,
    Col,
    // Carousel
} from 'react-bootstrap';
// import SliderImg1 from '../image/1.jpg';
// import SliderImg2 from '../image/2.jpg';
// import SliderImg3 from '../image/3.jpg';
// import SliderImg4 from '../image/4.jpg';

class Home extends React.Component {

    render(){

        return(
            <Row NoGutters>
                {/* <div className="homeCarousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={SliderImg1}
                            alt="Quatre tirelires en forme de cochons"
                            />
                            <Carousel.Caption>
                            <h3>Portefeuilles Crypto</h3>
                            <p>Une synthèse des actifs sur les portefeuilles crypto.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={SliderImg2}

                            alt="Pieces de bitcoins sur un tapis de billets de cent dollars"
                            />
                            <Carousel.Caption>
                                <h3>Convertisseur</h3>
                                <p>Convertion des cryptos en monnaies fiduciaires ou d'autres grandes cryptomonnaies.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={SliderImg3}
                            alt="Pièces reprsentant différentes cryptomonnaies et un lingo d'or d'un once du crédit Suisse"
                            />
                            <Carousel.Caption>
                                <h3>Plus de 5000 crypto actifs...</h3>
                                <p>Grace à la base de donnée de <a href="https://www.coingecko.com">CoinGecko</a></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={SliderImg4}
                            alt="Tapis de billets de plusieurs devises"
                            />
                            <Carousel.Caption>
                                <h3>Près de 60 devises et grandes cryptomonnaies</h3>
                                <p>Grace à la base de donnée de <a href="https://www.coingecko.com">CoinGecko</a></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div> */}

                <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            <h1>CRYPTOS</h1>
                            <p>Synthèse des portefeuilles crypto</p>
                        </Col>
                    </Row>

                </Col>
            </Row>
        );
    }
}

export default Home;