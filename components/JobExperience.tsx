
import styles from "./JobExperience.module.css"
import eafitLogo from '@/public/images/eafit-logo.png'
import eafit from '@/public/images/eafit.png';
import Image from "next/image"
import { useTranslations } from "next-intl";
import cadena from "@/public/images/cadena_no_bg.png"
import cadenaAuxImage from "@/public/images/danielcadena.png"
import cocomasur from "@/public/images/cocomasure_no_bg.png"
import collage from "@/public/images/collage.jpg"
import clsx from "clsx";
import formacion from "@/public/images/formacion.png"
import mcac from "@/public/images/mcac.png"

export default function JobExperience() {


    const t = useTranslations("Work.job_experience")


    const items = [
        { title: 'May 1940', cardTitle: 'Dunkirk', cardDetailedText: 'Allied evacuation from France' },
        { title: 'June 1944', cardTitle: 'D-Day', cardDetailedText: 'Normandy invasion begins' }
    ];

    return (
        <div className={styles.jobExperienceContainer}>



            <div className={styles.jobExperience}>



                <div className={styles.timelineItem}>

                    <p className={styles.date}>{t("experiences.cocomasur.date_range")}</p>
                    <div className={styles.separator}>

                        <div className={styles.timeline}>

                            <div className={clsx(styles.line)}>
                            </div>
                            <div className={styles.circle}>
                            </div>

                            <div className={styles.line}>

                            </div>
                        </div>


                    </div>




                    <div id={styles.cocomasur} className={styles.jobCard}>


                        <div className={styles.description}>
                            <p>{t("experiences.cocomasur.role")}</p>
                            <ul>
                                {t.raw("experiences.cocomasur.activities").map((activity: string, index: number) => (
                                    <li key={index}>{activity}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.imagesContainer}>
                            <div className={styles.imagesCol}>
                                <Image src={cocomasur} alt="Cocomasur Logo" />
                                <Image height={160} src={collage} alt="Cocomasur Collage" />
                            </div>

                            <div id={styles.designs} className={styles.imagesCol}>
                                <p className={clsx(styles.designTitle, "main-underline")}>{t("experiences.cocomasur.check_design")}</p>
                                <a href="https://drive.google.com/file/d/1yVS906KoHkfpfqbALxMjzGbcUet0LTDA/view?usp=sharing
                                " target="_blank" rel="noopener noreferrer">
                                    <Image src={formacion} alt="Formacion Design" />
                                </a>
                                <a href="https://drive.google.com/file/d/160Oe-v6nivFG6VMYlIq9Jsl88s3BUDKY/view?usp=sharing
                                " target="_blank" rel="noopener noreferrer">
                                    <Image src={mcac} alt="MCAC Design" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>




                <div className={styles.timelineItem}>

                    <p className={styles.date}>{t("experiences.cadena.date_range")}</p>

                    <div className={styles.separator}>

                        <div className={styles.timeline}>

                            <div className={clsx(styles.line)}>

                            </div>
                            <div className={styles.circle}>
                            </div>

                            <div className={styles.line}>

                            </div>
                        </div>


                    </div>



                    <div id="cadena" className={styles.jobCard}>


                        <div className={styles.description}>
                            <p>{t("experiences.cadena.role")}</p>
                            <ul>
                                {t.raw("experiences.cadena.activities").map((activity: string, index: number) => (
                                    <li key={index}>{activity}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.imagesContainer}>
                            <Image src={cadena} alt="Cadena Logo" />
                            <Image src={cadenaAuxImage} alt="Cadena Aux Image" />
                        </div>
                    </div>
                </div>




                <div className={styles.timelineItem}>

                    <p className={styles.date}>{t("experiences.eafit.date_range")}</p>

                    <div className={styles.separator}>

                        <div className={styles.timeline}>

                            <div className={clsx(styles.line)}>

                            </div>
                            <div className={styles.circle}>
                            </div>

                            <div className={styles.line}>

                            </div>
                        </div>

                    </div>



                    <div id="eafit" className={styles.jobCard}>
                        <div className={styles.description}>
                            <p>{t("experiences.eafit.role")}</p>
                            <ul>
                                {t.raw("experiences.eafit.activities").map((activity: string, index: number) => (
                                    <li key={index}>{activity}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.imagesContainer}>
                            <Image src={eafit} alt="EAFIT Logo" />
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}