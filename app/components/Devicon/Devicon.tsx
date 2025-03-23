
import { Tooltip } from '../Tooltip/Tooltip';
import './devicon.css';

export interface DeviconProps {
  icon: string;
  tooltip?: 'enable' | 'disable';
  color?: string;
  size?: string;
  className?: string;
}

export const Devicon = ({
  icon,
  tooltip = 'enable',
  color = "#242525",
  size = "20px",
  className = "",
  ...props
}: DeviconProps) => {
  const Icon = (
    <i
      className={`devicon-${icon}-plain ${className}`}
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
