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
            {/* Hero Section */}
            <HeroSection />

            {/* Featured Prizes Section */}
            <FeaturedPrizes />

            {/* Countdown Section */}
            <section style={{ backgroundColor: '#1a1a1a' }}>
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
                        <div style={{ paddingLeft: '40px', lineHeight: '30px' }}>
                            <h2 style={{
                                color: '#ff00ff',
                                fontSize: 'clamp(32px, 2vw, 72px)',
                                fontWeight: '500',
                                textAlign: 'left',
                                textTransform: 'uppercase',
                                lineHeight: '1.1',
                                marginLeft: '80px',
                            }}>
                                ¡TU PUEDES SER EL<br />
                            </h2>
                            <h2 style={{
                                color: '#ff00ff',
                                fontSize: 'clamp(32px, 4vw, 72px)',
                                fontWeight: 'bold',
                                marginLeft: '150px',
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
                        gap: '20px',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexWrap: 'nowrap',
                        overflow: 'visible',
                    }}>
                        {/* Winner 1 - Top */}
                        <div style={{
                            border: '4px solid #ff00ff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: '280px',
                            width: '240px',
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
                            border: '4px solid #ff00ff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: '280px',
                            width: '240px',
                            background: '#fff',
                            flexShrink: 0,
                            marginTop: '80px',
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
                            border: '4px solid #ff00ff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: '280px',
                            width: '240px',
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
                            border: '4px solid #ff00ff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: '280px',
                            width: '240px',
                            background: '#fff',
                            flexShrink: 0,
                            marginTop: '80px',
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
                                fontSize:'25px',
                                marginBottom:'20px'
                            }}> y participa por <strong style={{
                                color:'red',
                            }}>TODOS</strong> nuestros premios mensuales</p>
                    </div>

                    <Row className="d-flex g-8 justify-content-center">
                        {pricingPlans.map((plan, i) => (
                            <Col lg={4} md={6} key={i} style={{height:'400px'}}>
                                <PricingCard {...plan} recommended={plan.price===16}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-5 px-4 bg-light">
                <Container className="mw-md-100" style={{ maxWidth: '600px' }}>
                    <h2 className="text-center mb-5 fs-1 fw-bold">Demoni@, ¿tienes dudas?</h2>

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
