import { LinkedButton } from '../LinkedButton/LinkedButton';
import './activity-card.css';

export interface ActivityCardProps {
  headerImage: string;
  title: string;
  from: Date;
  to?: Date | null;
  description: string;
  url: string;
}

const formatDate = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formatter.format(date);
};
export const ActivityCard = ({
  headerImage,
  title,
  from,
  to,
  description,
  url,
  ...props
}: ActivityCardProps) => {
  const strFromData = formatDate(from);
  const strToData = to ? formatDate(to) : null;

  return (
    <div
      className='activity-container'
      {...props}
    >
      <div
        className='activity-image'
      >
        <img src={headerImage} alt={title} />
      </div>
      <div className="activity-sub-container">
        <div className='activity-title-container'>
          <div className="activity-title-text-container">
            {title}
          </div>
          <div className="activity-separator"></div>
          <div className="activity-date-container">
            <span>{strFromData}</span>
            {strToData && <span>～{strToData}</span>}
          </div>
        </div>
        <div className="activity-description-text-container">
          <div className='activity-description-container'>
            <p>{description}</p>
          </div>
        </div>
        <div className="activity-button-container">
          <LinkedButton url={url} label={'detail'} style="outlined" />
        </div>
      </div>
    </div >
  );
};
