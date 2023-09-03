import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <nav className={styles.NavBar}>
      {/* <div className={styles.logo}>MasVusi</div> */}
      <Link href={"/"}>MasVusi</Link>
      <div className={styles.navItems}>
        <Link className="links" href={"/about"}>
          About
        </Link>
        <Link href={"/events"}>Events</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/book"}>Book Her!</Link>
      </div>
    </nav>
  );
}

export default NavBar;
