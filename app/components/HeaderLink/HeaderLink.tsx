import styles from './header-link.module.css';

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
      className={[styles['header-link'], (isActive ? styles.active : '')].join(" ")}
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
      <span className={styles.label}>{label}</span>
    </a>
  );
};
