import { Link } from 'react-router-dom';
import './HeaderLink.css';

export interface HeaderLinkProps {
    isActive: boolean;
    label: string;
    to: string;
}

export const HeaderLink = ({
    isActive,
    label,
    to,
    ...props
}: HeaderLinkProps) => {
    return (
        <Link to={to} className={`Header-link ${isActive ? 'active' : ''}`} {...props}>
            <span className="label">{label}</span>
        </Link>
    );
}