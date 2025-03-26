import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import './LinkedButton.css';

export interface LinkedButtonProps {
    url: string;
    label?: string;
    backgroundColor?: string;
    color?: string;
    style?: "default" | "outlined";
}

export const LinkedButton = ({
    url,
    label,
    backgroundColor = "var(--primery-color)",
    color = "var(--accent-color)",
    style = "default",
    ...props
}: LinkedButtonProps) => {

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
            <span className="Button-label" style={wordStyle}>{label}</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: wordStyle.color, fontSize: 22.33 }} />
        </a>
    );
}