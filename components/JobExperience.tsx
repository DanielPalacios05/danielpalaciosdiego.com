
import styles from "./JobExperience.module.css"
import eafitLogo from '@/public/images/eafit-logo.png'
import eafit from '@/public/images/eafit.png';
import Image from "next/image"
import { useTranslations } from "next-intl";
import cadena from "@/public/images/cadena_no_bg.png"
import cadenaAuxImage from "@/public/images/danielcadena.png"
import cocomasur from "@/public/images/cocomasure_no_bg.png"
import collage from "@/public/images/collage.jpg"

export default function JobExperience() {


    const t = useTranslations("Work.job_experience")


    const items = [
        { title: 'May 1940', cardTitle: 'Dunkirk', cardDetailedText: 'Allied evacuation from France' },
        { title: 'June 1944', cardTitle: 'D-Day', cardDetailedText: 'Normandy invasion begins' }
    ];

    return (
        <div className={styles.jobExperience}>

            <div className={styles.timelineItem}>


            <div id="eafit" className={styles.jobCard}>
                <div className={styles.imagesContainer}>
                    <Image src={eafit} alt="EAFIT Logo" />
                </div>
                <div className={styles.description}>
                    <p>{t("experiences.eafit.role")}</p>
                    <ul>
                        {t.raw("experiences.eafit.activities").map((activity, index) => (
                            <li key={index}>{activity}</li>
                        ))}
                    </ul>
                </div>

            </div>
            </div>

            <div className={styles.timelineItem}>


                <div id="cadena" className={styles.jobCard}>

                    <div className={styles.imagesContainer}>
                        <Image src={cadena} alt="Cadena Logo" />
                        <Image src={cadenaAuxImage} alt="Cadena Aux Image" />
                    </div>
                    <div className={styles.description}>
                        <p>{t("experiences.cadena.role")}</p>
                        <ul>
                            {t.raw("experiences.cadena.activities").map((activity, index) => (
                                <li key={index}>{activity}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.timelineItem}>


                <div id={styles.cocomasur} className={styles.jobCard}>

                    <div className={styles.imagesContainer}>
                        <Image src={cocomasur} alt="Cocomasur Logo" />
                        <Image src={collage} alt="Cocomasur Collage" />
                    </div>
                    <div className={styles.description}>
                        <p>{t("experiences.cocomasur.role")}</p>
                        <ul>
                            {t.raw("experiences.cadena.activities").map((activity, index) => (
                                <li key={index}>{activity}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    )
}