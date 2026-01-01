import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import FeaturedPrizes from '../components/FeaturedPrizes';
import Countdown from '../components/Countdown';
import BenefitCard from '../components/BenefitCard';
import PricingCard from '../components/PricingCard';
import FAQItem from '../components/FAQItem';

const pricingPlans = [
    {
        name: 'Mensual',
        price: 6,
        features: [
            'Participas en TODOS los premios semanales',
            'Descuentos en marcas aliadas',
        ]
    },
    {
        name: '3 Meses',
        price: 16,
        features: [
            'Participas en TODOS los premios semanales',
            'Descuento en RedDragon',
            'Te ahorras mas de s/36 al año p mi neto'
        ]
    }
];

const faqs = [
    {
        question: '¿Qué es No Hay Sin Suerte?',
        answer: 'No Hay Sin Suerte es una comunidad exclusiva de suscriptores donde participas en sorteos semanales con premios increíbles. Forma parte de una comunidad ganadora y accede a beneficios exclusivos.'
    },
    {
        question: '¿Cómo me vuelvo parte de No Hay Sin Suerte?',
        answer: 'Solo necesitas elegir un plan de suscripción que se ajuste a tu presupuesto. Una vez suscrito, automáticamente participarás en todos nuestros sorteos semanales.'
    },
    {
        question: '¿Puedo participar desde el extranjero?',
        answer: 'Claro que sí. Nuestros sorteos están abiertos para participantes de diferentes países. Verifica los términos y condiciones para más detalles sobre tu ubicación específica.'
    },
    {
        question: '¿Cuándo son las ediciones de premios semanales?',
        answer: 'Los sorteos se realizan cada semana. Te enviaremos notificaciones para que no te pierdas ninguno de nuestros eventos. El próximo sorteo es el 29 de enero de 2026.'
    },
];

