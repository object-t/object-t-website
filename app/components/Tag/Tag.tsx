import './tag.css';
import { tagColorMap } from './tag-color-map';
import {useTranslation} from "react-i18next";

export type TagKind = "hackathon" | "recruitment" | "urgent" | string;

export interface TagProps {
    kind: TagKind;
    className?: string;
}

export const Tag = ({ kind, className }: TagProps) => {
    const {text,backgroundColor} = tagColorMap[kind] || '#9e9e9e';
    const { t } = useTranslation();
    return (
        <span className={["tag", className].join(" ")} style={{ backgroundColor: backgroundColor ?? "#42f5b0" }}>
            { text ? t(text) : kind }
        </span>
    );
};
