import styles from '../../../styles/Footer.module.css'

function Footer() {
    return ( 
        <footer className={styles.footer}>
            <ul>
                <li className={`span-secondary-gray ${styles.footerListHeader}`}> LIST ITEM</li>
                <li className='list-item'>LIST ITEM</li>
                <li className='list-item'>LIST ITEM</li>
                <li className='list-item'>LIST ITEM</li>
            </ul>
            <ul>
                <li className={`span-secondary-gray ${styles.footerListHeader}`}> LIST ITEM</li>
                <li className='list-item'>LIST ITEM</li>
                <li className='list-item'>LIST ITEM</li>
                <li className='list-item'>LIST ITEM</li>
            </ul>
            <ul>
                <li className={`span-secondary-gray ${styles.footerListHeader}`}> LIST ITEM</li>
                <li className='list-item'>LIST ITEM</li>
                <li className='list-item'>LIST ITEM</li>
                <li className='list-item'>LIST ITEM</li>
            </ul>
        </footer>
     );
}

export default Footer;