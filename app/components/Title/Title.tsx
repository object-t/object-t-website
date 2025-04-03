import { useEffect, useState } from 'react';
import i18n from '~/i18n/config';
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
    const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

    useEffect(() => {
        const handleLanguageChange = (lng: string) => {
            setIsEnglish(lng === 'en');
        };
    
        i18n.on('languageChanged', handleLanguageChange);
    
        return () => {
          i18n.off('languageChanged', handleLanguageChange);
        };
      }, []);

    return (
        <div className={`title-container title-container-${align}`}>
            <h1 {...props} className={`title section-title`}>
                {label}
            </h1>
            {subLabel && !isEnglish &&
                <p className={`sub-title section-sub-title`}>
                    {subLabel}
                </p>
            }
        </div>
    );
}