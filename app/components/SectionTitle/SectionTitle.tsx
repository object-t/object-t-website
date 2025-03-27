import './SectionTitle.css';

export interface SectionTitleProps {
    label: string;
}

export const SectionTitle = ({
    label,
    ...props
}: SectionTitleProps) => {

    return (
        <h1 {...props} className="section-title">
            {label}
        </h1>
    );
}