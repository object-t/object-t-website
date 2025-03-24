
import './BlogLink.css';

export interface BlogLinkProps {
    label: string;
}

export const BlogLink = ({
    label,
    ...props
}: BlogLinkProps) => {
    return (
        <a href='#' {...props}>
            <span className="label">{label}</span>
        </a>
    );
}