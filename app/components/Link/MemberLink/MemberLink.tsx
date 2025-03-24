
import './MemberLink.css';

export interface MemberLinkProps {
    label: string;
    onClick: () => void;
}

export const MemberLink = ({
    label,
    ...props
}: MemberLinkProps) => {
    return (
        <button {...props}>
            <span className="label">{label}</span>
        </button>
    );
}