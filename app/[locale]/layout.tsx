import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import "@fontsource/courier-prime"
import "@fontsource/azeret-mono"
import '@fontsource-variable/buenard';
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        metadataBase: new URL('https://danielpalaciosdiego.com'),
        title: {
            template: '%s | Daniel Palacios',
            default: t('title')
        },
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: 'https://danielpalaciosdiego.com',
            siteName: 'Daniel Palacios',
            images: [
                {
                    url: '/images/hero-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Daniel Palacios'
                }
            ],
            type: 'website',
            locale: locale
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description'),
            images: ['/images/hero-image.png'],
        },
        icons: {
            icon: '/favicon.ico',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}


export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as typeof routing.locales[number])) {
        notFound();
    }


    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <NextIntlClientProvider>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
