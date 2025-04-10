import { useIsMobile } from '~/hooks/useIsMobile';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const sitemap: Record<string, string> = {
  "header.homepage": "/",
  "header.notice": "/",
  "header.activity": "/",
  "header.tech-blog": "/",
  "": "",
  "header.contact": "/",
}

const aboutSite: Record<string, string> = {
  "header.web-design": "https://www.figma.com/design/YWBtX9qhd0QKOTY4a2SEWx/Object%3CT%3E",
  "header.source": "https://github.com/object-t/object-t-website",
}

const school: Record<string, string> = {
  "header.school-website": "https://www.fca.ac.jp/",
}

export const Footer = ({...props}) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  const getList = (list: Record<string, string>) => {
    return (
      <ul>
        {
          Object.entries(list).map(([label, url]) => label ? (
            <li key={label}>
              <a href={url}>
                <p>
                  {t(label)}
                </p>
              </a>
            </li>
          ): <br key={''}/>)
        }
      </ul>
    )
  }
  
  return (
    <footer {...props}>
      {
        !isMobile && <>
        <div className={`${styles.container} ${styles.title}`}>
          <p>{t("header.student-organization")}: Object&lt;T&gt;</p>
          <p>{t("header.affiliation")}: {t("common.school-name")}</p>
        </div><div className={styles.container}>
          <div className={styles.block}>
            <p>{ t("header.sitemap") }</p>
            {getList(sitemap)}
          </div>
          <div className={styles.block}>
            <p>{t("header.about")}</p>
            {getList(aboutSite)}
          </div>
          <div className={styles.block}>
            <p>{t("header.school")}</p>
            {getList(school)}
          </div>
        </div>
        </>
      }
      <p className={[styles.copy, isMobile && styles.mobile].join(" ")}>&copy; {t("header.student-organization")} Object&lt;T&gt;. All rights reserved.</p>
    </footer>
  );
};
