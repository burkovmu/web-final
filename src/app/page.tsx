'use client';

import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import WorkflowSection from '@/components/WorkflowSection';

export default function Home() {
  return (
    <main className="bg-[#1d1e22]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WorkflowSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