export default function Home() {
    return (
        <div className="w-100">
            <HeroSection />

            <FeaturedPrizes />

            <section>
                <Container>
                    <Countdown />
                </Container>
            </section>


            {/* Winners Section */}
            <section className="py-5 px-4" style={{ backgroundColor: '#000', paddingBottom: '280px', position: 'relative' }}>
                <Container>
                    {/* Title overlaid on winners */}
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '0',
                        right: '0',
                        zIndex: '10',
                        pointerEvents: 'none',
                        fontFamily: '',
                        fontStyle: 'italic',
                    }}>
                        <div style={{ paddingLeft: 'clamp(10px, 3vw, 40px)', lineHeight: '30px' }}>
                            <h2 style={{
                                color: '#ff00ff',
                                fontSize: 'clamp(24px, 5vw, 60px)',
                                fontWeight: '500',
                                textAlign: 'left',
                                textTransform: 'uppercase',
                                lineHeight: '1.1',
                                marginLeft: 'clamp(20px, 5vw, 80px)',
                            }}>
                                ¡TU PUEDES SER EL<br />
                            </h2>
                            <h2 style={{
                                color: '#ff00ff',
                                fontSize: 'clamp(28px, 6vw, 72px)',
                                fontWeight: 'bold',
                                marginLeft: 'clamp(30px, 8vw, 150px)',
                                textTransform: 'uppercase',
                                lineHeight: '1.1',
                                marginTop: '10px'
                            }}>
                                PROXIMO GANADOR
                            </h2>
                        </div>
                    </div>

                    {/* Winners Grid - Horizontal Zig Zag */}
                    <div style={{
                        marginTop: '100px',
                        display: 'flex',
                        gap: 'clamp(10px, 3vw, 20px)',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        overflow: 'visible',
                    }}>
                        {/* Winner 1 - Top */}
                        <div style={{
                            border: 'clamp(2px, 1vw, 4px) solid #ff00ff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: 'clamp(200px, 50vw, 280px)',
                            width: 'clamp(150px, 40vw, 240px)',
                            background: '#fff',
                            flexShrink: 0,
                        }}>
                            <img
                                src=""
                                alt="Ganador 1"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>

                        {/* Winner 2 - Bottom (pushed down) */}
                        <div style={{
                            border: 'clamp(2px, 1vw, 4px) solid #ff00ff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: 'clamp(200px, 50vw, 280px)',
                            width: 'clamp(150px, 40vw, 240px)',
                            background: '#fff',
                            flexShrink: 0,
                            marginTop: 'clamp(30px, 10vw, 80px)',
                        }}>
                            <img
                                src=""
                                alt="Ganador 2"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>

                        {/* Winner 3 - Top */}
                        <div style={{
                            border: 'clamp(2px, 1vw, 4px) solid #ff00ff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: 'clamp(200px, 50vw, 280px)',
                            width: 'clamp(150px, 40vw, 240px)',
                            background: '#fff',
                            flexShrink: 0,
                        }}>
                            <img
                                src=""
                                alt="Ganador 3"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>

                        {/* Winner 4 - Bottom (pushed down) */}
                        <div style={{
                            border: 'clamp(2px, 1vw, 4px) solid #ff00ff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: 'clamp(200px, 50vw, 280px)',
                            width: 'clamp(150px, 40vw, 240px)',
                            background: '#fff',
                            flexShrink: 0,
                            marginTop: 'clamp(30px, 10vw, 80px)',
                        }}>
                            <img
                                src=""
                                alt="Ganador 4"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <div className='mx-5' style={{
                        margin: '20px'
                    }}>
                        <Row style={{ color: '#F52791', fontSize: '35px', gap: '20px' }}>
                            <Col md={9} style={{ alignContent: 'center', textTransform: 'uppercase', fontWeight: 'bold', fontStyle: 'italic' }}>Sigueme Para Enterarte De Más Sorteos</Col>
                            <Col md={2} style={{
                                display: 'flex',
                                gap: '13px',

                            }}><a href="https://www.tiktok.com/@onlyrgxoficial" target='_blank'><div class="betterhover:group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32" fill="#F52791" class="size-4 fill-current" aria-label="Tiktok"><path d="M25.7376 6.41476C24.0142 5.29125 22.7695 3.49253 22.3818 1.39624C22.2979 0.943256 22.252 0.477067 22.252 0H16.751L16.7425 22.0476C16.65 24.5169 14.6182 26.4982 12.1272 26.4982C11.3533 26.4982 10.6237 26.3047 9.98194 25.9667C8.51033 25.1921 7.50259 23.649 7.50259 21.8736C7.50259 19.3235 9.57713 17.249 12.1272 17.249C12.6035 17.249 13.0596 17.3275 13.4916 17.4627V11.8466C13.0448 11.786 12.5903 11.748 12.1272 11.748C6.54224 11.7487 2 16.291 2 21.8744C2 25.3001 3.71169 28.3319 6.32313 30.1648C7.968 31.3194 9.96873 32 12.1264 32C17.7098 32 22.252 27.4578 22.252 21.8744V10.6944C24.4097 12.2429 27.053 13.1559 29.9061 13.1559V7.65483C28.3692 7.65483 26.938 7.19796 25.7384 6.41554L25.7376 6.41476Z" fill="current"></path></svg></div></a>
                                <a href="https://kick.com/onlyrgx" target="_blank"><img src="/icons/kick.png" alt="" style={{
                                    height: '40px'
                                }} /></a>
                                <a href="https://www.instagram.com/OnlyRGX" target="_blank">
                                    <div class="betterhover:group-hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                                            fill="#F52791" class="size-4 fill-current" aria-label="Instagram">
                                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm5.25-.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                </a> </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            {/* Pricing Section */}
            <section className="py-4 px-6 bg-black">
                <Container>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <p style={{
                            color: '#ff00ff',
                            fontSize: '60px',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                        }}>
                            SUSCRÍBETE A UN PLAN MENSUAL
                        </p>
                        <p style={{
                            color: '#ffff',
                            fontWeight: 'bold',
                            fontSize: '25px',
                            marginBottom: '20px'
                        }}> y participa por <strong style={{
                            color: 'red',
                        }}>TODOS</strong> nuestros premios mensuales</p>
                    </div>

                    <Row className="d-flex g-8 justify-content-center">
                        {pricingPlans.map((plan, i) => (
                            <Col lg={4} md={6} key={i} style={{ height: '400px' }}>
                                <PricingCard {...plan} recommended={plan.price === 16} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-5 px-4 bg-light">
                <Container className="mw-md-100" style={{ maxWidth: '600px' }}>
                    <h2 className="text-center mb-5 fs-1 fw-bold">Ti@ De Sistemas, ¿tienes dudas?</h2>

                    <div>
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} {...faq} />
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/preguntas-frecuentes" className="text-magenta fw-bold text-decoration-none">
                            Ver todas las preguntas
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
}
