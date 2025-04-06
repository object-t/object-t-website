import { useEffect, useState } from 'react';
import i18n from '~/i18n/config';
import styles from './title.module.css';

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
        <div className={[styles['title-container'], styles[`title-container-${align}`]].join(" ")}>
            <h1 {...props} className={[styles['section-title'], styles['title']].join(" ")}>
                {label}
            </h1>
            {subLabel &&
                <p className={[styles['sub-title'], styles['section-subtitle'], (isEnglish && styles.hidden)].join(" ")}>
                    {subLabel}
                </p>
            }
        </div>
    );
}