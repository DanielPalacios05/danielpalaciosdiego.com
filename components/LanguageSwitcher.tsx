'use client';

import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/i18n/routing';
import { useState, useRef, useEffect } from 'react';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languageLabels: Record<string, string> = {
        en: 'english',
        es: 'español'
    };

    return (
        <div className={styles.container} ref={containerRef}>
            <button onClick={toggleDropdown} className={styles.button} aria-expanded={isOpen} type="button">
                {languageLabels[locale] || locale.toUpperCase()}
<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 6.66667L0 0H13.3333L6.66667 6.66667Z" fill="black"/>
</svg>

            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <Link href={pathname} locale="en" className={styles.option} onClick={() => setIsOpen(false)}>
                        english
                    </Link>
                    <Link href={pathname} locale="es" className={styles.option} onClick={() => setIsOpen(false)}>
                        español
                    </Link>
                </div>
            )}
        </div>
    );
}
