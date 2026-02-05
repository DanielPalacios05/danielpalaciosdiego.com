import { useTranslations } from "next-intl";
import styles from './Work.module.css';
import clsx from "clsx";
import Optika from "@/public/images/optika_no_bg.png"
import Image from "next/image";
import link from '@/public/images/link.svg'
import firebase from '@/public/images/tech-stack/mdi-firebase.svg';
import azure from '@/public/images/tech-stack/codicon-azure.svg';
import django from '@/public/images/tech-stack/devicon-plain-django-wordmark.svg';
import raspberry from '@/public/devicon-plain-raspberrypi.svg';
import arduino from '@/public/devicon-plain-arduino-wordmark.svg';
import java from '@/public/ri-java-fill.svg';
import python from '@/public/mdi-language-python.svg';
import gcp from '@/public/images/tech-stack/gcp.png';
import k8s from '@/public/images/tech-stack/mdi-kubernetes.svg';
import mongo from '@/public/images/tech-stack/flowbite-mongo-db-solid.svg';
import fast from '@/public/images/tech-stack/devicon-plain-fastapi.svg';
import chivasLogo from '@/public/images/logo-1.webp'
import chivasWebsiteImages from '@/public/images/turychivasimage.png'
import JobExperience from "./JobExperience";

export default function Work() {

    const t = useTranslations('Work');

    return (
        <>
            <h1 id="work" className="">{t('title')}</h1>
            <div className={clsx(styles.workSection, 'container')}>


                <h2>
                    {t('job_experience.title')}
                </h2>

                <JobExperience />

                <h2 className={styles.title}>{t('featured_projects.title')}</h2>
                <p className={styles.description}>{t('featured_projects.description')}</p>


                <div className={styles.projects}>
                    <div className={styles.project}>
                        <div className={styles.projectInfo}>
                            <Image width={150}  src={Optika} alt="Optika Project Logo" />
                            <p className={styles.award}> <a target="_blank" className="main-underline" href="https://drive.google.com/file/d/1WjCo5RDTa4UVHccYmrY7tWwfuMHStb_0/view?usp=sharing">{t('featured_projects.projects.0.award')}</a> <Image src={link} alt="Link Icon" /></p>
                            <p>{t('featured_projects.projects.0.description')}</p>
                            <ul className={styles.projectFeatures}>
                                {t.raw('featured_projects.projects.0.features').map((feature: string) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <ul className={styles.techStack}>
                                <li><Image src={firebase} alt="Firebase" /></li>
                                <li><Image src={azure} alt="Azure" /></li>
                                <li><Image src={django} alt="Django" /></li>
                                <li><Image src={raspberry} alt="Raspberry Pi" /></li>
                                <li><Image src={arduino} alt="Arduino" /></li>
                            </ul>
                        </div>


                        <p style={{ marginBottom: '0.2rem' }} className={styles.award}> <a target="_blank" rel="noopener noreferrer" className="main-underline" href="https://www.linkedin.com/posts/danielpalaciosdiego_i-remember-that-a-year-ago-my-teammates-activity-7107840156082012161-Chvz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADt-iRwBVyJCl-6kUZN7NU8YMfVxnqL4SrQ">{t('featured_projects.video_cta')}</a> <Image src={link} alt="Link Icon" /></p>
                        <p className={styles.award}> <a target="_blank" rel="noopener noreferrer" className="main-underline" href="https://github.com/DanielPalacios05/OptikaProject">{t('featured_projects.code_cta')}</a> <Image src={link} alt="Link Icon" /></p>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.projectInfo}>
                            <h3 className=""> {t('featured_projects.projects.1.title')} </h3>
                            <p>{t('featured_projects.projects.1.description')}</p>
                            <ul className={styles.projectFeatures}>
                                {t.raw('featured_projects.projects.1.features').map((feature: string) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <ul className={styles.techStack}>
                                <li><Image src={java} alt="Java" /></li>
                                <li><Image src={python} alt="Python" /></li>
                            </ul>
                        </div>

                        <p className={styles.award}> <a target="_blank" rel="noopener noreferrer" className="main-underline" href="https://github.com/DanielPalacios05/KarelDB">{t('featured_projects.code_cta')}</a> <Image src={link} alt="Link Icon" /></p>

                    </div>

                    <div className={styles.project}>
                        <div className={styles.projectInfo}>
                            <h3 className=""> {t('featured_projects.projects.2.title')} </h3>
                            <p>{t('featured_projects.projects.2.description')}</p>
                            <ul className={styles.projectFeatures}>
                                {t.raw('featured_projects.projects.2.features').map((feature: string) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <ul className={styles.techStack}>
                                <li><Image src={gcp} alt="Google Cloud" /></li>
                                <li><Image src={k8s} alt="Kubernetes" /></li>
                                <li><Image src={mongo} alt="MongoDB" /></li>
                                <li><Image src={fast} alt="FastAPI" /></li>
                            </ul>
                        </div>

                        <p className={styles.award}> <a target="_blank" rel="noopener noreferrer" className="main-underline" href="https://github.com/orgs/OreoInvertida/repositories">{t('featured_projects.code_cta')}</a> <Image src={link} alt="Link Icon" /></p>

                    </div>
                </div>
                <div style={{ marginTop: '2.5rem' }} className={styles.projectLink}>
                    <a className="main-underline" href="https://github.com/DanielPalacios05" target="_blank" rel="noopener noreferrer">
                        <span>{t('featured_projects.github_cta')}</span>
                        <Image src={link} alt="Link Icon" />
                    </a>
                </div>
            </div>

            <div className="container">
                <h2 style={{ textAlign: 'center' }}>{t('client_solutions.title')}</h2>
                <p style={{ marginBottom: '1rem' }}>{t('client_solutions.description')}</p>
                <ul className={styles.projectFeatures}>
                    <li>{t.rich('client_solutions.offerings.website', {
                        b: (chunks) => <b className="">{chunks}</b>
                    })}</li>
                    <li>{t.rich('client_solutions.offerings.software', {
                        b: (chunks) => <b className="">{chunks}</b>
                    })}</li>
                </ul>

                <div className={styles.clientSolutions}>

                    <div className={styles.clientSolution}>
                        <Image src={chivasLogo} alt="Chivas Logo" />
                        <div className={styles.description}>{t.rich('client_solutions.projects.0.description', {
                            p: (chunks) => <p>{chunks}</p>,
                            li: (chunks) => < li className={styles.projectFeatures}>{chunks}</li>,
                            ul: (chunks) => <ul className={styles.projectFeatures}>{chunks}</ul>
                        })}</div>
                        <Image style={{ maxWidth: '100%', height: 'auto' }} src={chivasWebsiteImages} alt="Images of TuryChivas website"></Image>
                    </div>

                </div>
            </div>
        </>
    );
}