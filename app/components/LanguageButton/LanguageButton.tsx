import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import i18n from '../../i18n/config';
import styles from './language-button.module.css';

export interface LanguageButton {
  className?: string;
}

export const LanguageButton = ({ className = '', ...props }: LanguageButton) => {
  const [label, setLabel] = useState<'JP' | 'EN'>(i18n.language === 'ja' ? 'JP' : 'EN');

  const handleClick = () => {
    const nextLang = label === 'JP' ? 'en' : 'ja';
    i18n.changeLanguage(nextLang);
    setLabel(nextLang === 'ja' ? 'JP' : 'EN');
  };

  useEffect(() => {
    const handleLangChanged = (lng: string) => {
      setLabel(lng === 'ja' ? 'JP' : 'EN');
    };
    i18n.on('languageChanged', handleLangChanged);

    return () => {
      i18n.off('languageChanged', handleLangChanged);
    };
  }, []);

  return (
    <button {...props} className={[styles['language-button'], className].join(" ")} onClick={handleClick}>
      <FontAwesomeIcon icon={faGlobe} className={`${styles['language-icon']}`}/>
      <span className={styles['language-label']}>{label}</span>
    </button>
  );
};