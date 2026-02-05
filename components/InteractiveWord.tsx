"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './InteractiveWord.module.css';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';

interface InteractiveWordProps {
    word: React.ReactNode;
    imageSrc: string | StaticImageData;
    caption: string;
}

export default function InteractiveWord({ word, imageSrc, caption }: InteractiveWordProps) {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => setIsVisible(!isVisible);
    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);

    return (
        <span
            className={clsx(styles.interactiveWord, "main-underline")}
            onMouseEnter={show}
            onMouseLeave={hide}
            onClick={toggle}
        >
            {word}
            <div className={clsx(styles.popup, isVisible && styles.popupVisible)}>
                <Image
                    src={imageSrc}
                    alt={caption}
                    width={100}
                    height={150}
                    className={styles.popupImage}
                />
                <span className={styles.caption}>{caption}</span>
            </div>
        </span>
    );
}
