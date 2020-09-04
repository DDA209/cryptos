import React from "react";
import { 
    Carousel
} from 'react-bootstrap';

const Carousel = () => {
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-75"
            src="..\image\piggy-2889044_1920.jpg"
            alt="Quatre tirelires en forme de cochons"
            />
            <Carousel.Caption>
            <h3>Portefeuilles Crypto</h3>
            <p>Une synthèse des actifs sur les portefeuilles crypto.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-75"
            src="..\image\forpexels-david-mcbee-730547.jpg"
            alt="Pieces de bitcoins sur un tapis de billets de cent dollars"
            />

            <Carousel.Caption>
            <h3>Convertisseur</h3>
            <p>Convertion des cryptos en monnaies fiduciaires ou d'autres grandes cryptomonnaies.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-75"
            src="..\image\piggy-2889044_1920.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Plus de 5000 crypto actifs</h3>
            <p>Grace à la base de donnée de <a href="https://www.coingecko.com">CoinGecko</a></p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
};

export default Carousel;