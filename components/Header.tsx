'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import styles from './Header.module.css';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import clsx from 'clsx';
import { useState } from 'react';

export default function Header() {
    const t = useTranslations('Navigation');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={clsx(styles.header, 'container')}>
            {/* Desktop Left Nav */}
            <nav className={clsx(styles.navSection, styles.desktopOnly)}>
                <Link href="/" className={styles.navLink}>{t('home')}</Link>
                <Link href="/work" className={styles.navLink}>{t('work')}</Link>
            </nav>

            <div className={styles.logoContainer}>
                <Logo className={styles.logo} />
            </div>

            {/* Hamburger Icon */}
            <button
                className={styles.hamburger}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span className={clsx(styles.hamburgerLine, isMenuOpen && styles.open)}></span>
                <span className={clsx(styles.hamburgerLine, isMenuOpen && styles.open)}></span>
                <span className={clsx(styles.hamburgerLine, isMenuOpen && styles.open)}></span>
            </button>

            {/* Desktop Right Nav */}
            <nav className={clsx(styles.navSection, styles.desktopOnly)}>
                <Link href="/contact" className={styles.navLink}>{t('contact')}</Link>
                <LanguageSwitcher />
            </nav>

            {/* Mobile Dropdown */}
            <div className={clsx(styles.mobileMenu, isMenuOpen && styles.menuOpen)}>
                <nav className={styles.mobileNav}>
                    <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>{t('home')}</Link>
                    <Link href="/work" className={styles.mobileNavLink} onClick={closeMenu}>{t('work')}</Link>
                    <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>{t('contact')}</Link>
                    <div className={styles.mobileLang}>
                        <LanguageSwitcher />
                    </div>
                </nav>
            </div>
        </header>
    );
}
