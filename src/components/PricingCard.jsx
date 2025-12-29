import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PricingCard({ name, price, features, recommended = false }) {
    return (
        <Card className="h-100 shadow-sm border-2" style={{ borderColor: recommended ? '#ff00ff' : '#dee2e6', position: 'relative' }}>
            {recommended && (
                <div style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '20px',
                    backgroundColor: '#ff00ff',
                    color: '#000',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    zIndex: '10',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                }}>
                    ⭐ Recomendado
                </div>
            )}
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-4 fw-bold mb-2">{name}</Card.Title>

                <div className="mb-3">
                    s/ <span className="fw-bold"
                    style={{
                        fontSize:'70px',
                    }}>{price}</span>
                </div>

                <ul className="list-unstyled mb-4 flex-grow-1">
                    {features.map((feature, i) => (
                        <li key={i} className="mb-2 d-flex gap-3">
                            <span className="text-success">✓</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <Link to="/suscripciones" className="w-100">
                    <Button
                        className="w-100 fw-bold"
                        style={{ backgroundColor: recommended ? '#1a0033' : '#ff00ff', borderColor: '#ff00ff', color: '#fff' , height:'50px'}}
                    >
                        ¡Suscribirme ya!
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}
