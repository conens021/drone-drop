import Image from "next/image";
import styles from "../../../styles/Camera.module.css";

function Camera() {
  return (
    <article className={styles.cameraContent} style={{ zIndex: '2' }}>
      <div className="container">
        <div className={styles.containerWrapper}>
          <section className={styles.cameraImageContainer}>
            <Image
              className={styles.cameraImage}
              src="/images/camera2.png"
              layout="fill"
            />
          </section>
          <section className={styles.text}>
            <div className={styles.fourK}>4K</div>
            <div className={styles.cameraInfo}>
              <h2>CAMERA</h2>
              <p>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`}
              </p>
            </div>
            <div className={styles.cameraAdditionalInfo}>
              <div>
                <div className={styles.cameraIconContainer}>
                  <Image
                    className={styles.cameraIcon}
                    src="/images/icons/lens.png"
                    layout="fill"
                  />
                </div>
                <div className={styles.cameraSpan}>9</div>
                <div className="span-secondary">ELEMENT <br />LENS</div>
              </div>
              <div>
                <div className={styles.cameraIconContainer}>
                  <Image
                    className={styles.cameraIcon}
                    src="/images/icons/timer.png"
                    layout="fill"
                  />
                </div>
                <div className={styles.cameraSpan}>30</div>
                <div className="span-secondary">FPS<br />4K VIDEO</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

export default Camera;
