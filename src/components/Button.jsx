import { Button } from 'react-bootstrap';

export default function CustomButton({ children, variant = 'warning', onClick, className = '', ...props }) {
    return (
        <Button
            onClick={onClick}
            variant={variant}
            className={`fw-bold ${className}`}
            {...props}
        >
            {children}
        </Button>
    );
}
