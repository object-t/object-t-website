import { useTranslation } from 'react-i18next';
import { Devicon } from '../Devicon/Devicon';
import './member-card.css';

export interface MemberCardProps {
  name: string;
  role: TemplateRole;
  description: string,
  stacks: string[];
  headerImage: string;
  iconImage: string;
  githubName: string;
}

type TemplateRole = 'owner' | 'coowner' | 'backend' | 'frontend'; 

const templateRole: Record<TemplateRole, string> = {
  'owner': 'common.roles.owner',
  'coowner': 'common.roles.coowner',
  'backend': 'common.roles.backend',
  'frontend': 'common.roles.frontend'
}

export const MemberCard = ({
  name,
  role,
  description,
  stacks,
  headerImage,
  iconImage,
  githubName,
  ...props
}: MemberCardProps) => {
  const { t } = useTranslation();

  return (
    <div 
      className='container'
      { ...props }
    >
      <div 
        className='header'
        style={{backgroundImage: `url(${headerImage})`}}
      >
        <div 
          className='icon'
          style={{backgroundImage: `url(${iconImage})`}}
        />
      </div>
      <div className='profile-container'>
        <h1 className='name'>{ name }</h1>
        <h2 className='role'>{ t(templateRole[role]) }</h2>
        <p className='description'>{ description }</p>
        <p className='stack-title'>{ t("card.memberCard.stack") }</p>
        <div className='stack-container'>
          {
            stacks.map((stack, i) => (
              <Devicon
                key={i}
                icon={stack}
                size='32px'
              />
            ))
          }
        </div>
        <div className='github-container'>
          <Devicon 
            icon='github' 
            size='24px' 
            tooltip='disable'
          />
          <a
            href={`https://github.com/${githubName}`}
            target="_blank"
            rel="noopener noreferrer"
            className='github-username'
          >
            {githubName}
          </a>
        </div>
      </div>
    </div>
  );
};
