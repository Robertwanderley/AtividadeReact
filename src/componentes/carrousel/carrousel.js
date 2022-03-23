import React from "react";
import { Carousel,Container} from "react-bootstrap"

function Carosel() {
    return (
        <section>
            <Container className="w-100">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/imagens/slidepe.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Recife</h3>
                        <p>Visão do Recife Antigo - Recife.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/imagens/sliderj.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Rio de Janeiro</h3>
                        <p>Visão do Corcovado - Rio de Janeiro.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/imagens/slidesp.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>São Pulo</h3>
                        <p>Visão da Ponte da Estaiada - São Paulo.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Container>

        </section>
    );
}
export default Carosel;