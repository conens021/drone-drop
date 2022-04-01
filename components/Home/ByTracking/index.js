import Image from 'next/image';
import styles from '../../../styles/ByTracking.module.css'

function ByTracking() {
  return (
    <article className={styles.byTrackingContent}>
      <div className="container">
        <div className={styles.containerWrapper}>
          <div>
            <section className={styles.byTrackingText}>
              <div className={styles.heading}>
                <div className="sectionNumber">03</div>
                <h2>Powerfull byTracking</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                commodi obcaecati nobis laudantium! Sapiente veniam ipsum quasi,
                nemo dolorum velit recusandae dicta, hic, perferendis magni
                porro quidem harum laboriosam aperiam? Sapiente veniam ipsum
                quasi, nemo dolorum velit recusandae dicta,
              </p>
            </section>
            <div></div>
            <section className={styles.flyingDroneImageContainer}>
              <Image
                className={styles.flyingDroneImage}
                src="/images/DroneFLying.png"
                layout="fill"
              />
            </section>
          </div>

        </div>
      </div>
      <section className={styles.byTrackingImageContainer}>
        <Image
          className={styles.byTrackingImage}
          src="/images/hands2.png"
          layout="fill"
        />
      </section>
    </article>
  );
}

export default ByTracking;
