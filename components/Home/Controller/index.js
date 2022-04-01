import { Button } from "@mui/material";
import Image from "next/image";
import styles from "../../../styles/Controller.module.css";
import ControllerCharts from "./ControllerCharts";

function Controller() {
  return (
    <article className={styles.controllerContent}>
      <div className={styles.triangleImage}>
      </div>
      <div className="container">
        <div className={styles.containerWrapper}>
          <div>
            <section className={styles.controllerText}>
              <div className={styles.heading}>
                <div className="sectionNumber">03</div>
                <h2>Powerfull Controller</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                commodi obcaecati nobis laudantium! Sapiente veniam ipsum quasi,
                nemo dolorum velit recusandae dicta, hic, perferendis magni
                porro quidem harum laboriosam aperiam? Sapiente veniam ipsum quasi,
                nemo dolorum velit recusandae dicta,
              </p>
              <Button variant="outlined" color='primary' size='large' >START BUYING</Button>
            </section>
            <div></div>
            <section>
              <ControllerCharts styles={styles} />
            </section>
          </div>
          <section className={styles.controllerImageContainer}>
            <Image
              className={styles.controllerImage}
              src="/images/Controller.png"
              layout="fill"
            />
          </section>
        </div>
      </div>
    </article>
  );
}

export default Controller;
