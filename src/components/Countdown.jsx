import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            // Próximo sorteo: 29 de enero 2026 a las 20:00
            const targetDate = new Date('2026-01-29T20:00:00').getTime();
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeBox = ({ value, label }) => (
        <div style={{ textAlign: 'center' }}>
            <div
                style={{
                    backgroundColor: '#fff',
                    color: '#ff00ff',
                    minWidth: '48px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    marginBottom: '4px',
                }}
            >
                {String(value).padStart(2, '0')}
            </div>
            <span style={{ color: '#fff', fontSize: '11px', fontWeight: 'bold' }}>
                {label}
            </span>
        </div>
    );

    return (
        <section
            style={{
                position: 'fixed',
                bottom: '0',
                left: '0',
                right: '0',
                zIndex: '1000',
                width: '100%',
                padding: '8px 0',
                backgroundColor: '#1a1a1a',
            }}
        >
            <Container fluid>
                <div
                    style={{
                        background: 'linear-gradient(135deg, #ff00ff 0%, #ff0099 100%)',
                        borderRadius: '12px',
                        border: '2px solid #fff',
                        padding: '5px 200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    {/* Left Section - Title */}
                    <div style={{ flex: '0 0 auto', minWidth: '160px' }}>
                        <p
                            style={{
                                color: '#fff',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                margin: '0',
                                lineHeight: '1.2',
                                textAlign: 'center',
                            }}
                        >
                            La lista de participantes cierra en:
                        </p>
                    </div>

                    {/* Center Section - Counter */}
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <TimeBox value={timeLeft.days} label="Días" />
                        <span style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>:</span>
                        <TimeBox value={timeLeft.hours} label="Horas" />
                        <span style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>:</span>
                        <TimeBox value={timeLeft.minutes} label="Minutos" />
                    </div>

                    {/* Right Section - Result Info */}
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: '10px 16px',
                            borderRadius: '8px',
                            minWidth: '180px',
                            textAlign: 'center',
                        }}
                    >
                        <p
                            style={{
                                color: '#ff00ff',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                margin: '0',
                                marginBottom: '2px',
                                textTransform: 'uppercase',
                            }}
                        >
                            Resultado: 29 de Enero (se cambia xd)
                        </p>
                        <p
                            style={{
                                color: '#ff00ff',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                margin: '0',
                                textTransform: 'uppercase',
                            }}
                        >
                            VIERNES 8:00 PM
                        </p>
                    </div>

                    {/* Right Section - Image */}
                    <div style={{ flex: '0 0 auto' }}>
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop"
                            alt="Countdown"
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
