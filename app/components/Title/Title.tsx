import './Title.css';

export interface TitleProps {
    label: string;
    variant?: 'home' | 'section';
}

export const Title = ({
    label,
    variant = 'section',
    ...props
}: TitleProps) => {
    const objectTPattern = /^Object<(T)>$/;
    const match = label.match(objectTPattern);

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
}