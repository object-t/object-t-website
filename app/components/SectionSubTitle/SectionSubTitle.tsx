import './SectionSubTitle.css';

export interface SectionSubTitleProps {
    label: string;
}

export const SectionSubTitle = ({
    label,
}: SectionSubTitleProps) => {

    return (
        <p className="section-sub-title" > {label} </p>
    );
}