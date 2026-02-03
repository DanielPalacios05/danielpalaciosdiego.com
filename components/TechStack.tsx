import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './TechStack.module.css';
import clsx from 'clsx';


type TechCategory = {
    name: string;
    items: {
        name: string;
        icon: string;
    }[];
};

interface TechCategoryCardProps extends TechCategory {
    className?: string;
}

function TechCategoryCard({ name, items, className }: TechCategoryCardProps) {
    return (
        <div className={clsx(styles.category, className)}>
            <h3>{name}</h3>
            <div className={styles.categoryItems}>
                {items.map((item) => (
                    <div className={styles.item} key={item.name}>
                        <Image className={styles.icon} src={item.icon} alt={item.name} width={24} height={24} />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TechStack() {
    const t = useTranslations('TechStack');



    const categories: TechCategory[] = [
        {
            name: 'Design',
            items: [
                { name: 'Figma', icon: '/images/tech-stack/figma.svg' },
                { name: 'Zeplin', icon: '/images/tech-stack/zeplin.svg' },
            ]
        },
        {
            name: 'Web UI',
            items: [
                { name: 'Next.js', icon: '/images/tech-stack/nextjs.svg' },
                { name: 'Astro', icon: '/images/tech-stack/astro.svg' },
                { name: 'React', icon: '/images/tech-stack/react.svg' },
            ]
        },
        {
            name: 'Infrastructure & Tools',
            items: [
                { name: 'AWS', icon: '/images/tech-stack/mdi-aws.svg' },
                { name: 'Azure', icon: '/images/tech-stack/codicon-azure.svg' },
                { name: 'Google Cloud', icon: '/images/tech-stack/gcp.png' },
                { name: 'Firebase', icon: '/images/tech-stack/mdi-firebase.svg' },
                { name: 'Cloudflare', icon: '/images/tech-stack/simple-icons-cloudflare.svg' },
                { name: 'gRPC', icon: '/images/tech-stack/devicon-plain-grpc.svg' },
                { name: 'RabbitMQ', icon: '/images/tech-stack/simple-icons-rabbitmq.svg' },
                { name: 'Docker', icon: '/images/tech-stack/mdi-docker.svg' },
                { name: 'Kubernetes', icon: '/images/tech-stack/mdi-kubernetes.svg' },
            ]
        },
        {
            name: 'Data',
            items: [
                { name: 'MongoDB', icon: '/images/tech-stack/flowbite-mongo-db-solid.svg' },
                { name: 'PostgreSQL', icon: '/images/tech-stack/akar-icons-postgresql-fill.svg' },
            ]
        },
        {
            name: 'Backend',
            items: [
                { name: 'Django', icon: '/images/tech-stack/devicon-plain-django-wordmark.svg' },
                { name: 'FastAPI', icon: '/images/tech-stack/devicon-plain-fastapi.svg' },
                { name: '.NET', icon: '/images/tech-stack/simple-icons-dotnet.svg' },
                { name: 'Go', icon: '/images/tech-stack/fa7-brands-golang.svg' },
            ]
        },
    ];

    return (
        <section className={clsx(styles.section, 'container')}>
            <h1 className={styles.title}>{t('title')}</h1>

            <div className={styles.technologies}>


                <TechCategoryCard className={styles.infraTools} name={t('infrastrucuture_tools')} items={categories[2].items} />

                <TechCategoryCard name={t('design')} items={categories[0].items} />

                <TechCategoryCard name={t('data')} items={categories[3].items} />

                <TechCategoryCard name={t('web-ui')} items={categories[1].items} />

                <TechCategoryCard name={t('backend')} items={categories[4].items} />


            </div>
        </section>
    );
}
