import { useTranslation } from 'react-i18next';
import './LanguageButton.css';

export interface LanguageButtonProps {
    icon: string;
}

export const LanguageButton = ({
    icon,
    ...props
}: LanguageButtonProps) => {
    const { t } = useTranslation();
    return (
        <button {...props}>
            <span className="label">{t("language")}</span>
        </button>
    );
}