import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../../components/navbar";
export default function Home() {
  return (
    <div className={styles.home}>
      <NavBar />
      <div className={styles.logo}></div>
      <div>Hello</div>
    </div>
  );
}
