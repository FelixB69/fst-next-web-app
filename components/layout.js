import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link href="/">
            <a href="/" className={styles.link}>
              Home
            </a>
          </Link>
          <Link href="/campuses">
            <a className={styles.navlink} href="/campuses">
              Campuses
            </a>
          </Link>
          <Link href="/about">
            <a href="/about" className={styles.link}>
              About page
            </a>
          </Link>
          <Link href="/termes">
            <a href="/termes" className={styles.link}>
              Terms conditions
            </a>
          </Link>
        </nav>
      </header>
      <main>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <title>Félix Website</title>
        </Head>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>Copyright Félix BERGER</p>
      </footer>
    </>
  );
}
