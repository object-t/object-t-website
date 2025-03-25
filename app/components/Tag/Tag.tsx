import './tag.css';
import { tagColorMap } from './tag-color-map';
import {useTranslation} from "react-i18next";

export type TagKind = "hackathon" | "recruitment" | "urgent";

export interface TagProps {
    kind: TagKind;
}

export const Tag = ({ kind }: TagProps) => {
    const {text,backgroundColor} = tagColorMap[kind] || '#9e9e9e';
    const { t } = useTranslation();
    return (
        <span className="tag" style={{ backgroundColor }}>
            {t(text)}
        </span>
    );
};
