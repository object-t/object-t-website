import { useTranslation } from 'react-i18next';
import './LanguageButton.css';

export interface LanguageButtonProps {
    onClick: () => void;
}

export const LanguageButton = ({
    ...props
}: LanguageButtonProps) => {
    const { t } = useTranslation();
    return (
        <button {...props}>
            <span className="label">{ t("language") }</span>
        </button>
    );
}