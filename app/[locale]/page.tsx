import Education from "@/components/Education";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Work from "@/components/Work";
import { useTranslations } from "next-intl";

import Contact from "@/components/Contact";

export default function HomePage() {
    return (
        <>
            <Hero />
            <TechStack />
            <Education />
            <Work />
            <Contact />
        </>
    );
}
