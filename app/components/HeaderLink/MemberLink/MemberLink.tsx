import { Link } from 'react-router-dom';
import './MemberLink.css';

export interface MemberLinkProps {
    isActive: boolean;
    label: string;
    to: string;
}

export const MemberLink = ({
    isActive,
    label,
    to,
    ...props
}: MemberLinkProps) => {
    return (
        <Link to={to} className={`member-link ${isActive ? 'active' : ''}`} {...props}>
            <span className="label">{label}</span>
        </Link>
    );
}