import styles from './Education.module.css';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import eafit from '@/public/images/eafit.png';
import Image from 'next/image';
import link from '@/public/images/link.svg';
import alberta from '@/public/images/alberta.svg';
import learnquest from '@/public/images/learnquest.png';
import mckinsey from '@/public/images/mckinsey.png';
import reading from '@/public/images/reading.jpg';

export default function Education() {

    const t = useTranslations('Education');

    return (
        <section className={clsx(styles.section, 'container')}>
            <h1>{t('title')}</h1>

            <div className={styles.main}>
                <div className={clsx(styles.university)}>

                    <Image
                        className={clsx(styles.image)}
                        src={eafit}
                        alt="Education"
                    />
                    <div className={clsx(styles.description)}>
                        <a target="_blank" className='main-underline' href="https://drive.google.com/file/d/1twSMPTU14faoPjl6Fgg_IdvIb-1845jh/view?usp=sharing">
                            <span>
                                {t('eafit.title')}
                            </span>
                            <Image src={link} alt="link" />
                        </a>


                    </div>

                </div>

                <div className={clsx(styles.info)}>

                    <ul>
                        <li>{t('eafit.scholarship')}</li>
                        <li>{t.rich('eafit.optika', {   
                            optika: (chunks) => <a href="#optika" className="main-underline"><span className="">{chunks}<Image src={link} alt="link" /></span> </a>
                        })}</li>
                        <li>{t('eafit.representative')}</li>
                        <li>{t('eafit.afroeafit')}</li>
                        <li>{t('eafit.gpa')}</li>
                    </ul>

                </div>

            </div>


            <div className={styles.certs}>

                <div className={styles.cert}>
                    <Image src={mckinsey} alt="McKinsey & Company" />
                    <a target="_blank" className='main-underline' href="https://www.credly.com/badges/e915a575-3795-4adf-a54d-2ceacb44914b/public_url">
                        <span>
                            {t('certs.mckinsey.title')}
                        </span>
                        <Image src={link} alt="link" />
                    </a>
                    <p className={clsx(styles.description)}>{t('certs.mckinsey.description')}</p>
                </div>

                <div className={styles.cert}>
                    <Image src={alberta} alt="University of Alberta" />
                    <a target="_blank" className='main-underline' href="https://coursera.org/share/7abbd2cb4fc01a26518f4023af8b2aba">
                        <span>
                            {t('certs.alberta.title')}
                        </span>
                        <Image src={link} alt="link" />
                    </a>
                    <p className={clsx(styles.description)}>{t('certs.alberta.description')}</p>
                </div>
                <div className={styles.cert}>
                    <Image src={learnquest} alt="LearnQuest" />
                    <a target="_blank" className='main-underline' href="https://coursera.org/share/517c6a72c13ba26c906a5131bc8010a1">
                        <span>
                            {t('certs.learnquest.title')}
                        </span>
                        <Image src={link} alt="link" />
                    </a>
                    <p className={clsx(styles.description)}>{t('certs.learnquest.description')}</p>
                </div>




            </div>

            <div className={clsx(styles.readings)}>
                <div className={styles.content}>
                    <p>{t('readings.content')}</p>
                    <a className='main-underline' target='_blank' href="https://learning.oreilly.com/playlists/c95d1ecb-0e56-4a5b-893c-e89a50bcdacd"> {t('readings.cta')}</a>
                </div>
                <div className={styles.readingImage}>
                    <div className={styles.imageContainer}>
                        <Image src={reading} alt="Reading" />
                    </div>

                    <p className={styles.imageCaption}>{t('readings.imageCaption')}</p>
                </div>
            </div>
        </section>
    );
}