import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './Contact.module.css';
import mailIcon from '@/public/filled-mail.svg';
import githubIcon from '@/public/github.svg';
import linkedinIcon from '@/public/linkedin.svg';

export default function Contact() {
    const t = useTranslations('contact');

    return (
        <section className={styles.container} id="contact">
            <h2 className={styles.title}>{t('title')}</h2>

            <div className={styles.info}>
                <p>{t('subtitle')}</p>
                <p>{t('message')}</p>
            </div>

            <div className={styles.links}>
                <a href="https://www.linkedin.com/in/danielpalaciosdiego/" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                    <Image src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                    <span>danielpalaciosdiego</span>
                </a>

                <a href="mailto:danielpalacios.diego@gmail.com" className={styles.linkItem}>
                    <Image src={mailIcon} alt="Email" className={styles.icon} />
                    <span>danielpalacios.diego@gmail.com</span>
                </a>

                <a href="https://github.com/DanielPalacios05" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                    <Image src={githubIcon}alt="GitHub" className={styles.icon} />
                    <span>DanielPalacios05</span>
                </a>
            </div>
        </section>
    );
}