import { Link } from '@/i18n/routing';
import styles from './Logo.module.css';
import clsx from 'clsx';

export default function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={clsx(styles.logo, className)}>
            dp
        </Link>
    );
}
