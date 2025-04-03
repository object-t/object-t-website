import './HeaderLink.css';

export interface HeaderLinkProps {
  isActive: boolean;
  label: string;
  to: string;
  onClick?: () => void;
}

export const HeaderLink = ({
  isActive,
  label,
  to,
  onClick,
}: HeaderLinkProps) => {
  return (
    <a
      href={to}
      className={`Header-link ${isActive ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        const id = to.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        onClick?.();
      }}
    >
      <span className="label">{label}</span>
    </a>
  );
};
