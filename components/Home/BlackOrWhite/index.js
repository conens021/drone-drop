import { Button } from "@mui/material";
import Image from "next/image";
import styles from "../../../styles/BlackOrWhite.module.css";

function BlackOrWhite() {
  return (
    <article className={styles.blackOrWhiteContent}>
      <section className={styles.black}>
        <div className={styles.blackWrapper}>
          <div className={styles.textContent}>
            <div className={styles.heading}>
              <div className="sectionNumber">04</div>
              <h2 className="white">BLACK</h2>
            </div>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda iusto exercitationem nihil itaque atque, neque ab
              architecto, blanditiis maxime distinctio sed, explicabo placeat
              eos totam minus nisi. Quisquam, aut doloribus!
            </p>
            <Button variant="outlined" color='primary' size='large' >CHOOSE STYLE</Button>
          </div>
          <section className={styles.blackDroneImageContainer}>
            <Image
              className={styles.blackDroneImage}
              src="/images/black-drone.png"
              layout="fill"
            />
          </section>
        </div>
      </section>
      <section className={styles.white}>
        <div className={styles.whiteWrapper}>
          <section className={styles.blackDroneImageContainer}>
            <Image
              className={styles.blackDroneImage}
              src="/images/White-edited-lines.png"
              layout="fill"
            />
          </section>
          <div className={styles.textContentBottom}>
            <div className={styles.heading}>
              <div className="sectionNumber">05</div>
              <h2>WHITE</h2>
            </div>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda iusto exercitationem nihil itaque atque, neque ab
              architecto, blanditiis maxime distinctio sed, explicabo placeat
              eos totam minus nisi. Quisquam, aut doloribus!
            </p>
            <Button variant="contained" color='primary' size='large' >CHOOSE STYLE</Button>
          </div>
        </div>
      </section>
    </article>
  );
}

export default BlackOrWhite;
