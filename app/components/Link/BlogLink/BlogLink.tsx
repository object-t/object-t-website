
import './BlogLink.css';

export interface BlogLinkProps {
    label: string;
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