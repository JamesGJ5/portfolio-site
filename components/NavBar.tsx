import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li key={0}>
                    <Link href={'/'}>Home</Link>
                </li>
                <li key={1}>
                    <Link href={'/personal-projects'}>Personal Projects</Link>
                </li>
                <li key={2}>
                    <Link href={'/open-source'}>Open Source</Link>
                </li>
                <li key={3}>
                    <Link href={'/certifications'}>Certifications</Link>
                </li>
            </ul>
            <ul className={styles.navList}>
                <li key={0}>
                    <a aria-label='Link to GitHub profile (opens in new tab)' href='https://github.com/JamesGJ5' target='_blank'>
                        <Image src='/logos/github-mark.svg' alt='' width={50/96*98} height={50} priority/>
                    </a>
                </li>
                <li key={1}>
                    <a aria-label='Link to LinkedIn profile (opens in new tab)' href='https://www.linkedin.com/in/james-graca-jones' target='_blank'>
                        <Image src='/logos/LI-In-Bug.png' alt='' width={50/540*635} height={50} priority/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}