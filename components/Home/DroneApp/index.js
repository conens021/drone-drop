import Image from "next/image";
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

import styles from '../../../styles/DroneApp.module.css'
import { Button } from "@mui/material";

function DroneApp() {
    return ( 
        <article className={styles.droneAppContent}>
        <div className="container">
          <div className={styles.containerWrapper}>
            <div>
              <section className={styles.droneAppText}>
                <div className={styles.heading}>
                  <div className="sectionNumber">06</div>
                  <h2>Drone APP</h2>
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
              <section className={styles.availableOnContainer}>
                <div className={styles.icons}>
                    <div className="span-secondary-gray">AVAILABLE ON</div>
                     <AppleIcon />
                     <AndroidIcon />
                </div>
                <Button variant="contained" color='primary' size='large' sx={{textTransform : 'capitalize'}}>Download Now</Button>
              </section>
            </div>
       
          </div>
        </div>
        <section className={styles.droneAppImageContainer}>
              <Image
                className={styles.droneAppImage}
                src="/images/phone-in-hand.png"
                layout="fill"
              />
            </section>
      </article>
     );
}

export default DroneApp;