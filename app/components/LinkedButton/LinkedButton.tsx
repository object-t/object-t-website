import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import './LinkedButton.css';

export interface LinkedButtonProps {
    url: string;
    label: TemplateLabel | string;
    backgroundColor?: string;
    color?: string;
    style?: "default" | "outlined";
}

export type TemplateLabel = 'detail' | 'list';

const templateLabel: Record<TemplateLabel, string> = {
    'detail': "common.detail",
    'list': "common.list"
}

export const LinkedButton = ({
    url,
    label,
    backgroundColor = "var(--primery-color)",
    color = "var(--accent-color)",
    style = "default",
    ...props
}: LinkedButtonProps) => {
    const { t } = useTranslation();
    const displayLabel = label in templateLabel ? t(templateLabel[label as TemplateLabel]) : label

    const linkStyle = {
        backgroundColor: style === "default" ? backgroundColor : "transparent",
        color: backgroundColor,
        ...(style === "outlined" ? {
            borderWidth: "0px 1px 1px 0px",
            borderStyle: "solid",
            borderColor: backgroundColor,
        } : {
            border: "none"
        })
    };

    const wordStyle = {
        color: style === "default" ? color : backgroundColor
    };

    return (
        <a href={url} className="Button-link" style={linkStyle} target="_blank" rel="noopener noreferrer" {...props}>
            <span className="Button-label" style={wordStyle}>{displayLabel}</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: wordStyle.color, fontSize: 22.33 }} />
        </a>
    );
}