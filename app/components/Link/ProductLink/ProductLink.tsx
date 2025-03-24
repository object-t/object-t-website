
import './ProductLink.css';

export interface ProductLinkProps {
    label: string;
}

export const ProductLink = ({
    label,
    ...props
}: ProductLinkProps) => {
    return (
        <a {...props}>
            <span className="label">{label}</span>
        </a>
    );
}