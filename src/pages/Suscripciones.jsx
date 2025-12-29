import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

export default function Suscripciones() {
    return (
        <div className="min-vh-100 pt-5 pb-5 px-4 bg-light">
            <Container className="mw-md-100" style={{ maxWidth: '600px' }}>
                <h1 className="text-center mb-2 fs-1 fw-bold">Completar Suscripción</h1>
                <p className="text-center text-muted mb-5">
                    Esta sección luego se desarrolla (tienes que escoger con se pagara te recomiendo culqui o niubiz)
                </p>

                <Card className="shadow-lg border-secondary">
                    <Card.Body className="p-5">
                        <Card.Title className="fs-4 fw-bold mb-4">Datos de la suscripción</Card.Title>

                        <Form className="space-y-4">
                            <Form.Group className="mb-4">
                                <Form.Label className="fw-bold">Nombre Completo</Form.Label>
                                <Form.Control type="text" placeholder="Tu nombre" />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="fw-bold">Email</Form.Label>
                                <Form.Control type="email" placeholder="tu@email.com" />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="fw-bold">Plan seleccionado</Form.Label>
                                <Form.Select>
                                    <option>Demonio Pequeño- S/ 6</option>
                                    <option>Demoniasoooo - S/ 16</option>
                                </Form.Select>
                            </Form.Group>

                            <Alert variant="warning" className="text-sm">
                                ⚠️ El procesamiento de pagos con Culqi será integrado próximamente.
                            </Alert>

                            <Button
                                className="w-100 fw-bold py-3"
                                style={{ backgroundColor: '#ff00ff', borderColor: '#ff00ff' }}
                                disabled
                            >
                                Continuar con el pago (En desarrollo)
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}
