import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Daniel Palacios. {t('rights')}.</p>
            <p className={styles.ostinato}>ostinato rigore</p>
        </footer>
    );
}
