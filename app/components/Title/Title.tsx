import './Title.css';
import { SubTitle } from './SubTitle';

export interface TitleProps {
    label: string;
    subLabel?: string;
    variant?: 'home' | 'section';
    align?: 'left' | 'right'; 
}

export const Title = ({
    label,
    subLabel,
    variant = 'section',
    align = 'left',
    ...props
}: TitleProps) => {
    const objectTPattern = /^Object<(T)>$/;
    const match = label.match(objectTPattern);

    const renderTitle = () => {
        if (match && match[1] === 'T') {
            const beforeT = "Object<";
            const t = "T";
            const afterT = ">";

            return (
                <h1 {...props} className={`title ${variant}-title`}>
                    {beforeT}<span className="t-highlight">{t}</span>{afterT}
                </h1>
            );
        } else {
            return (
                <h1 {...props} className={`title ${variant}-title`}>
                    {label}
                </h1>
            );
        }
    };

    const containerClassName = `title-container ${variant === 'home' ? 'title-container-center' : `title-container-${align}`
        }`;

    return (
        <div className={containerClassName}>
            {renderTitle()}
            {subLabel && <SubTitle label={subLabel} variant={variant} />}
        </div>
    );
}