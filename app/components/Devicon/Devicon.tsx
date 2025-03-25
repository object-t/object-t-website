
import { Tooltip } from '../Tooltip/Tooltip';

export interface DeviconProps {
  icon: string;
  tooltip?: 'enable' | 'disable';
  color?: string;
  size?: string;
  className?: string;
}

const abbreviation: Record<string, string> = {
  "aws": "amazonwebservices",
}

export const Devicon = ({
  icon,
  tooltip = 'enable',
  color = "var(--based-color)",
  size = "20px",
  className = "",
  ...props
}: DeviconProps) => {
  const lowerIcon = icon.toLocaleLowerCase();
  const Icon = (
    <i
      className={`devicon-${abbreviation[lowerIcon] ?? lowerIcon}-plain ${className}`}
      style={{ color, fontSize: size }}
      {...props}
    />
  );

  return (
    (tooltip === 'disable') ?
    Icon :
    <Tooltip content={icon}>
      {Icon}
    </Tooltip>
  );
};
