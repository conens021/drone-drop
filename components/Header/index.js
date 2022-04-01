import Image from "next/image";
import styles from "../../styles/Header.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Paper } from "@mui/material";
import Hamburger from "./Hamburger";
import Link from "next/link";

function Header() {
  return (
    <div style={{ maxWidth: '100vw', position: 'relative' }}>
      <div className={styles.triangleImage}>
      </div>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.header}>
          <header>
            <Link href='/choose-style' replace={true}>
              <button className={styles.buttonBuild} role="button">Start Building</button>
            </Link>
            <Hamburger styles={styles} />
            <h1 className={styles.title}>TAKE A SKY</h1>
            <div className={styles.number1}>01</div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/images/black-drone.png"
                layout="fill"
              />
            </div>
          </header>
          <nav className={styles.nav}>
            <div className={styles.logo}>LOGO</div>
            <ul className={styles.menuItems}>
              <li className={styles.item}>Introducing</li>
            </ul>
          </nav>

          <div className={styles.learnMore}>
            <div>Learn More</div>
            <Paper className={styles.iconCircle} elevation={6}>
              <KeyboardArrowDownIcon className={styles.icon} />
            </Paper>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;
