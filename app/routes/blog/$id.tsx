import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';
import './custom-highlight.scss'
import { useEffect, useState, type JSX } from "react";
import { Header } from "~/components/Header/Header";
import styles from "./$id.module.scss"
import { useParams } from "react-router";
import { useIsMobile } from "~/hooks/useIsMobile";
import { custom_markdown_convert } from "~/utils/convert";

export default function Blog(): JSX.Element {
  const { id } = useParams();
  const [thumbnail] = useState<string | null>(null);
  const [markdownSource, setMarkdownSource] = useState<string>("");
  const [table, setTable] = useState<JSX.Element[]>([]);
  const isMobile = useIsMobile();

  const handleAnchorClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/rsms/markdown-wasm@v1.1.2/dist/markdown.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = async () => {
      await markdown.ready;
      await fetch(`https://raw.githubusercontent.com/object-t/object-t-blog/refs/heads/main/articles/${id}.md`)
        .then((res) => res.text())
        .then((md) => {
          const html = markdown.parse(custom_markdown_convert(md));
          const container = document.createElement("div");
          container.innerHTML = html;
        
          const headings = container.querySelectorAll("h1, h2");
          headings.forEach((heading, i) => {
            const text = heading.textContent ?? `heading-${i}`;
            const id = text.replace(/\s+/g, "-").toLowerCase();
            heading.id = id;
          });
          setTable(
            Array.from(headings).map((d, i) => {
              const id = (d.textContent ?? `heading-${i}`).replace(/\s+/g, "-").toLowerCase();
                return (
                  <a 
                    key={i}
                    className={styles[`${d.tagName.toLowerCase()}-table`]}
                    href={"#" + id}
                    onClick={handleAnchorClick(id)}
                  >
                    <li>{d.textContent}</li>
                  </a>
                )
              }
            )
          );
          
          container.querySelectorAll("pre code").forEach((code) => {
            hljs.highlightElement(code as HTMLElement);
          });

          setMarkdownSource(container.innerHTML);
        })
        .catch((err) => console.error("読み込みエラー:", err));
    };
  }, [id]);
  
  return (
    <div className={styles.container}>
      <Header />
      {
        !isMobile && 
          <div className={styles.side}>
            <ul>
              {
                table
              }
            </ul>
          </div>
      }
      <div className={styles["article-container"]}>
        <img src={thumbnail ? thumbnail : "/assets/images/headers/blog.webp"} className={styles["header-img"]} />
        <div 
          className={[styles.article, isMobile && styles.mobile].join(" ")}
          dangerouslySetInnerHTML={
            {
              __html: markdownSource
            }
          }
        />
      </div>
    </div>
  )
}