import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { LanguageButton } from '../LanguageButton/LanguageButton';
import styles from './drawer.module.css';

export interface DrawerProps {
  links: Record<'label' | 'to', string>[];
  onClick: (link: string) => void;
  children: React.ReactNode;
}

const sitemap: Record<string, string> = {
  "ホームページ": "/",
  "技術ブログ": "/blog",
  "": "",
  "お問い合わせ": "/",
}

export const Drawer = ({
  links,
  onClick,
  children,
  ...props
}: DrawerProps) => {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <div>
      <div {...props} onClick={() => setOpen(true)} className={[open ? styles.hidden : '', styles.trigger].join(" ")}>
        {children}
      </div>
      <div className={[styles.drawer, open ? styles['drawer-opened']: ''].join(" ")}>
        <div className={styles['button-container']}>
          <FontAwesomeIcon icon={faXmark} className={`${styles.close}`} onClick={() => setOpen(false)}/>
          <LanguageButton className={styles.lang}/>
        </div>
        <div className={styles['link-container']}>
          <h2>リンク</h2>
          <ul>
          {
            links.map(link => (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);

                  const id = link.to.replace('#', '');
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  onClick?.(link.to);
                }}
              >
                <li>
                  {link.label}
                </li>
              </a>
            ))
          }
          </ul>
          <h2>サイトマップ</h2>
          <ul>
            {
              Object.entries(sitemap).map(([label, url]) => label ? (
                <a href={url} key={label}>
                  <li>
                      <p>
                        {label}
                      </p>
                    </li>
                  </a>
                ): <br key={''}/>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
