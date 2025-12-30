import { Container, Row, Col } from 'react-bootstrap';
import BenefitCard from '../components/BenefitCard';

const benefits = [
    {
        icon: '🎟️',
        title: 'Participación Garantizada',
        description: 'Participa automáticamente en todos los sorteos semanales mientras tu suscripción esté activa'
    },
    {
        icon: '🏷️',
        title: 'Descuentos y Promos',
        description: 'Acceso exclusivo a descuentos especiales en marcas cómplices. ¡Cada vez tenemos más!'
    },
    {
        icon: '👕',
        title: 'Merch Exclusivo',
        description: 'Asiste a los eventos que participemos y accede a nuestro merch exclusivo para suscriptores'
    },
    {
        icon: '⭐',
        title: 'Experiencias VIP',
        description: 'Acceso a eventos sorpresas y experiencias únicas exclusivo para suscriptores'
    },
    {
        icon: '👑',
        title: 'Estado VIP',
        description: 'Con planes Achorado y Opulencia, te conviertes en Suertudo VIP con acceso extra'
    },
    {
        icon: '💬',
        title: 'Soporte Prioritario',
        description: 'Recibe atención especial de nuestro equipo de soporte'
    },
];

export default function Beneficios() {
    return (
        <div className="min-vh-100 pt-5 pb-5 px-4 bg-white">
            <Container>
                {/* <h1 className="text-center mb-2 fs-1 fw-bold">Beneficios Exclusivos</h1>
                <p className="text-center text-muted mb-5 fs-5">
                    Accede a todos estos beneficios al suscribirte
                </p>

                <Row className="g-4">
                    {benefits.map((benefit, i) => (
                        <Col lg={4} md={6} key={i}>
                            <BenefitCard {...benefit} />
                        </Col>
                    ))}
                </Row> */}
                <h2 style={{textAlign:'center',
                    color:'blue',
                    fontSize:'100px',
                    fontWeight:'bold',
                }}>404</h2>
                <p style={{textAlign:'center',
                    color:'black',
                    fontSize:'50px',
                    fontWeight:'bold',
                }}>NOT FOUND <br />(aun falta xd)</p>
            </Container>
        </div>
    );
}
