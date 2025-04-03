import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import i18n from '../../i18n/config';
import './LanguageButton.css';

export const LanguageButton = ({ ...props }) => {
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
    <button {...props} className="language-button" onClick={handleClick}>
      <div className="language-icon">
        <FontAwesomeIcon icon={faGlobe} style={{ color: "#F5F5F5", fontSize: 34 }} />
      </div>
      <span className="language-label">{label}</span>
    </button>
  );
};