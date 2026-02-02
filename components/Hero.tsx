import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './Hero.module.css';
import { SVGProps } from 'react';
import clsx from 'clsx';


export function Github(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>{/* Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE */}<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>
    )
}

const Linkedin = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.3333 0C34.4384 0 35.4982 0.438987 36.2796 1.22039C37.061 2.00179 37.5 3.0616 37.5 4.16667V33.3333C37.5 34.4384 37.061 35.4982 36.2796 36.2796C35.4982 37.061 34.4384 37.5 33.3333 37.5H4.16667C3.0616 37.5 2.00179 37.061 1.22039 36.2796C0.438987 35.4982 0 34.4384 0 33.3333V4.16667C0 3.0616 0.438987 2.00179 1.22039 1.22039C2.00179 0.438987 3.0616 0 4.16667 0H33.3333ZM32.2917 32.2917V21.25C32.2917 19.4487 31.5761 17.7213 30.3024 16.4476C29.0287 15.1739 27.3013 14.4583 25.5 14.4583C23.7292 14.4583 21.6667 15.5417 20.6667 17.1667V14.8542H14.8542V32.2917H20.6667V22.0208C20.6667 20.4167 21.9583 19.1042 23.5625 19.1042C24.336 19.1042 25.0779 19.4115 25.6249 19.9584C26.1719 20.5054 26.4792 21.2473 26.4792 22.0208V32.2917H32.2917ZM8.08333 11.5833C9.01159 11.5833 9.90183 11.2146 10.5582 10.5582C11.2146 9.90183 11.5833 9.01159 11.5833 8.08333C11.5833 6.14583 10.0208 4.5625 8.08333 4.5625C7.14955 4.5625 6.25401 4.93344 5.59373 5.59373C4.93344 6.25401 4.5625 7.14955 4.5625 8.08333C4.5625 10.0208 6.14583 11.5833 8.08333 11.5833ZM10.9792 32.2917V14.8542H5.20833V32.2917H10.9792Z" fill="currentColor" />
    </svg>
);

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className={clsx(styles.section, 'container')}>
            <div className={styles.banner}>
                <div>
                    <h1 className={styles.name}>
                        {t('name')}
                    </h1>
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
                            <Github className={styles.socialIcon} />
                        </a>
                        <a href="https://www.linkedin.com/in/danielpalaciosdiego/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className={styles.socialIcon} />
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
        </section>
    );
}
