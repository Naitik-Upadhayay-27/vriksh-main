// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { Newsletter } from "@/components/newsletter"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <Newsletter />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
