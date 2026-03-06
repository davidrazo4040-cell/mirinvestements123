import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { TenantsCarousel } from "@/components/tenants-carousel"
import { SecurityBadges } from "@/components/security-badges"
import { PortfolioSection } from "@/components/portfolio-section"
import { HowItWorks } from "@/components/how-it-works"
import { WhyMIR } from "@/components/why-mir"
import { TechnologySection } from "@/components/technology-section"
import { EducationSection } from "@/components/education-section"
import { PerformanceTable } from "@/components/performance-table"
import { FAQSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <TenantsCarousel />
        <SecurityBadges />
        <PortfolioSection />
        <HowItWorks />
        <TechnologySection />
        <WhyMIR />
        <PerformanceTable />
        <EducationSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
