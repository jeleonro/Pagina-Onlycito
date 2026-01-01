import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };


    return (
        <>
            <Header />
            <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #000000 0%, #1a0033 100%)',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '40px',
                paddingBottom: '40px',
            }}>

            <Container fluid>
                <Row className="align-items-center" style={{ minHeight: '600px' }}>
                    {/* Left Section - Image */}
                    <Col lg={6} className="d-none d-lg-block">
                        <img
                            // src="/images/person/atudo.png"
                            alt="Login"
                            style={{
                                width: '100%',
                                height: '500px',
                                objectFit: 'cover',
                                borderRadius: '12px',
                            }}
                        />
                    </Col>

                    {/* Right Section - Form */}
                    <Col lg={6} md={12}>
                        <div style={{ paddingLeft: '60px', paddingRight: '60px' }}>
                            <h1
                                style={{
                                    color: '#ff00ff',
                                    fontSize: '42px',
                                    fontWeight: 'bold',
                                    marginBottom: '16px',
                                    textTransform: 'uppercase',
                                    lineHeight: '1.2',
                                }}
                            >
                                ¡PON A PRUEBA<br />TU SUERTE!
                            </h1>

                            <p style={{
                                color: '#f1f1f1',
                                fontSize: '16px',
                                marginBottom: '24px',
                                lineHeight: '1.6',
                            }}>
                                Participa por premios semanales y beneficios exclusivos
                            </p>

                            {!isSignUp && (
                                <p style={{
                                    color: '#f1f1f1',
                                    fontSize: '14px',
                                    marginBottom: '24px',
                                }}>
                                    ¿Ya tienes una cuenta? <a
                                        href="#"
                                        onClick={() => setIsSignUp(true)}
                                        style={{
                                            color: '#ff00ff',
                                            fontWeight: 'bold',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Inicia Sesión
                                    </a>
                                </p>
                            )}

                            {isSignUp && (
                                <p style={{
                                    color: '#f1f1f1',
                                    fontSize: '14px',
                                    marginBottom: '24px',
                                }}>
                                    ¿Ya tienes cuenta? <a
                                        href="#"
                                        onClick={() => setIsSignUp(false)}
                                        style={{
                                            color: '#ff00ff',
                                            fontWeight: 'bold',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Inicia Sesión
                                    </a>
                                </p>
                            )}

                            <Form onSubmit={handleSubmit}>
                                {/* Email */}
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ color: '#ff00ff', fontWeight: 'bold', marginBottom: '8px' }}>
                                        Correo
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Ingresa tu correo"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: '#1a1a1a',
                                            borderColor: '#ff00ff',
                                            color: '#fff',
                                            padding: '12px',
                                            borderRadius: '8px',
                                        }}
                                    />
                                </Form.Group>

                                {/* Password */}
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ color: '#ff00ff', fontWeight: 'bold', marginBottom: '8px' }}>
                                        Contraseña
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Ingresa tu contraseña"
                                        value={formData.password}
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: '#1a1a1a',
                                            borderColor: '#ff00ff',
                                            color: '#fff',
                                            padding: '12px',
                                            borderRadius: '8px',
                                        }}
                                    />
                                </Form.Group>

                                {/* Confirm Password - Solo en Sign Up */}
                                {isSignUp && (
                                    <Form.Group className="mb-3">
                                        <Form.Label style={{ color: '#ff00ff', fontWeight: 'bold', marginBottom: '8px' }}>
                                            Confirma tu contraseña
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Ingresa tu contraseña"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            style={{
                                                backgroundColor: '#1a1a1a',
                                                borderColor: '#ff00ff',
                                                color: '#fff',
                                                padding: '12px',
                                                borderRadius: '8px',
                                            }}
                                        />
                                    </Form.Group>
                                )}

                                {/* Terms - Solo en Sign Up */}
                                {isSignUp && (
                                    <Form.Group className="mb-4">
                                        <Form.Check
                                            type="checkbox"
                                            label={
                                                <span style={{ color: '#f1f1f1', fontSize: '12px' }}>
                                                    Acepto política de Privacidad y términos y condiciones
                                                </span>
                                            }
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label={
                                                <span style={{ color: '#f1f1f1', fontSize: '12px' }}>
                                                    Acepto el envío de comunicaciones y promocionales p/u publicidades
                                                </span>
                                            }
                                            style={{ cursor: 'pointer', marginTop: '8px' }}
                                        />
                                    </Form.Group>
                                )}

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="w-100 mb-3 fw-bold text-uppercase"
                                    style={{
                                        backgroundColor: '#ff00ff',
                                        borderColor: '#ff00ff',
                                        color: '#000',
                                        padding: '12px',
                                        fontSize: '16px',
                                        letterSpacing: '1px',
                                        border: 'none',
                                    }}
                                >
                                    {isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión'}
                                </Button>
                            </Form>

                            {/* Divider */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '20px',
                            }}>
                                <div style={{
                                    flex: 1,
                                    height: '1px',
                                    backgroundColor: '#444',
                                }}></div>
                                <span style={{
                                    color: '#666',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    fontSize: '12px',
                                }}>O continúa con</span>
                                <div style={{
                                    flex: 1,
                                    height: '1px',
                                    backgroundColor: '#444',
                                }}></div>
                            </div>

                            {/* Google Login */}
                            <Button
                                className="w-100 fw-bold"
                                style={{
                                    backgroundColor: '#fff',
                                    borderColor: '#fff',
                                    color: '#000',
                                    padding: '12px',
                                    fontSize: '14px',
                                }}
                            >
                                <img
                                    src="https://www.google.com/favicon.ico"
                                    alt="Google"
                                    style={{ width: '20px', marginRight: '8px' }}
                                />
                                Continuar con Google
                            </Button>

                            {/* Footer */}
                            <p style={{
                                textAlign: 'center',
                                color: '#666',
                                fontSize: '12px',
                                marginTop: '20px',
                            }}>
                                © continuo.com
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
}
