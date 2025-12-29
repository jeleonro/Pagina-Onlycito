import { Container } from 'react-bootstrap';

export default function Ganadores() {
    const ganadores = [
        {
            id: 1,
            nombre: 'Juan Pérez',
            img: '/images/ganador1.jpg',
            premio: 'RTX 4090'
        },
        {
            id: 2,
            nombre: 'María García',
            img: '/images/ganador2.jpg',
            premio: 'PlayStation 5'
        },
        {
            id: 3,
            nombre: 'Carlos López',
            img: '/images/ganador3.jpg',
            premio: 'MacBook Pro'
        },
        {
            id: 4,
            nombre: 'Ana Martínez',
            img: '/images/ganador4.jpg',
            premio: 'AirPods Max'
        },
    ];

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingTop: '60px', paddingBottom: '300px', position: 'relative' }}>
            <Container>
                {/* Title Section */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{
                        color: '#ff00ff',
                        fontSize: 'clamp(32px, 5vw, 80px)',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                        letterSpacing: '2px'
                    }}>
                        GANADORES
                    </h1>
                    <p style={{
                        color: '#f1f1f1',
                        fontSize: '18px',
                        marginBottom: '0'
                    }}>
                        Mira a todos nuestros afortunados ganadores
                    </p>
                </div>

                {/* Winners Grid - Horizontal Zig Zag */}
                <div style={{
                    marginTop: '100px',
                    display: 'flex',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    overflow: 'visible',
                }}>
                    {ganadores.map((ganador, index) => (
                        <div key={ganador.id} style={{
                            border: '4px solid #ff00ff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: '280px',
                            width: '240px',
                            background: '#fff',
                            flexShrink: 0,
                            position: 'relative',
                            marginTop: (index % 2 === 1) ? '80px' : '0px',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 0, 255, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}>
                            <img
                                src={ganador.img}
                                alt={ganador.nombre}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            {/* Overlay with winner info */}
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                padding: '20px',
                                color: '#fff',
                            }}>
                                <p style={{
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    margin: '0',
                                    color: '#ff00ff',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {ganador.nombre}
                                </p>
                                <p style={{
                                    fontSize: '12px',
                                    margin: '5px 0 0 0',
                                    color: '#f1f1f1'
                                }}>
                                    🏆 {ganador.premio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Motivational Text */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '100px',
                    padding: '40px 20px',
                    borderTop: '2px solid #ff00ff',
                    borderBottom: '2px solid #ff00ff',
                }}>
                    <h3 style={{
                        color: '#ff00ff',
                        fontSize: 'clamp(24px, 3vw, 48px)',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        marginBottom: '15px'
                    }}>
                        ¡TÚ PUEDES SER EL PRÓXIMO!
                    </h3>
                    <p style={{
                        color: '#f1f1f1',
                        fontSize: '16px',
                        marginBottom: '0',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Únete a nuestra comunidad exclusiva y participa en nuestros sorteos semanales.
                        Cada suscripción te da la oportunidad de ganar premios increíbles.
                    </p>
                </div>
            </Container>
        </div>
    );
}
