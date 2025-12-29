import { Card } from 'react-bootstrap';

export default function BenefitCard({ icon, title, description }) {
  return (
    <Card className="h-100 shadow-sm text-center p-4" style={{ borderColor: '#ff00ff', borderWidth: '2px' }}>
      <div className="fs-1 mb-3">{icon}</div>
      <Card.Title className="fs-5 fw-bold mb-2">{title}</Card.Title>
      <Card.Text className="text-muted">{description}</Card.Text>
    </Card>
  );
}
