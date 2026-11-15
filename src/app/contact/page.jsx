import ContactHero from "@/sections/contact/ContactHero";
import ContactInfo from "@/sections/contact/ContactInfo";
import ContactForm from "@/sections/contact/ContactForm";
import ContactLocation from "@/sections/contact/ContactLocation";
export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactLocation />
    </main>
  );
}