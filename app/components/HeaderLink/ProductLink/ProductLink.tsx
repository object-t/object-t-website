import { Link } from 'react-router-dom';
import './ProductLink.css';

export interface ProductLinkProps {
    isActive: boolean;
    label: string;
    to: string;
}

export const ProductLink = ({
    isActive,
    label,
    to,
    ...props
}: ProductLinkProps) => {
    return (
        <Link to={to} className={`product-link ${isActive ? 'active' : ''}`} {...props}>
            <span className="label">{label}</span>
        </Link>
    );
}