import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../../components/navbar";
import Card from "../../components/card";
export default function Home() {
  return (
    <div className={styles.home}>
      <NavBar />
      <div className={styles.logo}></div>
      {/* <div>Hello</div> */}
      <div className={styles.cardHome}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
