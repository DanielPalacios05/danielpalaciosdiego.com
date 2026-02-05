"use client";

import { useState, useRef, useEffect } from 'react';
import styles from './DownloadCV.module.css';
import { useTranslations } from 'next-intl';

export default function DownloadCV() {
    const t = useTranslations('Hero');
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <button
                className={styles.button}
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {t('downloadCv')}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}
                >
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <a
                        href="https://drive.google.com/file/d/1hwPk7TR32whaKRQzMA2f7-uPncMngVSD/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.option}
                        onClick={() => setIsOpen(false)}
                    >
                        English
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1TPOd-i9qS4qA2V8kBUgSxF8cn522ChK_/view?usp=sharing"
                        target='_blank'
                        rel="noopener noreferrer"
                        className={styles.option}
                        onClick={() => setIsOpen(false)}
                    >
                        Spanish
                    </a>
                </div>
            )}
        </div>
    );
}
