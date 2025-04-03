
import { useRef, useState, type ReactNode } from 'react';
import './tooltip.css';

export interface TooltipProps {
  content: string;
  children: ReactNode;
  location?: 'top' | 'bottom' | 'left' | 'right';
  duration?: number,
  color?: string;
  backgroundColor?: string;
}

export const Tooltip = ({
  content,
  children,
  duration = 1000,
  location = 'bottom',
  color = "#ffffff",
  backgroundColor = "#242525",
  ...props
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const click = () => {
    setVisible(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => setVisible(false), duration);
  }

  return (
    <div
      className='tooltip-container'
      onClick={click}
      {...props}
    >
      { children }
      <div 
        style={{color, '--tooltip-bg': backgroundColor} as React.CSSProperties}
        className={`tooltip-box tooltip-${location}`}
        data-visible={visible}
      >
        { content }
      </div>
    </div>
  );
};
