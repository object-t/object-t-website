import './Title.css';

export interface TitleProps {
    label: string;
    subLabel?: string;
    align?: 'left' | 'right'; 
}

export const Title = ({
    label,
    subLabel,
    align = 'left',
    ...props
}: TitleProps) => {
    return (
        <div className={`title-container title-container-${align}`}>
            <h1 {...props} className={`title section-title`}>
                {label}
            </h1>
            {subLabel && 
                <p className={`sub-title section-sub-title`}>
                    {subLabel}
                </p>
            }
        </div>
    );
}