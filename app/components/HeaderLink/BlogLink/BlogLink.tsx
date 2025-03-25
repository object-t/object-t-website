import { Link } from 'react-router-dom';
import './BlogLink.css';

export interface BlogLinkProps {
    isActive: boolean;
    label: string;
    to: string;
}

export const BlogLink = ({
    isActive,
    label,
    to,
    ...props
}: BlogLinkProps) => {
    return (
        <Link to={to} className={`blog-link ${isActive ? 'active' : ''}`} {...props}>
            <span className="label">{label}</span>
        </Link>
    );
}