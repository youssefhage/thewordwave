import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Process from "../components/Process";
import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Navbar dict={dict.nav} locale={locale} />
      <main>
        <Hero dict={dict.hero} locale={locale} />
        <Stats dict={dict.stats} />
        <Process dict={dict.process} />
        <Benefits dict={dict.benefits} />
        <Services dict={dict.services} locale={locale} />
        <Projects dict={dict.projects} locale={locale} />
        <FAQ dict={dict.faq} />
        <CTA dict={dict.cta} />
      </main>
      <Footer dict={{ ...dict.footer, nav: dict.nav }} locale={locale} />
    </>
  );
}
