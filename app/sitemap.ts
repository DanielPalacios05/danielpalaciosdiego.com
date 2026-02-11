import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://danielpalaciosdiego.com';
    const locales = routing.locales;
    // Add other static pages here if they exist, e.g., '/work', '/about'
    // For now, assuming it's a single page app with sections, but if there are subpages:
    const paths = ['/'];

    const sitemap: MetadataRoute.Sitemap = [];

    paths.forEach(path => {
        locales.forEach(locale => {
            sitemap.push({
                url: `${baseUrl}/${locale}${path === '/' ? '' : path}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: path === '/' ? 1 : 0.8,
            });
        });
    });

    return sitemap;
}
