import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FeaturedPrizes() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prizes = [
        {
            id: 1,
            name: 'DARKNETS CS570',
            image: '../../public/images/prizes/DARKNETS CS570.png',
        },
        {
            id: 2,
            name: 'WOOTING 60HE',
            image: '../../public/images/prizes/WOOTING 60HE.png',
        },
        {
            id: 3,
            name: 'WLMOUSE BEAST X MINI PRO',
            image: '../../public/images/prizes/WLMOUSE BEAST X MINI PRO.png',
        },
        {
            id: 4,
            name: 'RIFT C710',
            image: '../../public/images/prizes/rift c710.png',
        },
        {
            id: 5,
            name: 'PREMIO 5',
            image: 'https://images.unsplash.com/photo-1587829191301-7acb349b69f7?w=300&h=300&fit=crop',
        },
    ];

    const visibleCount = 4;
    const maxIndex = Math.max(0, prizes.length - visibleCount);

    const handleNext = () => {
        setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
    };

    const visiblePrizes = prizes.slice(currentIndex, currentIndex + visibleCount);

    return (
        <section style={{
            backgroundColor: '#000',
            padding: '60px 20px',
        }}>
            <Container>
                {/* Carousel */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginBottom: '40px',
                }}>
                    {visiblePrizes.map((prize) => (
                        <div
                            key={prize.id}
                            style={{
                                border: '3px solid #ff00ff',
                                borderRadius: '16px',
                                padding: '20px',
                                backgroundColor: '#1a1a1a',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '280px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            className="hover:scale-105"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#fff';
                                e.currentTarget.style.transform = 'scale(1.05)';
                                const h3 = e.currentTarget.querySelector('h3');
                                if (h3) h3.style.color = '#000';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#1a1a1a';
                                e.currentTarget.style.transform = 'scale(1)';
                                const h3 = e.currentTarget.querySelector('h3');
                                if (h3) h3.style.color = '#fff';
                            }}
                        >
                            <div style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '8px',
                                marginBottom: '20px',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <img
                                    src={prize.image}
                                    alt={prize.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                />
                            </div>
                            <h3 style={{
                                color:'white',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                transition: 'color 0.3s ease',
                            }}>
                                {prize.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '30px',
                    marginBottom: '40px',
                }}>
                    <button
                        onClick={handlePrev}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '32px',
                            color: 'black',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        ←
                    </button>
                    <div style={{
                        borderTop: '2px solid #ff00ff',
                        width: '100px',
                    }}></div>
                    <button
                        onClick={handleNext}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '32px',
                            color: '#ff00ff',
                            cursor: 'pointer',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        →
                    </button>
                </div>

                {/* View All Button */}
                <div style={{ textAlign: 'center' }}>
                    <Link to="/premios" style={{ textDecoration: 'none' }}>
                        <Button
                            style={{
                                backgroundColor: '#ff00ff',
                                borderColor: '#ff00ff',
                                color: '#000',
                                padding: '14px 40px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                border: 'none',
                            }}
                        >
                            Ver todos los premios
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
