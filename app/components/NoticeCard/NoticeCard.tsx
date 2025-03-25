import './notice-card.css';
import {Tag, type TagKind} from '../Tag/Tag';

export interface NoticeCardProps {
    imageUrl: string;
    tags: TagKind[];
    title: string;
    description: string;
    date?: string;
}

export const NoticeCard = ({
   imageUrl,
   tags,
   title,
   description,
   date,
}: NoticeCardProps) => {
    return (
        <div className="notice-card">
            <div className="notice-image-box">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="notice-text-box">
                <div className="notice-card-title-box">
                    <div className="notice-card-title-title-box">
                        <p className="notice-card-title">{title}</p>
                    </div>
                    <div className="notice-card-tags">
                        {tags.map((tag, i) => (
                            <Tag key={i} kind={tag} />
                        ))}
                    </div>
                </div>
                <div>
                    {date && <p className="notice-card-title-date">{date}</p>}
                </div>
                <div>
                    <p className="notice-card-description">{description}</p>
                </div>
            </div>
        </div>
    );
};
