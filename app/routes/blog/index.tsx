import { useEffect, useState, type JSX } from "react";
import { Header } from "~/components/Header/Header";
import styles from "./index.module.scss";
import { Tag } from "~/components/Tag/Tag";
import { useIsMobile } from "~/hooks/useIsMobile";

type Article = {
  id: string,
  title: string,
  description: string,
  thumbnail: string,
  type: string,
  topics: string[],
  author: string,
  created_at: string,
  published: boolean
};

export default function Blog(): JSX.Element {
  const isMobile = useIsMobile();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/object-t/object-t-blog/refs/heads/main/articles.json")
      .then((res) => res.json())
      .then((data: Article[]) => {
        const publishedArticles = data.filter(article => article.published);
        setArticles(publishedArticles);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      <div className={[styles.container,isMobile && styles.mobile].join(" ")}>
        <h1>ブログ記事一覧</h1>
        <div className={styles.articleList}>
          {articles.map((article) => (
            <a key={article.id} href={`/blog/${article.id.replace(".md", "")}`} className={styles.articleItem}>
              <img 
                src={`https://raw.githubusercontent.com/object-t/object-t-blog/refs/heads/main/thumbnail/${article.thumbnail ?? article.id.replace(".md", "") + ".jpeg"}`} 
                alt={article.title} 
                className={styles.thumbnail} 
              />
              <div className={styles.textBox}>
                <h2>{article.title}</h2>
                <div className={styles.details}>
                  <div className={styles.info}>
                    <p>{new Date(article.created_at).toLocaleDateString().replaceAll("/", "-")}</p>
                  </div>
                  <div className={styles.tagContainer}>
                  {
                    article.topics.map(topic => (
                      <Tag kind={topic} className={styles.tag} key={topic} />
                    ))
                  }
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}