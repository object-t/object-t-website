import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import './LanguageButton.css';

export interface LanguageButtonProps {
    label: string;
}

export const LanguageButton = ({
    label,
    ...props
}: LanguageButtonProps) => {
    const { t } = useTranslation();
    return (
        <button {...props} className="language-button">
            <div className="language-icon">
                <FontAwesomeIcon icon={faGlobe} style={{ color: "#F5F5F5", fontSize: 34 }} />
            </div>
            <span className="language-label">{label}</span>
        </button>
    );
}