
import './ProductLink.css';

export interface ProductLinkProps {
    label: string;
    onClick: () => void;
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