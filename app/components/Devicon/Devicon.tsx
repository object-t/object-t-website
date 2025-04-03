
import { Tooltip } from '../Tooltip/Tooltip';

export interface DeviconProps {
  icon: string;
  tooltip?: 'enable' | 'disable';
  color?: string;
  size?: string;
}

const abbreviation: Record<string, string> = {
  "aws": "amazonwebservices",
}

const parseIconClass = (icon: string): Record<'name' | 'iconClass', string> => {
  const parts = icon.replace(/^devicon-/, '').split("-");

  const name = parts[0];
  const lowerName = name.toLocaleLowerCase();

  const rest = parts.slice(1);
  const style = `-${rest.find(part => ['plain', 'original'].includes(part)) ?? 'plain'}`;
  const suffix = rest.includes('wordmark') ? '-wordmark' : '';

  return {
    name: name,
    iconClass: `devicon-${abbreviation[lowerName] ?? lowerName}${style}${suffix}`
  };
}

export const Devicon = ({
  icon,
  tooltip = 'enable',
  color = "var(--based-color)",
  size = "20px",
  ...props
}: DeviconProps) => {
  const {name, iconClass} = parseIconClass(icon);
  const Icon = (
    <i
      className={iconClass}
      style={{ color, fontSize: size }}
      {...props}
    />
  );

  return (
    (tooltip === 'disable') ?
    Icon :
    <Tooltip content={name}>
      {Icon}
    </Tooltip>
  );
};
