import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function Countdown({ isFixed = true }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {

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
                    minWidth: 'clamp(40px, 8vw, 48px)',
                    fontSize: 'clamp(16px, 3vw, 24px)',
                    fontWeight: 'bold',
                    padding: 'clamp(6px, 1.5vw, 8px) clamp(8px, 2vw, 12px)',
                    borderRadius: '6px',
                    marginBottom: '4px',
                }}
            >
                {String(value).padStart(2, '0')}
            </div>
            <span style={{ color: '#fff', fontSize: 'clamp(8px, 1.5vw, 11px)', fontWeight: 'bold' }}>
                {label}
            </span>
        </div>
    );

    return (
        <section
            style={{
                position: isFixed ? 'fixed' : 'relative',
                bottom: isFixed ? '0' : 'auto',
                left: '0',
                right: '0',
                zIndex: isFixed ? '1000' : '1',
                width: '100%',
                padding: isFixed ? 'clamp(8px, 2vw, 12px) clamp(10px, 3vw, 20px)' : 'clamp(20px, 3vw, 30px) 0',
            }}
        >
            <Container fluid style={{ padding: '0' }}>
                <div
                    style={{
                        background: 'linear-gradient(135deg, #ff00ff 0%, #ff0099 100%)',
                        borderRadius: '12px',
                        border: '2px solid #fff',
                        padding: 'clamp(8px, 2vw, 16px) clamp(10px, 3vw, 20px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'clamp(8px, 2vw, 15px)',
                    }}
                >
                    {/* Title - Hidden on mobile */}
                    <div style={{ flex: '1 1 100%', minWidth: '200px', display: window.innerWidth < 768 ? 'none' : 'block' }}>
                        <p
                            style={{
                                color: '#fff',
                                fontSize: 'clamp(10px, 5vw, 20px)',
                                fontWeight: 'bold',
                                margin: '0',
                                lineHeight: '1.2',
                                textAlign: 'center',
                            }}
                        >
                            La lista de participantes cierra en:
                        </p>
                    </div>

                    {/* Counter */}
                    <div style={{ display: 'flex', gap: 'clamp(4px, 1vw, 15px)', alignItems: 'center', justifyContent: 'center' }}>
                        <TimeBox value={timeLeft.days} label="Días" />
                        <span style={{ color: '#fff', fontSize: 'clamp(14px, 3vw, 18px)', fontWeight: 'bold' }}>:</span>
                        <TimeBox value={timeLeft.hours} label="Horas" />
                        <span style={{ color: '#fff', fontSize: 'clamp(14px, 3vw, 18px)', fontWeight: 'bold' }}>:</span>
                        <TimeBox value={timeLeft.minutes} label="Minutos" />
                        <span style={{ color: '#fff', fontSize: 'clamp(14px, 3vw, 18px)', fontWeight: 'bold', display: window.innerWidth < 768 ? 'none' : 'inline' }}>:</span>
                        <TimeBox value={timeLeft.seconds} label="Segundos" />
                        <span style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}></span>
                    </div>

                    {/* Result Info - Hidden on mobile */}
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: 'clamp(6px, 1.5vw, 10px) clamp(10px, 2vw, 16px)',
                            borderRadius: '8px',
                            minWidth: 'clamp(150px, 90vw, 180px)',
                            textAlign: 'center',
                            flex: '1 1 100%',
                            display: window.innerWidth < 768 ? 'none' : 'block',
                        }}
                    >
                        <p
                            style={{
                                color: '#ff00ff',
                                fontSize: 'clamp(8px, 1.5vw, 10px)',
                                fontWeight: 'bold',
                                margin: '0',
                                marginBottom: '2px',
                                textTransform: 'uppercase',
                            }}
                        >
                            Resultado: 29 de Enero
                        </p>
                        <p
                            style={{
                                color: '#ff00ff',
                                fontSize: 'clamp(10px, 2vw, 12px)',
                                fontWeight: 'bold',
                                margin: '0',
                                textTransform: 'uppercase',
                            }}
                        >
                            VIERNES 8:00 PM
                        </p>
                    </div>

                    {/* Result Info - Mobile only */}
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: 'clamp(6px, 1.5vw, 10px) clamp(10px, 2vw, 16px)',
                            borderRadius: '8px',
                            minWidth: 'clamp(150px, 90vw, 180px)',
                            textAlign: 'center',
                            flex: '1 1 100%',
                            display: window.innerWidth < 768 ? 'block' : 'none',
                        }}
                    >
                        <p
                            style={{
                                color: '#ff00ff',
                                fontSize: 'clamp(10px, 2.5vw, 12px)',
                                fontWeight: 'bold',
                                margin: '0',
                                textTransform: 'uppercase',
                            }}
                        >
                            29 de Enero - Viernes 8 PM
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
