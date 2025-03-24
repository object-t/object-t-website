
import './BlogLink.css';

export interface BlogLinkProps {
    label: string;
    onClick: () => void;
}

export const BlogLink = ({
    label,
    ...props
}: BlogLinkProps) => {
    return (
        <a {...props}>
            <span className="label">{label}</span>
        </a>
    );
}