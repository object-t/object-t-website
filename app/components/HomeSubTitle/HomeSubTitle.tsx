import './HomeSubTitle.css';

export interface HomeSubTitleProps {
    label: string;
}

export const HomeSubTitle = ({
    label,
}: HomeSubTitleProps) => {

    return (
        <p className="sub-title">{label}</p>
    );
}