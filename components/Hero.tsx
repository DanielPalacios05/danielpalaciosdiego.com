import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './Hero.module.css';
import clsx from 'clsx';


import githubIcon from '@/public/github.svg';
import linkedinIcon from '@/public/linkedin.svg';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className={clsx(styles.section, 'container')}>
            <div className={styles.banner}>
                <div>
                    <p className={styles.name}>
                        {t('name')}
                    </p>
                    <p className={styles.role}>{t('role')}</p>
                </div>

                <div className={styles.imageContainer}>
                    <Image
                        src="/images/hero-collage.png"
                        alt="Daniel Palacios Collage"
                        width={1110}
                        height={722}
                        className={styles.collageImage}
                        priority
                    />
                </div>

                <div className={styles.quoteContainer}>
                    {/* Decoration SVG if needed, using the one we downloaded or a simple shape */}
                    <Image
                        src="/images/hero-decoration.svg"
                        alt=""
                        width={24}
                        height={24}
                        className={styles.decorationIcon}
                    />
                    <div className={styles.background}>
                        <div className={styles.backgroundRectangle}>
                        </div>
                        <div className={styles.secondBackgroundRectangle}></div>
                    </div>


                    <p>{t('quote')}</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.bio}>
                    {t.rich('bio', {
                        br: () => <br />,
                        p: (chunks) => <p>{chunks}</p>
                    })}
                </div>

                <div className={styles.actions}>
                    <div className={styles.socials}>
                        <a href="https://github.com/DanielPalacios05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Image src={githubIcon}  width={50} height={50} alt="github" className={styles.socialIcon} />
                        </a>
                        <a href="https://www.linkedin.com/in/danielpalaciosdiego/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Image src={linkedinIcon} width={40} height={40} alt="linkedin" className={styles.socialIcon} />
                        </a>
                    </div>


                    <div className={styles.buttons}>
                        <a href="/cv.pdf" className={styles.primaryButton} download>
                            {t('downloadCv')}
                        </a>
                        <a href="#contact" className={styles.secondaryButton}>
                            {t('workTogether')}
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
}
