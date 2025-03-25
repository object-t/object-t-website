import { Link } from 'react-router-dom';
import './HomeLink.css';

export interface HomeLinkProps {
    isActive: boolean;
    label: string;
    to: string;
}

export const HomeLink = ({
    isActive,
    label,
    to,
    ...props
}: HomeLinkProps) => {
    return (
        <Link to={to} className={`home-link ${isActive ? 'active' : ''}`} {...props}>
            <span className="label">{label}</span>
        </Link>
    );
}