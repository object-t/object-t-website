
import './MemberLink.css';

export interface MemberLinkProps {
    label: string;
}

export const MemberLink = ({
    label,
    ...props
}: MemberLinkProps) => {
    return (
        <a href='#' {...props}>
            <span className="label">{label}</span>
        </a>
    );
}