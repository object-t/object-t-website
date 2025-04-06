
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useIsMobile } from '~/hooks/useIsMobile';
import { Drawer } from '../Drawer/Drawer';
import { HeaderLink } from '../HeaderLink/HeaderLink';
import { LanguageButton } from '../LanguageButton/LanguageButton';
import styles from './header.module.css';

const headers: Headers = [
  {
    'label': "HOME",
    'to': "#home"
  },
  {
    'label': "MEMBER",
    'to': "#member"
  },
  {
    'label': "PRODUCT",
    'to': "#product"
  },
  {
    'label': "ACTIVITY",
    'to': "#activity"
  },
  {
    'label': "BLOG",
    'to': "/blog"
  }
]

type Headers = Record<'label' | 'to', string>[];

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const lastScrollY = useRef<number>(0);
  const ignoreScroll = useRef<boolean>(false);
  const ignoreTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    if (ignoreScroll.current) return;

    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    lastScrollY.current = currentScrollY;

    for (const header of headers) {
      const sectionId = header.to.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          setActiveSection(header.to);
          break;
        }
      }
    }
  }, [headers]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleClick = (to: string) => {
    if (!to.startsWith("#")) {
      navigate(to);
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/${to}`);
      return;
    }

    if (ignoreTimer.current) {
      clearTimeout(ignoreTimer.current);
    }

    ignoreScroll.current = true;
    setActiveSection(to);

    ignoreTimer.current = setTimeout(() => {
      ignoreScroll.current = false;
      ignoreTimer.current = null;
    }, 800);

    const targetId = to.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className={isHidden ? styles.hidden : ''}>
      {
        isMobile ?(
          <header className={styles.mobile}>
            <Drawer links={headers} onClick={(link) => handleClick(link)}>
              <FontAwesomeIcon icon={faBars} className={`${styles.bars}`}/>
            </Drawer>
          </header>
        ) : (
          <header>
          {
            headers.map(header => (
              <HeaderLink
                key={header.to}
                isActive={activeSection === header.to}
                label={header.label}
                onClick={() => handleClick(header.to)}
                to={header.to}/>
            ))
          }
          <LanguageButton className={styles['language-button']}/>
        </header>
        )
      }
    </div>
  );
}
