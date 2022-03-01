import Image from "next/image";
import styles from "../../../styles/Compatible.module.css";

function Compatible() {
  return (
    <article className={styles.compatibleContent}>
      <div className="container">
        <div className={styles.containerWrapper}>
          <div className="sectionNumberBottom">03</div>
          <h2>Compatible in your hand</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloremque soluta iure. Perferendis beatae accusantium architecto porro harum illo necessitatibus. Provident numquam maiores, tenetur dolore similique nam voluptate ad suscipit.</p>
        </div>
      </div>
      <section className={styles.droneInHandImageContainer}>
        <Image
          className={styles.droneInHandImage}
          src="/images/drone-in-hand.png"
          layout="fill"
        />
      </section>
    </article>
  );
}

export default Compatible;
