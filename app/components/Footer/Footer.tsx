import { useIsMobile } from '~/hooks/useIsMobile';
import styles from './Footer.module.css';

const sitemap: Record<string, string> = {
  "ホームページ": "/",
  "お知らせ": "/",
  "活動報告": "/",
  "技術ブログ": "/",
  "": "",
  "お問い合わせ": "/",
}

const aboutSite: Record<string, string> = {
  "Webデザイン(Figma)": "https://www.figma.com/design/YWBtX9qhd0QKOTY4a2SEWx/Object%3CT%3E",
  "ソースコード(Github)": "https://github.com/object-t/object-t-website",
}

const school: Record<string, string> = {
  "学校ホームページ": "https://www.fca.ac.jp/",
}

const getList = (list: Record<string, string>) => {
  return (
    <ul>
      {
        Object.entries(list).map(([label, url]) => label ? (
          <li key={label}>
            <a href={url}>
              <p>
                {label}
              </p>
            </a>
          </li>
        ): <br key={''}/>)
      }
    </ul>
  )
}

export const Footer = ({...props}) => {
const isMobile = useIsMobile()

  return (
    <footer {...props}>
      {
        !isMobile && <>
        <div className={`${styles.container} ${styles.title}`}>
          <p>学生団体:Object&lt;T&gt;</p>
          <p>所属: 福岡デザイン＆テクノロジー専門学校</p>
        </div><div className={styles.container}>
          <div className={styles.block}>
            <p>サイトマップ</p>
            {getList(sitemap)}
          </div>
          <div className={styles.block}>
            <p>本サイトについて</p>
            {getList(aboutSite)}
          </div>
          <div className={styles.block}>
            <p>学校関連</p>
            {getList(school)}
          </div>
        </div>
        </>
      }
      <p className={[styles.copy, isMobile && styles.mobile].join(" ")}>&copy; 学生団体 Object&lt;T&gt;. All rights reserved.</p>
    </footer>
  );
};
