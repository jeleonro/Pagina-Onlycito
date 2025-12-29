import { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mb-3 border-secondary">
      <Card.Header 
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        className="bg-light cursor-pointer fw-bold d-flex justify-content-between align-items-center"
      >
        <span>{question}</span>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </Card.Header>
      
      <Collapse in={isOpen}>
        <Card.Body className="bg-light text-muted">
          {answer}
        </Card.Body>
      </Collapse>
    </Card>
  );
}
