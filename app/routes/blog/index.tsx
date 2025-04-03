import type { JSX } from "react";
import { Header } from "~/components/Header/Header";
import styles from "./index.module.css";

export default function Blog(): JSX.Element {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>準備中....</h1>
      </div>
    </div>
  )
}