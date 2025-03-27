import './SubTitle.css';

export interface SubTitleProps {
    label: string;
    variant?: 'home' | 'section';
}

export const SubTitle = ({
    label,
    variant = 'section',
    ...props
}: SubTitleProps) => {
    return (
        <p
            className={`sub-title ${variant}-sub-title`}
            {...props}
        >
            {label}
        </p>
    );
}