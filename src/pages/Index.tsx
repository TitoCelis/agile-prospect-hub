import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Services } from "@/components/Services";
import { Licitaciones } from "@/components/Licitaciones";
import { Differentiators } from "@/components/Differentiators";
import { Clients } from "@/components/Clients";
import { AboutUs } from "@/components/AboutUs";
import { QuoteForm } from "@/components/QuoteForm";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ChatwootWidget } from "@/components/ChatwootWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Licitaciones />
        <Differentiators />
        <Clients />
        <AboutUs />
        <QuoteForm />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ChatwootWidget />
    </div>
  );
};

export default Index;
